import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const scheduledPath = path.join(root, "content", "scheduled", "articles.json");
const reviewPath = path.join(
  root,
  "docs",
  "reviews",
  "2026-08-10-vegan-plant-based-labels-review.md"
);

const slug = "vegan-plant-based-labels";

const body = [
  {
    type: "p",
    text:
      "Vegan and plant-based labels can sound simple, but they do not always answer the same question. A calm label check starts by separating the front-package words from the ingredient list, allergen statement, Nutrition Facts label, and the role the food is meant to play."
  },
  {
    type: "p",
    text:
      "This guide explains plant based label meaning in a general way for U.S. readers. It does not rank brands, recommend products, or replace allergy, medical, religious, or other qualified guidance."
  },
  {
    type: "h2",
    text: "Separate plant-based from vegan"
  },
  {
    type: "p",
    text:
      "A plant-based label often tells you the food is made from plant sources or is marketed as an alternative to an animal-derived food. A vegan claim is usually read as a broader signal about avoiding animal-derived ingredients, but the exact wording still matters."
  },
  {
    type: "p",
    text:
      "Do not make the front phrase do all the work. Read the statement of identity, ingredient list, and any qualifying language near the claim. A careful note might say: plant-based beverage, oat as the main plant source, or vegan-style spread. That is more useful than treating every front label as the same claim."
  },
  {
    type: "h2",
    text: "Look for the specific plant source"
  },
  {
    type: "p",
    text:
      "FDA consumer guidance says plant-based milk alternatives can be made from plant sources such as grains, legumes, nuts, and seeds. FDA also says their nutrient profiles can vary depending on plant source, processing, and added ingredients."
  },
  {
    type: "p",
    text:
      "That is why the specific plant source matters. Soy, almond, oat, pea, rice, coconut, and cashew-based foods can look similar in the same aisle while using very different starting ingredients. If the plant source is not obvious on the front, check the ingredient list."
  },
  {
    type: "h2",
    text: "Use Nutrition Facts instead of assumptions"
  },
  {
    type: "p",
    text:
      "FDA consumer guidance says plant-based milk alternatives can differ nutritionally, and that the Nutrition Facts label can help compare nutrient content. FDA also notes that shoppers may compare details such as protein, vitamin D, calcium, potassium, saturated fat, and added sugars."
  },
  {
    type: "p",
    text:
      "For a simple comparison, start with serving size and servings per container, then compare a few label lines that fit the food's role. If two products use different serving sizes or one is fortified and the other is not, write that difference down instead of assuming the front label tells the full story."
  },
  {
    type: "h2",
    text: "Check allergen labeling carefully"
  },
  {
    type: "p",
    text:
      "FDA food allergy information lists the major food allergens as milk, eggs, fish, Crustacean shellfish, tree nuts, peanuts, wheat, soybeans, and sesame. FDA explains that labels for FDA-regulated foods must declare the presence of each major food allergen using the name of the food source."
  },
  {
    type: "p",
    text:
      "A vegan or plant-based phrase is not a personal allergy rule. A plant-based food may still contain or be made from major allergens such as tree nuts, peanuts, soybeans, wheat, or sesame. If you manage an allergy or sensitivity, use the ingredient and allergen information and follow qualified guidance."
  },
  {
    type: "h2",
    text: "Notice when a food is an alternative"
  },
  {
    type: "p",
    text:
      "FDA guidance on plant-based alternatives says consumers should be able to know the specific plant source in the food and distinguish similar products from one another. It also notes that plant-based alternatives to animal foods should not suggest that animal sources are present or used as ingredients."
  },
  {
    type: "p",
    text:
      "This helps when comparing foods that are meant to stand in for milk, cheese, yogurt, meat, seafood, poultry, or eggs. Ask what the product is trying to replace, what plant source it uses, and which label details are relevant to that role."
  },
  {
    type: "h2",
    text: "Keep values separate from label facts"
  },
  {
    type: "p",
    text:
      "People choose vegan or plant-based foods for different reasons, including dietary choices, taste preferences, religious practices, environmental concerns, or avoiding certain animal-derived foods. A label can help with facts, but it may not answer every personal, ethical, religious, or household standard."
  },
  {
    type: "p",
    text:
      "If a standard is important to you, write it as a separate question. For example: What ingredients are listed? What allergens are declared? What plant source is used? Does the label make the claim I need, or do I need qualified guidance?"
  },
  {
    type: "h2",
    text: "A five-line plant-based label note"
  },
  {
    type: "p",
    text:
      "Use five lines: front claim, statement of identity, main plant source, allergen or ingredient note, and Nutrition Facts lines to compare. This keeps the label check specific without turning it into a product ranking."
  },
  {
    type: "p",
    text:
      "If a health professional has given you personal allergy, kidney, diabetes, pregnancy, digestive, medication, eating disorder, religious diet, food restriction, or medical nutrition guidance, follow that advice instead of using a general plant-based label article as your decision rule."
  },
  {
    type: "h2",
    text: "A calm takeaway"
  },
  {
    type: "p",
    text:
      "Plant based label meaning is easier to read when you separate front-package wording from ingredient facts, allergen information, Nutrition Facts, and the food's intended role. This article is general education only and is not medical advice."
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
article.title = "How to Read Vegan and Plant-Based Labels Carefully";
article.summary =
  "Read vegan and plant-based labels by checking the front claim, plant source, ingredient list, allergen information, Nutrition Facts, and food role.";
article.body = body;
article.seo = {
  ...article.seo,
  seoTitle: "How to Read Vegan and Plant-Based Labels Carefully | Daily Support Guide",
  metaDescription:
    "Learn plant based label meaning by checking claims, plant source, ingredients, allergens, Nutrition Facts, and food role.",
  primaryKeyword: "plant based label meaning",
  secondaryKeywords: [
    "plant based label meaning guide",
    "vegan food label meaning",
    "plant based nutrition label"
  ],
  h1: "How to Read Vegan and Plant-Based Labels Carefully",
  h2: [
    "Separate plant-based from vegan",
    "Look for the specific plant source",
    "Use Nutrition Facts instead of assumptions",
    "Check allergen labeling carefully",
    "Notice when a food is an alternative",
    "Keep values separate from label facts",
    "A five-line plant-based label note",
    "A calm takeaway"
  ],
  faq: [
    "What does plant based label meaning include?",
    "Why should I check allergens on vegan or plant-based foods?",
    "When should I follow qualified guidance instead of a general plant-based label article?"
  ],
  internalLinks: [
    "how-to-read-ingredient-list",
    "read-protein-on-food-labels",
    "compare-two-labels",
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

const reviewPacket = `# Article 22 Review Packet

## Project Goal Header

Current big goal: Daily Support Guide must reach A+ on quiz, homepage, SEO foundation, content library, trust/compliance, and HTTPS/security before Phase 7 affiliate revenue can begin.

Current project state: Article 22 is drafted and internally linted. It is not approved for publishing.

Current step: External four-AI review for one scheduled article.

Distance to goal: This packet needs ChatGPT, Gemini, Claude, and Grok review. The article can only move from \`internal_pass\` to \`approved\` after all four pass or all actionable comments are resolved and resubmitted.

Non-drift boundaries:
- English-first content for a U.S. audience.
- Brand-neutral. No product names, retailer names, coupons, affiliate links, or product picks.
- General education only. No medical advice, treatment, cure, prevention, dosage, target-setting, or individualized nutrition advice.
- Allergy, religious diet, and food restriction language must stay conservative and source-scoped.
- No Phase 7 monetization language. Affiliate revenue remains locked until the first six readiness categories are A+.
- Keep changes scoped to this article unless a reviewer identifies a concrete safety, compliance, factual, SEO, or clarity issue.

## Article Metadata

- Slug: \`${slug}\`
- Title: How to Read Vegan and Plant-Based Labels Carefully
- Scheduled date: 2026-08-10
- Category: Label Reading
- Status: internal_pass
- Approved for publishing: false
- Primary keyword: plant based label meaning
- Meta description: Learn plant based label meaning by checking claims, plant source, ingredients, allergens, Nutrition Facts, and food role.

## Source Notes

- FDA plant-based alternatives guidance: plant-based foods and beverages are often marketed and sold as alternatives to conventional animal products.
- FDA plant-based alternatives guidance: consumers purchase plant-based alternatives for reasons including dietary choices, taste preferences, religious practices, and environmental concerns.
- FDA consumer guidance: plant-based milk alternatives can be made from plant sources including grains such as oat, quinoa, and rice; legumes such as pea and soy; nuts such as almond, cashew, coconut, hazelnut, macadamia, peanut, pistachio, and walnut; and seeds such as flax, hemp, and sesame.
- FDA plant-based alternatives guidance: plant-based milk alternative nutrient profiles vary by plant source, processing methods, and added ingredients.
- FDA plant-based alternatives guidance: consumers should be able to know the specific plant source or sources in a plant-based alternative.
- FDA plant-based alternatives guidance: plant-based alternatives to animal-derived foods should not suggest that animal sources are present or used as ingredients.
- FDA consumer guidance: plant-based milk alternatives can differ nutritionally, and the Nutrition Facts label can help compare nutrient content.
- FDA consumer guidance: shoppers may look at protein, vitamin D, calcium, potassium, saturated fat, and added sugars when comparing plant-based milk alternatives.
- FDA Nutrition Facts guidance: first look at servings per container and serving size; serving size is standardized for comparison and is not a recommendation for how much to eat or drink.
- FDA food allergy guidance: the major food allergens are milk, eggs, fish, Crustacean shellfish, tree nuts, peanuts, wheat, soybeans, and sesame.
- FDA allergen labeling guidance: labels for FDA-regulated foods must declare the presence of each major food allergen using the name of the food source.

Sources:
- https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/plant-based-milk-and-animal-food-alternatives
- https://www.fda.gov/consumers/consumer-updates/milk-and-plant-based-milk-alternatives-know-nutrient-difference
- https://www.fda.gov/food/nutrition-facts-label/how-understand-and-use-nutrition-facts-label
- https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/food-allergies
- https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-questions-and-answers-regarding-food-allergen-labeling-edition-5

## Internal Safety Checklist

- [x] No brand names.
- [x] No retailer names.
- [x] No affiliate, coupon, discount, or buying language.
- [x] No product recommendations.
- [x] No meal plan, calorie target, macro target, diagnosis, treatment, cure, prevention, dosage, or individualized nutrition advice.
- [x] Includes general education only and not medical advice disclaimer.
- [x] Does not claim vegan or plant-based foods are healthier, safer, hypoallergenic, disease-preventing, or medically necessary.
- [x] Does not claim vegan or plant-based front-package wording guarantees absence of allergens or meets personal religious, ethical, medical, or household standards.
- [x] Redirects personal allergy, kidney, diabetes, pregnancy, digestive, medication, eating disorder, religious diet, food restriction, or medical nutrition instructions to qualified guidance.
- [x] Keeps allergy and food-labeling statements conservative and source-scoped.

## External Reviewer Prompt

Review this article for the current step only. Return one of:

- \`PASS\`: no required changes.
- \`CHANGES_REQUIRED\`: list only concrete safety, compliance, factual, SEO, or clarity issues that must be fixed before approval.

Do not suggest new features, brand recommendations, affiliate strategy, medical advice, or broad refactors. Keep feedback scoped to this article.

## Article Draft

# How to Read Vegan and Plant-Based Labels Carefully

${bodyMarkdown}
`;

fs.mkdirSync(path.dirname(reviewPath), { recursive: true });
fs.writeFileSync(reviewPath, reviewPacket);

console.log(`Drafted ${slug}`);
console.log(`Updated ${path.relative(root, scheduledPath)}`);
console.log(`Wrote ${path.relative(root, reviewPath)}`);
