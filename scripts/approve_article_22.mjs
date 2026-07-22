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
    chatgpt: "PASS after plant-source source-scope correction",
    gemini: "PASS after plant-source source-scope correction",
    claude: "PASS after confirming prior plant-source scope and sesame-example clarity issues were resolved",
    grok: "PASS after plant-source source-scope correction"
  },
  approvedAt: "2026-07-22"
};

fs.writeFileSync(scheduledPath, `${JSON.stringify(scheduled, null, 2)}\n`);

let reviewPacket = fs.readFileSync(reviewPath, "utf8");
reviewPacket = reviewPacket.replace(
  "Current project state: Article 22 is drafted and internally linted. It is not approved for publishing.",
  "Current project state: Article 22 passed ChatGPT, Gemini, Claude, and Grok review after one source-scope correction. It is approved for publishing."
);
reviewPacket = reviewPacket.replace("- Status: internal_pass", "- Status: approved");
reviewPacket = reviewPacket.replace("- Approved for publishing: false", "- Approved for publishing: true");

if (!reviewPacket.includes("## Four-AI Review Result")) {
  reviewPacket += `

## Four-AI Review Result

Correction applied before final approval: clarified that the plant-source category sentence is based on FDA consumer guidance for plant-based milk alternatives, added the supporting source note for grains, legumes, nuts, and seeds, and removed the sesame-based example from the plant-source example sentence to avoid confusion before the allergen section.

- ChatGPT: PASS after plant-source source-scope correction.
- Gemini: PASS after plant-source source-scope correction.
- Claude: PASS after confirming prior plant-source scope and sesame-example clarity issues were resolved.
- Grok: PASS after plant-source source-scope correction.

Final status: approved for publishing. Publication remains controlled by the scheduled GitHub Actions workflow.
`;
}

fs.writeFileSync(reviewPath, reviewPacket);

console.log(`Approved ${slug}`);
