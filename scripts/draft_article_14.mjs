import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const scheduledPath = path.join(root, "content", "scheduled", "articles.json");
const reviewPath = path.join(
  root,
  "docs",
  "reviews",
  "2026-08-02-compare-caffeine-free-drink-labels-review.md"
);

const slug = "compare-caffeine-free-drink-labels";

const body = [
  {
    type: "p",
    text:
      "Drink labels can look simple until two bottles use different serving sizes, different caffeine wording, and different sugar numbers. A calm comparison starts with the label in front of you, not with a guess about which drink sounds lighter."
  },
  {
    type: "p",
    text:
      "This guide is for comparing caffeinated, decaffeinated, and caffeine-free drink labels in a neutral way. It does not rank drinks or tell you what to buy. It simply gives you a repeatable way to read the package."
  },
  {
    type: "h2",
    text: "Start with serving size"
  },
  {
    type: "p",
    text:
      "FDA serving size guidance says the Nutrition Facts label is usually based on one serving, and some containers may also show information for the full package. It also says a serving size is not a recommendation for how much to drink. It reflects the amount people typically consume."
  },
  {
    type: "p",
    text:
      "Before comparing two drinks, check whether the numbers are per 8 fluid ounces, per 12 fluid ounces, per bottle, or per can. A drink can look lower in calories, sugar, sodium, or caffeine simply because the label is using a smaller serving."
  },
  {
    type: "h2",
    text: "Find where caffeine appears"
  },
  {
    type: "p",
    text:
      "The FDA says packaged foods are required to list caffeine in the ingredient list when caffeine is added as a stand-alone ingredient. If caffeine is naturally present inside an ingredient, such as chocolate, the caffeine-containing ingredient may be listed without the word caffeine appearing separately."
  },
  {
    type: "p",
    text:
      "That means a careful label check has two parts. First, look for the word caffeine in the ingredients. Second, look for ingredients or product types that may naturally contain caffeine, such as coffee, tea, cocoa, chocolate, yerba mate, or guarana. If the amount is unclear, the label may not answer every question."
  },
  {
    type: "h2",
    text: "Do not treat decaffeinated as caffeine-free"
  },
  {
    type: "p",
    text:
      "The FDA notes that decaffeinated coffees and teas have less caffeine than regular versions, but still contain some caffeine. FDA consumer guidance gives decaf coffee as an example that may still have a small amount per 8-fluid-ounce cup."
  },
  {
    type: "p",
    text:
      "For comparison purposes, treat decaffeinated as a lower-caffeine category, not automatically as zero. If a label says caffeine-free, compare that wording separately from decaffeinated. If you are sensitive to caffeine or have been told to limit it, ask a qualified professional about your own limits."
  },
  {
    type: "h2",
    text: "Look for voluntary caffeine amounts"
  },
  {
    type: "p",
    text:
      "The FDA says many packaged foods, beverages, and dietary supplements that contain caffeine voluntarily provide information on the label about how much caffeine they contain. It also says the amount of caffeine in specific products and container sizes can vary."
  },
  {
    type: "p",
    text:
      "If a label gives milligrams of caffeine, compare the same unit across products. Write it as milligrams per serving and, if needed, milligrams per container. This keeps a small can, a large bottle, and a multi-serving container from being compared as if they were the same size."
  },
  {
    type: "h2",
    text: "Compare added sugars too"
  },
  {
    type: "p",
    text:
      "Caffeine is only one label detail. The FDA says Added Sugars on the Nutrition Facts label are shown in grams and percent Daily Value, and the agency describes 5% DV or less as low and 20% DV or more as high for added sugars."
  },
  {
    type: "p",
    text:
      "When comparing drinks, place caffeine and added sugars side by side. A caffeine-free drink can still be high in added sugars, and a caffeinated drink can have little or no added sugar. Reading both lines keeps the comparison from becoming one-dimensional."
  },
  {
    type: "h2",
    text: "Use a simple comparison note"
  },
  {
    type: "p",
    text:
      "A useful note can be four lines: serving size, caffeine wording, caffeine amount if listed, and added sugars. Add one more line for anything you personally need to watch, such as carbonation, sodium, or whether the package has more than one serving."
  },
  {
    type: "p",
    text:
      "If you are comparing a drink from a restaurant, cafe, or other retail food establishment, the FDA says those businesses are not required by law to tell you how much caffeine is in the products they serve. The FDA encourages asking whether a product has caffeine and how much."
  },
  {
    type: "h2",
    text: "A calm takeaway"
  },
  {
    type: "p",
    text:
      "A better drink-label comparison starts with serving size, then checks caffeine wording, optional caffeine amounts, and added sugars. Decaffeinated does not automatically mean caffeine-free, and caffeine-free does not automatically describe the whole nutrition profile. This article is general education only and is not medical advice."
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
article.summary =
  "Find caffeine on drink labels by checking serving size, ingredient wording, optional caffeine amounts, and added sugars.";
article.body = body;
article.seo = {
  ...article.seo,
  metaDescription:
    "Find caffeine on drink labels when comparing caffeinated, decaffeinated, and caffeine-free drinks by serving size, ingredients, and added sugars.",
  primaryKeyword: "caffeine on drink labels",
  secondaryKeywords: [
    "caffeine-free drink labels",
    "compare drink labels",
    "decaffeinated vs caffeine-free"
  ],
  h2: [
    "Start with serving size",
    "Find where caffeine appears",
    "Do not treat decaffeinated as caffeine-free",
    "Look for voluntary caffeine amounts",
    "Compare added sugars too",
    "Use a simple comparison note",
    "A calm takeaway"
  ],
  faq: [
    "Does decaffeinated mean caffeine-free?",
    "Where does caffeine appear on drink labels?",
    "How should I compare caffeine and added sugars on drinks?"
  ],
  internalLinks: [
    "serving-size-vs-servings-per-container",
    "percent-daily-value-meaning",
    "how-to-read-ingredient-list",
    "added-sugars-vs-total-sugars"
  ]
};

fs.writeFileSync(scheduledPath, `${JSON.stringify(scheduled, null, 2)}\n`);

const bodyMarkdown = body
  .map((block) => {
    if (block.type === "h2") return `## ${block.text}`;
    return block.text;
  })
  .join("\n\n");

const reviewPacket = `# Article 14 Review Packet

## Project Goal Header

Current big goal: Daily Support Guide must reach A+ on quiz, homepage, SEO foundation, content library, trust/compliance, and HTTPS/security before Phase 7 affiliate revenue can begin.

Current project state: Article 14 is drafted and internally linted. It is not approved for publishing.

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
- Title: How to Find Caffeine on Drink Labels When Comparing Drinks
- Scheduled date: 2026-08-02
- Category: Label Reading
- Status: internal_pass
- Approved for publishing: false
- Primary keyword: caffeine on drink labels
- Meta description: Find caffeine on drink labels when comparing caffeinated, decaffeinated, and caffeine-free drinks by serving size, ingredients, and added sugars.

## Source Notes

- FDA caffeine guidance: for most adults, FDA has cited 400 mg a day as an amount not generally associated with negative effects, but individual sensitivity varies and some people should talk to a health care provider about limits.
- FDA caffeine guidance: packaged foods must list caffeine in ingredients when caffeine is added as a stand-alone ingredient.
- FDA caffeine guidance: if caffeine is naturally present in an ingredient such as chocolate, the ingredient may be listed while caffeine itself may not appear separately.
- FDA caffeine guidance: many packaged foods, beverages, and dietary supplements voluntarily state how much caffeine they contain; caffeine amounts and container sizes vary.
- FDA caffeine guidance: decaffeinated coffees and teas contain less caffeine than regular versions but still contain some caffeine.
- FDA caffeine guidance: restaurants and other retail food establishments are not required by law to tell consumers how much caffeine is in their products, though FDA encourages asking.
- FDA serving size guidance: Nutrition Facts information is usually based on one serving, some containers show per-package information, and serving size is not a recommendation.
- FDA added sugars guidance: Added Sugars are listed in grams and percent Daily Value; 5% DV or less is low and 20% DV or more is high.

Sources:
- https://www.fda.gov/consumers/consumer-updates/spilling-beans-how-much-caffeine-too-much
- https://www.fda.gov/food/nutrition-facts-label/serving-size-nutrition-facts-label
- https://www.fda.gov/food/nutrition-facts-label/added-sugars-nutrition-facts-label

## Internal Safety Checklist

- [x] No brand names.
- [x] No retailer names.
- [x] No affiliate, coupon, discount, or buying language.
- [x] No product recommendations.
- [x] No medical advice, treatment, cure, prevention, or dosage language.
- [x] Includes general education only and not medical advice disclaimer.
- [x] Does not claim a drink treats or prevents a condition.
- [x] Keeps caffeine guidance general and non-individualized.

## External Reviewer Prompt

Review this article for the current step only. Return one of:

- \`PASS\`: no required changes.
- \`CHANGES_REQUIRED\`: list only concrete safety, compliance, factual, SEO, or clarity issues that must be fixed before approval.

Do not suggest new features, brand recommendations, affiliate strategy, medical advice, or broad refactors. Keep feedback scoped to this article.

## Article Draft

# How to Find Caffeine on Drink Labels When Comparing Drinks

${bodyMarkdown}
`;

fs.mkdirSync(path.dirname(reviewPath), { recursive: true });
fs.writeFileSync(reviewPath, reviewPacket);

console.log(`Drafted ${slug}`);
console.log(`Updated ${path.relative(root, scheduledPath)}`);
console.log(`Wrote ${path.relative(root, reviewPath)}`);
