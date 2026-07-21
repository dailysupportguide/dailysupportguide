import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const requiredPages = [
  "index.html",
  "article.html",
  "about.html",
  "privacy.html",
  "contact.html",
  "editorial-policy.html"
];

const errors = [];

function hasCanonical(html) {
  return /<link\b[^>]*rel="canonical"[^>]*href="https:\/\/dailysupportguide\.com\//i.test(html)
    || /<link\b[^>]*href="https:\/\/dailysupportguide\.com\/[^"]*"[^>]*rel="canonical"/i.test(html);
}

for (const page of requiredPages) {
  const file = path.join(root, page);
  if (!fs.existsSync(file)) {
    errors.push(`Missing required public page: ${page}`);
    continue;
  }

  const html = fs.readFileSync(file, "utf8");
  if (!/<title>[^<]+<\/title>/i.test(html)) errors.push(`${page}: missing title.`);
  if (!/<meta name="description" content="[^"]+"/i.test(html)) errors.push(`${page}: missing meta description.`);
  if (!hasCanonical(html)) errors.push(`${page}: missing canonical URL.`);
}

const index = fs.readFileSync(path.join(root, "index.html"), "utf8");
for (const href of ["about.html", "privacy.html", "contact.html", "editorial-policy.html"]) {
  if (!index.includes(`href="${href}"`)) errors.push(`index.html: missing trust footer link to ${href}.`);
}

const governanceFiles = [
  path.join(root, "AGENTS.md"),
  path.join(root, "docs", "execution-plan.md"),
  path.join(root, "docs", "readiness-gate.md")
];

for (const file of governanceFiles) {
  const text = fs.readFileSync(file, "utf8");
  if (!/A\+/.test(text)) errors.push(`${path.relative(root, file)}: missing A+ gate language.`);
  if (!/Affiliate revenue.*locked|monetization.*locked|locked until/i.test(text)) {
    errors.push(`${path.relative(root, file)}: missing locked monetization boundary.`);
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("Site gate lint passed.");
