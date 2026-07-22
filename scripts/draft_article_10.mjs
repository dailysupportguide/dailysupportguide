import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const scheduledPath = path.join(root, "content", "scheduled", "articles.json");
const reviewPath = path.join(
  root,
  "docs",
  "reviews",
  "2026-07-29-product-comparison-checklist-review.md"
);

const slug = "product-comparison-checklist";

const body = [
  {
    type: "p",
    text:
      "A product comparison checklist is most helpful when it slows the decision down just enough to make the facts visible. The goal is not to find a perfect product or copy someone else's choice. The goal is to compare the same kinds of information in the same order."
  },
  {
    type: "p",
    text:
      "This checklist is written for everyday products, including labels people may read for food, household, or supplement-related decisions. It stays brand-neutral and does not recommend what anyone should buy."
  },
  {
    type: "h2",
    text: "Start with a matching description"
  },
  {
    type: "p",
    text:
      "The FTC suggests making notes about a product's manufacturer or model number, plus details like size, color, and shipping fees when comparison shopping. The same idea works for a neutral checklist: make sure the two items are actually comparable before judging price, reviews, or front-of-package claims."
  },
  {
    type: "p",
    text:
      "For a simple side-by-side note, write the product type, package size, serving or use amount when relevant, key label facts, and any extra fees. If two products use different sizes or formats, mark that difference clearly instead of treating the front price as the whole comparison."
  },
  {
    type: "h2",
    text: "Compare total cost, not only front price"
  },
  {
    type: "p",
    text:
      "FTC consumer guidance says comparison shopping should include the total cost, including shipping, handling, delivery, taxes, and other fees. A lower listed price can become less useful if the final checkout cost, return cost, or required bundle changes the real comparison."
  },
  {
    type: "p",
    text:
      "A calm note can separate front price, cost per serving or use, shipping or delivery charges, and return costs. That structure helps prevent a bright discount or short-term deal from becoming the only detail that gets remembered."
  },
  {
    type: "h2",
    text: "Read the label facts before the claim"
  },
  {
    type: "p",
    text:
      "For food labels, FDA consumer materials explain that serving size, servings per container, calories, and nutrient information are product-specific details on the Nutrition Facts label. FDA also explains that serving sizes are standardized to make it easier to compare similar foods, and that serving size is not a recommendation for how much to eat or drink."
  },
  {
    type: "p",
    text:
      "That same label-reading habit can help with daily comparisons. Read the structured facts first, then decide what a front claim or marketing phrase actually adds. If a claim sounds broad, write down the exact words and compare them with the label facts you can verify."
  },
  {
    type: "h2",
    text: "Check reviews with a critical eye"
  },
  {
    type: "p",
    text:
      "FTC online shopping guidance warns that star ratings alone can be misleading because some reviews and ratings are fake or influenced. It recommends checking several sources and considering where a review is posted, who wrote it, and whether the reviewer may have received something in exchange."
  },
  {
    type: "p",
    text:
      "Reviews can still be useful, but they should be one row in the checklist, not the whole decision. A neutral comparison might note repeated practical themes, unusual complaints, unclear incentives, and whether the review source appears independent."
  },
  {
    type: "h2",
    text: "Check delivery, return, and refund terms"
  },
  {
    type: "p",
    text:
      "FTC online shopping guidance also points readers to delivery, return, and refund policies. This belongs in its own checklist row because a product can look comparable on price while being very different once timing, return windows, restocking fees, or return shipping are included."
  },
  {
    type: "p",
    text:
      "A neutral note can ask: when is the item expected to arrive, how many days are allowed for returns, who pays return shipping, whether restocking fees apply, and whether sale or clearance items have different rules. Those details are not product recommendations; they are comparison facts."
  },
  {
    type: "h2",
    text: "Keep health-related claims in their own row"
  },
  {
    type: "p",
    text:
      "FTC health product guidance says advertising claims about health-related products should be truthful, not misleading, and supported by appropriate evidence. For a consumer checklist, that means health-related promises should be treated as claims to examine carefully, not as shortcuts to a personal decision."
  },
  {
    type: "p",
    text:
      "If a comparison involves a medical condition, medication, pregnancy, allergy, sensitivity, surgery, or a personal nutrition plan, the checklist should end with an unresolved question rather than a product conclusion. Ask a qualified professional who can consider the situation."
  },
  {
    type: "h2",
    text: "A calm takeaway"
  },
  {
    type: "p",
    text:
      "A beginner-friendly product comparison checklist uses the same rows each time: matching description, total cost, label facts, claims, reviews, return terms, and unresolved questions. It does not need brand names or product picks to be useful. This article is general education only and is not medical advice."
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
article.body = body;
article.seo = {
  ...article.seo,
  metaDescription:
    "Use a beginner-friendly product comparison checklist to compare daily products by facts, total cost, labels, reviews, and claims.",
  primaryKeyword: "product comparison checklist",
  secondaryKeywords: [
    "compare daily products",
    "product comparison notes",
    "how to compare product labels"
  ],
  h2: [
    "Start with a matching description",
    "Compare total cost, not only front price",
    "Read the label facts before the claim",
    "Check reviews with a critical eye",
    "Check delivery, return, and refund terms",
    "Keep health-related claims in their own row",
    "A calm takeaway"
  ],
  faq: [
    "What should a product comparison checklist include?",
    "Why should total cost be compared instead of only front price?",
    "How should reviews, return terms, and health-related claims be handled?"
  ],
  internalLinks: [
    "compare-two-labels",
    "compare-cost-per-serving",
    "how-to-read-ingredient-list",
    "third-party-testing-supplements"
  ]
};

fs.writeFileSync(scheduledPath, `${JSON.stringify(scheduled, null, 2)}\n`);

const bodyMarkdown = body
  .map((block) => {
    if (block.type === "h2") return `## ${block.text}`;
    return block.text;
  })
  .join("\n\n");

const reviewPacket = `# Article 10 Review Packet

## Project Goal Header

Current big goal: Daily Support Guide must reach A+ on quiz, homepage, SEO foundation, content library, trust/compliance, and HTTPS/security before Phase 7 affiliate revenue can begin.

Current project state: Article 10 is drafted and internally linted. It is not approved for publishing.

Current step: External four-AI review for one scheduled article.

Distance to goal: This packet needs ChatGPT, Gemini, Claude, and Grok review. The article can only move from \`internal_pass\` to \`approved\` after all four pass or all actionable comments are resolved and resubmitted.

Non-drift boundaries:
- English-first content for a U.S. audience.
- Brand-neutral. No product names, retailer names, coupons, affiliate links, or product picks.
- General education only. No diagnosis, treatment, cure, prevention, dosage, or individualized nutrition advice.
- No Phase 7 monetization language. Affiliate revenue remains locked until the first six readiness categories are A+.
- Keep changes scoped to this article unless a reviewer identifies a concrete safety, compliance, factual, SEO, or clarity issue.

## Article Metadata

- Slug: \`${slug}\`
- Title: A Beginner-Friendly Checklist for Comparing Daily Products
- Scheduled date: 2026-07-29
- Category: Comparison Skills
- Status: internal_pass
- Approved for publishing: false
- Primary keyword: product comparison checklist
- Meta description: Use a beginner-friendly product comparison checklist to compare daily products by facts, total cost, labels, reviews, and claims.

## Source Notes

- FTC Online Shopping guidance: before buying online, shop around, check sellers and products, and keep records of purchases.
- FTC Online Shopping guidance: when comparison shopping, make notes about manufacturer or model number and details like size, color, and shipping fees.
- FTC Online Shopping guidance: comparison shopping should include total cost, including shipping, handling, delivery, taxes, and other fees.
- FTC Online Shopping guidance: read the entire product description, including fine print, and check delivery, return, and refund policies.
- FTC Online Shopping guidance: return-policy checks can include who pays return shipping, how many days are allowed, and whether restocking fees apply.
- FTC Online Shopping guidance: do not rely on star ratings alone because some reviews and ratings are fake or misleading; check several sources and consider the reviewer and source.
- FDA Nutrition Facts Label guidance: serving size, servings per container, calories, and nutrient information are product-specific label details.
- FDA Nutrition Facts Label guidance: serving sizes are standardized to make it easier to compare similar foods, and serving size is not a recommendation of how much to eat or drink.
- FTC Health Products Compliance Guidance: advertising claims for health-related products should be truthful, not misleading, and supported by adequate substantiation.

Sources:
- https://consumer.ftc.gov/online-shopping
- https://www.fda.gov/food/nutrition-facts-label/how-understand-and-use-nutrition-facts-label
- https://www.fda.gov/consumers/consumer-updates/food-serving-sizes-have-reality-check
- https://www.ftc.gov/business-guidance/resources/health-products-compliance-guidance

## Internal Safety Checklist

- [x] No brand names.
- [x] No retailer names.
- [x] No affiliate, coupon, discount, or buying language.
- [x] No product recommendations.
- [x] No medical diagnosis, treatment, cure, prevention, or dosage language.
- [x] Includes general education only and not medical advice disclaimer.
- [x] Treats reviews and claims as information to evaluate, not as recommendations.
- [x] Keeps medical, allergy, medication, pregnancy, surgery, and personal nutrition concerns out of automated conclusions.

## External Reviewer Prompt

Review this article for the current step only. Return one of:

- \`PASS\`: no required changes.
- \`CHANGES_REQUIRED\`: list only concrete safety, compliance, factual, SEO, or clarity issues that must be fixed before approval.

Do not suggest new features, brand recommendations, affiliate strategy, medical advice, or broad refactors. Keep feedback scoped to this article.

## Article Draft

# A Beginner-Friendly Checklist for Comparing Daily Products

${bodyMarkdown}
`;

fs.mkdirSync(path.dirname(reviewPath), { recursive: true });
fs.writeFileSync(reviewPath, reviewPacket);

console.log(`Drafted ${slug}`);
console.log(`Updated ${path.relative(root, scheduledPath)}`);
console.log(`Wrote ${path.relative(root, reviewPath)}`);
