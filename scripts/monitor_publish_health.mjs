import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = process.cwd();
const start = process.env.MONITOR_START || "2026-08-17";
const end = process.env.MONITOR_END || "2026-08-26";
const contentPath = path.join(root, "assets", "content.js");
const sitemapPath = path.join(root, "sitemap.xml");

function readJsonArray(relativePath) {
  const value = JSON.parse(fs.readFileSync(path.join(root, relativePath), "utf8"));
  if (!Array.isArray(value)) throw new Error(`${relativePath} must be a JSON array.`);
  return value;
}

function loadContent() {
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(contentPath, "utf8"), context, { filename: contentPath });
  return context.window.DSG_CONTENT || { articles: [] };
}

function datesBetween(first, last) {
  const dates = [];
  const cursor = new Date(`${first}T00:00:00Z`);
  const final = new Date(`${last}T00:00:00Z`);
  while (cursor <= final) {
    dates.push(cursor.toISOString().slice(0, 10));
    cursor.setUTCDate(cursor.getUTCDate() + 1);
  }
  return dates;
}

function countByStatus(items) {
  return items.reduce((counts, item) => {
    counts[item.status] = (counts[item.status] || 0) + 1;
    return counts;
  }, {});
}

function sitemapUrlCount() {
  if (!fs.existsSync(sitemapPath)) return 0;
  return (fs.readFileSync(sitemapPath, "utf8").match(/<loc>/g) || []).length;
}

const mainQueue = readJsonArray("content/scheduled/articles.json");
const nutrientQueue = readJsonArray("content/scheduled/nutrient-articles.json");
const publicContent = loadContent();
const publicSlugs = new Set(publicContent.articles.map((article) => article.slug));
const sitemap = fs.existsSync(sitemapPath) ? fs.readFileSync(sitemapPath, "utf8") : "";

const allQueues = [
  ["main", mainQueue],
  ["nutrient", nutrientQueue]
];

const latest = [...publicContent.articles]
  .sort((a, b) => `${b.date || ""}${b.slug}`.localeCompare(`${a.date || ""}${a.slug}`))
  .slice(0, 8);

const missingLive = [];
const missingSitemap = [];
for (const [source, queue] of allQueues) {
  for (const item of queue.filter((article) => article.status === "published")) {
    if (!publicSlugs.has(item.slug)) missingLive.push(`${source}: ${item.slug}`);
    const loc = `https://dailysupportguide.com/article.html?slug=${encodeURIComponent(item.slug)}`;
    if (!sitemap.includes(loc)) missingSitemap.push(`${source}: ${item.slug}`);
  }
}

console.log("# Daily Support Guide Publish Health");
console.log("");
console.log(`Window: ${start} to ${end}`);
console.log(`Public articles: ${publicContent.articles.length}`);
console.log(`Sitemap URLs: ${sitemapUrlCount()}`);
console.log(`Main queue: ${JSON.stringify(countByStatus(mainQueue))}`);
console.log(`Nutrient queue: ${JSON.stringify(countByStatus(nutrientQueue))}`);
console.log("");
console.log("## Release Window");
console.log("");
console.log("| Date | Main published | Main approved | Nutrient published | Nutrient approved | Total due/published |");
console.log("| --- | ---: | ---: | ---: | ---: | ---: |");
for (const date of datesBetween(start, end)) {
  const mainPublished = mainQueue.filter((item) => item.date === date && item.status === "published").length;
  const mainApproved = mainQueue.filter((item) => item.date === date && item.status === "approved").length;
  const nutrientPublished = nutrientQueue.filter((item) => item.date === date && item.status === "published").length;
  const nutrientApproved = nutrientQueue.filter((item) => item.date === date && item.status === "approved").length;
  const total = mainPublished + mainApproved + nutrientPublished + nutrientApproved;
  console.log(`| ${date} | ${mainPublished} | ${mainApproved} | ${nutrientPublished} | ${nutrientApproved} | ${total} |`);
}
console.log("");
console.log("## Latest Public Articles");
console.log("");
for (const article of latest) {
  console.log(`- ${article.date} | ${article.category} | ${article.title}`);
}
console.log("");
console.log("## Checks");
console.log("");
console.log(`- Published queue items missing from assets/content.js: ${missingLive.length || "none"}`);
missingLive.forEach((item) => console.log(`  - ${item}`));
console.log(`- Published queue items missing from sitemap.xml: ${missingSitemap.length || "none"}`);
missingSitemap.forEach((item) => console.log(`  - ${item}`));

if (missingLive.length || missingSitemap.length) {
  process.exitCode = 1;
}
