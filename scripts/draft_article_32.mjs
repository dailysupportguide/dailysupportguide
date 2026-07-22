import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const scheduledPath = path.join(root, "content", "scheduled", "articles.json");
const reviewPath = path.join(
  root,
  "docs",
  "reviews",
  "2026-08-20-structure-function-claims-label-review.md"
);

const slug = "structure-function-claims-label";
const title = "Structure Function Claims: How to Read Them Carefully";

const body = [
  {
    type: "p",
    text:
      "Structure function claims can sound familiar because they often use words about support, maintenance, normal function, or general well-being. Those words can be useful to notice, but they should not be treated as a complete explanation of a product."
  },
  {
    type: "p",
    text:
      "This guide explains structure function claims as a label-reading topic. It does not name brands, recommend products, set personal amounts, or replace guidance from a qualified professional."
  },
  {
    type: "h2",
    text: "Start by copying the exact phrase"
  },
  {
    type: "p",
    text:
      "The safest first step is to copy the claim exactly as written. Do not summarize it, strengthen it, or turn it into a promise. A short phrase can change meaning when one word is added, removed, or replaced."
  },
  {
    type: "p",
    text:
      "After copying the phrase, write where it appears: front panel, Supplement Facts area, product description, footnote, side panel, or another location. Placement can help you find nearby qualifiers, warnings, or explanations."
  },
  {
    type: "h2",
    text: "Know what this claim type usually describes"
  },
  {
    type: "p",
    text:
      "FDA explains that structure/function claims may describe the role of a nutrient or dietary ingredient intended to affect normal structure or function in the human body. FDA also describes related claims about general well-being and nutrient deficiency disease language in dietary supplement labeling rules."
  },
  {
    type: "p",
    text:
      "For a reader, the practical point is narrow: this claim type is about wording on a label. It is not a shortcut for deciding what a person needs, how much to use, or whether a product is appropriate for a personal situation."
  },
  {
    type: "h2",
    text: "Look for the nearby limit language"
  },
  {
    type: "p",
    text:
      "FDA guidance says dietary supplement structure/function statements have special requirements, including a required disclaimer. Instead of treating the claim alone as the message, read the surrounding words and footnotes together."
  },
  {
    type: "p",
    text:
      "A simple note can include the exact claim, the nearby disclaimer or qualifier, the ingredient or nutrient named, and the serving basis shown on the label. If the qualifier is hard to find, write that it was not easy to find rather than guessing."
  },
  {
    type: "h2",
    text: "Separate normal function from personal need"
  },
  {
    type: "p",
    text:
      "A phrase about normal function does not tell a reader whether they personally need a product. It also does not compare one product to another by itself. The claim should stay in one column of the note, while serving size, amount, unit, ingredient name, warnings, and directions stay in other columns."
  },
  {
    type: "p",
    text:
      "This separation matters because health-adjacent wording can feel more specific than it is. A careful reader can notice the wording without turning it into a personal rule."
  },
  {
    type: "h2",
    text: "Do not upgrade the claim in your notes"
  },
  {
    type: "p",
    text:
      "When writing a comparison note, keep the claim at the same strength as the label. If the label says support, do not rewrite it as proof. If the label says maintain, do not rewrite it as a result. If the label names a nutrient, do not assume the same idea applies to other nutrients or products."
  },
  {
    type: "p",
    text:
      "FTC health product guidance says advertising must be truthful and not misleading, and objective product claims need adequate support before they are shared with consumers. A reader's safer habit is to avoid adding stronger meaning than the wording actually gives."
  },
  {
    type: "h2",
    text: "Use qualified guidance for personal questions"
  },
  {
    type: "p",
    text:
      "If a structure/function phrase connects to pregnancy, breastfeeding, medication use, surgery, allergies, a medical condition, eating disorder history, kidney or liver concerns, anemia, thyroid concerns, digestion, bone health, or another personal factor, follow qualified guidance instead of using a general label article as the decision rule."
  },
  {
    type: "p",
    text:
      "A website article can help with reading habits, but it cannot turn a label phrase into an individualized answer. Keep personal questions with someone qualified to address them."
  },
  {
    type: "h2",
    text: "A calm takeaway"
  },
  {
    type: "p",
    text:
      "Structure function claims are easier to read when you copy the exact wording, find the nearby qualifier, keep serving facts separate, and avoid upgrading the claim in your notes. This article is general education only and is not medical advice."
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
article.title = title;
article.summary =
  "Learn how to read structure function claims by copying exact wording, finding qualifiers, and keeping label facts separate from personal questions.";
article.body = body;
article.seo = {
  ...article.seo,
  seoTitle: `${title} | Daily Support Guide`,
  metaDescription:
    "Learn structure function claims in plain English by copying exact wording, reading qualifiers, and keeping label facts separate.",
  primaryKeyword: "structure function claims",
  secondaryKeywords: [
    "structure function claims guide",
    "supplement label claim wording",
    "how to read label claims"
  ],
  h1: title,
  h2: [
    "Start by copying the exact phrase",
    "Know what this claim type usually describes",
    "Look for the nearby limit language",
    "Separate normal function from personal need",
    "Do not upgrade the claim in your notes",
    "Use qualified guidance for personal questions",
    "A calm takeaway"
  ],
  faq: [
    "What are structure function claims?",
    "Why should I copy the exact claim wording?",
    "When should I ask a qualified professional instead of guessing?"
  ],
  internalLinks: [
    "read-marketing-claims-on-labels",
    "directions-for-use-label",
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

const reviewPacket = `# Article 32 Review Packet

## Project Goal Header

Current big goal: Daily Support Guide must reach A+ on quiz, homepage, SEO foundation, content library, trust/compliance, and HTTPS/security before Phase 7 affiliate revenue can begin.

Current project state: Article 32 is drafted and internally linted. It is not approved for publishing.

Current step: External four-AI review for one scheduled article.

Distance to goal: This packet needs ChatGPT, Gemini, Claude, and Grok review. The article can only move from \`internal_pass\` to \`approved\` after all four pass or all actionable comments are resolved and resubmitted.

Non-drift boundaries:
- English-first content for a U.S. audience.
- Brand-neutral. No product names, retailer names, coupons, affiliate links, or product picks.
- General education only. No medical advice, treatment, cure, prevention, personal amount-setting, or individualized nutrition advice.
- Structure/function claim wording must stay educational, neutral, and source-scoped.
- No claims that foods, supplements, products, ingredients, nutrients, marketing language, or label claims treat, prevent, cure, reduce risk of, or improve deficiency, diabetes, blood pressure, heart disease, kidney disease, anemia, digestive conditions, weight, or another condition.
- No Phase 7 monetization language. Affiliate revenue remains locked until the first six readiness categories are A+.
- Keep changes scoped to this article unless a reviewer identifies a concrete safety, compliance, factual, SEO, or clarity issue.

## Article Metadata

- Slug: \`${slug}\`
- Title: ${title}
- Scheduled date: 2026-08-20
- Category: Label Reading
- Status: internal_pass
- Approved for publishing: false
- Primary keyword: structure function claims
- Meta description: Learn structure function claims in plain English by copying exact wording, reading qualifiers, and keeping label facts separate.

## Source Notes

- FDA structure/function guidance: structure/function claims may describe the role of a nutrient or dietary ingredient intended to affect normal structure or function in the human body.
- FDA structure/function guidance: structure/function claims may characterize how a nutrient or dietary ingredient acts to maintain such structure or function.
- FDA structure/function guidance: dietary supplement structure/function claims have special regulatory requirements and procedures.
- FDA dietary supplement notification guidance: notification is required for dietary supplement structure/function claims, general well-being claims, and classical nutrient deficiency disease claims.
- FDA dietary supplement notification guidance: these claims must be truthful and non-misleading.
- FDA DSHEA disclaimer letter: certain dietary supplement statements must include the required DSHEA disclaimer.
- FTC health-products guidance: advertising must be truthful and not misleading.
- FTC health-products guidance: objective product claims, express or implied, need adequate substantiation before being shared with consumers.

Sources:
- https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/structurefunction-claims
- https://www.fda.gov/food/information-industry-dietary-supplements/notifications-structurefunction-and-related-claims-dietary-supplement-labeling
- https://www.fda.gov/food/information-industry-dietary-supplements/letter-dietary-supplement-industry-dshea-disclaimer
- https://www.ftc.gov/business-guidance/resources/health-products-compliance-guidance

## Internal Safety Checklist

- [x] No brand names.
- [x] No retailer names.
- [x] No affiliate, coupon, discount, or buying language.
- [x] No product recommendations.
- [x] No winner language, rankings, or product picks.
- [x] No meal plan, calorie goal, macro goal, diagnosis, treatment, cure, prevention, personal amount-setting, or individualized nutrition advice.
- [x] Includes general education only and not medical advice disclaimer.
- [x] Does not claim foods, supplements, products, ingredients, nutrients, marketing language, or label claims treat, prevent, cure, reduce risk of, or improve deficiency, diabetes, blood pressure, heart disease, kidney disease, anemia, digestive conditions, weight, or another condition.
- [x] Does not tell readers what to buy, use, avoid, increase, reduce, combine, replace, or personally take.
- [x] Keeps structure/function interpretation separate from personal health, nutrition, supplement, and product decisions.
- [x] Keeps FDA and FTC wording conservative and source-scoped.

## External Reviewer Prompt

Review this article for the current step only. Return one of:

- \`PASS\`: no required changes.
- \`CHANGES_REQUIRED\`: list only concrete safety, compliance, factual, SEO, or clarity issues that must be fixed before approval.

Do not suggest new features, brand recommendations, affiliate strategy, medical advice, or broad refactors. Keep feedback scoped to this article.

## Article Draft

# ${title}

${bodyMarkdown}
`;

fs.mkdirSync(path.dirname(reviewPath), { recursive: true });
fs.writeFileSync(reviewPath, reviewPacket);

console.log(`Drafted ${slug}`);
console.log(`Updated ${path.relative(root, scheduledPath)}`);
console.log(`Wrote ${path.relative(root, reviewPath)}`);
