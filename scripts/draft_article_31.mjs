import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const scheduledPath = path.join(root, "content", "scheduled", "articles.json");
const reviewPath = path.join(
  root,
  "docs",
  "reviews",
  "2026-08-19-read-marketing-claims-on-labels-review.md"
);

const slug = "read-marketing-claims-on-labels";
const title = "Marketing Claims on Labels: How to Notice Them Without Letting Them Lead";

const body = [
  {
    type: "p",
    text:
      "Marketing claims on labels are often the first words a reader sees. They may be large, simple, and easy to remember. That does not make every claim wrong, but it does mean the claim should not be the first or only part of the label you use."
  },
  {
    type: "p",
    text:
      "This guide explains a neutral way to notice claims without letting them lead the whole comparison. It does not name brands, recommend products, or decide what is medically or personally appropriate for a reader."
  },
  {
    type: "h2",
    text: "Separate the claim from the label facts"
  },
  {
    type: "p",
    text:
      "Start by copying the claim exactly as written. Then move to the structured parts of the package or product page: serving size, servings per container, Nutrition Facts or Supplement Facts, ingredient list, warnings, directions, package amount, and terms if they are relevant."
  },
  {
    type: "p",
    text:
      "This creates two lanes. One lane holds the claim. The other lane holds details that can be checked. A claim may become easier to understand after the facts are written down, but it should not replace the facts."
  },
  {
    type: "h2",
    text: "Know the broad claim categories"
  },
  {
    type: "p",
    text:
      "FDA explains that food and dietary supplement labels may use several claim categories, including health claims, nutrient content claims, and structure/function claims. These categories are not all the same, and they do not all mean that FDA reviewed a product before the reader saw it."
  },
  {
    type: "p",
    text:
      "For a reader, the practical habit is simple: do not treat a familiar-sounding phrase as a complete explanation. Ask what type of statement it appears to be, what part of the label supports it, and whether any qualifying language appears nearby."
  },
  {
    type: "h2",
    text: "Watch for structure and function language"
  },
  {
    type: "p",
    text:
      "FDA describes structure/function claims as statements about the role of a nutrient or dietary ingredient in affecting normal body structure or function, or about general well-being. FDA also explains that dietary supplement structure/function claims must use a required disclaimer and must not be disease claims."
  },
  {
    type: "p",
    text:
      "That means a reader should slow down when a label uses words about support, maintenance, normal function, balance, or well-being. Copy the phrase, look for nearby disclaimers or limits, and keep the article's role narrow: reading wording, not making a health decision."
  },
  {
    type: "h2",
    text: "Notice what the claim does not say"
  },
  {
    type: "p",
    text:
      "A claim can feel more complete than it is. It may highlight one nutrient, one ingredient, one serving detail, one package feature, or one general benefit phrase while leaving other label details elsewhere."
  },
  {
    type: "p",
    text:
      "FTC health product guidance says advertising must be truthful and not misleading, and objective product claims need adequate support before they are shared with consumers. Readers do not need to investigate that support themselves to use a safer habit: treat the claim as a prompt to read the rest of the label, not as the final answer."
  },
  {
    type: "h2",
    text: "Keep comparison notes neutral"
  },
  {
    type: "p",
    text:
      "Use the same fields for every product you compare: exact claim wording, serving basis, ingredient or nutrient line, amount or unit, qualifying language, and questions that remain. If a detail is missing, write \"not shown\" rather than filling in the blank."
  },
  {
    type: "p",
    text:
      "Neutral notes are especially important with health-adjacent products. Do not turn a claim into a product ranking, personal amount rule, or instruction to choose one item over another."
  },
  {
    type: "h2",
    text: "Use a pause before reacting"
  },
  {
    type: "p",
    text:
      "After copying the claim and the label facts, pause before interpreting them. Ask whether the claim is broad, whether the supporting detail is visible, whether the serving basis is clear, and whether the wording includes limits or disclaimers."
  },
  {
    type: "p",
    text:
      "If the topic connects to pregnancy, breastfeeding, medication use, surgery, allergies, a medical condition, eating disorder history, kidney or liver concerns, anemia, thyroid concerns, digestion, bone health, or another personal factor, follow qualified guidance instead of using a general label article as a decision rule."
  },
  {
    type: "h2",
    text: "A calm takeaway"
  },
  {
    type: "p",
    text:
      "Marketing claims on labels are easier to handle when you copy the claim, separate it from checkable facts, notice the claim category, look for qualifiers, and keep notes neutral. This article is general education only and is not medical advice."
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
  "Learn how to read marketing claims on labels by separating claim wording from serving size, label facts, qualifiers, and unanswered questions.";
article.body = body;
article.seo = {
  ...article.seo,
  seoTitle: `${title} | Daily Support Guide`,
  metaDescription:
    "Learn how to read marketing claims on labels by separating claim wording from facts, qualifiers, serving basis, and open questions.",
  primaryKeyword: "marketing claims on labels",
  secondaryKeywords: [
    "marketing claims on labels guide",
    "label claim reading checklist",
    "how to read product claims"
  ],
  h1: title,
  h2: [
    "Separate the claim from the label facts",
    "Know the broad claim categories",
    "Watch for structure and function language",
    "Notice what the claim does not say",
    "Keep comparison notes neutral",
    "Use a pause before reacting",
    "A calm takeaway"
  ],
  faq: [
    "What are marketing claims on labels?",
    "Why should claims stay separate from label facts?",
    "When should I ask a qualified professional instead of guessing?"
  ],
  internalLinks: [
    "compare-two-labels",
    "compare-similar-products-framework",
    "structure-function-claims-label"
  ]
};

fs.writeFileSync(scheduledPath, `${JSON.stringify(scheduled, null, 2)}\n`);

const bodyMarkdown = body
  .map((block) => {
    if (block.type === "h2") return `## ${block.text}`;
    return block.text;
  })
  .join("\n\n");

const reviewPacket = `# Article 31 Review Packet

## Project Goal Header

Current big goal: Daily Support Guide must reach A+ on quiz, homepage, SEO foundation, content library, trust/compliance, and HTTPS/security before Phase 7 affiliate revenue can begin.

Current project state: Article 31 is drafted and internally linted. It is not approved for publishing.

Current step: External four-AI review for one scheduled article.

Distance to goal: This packet needs ChatGPT, Gemini, Claude, and Grok review. The article can only move from \`internal_pass\` to \`approved\` after all four pass or all actionable comments are resolved and resubmitted.

Non-drift boundaries:
- English-first content for a U.S. audience.
- Brand-neutral. No product names, retailer names, coupons, affiliate links, or product picks.
- General education only. No medical advice, treatment, cure, prevention, personal amount-setting, or individualized nutrition advice.
- Label-claim wording must stay educational, neutral, and source-scoped.
- No claims that foods, supplements, products, ingredients, nutrients, marketing language, or label claims treat, prevent, cure, reduce risk of, or improve deficiency, diabetes, blood pressure, heart disease, kidney disease, anemia, digestive conditions, weight, or another condition.
- No Phase 7 monetization language. Affiliate revenue remains locked until the first six readiness categories are A+.
- Keep changes scoped to this article unless a reviewer identifies a concrete safety, compliance, factual, SEO, or clarity issue.

## Article Metadata

- Slug: \`${slug}\`
- Title: ${title}
- Scheduled date: 2026-08-19
- Category: Comparison Skills
- Status: internal_pass
- Approved for publishing: false
- Primary keyword: marketing claims on labels
- Meta description: Learn how to read marketing claims on labels by separating claim wording from facts, qualifiers, serving basis, and open questions.

## Source Notes

- FDA label-claims guidance: conventional food and dietary supplement labels may use health claims, nutrient content claims, and structure/function claims.
- FDA label-claims guidance: health claims describe a relationship between a substance and reduced risk of a disease or health-related condition.
- FDA label-claims guidance: dietary guidance statements and structure/function claims are not subject to FDA premarket review and authorization in the same way as health claims.
- FDA structure/function guidance: structure/function claims may describe the role of a nutrient or dietary ingredient intended to affect normal structure or function of the human body.
- FDA structure/function guidance: dietary supplement structure/function claims and related statements have special requirements, including disclaimer requirements.
- FDA notification FAQ: claims such as vegan or non-GMO do not require FDA premarket or postmarket submission, but like any other claim, they must be truthful and non-misleading.
- FTC health-products guidance: advertising must be truthful and not misleading.
- FTC health-products guidance: objective product claims, express or implied, need adequate substantiation before being shared with consumers.

Sources:
- https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/label-claims-conventional-foods-and-dietary-supplements
- https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/structurefunction-claims
- https://www.fda.gov/food/information-industry-dietary-supplements/notifications-structurefunction-and-related-claims-dietary-supplement-labeling
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
- [x] Does not tell readers what to buy, use, avoid, increase, reduce, combine, or replace.
- [x] Keeps label-claim interpretation separate from personal health, nutrition, supplement, and product decisions.
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
