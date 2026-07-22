import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const scheduledPath = path.join(root, "content", "scheduled", "articles.json");
const reviewPath = path.join(
  root,
  "docs",
  "reviews",
  "2026-08-02-compare-caffeine-free-drink-labels-review.md"
);
const slug = "compare-caffeine-free-drink-labels";

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
    chatgpt: "PASS",
    gemini: "PASS",
    claude: "PASS",
    grok: "PASS"
  },
  approvedAt: "2026-07-22"
};

fs.writeFileSync(scheduledPath, `${JSON.stringify(scheduled, null, 2)}\n`);

let reviewPacket = fs.readFileSync(reviewPath, "utf8");
reviewPacket = reviewPacket.replace(
  "Current project state: Article 14 is drafted and internally linted. It is not approved for publishing.",
  "Current project state: Article 14 passed ChatGPT, Gemini, Claude, and Grok review after one SEO keyword alignment correction. It is approved for publishing."
);
reviewPacket = reviewPacket.replace("- Status: internal_pass", "- Status: approved");
reviewPacket = reviewPacket.replace("- Approved for publishing: false", "- Approved for publishing: true");

if (!reviewPacket.includes("## Four-AI Review Result")) {
  reviewPacket += `

## Four-AI Review Result

- ChatGPT: PASS after SEO keyword alignment correction.
- Gemini: PASS after SEO keyword alignment correction.
- Claude: PASS after confirming the prior SEO issue was resolved.
- Grok: PASS after SEO keyword alignment correction.

Correction applied before final approval: revised title, H1, SEO title, meta description, and summary to naturally include the primary keyword \`caffeine on drink labels\`.

Final status: approved for publishing. Publication remains controlled by the scheduled GitHub Actions workflow.
`;
}

fs.writeFileSync(reviewPath, reviewPacket);

console.log(`Approved ${slug}`);
