import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const scheduledPath = path.join(root, "content", "scheduled", "articles.json");
const reviewPath = path.join(
  root,
  "docs",
  "reviews",
  "2026-08-05-read-sodium-and-sugar-labels-review.md"
);

const slug = "read-sodium-and-sugar-labels";

const body = [
  {
    type: "p",
    text:
      "Reading sodium and sugar on labels can feel dramatic when the numbers look large. A calmer approach is to read the serving size first, use percent Daily Value as a guide, and compare similar products without turning one label into a verdict."
  },
  {
    type: "p",
    text:
      "This article is about label reading, not food rules. It can help you understand what the label is showing so you can compare options in a neutral way."
  },
  {
    type: "h2",
    text: "Start with serving size before judging the number"
  },
  {
    type: "p",
    text:
      "FDA serving size guidance says the Nutrition Facts information is usually based on one serving, and some containers may also show information per package. FDA also says serving size is not a recommendation for how much to eat or drink."
  },
  {
    type: "p",
    text:
      "Before reacting to sodium or sugar, ask what the number is attached to. Is it per slice, per cup, per bottle, per package, or per container? If you eat or drink more than one serving, the sodium and sugar numbers usually scale with the amount."
  },
  {
    type: "h2",
    text: "Use percent Daily Value as the quick guide"
  },
  {
    type: "p",
    text:
      "FDA explains that percent Daily Value shows how much a nutrient in one serving contributes to a total daily diet. As a general guide, 5% Daily Value or less of a nutrient per serving is considered low, and 20% Daily Value or more is considered high."
  },
  {
    type: "p",
    text:
      "That guide can lower the noise. Instead of deciding whether a number looks scary, look at the percent Daily Value. Then compare the same nutrient across similar foods with similar serving sizes."
  },
  {
    type: "h2",
    text: "Read sodium as milligrams plus percent Daily Value"
  },
  {
    type: "p",
    text:
      "FDA sodium guidance says the Daily Value for sodium is less than 2,300 milligrams per day. FDA also says 5% Daily Value or less of sodium per serving is low, while 20% Daily Value or more is high."
  },
  {
    type: "p",
    text:
      "A simple sodium note can have two parts: milligrams per serving and percent Daily Value. The milligrams tell you the amount. The percent Daily Value gives context. If the package has multiple servings, check whether your likely portion changes the picture."
  },
  {
    type: "h2",
    text: "Separate Total Sugars from Added Sugars"
  },
  {
    type: "p",
    text:
      "FDA added sugars guidance says Total Sugars include sugars naturally present in foods and beverages plus any added sugars. FDA also says there is no Daily Value for Total Sugars because no daily recommendation has been made for total sugar amount."
  },
  {
    type: "p",
    text:
      "Added Sugars are different. FDA says Added Sugars include sugars added during processing, sugars packaged as sweeteners, syrups and honey, and sugars from concentrated fruit or vegetable juices. Labels show Added Sugars in grams and percent Daily Value."
  },
  {
    type: "h2",
    text: "Use the low and high guide for Added Sugars"
  },
  {
    type: "p",
    text:
      "For added sugars, FDA says 5% Daily Value or less is low and 20% Daily Value or more is high. FDA lists the Daily Value for added sugars as 50 grams per day based on a 2,000 calorie daily diet."
  },
  {
    type: "p",
    text:
      "This does not mean every label has to be avoided or accepted on one number. It means you have a common measuring tool. If two similar products have different added sugars, the percent Daily Value can make the comparison easier."
  },
  {
    type: "h2",
    text: "Compare similar items, not random categories"
  },
  {
    type: "p",
    text:
      "FDA percent Daily Value guidance says %DV can help compare food products, but it also says to make sure the serving sizes are the same. This matters for sodium and sugar because product categories can be very different."
  },
  {
    type: "p",
    text:
      "Compare soup with soup, cereal with cereal, yogurt with yogurt, and drinks with drinks. If serving sizes differ, adjust your comparison or at least note the mismatch. A smaller serving can make a product look lower even when the package is not actually easier to compare."
  },
  {
    type: "h2",
    text: "A no-panic label note"
  },
  {
    type: "p",
    text:
      "Use five lines: serving size, sodium milligrams, sodium percent Daily Value, Added Sugars grams, and Added Sugars percent Daily Value. If Total Sugars is high but Added Sugars is low, read the ingredient list and product type before assuming what the number means."
  },
  {
    type: "p",
    text:
      "If a health professional has given you a personal sodium, sugar, kidney, blood pressure, diabetes, pregnancy, or medication-related instruction, follow that guidance instead of using a general article as your decision rule."
  },
  {
    type: "h2",
    text: "A calm takeaway"
  },
  {
    type: "p",
    text:
      "Sodium and sugar on labels become easier to read when you start with serving size, use percent Daily Value, separate Total Sugars from Added Sugars, and compare similar products. This article is general education only and is not medical advice."
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
article.title = "How to Read Sodium and Sugar on Labels Without Panic";
article.summary =
  "Read sodium and sugar on labels with serving size, percent Daily Value, Total Sugars, Added Sugars, and a simple comparison note.";
article.body = body;
article.seo = {
  ...article.seo,
  seoTitle: "How to Read Sodium and Sugar on Labels Without Panic | Daily Support Guide",
  metaDescription:
    "Read sodium and sugar on labels with serving size, percent Daily Value, Total Sugars, Added Sugars, and simple comparison notes.",
  primaryKeyword: "sodium and sugar on labels",
  secondaryKeywords: [
    "sodium and sugar on labels guide",
    "Nutrition Facts sodium sugar",
    "Added Sugars percent Daily Value"
  ],
  h1: "How to Read Sodium and Sugar on Labels Without Panic",
  h2: [
    "Start with serving size before judging the number",
    "Use percent Daily Value as the quick guide",
    "Read sodium as milligrams plus percent Daily Value",
    "Separate Total Sugars from Added Sugars",
    "Use the low and high guide for Added Sugars",
    "Compare similar items, not random categories",
    "A no-panic label note",
    "A calm takeaway"
  ],
  faq: [
    "How do I read sodium and sugar on labels?",
    "What is the difference between Total Sugars and Added Sugars?",
    "When should I follow personal medical guidance instead of a general label guide?"
  ],
  internalLinks: [
    "serving-size-vs-servings-per-container",
    "percent-daily-value-meaning",
    "added-sugars-vs-total-sugars",
    "compare-caffeine-free-drink-labels"
  ]
};

fs.writeFileSync(scheduledPath, `${JSON.stringify(scheduled, null, 2)}\n`);

const bodyMarkdown = body
  .map((block) => {
    if (block.type === "h2") return `## ${block.text}`;
    return block.text;
  })
  .join("\n\n");

const reviewPacket = `# Article 17 Review Packet

## Project Goal Header

Current big goal: Daily Support Guide must reach A+ on quiz, homepage, SEO foundation, content library, trust/compliance, and HTTPS/security before Phase 7 affiliate revenue can begin.

Current project state: Article 17 is drafted and internally linted. It is not approved for publishing.

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
- Title: How to Read Sodium and Sugar on Labels Without Panic
- Scheduled date: 2026-08-05
- Category: Label Reading
- Status: internal_pass
- Approved for publishing: false
- Primary keyword: sodium and sugar on labels
- Meta description: Read sodium and sugar on labels with serving size, percent Daily Value, Total Sugars, Added Sugars, and simple comparison notes.

## Source Notes

- FDA serving size guidance: first look at serving size and servings per container; Nutrition Facts information is usually based on one serving, and some containers also show per-package information.
- FDA serving size guidance: serving size is not a recommendation of how much to eat or drink.
- FDA sodium guidance: Daily Value for sodium is less than 2,300 mg per day.
- FDA sodium guidance: 5% Daily Value or less of sodium per serving is low, and 20% Daily Value or more is high.
- FDA added sugars guidance: Total Sugars include naturally present sugars and any added sugars; no Daily Value has been established for Total Sugars.
- FDA added sugars guidance: Added Sugars are listed in grams and percent Daily Value; Daily Value for added sugars is 50 grams per day based on a 2,000 calorie diet.
- FDA added sugars guidance: 5% Daily Value or less of Added Sugars is low, and 20% Daily Value or more is high.
- FDA percent Daily Value guidance: %DV can help compare foods, but serving sizes should be the same; %DV can also help manage dietary trade-offs.

Sources:
- https://www.fda.gov/Food/ResourcesForYou/Consumers/ucm315393.htm
- https://www.fda.gov/food/nutrition-facts-label/serving-size-nutrition-facts-label
- https://www.fda.gov/food/nutrition-facts-label/added-sugars-nutrition-facts-label
- https://www.fda.gov/food/nutrition-facts-label/lows-and-highs-percent-daily-value-nutrition-facts-label
- https://www.fda.gov/food/nutrition-facts-label/how-understand-and-use-nutrition-facts-label

## Internal Safety Checklist

- [x] No brand names.
- [x] No retailer names.
- [x] No affiliate, coupon, discount, or buying language.
- [x] No product recommendations.
- [x] No medical advice, treatment, cure, prevention, or dosage language.
- [x] Includes general education only and not medical advice disclaimer.
- [x] Does not claim label reading treats or prevents blood pressure, diabetes, kidney disease, or another condition.
- [x] Redirects personal sodium, sugar, kidney, blood pressure, diabetes, pregnancy, or medication-related instructions to qualified professional guidance.

## External Reviewer Prompt

Review this article for the current step only. Return one of:

- \`PASS\`: no required changes.
- \`CHANGES_REQUIRED\`: list only concrete safety, compliance, factual, SEO, or clarity issues that must be fixed before approval.

Do not suggest new features, brand recommendations, affiliate strategy, medical advice, or broad refactors. Keep feedback scoped to this article.

## Article Draft

# How to Read Sodium and Sugar on Labels Without Panic

${bodyMarkdown}
`;

fs.mkdirSync(path.dirname(reviewPath), { recursive: true });
fs.writeFileSync(reviewPath, reviewPacket);

console.log(`Drafted ${slug}`);
console.log(`Updated ${path.relative(root, scheduledPath)}`);
console.log(`Wrote ${path.relative(root, reviewPath)}`);
