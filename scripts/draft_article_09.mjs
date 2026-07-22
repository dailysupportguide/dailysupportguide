import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const scheduledPath = path.join(root, "content", "scheduled", "articles.json");
const reviewPath = path.join(
  root,
  "docs",
  "reviews",
  "2026-07-28-how-to-read-allergen-statements-review.md"
);

const slug = "how-to-read-allergen-statements";

const body = [
  {
    type: "p",
    text:
      "Allergen statements can feel stressful because the words on a label matter. A better approach is to read the label in a steady order instead of trying to guess from one bold line, one warning, or one familiar ingredient name."
  },
  {
    type: "p",
    text:
      "This guide is a neutral label-reading checklist for a U.S. audience. It does not rank products, give medical advice, or replace guidance from a qualified professional for someone with an allergy or other personal health concern."
  },
  {
    type: "h2",
    text: "Start with the major allergen list"
  },
  {
    type: "p",
    text:
      "The FDA identifies nine major food allergens: milk, eggs, fish, crustacean shellfish, tree nuts, peanuts, wheat, soybeans, and sesame. Sesame became the ninth major food allergen under the FASTER Act, with labeling requirements applying to packaged foods and dietary supplements beginning January 1, 2023."
  },
  {
    type: "p",
    text:
      "Some labels also need to be specific. FDA materials explain that the type of tree nut and the species of fish or crustacean shellfish must be declared. That means a careful reader should look for the source word, not only a broad category."
  },
  {
    type: "h2",
    text: "Check both the ingredient list and Contains statement"
  },
  {
    type: "p",
    text:
      "FDA materials explain that the food source of a major allergen can appear in parentheses after an ingredient name, or in a Contains statement immediately after or next to the ingredient list. Sometimes the common or usual ingredient name already identifies the allergen source."
  },
  {
    type: "p",
    text:
      "A no-guessing review checks both places. Read the ingredient list from top to bottom, then read any Contains statement separately. If the two sections use different wording, write down the exact words instead of smoothing them into your own shorthand."
  },
  {
    type: "h2",
    text: "Treat advisory statements as separate information"
  },
  {
    type: "p",
    text:
      "Advisory language such as may contain or produced in a facility that also uses is different from required major allergen labeling. FDA materials describe these advisory statements as voluntary, and FDA has noted that there is no uniform rule that makes one advisory phrase mean a higher or lower level of allergen presence than another."
  },
  {
    type: "p",
    text:
      "That means advisory wording should not be turned into a simple risk ranking. A phrase like produced in a facility does not automatically mean less concern than may contain. FDA also says advisory statements should not be used as a substitute for current good manufacturing practices and must be truthful and not misleading."
  },
  {
    type: "h2",
    text: "Use a no-guessing note"
  },
  {
    type: "p",
    text:
      "When a label matters, make a short note with four lines: exact allergen or source words found, where those words appeared, any advisory language, and questions that remain unresolved. This turns a fast scan into a repeatable reading process."
  },
  {
    type: "p",
    text:
      "For example, the note might say: sesame listed in Contains statement; tree nut type named in ingredient list; advisory statement present; manufacturer question still unclear. If the label is unclear and the issue involves an allergy, medical condition, medication, pregnancy, or a personal nutrition plan, ask a qualified professional or contact the manufacturer instead of guessing."
  },
  {
    type: "h2",
    text: "A calm takeaway"
  },
  {
    type: "p",
    text:
      "Learning how to read allergen statements is about order and precision. Check the major allergen source, read both the ingredient list and Contains statement, treat advisory language separately, and keep unresolved questions visible. This article is general education only and is not medical advice."
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
    "Learn how to read allergen statements with neutral label-reading tips for ingredient lists, Contains statements, and advisory language.",
  primaryKeyword: "how to read allergen statements",
  secondaryKeywords: [
    "food allergen labels",
    "contains statement allergen label",
    "allergen advisory statements"
  ],
  h2: [
    "Start with the major allergen list",
    "Check both the ingredient list and Contains statement",
    "Treat advisory statements as separate information",
    "Use a no-guessing note",
    "A calm takeaway"
  ],
  faq: [
    "What are the nine major food allergens in the United States?",
    "Where can major allergens appear on a label?",
    "Do advisory statements like may contain have one standard meaning?"
  ],
  internalLinks: [
    "how-to-read-ingredient-list",
    "other-ingredients-supplement-facts",
    "compare-two-labels",
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

const reviewPacket = `# Article 09 Review Packet

## Project Goal Header

Current big goal: Daily Support Guide must reach A+ on quiz, homepage, SEO foundation, content library, trust/compliance, and HTTPS/security before Phase 7 affiliate revenue can begin.

Current project state: Article 09 is drafted and internally linted. It is not approved for publishing.

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
- Title: How to Read Allergen Statements Without Guessing
- Scheduled date: 2026-07-28
- Category: Label Reading
- Status: internal_pass
- Approved for publishing: false
- Primary keyword: how to read allergen statements
- Meta description: Learn how to read allergen statements with neutral label-reading tips for ingredient lists, Contains statements, and advisory language.

## Source Notes

- FDA Food Allergies page: labels must identify the food source of all major food allergens used to make the food.
- FDA Food Allergies page: the allergen source can appear in parentheses following the ingredient name or immediately after or next to the ingredient list in a Contains statement.
- FDA FASTER Act page: sesame is the ninth major food allergen, and as of January 1, 2023, sesame must be labeled on packaged foods and dietary supplements.
- FDA major food allergen page: the major food allergens are milk, eggs, fish, crustacean shellfish, tree nuts, peanuts, wheat, soybeans, and sesame.
- FDA Food Allergies page: the type of tree nut and the species of fish or crustacean shellfish must be declared.
- FDA current allergen landscape page: advisory statements are voluntary, no uniform rule governs what they mean, and statement type does not reliably correlate with allergen presence or levels.
- FDA Food Allergies page: advisory statements should not substitute for current good manufacturing practices and must be truthful and not misleading.

Sources:
- https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/food-allergies
- https://www.fda.gov/food/food-allergies/faster-act-sesame-ninth-major-food-allergen
- https://www.fda.gov/industry/fda-basics-industry/what-major-food-allergen
- https://www.fda.gov/food/conversations-experts-food-topics/current-food-allergen-landscape

## Internal Safety Checklist

- [x] No brand names.
- [x] No retailer names.
- [x] No affiliate, coupon, discount, or buying language.
- [x] No product recommendations.
- [x] No medical diagnosis, treatment, cure, prevention, or dosage language.
- [x] Includes general education only and not medical advice disclaimer.
- [x] Separates required allergen labeling from voluntary advisory statements.
- [x] Avoids ranking advisory phrases as higher or lower risk.

## External Reviewer Prompt

Review this article for the current step only. Return one of:

- \`PASS\`: no required changes.
- \`CHANGES_REQUIRED\`: list only concrete safety, compliance, factual, SEO, or clarity issues that must be fixed before approval.

Do not suggest new features, brand recommendations, affiliate strategy, medical advice, or broad refactors. Keep feedback scoped to this article.

## Article Draft

# How to Read Allergen Statements Without Guessing

${bodyMarkdown}
`;

fs.mkdirSync(path.dirname(reviewPath), { recursive: true });
fs.writeFileSync(reviewPath, reviewPacket);

console.log(`Drafted ${slug}`);
console.log(`Updated ${path.relative(root, scheduledPath)}`);
console.log(`Wrote ${path.relative(root, reviewPath)}`);
