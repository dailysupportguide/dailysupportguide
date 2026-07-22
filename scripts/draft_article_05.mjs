import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const scheduledPath = path.join(root, "content", "scheduled", "articles.json");
const reviewPath = path.join(
  root,
  "docs",
  "reviews",
  "2026-07-24-how-to-read-ingredient-list-review.md"
);

const slug = "how-to-read-ingredient-list";

const body = [
  {
    type: "p",
    text:
      "An ingredient list is easy to skim and surprisingly useful when it is read in order. It does not tell the whole story of a food or supplement, but it can show what the product is made from and where a few important details may be hiding."
  },
  {
    type: "p",
    text:
      "A calm reading habit starts at the top, moves line by line, and keeps the ingredient list separate from front-of-package claims. The goal is not to judge a product from one word. The goal is to notice what the label actually says before making a comparison."
  },
  {
    type: "h2",
    text: "Start with the order of ingredients"
  },
  {
    type: "p",
    text:
      "For many labels, ingredients are listed in descending order by weight. That means the first ingredients usually make up more of the product than ingredients that appear later. This can help you understand the basic makeup of the product before looking at marketing language or package design."
  },
  {
    type: "p",
    text:
      "This order is still a starting point, not a complete scorecard. A shorter list is not automatically better, and a longer list is not automatically worse. The list is a map of what is present, not a personalized recommendation."
  },
  {
    type: "h2",
    text: "Look for names you need to recognize"
  },
  {
    type: "p",
    text:
      "Read slowly enough to catch repeated themes, familiar food names, color additives, sweeteners, flavors, binders, fillers, or preservatives. On dietary supplements, the FDA explains that some ingredients may appear in the Supplement Facts panel, while other ingredients such as fillers, binders, excipients, preservatives, sweeteners, and flavorings may appear in an Other Ingredients list."
  },
  {
    type: "p",
    text:
      "If an ingredient name is unfamiliar, treat it as something to look up from a reliable source rather than something to fear or ignore. A neutral note can simply say: ingredient name unclear, check later."
  },
  {
    type: "h2",
    text: "Check allergen statements separately"
  },
  {
    type: "p",
    text:
      "Allergen information deserves its own pass. The FDA says food labels must identify the food source of major food allergens used to make the food. That information may appear in parentheses after an ingredient name or in a Contains statement near the ingredient list."
  },
  {
    type: "p",
    text:
      "If you have an allergy, sensitivity, medical condition, pregnancy concern, medication question, or personal nutrition plan, do not rely on a quick scan. Use the label as a starting point and ask a qualified professional when the decision could affect your health."
  },
  {
    type: "h2",
    text: "Use a simple comparison note"
  },
  {
    type: "p",
    text:
      "When comparing two labels, write down the first few ingredients, any allergen statement, and any ingredient names you want to verify later. Keep this note separate from price, serving size, and nutrition numbers so one detail does not quietly take over the whole decision."
  },
  {
    type: "p",
    text:
      "This is especially useful when two products look similar on the front. A side-by-side ingredient note can reveal whether they are built from similar base ingredients or simply presented in a similar way."
  },
  {
    type: "h2",
    text: "A calm takeaway"
  },
  {
    type: "p",
    text:
      "To read an ingredient list from top to bottom, start with order, notice names you need to recognize, check allergen statements separately, and save unclear items for later verification. This article is general education only and is not medical advice."
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
    "Learn how to read an ingredient list in plain English with neutral label-reading tips, comparison questions, and practical examples.",
  primaryKeyword: "how to read an ingredient list",
  secondaryKeywords: [
    "ingredient list order",
    "ingredient list checklist",
    "how to compare ingredient lists"
  ],
  h2: [
    "Start with the order of ingredients",
    "Look for names you need to recognize",
    "Check allergen statements separately",
    "Use a simple comparison note",
    "A calm takeaway"
  ],
  faq: [
    "Why does ingredient order matter?",
    "How should I handle unfamiliar ingredient names?",
    "When should I ask a qualified professional instead of guessing?"
  ],
  internalLinks: [
    "how-to-read-a-serving-size-without-overthinking-it",
    "serving-size-vs-servings-per-container",
    "compare-two-labels",
    "compare-cost-per-serving"
  ]
};

fs.writeFileSync(scheduledPath, `${JSON.stringify(scheduled, null, 2)}\n`);

const bodyMarkdown = body
  .map((block) => {
    if (block.type === "h2") return `## ${block.text}`;
    return block.text;
  })
  .join("\n\n");

const reviewPacket = `# Article 05 Review Packet

## Project Goal Header

Current big goal: Daily Support Guide must reach A+ on quiz, homepage, SEO foundation, content library, trust/compliance, and HTTPS/security before Phase 7 affiliate revenue can begin.

Current project state: Article 05 is drafted and internally linted. It is not approved for publishing.

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
- Title: How to Read an Ingredient List from Top to Bottom
- Scheduled date: 2026-07-24
- Category: Label Reading
- Status: internal_pass
- Approved for publishing: false
- Primary keyword: how to read an ingredient list
- Meta description: Learn how to read an ingredient list in plain English with neutral label-reading tips, comparison questions, and practical examples.

## Source Notes

- FDA dietary supplement labeling guide: ingredient lists are listed in descending order of predominance by weight.
- FDA dietary supplement Q&A: dietary supplements may include dietary ingredients and other ingredients; other ingredients can include fillers, binders, excipients, preservatives, sweeteners, and flavorings.
- FDA dietary supplement labeling guide: when some source ingredients are identified in the Supplement Facts panel, the ingredient statement may be labeled Other Ingredients.
- FDA food allergy page: labels must identify the food source of major food allergens used to make the food, either in parentheses after the ingredient name or in a Contains statement.

Sources:
- https://www.fda.gov/food/dietary-supplements-guidance-documents-regulatory-information/dietary-supplement-labeling-guide-chapter-v-ingredient-labeling
- https://www.fda.gov/food/information-consumers-using-dietary-supplements/questions-and-answers-dietary-supplements
- https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/food-allergies

## Internal Safety Checklist

- [x] No brand names.
- [x] No retailer names.
- [x] No affiliate, coupon, discount, or buying language.
- [x] No product recommendations.
- [x] No medical diagnosis, treatment, cure, prevention, or dosage language.
- [x] Includes general education only and not medical advice disclaimer.
- [x] Treats ingredient-list reading as an information habit, not a recommendation.

## External Reviewer Prompt

Review this article for the current step only. Return one of:

- \`PASS\`: no required changes.
- \`CHANGES_REQUIRED\`: list only concrete safety, compliance, factual, SEO, or clarity issues that must be fixed before approval.

Do not suggest new features, brand recommendations, affiliate strategy, medical advice, or broad refactors. Keep feedback scoped to this article.

## Article Draft

# How to Read an Ingredient List from Top to Bottom

${bodyMarkdown}
`;

fs.mkdirSync(path.dirname(reviewPath), { recursive: true });
fs.writeFileSync(reviewPath, reviewPacket);

console.log(`Drafted ${slug}`);
console.log(`Updated ${path.relative(root, scheduledPath)}`);
console.log(`Wrote ${path.relative(root, reviewPath)}`);
