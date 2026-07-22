import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const scheduledPath = path.join(root, "content", "scheduled", "articles.json");
const reviewPath = path.join(
  root,
  "docs",
  "reviews",
  "2026-08-17-package-size-serving-count-cost-review.md"
);

const slug = "package-size-serving-count-cost";

const body = [
  {
    type: "p",
    text:
      "A larger package can look like a better value, and a smaller package can look easier to understand. Neither impression is enough. Package size, serving count, and unit price need to be read together."
  },
  {
    type: "p",
    text:
      "This guide explains package size serving count comparison in a neutral way. It does not rank products, recommend brands, tell readers what to buy, or replace medical advice from a qualified professional."
  },
  {
    type: "h2",
    text: "Start with the net amount"
  },
  {
    type: "p",
    text:
      "NIST packaging and labeling information explains that consumer packages can be labeled by weight, volume, count, or measure. That net amount is the first package-size detail to copy before comparing products."
  },
  {
    type: "p",
    text:
      "Write down the amount exactly as shown, including the unit. A package may use ounces, grams, fluid ounces, liters, pieces, packets, tablets, capsules, or another count or measure. Do not compare package numbers without the unit."
  },
  {
    type: "h2",
    text: "Add serving size and servings per container"
  },
  {
    type: "p",
    text:
      "FDA serving-size guidance says the Nutrition Facts label shows serving size and servings per container at the top of the label. FDA also says nutrition information is usually based on one serving, though some containers may also show information per package."
  },
  {
    type: "p",
    text:
      "For a clear note, copy package size and serving count as separate fields. A package can be larger without having the same serving size as another package. A serving count can also depend on how the label defines one serving."
  },
  {
    type: "h2",
    text: "Remember serving size is not advice"
  },
  {
    type: "p",
    text:
      "FDA says serving sizes are based on the amount people typically consume, not how much they should consume. FDA also says the serving size is not a recommendation for how much to eat or drink."
  },
  {
    type: "p",
    text:
      "That matters for cost notes because a cost per serving is not a personal instruction. It is only a way to keep one label's serving basis attached to the price information being compared."
  },
  {
    type: "h2",
    text: "Use unit price when it is available"
  },
  {
    type: "p",
    text:
      "NIST explains that unit pricing is pricing based on the cost per unit of measure. A unit price label may show product size, total price, and price per unit, such as price per ounce, gram, liter, quart, or another measure."
  },
  {
    type: "p",
    text:
      "Unit price can make differently sized packages easier to compare, but it still needs context. Check whether the unit is the same across the labels, and keep the total package price and package size in the same note."
  },
  {
    type: "h2",
    text: "Separate cost per package from cost per serving"
  },
  {
    type: "p",
    text:
      "Cost per package is the front price for one package. Cost per serving uses the serving count shown by the label. Unit price uses a unit of measure such as an ounce, gram, liter, or count unit."
  },
  {
    type: "p",
    text:
      "These are three different comparison views. A calm note does not choose one as the winner. It shows what each view is measuring so the reader can see where the numbers differ."
  },
  {
    type: "h2",
    text: "Watch for package-size changes"
  },
  {
    type: "p",
    text:
      "NIST describes shrinkflation as a situation where consumer products are sold at the same price while contents are reduced. NIST presents unit pricing as a tool that can help compare value when package sizes differ."
  },
  {
    type: "p",
    text:
      "For this article, the safe lesson is narrow: copy the current package size, serving count, unit price if available, and total price. Do not assume that a familiar-looking package has the same amount as before."
  },
  {
    type: "h2",
    text: "A simple comparison note"
  },
  {
    type: "p",
    text:
      "Use six fields: package size, unit of measure, servings per container, serving size, total package price, and unit price if shown. If unit price is not shown, write that it is not shown rather than guessing."
  },
  {
    type: "p",
    text:
      "This note supports neutral comparison without turning price, package size, or serving count into a product ranking. It also keeps cost information separate from health, nutrition, or personal use decisions."
  },
  {
    type: "h2",
    text: "A calm takeaway"
  },
  {
    type: "p",
    text:
      "Package size serving count comparison is clearest when net amount, serving size, servings per container, total price, and unit price stay in separate fields. These details can describe cost context, but they cannot decide what is personally right for a reader. This article is general education only and is not medical advice."
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
article.title = "Package Size Serving Count: How to Compare Real Cost";
article.summary =
  "Compare package size serving count by separating net amount, serving size, servings per container, total price, and unit price.";
article.body = body;
article.seo = {
  ...article.seo,
  seoTitle: "Package Size Serving Count: How to Compare Real Cost | Daily Support Guide",
  metaDescription:
    "Learn package size serving count comparison by checking net amount, serving size, servings per container, total price, and unit price.",
  primaryKeyword: "package size serving count",
  secondaryKeywords: [
    "package size serving count guide",
    "compare package unit price",
    "cost per serving package size"
  ],
  h1: "Package Size Serving Count: How to Compare Real Cost",
  h2: [
    "Start with the net amount",
    "Add serving size and servings per container",
    "Remember serving size is not advice",
    "Use unit price when it is available",
    "Separate cost per package from cost per serving",
    "Watch for package-size changes",
    "A simple comparison note",
    "A calm takeaway"
  ],
  faq: [
    "How should I compare package size serving count?",
    "What is the difference between unit price and cost per serving?",
    "When should I keep cost notes separate from nutrition decisions?"
  ],
  internalLinks: [
    "compare-cost-per-serving",
    "serving-size-vs-servings-per-container",
    "product-comparison-notes"
  ]
};

fs.writeFileSync(scheduledPath, `${JSON.stringify(scheduled, null, 2)}\n`);

const bodyMarkdown = body
  .map((block) => {
    if (block.type === "h2") return `## ${block.text}`;
    return block.text;
  })
  .join("\n\n");

const reviewPacket = `# Article 29 Review Packet

## Project Goal Header

Current big goal: Daily Support Guide must reach A+ on quiz, homepage, SEO foundation, content library, trust/compliance, and HTTPS/security before Phase 7 affiliate revenue can begin.

Current project state: Article 29 is drafted and internally linted. It is not approved for publishing.

Current step: External four-AI review for one scheduled article.

Distance to goal: This packet needs ChatGPT, Gemini, Claude, and Grok review. The article can only move from \`internal_pass\` to \`approved\` after all four pass or all actionable comments are resolved and resubmitted.

Non-drift boundaries:
- English-first content for a U.S. audience.
- Brand-neutral. No product names, retailer names, coupons, affiliate links, or product picks.
- General education only. No medical advice, treatment, cure, prevention, personal amount-setting, or individualized nutrition advice.
- Package size, serving count, and cost wording must stay comparison-focused and source-scoped.
- No claims that foods, supplements, prices, package sizes, unit prices, or serving counts treat, prevent, cure, reduce risk of, or improve deficiency, diabetes, blood pressure, heart disease, kidney disease, anemia, digestive conditions, weight, or another condition.
- No Phase 7 monetization language. Affiliate revenue remains locked until the first six readiness categories are A+.
- Keep changes scoped to this article unless a reviewer identifies a concrete safety, compliance, factual, SEO, or clarity issue.

## Article Metadata

- Slug: \`${slug}\`
- Title: Package Size Serving Count: How to Compare Real Cost
- Scheduled date: 2026-08-17
- Category: Comparison Skills
- Status: internal_pass
- Approved for publishing: false
- Primary keyword: package size serving count
- Meta description: Learn package size serving count comparison by checking net amount, serving size, servings per container, total price, and unit price.

## Source Notes

- FDA serving-size guidance: serving size and servings per container appear at the top of the Nutrition Facts label.
- FDA serving-size guidance: nutrition information is usually based on one serving, although some containers may also show information per package.
- FDA serving-size guidance: serving size is based on what people typically consume, not how much they should consume.
- FDA serving-size guidance: serving size is not a recommendation for how much to eat or drink.
- FDA serving-size guidance: one package may contain more than one serving, and some packages use dual-column labels.
- NIST packaging and labeling information: consumer packages can be labeled by weight, volume, count, or measure.
- NIST unit-pricing information: unit pricing is pricing based on cost per unit of measure.
- NIST unit-pricing information: a unit price label often displays product name and size, price, price per unit, and other information.
- NIST unit-pricing information: unit pricing can help compare value when package sizes differ, including shrinkflation situations where contents are reduced while price may remain the same.

Sources:
- https://www.fda.gov/food/nutrition-facts-label/serving-size-nutrition-facts-label
- https://www.fda.gov/consumers/consumer-updates/food-serving-sizes-have-reality-check
- https://www.nist.gov/pml/owm/packaging-and-labeling
- https://www.nist.gov/programs-projects/uniform-unit-pricing-tools-consumers-fight-shrinkflation

## Internal Safety Checklist

- [x] No brand names.
- [x] No retailer names.
- [x] No affiliate, coupon, discount, or buying language.
- [x] No product recommendations.
- [x] No meal plan, calorie goal, macro goal, diagnosis, treatment, cure, prevention, personal amount-setting, or individualized nutrition advice.
- [x] Includes general education only and not medical advice disclaimer.
- [x] Does not claim foods, supplements, prices, package sizes, unit prices, or serving counts treat, prevent, cure, reduce risk of, or improve deficiency, diabetes, blood pressure, heart disease, kidney disease, anemia, digestive conditions, weight, or another condition.
- [x] Does not tell readers what to buy, use, avoid, increase, reduce, combine, or replace.
- [x] Keeps cost comparison separate from health, nutrition, supplement, and personal use decisions.
- [x] Keeps serving size, servings per container, package size, and unit price wording conservative and source-scoped.

## External Reviewer Prompt

Review this article for the current step only. Return one of:

- \`PASS\`: no required changes.
- \`CHANGES_REQUIRED\`: list only concrete safety, compliance, factual, SEO, or clarity issues that must be fixed before approval.

Do not suggest new features, brand recommendations, affiliate strategy, medical advice, or broad refactors. Keep feedback scoped to this article.

## Article Draft

# Package Size Serving Count: How to Compare Real Cost

${bodyMarkdown}
`;

fs.mkdirSync(path.dirname(reviewPath), { recursive: true });
fs.writeFileSync(reviewPath, reviewPacket);

console.log(`Drafted ${slug}`);
console.log(`Updated ${path.relative(root, scheduledPath)}`);
console.log(`Wrote ${path.relative(root, reviewPath)}`);
