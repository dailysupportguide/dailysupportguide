import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const scheduledPath = path.join(root, "content", "scheduled", "articles.json");
const reviewPath = path.join(
  root,
  "docs",
  "reviews",
  "2026-08-01-natural-pause-routine-review.md"
);

const slug = "natural-pause-routine";

const body = [
  {
    type: "p",
    text:
      "A natural pause routine is a way to take small breaks without letting a timer run your whole day. Instead of waiting for an alarm, you attach a short reset to moments that already happen, such as ending a call, sending a message, finishing a paragraph, or switching tasks."
  },
  {
    type: "p",
    text:
      "This is useful for people who ignore timers, dislike interruptions, or work in short changing blocks. The goal is not to build a perfect schedule. It is to make screen breaks and posture changes easier to remember on an ordinary workday."
  },
  {
    type: "h2",
    text: "Start with transitions you already have"
  },
  {
    type: "p",
    text:
      "Look for three or four natural transitions in your day. Good candidates include the end of a meeting, the moment before opening a new document, the time after sending a longer email, the pause before lunch, or the few seconds after closing a browser tab."
  },
  {
    type: "p",
    text:
      "Choose cues that are easy to notice. A vague cue like \"when I feel tired\" is harder to use than a visible cue like \"after I submit a form\" or \"before I start the next task.\" The cue should be specific enough that you do not have to debate whether it happened."
  },
  {
    type: "h2",
    text: "Pair each cue with one small change"
  },
  {
    type: "p",
    text:
      "OSHA guidance for computer workstations says long static postures and high repetition may call for short rest pauses, and users should be encouraged to stand, stretch, and move around during those pauses. OSHA also notes that working in the same posture for a long time is not healthy, even when the posture itself is good."
  },
  {
    type: "p",
    text:
      "Keep each natural pause small: stand for a minute, stretch hands and arms, look away from the screen, refill water, or walk one short loop. A tiny action that happens often is more useful than a big reset that only happens on unusually quiet days."
  },
  {
    type: "h2",
    text: "Rotate screen and non-screen tasks when possible"
  },
  {
    type: "p",
    text:
      "OSHA recommends alternating tasks when possible and mixing non-computer tasks into the workday so different muscle groups get used. Its workstation evaluation checklist also asks whether computer tasks allow keyboard work to vary with other activities or provide an opportunity for micro-breaks or recovery pauses."
  },
  {
    type: "p",
    text:
      "For a simple routine, make a short list of non-screen tasks that naturally fit your work: reviewing paper notes, placing a phone call, tidying the next-task area, filing one item, or planning the next three steps on paper. These tasks should not be busywork. They should be real work that gives your eyes and posture a different pattern."
  },
  {
    type: "h2",
    text: "Use a timer only as a backup"
  },
  {
    type: "p",
    text:
      "CDC/NIOSH working-from-home guidance says periodic rest breaks and posture changes are beneficial, and it includes setting a timer as one way to take a 5-minute break from screens and sitting. A timer can help, but it does not need to be the main system."
  },
  {
    type: "p",
    text:
      "Try natural cues first for one week. If you keep missing them, add one backup reminder during the part of the day where breaks disappear most often. That keeps the routine supportive instead of noisy."
  },
  {
    type: "h2",
    text: "Keep a one-week note"
  },
  {
    type: "p",
    text:
      "At the end of each day, write down which cue worked, which cue was skipped, and whether one task block stayed too long without a pause. The note can be plain: \"after calls worked,\" \"emails ran long,\" or \"lunch reset helped.\""
  },
  {
    type: "p",
    text:
      "After a week, keep the cues that happened naturally and replace the ones that did not. If discomfort is severe, keeps getting worse, or feels linked to a specific condition, ask a qualified professional or workplace safety contact instead of trying to solve it with a routine article."
  },
  {
    type: "h2",
    text: "A calm takeaway"
  },
  {
    type: "p",
    text:
      "A natural pause routine works best when it is tied to moments already in your day. Pick a few clear transitions, pair each one with one small change, rotate non-screen tasks when possible, and use a timer only where cues fail. This article is general education only and is not medical advice."
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
article.summary =
  "Build a natural pause routine by attaching short breaks to work transitions, posture changes, and real non-screen tasks.";
article.body = body;
article.seo = {
  ...article.seo,
  metaDescription:
    "Build a natural pause routine by attaching small breaks to work transitions, posture changes, non-screen tasks, and simple reset cues.",
  primaryKeyword: "natural pause routine",
  secondaryKeywords: [
    "natural pause routine for work",
    "screen break cues",
    "workday break routine"
  ],
  h2: [
    "Start with transitions you already have",
    "Pair each cue with one small change",
    "Rotate screen and non-screen tasks when possible",
    "Use a timer only as a backup",
    "Keep a one-week note",
    "A calm takeaway"
  ],
  faq: [
    "What is a natural pause routine?",
    "How can I remember screen breaks without timers?",
    "When should I ask a qualified professional instead of using a routine tip?"
  ],
  internalLinks: [
    "screen-break-routine",
    "desk-reset-routine",
    "product-comparison-checklist",
    "compare-cost-per-serving"
  ]
};

fs.writeFileSync(scheduledPath, `${JSON.stringify(scheduled, null, 2)}\n`);

const bodyMarkdown = body
  .map((block) => {
    if (block.type === "h2") return `## ${block.text}`;
    return block.text;
  })
  .join("\n\n");

const reviewPacket = `# Article 13 Review Packet

## Project Goal Header

Current big goal: Daily Support Guide must reach A+ on quiz, homepage, SEO foundation, content library, trust/compliance, and HTTPS/security before Phase 7 affiliate revenue can begin.

Current project state: Article 13 is drafted and internally linted. It is not approved for publishing.

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
- Title: How to Use Natural Pauses Instead of Timers
- Scheduled date: 2026-08-01
- Category: Routine Guides
- Status: internal_pass
- Approved for publishing: false
- Primary keyword: natural pause routine
- Meta description: Build a natural pause routine by attaching small breaks to work transitions, posture changes, non-screen tasks, and simple reset cues.

## Source Notes

- OSHA work process guidance: high repetition tasks or long static postures may require short rest breaks, also described as micro breaks or rest pauses, and users should be encouraged to stand, stretch, and move around.
- OSHA work process guidance: alternating tasks when possible and mixing non-computer tasks into the workday encourages movement and use of different muscle groups.
- OSHA positions guidance: even good working posture should change frequently through small chair or backrest adjustments, stretching, standing, walking, or doing some tasks while standing.
- CDC/NIOSH working-from-home guidance: periodic rest breaks and changes in posture are beneficial; hourly 5-minute breaks may reduce musculoskeletal discomfort and eyestrain; setting a timer is one possible reminder.
- CDC/NIOSH office environment guidance: workers should be able to work without over-reaching, sitting or standing too long, or using awkward postures; short breaks every hour can reduce discomfort for computer workers.
- OSHA workstation evaluation checklist: computer tasks should vary keyboard work with other activities or provide opportunities for micro-breaks or recovery pauses; workers should be able to alternate sitting and standing activities.

Sources:
- https://www.osha.gov/etools/computer-workstations/work-process
- https://www.osha.gov/etools/computer-workstations/positions
- https://www.cdc.gov/niosh/bulletin/2020/working-from-home.html
- https://www.cdc.gov/niosh/office-environment/about/
- https://www.osha.gov/etools/computer-workstations/checklists/evaluation

## Internal Safety Checklist

- [x] No brand names.
- [x] No retailer names.
- [x] No affiliate, coupon, discount, or buying language.
- [x] No product recommendations.
- [x] No medical advice, treatment, cure, prevention, or dosage language.
- [x] Includes general education only and not medical advice disclaimer.
- [x] Does not claim a routine treats or prevents a condition.
- [x] Keeps ergonomic guidance practical and non-individualized.

## External Reviewer Prompt

Review this article for the current step only. Return one of:

- \`PASS\`: no required changes.
- \`CHANGES_REQUIRED\`: list only concrete safety, compliance, factual, SEO, or clarity issues that must be fixed before approval.

Do not suggest new features, brand recommendations, affiliate strategy, medical advice, or broad refactors. Keep feedback scoped to this article.

## Article Draft

# How to Use Natural Pauses Instead of Timers

${bodyMarkdown}
`;

fs.mkdirSync(path.dirname(reviewPath), { recursive: true });
fs.writeFileSync(reviewPath, reviewPacket);

console.log(`Drafted ${slug}`);
console.log(`Updated ${path.relative(root, scheduledPath)}`);
console.log(`Wrote ${path.relative(root, reviewPath)}`);
