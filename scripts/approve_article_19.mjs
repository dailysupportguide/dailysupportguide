import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const scheduledPath = path.join(root, "content", "scheduled", "articles.json");
const reviewPath = path.join(
  root,
  "docs",
  "reviews",
  "2026-08-07-read-protein-on-food-labels-review.md"
);
const slug = "read-protein-on-food-labels";

const scheduled = JSON.parse(fs.readFileSync(scheduledPath, "utf8"));
const article = scheduled.find((item) => item.slug === slug);

if (!article) {
  throw new Error(`Could not find scheduled article: ${slug}`);
}

article.status = "approved";
article.review = {
  internalLint: "passed",
  externalAiReview: "passed",
  approvedForPublishing: true,
  reviewers: {
    chatgpt: "PASS after SEO title correction",
    gemini: "PASS after SEO title correction",
    claude: "PASS after confirming the primary keyword title issue was resolved",
    grok: "PASS after SEO title correction"
  },
  approvedAt: "2026-07-22"
};

fs.writeFileSync(scheduledPath, `${JSON.stringify(scheduled, null, 2)}\n`);

let reviewPacket = fs.readFileSync(reviewPath, "utf8");
reviewPacket = reviewPacket.replace(
  "Current project state: Article 19 is drafted and internally linted. It is not approved for publishing.",
  "Current project state: Article 19 passed ChatGPT, Gemini, Claude, and Grok review after one SEO title correction. It is approved for publishing."
);
reviewPacket = reviewPacket.replace("- Status: internal_pass", "- Status: approved");
reviewPacket = reviewPacket.replace("- Approved for publishing: false", "- Approved for publishing: true");

if (!reviewPacket.includes("## Four-AI Review Result")) {
  reviewPacket += `

## Four-AI Review Result

- ChatGPT: PASS after SEO title correction.
- Gemini: PASS after SEO title correction.
- Claude: PASS after confirming the prior primary-keyword title issue was resolved.
- Grok: PASS after SEO title correction.

Correction applied before final approval: changed the title and H1 from "How to Look at Protein Sources in a Normal Meal" to "How to Read Protein on Food Labels in a Normal Meal" so the primary keyword appears naturally in the page title.

Final status: approved for publishing. Publication remains controlled by the scheduled GitHub Actions workflow.
`;
}

fs.writeFileSync(reviewPath, reviewPacket);

console.log(`Approved ${slug}`);
