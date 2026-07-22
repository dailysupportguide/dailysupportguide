import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const scheduledPath = path.join(root, "content", "scheduled", "articles.json");
const reviewPath = path.join(
  root,
  "docs",
  "reviews",
  "2026-08-08-simple-meal-decisions-review.md"
);

const slug = "simple-meal-decisions";

const body = [
  {
    type: "p",
    text:
      "Meal decisions can feel harder on busy days because the question is too broad. Instead of asking what the perfect meal should be, it can help to ask a smaller question: what simple option fits the time, food, and energy available today?"
  },
  {
    type: "p",
    text:
      "This article is a general routine guide, not a meal plan. It does not rank foods, set nutrition targets, or replace personal advice from a qualified professional."
  },
  {
    type: "h2",
    text: "Start with what is already available"
  },
  {
    type: "p",
    text:
      "USDA MyPlate meal planning guidance suggests looking in the freezer, cabinets, and refrigerator before planning meals. That step can make decisions easier because it turns a vague question into a short list of real options."
  },
  {
    type: "p",
    text:
      "On a busy day, write down two or three things you already have. The list might include a fresh item, a frozen item, a shelf-stable item, or leftovers. The goal is not to create a perfect menu. The goal is to reduce the number of choices."
  },
  {
    type: "h2",
    text: "Match the meal to the time you actually have"
  },
  {
    type: "p",
    text:
      "USDA MyPlate guidance recommends thinking about your time and choosing meals you can prepare when you are short on time, while saving longer meals for days with more help or flexibility."
  },
  {
    type: "p",
    text:
      "A practical version is a three-level note: five minutes, fifteen minutes, or more time. If the day is tight, pick from the shortest list first. That keeps a busy day from becoming a full planning session."
  },
  {
    type: "h2",
    text: "Keep one backup path"
  },
  {
    type: "p",
    text:
      "MyPlate planning tips also recommend using leftovers and keeping a mix of fresh, frozen, and shelf-stable foods. Those ideas work well as a backup path because they give you options when the original plan is no longer realistic."
  },
  {
    type: "p",
    text:
      "A backup path can be very plain: leftovers, a frozen option, or a simple pantry-based meal. The point is to have a fallback before the day gets noisy, not to make every backup choice exciting."
  },
  {
    type: "h2",
    text: "Use a short meal decision checklist"
  },
  {
    type: "p",
    text:
      "Nutrition.gov groups meal planning, grocery shopping, food labels, and meal prep as related skills. For everyday use, that means a meal decision can include more than one clue: what is available, what takes little prep, what the label says, and what fits the day."
  },
  {
    type: "p",
    text:
      "Use four prompts: What do I already have? How much time do I have? Is there a leftover or backup option? Is there one label detail I want to notice? This is enough structure for a busy day without turning dinner into a project."
  },
  {
    type: "h2",
    text: "Avoid making every decision at once"
  },
  {
    type: "p",
    text:
      "USDA MyPlate suggests writing down meals for the week and building a shopping list as you go. That does not mean every person needs a detailed weekly plan. It means decisions are often easier when some of them are made before the busiest moment."
  },
  {
    type: "p",
    text:
      "Try making one tiny list: two easy breakfasts, two easy lunches, two easy dinners, and one backup. You can repeat the same list for a week and adjust later. Repetition is allowed when the goal is less decision pressure."
  },
  {
    type: "h2",
    text: "Let context change the answer"
  },
  {
    type: "p",
    text:
      "A meal at home, at work, in a car, or between errands may need a different level of convenience. CDC guidance notes that people eat in many settings and that planning can help people choose options in different situations."
  },
  {
    type: "p",
    text:
      "That context matters. A simple choice on a packed day may look different from a relaxed meal on a day off. Keeping the decision tied to the setting can make the choice feel more reasonable."
  },
  {
    type: "h2",
    text: "A five-line busy-day note"
  },
  {
    type: "p",
    text:
      "Use five lines: available food, time window, easiest option, backup option, and one detail to notice next time. If a choice worked, keep it. If it did not, adjust the backup instead of blaming the whole routine."
  },
  {
    type: "p",
    text:
      "If a health professional has given you personal diabetes, kidney, allergy, pregnancy, digestive, medication, eating disorder, weight management, sports nutrition, recovery, or medical nutrition guidance, follow that advice instead of using a general routine article as your decision rule."
  },
  {
    type: "h2",
    text: "A calm takeaway"
  },
  {
    type: "p",
    text:
      "Simple meal decisions are easier when you start with what is available, match the choice to your real time window, keep one backup path, and avoid making every decision at once. This article is general education only and is not medical advice."
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
article.title = "How to Keep Meal Decisions Simple on Busy Days";
article.summary =
  "Keep simple meal decisions manageable by checking available food, real time, backup options, and one detail to notice next time.";
article.body = body;
article.seo = {
  ...article.seo,
  seoTitle: "How to Keep Meal Decisions Simple on Busy Days | Daily Support Guide",
  metaDescription:
    "Keep simple meal decisions manageable with available food, real time, backup options, and a short busy-day checklist.",
  primaryKeyword: "simple meal decisions",
  secondaryKeywords: [
    "simple meal decisions guide",
    "busy day meal routine",
    "meal decision checklist"
  ],
  h1: "How to Keep Meal Decisions Simple on Busy Days",
  h2: [
    "Start with what is already available",
    "Match the meal to the time you actually have",
    "Keep one backup path",
    "Use a short meal decision checklist",
    "Avoid making every decision at once",
    "Let context change the answer",
    "A five-line busy-day note",
    "A calm takeaway"
  ],
  faq: [
    "How can I make simple meal decisions on busy days?",
    "Why does checking available food help with meal decisions?",
    "When should I follow professional guidance instead of a general meal routine?"
  ],
  internalLinks: [
    "compare-packaged-snacks",
    "read-protein-on-food-labels",
    "read-sodium-and-sugar-labels",
    "simple-morning-routine-prep"
  ]
};

fs.writeFileSync(scheduledPath, `${JSON.stringify(scheduled, null, 2)}\n`);

const bodyMarkdown = body
  .map((block) => {
    if (block.type === "h2") return `## ${block.text}`;
    return block.text;
  })
  .join("\n\n");

const reviewPacket = `# Article 20 Review Packet

## Project Goal Header

Current big goal: Daily Support Guide must reach A+ on quiz, homepage, SEO foundation, content library, trust/compliance, and HTTPS/security before Phase 7 affiliate revenue can begin.

Current project state: Article 20 is drafted and internally linted. It is not approved for publishing.

Current step: External four-AI review for one scheduled article.

Distance to goal: This packet needs ChatGPT, Gemini, Claude, and Grok review. The article can only move from \`internal_pass\` to \`approved\` after all four pass or all actionable comments are resolved and resubmitted.

Non-drift boundaries:
- English-first content for a U.S. audience.
- Brand-neutral. No product names, retailer names, coupons, affiliate links, or product picks.
- General education only. No medical advice, treatment, cure, prevention, dosage, target-setting, or individualized nutrition advice.
- No Phase 7 monetization language. Affiliate revenue remains locked until the first six readiness categories are A+.
- Keep changes scoped to this article unless a reviewer identifies a concrete safety, compliance, factual, SEO, or clarity issue.

## Article Metadata

- Slug: \`${slug}\`
- Title: How to Keep Meal Decisions Simple on Busy Days
- Scheduled date: 2026-08-08
- Category: Routine Guides
- Status: internal_pass
- Approved for publishing: false
- Primary keyword: simple meal decisions
- Meta description: Keep simple meal decisions manageable with available food, real time, backup options, and a short busy-day checklist.

## Source Notes

- USDA MyPlate Make a Plan guidance: look in your freezer, cabinets, and refrigerator before planning meals.
- USDA MyPlate Make a Plan guidance: write down meals for the week if helpful.
- USDA MyPlate Make a Plan guidance: think about your time and choose meals you can prepare when short on time.
- USDA MyPlate Make a Plan guidance: plan to use leftovers.
- USDA MyPlate Make a Plan guidance: build a grocery list as you go.
- USDA MyPlate Make a Plan guidance: plan for a mix of fresh, frozen, and shelf-stable foods.
- Nutrition.gov groups meal planning, grocery shopping, food labels, and meal prep as related shopping/cooking/meal-planning resources.
- CDC meals and snacks guidance: people eat in many settings, and planning can help with choices in different settings.

Sources:
- https://www.myplate.gov/eathealthy/budget/budget-weekly-meals
- https://www.nutrition.gov/topics/shopping-cooking-and-meal-planning
- https://www.cdc.gov/healthy-weight-growth/healthy-eating/meals-snacks.html

## Internal Safety Checklist

- [x] No brand names.
- [x] No retailer names.
- [x] No affiliate, coupon, discount, or buying language.
- [x] No product recommendations.
- [x] No meal plan, calorie target, macro target, diagnosis, treatment, cure, prevention, dosage, or individualized nutrition advice.
- [x] Includes general education only and not medical advice disclaimer.
- [x] Does not claim meal decisions treat or prevent diabetes, kidney disease, obesity, eating disorders, digestive conditions, fatigue, or another condition.
- [x] Redirects personal diabetes, kidney, allergy, pregnancy, digestive, medication, eating disorder, weight management, sports nutrition, recovery, or medical nutrition instructions to qualified professional guidance.

## External Reviewer Prompt

Review this article for the current step only. Return one of:

- \`PASS\`: no required changes.
- \`CHANGES_REQUIRED\`: list only concrete safety, compliance, factual, SEO, or clarity issues that must be fixed before approval.

Do not suggest new features, brand recommendations, affiliate strategy, medical advice, or broad refactors. Keep feedback scoped to this article.

## Article Draft

# How to Keep Meal Decisions Simple on Busy Days

${bodyMarkdown}
`;

fs.mkdirSync(path.dirname(reviewPath), { recursive: true });
fs.writeFileSync(reviewPath, reviewPacket);

console.log(`Drafted ${slug}`);
console.log(`Updated ${path.relative(root, scheduledPath)}`);
console.log(`Wrote ${path.relative(root, reviewPath)}`);
