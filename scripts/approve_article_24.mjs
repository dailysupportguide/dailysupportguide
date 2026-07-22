import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const scheduledPath = path.join(root, "content", "scheduled", "articles.json");
const reviewPath = path.join(
  root,
  "docs",
  "reviews",
  "2026-08-12-epa-dha-label-numbers-review.md"
);
const slug = "epa-dha-label-numbers";

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
    claude: "PASS: no required changes",
    grok: "PASS"
  },
  approvedAt: "2026-07-22"
};

fs.writeFileSync(scheduledPath, `${JSON.stringify(scheduled, null, 2)}\n`);

let reviewPacket = fs.readFileSync(reviewPath, "utf8");
reviewPacket = reviewPacket.replace(
  "Current project state: Article 24 is drafted and internally linted. It is not approved for publishing.",
  "Current project state: Article 24 passed ChatGPT, Gemini, Claude, and Grok review. It is approved for publishing."
);
reviewPacket = reviewPacket.replace("- Status: internal_pass", "- Status: approved");
reviewPacket = reviewPacket.replace("- Approved for publishing: false", "- Approved for publishing: true");

if (!reviewPacket.includes("## Four-AI Review Result")) {
  reviewPacket += `

## Four-AI Review Result

- ChatGPT: PASS.
- Gemini: PASS.
- Claude: PASS: no required changes.
- Grok: PASS.

Final status: approved for publishing. Publication remains controlled by the scheduled GitHub Actions workflow.
`;
}

fs.writeFileSync(reviewPath, reviewPacket);

console.log(`Approved ${slug}`);
