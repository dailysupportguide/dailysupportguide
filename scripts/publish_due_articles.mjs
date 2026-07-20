import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = process.cwd();
const contentPath = path.join(root, "assets", "content.js");
const scheduledPath = path.join(root, "content", "scheduled", "articles.json");

function easternParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    hour12: false
  }).formatToParts(date);
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return {
    date: `${values.year}-${values.month}-${values.day}`,
    hour: Number(values.hour)
  };
}

function loadContent() {
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(contentPath, "utf8"), context, { filename: contentPath });
  return context.window.DSG_CONTENT;
}

function writeContent(content) {
  const source = `window.DSG_CONTENT = ${JSON.stringify(content, null, 2)};\n`;
  fs.writeFileSync(contentPath, source);
}

const now = easternParts();
if (now.hour !== 7 && process.env.PUBLISH_ANYTIME !== "1") {
  console.log(`Not publishing because America/New_York hour is ${now.hour}, not 7.`);
  process.exit(0);
}

const content = loadContent();
const scheduled = JSON.parse(fs.readFileSync(scheduledPath, "utf8"));
const existing = new Set(content.articles.map((article) => article.slug));
let publishedCount = 0;

for (const article of scheduled) {
  if (article.status !== "approved") continue;
  if (article.date > now.date) continue;
  if (existing.has(article.slug)) {
    article.status = "published";
    continue;
  }

  content.articles.unshift({
    slug: article.slug,
    date: article.date,
    category: article.category,
    title: article.title,
    summary: article.summary,
    body: article.body
  });
  article.status = "published";
  existing.add(article.slug);
  publishedCount += 1;
}

if (publishedCount > 0) {
  writeContent(content);
  fs.writeFileSync(scheduledPath, `${JSON.stringify(scheduled, null, 2)}\n`);
}

console.log(`Published ${publishedCount} article(s).`);
