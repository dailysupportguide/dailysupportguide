import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const scheduledPath = path.join(root, "content", "scheduled", "articles.json");
const reviewPath = path.join(
  root,
  "docs",
  "reviews",
  "2026-08-12-epa-dha-label-numbers-review.md"
);

const slug = "epa-dha-label-numbers";

const body = [
  {
    type: "p",
    text:
      "EPA and DHA numbers can look precise, but they still need context. A label may show total omega-3, separate EPA and DHA lines, a serving size, a source ingredient, and sometimes a Daily Value note. A calmer reading starts by matching each number to the line it belongs to."
  },
  {
    type: "p",
    text:
      "This guide explains how to read an EPA DHA label in a neutral way. It does not rank brands, recommend products, set personal amounts, or replace medical advice from a qualified professional."
  },
  {
    type: "h2",
    text: "Find EPA and DHA before adding numbers"
  },
  {
    type: "p",
    text:
      "NIH Office of Dietary Supplements explains that EPA and DHA are two of the three main omega-3 fatty acids, along with ALA. NIH ODS says DHA and EPA are found in fish and other seafood, while ALA is found mainly in plant oils such as flaxseed, soybean, and canola oils."
  },
  {
    type: "p",
    text:
      "When a label lists EPA and DHA separately, copy them as separate lines first. Do not add numbers together until you know whether the label already includes a total omega-3 line. Otherwise, you may count the same information twice or compare totals against components."
  },
  {
    type: "h2",
    text: "Match each number to serving size"
  },
  {
    type: "p",
    text:
      "FDA Nutrition Facts guidance says to first look at servings per container and serving size. FDA supplement labeling guidance says Supplement Facts must list serving size and the names and quantities of dietary ingredients present."
  },
  {
    type: "p",
    text:
      "That makes serving size the anchor for EPA and DHA numbers. One label might show amounts per capsule, another per two softgels, another per teaspoon, and another per food serving. A fair comparison starts by writing down the serving size before the EPA and DHA numbers."
  },
  {
    type: "h2",
    text: "Read amount per serving language"
  },
  {
    type: "p",
    text:
      "FDA dietary supplement labeling guidance says the amount of a dietary ingredient may appear in a separate column or immediately after the ingredient name. It also says labels may use language consistent with the serving size, such as Amount Per 2 Tablets, in place of Amount Per Serving."
  },
  {
    type: "p",
    text:
      "For EPA and DHA, this means the column heading matters. Amount per serving, amount per capsule, and amount per two softgels are not automatically the same comparison. Copy the heading along with the number."
  },
  {
    type: "h2",
    text: "Notice when Daily Value is not established"
  },
  {
    type: "p",
    text:
      "FDA dietary supplement labeling guidance says other dietary ingredients that do not have Daily Values are listed with a symbol that refers to the footnote Daily Value Not Established. FDA also explains that percent Daily Value is shown for dietary ingredients that have established Daily Values."
  },
  {
    type: "p",
    text:
      "If an EPA or DHA line shows no percent Daily Value or uses a Daily Value Not Established footnote, treat that as label context. It does not mean the number is unimportant, and it does not create a personal amount instruction."
  },
  {
    type: "h2",
    text: "Separate source from EPA and DHA amount"
  },
  {
    type: "p",
    text:
      "NIH ODS says omega-3 dietary supplements include fish oil, krill oil, cod liver oil, and algal oil, and describes algal oil as a vegetarian source from algae. FDA supplement labeling guidance says the source of a dietary ingredient may be listed in the Supplement Facts panel."
  },
  {
    type: "p",
    text:
      "Source wording can help you understand what kind of label you are reading, but it is not the same as the EPA or DHA amount. Keep a separate line for source or ingredient wording, especially if dietary preference, allergy, household rules, or qualified guidance matter."
  },
  {
    type: "h2",
    text: "Keep safety context separate"
  },
  {
    type: "p",
    text:
      "NIH ODS says recommended amounts of EPA and DHA have not been established. NIH ODS also says the FDA recommends consuming no more than 5 grams per day of EPA and DHA combined from dietary supplements, and that omega-3 dietary supplements may interact with medications such as warfarin or other anticoagulant medicines."
  },
  {
    type: "p",
    text:
      "Those statements are safety context for careful reading. They are not a personal instruction to use, avoid, start, stop, or change any supplement. If medications, pregnancy, breastfeeding, surgery, bleeding risk, a medical condition, or a professional care plan are involved, ask a qualified professional."
  },
  {
    type: "h2",
    text: "A five-line EPA and DHA note"
  },
  {
    type: "p",
    text:
      "Use five lines: serving size, EPA amount and heading, DHA amount and heading, total omega-3 if listed, and source or Daily Value note. This keeps the numbers tied to the label instead of turning them into product advice."
  },
  {
    type: "p",
    text:
      "If a health professional has given you personal heart, triglyceride, pregnancy, breastfeeding, medication, surgery, bleeding risk, allergy, kidney, liver, digestive, eating disorder, or medical nutrition guidance, follow that advice instead of using a general EPA and DHA label article as your decision rule."
  },
  {
    type: "h2",
    text: "A calm takeaway"
  },
  {
    type: "p",
    text:
      "EPA and DHA numbers are easier to read when you identify the specific lines, match each number to serving size, copy the amount heading, notice Daily Value notes, and keep source wording separate. This article is general education only and is not medical advice."
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
article.title = "EPA and DHA: How to Read the Numbers on a Label";
article.summary =
  "Read EPA and DHA label numbers by checking serving size, amount headings, total omega-3 lines, source wording, and Daily Value notes.";
article.body = body;
article.seo = {
  ...article.seo,
  seoTitle: "EPA and DHA: How to Read the Numbers on a Label | Daily Support Guide",
  metaDescription:
    "Read an EPA DHA label by checking serving size, amount headings, total omega-3 lines, source wording, and Daily Value notes.",
  primaryKeyword: "EPA DHA label",
  secondaryKeywords: [
    "EPA DHA label guide",
    "EPA and DHA amount per serving",
    "Daily Value Not Established omega 3"
  ],
  h1: "EPA and DHA: How to Read the Numbers on a Label",
  h2: [
    "Find EPA and DHA before adding numbers",
    "Match each number to serving size",
    "Read amount per serving language",
    "Notice when Daily Value is not established",
    "Separate source from EPA and DHA amount",
    "Keep safety context separate",
    "A five-line EPA and DHA note",
    "A calm takeaway"
  ],
  faq: [
    "How do I read EPA and DHA numbers on a label?",
    "What does Daily Value Not Established mean on an omega-3 label?",
    "When should I follow qualified guidance instead of a general EPA and DHA label article?"
  ],
  internalLinks: [
    "compare-omega-3-labels",
    "vegan-plant-based-labels",
    "serving-size-vs-servings-per-container",
    "percent-daily-value-meaning"
  ]
};

fs.writeFileSync(scheduledPath, `${JSON.stringify(scheduled, null, 2)}\n`);

const bodyMarkdown = body
  .map((block) => {
    if (block.type === "h2") return `## ${block.text}`;
    return block.text;
  })
  .join("\n\n");

const reviewPacket = `# Article 24 Review Packet

## Project Goal Header

Current big goal: Daily Support Guide must reach A+ on quiz, homepage, SEO foundation, content library, trust/compliance, and HTTPS/security before Phase 7 affiliate revenue can begin.

Current project state: Article 24 is drafted and internally linted. It is not approved for publishing.

Current step: External four-AI review for one scheduled article.

Distance to goal: This packet needs ChatGPT, Gemini, Claude, and Grok review. The article can only move from \`internal_pass\` to \`approved\` after all four pass or all actionable comments are resolved and resubmitted.

Non-drift boundaries:
- English-first content for a U.S. audience.
- Brand-neutral. No product names, retailer names, coupons, affiliate links, or product picks.
- General education only. No medical advice, treatment, cure, prevention, personal amount-setting, or individualized nutrition advice.
- EPA/DHA wording must stay label-reading focused and source-scoped.
- No claims that EPA, DHA, omega-3 foods, or omega-3 supplements treat, prevent, cure, reduce risk of, or improve heart disease, triglycerides, pregnancy outcomes, brain health, eye health, inflammation, rheumatoid arthritis, dry eye, cancer, or another condition.
- No Phase 7 monetization language. Affiliate revenue remains locked until the first six readiness categories are A+.
- Keep changes scoped to this article unless a reviewer identifies a concrete safety, compliance, factual, SEO, or clarity issue.

## Article Metadata

- Slug: \`${slug}\`
- Title: EPA and DHA: How to Read the Numbers on a Label
- Scheduled date: 2026-08-12
- Category: Label Reading
- Status: internal_pass
- Approved for publishing: false
- Primary keyword: EPA DHA label
- Meta description: Read an EPA DHA label by checking serving size, amount headings, total omega-3 lines, source wording, and Daily Value notes.

## Source Notes

- NIH ODS omega-3 consumer fact sheet: the three main omega-3 fatty acids are ALA, EPA, and DHA.
- NIH ODS omega-3 consumer fact sheet: DHA and EPA are found in fish and other seafood.
- NIH ODS omega-3 consumer fact sheet: ALA is found mainly in plant oils such as flaxseed, soybean, and canola oils.
- NIH ODS omega-3 consumer fact sheet: recommended amounts of EPA and DHA have not been established.
- NIH ODS omega-3 consumer fact sheet: omega-3 dietary supplements include fish oil, krill oil, cod liver oil, and algal oil; algal oil is a vegetarian source from algae.
- NIH ODS omega-3 consumer fact sheet: FDA recommends consuming no more than 5 g/day of EPA and DHA combined from dietary supplements.
- NIH ODS omega-3 consumer fact sheet: omega-3 dietary supplements may interact with medications such as warfarin or other anticoagulant medicines.
- FDA Nutrition Facts guidance: first look at servings per container and serving size.
- FDA dietary supplement labeling guide: Supplement Facts must list serving size and the names and quantities of dietary ingredients present.
- FDA dietary supplement labeling guide: the amount of a dietary ingredient may appear in a separate column or immediately after the ingredient name.
- FDA dietary supplement labeling guide: labels may use language consistent with the serving size, such as Amount Per 2 Tablets, in place of Amount Per Serving.
- FDA dietary supplement labeling guide: the source of a dietary ingredient may be listed in the Supplement Facts panel.
- FDA dietary supplement labeling guide: dietary ingredients that do not have Daily Values are listed with a symbol that refers to the footnote Daily Value Not Established.
- FDA Daily Value guidance: percent Daily Value is how much a nutrient in a single serving of a packaged food or dietary supplement contributes to the daily diet.

Sources:
- https://ods.od.nih.gov/factsheets/Omega3FattyAcids%20-Consumer/
- https://www.fda.gov/food/dietary-supplements-guidance-documents-regulatory-information/dietary-supplement-labeling-guide-chapter-iv-nutrition-labeling
- https://www.fda.gov/food/nutrition-facts-label/how-understand-and-use-nutrition-facts-label
- https://www.fda.gov/food/nutrition-facts-label/daily-value-nutrition-and-supplement-facts-labels?c=FALL-2057

## Internal Safety Checklist

- [x] No brand names.
- [x] No retailer names.
- [x] No affiliate, coupon, discount, or buying language.
- [x] No product recommendations.
- [x] No meal plan, calorie goal, macro goal, diagnosis, treatment, cure, prevention, personal amount-setting, or individualized nutrition advice.
- [x] Includes general education only and not medical advice disclaimer.
- [x] Does not claim EPA, DHA, omega-3 foods, or omega-3 supplements treat, prevent, cure, reduce risk of, or improve heart disease, triglycerides, pregnancy outcomes, brain health, eye health, inflammation, rheumatoid arthritis, dry eye, cancer, or another condition.
- [x] Does not tell readers how much EPA, DHA, ALA, fish oil, krill oil, cod liver oil, or algal oil to take.
- [x] Redirects personal heart, triglyceride, pregnancy, breastfeeding, medication, surgery, bleeding risk, allergy, kidney, liver, digestive, eating disorder, or medical nutrition instructions to qualified professional guidance.
- [x] Keeps Supplement Facts, Daily Value, and medication interaction wording conservative and source-scoped.

## External Reviewer Prompt

Review this article for the current step only. Return one of:

- \`PASS\`: no required changes.
- \`CHANGES_REQUIRED\`: list only concrete safety, compliance, factual, SEO, or clarity issues that must be fixed before approval.

Do not suggest new features, brand recommendations, affiliate strategy, medical advice, or broad refactors. Keep feedback scoped to this article.

## Article Draft

# EPA and DHA: How to Read the Numbers on a Label

${bodyMarkdown}
`;

fs.mkdirSync(path.dirname(reviewPath), { recursive: true });
fs.writeFileSync(reviewPath, reviewPacket);

console.log(`Drafted ${slug}`);
console.log(`Updated ${path.relative(root, scheduledPath)}`);
console.log(`Wrote ${path.relative(root, reviewPath)}`);
