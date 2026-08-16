import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const nutrientPath = path.join(root, "content", "scheduled", "nutrient-articles.json");

const bannedPatterns = [
  /\baffiliate\b/i,
  /\bcoupon\b/i,
  /\bdiscount code\b/i,
  /\bpromo code\b/i,
  /\bbuy now\b/i,
  /\bshop now\b/i,
  /\bbest supplement\b/i,
  /\bmust[- ]?have\b/i,
  /\btreats?\s+(?:disease|condition|symptom|pain|anxiety|depression|diabetes|insomnia|anemia)\b/i,
  /\bcures?\s+(?:disease|condition|symptom|pain|anxiety|depression|diabetes|insomnia|anemia)\b/i,
  /\bprevents?\s+(?:disease|condition|symptom|pain|anxiety|depression|diabetes|insomnia|anemia)\b/i,
  /\bdiagnos(?:e|es|is)\b/i,
  /\bdosage\b/i,
  /\bAmazon\b/i,
  /\bWalmart\b/i,
  /\bTarget\b/i,
  /\biHerb\b/i,
  /\bCostco\b/i,
  /\bGNC\b/i,
  /\byou are deficient\b/i,
  /\byou(?:'re| are) low in\b/i,
  /\bmeans you need\b/i,
  /\bshould take\b/i
];

const authorIds = new Set(["mara-lin", "nora-vale", "eli-brooks", "june-carter", "theo-grant"]);

function textOfArticle(article) {
  return [
    article.title,
    article.summary,
    ...(article.body || []).map((block) => block.text)
  ].filter(Boolean).join("\n");
}

function checkText(label, text, errors) {
  for (const pattern of bannedPatterns) {
    if (pattern.test(text)) errors.push(`${label}: banned pattern ${pattern}`);
  }
}

const errors = [];

if (!fs.existsSync(nutrientPath)) {
  console.log("No nutrient article file present.");
  process.exit(0);
}

const articles = JSON.parse(fs.readFileSync(nutrientPath, "utf8"));
if (!Array.isArray(articles)) errors.push("nutrient-articles.json must be an array.");

for (const article of articles) {
  const label = `nutrient:${article.slug || article.title}`;
  const text = textOfArticle(article);
  checkText(label, text, errors);

  if (!article.author?.id || !authorIds.has(article.author.id)) {
    errors.push(`${label}: missing recognized author.id.`);
  }
  if (!article.seo) {
    errors.push(`${label}: missing seo object.`);
  } else {
    for (const key of ["seoTitle", "metaDescription", "primaryKeyword", "h1"]) {
      if (!article.seo[key]) errors.push(`${label}: missing seo.${key}.`);
    }
    if (!Array.isArray(article.seo.secondaryKeywords) || article.seo.secondaryKeywords.length < 3) {
      errors.push(`${label}: needs at least 3 secondary keywords.`);
    }
    if (!Array.isArray(article.seo.h2) || article.seo.h2.length < 3) {
      errors.push(`${label}: needs at least 3 H2 targets.`);
    }
    if (!Array.isArray(article.seo.faq) || article.seo.faq.length < 3) {
      errors.push(`${label}: needs at least 3 FAQ targets.`);
    }
  }
  if ((article.status === "approved" || article.status === "published" || article.status === "internal_pass") && (!article.body || article.body.length < 3)) {
    errors.push(`${label}: reviewed articles must include a full body.`);
  }
  if ((article.status === "approved" || article.status === "published" || article.status === "internal_pass") && (!/general education only/i.test(text) || !/not medical advice/i.test(text))) {
    errors.push(`${label}: missing required education-only and not-medical-advice disclaimer.`);
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("Nutrient content lint passed.");
