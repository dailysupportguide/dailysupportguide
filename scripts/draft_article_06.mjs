import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const scheduledPath = path.join(root, "content", "scheduled", "articles.json");
const reviewPath = path.join(
  root,
  "docs",
  "reviews",
  "2026-07-25-other-ingredients-supplement-facts-review.md"
);

const slug = "other-ingredients-supplement-facts";

const body = [
  {
    type: "p",
    text:
      "The phrase Other Ingredients can feel like a small side note on a supplement label, but it is worth reading slowly. It usually points to ingredients that are part of the product but are not being presented as the main dietary ingredients in the Supplement Facts panel."
  },
  {
    type: "p",
    text:
      "That does not make the line good or bad by itself. It simply means there is more label information to notice before comparing two products or deciding what questions to ask next."
  },
  {
    type: "h2",
    text: "Separate Supplement Facts from Other Ingredients"
  },
  {
    type: "p",
    text:
      "The FDA explains that dietary supplement labels use a Supplement Facts panel for nutrition labeling. That panel includes items such as serving size, servings per container, dietary ingredients, and amounts per serving when required."
  },
  {
    type: "p",
    text:
      "Other Ingredients is different. FDA guidance explains that some source ingredients may appear inside the Supplement Facts panel, while ingredients not listed there may appear in an ingredient statement. When some ingredients are identified in the nutrition label, that ingredient statement may be labeled Other Ingredients."
  },
  {
    type: "h2",
    text: "Notice what kinds of ingredients appear there"
  },
  {
    type: "p",
    text:
      "Other Ingredients may include items used for form, texture, flavor, color, stability, or manufacturing. FDA materials give examples such as fillers, binders, excipients, preservatives, sweeteners, colors, and flavorings."
  },
  {
    type: "p",
    text:
      "A neutral way to read the line is to ask what each item appears to be doing. Is it a capsule material, a sweetener, a flavor, a color, a binder, or something you do not recognize yet? The answer does not need to be dramatic. It can simply become a note to verify later."
  },
  {
    type: "h2",
    text: "Do not treat the list as a quality score"
  },
  {
    type: "p",
    text:
      "A short Other Ingredients list is not automatically better, and a longer one is not automatically worse. Different product forms often need different supporting ingredients. A tablet, capsule, gummy, liquid, and powder may each use a different format."
  },
  {
    type: "p",
    text:
      "It is also useful to remember that FDA does not approve dietary supplements for safety and effectiveness before they are sold. That makes careful label reading useful, but it does not turn the reader into a laboratory or a medical reviewer."
  },
  {
    type: "h2",
    text: "Use a simple comparison note"
  },
  {
    type: "p",
    text:
      "When comparing supplement labels, write down three separate things: the main dietary ingredients in the Supplement Facts panel, the Other Ingredients line, and any questions you need to verify from a reliable source. Keeping those notes separate prevents a supporting ingredient from being mistaken for the main label information."
  },
  {
    type: "p",
    text:
      "If the label raises an allergy, sensitivity, pregnancy, medication, medical condition, or personal nutrition question, do not guess from the ingredient list alone. Ask a qualified professional before relying on the product."
  },
  {
    type: "h2",
    text: "A calm takeaway"
  },
  {
    type: "p",
    text:
      "Other Ingredients on a supplement label is a label-reading clue, not a verdict. Read it after the Supplement Facts panel, notice the role of each item when you can, save unclear names for later verification, and keep health-related decisions with qualified professionals. This article is general education only and is not medical advice."
  }
];

const scheduled = JSON.parse(fs.readFileSync(scheduledPath, "utf8"));
const article = scheduled.find((item) => item.slug === slug);

if (!article) {
  throw new Error(`Could not find scheduled article: ${slug}`);
}

article.status = "internal_pass";
article.review = {
  ...article.review,
  internalLint: "passed",
  externalAiReview: "pending",
  approvedForPublishing: false
};
article.body = body;
article.seo = {
  ...article.seo,
  metaDescription:
    "Learn what Other Ingredients means on a Supplement Facts label with neutral, brand-free tips for reading supplement labels.",
  primaryKeyword: "other ingredients supplement facts",
  secondaryKeywords: [
    "other ingredients on supplement label",
    "Supplement Facts Other Ingredients",
    "supplement label ingredients"
  ],
  h2: [
    "Separate Supplement Facts from Other Ingredients",
    "Notice what kinds of ingredients appear there",
    "Do not treat the list as a quality score",
    "Use a simple comparison note",
    "A calm takeaway"
  ],
  faq: [
    "What does Other Ingredients mean on a supplement label?",
    "Are Other Ingredients the same as dietary ingredients?",
    "When should I ask a qualified professional instead of guessing?"
  ],
  internalLinks: [
    "how-to-read-a-serving-size-without-overthinking-it",
    "serving-size-vs-servings-per-container",
    "how-to-read-ingredient-list",
    "compare-two-labels"
  ]
};

fs.writeFileSync(scheduledPath, `${JSON.stringify(scheduled, null, 2)}\n`);

const bodyMarkdown = body
  .map((block) => {
    if (block.type === "h2") return `## ${block.text}`;
    return block.text;
  })
  .join("\n\n");

const reviewPacket = `# Article 06 Review Packet

## Project Goal Header

Current big goal: Daily Support Guide must reach A+ on quiz, homepage, SEO foundation, content library, trust/compliance, and HTTPS/security before Phase 7 affiliate revenue can begin.

Current project state: Article 06 is drafted and internally linted. It is not approved for publishing.

Current step: External four-AI review for one scheduled article.

Distance to goal: This packet needs ChatGPT, Gemini, Claude, and Grok review. The article can only move from \`internal_pass\` to \`approved\` after all four pass or all actionable comments are resolved and resubmitted.

Non-drift boundaries:
- English-first content for a U.S. audience.
- Brand-neutral. No product names, retailer names, coupons, affiliate links, or product picks.
- General education only. No diagnosis, treatment, cure, prevention, dosage, or individualized nutrition advice.
- No Phase 7 monetization language. Affiliate revenue remains locked until the first six readiness categories are A+.
- Keep changes scoped to this article unless a reviewer identifies a concrete safety, compliance, SEO, or clarity issue.

## Article Metadata

- Slug: \`${slug}\`
- Title: What Other Ingredients Means on a Supplement Facts Panel
- Scheduled date: 2026-07-25
- Category: Label Reading
- Status: internal_pass
- Approved for publishing: false
- Primary keyword: other ingredients supplement facts
- Meta description: Learn what Other Ingredients means on a Supplement Facts label with neutral, brand-free tips for reading supplement labels.

## Source Notes

- FDA dietary supplement labeling guide: the Supplement Facts panel is the nutrition label for dietary supplements and includes serving size, servings per container, dietary ingredients, and amounts per serving when required.
- FDA dietary supplement labeling guide: ingredients that are sources of dietary ingredients may appear in the Supplement Facts panel; when listed there, they do not have to be repeated in the ingredient statement.
- FDA dietary supplement labeling guide: ingredient statements may be labeled Other Ingredients when some ingredients are identified in the nutrition label.
- FDA dietary supplement labeling guide and FDA Q&A: ingredients can include binders, colors, excipients, fillers, flavors, sweeteners, preservatives, and similar supporting ingredients.
- FDA consumer update: FDA does not approve dietary supplements for safety and effectiveness before they are sold.

Sources:
- https://www.fda.gov/food/dietary-supplements-guidance-documents-regulatory-information/dietary-supplement-labeling-guide-chapter-v-ingredient-labeling
- https://www.fda.gov/food/dietary-supplements-guidance-documents-regulatory-information/dietary-supplement-labeling-guide-chapter-iv-nutrition-labeling
- https://www.fda.gov/food/information-consumers-using-dietary-supplements/questions-and-answers-dietary-supplements
- https://www.fda.gov/consumers/consumer-updates/fda-101-dietary-supplements

## Internal Safety Checklist

- [x] No brand names.
- [x] No retailer names.
- [x] No affiliate, coupon, discount, or buying language.
- [x] No product recommendations.
- [x] No medical diagnosis, treatment, cure, prevention, or dosage language.
- [x] Includes general education only and not medical advice disclaimer.
- [x] Treats Other Ingredients as label information, not as a quality score or recommendation.

## External Reviewer Prompt

Review this article for the current step only. Return one of:

- \`PASS\`: no required changes.
- \`CHANGES_REQUIRED\`: list only concrete safety, compliance, factual, SEO, or clarity issues that must be fixed before approval.

Do not suggest new features, brand recommendations, affiliate strategy, medical advice, or broad refactors. Keep feedback scoped to this article.

## Article Draft

# What Other Ingredients Means on a Supplement Facts Panel

${bodyMarkdown}
`;

fs.mkdirSync(path.dirname(reviewPath), { recursive: true });
fs.writeFileSync(reviewPath, reviewPacket);

console.log(`Drafted ${slug}`);
console.log(`Updated ${path.relative(root, scheduledPath)}`);
console.log(`Wrote ${path.relative(root, reviewPath)}`);
