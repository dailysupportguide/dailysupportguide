import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const scheduledPath = path.join(root, "content", "scheduled", "articles.json");
const reviewPath = path.join(
  root,
  "docs",
  "reviews",
  "2026-08-16-directions-for-use-label-review.md"
);

const slug = "directions-for-use-label";

const body = [
  {
    type: "p",
    text:
      "Directions language can look simple at first, but it is easy to read more into it than the label actually says. A careful note keeps the words on the package separate from personal advice."
  },
  {
    type: "p",
    text:
      "This guide explains directions for use label reading in a neutral way. It does not rank products, recommend brands, tell readers what to use, or replace medical advice from a qualified professional."
  },
  {
    type: "h2",
    text: "Start with the product type"
  },
  {
    type: "p",
    text:
      "FDA dietary supplement labeling guidance says dietary supplements are labeled with a statement of identity, and that required label statements include the statement of identity, net quantity of contents, nutrition labeling, ingredient list, and the name and place of business of the manufacturer, packer, or distributor."
  },
  {
    type: "p",
    text:
      "Before reading any directions wording, identify the label type and the panel you are using. A food label, a Supplement Facts panel, and other package text do not all carry the same kind of information."
  },
  {
    type: "h2",
    text: "Keep directions separate from Supplement Facts"
  },
  {
    type: "p",
    text:
      "FDA guidance says the nutrition label for a dietary supplement is called a Supplement Facts panel. The panel must list serving size, servings per container when required, and the names and quantities of dietary ingredients present."
  },
  {
    type: "p",
    text:
      "Directions wording may sit near the panel, but it is not the same as the Supplement Facts table. A calm comparison keeps these fields separate: panel type, serving size, directions wording, ingredient lines, and any other label notes."
  },
  {
    type: "h2",
    text: "Use directions only to understand the label"
  },
  {
    type: "p",
    text:
      "FDA supplement labeling guidance explains that one serving of a dietary supplement equals the maximum amount recommended on the label for one eating occasion, or one unit if there are no recommendations. The guidance gives an example where directions that refer to 1-3 tablets with breakfast would make the serving size 3 tablets."
  },
  {
    type: "p",
    text:
      "For this article, that point is only label-reading context. It does not tell a reader what amount is personally appropriate. It tells the reader to notice how directions wording can affect the serving size shown on the label."
  },
  {
    type: "h2",
    text: "Copy the exact wording instead of summarizing"
  },
  {
    type: "p",
    text:
      "Directions can include timing words, unit words, conditions, or other short phrases. If you paraphrase too quickly, you may accidentally add a meaning that is not on the label."
  },
  {
    type: "p",
    text:
      "A safer note copies the wording exactly enough for comparison, then places it next to serving size and servings per container. If something is unclear, write that it is unclear rather than turning it into a personal rule."
  },
  {
    type: "h2",
    text: "Do not treat directions as a safety guarantee"
  },
  {
    type: "p",
    text:
      "FDA consumer information explains that FDA does not approve dietary supplements for safety and effectiveness before they are sold to the public. FDA also explains that supplement labels must provide Supplement Facts and other required label information."
  },
  {
    type: "p",
    text:
      "That means directions wording should not be treated as a promise that a product is appropriate for a particular person. Personal factors, medications, pregnancy, breastfeeding, medical conditions, allergies, or professional nutrition instructions need qualified guidance."
  },
  {
    type: "h2",
    text: "Watch for words that need qualified guidance"
  },
  {
    type: "p",
    text:
      "Some labels include statements about age groups, timing, warnings, allergens, or asking a professional. A general article should not interpret those statements for an individual reader."
  },
  {
    type: "p",
    text:
      "If the label tells a reader to consult a qualified professional, or if the reader has personal medical, medication, pregnancy, breastfeeding, allergy, eating disorder, surgery, kidney, liver, heart, blood pressure, diabetes, anemia, digestive, or nutrition plan concerns, qualified guidance should come before a general label comparison."
  },
  {
    type: "h2",
    text: "A five-line directions note"
  },
  {
    type: "p",
    text:
      "Use five fields: product type, panel type, serving size, exact directions wording, and any warning or professional-guidance wording. Keep the note factual and avoid turning it into a product score."
  },
  {
    type: "p",
    text:
      "This format is intentionally limited. It helps compare labels without making assumptions about what a reader should personally use, avoid, increase, reduce, combine, or replace."
  },
  {
    type: "h2",
    text: "A calm takeaway"
  },
  {
    type: "p",
    text:
      "Directions for use label reading is easier when you keep the exact wording connected to product type, panel type, serving size, and warning language. Directions can explain label context, but they cannot decide what is personally right for a reader. This article is general education only and is not medical advice."
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
article.title = "Directions for Use Label: How to Read It Without Making Assumptions";
article.summary =
  "Read directions for use label wording by separating product type, Supplement Facts, serving size, exact wording, and warning language.";
article.body = body;
article.seo = {
  ...article.seo,
  seoTitle:
    "Directions for Use Label: How to Read It Without Making Assumptions | Daily Support Guide",
  metaDescription:
    "Learn directions for use label reading by checking product type, Supplement Facts, serving size, exact wording, and warning language.",
  primaryKeyword: "directions for use label",
  secondaryKeywords: [
    "directions for use label guide",
    "supplement label directions",
    "serving size directions label"
  ],
  h1: "Directions for Use Label: How to Read It Without Making Assumptions",
  h2: [
    "Start with the product type",
    "Keep directions separate from Supplement Facts",
    "Use directions only to understand the label",
    "Copy the exact wording instead of summarizing",
    "Do not treat directions as a safety guarantee",
    "Watch for words that need qualified guidance",
    "A five-line directions note",
    "A calm takeaway"
  ],
  faq: [
    "What should I notice on a directions for use label?",
    "Why should directions stay separate from Supplement Facts?",
    "When should I follow qualified guidance instead of a general label article?"
  ],
  internalLinks: [
    "serving-size-vs-servings-per-container",
    "percent-daily-value-meaning",
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

const reviewPacket = `# Article 28 Review Packet

## Project Goal Header

Current big goal: Daily Support Guide must reach A+ on quiz, homepage, SEO foundation, content library, trust/compliance, and HTTPS/security before Phase 7 affiliate revenue can begin.

Current project state: Article 28 is drafted and internally linted. It is not approved for publishing.

Current step: External four-AI review for one scheduled article.

Distance to goal: This packet needs ChatGPT, Gemini, Claude, and Grok review. The article can only move from \`internal_pass\` to \`approved\` after all four pass or all actionable comments are resolved and resubmitted.

Non-drift boundaries:
- English-first content for a U.S. audience.
- Brand-neutral. No product names, retailer names, coupons, affiliate links, or product picks.
- General education only. No medical advice, treatment, cure, prevention, personal amount-setting, or individualized nutrition advice.
- Directions wording must stay label-reading focused and source-scoped.
- No claims that foods, supplements, directions wording, label warnings, or use instructions treat, prevent, cure, reduce risk of, or improve deficiency, diabetes, blood pressure, heart disease, kidney disease, liver disease, anemia, digestive conditions, pregnancy outcomes, fatigue, immunity, weight, or another condition.
- No Phase 7 monetization language. Affiliate revenue remains locked until the first six readiness categories are A+.
- Keep changes scoped to this article unless a reviewer identifies a concrete safety, compliance, factual, SEO, or clarity issue.

## Article Metadata

- Slug: \`${slug}\`
- Title: Directions for Use Label: How to Read It Without Making Assumptions
- Scheduled date: 2026-08-16
- Category: Label Reading
- Status: internal_pass
- Approved for publishing: false
- Primary keyword: directions for use label
- Meta description: Learn directions for use label reading by checking product type, Supplement Facts, serving size, exact wording, and warning language.

## Source Notes

- FDA dietary supplement labeling guide: five statements are required on dietary supplement labels: statement of identity, net quantity of contents, nutrition labeling, ingredient list, and name and place of business of the manufacturer, packer, or distributor.
- FDA dietary supplement labeling guide: required label statements must be on the principal display panel or information panel unless otherwise specified.
- FDA dietary supplement labeling guide: the nutrition label for a dietary supplement is called a Supplement Facts panel.
- FDA dietary supplement labeling guide: Supplement Facts must list names and quantities of dietary ingredients present, serving size, and servings per container when required.
- FDA dietary supplement labeling guide: one serving of a dietary supplement equals the maximum amount recommended on the label for one eating occasion, or one unit if no recommendations appear.
- FDA dietary supplement labeling guide: if directions say 1-3 tablets with breakfast, serving size would be 3 tablets.
- FDA consumer information: FDA does not approve dietary supplements for safety and effectiveness before they are sold to the public.
- FDA consumer Q&A: dietary supplement labels must include Supplement Facts and other label disclosures, including serving size, servings per container, dietary ingredients, and amount per serving.

Sources:
- https://www.fda.gov/food/dietary-supplements-guidance-documents-regulatory-information/dietary-supplement-labeling-guide-chapter-i-general-dietary-supplement-labeling
- https://www.fda.gov/food/dietary-supplements-guidance-documents-regulatory-information/dietary-supplement-labeling-guide-chapter-iv-nutrition-labeling
- https://www.fda.gov/consumers/consumer-updates/fda-101-dietary-supplements
- https://www.fda.gov/food/information-consumers-using-dietary-supplements/questions-and-answers-dietary-supplements

## Internal Safety Checklist

- [x] No brand names.
- [x] No retailer names.
- [x] No affiliate, coupon, discount, or buying language.
- [x] No product recommendations.
- [x] No meal plan, calorie goal, macro goal, diagnosis, treatment, cure, prevention, personal amount-setting, or individualized nutrition advice.
- [x] Includes general education only and not medical advice disclaimer.
- [x] Does not claim foods, supplements, directions wording, label warnings, or use instructions treat, prevent, cure, reduce risk of, or improve deficiency, diabetes, blood pressure, heart disease, kidney disease, liver disease, anemia, digestive conditions, pregnancy outcomes, fatigue, immunity, weight, or another condition.
- [x] Does not tell readers what amount, timing, combination, or product is personally appropriate.
- [x] Redirects personal medical, medication, pregnancy, breastfeeding, allergy, eating disorder, surgery, kidney, liver, heart, blood pressure, diabetes, anemia, digestive, supplement, or nutrition plan instructions to qualified professional guidance.
- [x] Keeps directions, Supplement Facts, serving size, and warning wording conservative and source-scoped.

## External Reviewer Prompt

Review this article for the current step only. Return one of:

- \`PASS\`: no required changes.
- \`CHANGES_REQUIRED\`: list only concrete safety, compliance, factual, SEO, or clarity issues that must be fixed before approval.

Do not suggest new features, brand recommendations, affiliate strategy, medical advice, or broad refactors. Keep feedback scoped to this article.

## Article Draft

# Directions for Use Label: How to Read It Without Making Assumptions

${bodyMarkdown}
`;

fs.mkdirSync(path.dirname(reviewPath), { recursive: true });
fs.writeFileSync(reviewPath, reviewPacket);

console.log(`Drafted ${slug}`);
console.log(`Updated ${path.relative(root, scheduledPath)}`);
console.log(`Wrote ${path.relative(root, reviewPath)}`);
