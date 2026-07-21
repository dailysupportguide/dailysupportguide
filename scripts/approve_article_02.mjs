import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const scheduledPath = path.join(root, "content", "scheduled", "articles.json");
const reviewPath = path.join(
  root,
  "docs",
  "reviews",
  "2026-07-21-serving-size-vs-servings-per-container-review.md"
);
const slug = "serving-size-vs-servings-per-container";

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
    chatgpt: "PASS after Supplement Facts wording revision",
    gemini: "PASS on revised packet",
    claude: "PASS on revised packet",
    grok: "PASS on revised packet"
  },
  approvedAt: "2026-07-21"
};

fs.writeFileSync(scheduledPath, `${JSON.stringify(scheduled, null, 2)}\n`);

let reviewPacket = fs.readFileSync(reviewPath, "utf8");
reviewPacket = reviewPacket.replace(
  "Current project state: Article 02 is drafted and internally linted. It is not approved for publishing.",
  "Current project state: Article 02 passed ChatGPT, Gemini, Claude, and Grok review. It is approved for publishing."
);
reviewPacket = reviewPacket.replace("- Status: internal_pass", "- Status: approved");
reviewPacket = reviewPacket.replace("- Approved for publishing: false", "- Approved for publishing: true");

if (!reviewPacket.includes("## Four-AI Review Result")) {
  reviewPacket += `

## Four-AI Review Result

- ChatGPT: PASS after requested Supplement Facts wording revision.
- Gemini: PASS on revised packet.
- Claude: PASS on revised packet.
- Grok: PASS on revised packet.

Final status: approved for publishing.
`;
}

fs.writeFileSync(reviewPath, reviewPacket);

console.log(`Approved ${slug}`);
