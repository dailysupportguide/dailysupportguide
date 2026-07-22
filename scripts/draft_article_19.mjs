import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const scheduledPath = path.join(root, "content", "scheduled", "articles.json");
const reviewPath = path.join(
  root,
  "docs",
  "reviews",
  "2026-08-07-read-protein-on-food-labels-review.md"
);

const slug = "read-protein-on-food-labels";

const body = [
  {
    type: "p",
    text:
      "Protein can look simple on a food label because it is usually shown as one number in grams. The useful part is not treating that number as a score. It is reading the number next to serving size, food source, and the rest of the meal."
  },
  {
    type: "p",
    text:
      "This article is a neutral label-reading guide for everyday meals. It does not set protein targets, rank foods, or replace personal advice from a qualified professional."
  },
  {
    type: "h2",
    text: "Start with the serving size"
  },
  {
    type: "p",
    text:
      "FDA serving size guidance says the nutrition information on a Nutrition Facts label is usually based on one serving, and some containers may also show information per package. FDA also says serving size is not a recommendation for how much to eat or drink."
  },
  {
    type: "p",
    text:
      "That means the protein grams are attached to the listed serving. Before comparing two foods, check whether the serving is one cup, one piece, one container, one slice, or another amount. If your actual portion is different, the protein number may not describe your real use."
  },
  {
    type: "h2",
    text: "Read protein grams as information, not a verdict"
  },
  {
    type: "p",
    text:
      "FDA Daily Value guidance says the Nutrition Facts label must list protein, and the current Daily Value for protein is 50 grams. The same FDA guidance explains that Daily Values and percent Daily Value are tools for understanding how a serving contributes to a total daily diet."
  },
  {
    type: "p",
    text:
      "For a normal meal, the practical note is simple: write down protein grams per serving, then read the rest of the label. A food with more protein is not automatically the better choice for every situation, especially if the serving size, sodium, added sugars, saturated fat, fiber, or overall meal context is different."
  },
  {
    type: "h2",
    text: "Look at the food source"
  },
  {
    type: "p",
    text:
      "USDA MyPlate describes Protein Foods as seafood; meat, poultry, and eggs; beans, peas, and lentils; nuts, seeds, and soy products. It also notes that beans, peas, and lentils are part of both the Protein Foods Group and the Vegetable Group."
  },
  {
    type: "p",
    text:
      "That broader view helps you avoid thinking only in terms of one food type. In a meal, protein may come from an animal food, a plant food, a mixed dish, or more than one source. Reading the ingredient list can help you see where the protein is coming from."
  },
  {
    type: "h2",
    text: "Use the ingredient list for context"
  },
  {
    type: "p",
    text:
      "The protein line tells you grams, but it does not explain the whole food by itself. The ingredient list can show whether the item is built around beans, lentils, soy, eggs, dairy ingredients, seafood, poultry, meat, nuts, seeds, grains, or a mix of ingredients."
  },
  {
    type: "p",
    text:
      "This is useful for comparison, not judgment. If two labels show similar protein grams, the ingredient list may still show different food sources, different serving sizes, or different added ingredients. Keep the note descriptive."
  },
  {
    type: "h2",
    text: "Compare protein with the rest of the label"
  },
  {
    type: "p",
    text:
      "FDA guidance says percent Daily Value can help show whether a serving is high or low in an individual nutrient. As a general guide, 5% Daily Value or less is low and 20% Daily Value or more is high."
  },
  {
    type: "p",
    text:
      "When comparing meal items, use protein alongside the other label lines. You might note protein grams, dietary fiber, sodium, saturated fat, and added sugars. This keeps one appealing number from hiding trade-offs elsewhere on the label."
  },
  {
    type: "h2",
    text: "Keep meal context in the picture"
  },
  {
    type: "p",
    text:
      "A breakfast bowl, sandwich, soup, frozen meal, salad, or snack plate may use protein differently. A single item may look modest alone but make sense as part of a meal. Another item may look high in protein but also carry label details you want to notice."
  },
  {
    type: "p",
    text:
      "Instead of asking whether one label is good or bad, ask what role the food is playing. Is it the main protein source, a side item, a topping, or one part of a mixed meal? That question makes the comparison more realistic."
  },
  {
    type: "h2",
    text: "A five-line protein label note"
  },
  {
    type: "p",
    text:
      "Use five lines: serving size, protein grams, food source, one or two label trade-offs, and meal role. If the item has a percent Daily Value for protein, you can include it as context, but do not ignore the serving size or the rest of the meal."
  },
  {
    type: "p",
    text:
      "If a health professional has given you personal protein, kidney, diabetes, pregnancy, allergy, digestive, sports nutrition, recovery, medication, or medical nutrition guidance, follow that advice instead of using a general article as your decision rule."
  },
  {
    type: "h2",
    text: "A calm takeaway"
  },
  {
    type: "p",
    text:
      "Protein on food labels is easier to use when you read serving size first, treat grams as information, check the food source, compare trade-offs, and keep meal context in view. This article is general education only and is not medical advice."
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
article.title = "How to Look at Protein Sources in a Normal Meal";
article.summary =
  "Read protein on food labels with serving size, protein grams, food source, label trade-offs, and meal context without ranking foods.";
article.body = body;
article.seo = {
  ...article.seo,
  seoTitle: "How to Look at Protein Sources in a Normal Meal | Daily Support Guide",
  metaDescription:
    "Read protein on food labels by checking serving size, protein grams, food source, label trade-offs, and normal meal context.",
  primaryKeyword: "protein on food labels",
  secondaryKeywords: [
    "protein on food labels guide",
    "read protein grams on labels",
    "protein food source label"
  ],
  h1: "How to Look at Protein Sources in a Normal Meal",
  h2: [
    "Start with the serving size",
    "Read protein grams as information, not a verdict",
    "Look at the food source",
    "Use the ingredient list for context",
    "Compare protein with the rest of the label",
    "Keep meal context in the picture",
    "A five-line protein label note",
    "A calm takeaway"
  ],
  faq: [
    "How do I read protein on food labels?",
    "Why does serving size matter when comparing protein grams?",
    "When should I follow professional guidance instead of a general protein label guide?"
  ],
  internalLinks: [
    "serving-size-vs-servings-per-container",
    "percent-daily-value-meaning",
    "how-to-read-ingredient-list",
    "read-sodium-and-sugar-labels"
  ]
};

fs.writeFileSync(scheduledPath, `${JSON.stringify(scheduled, null, 2)}\n`);

const bodyMarkdown = body
  .map((block) => {
    if (block.type === "h2") return `## ${block.text}`;
    return block.text;
  })
  .join("\n\n");

const reviewPacket = `# Article 19 Review Packet

## Project Goal Header

Current big goal: Daily Support Guide must reach A+ on quiz, homepage, SEO foundation, content library, trust/compliance, and HTTPS/security before Phase 7 affiliate revenue can begin.

Current project state: Article 19 is drafted and internally linted. It is not approved for publishing.

Current step: External four-AI review for one scheduled article.

Distance to goal: This packet needs ChatGPT, Gemini, Claude, and Grok review. The article can only move from \`internal_pass\` to \`approved\` after all four pass or all actionable comments are resolved and resubmitted.

Non-drift boundaries:
- English-first content for a U.S. audience.
- Brand-neutral. No product names, retailer names, coupons, affiliate links, or product picks.
- General education only. No medical advice, treatment, cure, prevention, dosage, or individualized health advice.
- No Phase 7 monetization language. Affiliate revenue remains locked until the first six readiness categories are A+.
- Keep changes scoped to this article unless a reviewer identifies a concrete safety, compliance, factual, SEO, or clarity issue.

## Article Metadata

- Slug: \`${slug}\`
- Title: How to Look at Protein Sources in a Normal Meal
- Scheduled date: 2026-08-07
- Category: Label Reading
- Status: internal_pass
- Approved for publishing: false
- Primary keyword: protein on food labels
- Meta description: Read protein on food labels by checking serving size, protein grams, food source, label trade-offs, and normal meal context.

## Source Notes

- FDA serving size guidance: Nutrition Facts information is usually based on one serving, and some containers may also show information per package.
- FDA serving size guidance: serving size is not a recommendation for how much to eat or drink.
- FDA Daily Value guidance: the Nutrition Facts label must list protein.
- FDA Daily Value guidance: the current Daily Value for protein is 50 grams.
- FDA Daily Value guidance: Daily Values and percent Daily Value help show how a serving contributes to a total daily diet.
- FDA percent Daily Value guidance: 5% Daily Value or less per serving is low, and 20% Daily Value or more per serving is high.
- USDA MyPlate Protein Foods guidance: Protein Foods include seafood; meat, poultry, and eggs; beans, peas, and lentils; nuts, seeds, and soy products.
- USDA MyPlate Protein Foods guidance: beans, peas, and lentils are also part of the Vegetable Group.
- USDA MyPlate Protein Foods guidance: food choices in the Protein Foods Group can provide different nutrients, so variety matters.

Sources:
- https://www.fda.gov/food/nutrition-facts-label/serving-size-nutrition-facts-label
- https://www.fda.gov/food/nutrition-facts-label/daily-value-nutrition-and-supplement-facts-labels
- https://www.fda.gov/food/nutrition-facts-label/lows-and-highs-percent-daily-value-nutrition-facts-label
- https://www.fda.gov/food/nutrition-facts-label/how-understand-and-use-nutrition-facts-label
- https://www.myplate.gov/web/web/eat-healthy/protein-foods

## Internal Safety Checklist

- [x] No brand names.
- [x] No retailer names.
- [x] No affiliate, coupon, discount, or buying language.
- [x] No product recommendations.
- [x] No medical advice, treatment, cure, prevention, dosage, or target-setting language.
- [x] Includes general education only and not medical advice disclaimer.
- [x] Does not claim protein choices treat or prevent diabetes, kidney disease, obesity, muscle loss, injury, or another condition.
- [x] Redirects personal protein, kidney, diabetes, pregnancy, allergy, digestive, sports nutrition, recovery, medication, or medical nutrition instructions to qualified professional guidance.

## External Reviewer Prompt

Review this article for the current step only. Return one of:

- \`PASS\`: no required changes.
- \`CHANGES_REQUIRED\`: list only concrete safety, compliance, factual, SEO, or clarity issues that must be fixed before approval.

Do not suggest new features, brand recommendations, affiliate strategy, medical advice, or broad refactors. Keep feedback scoped to this article.

## Article Draft

# How to Look at Protein Sources in a Normal Meal

${bodyMarkdown}
`;

fs.mkdirSync(path.dirname(reviewPath), { recursive: true });
fs.writeFileSync(reviewPath, reviewPacket);

console.log(`Drafted ${slug}`);
console.log(`Updated ${path.relative(root, scheduledPath)}`);
console.log(`Wrote ${path.relative(root, reviewPath)}`);
