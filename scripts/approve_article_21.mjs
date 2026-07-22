import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const scheduledPath = path.join(root, "content", "scheduled", "articles.json");
const reviewPath = path.join(
  root,
  "docs",
  "reviews",
  "2026-08-09-compare-pantry-labels-review.md"
);
const slug = "compare-pantry-labels";

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
    chatgpt: "PASS after dented-can source-scope correction",
    gemini: "PASS after dented-can source-scope correction",
    claude: "PASS after confirming prior dented-can source-scope issue was resolved",
    grok: "PASS after dented-can source-scope correction"
  },
  approvedAt: "2026-07-22"
};

fs.writeFileSync(scheduledPath, `${JSON.stringify(scheduled, null, 2)}\n`);

let reviewPacket = fs.readFileSync(reviewPath, "utf8");
reviewPacket = reviewPacket.replace(
  "Current project state: Article 21 is drafted and internally linted. It is not approved for publishing.",
  "Current project state: Article 21 passed ChatGPT, Gemini, Claude, and Grok review after one source-scope correction. It is approved for publishing."
);
reviewPacket = reviewPacket.replace("- Status: internal_pass", "- Status: approved");
reviewPacket = reviewPacket.replace("- Approved for publishing: false", "- Approved for publishing: true");

if (!reviewPacket.includes("## Four-AI Review Result")) {
  reviewPacket += `

## Four-AI Review Result

Correction applied before final approval: removed the unsupported seam-damage causal explanation from the deeply dented can sentence and kept the statement within the USDA FSIS source notes.

- ChatGPT: PASS after dented-can source-scope correction.
- Gemini: PASS after dented-can source-scope correction.
- Claude: PASS after confirming prior dented-can source-scope issue was resolved.
- Grok: PASS after dented-can source-scope correction.

Final status: approved for publishing. Publication remains controlled by the scheduled GitHub Actions workflow.
`;
}

fs.writeFileSync(reviewPath, reviewPacket);

console.log(`Approved ${slug}`);
