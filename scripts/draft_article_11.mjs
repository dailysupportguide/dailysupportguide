import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const scheduledPath = path.join(root, "content", "scheduled", "articles.json");
const reviewPath = path.join(
  root,
  "docs",
  "reviews",
  "2026-07-30-screen-break-routine-review.md"
);

const slug = "screen-break-routine";

const body = [
  {
    type: "p",
    text:
      "A screen break routine works best when it fits the workday you actually have. A perfect plan that interrupts every meeting, deadline, and commute will probably disappear by Wednesday. A small routine that repeats is easier to keep."
  },
  {
    type: "p",
    text:
      "This guide is general education for everyday screen use. It is not medical advice, workplace safety policy, or a treatment plan for eye, neck, wrist, or back symptoms."
  },
  {
    type: "h2",
    text: "Start with the break you can actually repeat"
  },
  {
    type: "p",
    text:
      "NIOSH guidance for working from home notes that periodic rest breaks and changes in posture are beneficial, and that hourly five-minute breaks can reduce musculoskeletal discomfort and eyestrain when added to conventional rest breaks. OSHA also describes frequent short breaks, micro breaks, or rest pauses as useful recovery time during long computer tasks."
  },
  {
    type: "p",
    text:
      "That does not mean every person needs the same schedule. A practical first version can be simple: one short pause each hour, plus one longer break such as lunch. If an hour is unrealistic, attach the pause to a natural transition, such as after a call, after sending a report, or before starting a new focused block."
  },
  {
    type: "h2",
    text: "Use a two-part screen pause"
  },
  {
    type: "p",
    text:
      "A useful screen break does not need to be dramatic. First, look away from the screen. The American Optometric Association describes the 20-20-20 rule: every 20 minutes, take a 20-second break to view something about 20 feet away. NIOSH also mentions this rule as one way to help combat eye fatigue."
  },
  {
    type: "p",
    text:
      "Second, change body position. OSHA suggests that short computer rest pauses can include standing, stretching, and moving around. A screen break routine can pair the eye pause with a small posture change: stand up, reset your shoulders, walk to refill water, or move to a non-screen task for a few minutes."
  },
  {
    type: "h2",
    text: "Make the screen easier to leave"
  },
  {
    type: "p",
    text:
      "A break is easier when the workstation is not fighting you. OSHA monitor guidance notes that the monitor should be directly in front of the user and at least 20 inches away, with the top line of the screen at or below eye level. OSHA also notes a preferred viewing distance of about 20 to 40 inches."
  },
  {
    type: "p",
    text:
      "NIOSH working-from-home guidance adds practical screen-comfort checks such as reducing glare from outside light, adjusting display brightness and contrast, and enlarging font size when needed. Before adding more reminders, check the basics: screen distance, text size, glare, brightness, and whether you are leaning forward to read."
  },
  {
    type: "h2",
    text: "Choose one reminder style"
  },
  {
    type: "p",
    text:
      "Some people do well with a timer. Others ignore timers but remember transitions. Choose one reminder style for a week instead of stacking several alerts at once. The goal is to create a cue that feels boring enough to repeat."
  },
  {
    type: "p",
    text:
      "A simple note might say: after each hour, look away for 20 seconds, stand for one minute, and return with the next task written down. If meetings make that impossible, use the first minute after the meeting ends. The routine should support work, not turn into another source of pressure."
  },
  {
    type: "h2",
    text: "Notice warning signs without guessing the cause"
  },
  {
    type: "p",
    text:
      "OSHA lists possible signs related to computer workstation concerns, including pain in the wrists, forearms, elbows, neck, or back; dry, itchy, or sore eyes; blurred or double vision; numbness; tingling; cramping; or reduced range of motion. A routine should make those signals easier to notice, not encourage someone to guess the cause alone."
  },
  {
    type: "p",
    text:
      "If symptoms are persistent, worsening, severe, or connected to a medical condition, ask a qualified professional or appropriate workplace safety contact. A break routine can support awareness, but it is not a substitute for care or an ergonomic assessment."
  },
  {
    type: "h2",
    text: "A calm takeaway"
  },
  {
    type: "p",
    text:
      "A screen break routine is easier to keep when it is small, repeatable, and tied to real work transitions. Look away, change posture, reduce glare, keep one reminder style, and notice discomfort without turning the routine into medical advice. This article is general education only and is not medical advice."
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
article.body = body;
article.seo = {
  ...article.seo,
  metaDescription:
    "Build a simple screen break routine with eye pauses, posture changes, glare checks, and reminders that fit a real workday.",
  primaryKeyword: "screen break routine",
  secondaryKeywords: [
    "screen break routine for work",
    "computer break routine",
    "20-20-20 screen break"
  ],
  h2: [
    "Start with the break you can actually repeat",
    "Use a two-part screen pause",
    "Make the screen easier to leave",
      "Choose one reminder style",
    "Notice warning signs without guessing the cause",
    "A calm takeaway"
  ],
  faq: [
    "What is a simple screen break routine?",
    "How can I remember to take screen breaks during work?",
    "When should screen discomfort be discussed with a qualified professional?"
  ],
  internalLinks: [
    "product-comparison-checklist",
    "how-to-read-allergen-statements",
    "third-party-testing-supplements",
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

const reviewPacket = `# Article 11 Review Packet

## Project Goal Header

Current big goal: Daily Support Guide must reach A+ on quiz, homepage, SEO foundation, content library, trust/compliance, and HTTPS/security before Phase 7 affiliate revenue can begin.

Current project state: Article 11 is drafted and internally linted. It is not approved for publishing.

Current step: External four-AI review for one scheduled article.

Distance to goal: This packet needs ChatGPT, Gemini, Claude, and Grok review. The article can only move from \`internal_pass\` to \`approved\` after all four pass or all actionable comments are resolved and resubmitted.

Non-drift boundaries:
- English-first content for a U.S. audience.
- Brand-neutral. No product names, retailer names, coupons, affiliate links, or product picks.
- General education only. No medical advice, treatment, cure, prevention, dosage, or individualized health advice.
- No Phase 7 monetization language. Affiliate revenue remains locked until the first six readiness categories are A+.
- Keep changes scoped to this article unless a reviewer identifies a concrete safety, compliance, factual, SEO, or clarity issue.

## Article Metadata

- Slug: \`${slug}\`
- Title: How to Build a Screen Break That Actually Fits Your Workday
- Scheduled date: 2026-07-30
- Category: Routine Guides
- Status: internal_pass
- Approved for publishing: false
- Primary keyword: screen break routine
- Meta description: Build a simple screen break routine with eye pauses, posture changes, glare checks, and reminders that fit a real workday.

## Source Notes

- NIOSH working-from-home guidance: periodic rest breaks and changes in posture are beneficial.
- NIOSH: research found musculoskeletal discomfort and eyestrain were significantly reduced when conventional twice-daily breaks were supplemented with hourly five-minute breaks.
- NIOSH: regular screen breaks, lower glare, brightness/contrast adjustment, larger font, and the 20/20/20 rule can help reduce eye strain.
- OSHA computer workstation work-process guidance: high repetition or static posture tasks may require several short rest breaks, micro breaks, or rest pauses; users should stand, stretch, and move around.
- OSHA: alternate tasks when possible and mix non-computer tasks into the workday to encourage movement and use different muscle groups.
- OSHA monitor guidance: place the monitor directly in front, at least 20 inches away, with top line at or below eye level; preferred viewing distance is generally 20 to 40 inches.
- OSHA workstation environment guidance: arrange office lighting and monitor position to minimize glare.
- AOA computer vision syndrome page: the 20-20-20 rule suggests taking a 20-second break to view something 20 feet away every 20 minutes.
- OSHA work-process guidance lists warning signs such as dry/sore eyes, blurred vision, pain, numbness, tingling, cramping, weakness, and reduced range of motion.

Sources:
- https://www.cdc.gov/niosh/blogs/2020/working-from-home.html
- https://www.osha.gov/etools/computer-workstations/work-process
- https://www.osha.gov/etools/computer-workstations/components/monitors
- https://www.osha.gov/etools/computer-workstations/workstation-environment
- https://www.aoa.org/healthy-eyes/eye-and-vision-conditions/computer-vision-syndrome

## Internal Safety Checklist

- [x] No brand names.
- [x] No retailer names.
- [x] No affiliate, coupon, discount, or buying language.
- [x] No product recommendations.
- [x] No medical advice, treatment, cure, prevention, or dosage language.
- [x] Includes general education only and not medical advice disclaimer.
- [x] Does not claim screen breaks treat or prevent a condition.
- [x] Sends persistent, worsening, severe, or condition-linked symptoms to a qualified professional or appropriate workplace safety contact.

## External Reviewer Prompt

Review this article for the current step only. Return one of:

- \`PASS\`: no required changes.
- \`CHANGES_REQUIRED\`: list only concrete safety, compliance, factual, SEO, or clarity issues that must be fixed before approval.

Do not suggest new features, brand recommendations, affiliate strategy, medical advice, or broad refactors. Keep feedback scoped to this article.

## Article Draft

# How to Build a Screen Break That Actually Fits Your Workday

${bodyMarkdown}
`;

fs.mkdirSync(path.dirname(reviewPath), { recursive: true });
fs.writeFileSync(reviewPath, reviewPacket);

console.log(`Drafted ${slug}`);
console.log(`Updated ${path.relative(root, scheduledPath)}`);
console.log(`Wrote ${path.relative(root, reviewPath)}`);
