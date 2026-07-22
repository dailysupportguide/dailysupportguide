import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const requiredPages = [
  "index.html",
  "article.html",
  "about.html",
  "privacy.html",
  "contact.html",
  "editorial-policy.html",
  "sitemap.xml",
  "robots.txt"
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

  if (page === "sitemap.xml" || page === "robots.txt") continue;

  const html = fs.readFileSync(file, "utf8");
  if (!/<title>[^<]+<\/title>/i.test(html)) errors.push(`${page}: missing title.`);
  if (!/<meta name="description" content="[^"]+"/i.test(html)) errors.push(`${page}: missing meta description.`);
  if (!hasCanonical(html)) errors.push(`${page}: missing canonical URL.`);
}

const sitemap = fs.readFileSync(path.join(root, "sitemap.xml"), "utf8");
for (const loc of [
  "https://dailysupportguide.com/index.html",
  "https://dailysupportguide.com/about.html",
  "https://dailysupportguide.com/privacy.html",
  "https://dailysupportguide.com/contact.html",
  "https://dailysupportguide.com/editorial-policy.html",
  "https://dailysupportguide.com/article.html?slug=serving-size-vs-servings-per-container",
  "https://dailysupportguide.com/article.html?slug=how-to-read-a-serving-size-without-overthinking-it"
]) {
  if (!sitemap.includes(loc)) errors.push(`sitemap.xml: missing ${loc}.`);
}

const robots = fs.readFileSync(path.join(root, "robots.txt"), "utf8");
if (!robots.includes("Sitemap: https://dailysupportguide.com/sitemap.xml")) {
  errors.push("robots.txt: missing sitemap directive.");
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
