import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = process.cwd();
const contentPath = path.join(root, "assets", "content.js");
const scheduledPath = path.join(root, "content", "scheduled", "articles.json");

const bannedPatterns = [
  /\baffiliate\b/i,
  /\bcoupon\b/i,
  /\bdiscount code\b/i,
  /\bpromo code\b/i,
  /\bbuy now\b/i,
  /\bshop now\b/i,
  /\bbest supplement\b/i,
  /\bmust[- ]?have\b/i,
  /\btreats?\s+(?:disease|condition|symptom|pain|anxiety|depression|diabetes|insomnia)\b/i,
  /\bcures?\s+(?:disease|condition|symptom|pain|anxiety|depression|diabetes|insomnia)\b/i,
  /\bprevents?\s+(?:disease|condition|symptom|pain|anxiety|depression|diabetes|insomnia)\b/i,
  /\bdiagnos(?:e|es|is)\b/i,
  /\bdosage\b/i,
  /\bAmazon\b/i,
  /\bWalmart\b/i,
  /\bTarget\b/i,
  /\biHerb\b/i,
  /\bCostco\b/i,
  /\bGNC\b/i
];

function loadPublishedContent() {
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(contentPath, "utf8"), context, { filename: contentPath });
  return context.window.DSG_CONTENT;
}

function textOfArticle(article) {
  return [
    article.title,
    article.summary,
    ...(article.body || []).map((block) => block.text)
  ].filter(Boolean).join("\n");
}

function checkText(label, text, errors) {
  for (const pattern of bannedPatterns) {
    if (pattern.test(text)) {
      errors.push(`${label}: banned pattern ${pattern}`);
    }
  }
}

const errors = [];
const published = loadPublishedContent();
const scheduled = JSON.parse(fs.readFileSync(scheduledPath, "utf8"));

if (!Array.isArray(published.articles) || published.articles.length === 0) {
  errors.push("assets/content.js must include at least one published article.");
}

if (!Array.isArray(scheduled) || scheduled.length !== 50) {
  errors.push("content/scheduled/articles.json must contain exactly 50 scheduled records.");
}

for (const article of published.articles) {
  const text = textOfArticle(article);
  checkText(`published:${article.slug}`, text, errors);
  if (!/general education only/i.test(text) || !/not medical advice/i.test(text)) {
    errors.push(`published:${article.slug}: missing required education-only and not-medical-advice disclaimer.`);
  }
}

for (const article of scheduled) {
  const text = textOfArticle(article);
  checkText(`scheduled:${article.slug || article.title}`, text, errors);
  if (!article.seo) {
    errors.push(`scheduled:${article.slug}: missing seo object.`);
  } else {
    for (const key of ["seoTitle", "metaDescription", "primaryKeyword", "h1"]) {
      if (!article.seo[key]) errors.push(`scheduled:${article.slug}: missing seo.${key}.`);
    }
    if (!Array.isArray(article.seo.secondaryKeywords) || article.seo.secondaryKeywords.length < 3) {
      errors.push(`scheduled:${article.slug}: needs at least 3 secondary keywords.`);
    }
    if (!Array.isArray(article.seo.h2) || article.seo.h2.length < 3) {
      errors.push(`scheduled:${article.slug}: needs at least 3 H2 targets.`);
    }
    if (!Array.isArray(article.seo.faq) || article.seo.faq.length < 3) {
      errors.push(`scheduled:${article.slug}: needs at least 3 FAQ targets.`);
    }
    if (!Array.isArray(article.seo.internalLinks)) {
      errors.push(`scheduled:${article.slug}: missing internal link targets.`);
    }
  }
  if ((article.status === "approved" || article.status === "published") && (!article.body || article.body.length < 3)) {
    errors.push(`scheduled:${article.slug}: approved/published articles must include a full body.`);
  }
  if ((article.status === "approved" || article.status === "published") && (!/general education only/i.test(text) || !/not medical advice/i.test(text))) {
    errors.push(`scheduled:${article.slug}: approved/published article missing required disclaimer.`);
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("Content lint passed.");
