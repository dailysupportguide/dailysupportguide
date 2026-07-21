import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = process.cwd();

const rows = [
  ["2026-07-20", "Label Reading", "published", "How to Read a Serving Size Without Overthinking It", "how-to-read-a-serving-size-without-overthinking-it", "how to read serving size"],
  ["2026-07-21", "Label Reading", "draft", "The Difference Between Serving Size and Servings Per Container", "serving-size-vs-servings-per-container", "serving size vs servings per container"],
  ["2026-07-22", "Comparison Skills", "draft", "How to Compare Two Labels Without Looking at the Front Claim First", "compare-two-labels", "how to compare two labels"],
  ["2026-07-23", "Comparison Skills", "draft", "A Simple Way to Compare Cost Per Serving", "compare-cost-per-serving", "cost per serving"],
  ["2026-07-24", "Label Reading", "draft", "How to Read an Ingredient List from Top to Bottom", "how-to-read-ingredient-list", "how to read ingredient list"],
  ["2026-07-25", "Label Reading", "draft", "What Other Ingredients Means on a Supplement Facts Panel", "other-ingredients-supplement-facts", "other ingredients supplement facts"],
  ["2026-07-26", "Comparison Skills", "draft", "How to Compare Capsules, Powders, and Gummies", "capsules-vs-powders-vs-gummies", "capsules vs powders vs gummies"],
  ["2026-07-27", "Label Reading", "draft", "What Third-Party Testing Seals Can and Cannot Tell You", "third-party-testing-supplements", "third party testing supplements"],
  ["2026-07-28", "Label Reading", "draft", "How to Read Allergen Statements Without Guessing", "how-to-read-allergen-statements", "how to read allergen statements"],
  ["2026-07-29", "Comparison Skills", "draft", "A Beginner-Friendly Checklist for Comparing Daily Products", "product-comparison-checklist", "product comparison checklist"],
  ["2026-07-30", "Routine Guides", "draft", "How to Build a Screen Break That Actually Fits Your Workday", "screen-break-routine", "screen break routine"],
  ["2026-07-31", "Routine Guides", "draft", "A No-Drama Way to Reset Your Desk Between Tasks", "desk-reset-routine", "desk reset routine"],
  ["2026-08-01", "Routine Guides", "draft", "How to Use Natural Pauses Instead of Timers", "natural-pause-routine", "daily routine cues"],
  ["2026-08-02", "Label Reading", "draft", "How to Compare Caffeinated and Caffeine-Free Drink Labels", "compare-caffeine-free-drink-labels", "caffeine on drink labels"],
  ["2026-08-03", "Routine Guides", "draft", "How to Create an Evening Shutdown Cue", "evening-shutdown-routine", "evening shutdown routine"],
  ["2026-08-04", "Routine Guides", "draft", "How to Make Tomorrow Morning Easier Without a Long Routine", "simple-morning-routine-prep", "simple morning routine"],
  ["2026-08-05", "Label Reading", "draft", "How to Read Sodium and Sugar Lines Without Panic", "read-sodium-and-sugar-labels", "sodium and sugar on labels"],
  ["2026-08-06", "Comparison Skills", "draft", "How to Compare Packaged Snacks by Portion and Context", "compare-packaged-snacks", "compare snack labels"],
  ["2026-08-07", "Label Reading", "draft", "How to Look at Protein Sources in a Normal Meal", "read-protein-on-food-labels", "protein on food labels"],
  ["2026-08-08", "Routine Guides", "draft", "How to Keep Meal Decisions Simple on Busy Days", "simple-meal-decisions", "simple meal decisions"],
  ["2026-08-09", "Comparison Skills", "draft", "How to Compare Shelf-Stable Pantry Items", "compare-pantry-labels", "compare pantry items"],
  ["2026-08-10", "Label Reading", "draft", "How to Read Vegan and Plant-Based Labels Carefully", "vegan-plant-based-labels", "plant based label meaning"],
  ["2026-08-11", "Label Reading", "draft", "How to Compare Omega-3 Label Lines Without Brand Names", "compare-omega-3-labels", "omega 3 label"],
  ["2026-08-12", "Label Reading", "draft", "EPA and DHA: How to Read the Numbers on a Label", "epa-dha-label-numbers", "EPA DHA label"],
  ["2026-08-13", "Label Reading", "draft", "How to Compare Mineral Labels by Elemental Amount", "elemental-mineral-labels", "elemental mineral label"],
  ["2026-08-14", "Label Reading", "draft", "How to Compare Vitamin Labels Without Chasing Big Numbers", "compare-vitamin-labels", "vitamin label daily value"],
  ["2026-08-15", "Label Reading", "draft", "What Percent Daily Value Can and Cannot Tell You", "percent-daily-value-meaning", "percent daily value meaning"],
  ["2026-08-16", "Label Reading", "draft", "How to Read Directions for Use Without Making Assumptions", "directions-for-use-label", "directions for use label"],
  ["2026-08-17", "Comparison Skills", "draft", "How to Compare Package Size, Serving Count, and Real Cost", "package-size-serving-count-cost", "package size serving count"],
  ["2026-08-18", "Comparison Skills", "draft", "A Simple Framework for Comparing Similar Products", "compare-similar-products-framework", "compare similar products"],
  ["2026-08-19", "Comparison Skills", "draft", "How to Notice Marketing Claims Without Letting Them Lead", "read-marketing-claims-on-labels", "marketing claims on labels"],
  ["2026-08-20", "Label Reading", "draft", "How to Read Structure and Function Language Carefully", "structure-function-claims-label", "structure function claims"],
  ["2026-08-21", "Label Reading", "draft", "How to Compare Products When One Uses a Blend", "proprietary-blend-label", "proprietary blend label"],
  ["2026-08-22", "Label Reading", "draft", "How to Compare Botanical Labels by Plant Part and Form", "botanical-label-plant-part-form", "botanical supplement label"],
  ["2026-08-23", "Comparison Skills", "draft", "How to Keep a Product Comparison Notes Sheet", "product-comparison-notes", "product comparison notes"],
  ["2026-08-24", "Label Reading", "draft", "How to Decide What Information Is Missing from a Label", "missing-information-on-label", "missing information on label"],
  ["2026-08-25", "Label Reading", "draft", "How to Compare Powder Scoops Without Guessing", "powder-scoop-serving-size", "powder scoop serving size"],
  ["2026-08-26", "Label Reading", "draft", "How to Compare Gummies by Serving and Added Sugar", "gummy-serving-size-added-sugar", "gummy serving size"],
  ["2026-08-27", "Label Reading", "draft", "How to Compare Capsules by Count and Serving Size", "capsule-count-serving-size", "capsule serving size"],
  ["2026-08-28", "Routine Guides", "draft", "How to Build a Low-Friction Weekly Label Review Habit", "weekly-label-review-routine", "label review routine"],
  ["2026-08-29", "Label Reading", "draft", "How to Compare Daily Drinks by Caffeine and Serving", "daily-drink-caffeine-serving", "caffeine serving size"],
  ["2026-08-30", "Routine Guides", "draft", "How to Organize a Pantry Shelf for Easier Choices", "organize-pantry-shelf", "organize pantry shelf"],
  ["2026-08-31", "Comparison Skills", "draft", "How to Compare Breakfast Options Without a Diet Plan", "compare-breakfast-labels", "compare breakfast labels"],
  ["2026-09-01", "Label Reading", "draft", "How to Read Claims Like Natural, Clean, and Whole Food", "natural-clean-whole-food-claims", "natural clean label claims"],
  ["2026-09-02", "Comparison Skills", "draft", "How to Compare Labels When You Have a Dietary Preference", "compare-labels-dietary-preference", "dietary preference label"],
  ["2026-09-03", "Comparison Skills", "draft", "How to Read a Product Page Without Looking for a Winner", "read-product-page-facts", "how to read product page"],
  ["2026-09-04", "Comparison Skills", "draft", "How to Compare Similar Categories Without Making Health Claims", "compare-wellness-categories", "compare wellness products"],
  ["2026-09-05", "Comparison Skills", "draft", "How to Keep Product Notes Neutral and Useful", "neutral-product-notes", "product notes template"],
  ["2026-09-06", "Routine Guides", "draft", "How to Revisit a Routine After Two Weeks", "revisit-routine-after-two-weeks", "routine review"],
  ["2026-09-07", "Routine Guides", "draft", "A 10-Minute Review for Everyday Label Confidence", "ten-minute-label-review", "label reading checklist"]
];

const linkByCategory = {
  "Label Reading": ["serving-size-vs-servings-per-container", "percent-daily-value-meaning", "how-to-read-ingredient-list"],
  "Comparison Skills": ["product-comparison-checklist", "compare-cost-per-serving", "product-comparison-notes"],
  "Routine Guides": ["screen-break-routine", "evening-shutdown-routine", "weekly-label-review-routine"]
};

function summaryFor(keyword) {
  return `A neutral guide to ${keyword} so readers can compare everyday information without brand names, product picks, or medical advice.`;
}

function metaDescription(keyword, category) {
  if (category === "Routine Guides") {
    return `Build a simple ${keyword} with small steps, low-pressure prompts, and a weekly check-in you can repeat.`;
  }
  if (category === "Comparison Skills") {
    return `Use a clear ${keyword} approach to compare everyday details without brand names, hype, or product picks.`;
  }
  return `Learn ${keyword} in plain English with neutral label-reading tips, comparison questions, and practical examples.`;
}

function h2For(category, keyword) {
  if (category === "Routine Guides") {
    return [
      `Why ${keyword} is easier when it stays small`,
      "A simple routine you can repeat",
      "What to notice after one week",
      "A calm takeaway"
    ];
  }
  if (category === "Comparison Skills") {
    return [
      `Start with the facts before comparing ${keyword}`,
      "Build a side-by-side note",
      "Common comparison mistakes",
      "A calm takeaway"
    ];
  }
  return [
    `What ${keyword} means on a label`,
    "Where readers often get turned around",
    "A simple label-reading checklist",
    "A calm takeaway"
  ];
}

function faqFor(keyword) {
  return [
    `What should I know about ${keyword}?`,
    `How can I use ${keyword} for a neutral comparison?`,
    `When should I ask a qualified professional instead of guessing?`
  ];
}

const original = JSON.parse(fs.readFileSync(path.join(root, "content", "scheduled", "articles.json"), "utf8"));
const originalBySlug = new Map(original.map((article) => [article.slug, article]));
const contentContext = { window: {} };
vm.createContext(contentContext);
vm.runInContext(fs.readFileSync(path.join(root, "assets", "content.js"), "utf8"), contentContext);
const publishedBySlug = new Map((contentContext.window.DSG_CONTENT?.articles || []).map((article) => [article.slug, article]));

const articles = rows.map(([date, category, status, title, slug, primaryKeyword], index) => {
  const previous = originalBySlug.get(slug);
  const preservedStatus = previous?.status && previous.status !== "draft" ? previous.status : status;
  const article = {
    day: index + 1,
    date,
    slug,
    title,
    category,
    status: preservedStatus,
    summary: previous?.summary || summaryFor(primaryKeyword),
    seo: {
      seoTitle: `${title} | Daily Support Guide`,
      metaDescription: metaDescription(primaryKeyword, category),
      primaryKeyword,
      secondaryKeywords: [
        `${primaryKeyword} guide`,
        `${primaryKeyword} checklist`,
        `${primaryKeyword} comparison`
      ],
      searchIntent: "informational",
      h1: title,
      h2: h2For(category, primaryKeyword),
      faq: faqFor(primaryKeyword),
      internalLinks: linkByCategory[category].filter((link) => link !== slug).slice(0, 3),
      schema: ["Article", "FAQPage"],
      riskNotes: [
        "No brand names",
        "No affiliate links",
        "No product recommendations",
        "No diagnosis, treatment, dosage, cure, or prevention claims"
      ]
    },
    review:
      preservedStatus !== status && previous?.review
        ? previous.review
        : {
            internalLint: status === "published" ? "passed" : "pending",
            externalAiReview: status === "published" ? "pending_record" : "pending",
            approvedForPublishing: status === "published"
          }
  };

  const published = publishedBySlug.get(slug);
  if (published?.body) article.body = published.body;
  else if (previous?.body) article.body = previous.body;
  return article;
});

fs.writeFileSync(path.join(root, "content", "scheduled", "articles.json"), `${JSON.stringify(articles, null, 2)}\n`);

const mdRows = articles.map((article) => {
  const cells = [
    article.day,
    article.date,
    article.category,
    article.status,
    article.seo.h1,
    article.seo.primaryKeyword,
    article.slug,
    article.seo.metaDescription,
    article.seo.faq.join("<br>"),
    article.seo.internalLinks.join("<br>")
  ];
  return `| ${cells.map((cell) => String(cell).replace(/\|/g, "\\|")).join(" | ")} |`;
});

const markdown = [
  "# SEO Content Map",
  "",
  "Daily Support Guide uses this map to write, review, and schedule English-first educational articles for a United States audience.",
  "",
  "Rules: no brand names, no affiliate links, no product recommendations, no diagnosis, no treatment claims, no dosage advice, and no cure or prevention claims.",
  "",
  "| Day | Date | Category | Status | H1 | Primary Keyword | URL Slug | Meta Description | FAQ Targets | Internal Links |",
  "| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |",
  ...mdRows,
  ""
].join("\n");

fs.writeFileSync(path.join(root, "docs", "seo-content-map.md"), markdown);

console.log(`Wrote ${articles.length} SEO article records.`);
