import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const scheduledPath = path.join(root, "content", "scheduled", "articles.json");
const reviewPath = path.join(
  root,
  "docs",
  "reviews",
  "2026-08-05-read-sodium-and-sugar-labels-review.md"
);
const slug = "read-sodium-and-sugar-labels";

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
  "Current project state: Article 17 is drafted and internally linted. It is not approved for publishing.",
  "Current project state: Article 17 passed ChatGPT, Gemini, Claude, and Grok review after one source-scope correction. It is approved for publishing."
);
reviewPacket = reviewPacket.replace("- Status: internal_pass", "- Status: approved");
reviewPacket = reviewPacket.replace("- Approved for publishing: false", "- Approved for publishing: true");

if (!reviewPacket.includes("## Four-AI Review Result")) {
  reviewPacket += `

## Four-AI Review Result

- ChatGPT: PASS after source-scope correction.
- Gemini: PASS after source-scope correction.
- Claude: PASS after confirming the prior Added Sugars source-scope issue was resolved.
- Grok: PASS after source-scope correction.

Correction applied before final approval: simplified the Added Sugars composition sentence so it only states what the supplied FDA source notes directly support.

Final status: approved for publishing. Publication remains controlled by the scheduled GitHub Actions workflow.
`;
}

fs.writeFileSync(reviewPath, reviewPacket);

console.log(`Approved ${slug}`);
