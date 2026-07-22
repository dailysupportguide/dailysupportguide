import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const scheduledPath = path.join(root, "content", "scheduled", "articles.json");
const reviewPath = path.join(
  root,
  "docs",
  "reviews",
  "2026-07-27-third-party-testing-supplements-review.md"
);

const slug = "third-party-testing-supplements";

const body = [
  {
    type: "p",
    text:
      "Third-party testing seals can be useful label clues, but they are easy to overread. A seal may tell you something about quality checks, manufacturing review, listed ingredients, or contaminant screening. It does not automatically tell you that a supplement is right for you."
  },
  {
    type: "p",
    text:
      "A calm comparison starts by separating what a seal can support from what it cannot prove. That keeps the seal from becoming a shortcut for safety, effectiveness, or a product recommendation."
  },
  {
    type: "h2",
    text: "What a testing seal may tell you"
  },
  {
    type: "p",
    text:
      "NIH consumer materials explain that several independent organizations offer quality testing for dietary supplements. Products that pass those tests may display a seal indicating that the product was properly manufactured, contains the ingredients listed on the label, and does not contain harmful levels of contaminants."
  },
  {
    type: "p",
    text:
      "That can be useful information when comparing labels. It gives you a reason to ask what was tested, what standard was used, whether the specific product and lot are covered, and whether the organization explains its testing process clearly."
  },
  {
    type: "h2",
    text: "What a seal does not prove"
  },
  {
    type: "p",
    text:
      "NIH also states that these seals do not guarantee that a product is safe or effective. That boundary matters. A quality seal is not the same as medical advice, FDA approval, or proof that a product will do what a person hopes it will do."
  },
  {
    type: "p",
    text:
      "The FDA says dietary supplements are not approved for safety and effectiveness before they are sold. FDA can act when products are unsafe, mislabeled, or otherwise in violation of the law, but that is different from premarket approval."
  },
  {
    type: "h2",
    text: "Read the seal next to the label"
  },
  {
    type: "p",
    text:
      "A seal should not replace the Supplement Facts panel. Read serving size, amount per serving, dietary ingredients, Other Ingredients, directions, warnings, and manufacturer information separately. Then note what the seal claims to verify."
  },
  {
    type: "p",
    text:
      "If the label gives only a vague testing claim, treat that as incomplete information. A neutral note might say: testing claim present, details unclear. That is more useful than assuming the claim covers every quality, safety, or effectiveness question."
  },
  {
    type: "h2",
    text: "Use a simple comparison note"
  },
  {
    type: "p",
    text:
      "When comparing two supplement labels, create separate rows for label facts and testing information. One row can list serving size and amount per serving. Another can list Other Ingredients. A third can note whether a third-party testing seal is present and what it appears to cover."
  },
  {
    type: "p",
    text:
      "If the decision involves medication, pregnancy, surgery, a medical condition, allergy, sensitivity, or a personal nutrition plan, do not rely on a seal alone. Ask a qualified professional who can consider your situation."
  },
  {
    type: "h2",
    text: "A calm takeaway"
  },
  {
    type: "p",
    text:
      "Third-party testing supplements is best understood as one label-reading step. A seal may support questions about quality, label accuracy, and contaminants, but it does not guarantee safety or effectiveness. This article is general education only and is not medical advice."
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
    "Learn what third-party testing seals can and cannot tell you about supplements without brand names, hype, or product picks.",
  primaryKeyword: "third party testing supplements",
  secondaryKeywords: [
    "supplement testing seals",
    "third party supplement testing",
    "supplement quality seals"
  ],
  h2: [
    "What a testing seal may tell you",
    "What a seal does not prove",
    "Read the seal next to the label",
    "Use a simple comparison note",
    "A calm takeaway"
  ],
  faq: [
    "What can third-party testing tell me about a supplement?",
    "Does a testing seal prove a supplement is safe or effective?",
    "When should I ask a qualified professional instead of guessing?"
  ],
  internalLinks: [
    "how-to-read-a-serving-size-without-overthinking-it",
    "how-to-read-ingredient-list",
    "other-ingredients-supplement-facts",
    "capsules-vs-powders-vs-gummies"
  ]
};

fs.writeFileSync(scheduledPath, `${JSON.stringify(scheduled, null, 2)}\n`);

const bodyMarkdown = body
  .map((block) => {
    if (block.type === "h2") return `## ${block.text}`;
    return block.text;
  })
  .join("\n\n");

const reviewPacket = `# Article 08 Review Packet

## Project Goal Header

Current big goal: Daily Support Guide must reach A+ on quiz, homepage, SEO foundation, content library, trust/compliance, and HTTPS/security before Phase 7 affiliate revenue can begin.

Current project state: Article 08 is drafted and internally linted. It is not approved for publishing.

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
- Title: What Third-Party Testing Seals Can and Cannot Tell You
- Scheduled date: 2026-07-27
- Category: Label Reading
- Status: internal_pass
- Approved for publishing: false
- Primary keyword: third party testing supplements
- Meta description: Learn what third-party testing seals can and cannot tell you about supplements without brand names, hype, or product picks.

## Source Notes

- NIH ODS consumer fact sheet: several independent organizations offer quality testing and allow products that pass these tests to display a quality assurance seal.
- NIH ODS: a seal may indicate that a product was properly manufactured, contains ingredients listed on the label, and does not contain harmful levels of contaminants.
- NIH ODS: these seals do not guarantee that a product is safe or effective.
- NIH ODS FAQ: ODS does not test, analyze, rate, endorse, or recommend dietary supplement brands.
- FDA: dietary supplements are not approved for safety and effectiveness before they are sold.
- FDA: dietary supplement labels must include Supplement Facts information, and companies are responsible for safety and compliance.

Sources:
- https://ods.od.nih.gov/factsheets/WYNTK-Consumer/
- https://ods.od.nih.gov/HealthInformation/ODS_Frequently_Asked_Questions.aspx
- https://ods.od.nih.gov/factsheets/DietarySupplements-Consumer/
- https://www.fda.gov/consumers/consumer-updates/fda-101-dietary-supplements
- https://www.fda.gov/consumers/consumer-updates/it-really-fda-approved

## Internal Safety Checklist

- [x] No brand names.
- [x] No retailer names.
- [x] No affiliate, coupon, discount, or buying language.
- [x] No product recommendations.
- [x] No medical diagnosis, treatment, cure, prevention, or dosage language.
- [x] Includes general education only and not medical advice disclaimer.
- [x] Treats third-party testing as label information, not as proof of safety, effectiveness, or personal fit.

## External Reviewer Prompt

Review this article for the current step only. Return one of:

- \`PASS\`: no required changes.
- \`CHANGES_REQUIRED\`: list only concrete safety, compliance, factual, SEO, or clarity issues that must be fixed before approval.

Do not suggest new features, brand recommendations, affiliate strategy, medical advice, or broad refactors. Keep feedback scoped to this article.

## Article Draft

# What Third-Party Testing Seals Can and Cannot Tell You

${bodyMarkdown}
`;

fs.mkdirSync(path.dirname(reviewPath), { recursive: true });
fs.writeFileSync(reviewPath, reviewPacket);

console.log(`Drafted ${slug}`);
console.log(`Updated ${path.relative(root, scheduledPath)}`);
console.log(`Wrote ${path.relative(root, reviewPath)}`);
