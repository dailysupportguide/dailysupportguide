import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = process.cwd();
const site = "https://dailysupportguide.com";
const contentPath = path.join(root, "assets", "content.js");

function loadContent() {
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(contentPath, "utf8"), context, { filename: contentPath });
  return context.window.DSG_CONTENT || { articles: [] };
}

function entry(loc, lastmod, priority = "0.7") {
  return [
    "  <url>",
    `    <loc>${loc}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    "    <changefreq>weekly</changefreq>",
    `    <priority>${priority}</priority>`,
    "  </url>"
  ].join("\n");
}

const today = new Date().toISOString().slice(0, 10);
const content = loadContent();
const urls = [
  entry(`${site}/index.html`, today, "1.0"),
  entry(`${site}/about.html`, today, "0.6"),
  entry(`${site}/privacy.html`, today, "0.5"),
  entry(`${site}/contact.html`, today, "0.5"),
  entry(`${site}/editorial-policy.html`, today, "0.6"),
  ...content.articles.map((article) =>
    entry(`${site}/article.html?slug=${encodeURIComponent(article.slug)}`, article.date || today, "0.8")
  )
];

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls,
  "</urlset>",
  ""
].join("\n");

fs.writeFileSync(path.join(root, "sitemap.xml"), sitemap);

const robots = [
  "User-agent: *",
  "Allow: /",
  `Sitemap: ${site}/sitemap.xml`,
  ""
].join("\n");

fs.writeFileSync(path.join(root, "robots.txt"), robots);

console.log(`Wrote sitemap.xml with ${urls.length} URLs and robots.txt.`);
