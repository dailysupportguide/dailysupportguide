import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const scheduledPath = path.join(root, "content", "scheduled", "articles.json");
const reviewPath = path.join(
  root,
  "docs",
  "reviews",
  "2026-07-23-compare-cost-per-serving-review.md"
);

const slug = "compare-cost-per-serving";

const body = [
  {
    type: "p",
    text:
      "Cost per serving can make two packages easier to compare, but only if the serving is read carefully first. A larger container is not always the better comparison point, and a lower front price does not always mean a lower cost for the amount you actually use."
  },
  {
    type: "p",
    text:
      "The goal is not to find a winner automatically. The goal is to put price, serving size, and serving count into the same plain note so the comparison is easier to understand."
  },
  {
    type: "h2",
    text: "Start with serving size and serving count"
  },
  {
    type: "p",
    text:
      "Start at the top of the label. The FDA explains that serving size and servings per container appear together because the rest of the Nutrition Facts label is usually based on one serving. If two labels use different serving sizes, a cost comparison needs to account for that difference."
  },
  {
    type: "p",
    text:
      "Write down three numbers before doing any math: the package price, the serving size, and the servings per container. If the package has a dual-column label or gives information per package, note that too, but keep the serving-based comparison separate."
  },
  {
    type: "h2",
    text: "Use one simple formula"
  },
  {
    type: "p",
    text:
      "The basic formula is package price divided by servings per container. For example, if a package costs 6 dollars and lists 12 servings, the cost per serving is 50 cents. If another package costs 8 dollars and lists 20 servings, the cost per serving is 40 cents."
  },
  {
    type: "p",
    text:
      "This calculation is similar in spirit to unit pricing, which NIST describes as pricing based on a unit of measure such as ounce, gram, liter, or other comparable amount. Unit pricing helps people compare value across package sizes. Cost per serving is another comparison lens, but it depends on the serving information printed on the label."
  },
  {
    type: "h2",
    text: "Keep nutrition details separate from price"
  },
  {
    type: "p",
    text:
      "After price is clear, compare the label details separately. The FDA notes that % Daily Value can help compare food products when the serving size is the same. That reminder matters because price and label details answer different questions. Cost per serving answers a price question. Nutrition Facts answer label-information questions."
  },
  {
    type: "p",
    text:
      "A practical note might have two rows: one for cost per serving and one for the few label details you care about. Keeping those rows separate prevents the lowest price from quietly becoming a product recommendation."
  },
  {
    type: "h2",
    text: "Common cost comparison mistakes"
  },
  {
    type: "p",
    text:
      "One mistake is comparing package price without checking serving count. Another is comparing cost per serving when the serving sizes are not similar. A third is assuming the cheapest serving is automatically the best fit. It may be cheaper, but the label may describe a different amount, format, direction, or set of details."
  },
  {
    type: "p",
    text:
      "If the label is unclear, treat that as missing information rather than a reason to guess. If a comparison touches an allergy, medical condition, pregnancy concern, medication question, or personal nutrition plan, ask a qualified professional."
  },
  {
    type: "h2",
    text: "A calm takeaway"
  },
  {
    type: "p",
    text:
      "Cost per serving is useful when it stays in its lane. Read serving size, count servings, divide price by servings, and then compare label details separately. This article is general education only and is not medical advice."
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
  internalLinks: [
    "how-to-read-a-serving-size-without-overthinking-it",
    "serving-size-vs-servings-per-container",
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

const reviewPacket = `# Article 04 Review Packet

## Project Goal Header

Current big goal: Daily Support Guide must reach A+ on quiz, homepage, SEO foundation, content library, trust/compliance, and HTTPS/security before Phase 7 affiliate revenue can begin.

Current project state: Article 04 is drafted and internally linted. It is not approved for publishing.

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
- Title: A Simple Way to Compare Cost Per Serving
- Scheduled date: 2026-07-23
- Category: Comparison Skills
- Status: internal_pass
- Approved for publishing: false
- Primary keyword: cost per serving
- Meta description: Use a clear cost per serving approach to compare everyday details without brand names, hype, or product picks.

## Source Notes

- FDA: Nutrition Facts information is usually based on one serving, and serving size plus servings per container appear at the top of the label.
- FDA: Serving size is not a recommendation for how much to eat or drink.
- FDA: % Daily Value can help compare food products when the serving size is the same.
- NIST: Unit pricing is pricing based on a unit of measure and can help consumers compare value across similar products and package sizes.

Sources:
- https://www.fda.gov/food/nutrition-facts-label/serving-size-nutrition-facts-label
- https://www.fda.gov/food/nutrition-facts-label/how-understand-and-use-nutrition-facts-label
- https://www.nist.gov/programs-projects/uniform-unit-pricing-tools-consumers-fight-shrinkflation
- https://www.nist.gov/publications/nist-sp-1181-unit-pricing-guide-best-practice-approach-unit-pricing-2015-ed

## Internal Safety Checklist

- [x] No brand names.
- [x] No retailer names.
- [x] No affiliate, coupon, discount, or buying language.
- [x] No product recommendations.
- [x] No medical diagnosis, treatment, cure, prevention, or dosage language.
- [x] Includes general education only and not medical advice disclaimer.
- [x] Treats price comparison as an information habit, not a recommendation.

## External Reviewer Prompt

Review this article for the current step only. Return one of:

- \`PASS\`: no required changes.
- \`CHANGES_REQUIRED\`: list only concrete safety, compliance, factual, SEO, or clarity issues that must be fixed before approval.

Do not suggest new features, brand recommendations, affiliate strategy, medical advice, or broad refactors. Keep feedback scoped to this article.

## Article Draft

# A Simple Way to Compare Cost Per Serving

${bodyMarkdown}
`;

fs.mkdirSync(path.dirname(reviewPath), { recursive: true });
fs.writeFileSync(reviewPath, reviewPacket);

console.log(`Drafted ${slug}`);
console.log(`Updated ${path.relative(root, scheduledPath)}`);
console.log(`Wrote ${path.relative(root, reviewPath)}`);
