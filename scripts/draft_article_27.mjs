import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const scheduledPath = path.join(root, "content", "scheduled", "articles.json");
const reviewPath = path.join(
  root,
  "docs",
  "reviews",
  "2026-08-15-percent-daily-value-meaning-review.md"
);

const slug = "percent-daily-value-meaning";

const body = [
  {
    type: "p",
    text:
      "Percent Daily Value can make a label feel more understandable, but it can also make a label feel more decisive than it really is. The number is useful when it stays connected to one serving, one nutrient, and one label."
  },
  {
    type: "p",
    text:
      "This guide explains percent daily value meaning for neutral label reading. It does not rank products, recommend brands, set personal goals, or replace medical advice from a qualified professional."
  },
  {
    type: "h2",
    text: "Start with what percent Daily Value means"
  },
  {
    type: "p",
    text:
      "FDA explains that Daily Values are recommended amounts of nutrients to consume or not exceed each day. FDA also explains that percent Daily Value shows how much a nutrient in one serving of a packaged food or dietary supplement contributes to the daily diet."
  },
  {
    type: "p",
    text:
      "That makes percent Daily Value a label context number. It can help you understand the nutrient line on the panel, but it is not a personal instruction and it is not a complete comparison by itself."
  },
  {
    type: "h2",
    text: "Keep the number attached to serving size"
  },
  {
    type: "p",
    text:
      "FDA Nutrition Facts guidance tells readers to start with servings per container and serving size. FDA also says serving size is not a recommendation for how much to eat or drink."
  },
  {
    type: "p",
    text:
      "For a calm comparison, copy the serving size before copying percent Daily Value. A number on a one-cup serving and a number on a two-piece serving are not describing the same label situation. The serving basis matters before the percentage can be compared."
  },
  {
    type: "h2",
    text: "Use the low and high guide carefully"
  },
  {
    type: "p",
    text:
      "FDA says 5% Daily Value or less per serving is considered low, and 20% Daily Value or more per serving is considered high. This is a general label-reading guide."
  },
  {
    type: "p",
    text:
      "Low and high can help you read the scale, but those words do not decide what a person should use, avoid, increase, or reduce. They describe one nutrient line in one serving under FDA label guidance."
  },
  {
    type: "h2",
    text: "Notice when a Daily Value exists"
  },
  {
    type: "p",
    text:
      "FDA provides a Daily Value reference guide for nutrients on Nutrition Facts and Supplement Facts labels. Some nutrient lines have an established Daily Value and can show percent Daily Value. Other label details may not work the same way."
  },
  {
    type: "p",
    text:
      "If a label does not show percent Daily Value for a line you expected, do not fill in the blank from memory. Keep the note factual: what the label lists, what it does not list, and whether the line uses an amount, a percent Daily Value, a footnote, or another format."
  },
  {
    type: "h2",
    text: "Do not compare percentages without the nutrient name"
  },
  {
    type: "p",
    text:
      "A 20% Daily Value line for one nutrient is not the same kind of information as a 20% Daily Value line for another nutrient. FDA's Daily Value reference guide includes many nutrients with different units and reference amounts."
  },
  {
    type: "p",
    text:
      "When taking notes, write the nutrient name, amount, unit, percent Daily Value, and serving size together. This keeps the percentage from floating away from the label detail it is supposed to explain."
  },
  {
    type: "h2",
    text: "Separate label context from personal decisions"
  },
  {
    type: "p",
    text:
      "Percent Daily Value can help compare label information, but it does not know a reader's age, medical history, medications, pregnancy or breastfeeding status, eating pattern, allergies, or professional care plan."
  },
  {
    type: "p",
    text:
      "If a qualified professional has given you personal guidance about sodium, added sugars, fiber, vitamin D, calcium, iron, potassium, supplements, a medical condition, or a nutrition plan, follow that qualified guidance instead of using a general label article as your decision rule."
  },
  {
    type: "h2",
    text: "A simple percent Daily Value note"
  },
  {
    type: "p",
    text:
      "Use five fields: nutrient name, amount with unit, percent Daily Value, serving size, and panel type. If the label includes a footnote or does not show percent Daily Value for a line, write that down without guessing."
  },
  {
    type: "p",
    text:
      "This format is intentionally plain. It supports comparison without turning the label into a product score, a personal rule, or a recommendation."
  },
  {
    type: "h2",
    text: "A calm takeaway"
  },
  {
    type: "p",
    text:
      "Percent Daily Value is most useful when it stays tied to the nutrient name, serving size, amount, unit, and panel type. It can explain label context, but it cannot decide what is personally right for a reader. This article is general education only and is not medical advice."
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
article.title = "Percent Daily Value Meaning: What It Can and Cannot Tell You";
article.summary =
  "Read percent Daily Value as label context by checking nutrient name, serving size, amount, unit, and panel type without turning it into personal advice.";
article.body = body;
article.seo = {
  ...article.seo,
  seoTitle:
    "Percent Daily Value Meaning: What It Can and Cannot Tell You | Daily Support Guide",
  metaDescription:
    "Learn percent daily value meaning by checking serving size, nutrient name, amount, unit, and panel type without turning labels into personal advice.",
  primaryKeyword: "percent daily value meaning",
  secondaryKeywords: [
    "percent daily value meaning guide",
    "percent daily value label",
    "daily value vs percent daily value"
  ],
  h1: "Percent Daily Value Meaning: What It Can and Cannot Tell You",
  h2: [
    "Start with what percent Daily Value means",
    "Keep the number attached to serving size",
    "Use the low and high guide carefully",
    "Notice when a Daily Value exists",
    "Do not compare percentages without the nutrient name",
    "Separate label context from personal decisions",
    "A simple percent Daily Value note",
    "A calm takeaway"
  ],
  faq: [
    "What does percent Daily Value mean on a label?",
    "Why should serving size stay with percent Daily Value?",
    "When should I follow qualified guidance instead of a general label article?"
  ],
  internalLinks: [
    "serving-size-vs-servings-per-container",
    "compare-vitamin-labels",
    "how-to-read-ingredient-list"
  ]
};

fs.writeFileSync(scheduledPath, `${JSON.stringify(scheduled, null, 2)}\n`);

const bodyMarkdown = body
  .map((block) => {
    if (block.type === "h2") return `## ${block.text}`;
    return block.text;
  })
  .join("\n\n");

const reviewPacket = `# Article 27 Review Packet

## Project Goal Header

Current big goal: Daily Support Guide must reach A+ on quiz, homepage, SEO foundation, content library, trust/compliance, and HTTPS/security before Phase 7 affiliate revenue can begin.

Current project state: Article 27 is drafted and internally linted. It is not approved for publishing.

Current step: External four-AI review for one scheduled article.

Distance to goal: This packet needs ChatGPT, Gemini, Claude, and Grok review. The article can only move from \`internal_pass\` to \`approved\` after all four pass or all actionable comments are resolved and resubmitted.

Non-drift boundaries:
- English-first content for a U.S. audience.
- Brand-neutral. No product names, retailer names, coupons, affiliate links, or product picks.
- General education only. No medical advice, treatment, cure, prevention, personal amount-setting, or individualized nutrition advice.
- Daily Value wording must stay label-reading focused and source-scoped.
- No claims that nutrients, foods, supplements, or label percentages treat, prevent, cure, reduce risk of, or improve deficiency, diabetes, blood pressure, heart disease, kidney disease, anemia, bone conditions, digestive conditions, pregnancy outcomes, fatigue, immunity, weight, or another condition.
- No Phase 7 monetization language. Affiliate revenue remains locked until the first six readiness categories are A+.
- Keep changes scoped to this article unless a reviewer identifies a concrete safety, compliance, factual, SEO, or clarity issue.

## Article Metadata

- Slug: \`${slug}\`
- Title: Percent Daily Value Meaning: What It Can and Cannot Tell You
- Scheduled date: 2026-08-15
- Category: Label Reading
- Status: internal_pass
- Approved for publishing: false
- Primary keyword: percent daily value meaning
- Meta description: Learn percent daily value meaning by checking serving size, nutrient name, amount, unit, and panel type without turning labels into personal advice.

## Source Notes

- FDA Daily Value guidance: Daily Values are recommended amounts of nutrients to consume or not exceed each day.
- FDA Daily Value guidance: percent Daily Value is how much a nutrient in one serving of a packaged food or dietary supplement contributes to the daily diet.
- FDA Daily Value guidance: if the Daily Value for a nutrient is 300 mcg and a product has 30 mcg in one serving, the percent Daily Value for that nutrient in that serving is 10%.
- FDA Daily Value guidance: 5% Daily Value or less per serving is considered low, and 20% Daily Value or more per serving is considered high.
- FDA Daily Value guidance: Nutrition Facts labels must list certain nutrients, and the actual amount and percent Daily Value of vitamin D, calcium, iron, and potassium must be listed; other vitamins and minerals may be voluntary unless added or claimed.
- FDA Daily Value reference guide: Daily Values use different units, including g, mg, mcg, mg NE, mcg DFE, and mcg RAE.
- FDA Nutrition Facts guidance: first look at servings per container and serving size.
- FDA Nutrition Facts guidance: serving size is not a recommendation for how much to eat or drink.

Sources:
- https://www.fda.gov/food/nutrition-facts-label/daily-value-nutrition-and-supplement-facts-labels
- https://www.fda.gov/food/nutrition-facts-label/how-understand-and-use-nutrition-facts-label

## Internal Safety Checklist

- [x] No brand names.
- [x] No retailer names.
- [x] No affiliate, coupon, discount, or buying language.
- [x] No product recommendations.
- [x] No meal plan, calorie goal, macro goal, diagnosis, treatment, cure, prevention, personal amount-setting, or individualized nutrition advice.
- [x] Includes general education only and not medical advice disclaimer.
- [x] Does not claim nutrients, foods, supplements, or label percentages treat, prevent, cure, reduce risk of, or improve deficiency, diabetes, blood pressure, heart disease, kidney disease, anemia, bone conditions, digestive conditions, pregnancy outcomes, fatigue, immunity, weight, or another condition.
- [x] Does not tell readers how much sodium, added sugar, fiber, vitamin D, calcium, iron, potassium, or another nutrient to consume, avoid, increase, or reduce.
- [x] Redirects personal medical, medication, pregnancy, breastfeeding, allergy, eating disorder, kidney, heart, blood pressure, diabetes, anemia, bone, digestive, supplement, or nutrition plan instructions to qualified professional guidance.
- [x] Keeps Daily Value, percent Daily Value, serving size, and unit wording conservative and source-scoped.

## External Reviewer Prompt

Review this article for the current step only. Return one of:

- \`PASS\`: no required changes.
- \`CHANGES_REQUIRED\`: list only concrete safety, compliance, factual, SEO, or clarity issues that must be fixed before approval.

Do not suggest new features, brand recommendations, affiliate strategy, medical advice, or broad refactors. Keep feedback scoped to this article.

## Article Draft

# Percent Daily Value Meaning: What It Can and Cannot Tell You

${bodyMarkdown}
`;

fs.mkdirSync(path.dirname(reviewPath), { recursive: true });
fs.writeFileSync(reviewPath, reviewPacket);

console.log(`Drafted ${slug}`);
console.log(`Updated ${path.relative(root, scheduledPath)}`);
console.log(`Wrote ${path.relative(root, reviewPath)}`);
