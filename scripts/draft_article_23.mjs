import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const scheduledPath = path.join(root, "content", "scheduled", "articles.json");
const reviewPath = path.join(
  root,
  "docs",
  "reviews",
  "2026-08-11-compare-omega-3-labels-review.md"
);

const slug = "compare-omega-3-labels";

const body = [
  {
    type: "p",
    text:
      "Omega-3 labels can be confusing because the front of the package may use a broad phrase while the detailed panel lists specific fatty acids, serving size, and amount per serving. A calm comparison starts with the exact label lines instead of the biggest front-package claim."
  },
  {
    type: "p",
    text:
      "This guide explains how to read an omega 3 label in a neutral way. It does not rank brands, recommend supplements, set doses, or replace medical advice from a qualified professional."
  },
  {
    type: "h2",
    text: "Start with the exact omega-3 names"
  },
  {
    type: "p",
    text:
      "NIH Office of Dietary Supplements explains that the three main omega-3 fatty acids are ALA, EPA, and DHA. ALA is found mainly in plant oils such as flaxseed, soybean, and canola oils, while EPA and DHA are found in fish and other seafood."
  },
  {
    type: "p",
    text:
      "That means a label that says omega-3 is not always telling you the same thing as a label that lists EPA and DHA separately. When comparing two labels, write down which specific omega-3 names appear, not only the total omega-3 phrase."
  },
  {
    type: "h2",
    text: "Check whether the label is food or supplement"
  },
  {
    type: "p",
    text:
      "FDA says the nutrition label for a dietary supplement is called a Supplement Facts panel. FDA also says the Supplement Facts panel must list the names and quantities of dietary ingredients present, along with serving size and, when required, servings per container."
  },
  {
    type: "p",
    text:
      "Packaged foods use Nutrition Facts, while dietary supplements use Supplement Facts. The comparison question changes depending on which panel you are reading. For a food, the omega-3 wording may appear as part of the package information. For a supplement, the Supplement Facts panel is the first place to check the listed dietary ingredients and amounts."
  },
  {
    type: "h2",
    text: "Compare serving size before amount"
  },
  {
    type: "p",
    text:
      "FDA Nutrition Facts guidance says to first look at servings per container and serving size, and that serving size is not a recommendation for how much to eat or drink. FDA dietary supplement labeling guidance says one serving of a dietary supplement equals the maximum amount recommended on the label for consumption per eating occasion, or one unit if no recommendation appears."
  },
  {
    type: "p",
    text:
      "Before comparing omega-3 amounts, write down the serving size. One label may use one capsule, two softgels, one teaspoon, one pouch, or one food serving. Comparing amounts without the serving size can make two labels look more similar or more different than they are."
  },
  {
    type: "h2",
    text: "Separate total omega-3 from EPA and DHA"
  },
  {
    type: "p",
    text:
      "NIH ODS says omega-3 supplements include fish oil, krill oil, cod liver oil, and algal oil, and that these products provide a wide range of doses and forms of omega-3s. Some labels may list total omega-3s, while others may list EPA, DHA, ALA, or a combination."
  },
  {
    type: "p",
    text:
      "For a cleaner note, make three lines: total omega-3 if listed, EPA if listed, and DHA if listed. If one label provides only a total and another breaks out EPA and DHA, write that difference down instead of assuming the numbers are interchangeable."
  },
  {
    type: "h2",
    text: "Notice source wording"
  },
  {
    type: "p",
    text:
      "NIH ODS lists fish oil, krill oil, cod liver oil, and algal oil as omega-3 dietary supplement types, and it describes algal oil as a vegetarian source from algae. NIH ODS also notes that omega-3s can come from foods such as fish, nuts, seeds, plant oils, and fortified foods."
  },
  {
    type: "p",
    text:
      "Source wording is not a brand ranking. It is a label fact that helps you understand what kind of product or food you are comparing. If source, dietary preference, allergy, or household standards matter to you, read the source and ingredient information carefully and follow qualified guidance where needed."
  },
  {
    type: "h2",
    text: "Avoid turning label reading into personal use advice"
  },
  {
    type: "p",
    text:
      "NIH ODS says recommended amounts of EPA and DHA have not been established. NIH ODS also says the FDA recommends consuming no more than 5 grams per day of EPA and DHA combined from dietary supplements, and that omega-3 dietary supplements may interact with medications such as warfarin or other anticoagulant medicines."
  },
  {
    type: "p",
    text:
      "Those points are safety context, not personal use instructions. A general label article should not tell you how much EPA, DHA, or total omega-3 to take. If supplements, medications, pregnancy, breastfeeding, bleeding risk, surgery, or a medical condition are part of the decision, ask a qualified professional."
  },
  {
    type: "h2",
    text: "A five-line omega-3 label note"
  },
  {
    type: "p",
    text:
      "Use five lines: panel type, serving size, total omega-3 if listed, EPA and DHA lines if listed, and source or ingredient note. This keeps the comparison grounded in the label instead of turning it into a product recommendation."
  },
  {
    type: "p",
    text:
      "If a health professional has given you personal heart, triglyceride, pregnancy, breastfeeding, medication, surgery, bleeding risk, allergy, kidney, liver, digestive, eating disorder, or medical nutrition guidance, follow that advice instead of using a general omega-3 label article as your decision rule."
  },
  {
    type: "h2",
    text: "A calm takeaway"
  },
  {
    type: "p",
    text:
      "An omega 3 label is easier to compare when you identify ALA, EPA, and DHA; check whether the panel is Nutrition Facts or Supplement Facts; compare serving size first; and keep source wording separate from personal amount decisions. This article is general education only and is not medical advice."
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
article.title = "How to Compare Omega-3 Label Lines Without Brand Names";
article.summary =
  "Compare omega-3 label lines by checking ALA, EPA, DHA, panel type, serving size, amount per serving, and source wording without brand names.";
article.body = body;
article.seo = {
  ...article.seo,
  seoTitle: "How to Compare Omega-3 Label Lines Without Brand Names | Daily Support Guide",
  metaDescription:
    "Learn how to read an omega 3 label by checking ALA, EPA, DHA, Supplement Facts, serving size, and source wording.",
  primaryKeyword: "omega 3 label",
  secondaryKeywords: [
    "omega 3 label guide",
    "EPA DHA label comparison",
    "omega 3 supplement facts"
  ],
  h1: "How to Compare Omega-3 Label Lines Without Brand Names",
  h2: [
    "Start with the exact omega-3 names",
    "Check whether the label is food or supplement",
    "Compare serving size before amount",
    "Separate total omega-3 from EPA and DHA",
    "Notice source wording",
    "Avoid turning label reading into personal use advice",
    "A five-line omega-3 label note",
    "A calm takeaway"
  ],
  faq: [
    "What should I check on an omega 3 label?",
    "Why do EPA and DHA lines matter on omega-3 labels?",
    "When should I ask a qualified professional instead of using a general omega-3 label article?"
  ],
  internalLinks: [
    "epa-dha-label-numbers",
    "vegan-plant-based-labels",
    "read-protein-on-food-labels",
    "serving-size-vs-servings-per-container"
  ]
};

fs.writeFileSync(scheduledPath, `${JSON.stringify(scheduled, null, 2)}\n`);

const bodyMarkdown = body
  .map((block) => {
    if (block.type === "h2") return `## ${block.text}`;
    return block.text;
  })
  .join("\n\n");

const reviewPacket = `# Article 23 Review Packet

## Project Goal Header

Current big goal: Daily Support Guide must reach A+ on quiz, homepage, SEO foundation, content library, trust/compliance, and HTTPS/security before Phase 7 affiliate revenue can begin.

Current project state: Article 23 is drafted and internally linted. It is not approved for publishing.

Current step: External four-AI review for one scheduled article.

Distance to goal: This packet needs ChatGPT, Gemini, Claude, and Grok review. The article can only move from \`internal_pass\` to \`approved\` after all four pass or all actionable comments are resolved and resubmitted.

Non-drift boundaries:
- English-first content for a U.S. audience.
- Brand-neutral. No product names, retailer names, coupons, affiliate links, or product picks.
- General education only. No medical advice, treatment, cure, prevention, personal amount-setting, or individualized nutrition advice.
- Omega-3 wording must stay label-reading focused and source-scoped.
- No claims that omega-3 foods or supplements treat, prevent, cure, reduce risk of, or improve heart disease, triglycerides, pregnancy outcomes, brain health, eye health, inflammation, rheumatoid arthritis, dry eye, cancer, or another condition.
- No Phase 7 monetization language. Affiliate revenue remains locked until the first six readiness categories are A+.
- Keep changes scoped to this article unless a reviewer identifies a concrete safety, compliance, factual, SEO, or clarity issue.

## Article Metadata

- Slug: \`${slug}\`
- Title: How to Compare Omega-3 Label Lines Without Brand Names
- Scheduled date: 2026-08-11
- Category: Label Reading
- Status: internal_pass
- Approved for publishing: false
- Primary keyword: omega 3 label
- Meta description: Learn how to read an omega 3 label by checking ALA, EPA, DHA, Supplement Facts, serving size, and source wording.

## Source Notes

- NIH ODS omega-3 consumer fact sheet: omega-3 fatty acids are found in foods such as fish and flaxseed and in dietary supplements such as fish oil.
- NIH ODS omega-3 consumer fact sheet: the three main omega-3 fatty acids are ALA, EPA, and DHA.
- NIH ODS omega-3 consumer fact sheet: ALA is found mainly in plant oils such as flaxseed, soybean, and canola oils.
- NIH ODS omega-3 consumer fact sheet: DHA and EPA are found in fish and other seafood.
- NIH ODS omega-3 consumer fact sheet: recommended amounts of EPA and DHA have not been established.
- NIH ODS omega-3 consumer fact sheet: omega-3 dietary supplements include fish oil, krill oil, cod liver oil, and algal oil; algal oil is a vegetarian source from algae; these supplements provide a wide range of doses and forms of omega-3s.
- NIH ODS omega-3 consumer fact sheet: omega-3s are found naturally in some foods and added to some fortified foods, including fish and seafood, nuts and seeds, plant oils, and fortified foods.
- NIH ODS omega-3 consumer fact sheet: FDA recommends consuming no more than 5 g/day of EPA and DHA combined from dietary supplements.
- NIH ODS omega-3 consumer fact sheet: omega-3 dietary supplements may interact with medications such as warfarin or other anticoagulant medicines.
- FDA dietary supplement labeling guide: the nutrition label for a dietary supplement is called a Supplement Facts panel.
- FDA dietary supplement labeling guide: Supplement Facts must list names and quantities of dietary ingredients present, serving size, and servings per container when required.
- FDA dietary supplement labeling guide: one serving of a dietary supplement equals the maximum amount recommended on the label for consumption per eating occasion, or one unit if no recommendation appears.
- FDA Nutrition Facts guidance: first look at servings per container and serving size; serving size is not a recommendation for how much to eat or drink.

Sources:
- https://ods.od.nih.gov/factsheets/Omega3FattyAcids%20-Consumer/
- https://www.fda.gov/food/dietary-supplements-guidance-documents-regulatory-information/dietary-supplement-labeling-guide-chapter-iv-nutrition-labeling
- https://www.fda.gov/food/nutrition-facts-label/how-understand-and-use-nutrition-facts-label
- https://ods.od.nih.gov/factsheets/dietarysupplements-Consumer/

## Internal Safety Checklist

- [x] No brand names.
- [x] No retailer names.
- [x] No affiliate, coupon, discount, or buying language.
- [x] No product recommendations.
- [x] No meal plan, calorie goal, macro goal, diagnosis, treatment, cure, prevention, personal amount-setting, or individualized nutrition advice.
- [x] Includes general education only and not medical advice disclaimer.
- [x] Does not claim omega-3 foods or supplements treat, prevent, cure, reduce risk of, or improve heart disease, triglycerides, pregnancy outcomes, brain health, eye health, inflammation, rheumatoid arthritis, dry eye, cancer, or another condition.
- [x] Does not tell readers how much EPA, DHA, ALA, fish oil, krill oil, cod liver oil, or algal oil to take.
- [x] Redirects personal heart, triglyceride, pregnancy, breastfeeding, medication, surgery, bleeding risk, allergy, kidney, liver, digestive, eating disorder, or medical nutrition instructions to qualified professional guidance.
- [x] Keeps supplement and medication interaction wording conservative and source-scoped.

## External Reviewer Prompt

Review this article for the current step only. Return one of:

- \`PASS\`: no required changes.
- \`CHANGES_REQUIRED\`: list only concrete safety, compliance, factual, SEO, or clarity issues that must be fixed before approval.

Do not suggest new features, brand recommendations, affiliate strategy, medical advice, or broad refactors. Keep feedback scoped to this article.

## Article Draft

# How to Compare Omega-3 Label Lines Without Brand Names

${bodyMarkdown}
`;

fs.mkdirSync(path.dirname(reviewPath), { recursive: true });
fs.writeFileSync(reviewPath, reviewPacket);

console.log(`Drafted ${slug}`);
console.log(`Updated ${path.relative(root, scheduledPath)}`);
console.log(`Wrote ${path.relative(root, reviewPath)}`);
