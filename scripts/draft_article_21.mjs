import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const scheduledPath = path.join(root, "content", "scheduled", "articles.json");
const reviewPath = path.join(
  root,
  "docs",
  "reviews",
  "2026-08-09-compare-pantry-labels-review.md"
);

const slug = "compare-pantry-labels";

const body = [
  {
    type: "p",
    text:
      "Shelf-stable pantry items can look easy to compare because they sit in the same cabinet. A calmer comparison starts with the label, the serving size, the package condition, and how the item would actually be used."
  },
  {
    type: "p",
    text:
      "This guide is about how to compare pantry items in a neutral way. It does not rank brands, recommend products, or replace food safety or medical advice from a qualified source."
  },
  {
    type: "h2",
    text: "Start by comparing similar pantry items"
  },
  {
    type: "p",
    text:
      "Compare similar items first: canned vegetables with canned vegetables, soups with soups, grains with grains, shelf-stable cartons with shelf-stable cartons, and sauces with sauces. Different pantry categories can have very different serving sizes, ingredients, and uses."
  },
  {
    type: "p",
    text:
      "A narrow comparison is easier to trust. Instead of asking which pantry item is best, ask what the label and package show for two items that would play a similar role."
  },
  {
    type: "h2",
    text: "Check serving size and servings per container"
  },
  {
    type: "p",
    text:
      "FDA label guidance says to first look at servings per container and serving size. Serving sizes are standardized to make similar foods easier to compare, and serving size is not a recommendation for how much to eat or drink."
  },
  {
    type: "p",
    text:
      "For pantry items, this matters because one can, pouch, carton, or dry package may contain more than one serving. Before comparing sodium, added sugars, fiber, protein, or other label lines, write down whether the numbers are per serving, per container, or another amount."
  },
  {
    type: "h2",
    text: "Use percent Daily Value for label context"
  },
  {
    type: "p",
    text:
      "FDA explains that percent Daily Value shows how much a nutrient in one serving contributes to a total daily diet. FDA also says 5% Daily Value or less per serving is low, while 20% Daily Value or more per serving is high."
  },
  {
    type: "p",
    text:
      "That shared scale can make pantry comparisons less noisy. If two similar items have similar serving sizes, compare the percent Daily Value lines that matter for your note. If serving sizes differ, write down the mismatch instead of forcing a clean comparison."
  },
  {
    type: "h2",
    text: "Notice the storage clues"
  },
  {
    type: "p",
    text:
      "USDA FSIS says shelf-stable foods are foods that can be safely stored at room temperature, or on the shelf. It lists examples such as canned and bottled foods, rice, pasta, flour, sugar, spices, oils, and foods in aseptic or retort packages."
  },
  {
    type: "p",
    text:
      "That does not mean every pantry-looking item belongs at room temperature. USDA FSIS notes that some canned foods are not safe at room temperature and will be labeled Keep Refrigerated. Read storage wording before assuming where an item belongs."
  },
  {
    type: "h2",
    text: "Look at package condition before using cans"
  },
  {
    type: "p",
    text:
      "USDA FSIS says canned foods and other shelf-stable products should be stored in a cool, dry place, and it warns not to purchase bulging, rusted, leaking, or deeply dented cans. It also says deeply dented cans should be discarded because the seam can be damaged."
  },
  {
    type: "p",
    text:
      "Package condition is not a nutrition comparison, but it is still part of a pantry check. If the package condition raises a food safety concern, do not solve that problem by comparing labels. Follow food safety guidance."
  },
  {
    type: "h2",
    text: "Separate label comparison from meal role"
  },
  {
    type: "p",
    text:
      "USDA MyPlate meal planning guidance suggests keeping a mix of fresh, frozen, and shelf-stable foods, and stocking the freezer and pantry with items that can be eaten later. That makes pantry items useful as backup options, side items, or parts of a simple meal."
  },
  {
    type: "p",
    text:
      "When comparing two pantry items, add the role to your note. Is the item likely to be the main base, a side, a sauce, a topping, or an emergency backup? The role can change which label details are most useful to compare."
  },
  {
    type: "h2",
    text: "A five-line pantry comparison note"
  },
  {
    type: "p",
    text:
      "Use five lines: item type, serving size, servings per container, label lines to compare, and storage or package-condition note. If the item has a Keep Refrigerated statement or the package looks damaged, treat that as a separate safety issue."
  },
  {
    type: "p",
    text:
      "If a health professional has given you personal sodium, sugar, fiber, allergy, kidney, diabetes, pregnancy, digestive, medication, eating disorder, or medical nutrition guidance, follow that advice instead of using a general pantry comparison article as your decision rule."
  },
  {
    type: "h2",
    text: "A calm takeaway"
  },
  {
    type: "p",
    text:
      "Pantry comparisons work best when you compare similar items, start with serving size, use percent Daily Value, check storage wording, and notice package condition. This article is general education only and is not medical advice."
  }
];

const scheduled = JSON.parse(fs.readFileSync(scheduledPath, "utf8"));
const article = scheduled.find((item) => item.slug === slug);

if (!article) {
  throw new Error(`Could not find scheduled article: ${slug}`);
}

article.status = "internal_pass";
article.review = {
  internalLint: "passed",
  externalAiReview: "pending",
  approvedForPublishing: false
};
article.title = "How to Compare Pantry Items Without Overthinking the Label";
article.summary =
  "Compare pantry items with serving size, percent Daily Value, storage wording, package condition, and meal role without brand names or product picks.";
article.body = body;
article.seo = {
  ...article.seo,
  seoTitle: "How to Compare Pantry Items Without Overthinking the Label | Daily Support Guide",
  metaDescription:
    "Compare pantry items by serving size, percent Daily Value, storage wording, package condition, and meal role.",
  primaryKeyword: "compare pantry items",
  secondaryKeywords: [
    "compare pantry items guide",
    "pantry label comparison",
    "shelf stable food labels"
  ],
  h1: "How to Compare Pantry Items Without Overthinking the Label",
  h2: [
    "Start by comparing similar pantry items",
    "Check serving size and servings per container",
    "Use percent Daily Value for label context",
    "Notice the storage clues",
    "Look at package condition before using cans",
    "Separate label comparison from meal role",
    "A five-line pantry comparison note",
    "A calm takeaway"
  ],
  faq: [
    "How do I compare pantry items without relying on front-package claims?",
    "Why does serving size matter when comparing pantry labels?",
    "When should I follow food safety or professional guidance instead of a general pantry comparison?"
  ],
  internalLinks: [
    "compare-packaged-snacks",
    "simple-meal-decisions",
    "read-sodium-and-sugar-labels",
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

const reviewPacket = `# Article 21 Review Packet

## Project Goal Header

Current big goal: Daily Support Guide must reach A+ on quiz, homepage, SEO foundation, content library, trust/compliance, and HTTPS/security before Phase 7 affiliate revenue can begin.

Current project state: Article 21 is drafted and internally linted. It is not approved for publishing.

Current step: External four-AI review for one scheduled article.

Distance to goal: This packet needs ChatGPT, Gemini, Claude, and Grok review. The article can only move from \`internal_pass\` to \`approved\` after all four pass or all actionable comments are resolved and resubmitted.

Non-drift boundaries:
- English-first content for a U.S. audience.
- Brand-neutral. No product names, retailer names, coupons, affiliate links, or product picks.
- General education only. No medical advice, treatment, cure, prevention, dosage, target-setting, or individualized nutrition advice.
- Food safety wording must stay source-scoped and conservative.
- No Phase 7 monetization language. Affiliate revenue remains locked until the first six readiness categories are A+.
- Keep changes scoped to this article unless a reviewer identifies a concrete safety, compliance, factual, SEO, or clarity issue.

## Article Metadata

- Slug: \`${slug}\`
- Title: How to Compare Pantry Items Without Overthinking the Label
- Scheduled date: 2026-08-09
- Category: Comparison Skills
- Status: internal_pass
- Approved for publishing: false
- Primary keyword: compare pantry items
- Meta description: Compare pantry items by serving size, percent Daily Value, storage wording, package condition, and meal role.

## Source Notes

- FDA Nutrition Facts guidance: first look at servings per container and serving size.
- FDA Nutrition Facts guidance: serving sizes are standardized to make similar foods easier to compare.
- FDA Nutrition Facts guidance: serving size is not a recommendation for how much to eat or drink.
- FDA percent Daily Value guidance: percent Daily Value shows how much a nutrient in one serving contributes to a total daily diet.
- FDA percent Daily Value guidance: 5% Daily Value or less per serving is low, and 20% Daily Value or more per serving is high.
- USDA FSIS shelf-stable food guidance: shelf-stable foods can be safely stored at room temperature or on the shelf.
- USDA FSIS shelf-stable food guidance: examples include canned and bottled foods, rice, pasta, flour, sugar, spices, oils, and foods in aseptic or retort packages.
- USDA FSIS shelf-stable food guidance: some canned foods are not safe at room temperature and will be labeled Keep Refrigerated.
- USDA FSIS shelf-stable food guidance: store canned foods and other shelf-stable products in a cool, dry place; do not purchase bulging, rusted, leaking, or deeply dented cans; discard deeply dented cans.
- USDA MyPlate Make a Plan guidance: plan for a mix of fresh, frozen, and shelf-stable foods; stock pantry and freezer with items that can be eaten later.

Sources:
- https://www.fda.gov/food/nutrition-facts-label/how-understand-and-use-nutrition-facts-label
- https://www.fda.gov/food/nutrition-facts-label/lows-and-highs-percent-daily-value-nutrition-facts-label
- https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/shelf-stable-food
- https://www.myplate.gov/eathealthy/budget/budget-weekly-meals

## Internal Safety Checklist

- [x] No brand names.
- [x] No retailer names.
- [x] No affiliate, coupon, discount, or buying language.
- [x] No product recommendations.
- [x] No meal plan, calorie target, macro target, diagnosis, treatment, cure, prevention, dosage, or individualized nutrition advice.
- [x] Includes general education only and not medical advice disclaimer.
- [x] Does not claim pantry comparisons treat or prevent diabetes, kidney disease, obesity, foodborne illness, digestive conditions, fatigue, or another condition.
- [x] Redirects personal sodium, sugar, fiber, allergy, kidney, diabetes, pregnancy, digestive, medication, eating disorder, or medical nutrition instructions to qualified professional guidance.
- [x] Keeps food safety statements conservative and source-scoped.

## External Reviewer Prompt

Review this article for the current step only. Return one of:

- \`PASS\`: no required changes.
- \`CHANGES_REQUIRED\`: list only concrete safety, compliance, factual, SEO, or clarity issues that must be fixed before approval.

Do not suggest new features, brand recommendations, affiliate strategy, medical advice, or broad refactors. Keep feedback scoped to this article.

## Article Draft

# How to Compare Pantry Items Without Overthinking the Label

${bodyMarkdown}
`;

fs.mkdirSync(path.dirname(reviewPath), { recursive: true });
fs.writeFileSync(reviewPath, reviewPacket);

console.log(`Drafted ${slug}`);
console.log(`Updated ${path.relative(root, scheduledPath)}`);
console.log(`Wrote ${path.relative(root, reviewPath)}`);
