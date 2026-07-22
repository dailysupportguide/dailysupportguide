import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const scheduledPath = path.join(root, "content", "scheduled", "articles.json");
const reviewPath = path.join(
  root,
  "docs",
  "reviews",
  "2026-07-26-capsules-vs-powders-vs-gummies-review.md"
);

const slug = "capsules-vs-powders-vs-gummies";

const body = [
  {
    type: "p",
    text:
      "Capsules, powders, and gummies can look like three different worlds, but the comparison should start with the same calm question: what does the label say per serving? The form may affect convenience, texture, taste, and how the product is used, but it does not automatically make one option better than another."
  },
  {
    type: "p",
    text:
      "A useful comparison keeps the format in its lane. First read the Supplement Facts panel, then the ingredient list, then the directions, and only then compare practical details such as serving count, storage, and cost per serving."
  },
  {
    type: "h2",
    text: "Start with the Supplement Facts panel"
  },
  {
    type: "p",
    text:
      "The FDA explains that dietary supplement labels use a Supplement Facts panel, and NIH consumer materials describe that panel as listing active ingredients and the amount per serving. That matters because a capsule, powder scoop, or gummy serving may not be the same size or count."
  },
  {
    type: "p",
    text:
      "Before comparing forms, write down the serving size, servings per container, and the amount of the ingredient you are trying to understand. If one product uses two capsules, another uses one scoop, and another uses two gummies, compare the serving information rather than the number of pieces alone."
  },
  {
    type: "h2",
    text: "Read the Other Ingredients line"
  },
  {
    type: "p",
    text:
      "Different forms often need different supporting ingredients. NIH notes that dietary supplement labels may list other ingredients such as fillers, binders, and flavorings. FDA materials also describe supplements in many forms, including capsules, powders, gummies, liquids, tablets, and softgels."
  },
  {
    type: "p",
    text:
      "For a neutral comparison, note whether the format uses capsule materials, sweeteners, flavors, colors, binders, or other supporting ingredients. The goal is not to treat the list as a score. The goal is to understand what you are comparing."
  },
  {
    type: "h2",
    text: "Compare practical fit without making a health claim"
  },
  {
    type: "p",
    text:
      "Capsules may be simple to carry. Powders may make serving measurement more visible. Gummies may feel familiar or easy to remember. Those are practical observations, not health claims. None of them proves that a product is safer, stronger, cleaner, or more effective."
  },
  {
    type: "p",
    text:
      "A better note is plain: how many servings are in the container, how the serving is measured, whether the directions are clear, whether storage is practical, and whether the ingredient list contains anything you need to verify."
  },
  {
    type: "h2",
    text: "Keep cost and label details separate"
  },
  {
    type: "p",
    text:
      "After the serving information is clear, cost per serving can be useful. Keep that calculation separate from the label details. A lower cost per serving does not turn a capsule, powder, or gummy into a product recommendation."
  },
  {
    type: "p",
    text:
      "If a comparison involves an allergy, sensitivity, medication, pregnancy concern, medical condition, swallowing difficulty, or personal nutrition plan, do not rely on format alone. Ask a qualified professional before making a health-related decision."
  },
  {
    type: "h2",
    text: "A calm takeaway"
  },
  {
    type: "p",
    text:
      "Capsules vs powders vs gummies is best treated as a label-reading comparison, not a ranking. Read serving size, amount per serving, Other Ingredients, directions, storage, and cost per serving as separate notes. This article is general education only and is not medical advice."
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
  metaDescription:
    "Compare capsules vs powders vs gummies with neutral label-reading tips for serving size, ingredients, directions, and cost per serving.",
  primaryKeyword: "capsules vs powders vs gummies",
  secondaryKeywords: [
    "capsule powder gummy comparison",
    "supplement forms comparison",
    "compare supplement labels"
  ],
  h2: [
    "Start with the Supplement Facts panel",
    "Read the Other Ingredients line",
    "Compare practical fit without making a health claim",
    "Keep cost and label details separate",
    "A calm takeaway"
  ],
  faq: [
    "Are capsules, powders, and gummies compared the same way?",
    "Should I compare pieces or serving size?",
    "When should I ask a qualified professional instead of guessing?"
  ],
  internalLinks: [
    "how-to-read-a-serving-size-without-overthinking-it",
    "serving-size-vs-servings-per-container",
    "compare-cost-per-serving",
    "other-ingredients-supplement-facts"
  ]
};

fs.writeFileSync(scheduledPath, `${JSON.stringify(scheduled, null, 2)}\n`);

const bodyMarkdown = body
  .map((block) => {
    if (block.type === "h2") return `## ${block.text}`;
    return block.text;
  })
  .join("\n\n");

const reviewPacket = `# Article 07 Review Packet

## Project Goal Header

Current big goal: Daily Support Guide must reach A+ on quiz, homepage, SEO foundation, content library, trust/compliance, and HTTPS/security before Phase 7 affiliate revenue can begin.

Current project state: Article 07 is drafted and internally linted. It is not approved for publishing.

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
- Title: How to Compare Capsules, Powders, and Gummies
- Scheduled date: 2026-07-26
- Category: Comparison Skills
- Status: internal_pass
- Approved for publishing: false
- Primary keyword: capsules vs powders vs gummies
- Meta description: Compare capsules vs powders vs gummies with neutral label-reading tips for serving size, ingredients, directions, and cost per serving.

## Source Notes

- FDA Q&A: dietary supplements may be found in many forms, including tablets, capsules, soft gels, gel caps, liquids, and powders.
- FDA consumer update: supplements come in many forms, including tablets, capsules, soft gels, gel caps, powders, bars, gummies, and liquids.
- FDA/NIH: dietary supplement labels use a Supplement Facts panel with serving size, dietary ingredients, and amount per serving.
- NIH consumer fact sheet: products sold as dietary supplements include a Supplement Facts label listing active ingredients, amount per serving, and other ingredients such as fillers, binders, and flavorings.
- FDA/NIH: FDA does not determine supplement effectiveness before marketing; manufacturers are responsible for labels and safety standards.

Sources:
- https://www.fda.gov/food/information-consumers-using-dietary-supplements/questions-and-answers-dietary-supplements
- https://www.fda.gov/consumers/consumer-updates/fda-101-dietary-supplements
- https://ods.od.nih.gov/factsheets/DietarySupplements-Consumer/
- https://ods.od.nih.gov/factsheets/WYNTK-Consumer/

## Internal Safety Checklist

- [x] No brand names.
- [x] No retailer names.
- [x] No affiliate, coupon, discount, or buying language.
- [x] No product recommendations.
- [x] No medical diagnosis, treatment, cure, prevention, or dosage language.
- [x] Includes general education only and not medical advice disclaimer.
- [x] Treats supplement format as practical label information, not a quality, safety, or effectiveness claim.

## External Reviewer Prompt

Review this article for the current step only. Return one of:

- \`PASS\`: no required changes.
- \`CHANGES_REQUIRED\`: list only concrete safety, compliance, factual, SEO, or clarity issues that must be fixed before approval.

Do not suggest new features, brand recommendations, affiliate strategy, medical advice, or broad refactors. Keep feedback scoped to this article.

## Article Draft

# How to Compare Capsules, Powders, and Gummies

${bodyMarkdown}
`;

fs.mkdirSync(path.dirname(reviewPath), { recursive: true });
fs.writeFileSync(reviewPath, reviewPacket);

console.log(`Drafted ${slug}`);
console.log(`Updated ${path.relative(root, scheduledPath)}`);
console.log(`Wrote ${path.relative(root, reviewPath)}`);
