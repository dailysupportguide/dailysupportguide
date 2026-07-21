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
const existing = new Map(content.articles.map((article) => [article.slug, article]));
let publishedCount = 0;
let changed = false;

for (const article of scheduled) {
  const plannedArticle = content.plannedArticles?.find((item) => item.day === article.day);
  if (plannedArticle && plannedArticle.status !== article.status) {
    plannedArticle.status = article.status;
    changed = true;
  }

  if (article.status === "published" && existing.has(article.slug)) {
    const existingArticle = existing.get(article.slug);
    if (article.seo && !existingArticle.seo) {
      existingArticle.seo = article.seo;
      changed = true;
    }
    continue;
  }

  if (article.status !== "approved") continue;
  if (article.date > now.date) continue;
  if (existing.has(article.slug)) {
    const existingArticle = existing.get(article.slug);
    if (article.seo && !existingArticle.seo) {
      existingArticle.seo = article.seo;
      changed = true;
    }
    article.status = "published";
    if (plannedArticle) plannedArticle.status = "published";
    changed = true;
    continue;
  }

  const publishedArticle = {
    slug: article.slug,
    date: article.date,
    category: article.category,
    title: article.title,
    summary: article.summary,
    seo: article.seo,
    body: article.body
  };
  content.articles.unshift(publishedArticle);
  article.status = "published";
  if (plannedArticle) plannedArticle.status = "published";
  existing.set(article.slug, publishedArticle);
  publishedCount += 1;
  changed = true;
}

if (changed) {
  writeContent(content);
  fs.writeFileSync(scheduledPath, `${JSON.stringify(scheduled, null, 2)}\n`);
}

console.log(`Published ${publishedCount} article(s).`);
