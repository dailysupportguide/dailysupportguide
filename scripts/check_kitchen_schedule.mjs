import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import vm from 'node:vm';
import { spawnSync } from 'node:child_process';

// Exercise the real publisher only in temporary copies, never the live content.
const root = process.cwd();
const scratch = fs.mkdtempSync(path.join(os.tmpdir(), 'dsg-kitchen-schedule-'));
const queuePath = 'content/scheduled/kitchen-systems-articles.json';
const legacyPaths = ['articles.json', 'nutrient-articles.json', 'food-rhythm-articles.json']
  .map(name => `content/scheduled/${name}`);
const publisherPath = 'scripts/publish_due_articles.mjs';
const originalContent = loadContent(root);
const queue = JSON.parse(fs.readFileSync(path.join(root, queuePath), 'utf8'));
assert.equal(queue.length, 20);
assert.equal(new Set(queue.map(article => article.date)).size, 20);
assert.equal(queue[0].date, '2026-11-25');
assert.equal(queue.at(-1).date, '2026-12-14');
for (const article of queue) {
  assert.equal(article.status, 'approved');
  assert.equal(article.review.approvedForPublishing, true);
  assert.equal(article.externalAiReview.status, 'passed');
}

function loadContent(directory) {
  const context = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(directory, 'assets/content.js'), 'utf8'), context);
  return JSON.parse(JSON.stringify(context.window.DSG_CONTENT));
}
function fixture(name) {
  const directory = path.join(scratch, name);
  for (const relative of ['assets/content.js', publisherPath, queuePath, ...legacyPaths]) {
    fs.mkdirSync(path.dirname(path.join(directory, relative)), { recursive: true });
    fs.copyFileSync(path.join(root, relative), path.join(directory, relative));
  }
  fs.writeFileSync(path.join(directory, 'clock.mjs'), `
const RealDate = Date;
globalThis.Date = class extends RealDate {
  constructor(...args) { super(...(args.length ? args : [process.env.CHECK_NOW])); }
  static now() { return new RealDate(process.env.CHECK_NOW).getTime(); }
};
`);
  return directory;
}
function run(directory, timestamp, expectedCount) {
  const result = spawnSync(process.execPath, ['--import', './clock.mjs', publisherPath], {
    cwd: directory, encoding: 'utf8',
    env: { ...process.env, CHECK_NOW: timestamp, PUBLISH_ANYTIME: '0', GITHUB_OUTPUT: '' }
  });
  assert.equal(result.status, 0, result.stderr);
  if (expectedCount !== null) assert.match(result.stdout, new RegExp(`Published ${expectedCount} article\\(s\\)\\.`));
  else assert.match(result.stdout, /before 7/);
  return loadContent(directory);
}
try {
  const daily = fixture('daily');
  run(daily, '2026-11-24T13:00:00Z', 0);
  run(daily, '2026-11-25T11:59:00Z', null);
  for (let day = 1; day <= 20; day++) {
    const date = new Date(Date.UTC(2026, 10, 24 + day)).toISOString().slice(0, 10);
    const published = run(daily, `${date}T12:00:00Z`, 1);
    assert.equal(published.articles.length, originalContent.articles.length + day);
    assert.equal(published.articles[0].slug, queue[day - 1].slug);
    assert.deepEqual(published.articles[0].body, queue[day - 1].body);
    run(daily, `${date}T13:00:00Z`, 0);
  }
  const finished = JSON.parse(fs.readFileSync(path.join(daily, queuePath), 'utf8'));
  assert(finished.every(article => article.status === 'published'));
  assert.equal(new Set(finished.map(article => article.publishedOn)).size, 20);
  const finalContent = loadContent(daily);
  const originalSlugs = new Set(originalContent.articles.map(article => article.slug));
  assert.deepEqual(finalContent.articles.filter(article => originalSlugs.has(article.slug)), originalContent.articles);
  for (const relative of legacyPaths) {
    assert.equal(fs.readFileSync(path.join(daily, relative), 'utf8'), fs.readFileSync(path.join(root, relative), 'utf8'));
  }
  const delayed = fixture('delayed');
  const catchup = run(delayed, '2026-11-30T12:00:00Z', 1);
  assert.equal(catchup.articles[0].date, '2026-11-30');
  run(delayed, '2026-11-30T13:00:00Z', 0);
  run(delayed, '2026-12-01T12:00:00Z', 1);
  const workflow = fs.readFileSync(path.join(root, '.github/workflows/publish-daily.yml'), 'utf8');
  assert.match(workflow.split('\n').find(line => line.includes('git add ')), /content\/scheduled\/kitchen-systems-articles\.json/);
  console.log('Kitchen schedule checks passed: 20 daily publications; same-day repeats; time gate; delayed-run limit; unchanged legacy content; queue persistence.');
} finally {
  fs.rmSync(scratch, { recursive: true, force: true });
}
