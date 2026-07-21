import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const scheduledPath = path.join(root, "content", "scheduled", "articles.json");
const reviewPath = path.join(
  root,
  "docs",
  "reviews",
  "2026-07-21-serving-size-vs-servings-per-container-review.md"
);

const slug = "serving-size-vs-servings-per-container";

const body = [
  {
    type: "p",
    text:
      "Serving size and servings per container sit close together on a Nutrition Facts label, but they answer two different questions. Serving size tells you the amount the nutrition numbers are based on. Servings per container tells you how many of those amounts are in the whole package."
  },
  {
    type: "p",
    text:
      "That small difference matters because a label can look simple at first glance while still describing only part of the package. Once you know which number is the reference amount and which number describes the container, the rest of the panel becomes much easier to compare."
  },
  {
    type: "h2",
    text: "What serving size vs servings per container means on a label"
  },
  {
    type: "p",
    text:
      "Serving size is the label's measuring unit. It may be shown in a familiar household measure, such as a cup, piece, slice, tablespoon, or other everyday amount, followed by a metric amount. The nutrition facts underneath are usually based on one serving."
  },
  {
    type: "p",
    text:
      "Servings per container is the package count. It tells you whether the container holds one serving, two servings, eight servings, or some other amount. If a package has more than one serving and you use the whole package at once, the nutrition numbers usually need to be multiplied by the number of servings, unless the label also gives a per-package column."
  },
  {
    type: "h2",
    text: "Where readers often get turned around"
  },
  {
    type: "p",
    text:
      "The most common mix-up is treating serving size as a suggested amount. It is better to read it as a label reference point. The FDA explains that serving sizes are based on amounts people typically eat or drink, not on how much someone should eat or drink."
  },
  {
    type: "p",
    text:
      "Another common mix-up is assuming a small container always equals one serving. Some containers list more than one serving even when the package looks easy to finish. Other labels may show dual columns: one for a serving and one for the entire package. That second column can be useful when the whole container is a realistic use case."
  },
  {
    type: "h2",
    text: "A simple label-reading checklist"
  },
  {
    type: "p",
    text:
      "Start at the top of the label. First, write down the serving size. Second, write down the servings per container. Third, ask whether the amount you are comparing is one serving, part of a serving, or the whole package. Fourth, use that answer before comparing calories, sodium, sugar, fiber, protein, vitamins, minerals, or other listed details."
  },
  {
    type: "p",
    text:
      "For supplements, the same basic habit helps. A Supplement Facts panel lists a serving size and amount per serving, while other parts of the label may list ingredients that do not have a Daily Value. Keeping your note focused on the stated serving prevents you from comparing unlike amounts."
  },
  {
    type: "h2",
    text: "A calm takeaway"
  },
  {
    type: "p",
    text:
      "A practical way to remember the difference is this: serving size is the unit, and servings per container is the count. Read both before judging any other number on the label. This article is general education only and is not medical advice. If a label affects a medical condition, allergy, pregnancy concern, medication question, or personal nutrition plan, ask a qualified professional instead of guessing."
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

fs.writeFileSync(scheduledPath, `${JSON.stringify(scheduled, null, 2)}\n`);

const bodyMarkdown = body
  .map((block) => {
    if (block.type === "h2") return `## ${block.text}`;
    return block.text;
  })
  .join("\n\n");

const reviewPacket = `# Article 02 Review Packet

## Project Goal Header

Current big goal: Build Daily Support Guide as an English-first, U.S.-audience informational site with a quiz, neutral health-adjacent education articles, SEO foundations, and no affiliate links until the site is trustworthy enough for a later monetization phase.

Current project state: Article 02 is drafted and internally linted. It is not approved for publishing.

Current step: External four-AI review for one scheduled article.

Distance to goal: This packet needs ChatGPT, Gemini, Claude, and Grok review. The article can only move from \`internal_pass\` to \`approved\` after all four pass or all actionable comments are resolved and resubmitted.

Non-drift boundaries:
- English-first content for a U.S. audience.
- Brand-neutral. No product names, retailer names, coupons, affiliate links, or product picks.
- General education only. No diagnosis, treatment, cure, prevention, dosage, or individualized nutrition advice.
- Keep changes scoped to this article unless a reviewer identifies a concrete safety, compliance, SEO, or clarity issue.

## Article Metadata

- Slug: \`${slug}\`
- Title: The Difference Between Serving Size and Servings Per Container
- Scheduled date: 2026-07-21
- Category: Label Reading
- Status: internal_pass
- Approved for publishing: false
- Primary keyword: serving size vs servings per container
- Meta description: Learn serving size vs servings per container in plain English with neutral label-reading tips, comparison questions, and practical examples.

## Source Notes

- FDA: Serving size and servings per container appear at the top of Nutrition Facts labels.
- FDA: Nutrition information is usually based on one serving, though some containers may also show per-package information.
- FDA: Serving size is based on amounts people typically consume and is not a recommendation for how much to eat or drink.
- NIH Office of Dietary Supplements: Supplement Facts labels include serving size, dietary ingredients, amount per serving, and percent Daily Value when established.

Sources:
- https://www.fda.gov/food/nutrition-facts-label/serving-size-nutrition-facts-label
- https://www.fda.gov/food/nutrition-facts-label/how-understand-and-use-nutrition-facts-label
- https://ods.od.nih.gov/factsheets/dietarysupplements-Consumer/

## Internal Safety Checklist

- [x] No brand names.
- [x] No retailer names.
- [x] No affiliate, coupon, discount, or buying language.
- [x] No product recommendations.
- [x] No medical diagnosis, treatment, cure, prevention, or dosage language.
- [x] Includes general education only and not medical advice disclaimer.
- [x] Keeps supplement references general and label-focused.

## External Reviewer Prompt

Review this article for the current step only. Return one of:

- \`PASS\`: no required changes.
- \`CHANGES_REQUIRED\`: list only concrete safety, compliance, factual, SEO, or clarity issues that must be fixed before approval.

Do not suggest new features, brand recommendations, affiliate strategy, medical advice, or broad refactors. Keep feedback scoped to this article.

## Article Draft

# The Difference Between Serving Size and Servings Per Container

${bodyMarkdown}
`;

fs.mkdirSync(path.dirname(reviewPath), { recursive: true });
fs.writeFileSync(reviewPath, reviewPacket);

console.log(`Drafted ${slug}`);
console.log(`Updated ${path.relative(root, scheduledPath)}`);
console.log(`Wrote ${path.relative(root, reviewPath)}`);
