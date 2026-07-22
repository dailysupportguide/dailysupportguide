import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const scheduledPath = path.join(root, "content", "scheduled", "articles.json");
const reviewPath = path.join(
  root,
  "docs",
  "reviews",
  "2026-07-22-compare-two-labels-review.md"
);

const slug = "compare-two-labels";

const body = [
  {
    type: "p",
    text:
      "The front of a package is designed to get attention quickly. That does not make every front claim wrong, but it does mean the front is not the best place to start a fair comparison. A calmer first step is to compare the structured facts that appear in the label panel."
  },
  {
    type: "p",
    text:
      "This habit keeps the comparison grounded. Instead of asking which package sounds better, ask what each label actually says, what amount the facts are based on, and whether the two labels are describing similar serving amounts."
  },
  {
    type: "h2",
    text: "Start with the label panel before the front claim"
  },
  {
    type: "p",
    text:
      "When comparing two labels, start with serving size and servings per container. The FDA explains that serving size is the amount the nutrition numbers are based on, and the number of servings determines how those numbers relate to the whole package. If two labels use different serving amounts, the rest of the comparison needs that context."
  },
  {
    type: "p",
    text:
      "Next, look at the same lines on both labels. For many everyday comparisons, useful lines may include calories, sodium, added sugars, fiber, protein, saturated fat, or other listed nutrients. The point is not to turn the label into a score. The point is to compare like with like."
  },
  {
    type: "h2",
    text: "Build a side-by-side note"
  },
  {
    type: "p",
    text:
      "Use a short note with the same fields for both labels: serving size, servings per container, the few nutrients or details you care about, directions if relevant, and anything that is missing or unclear. Keep the note factual. Write what the label says, not what you assume it means."
  },
  {
    type: "p",
    text:
      "After the side-by-side note is done, then return to the front claim. Ask whether the claim matches the label details you just wrote down. The FTC's health product guidance emphasizes that objective claims should be truthful, not misleading, and supported by appropriate evidence. A reader does not need to prove or disprove a claim to use a careful habit: separate the claim from the facts you can verify on the label."
  },
  {
    type: "h2",
    text: "Common comparison mistakes"
  },
  {
    type: "p",
    text:
      "One common mistake is comparing one number without checking serving size. A label may look lower or higher only because the reference amount is smaller or larger. Another mistake is letting a front phrase decide the comparison before the label panel has been read."
  },
  {
    type: "p",
    text:
      "A third mistake is treating missing information as proof of something. Missing or unclear information is better handled as a question mark. If the topic involves an allergy, medical condition, pregnancy concern, medication question, or personal nutrition plan, ask a qualified professional instead of guessing."
  },
  {
    type: "h2",
    text: "A calm takeaway"
  },
  {
    type: "p",
    text:
      "A simple order helps: facts first, front claim second, decision last. Compare serving sizes, matching label lines, and missing information before reacting to the front of the package. This article is general education only and is not medical advice."
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

const reviewPacket = `# Article 03 Review Packet

## Project Goal Header

Current big goal: Daily Support Guide must reach A+ on quiz, homepage, SEO foundation, content library, trust/compliance, and HTTPS/security before Phase 7 affiliate revenue can begin.

Current project state: Article 03 is drafted and internally linted. It is not approved for publishing.

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
- Title: How to Compare Two Labels Without Looking at the Front Claim First
- Scheduled date: 2026-07-22
- Category: Comparison Skills
- Status: internal_pass
- Approved for publishing: false
- Primary keyword: how to compare two labels
- Meta description: Use a clear how to compare two labels approach to compare everyday details without brand names, hype, or product picks.

## Source Notes

- FDA: Nutrition Facts labels include serving size, servings per container, calories, and nutrient information.
- FDA: Serving size helps compare similar foods and is not a recommendation for how much to eat or drink.
- FDA: % Daily Value can be used to compare food products when the serving size is the same.
- FDA: Proposed front-of-package labeling is meant to complement the Nutrition Facts label with at-a-glance information.
- FTC: Health-related advertising claims should be truthful, not misleading, and supported by appropriate evidence.

Sources:
- https://www.fda.gov/food/nutrition-facts-label/how-understand-and-use-nutrition-facts-label
- https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/front-package-nutrition-labeling
- https://www.ftc.gov/business-guidance/resources/health-products-compliance-guidance

## Internal Safety Checklist

- [x] No brand names.
- [x] No retailer names.
- [x] No affiliate, coupon, discount, or buying language.
- [x] No product recommendations.
- [x] No medical diagnosis, treatment, cure, prevention, or dosage language.
- [x] Includes general education only and not medical advice disclaimer.
- [x] Keeps front-claim discussion general, factual, and non-accusatory.

## External Reviewer Prompt

Review this article for the current step only. Return one of:

- \`PASS\`: no required changes.
- \`CHANGES_REQUIRED\`: list only concrete safety, compliance, factual, SEO, or clarity issues that must be fixed before approval.

Do not suggest new features, brand recommendations, affiliate strategy, medical advice, or broad refactors. Keep feedback scoped to this article.

## Article Draft

# How to Compare Two Labels Without Looking at the Front Claim First

${bodyMarkdown}
`;

fs.mkdirSync(path.dirname(reviewPath), { recursive: true });
fs.writeFileSync(reviewPath, reviewPacket);

console.log(`Drafted ${slug}`);
console.log(`Updated ${path.relative(root, scheduledPath)}`);
console.log(`Wrote ${path.relative(root, reviewPath)}`);
