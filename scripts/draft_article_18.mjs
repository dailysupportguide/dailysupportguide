import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const scheduledPath = path.join(root, "content", "scheduled", "articles.json");
const reviewPath = path.join(
  root,
  "docs",
  "reviews",
  "2026-08-06-compare-packaged-snacks-review.md"
);

const slug = "compare-packaged-snacks";

const body = [
  {
    type: "p",
    text:
      "Packaged snacks are easy to compare too quickly. The front of a package may highlight one detail, while the Nutrition Facts label gives the steadier information: serving size, servings per container, percent Daily Value, and the nutrient lines that matter for the comparison."
  },
  {
    type: "p",
    text:
      "This guide is not about ranking snacks or making food rules. It is a neutral way to compare similar packaged snacks by portion and context without using brand names, product picks, or medical advice."
  },
  {
    type: "h2",
    text: "Start with the snack category"
  },
  {
    type: "p",
    text:
      "A useful comparison starts with similar items. Compare crackers with crackers, chips with chips, bars with bars, and trail mixes with trail mixes. Different snack types can have different serving sizes, textures, ingredients, and uses, so comparing across categories can create more confusion than clarity."
  },
  {
    type: "p",
    text:
      "The goal is to ask a narrow question: among two similar options, what does the label actually show per serving or per package? That keeps the comparison practical instead of turning it into a general judgment."
  },
  {
    type: "h2",
    text: "Check serving size before comparing numbers"
  },
  {
    type: "p",
    text:
      "FDA serving size guidance says the Nutrition Facts information is usually based on one serving, and some containers may also show information per package. FDA also says serving size is not a recommendation for how much to eat or drink."
  },
  {
    type: "p",
    text:
      "For packaged snacks, this matters because one label may describe a small handful, one pouch, one bar, or part of a larger bag. Before comparing calories, sodium, added sugars, fiber, or saturated fat, write down the serving size for each option."
  },
  {
    type: "h2",
    text: "Notice servings per container"
  },
  {
    type: "p",
    text:
      "FDA notes that one package may contain more than one serving, and some packages use dual-column labels that show both one serving and the entire package. That can matter when a snack is commonly eaten as a whole pouch or container."
  },
  {
    type: "p",
    text:
      "A simple note can prevent overthinking: per serving, per package, or both. If one snack is individually packed and another is a multi-serving bag, compare the numbers in the context of how the package is likely to be used."
  },
  {
    type: "h2",
    text: "Use percent Daily Value as the shared scale"
  },
  {
    type: "p",
    text:
      "FDA explains that percent Daily Value shows how much a nutrient in one serving contributes to a total daily diet. As a general guide, 5% Daily Value or less of a nutrient per serving is low, and 20% Daily Value or more is high."
  },
  {
    type: "p",
    text:
      "That shared scale helps when two labels use different-looking numbers. Instead of reacting to grams or milligrams alone, compare the percent Daily Value for similar serving sizes. If serving sizes are not similar, make a note of that mismatch."
  },
  {
    type: "h2",
    text: "Separate nutrients to limit from nutrients to get more of"
  },
  {
    type: "p",
    text:
      "FDA label guidance identifies saturated fat, sodium, and added sugars as nutrients to get less of, and dietary fiber, vitamin D, calcium, iron, and potassium as nutrients to get more of. For snack comparisons, fiber, sodium, added sugars, and saturated fat are often the lines people notice first."
  },
  {
    type: "p",
    text:
      "Use those lines as comparison details, not as a verdict. One snack may have more fiber and also more sodium. Another may have lower added sugars but a smaller serving. The label is most useful when you compare trade-offs clearly."
  },
  {
    type: "h2",
    text: "Add context before deciding what matters"
  },
  {
    type: "p",
    text:
      "A snack for a desk drawer, a road trip, an after-school routine, or a quick side item may be used differently. Context does not change the label, but it changes which comparison question is useful."
  },
  {
    type: "p",
    text:
      "For example, you might compare whether the package is single-serve or multi-serve, whether the serving size matches your usual use, and whether the nutrient trade-offs fit the rest of the day. Keep the question concrete so the comparison stays calm."
  },
  {
    type: "h2",
    text: "A five-line snack comparison note"
  },
  {
    type: "p",
    text:
      "Use five lines: snack type, serving size, servings per container, percent Daily Value lines you care about, and likely use context. If the labels are not using similar serving sizes, write that down before comparing the numbers."
  },
  {
    type: "p",
    text:
      "If a health professional has given you a personal sodium, sugar, fiber, fat, allergy, diabetes, kidney, pregnancy, medication, or medical nutrition instruction, follow that guidance instead of using a general comparison article as your decision rule."
  },
  {
    type: "h2",
    text: "A calm takeaway"
  },
  {
    type: "p",
    text:
      "Packaged snack comparisons are easier when you compare similar items, start with serving size, check servings per container, use percent Daily Value, and add real-use context. This article is general education only and is not medical advice."
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
article.title = "How to Compare Packaged Snacks by Portion and Context";
article.summary =
  "Compare packaged snacks with serving size, servings per container, percent Daily Value, and practical context without brand names or product picks.";
article.body = body;
article.seo = {
  ...article.seo,
  seoTitle:
    "How to Compare Packaged Snacks by Portion and Context | Daily Support Guide",
  metaDescription:
    "Compare packaged snacks by serving size, servings per container, percent Daily Value, and context without brand names or product picks.",
  primaryKeyword: "compare packaged snacks",
  secondaryKeywords: [
    "compare packaged snacks guide",
    "snack label comparison",
    "compare snack labels"
  ],
  h1: "How to Compare Packaged Snacks by Portion and Context",
  h2: [
    "Start with the snack category",
    "Check serving size before comparing numbers",
    "Notice servings per container",
    "Use percent Daily Value as the shared scale",
    "Separate nutrients to limit from nutrients to get more of",
    "Add context before deciding what matters",
    "A five-line snack comparison note",
    "A calm takeaway"
  ],
  faq: [
    "How do I compare packaged snacks without relying on front-package claims?",
    "Why does serving size matter when comparing snack labels?",
    "When should I follow professional guidance instead of a general snack comparison?"
  ],
  internalLinks: [
    "compare-two-labels",
    "serving-size-vs-servings-per-container",
    "percent-daily-value-meaning",
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

const reviewPacket = `# Article 18 Review Packet

## Project Goal Header

Current big goal: Daily Support Guide must reach A+ on quiz, homepage, SEO foundation, content library, trust/compliance, and HTTPS/security before Phase 7 affiliate revenue can begin.

Current project state: Article 18 is drafted and internally linted. It is not approved for publishing.

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
- Title: How to Compare Packaged Snacks by Portion and Context
- Scheduled date: 2026-08-06
- Category: Comparison Skills
- Status: internal_pass
- Approved for publishing: false
- Primary keyword: compare packaged snacks
- Meta description: Compare packaged snacks by serving size, servings per container, percent Daily Value, and context without brand names or product picks.

## Source Notes

- FDA serving size guidance: first look at serving size and servings per container; Nutrition Facts information is usually based on one serving, and some containers also show per-package information.
- FDA serving size guidance: serving size is not a recommendation of how much to eat or drink.
- FDA serving size guidance: one package may contain more than one serving; some packages use dual-column labels that show one serving and the entire package.
- FDA percent Daily Value guidance: percent Daily Value shows how much a nutrient in one serving contributes to a total daily diet.
- FDA percent Daily Value guidance: 5% Daily Value or less per serving is considered low, and 20% Daily Value or more per serving is considered high.
- FDA percent Daily Value guidance: %DV can help compare food products, but serving sizes should be the same.
- FDA label guidance: saturated fat, sodium, and added sugars are nutrients to get less of.
- FDA label guidance: dietary fiber, vitamin D, calcium, iron, and potassium are nutrients to get more of.

Sources:
- https://www.fda.gov/food/nutrition-facts-label/serving-size-nutrition-facts-label
- https://www.fda.gov/food/nutrition-facts-label/lows-and-highs-percent-daily-value-nutrition-facts-label
- https://www.fda.gov/food/nutrition-facts-label/how-understand-and-use-nutrition-facts-label
- https://www.fda.gov/food/nutrition-facts-label/whats-nutrition-facts-label
- https://www.fda.gov/food/nutrition-facts-label/daily-value-nutrition-and-supplement-facts-labels

## Internal Safety Checklist

- [x] No brand names.
- [x] No retailer names.
- [x] No affiliate, coupon, discount, or buying language.
- [x] No product recommendations.
- [x] No medical advice, treatment, cure, prevention, or dosage language.
- [x] Includes general education only and not medical advice disclaimer.
- [x] Does not claim snack comparison treats or prevents diabetes, high blood pressure, kidney disease, obesity, or another condition.
- [x] Redirects personal sodium, sugar, fiber, fat, allergy, diabetes, kidney, pregnancy, medication, or medical nutrition instructions to qualified professional guidance.

## External Reviewer Prompt

Review this article for the current step only. Return one of:

- \`PASS\`: no required changes.
- \`CHANGES_REQUIRED\`: list only concrete safety, compliance, factual, SEO, or clarity issues that must be fixed before approval.

Do not suggest new features, brand recommendations, affiliate strategy, medical advice, or broad refactors. Keep feedback scoped to this article.

## Article Draft

# How to Compare Packaged Snacks by Portion and Context

${bodyMarkdown}
`;

fs.mkdirSync(path.dirname(reviewPath), { recursive: true });
fs.writeFileSync(reviewPath, reviewPacket);

console.log(`Drafted ${slug}`);
console.log(`Updated ${path.relative(root, scheduledPath)}`);
console.log(`Wrote ${path.relative(root, reviewPath)}`);
