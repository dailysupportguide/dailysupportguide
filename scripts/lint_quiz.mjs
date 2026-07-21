import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const files = [
  path.join(root, "index.html"),
  path.join(root, "assets", "app.js")
];

const bannedPatterns = [
  /\baffiliate\s+(?:deep\s+)?links?\b(?!,?\s+no\b)/i,
  /\baffiliate\s+(?:program|commission|payout|revenue)\b/i,
  /\bcoupon\b/i,
  /\bdiscount code\b/i,
  /\bpromo code\b/i,
  /\bbuy now\b/i,
  /\bshop now\b/i,
  /\bbest supplement\b/i,
  /\bmust[- ]?have\b/i,
  /\bdiagnos(?:e|es|is)\s+(?:you|your|condition|deficiency|disease)?\b/i,
  /\btreats?\s+(?:disease|condition|symptom|pain|anxiety|depression|diabetes|insomnia)\b/i,
  /\bcures?\s+(?:disease|condition|symptom|pain|anxiety|depression|diabetes|insomnia)\b/i,
  /\bprevents?\s+(?:disease|condition|symptom|pain|anxiety|depression|diabetes|insomnia)\b/i,
  /\bdosage\b/i,
  /\bAmazon\b/i,
  /\bWalmart\b/i,
  /\bTarget\b/i,
  /\biHerb\b/i,
  /\bCostco\b/i,
  /\bGNC\b/i
];

const requiredPatterns = [
  /not a product recommendation/i,
  /health assessment/i,
  /does not store your answers/i,
  /qualified professional/i,
  /no affiliate links/i,
  /no tracking analytics/i,
  /no brand recommendations/i
];

const text = files.map((file) => fs.readFileSync(file, "utf8")).join("\n");
const errors = [];

for (const pattern of bannedPatterns) {
  if (pattern.test(text)) errors.push(`Quiz text contains banned pattern: ${pattern}`);
}

for (const pattern of requiredPatterns) {
  if (!pattern.test(text)) errors.push(`Quiz text missing required boundary: ${pattern}`);
}

if (/localStorage|sessionStorage|navigator\.sendBeacon|fetch\(/.test(text)) {
  errors.push("Quiz must not store answers or send analytics in Phase 1A.");
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("Quiz lint passed.");
