import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const scheduledPath = path.join(root, "content", "scheduled", "articles.json");
const reviewPath = path.join(
  root,
  "docs",
  "reviews",
  "2026-08-14-compare-vitamin-labels-review.md"
);

const slug = "compare-vitamin-labels";

const body = [
  {
    type: "p",
    text:
      "Vitamin labels can make large numbers feel persuasive. A high percent Daily Value may look like the easiest detail to compare, but the calmer question is simpler: what does this number describe on this label, in this serving, for this vitamin?"
  },
  {
    type: "p",
    text:
      "This guide explains vitamin label daily value in a neutral way. It does not rank brands, recommend products, set personal amounts, or replace medical advice from a qualified professional."
  },
  {
    type: "h2",
    text: "Start with the panel type"
  },
  {
    type: "p",
    text:
      "FDA explains that the Nutrition Facts label appears on packaged foods, while the nutrition label for a dietary supplement is called a Supplement Facts panel. FDA says the Supplement Facts panel must list the names and quantities of dietary ingredients present, along with serving size and, when required, servings per container."
  },
  {
    type: "p",
    text:
      "Before comparing vitamin numbers, write down which panel you are reading. A packaged food and a dietary supplement can both show vitamins, but the panel type and serving size tell you what the numbers are attached to."
  },
  {
    type: "h2",
    text: "Use percent Daily Value as context"
  },
  {
    type: "p",
    text:
      "FDA says the Daily Value is the recommended amount of a nutrient to consume or not exceed each day, and percent Daily Value shows how much a nutrient in one serving of a packaged food or dietary supplement contributes to the daily diet."
  },
  {
    type: "p",
    text:
      "That means percent Daily Value is label context, not a personal instruction. If a vitamin line shows 25%, 100%, or a larger number, the first task is to connect it to the serving size and nutrient line rather than assuming the biggest number is automatically the best choice."
  },
  {
    type: "h2",
    text: "Remember the low and high guide"
  },
  {
    type: "p",
    text:
      "FDA says 5% Daily Value or less per serving is considered low, and 20% Daily Value or more per serving is considered high. FDA presents this as a general guide for using the label."
  },
  {
    type: "p",
    text:
      "For vitamin comparisons, this guide can help you read the scale. It does not decide what you personally need. A high number can be relevant information, but it is still one line on one label."
  },
  {
    type: "h2",
    text: "Check serving size before comparing numbers"
  },
  {
    type: "p",
    text:
      "FDA Nutrition Facts guidance says to first look at servings per container and serving size, and that serving size is not a recommendation for how much to eat or drink. FDA supplement labeling guidance says one serving of a dietary supplement equals the maximum amount recommended on the label for one eating occasion, or one unit if no recommendation appears."
  },
  {
    type: "p",
    text:
      "If one label uses one tablet and another uses two capsules, their vitamin numbers are not being shown on the same serving basis. Copy the serving size before comparing percent Daily Value or amount."
  },
  {
    type: "h2",
    text: "Notice which vitamins must appear"
  },
  {
    type: "p",
    text:
      "FDA says vitamin D must be listed on the Nutrition Facts label, while other vitamins may be listed voluntarily unless they are added to the food or a statement is made about them. FDA supplement labeling guidance says dietary supplements list dietary ingredients present in the product."
  },
  {
    type: "p",
    text:
      "So a missing vitamin line should not be treated as a broad claim about the entire food or supplement. It may reflect labeling rules, the product type, or what is present and declared on that panel."
  },
  {
    type: "h2",
    text: "Keep units with the vitamin name"
  },
  {
    type: "p",
    text:
      "FDA's Daily Value reference guide lists vitamin Daily Values using units such as milligrams, micrograms, milligrams NE, micrograms DFE, and micrograms RAE. FDA supplement labeling guidance says vitamin and mineral amounts should use the units of measurement specified for Daily Values."
  },
  {
    type: "p",
    text:
      "When comparing vitamin labels, keep the unit with the nutrient name. Vitamin C, vitamin D, folate, niacin, and vitamin A may use different units. Do not compare bare numbers without their units and percent Daily Value."
  },
  {
    type: "h2",
    text: "Avoid chasing the biggest number"
  },
  {
    type: "p",
    text:
      "FDA explains that percent Daily Value can show whether a serving is high or low in a nutrient, and that Daily Values are based on daily diet context. A bigger percentage is not a general instruction to choose that product or to use more of it."
  },
  {
    type: "p",
    text:
      "For this article, the safe comparison is limited to label reading. If a professional has given you guidance about a vitamin because of pregnancy, breastfeeding, medications, surgery, kidney or liver concerns, anemia, bone health, digestion, or another personal factor, follow that qualified guidance."
  },
  {
    type: "h2",
    text: "A five-line vitamin label note"
  },
  {
    type: "p",
    text:
      "Use five lines: panel type, serving size, vitamin name, amount with unit, and percent Daily Value. If the label includes a footnote or a form name, keep that as a separate note instead of turning it into a product ranking."
  },
  {
    type: "p",
    text:
      "If a health professional has given you personal pregnancy, breastfeeding, medication, surgery, kidney, liver, anemia, bone, thyroid, digestive, eating disorder, or medical nutrition guidance, follow that advice instead of using a general vitamin label article as your decision rule."
  },
  {
    type: "h2",
    text: "A calm takeaway"
  },
  {
    type: "p",
    text:
      "Vitamin labels are easier to compare when you start with panel type, check serving size, read percent Daily Value as context, keep units with the vitamin name, and avoid chasing the biggest number. This article is general education only and is not medical advice."
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
article.title = "How to Compare Vitamin Labels Without Chasing Big Numbers";
article.summary =
  "Compare vitamin labels by checking panel type, serving size, vitamin name, amount with unit, and percent Daily Value without chasing big numbers.";
article.body = body;
article.seo = {
  ...article.seo,
  seoTitle: "How to Compare Vitamin Labels Without Chasing Big Numbers | Daily Support Guide",
  metaDescription:
    "Learn vitamin label daily value by checking panel type, serving size, vitamin name, amount with unit, and percent Daily Value.",
  primaryKeyword: "vitamin label daily value",
  secondaryKeywords: [
    "vitamin label daily value guide",
    "compare vitamin labels",
    "vitamin supplement facts label"
  ],
  h1: "How to Compare Vitamin Labels Without Chasing Big Numbers",
  h2: [
    "Start with the panel type",
    "Use percent Daily Value as context",
    "Remember the low and high guide",
    "Check serving size before comparing numbers",
    "Notice which vitamins must appear",
    "Keep units with the vitamin name",
    "Avoid chasing the biggest number",
    "A five-line vitamin label note",
    "A calm takeaway"
  ],
  faq: [
    "How should I read vitamin label daily value?",
    "Why should I keep units with vitamin label numbers?",
    "When should I follow qualified guidance instead of a general vitamin label article?"
  ],
  internalLinks: [
    "percent-daily-value-meaning",
    "serving-size-vs-servings-per-container",
    "elemental-mineral-labels",
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

const reviewPacket = `# Article 26 Review Packet

## Project Goal Header

Current big goal: Daily Support Guide must reach A+ on quiz, homepage, SEO foundation, content library, trust/compliance, and HTTPS/security before Phase 7 affiliate revenue can begin.

Current project state: Article 26 is drafted and internally linted. It is not approved for publishing.

Current step: External four-AI review for one scheduled article.

Distance to goal: This packet needs ChatGPT, Gemini, Claude, and Grok review. The article can only move from \`internal_pass\` to \`approved\` after all four pass or all actionable comments are resolved and resubmitted.

Non-drift boundaries:
- English-first content for a U.S. audience.
- Brand-neutral. No product names, retailer names, coupons, affiliate links, or product picks.
- General education only. No medical advice, treatment, cure, prevention, personal amount-setting, or individualized nutrition advice.
- Vitamin wording must stay label-reading focused and source-scoped.
- No claims that vitamins, vitamin forms, foods, or supplements treat, prevent, cure, reduce risk of, or improve deficiency, anemia, thyroid disease, kidney disease, liver disease, heart disease, bone conditions, immune function, fatigue, digestive conditions, pregnancy outcomes, or another condition.
- No Phase 7 monetization language. Affiliate revenue remains locked until the first six readiness categories are A+.
- Keep changes scoped to this article unless a reviewer identifies a concrete safety, compliance, factual, SEO, or clarity issue.

## Article Metadata

- Slug: \`${slug}\`
- Title: How to Compare Vitamin Labels Without Chasing Big Numbers
- Scheduled date: 2026-08-14
- Category: Label Reading
- Status: internal_pass
- Approved for publishing: false
- Primary keyword: vitamin label daily value
- Meta description: Learn vitamin label daily value by checking panel type, serving size, vitamin name, amount with unit, and percent Daily Value.

## Source Notes

- FDA Daily Value guidance: Daily Values are recommended amounts of nutrients to consume or not exceed each day.
- FDA Daily Value guidance: percent Daily Value is how much a nutrient in one serving of a packaged food or dietary supplement contributes to the daily diet.
- FDA Daily Value guidance: 5% Daily Value or less per serving is considered low, and 20% Daily Value or more per serving is considered high.
- FDA Daily Value guidance: Nutrition Facts must list certain vitamins and minerals; vitamin D, calcium, iron, and potassium actual amount and percent Daily Value must be listed, while other vitamins and minerals may be listed voluntarily unless added or claimed.
- FDA Daily Value reference guide: vitamin Daily Values use units such as mg, mcg, mg NE, mcg DFE, and mcg RAE.
- FDA Nutrition Facts guidance: first look at servings per container and serving size; serving size is not a recommendation for how much to eat or drink.
- FDA dietary supplement labeling guidance: the nutrition label for a dietary supplement is called a Supplement Facts panel.
- FDA dietary supplement labeling guidance: Supplement Facts must list names and quantities of dietary ingredients present, serving size, and servings per container when required.
- FDA dietary supplement labeling guidance: one serving of a dietary supplement equals the maximum amount recommended on the label for one eating occasion, or one unit if no recommendation appears.
- FDA dietary supplement labeling guidance: vitamin and mineral amounts should use the units of measurement specified for Daily Values.

Sources:
- https://www.fda.gov/food/nutrition-facts-label/daily-value-nutrition-and-supplement-facts-labels
- https://www.fda.gov/food/nutrition-facts-label/how-understand-and-use-nutrition-facts-label
- https://www.fda.gov/food/dietary-supplements-guidance-documents-regulatory-information/dietary-supplement-labeling-guide-chapter-iv-nutrition-labeling

## Internal Safety Checklist

- [x] No brand names.
- [x] No retailer names.
- [x] No affiliate, coupon, discount, or buying language.
- [x] No product recommendations.
- [x] No meal plan, calorie goal, macro goal, diagnosis, treatment, cure, prevention, personal amount-setting, or individualized nutrition advice.
- [x] Includes general education only and not medical advice disclaimer.
- [x] Does not claim vitamins, vitamin forms, foods, or supplements treat, prevent, cure, reduce risk of, or improve deficiency, anemia, thyroid disease, kidney disease, liver disease, heart disease, bone conditions, immune function, fatigue, digestive conditions, pregnancy outcomes, or another condition.
- [x] Does not tell readers how much vitamin A, vitamin B, vitamin C, vitamin D, vitamin E, vitamin K, folate, niacin, or another vitamin to take.
- [x] Redirects personal pregnancy, breastfeeding, medication, surgery, kidney, liver, anemia, bone, thyroid, digestive, eating disorder, or medical nutrition instructions to qualified professional guidance.
- [x] Keeps Nutrition Facts, Supplement Facts, Daily Value, serving size, and unit wording conservative and source-scoped.

## External Reviewer Prompt

Review this article for the current step only. Return one of:

- \`PASS\`: no required changes.
- \`CHANGES_REQUIRED\`: list only concrete safety, compliance, factual, SEO, or clarity issues that must be fixed before approval.

Do not suggest new features, brand recommendations, affiliate strategy, medical advice, or broad refactors. Keep feedback scoped to this article.

## Article Draft

# How to Compare Vitamin Labels Without Chasing Big Numbers

${bodyMarkdown}
`;

fs.mkdirSync(path.dirname(reviewPath), { recursive: true });
fs.writeFileSync(reviewPath, reviewPacket);

console.log(`Drafted ${slug}`);
console.log(`Updated ${path.relative(root, scheduledPath)}`);
console.log(`Wrote ${path.relative(root, reviewPath)}`);
