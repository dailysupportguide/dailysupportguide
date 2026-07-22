import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const scheduledPath = path.join(root, "content", "scheduled", "articles.json");
const reviewPath = path.join(
  root,
  "docs",
  "reviews",
  "2026-08-18-compare-similar-products-framework-review.md"
);

const slug = "compare-similar-products-framework";
const title = "Compare Similar Products: A Simple No-Winner Framework";

const body = [
  {
    type: "p",
    text:
      "Two products can look almost the same until the details are placed side by side. One may use a different package size, serving basis, return term, ingredient order, or product description. A calm comparison starts by copying facts before reacting to presentation."
  },
  {
    type: "p",
    text:
      "This guide explains how to compare similar products without naming brands, choosing a winner, or turning a general article into personal advice. It is meant for neutral product-reading notes, not for medical, nutrition, supplement, or financial decisions."
  },
  {
    type: "h2",
    text: "Start with the same question for each item"
  },
  {
    type: "p",
    text:
      "Before comparing details, write one plain question that both items must answer. For example: what is the package size, what amount does the label describe, what is included, what is excluded, and what terms apply if the item does not work for the reader's situation?"
  },
  {
    type: "p",
    text:
      "FTC online shopping guidance tells consumers to check sellers and products, compare total cost, read product descriptions including fine print, and review delivery, return, and refund policies. Those ideas translate well into a simple comparison framework: read the facts first, then decide what still needs clarification."
  },
  {
    type: "h2",
    text: "Build a five-column note"
  },
  {
    type: "p",
    text:
      "Use five columns: item description, package or amount, key label details, total cost context, and terms or support. Keep each entry short. The note should capture what the page or label says, not what the reader hopes it means."
  },
  {
    type: "p",
    text:
      "If a field is missing, write \"not shown\" instead of guessing. Missing information is a comparison clue, but it is not proof that a product is better, worse, safer, stronger, or more appropriate for a person."
  },
  {
    type: "h2",
    text: "Keep cost in its own lane"
  },
  {
    type: "p",
    text:
      "NIST explains that unit pricing is pricing based on cost per unit of measure, such as price per ounce, gram, liter, or count unit. Unit price can help compare value when package sizes differ, but it should stay separate from quality, health, or personal fit."
  },
  {
    type: "p",
    text:
      "A useful note can include package price, shipping or other fees if visible, serving count if the label provides one, and unit price if shown. Do not let the lowest number automatically become a recommendation."
  },
  {
    type: "h2",
    text: "Read reviews with caution"
  },
  {
    type: "p",
    text:
      "FTC consumer guidance says to read reviews with a critical eye, check several sources, and avoid relying only on star ratings because some reviews and ratings can be fake or misleading. Reviews can be useful context, but they should not replace the structured facts in the comparison note."
  },
  {
    type: "p",
    text:
      "When using reviews, look for patterns rather than one dramatic comment. A reader can note repeated comments about size, durability, clarity, delivery, support, or mismatch between the description and the item received."
  },
  {
    type: "h2",
    text: "Separate claims from facts"
  },
  {
    type: "p",
    text:
      "Marketing language often points attention toward a benefit, but a comparison note should keep claims apart from facts that can be checked. Product descriptions, label panels, package amounts, warnings, limitations, and terms are stronger comparison anchors than a front phrase."
  },
  {
    type: "p",
    text:
      "For health-adjacent products, stay especially narrow. Do not use a comparison article to decide whether something treats, prevents, cures, reduces risk of, or improves a condition. If the topic connects to pregnancy, breastfeeding, medication use, surgery, allergies, a medical condition, or a personal nutrition plan, ask a qualified professional."
  },
  {
    type: "h2",
    text: "Use a no-winner ending"
  },
  {
    type: "p",
    text:
      "The final line of the note should not crown a product. A neutral ending can say which facts are clear, which facts differ, and which questions remain. That gives the reader a calmer view without turning the page into a ranking."
  },
  {
    type: "p",
    text:
      "A no-winner ending also keeps the website's editorial boundary intact. The article can teach comparison skills while avoiding brand preference, product picks, retailer direction, or monetized shopping pressure."
  },
  {
    type: "h2",
    text: "A calm takeaway"
  },
  {
    type: "p",
    text:
      "To compare similar products, use the same fields for every item: description, package or amount, label facts, cost context, and terms. Read reviews carefully, keep claims separate from facts, and end with open questions instead of a winner. This article is general education only and is not medical advice."
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
  "Learn how to compare similar products by using the same neutral fields, reading reviews carefully, and separating claims from facts.";
article.body = body;
article.seo = {
  ...article.seo,
  seoTitle: `${title} | Daily Support Guide`,
  metaDescription:
    "Learn how to compare similar products with a neutral framework for facts, package details, cost context, reviews, and terms.",
  primaryKeyword: "compare similar products",
  secondaryKeywords: [
    "compare similar products guide",
    "neutral product comparison framework",
    "product comparison note template"
  ],
  h1: title,
  h2: [
    "Start with the same question for each item",
    "Build a five-column note",
    "Keep cost in its own lane",
    "Read reviews with caution",
    "Separate claims from facts",
    "Use a no-winner ending",
    "A calm takeaway"
  ],
  faq: [
    "How can I compare similar products without picking a winner?",
    "What fields belong in a neutral product comparison note?",
    "Why should reviews stay separate from product facts?"
  ],
  internalLinks: [
    "product-comparison-checklist",
    "compare-cost-per-serving",
    "product-comparison-notes"
  ]
};

fs.writeFileSync(scheduledPath, `${JSON.stringify(scheduled, null, 2)}\n`);

const bodyMarkdown = body
  .map((block) => {
    if (block.type === "h2") return `## ${block.text}`;
    return block.text;
  })
  .join("\n\n");

const reviewPacket = `# Article 30 Review Packet

## Project Goal Header

Current big goal: Daily Support Guide must reach A+ on quiz, homepage, SEO foundation, content library, trust/compliance, and HTTPS/security before Phase 7 affiliate revenue can begin.

Current project state: Article 30 is drafted and internally linted. It is not approved for publishing.

Current step: External four-AI review for one scheduled article.

Distance to goal: This packet needs ChatGPT, Gemini, Claude, and Grok review. The article can only move from \`internal_pass\` to \`approved\` after all four pass or all actionable comments are resolved and resubmitted.

Non-drift boundaries:
- English-first content for a U.S. audience.
- Brand-neutral. No product names, retailer names, coupons, affiliate links, or product picks.
- General education only. No medical advice, treatment, cure, prevention, personal amount-setting, or individualized nutrition advice.
- Product comparison wording must stay neutral, no-winner, and source-scoped.
- No claims that foods, supplements, products, reviews, unit prices, package sizes, or terms treat, prevent, cure, reduce risk of, or improve deficiency, diabetes, blood pressure, heart disease, kidney disease, anemia, digestive conditions, weight, or another condition.
- No Phase 7 monetization language. Affiliate revenue remains locked until the first six readiness categories are A+.
- Keep changes scoped to this article unless a reviewer identifies a concrete safety, compliance, factual, SEO, or clarity issue.

## Article Metadata

- Slug: \`${slug}\`
- Title: ${title}
- Scheduled date: 2026-08-18
- Category: Comparison Skills
- Status: internal_pass
- Approved for publishing: false
- Primary keyword: compare similar products
- Meta description: Learn how to compare similar products with a neutral framework for facts, package details, cost context, reviews, and terms.

## Source Notes

- FTC online shopping guidance: before buying online, consumers should check sellers and products.
- FTC online shopping guidance: comparison shopping includes learning total cost, including shipping, handling, delivery, taxes, or other fees.
- FTC online shopping guidance: consumers should read the entire product description, including fine print.
- FTC online shopping guidance: consumers should read delivery, return, and refund policies.
- FTC review guidance: read reviews with a critical eye, check several sources, and do not rely on star ratings alone because some reviews and ratings can be fake or misleading.
- NIST unit-pricing information: unit pricing is pricing based on cost per unit of measure.
- NIST unit-pricing information: unit price labels may show product size, total price, and price per unit.
- NIST unit-pricing information: unit pricing can help compare value when package sizes differ.

Sources:
- https://consumer.ftc.gov/articles/online-shopping
- https://consumer.ftc.gov/shopping-and-donating/shopping
- https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers
- https://www.nist.gov/programs-projects/uniform-unit-pricing-tools-consumers-fight-shrinkflation

## Internal Safety Checklist

- [x] No brand names.
- [x] No retailer names.
- [x] No affiliate, coupon, discount, or buying language.
- [x] No product recommendations.
- [x] No winner language, rankings, or product picks.
- [x] No meal plan, calorie goal, macro goal, diagnosis, treatment, cure, prevention, personal amount-setting, or individualized nutrition advice.
- [x] Includes general education only and not medical advice disclaimer.
- [x] Does not claim foods, supplements, products, reviews, unit prices, package sizes, or terms treat, prevent, cure, reduce risk of, or improve deficiency, diabetes, blood pressure, heart disease, kidney disease, anemia, digestive conditions, weight, or another condition.
- [x] Does not tell readers what to buy, use, avoid, increase, reduce, combine, or replace.
- [x] Keeps cost comparison separate from health, nutrition, supplement, and personal use decisions.
- [x] Keeps review, cost, package, claim, and term wording conservative and source-scoped.

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
