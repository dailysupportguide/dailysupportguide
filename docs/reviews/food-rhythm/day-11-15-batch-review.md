# Everyday Food Rhythm Day 11-15 Batch Review Packet

## Batch Metadata

- Series: Everyday Food Rhythm
- Batch: Day 11-15
- Draft file: `content/drafts/food-rhythm-day-11-15.json`
- Status: approved
- External quorum: passed
- Grok required: no

## Articles

| Day | Slug | Title | Author | Status |
| --- | --- | --- | --- | --- |
| 11 | `grocery-list-from-meals-you-already-eat` | How to Build a Grocery List From Meals You Already Eat | Mara Lin | internal_pass |
| 12 | `three-zone-grocery-list` | The Three-Zone Grocery List: Fresh, Pantry, Flexible | Mara Lin | internal_pass |
| 13 | `grocery-shopping-without-diet-project` | How to Shop Without Turning It Into a Diet Project | June Carter | internal_pass |
| 14 | `compare-grocery-staples` | A Simple Way to Compare Grocery Staples | Theo Grant | internal_pass |
| 15 | `groceries-going-unused` | What to Notice When Groceries Keep Going Unused | June Carter | internal_pass |

## Safety Watch

- Avoid converting grocery lists into diet plans, restriction rules, or weight-loss language.
- Avoid brands, stores, apps, products, organizers, supplements, tests, coupons, affiliate language, or winner/product-pick framing.
- Avoid shame or guilt language around unused groceries or food waste.
- Avoid medical advice, diagnosis, treatment, detox, hormone, metabolism, blood-sugar, or performance claims.
- Keep the batch inside everyday grocery rhythm, meal roles, pantry visibility, and neutral planning notes.

## Internal Review State

- Local JSON structure: passed
- Banned-pattern check: passed
- Human polish / anti-AI pass: passed
- External ChatGPT review: revised_then_delta_passed
- External Gemini review: passed_initial_and_delta
- External Claude review: passed_initial_with_note_and_delta

## Reviewer Prompt Addition

Tell ChatGPT, Gemini, and Claude:

> These are Everyday Food Rhythm articles. They should feel human-written and practical, but must not add brands, stores, product examples, affiliate language, medical advice, diet rules, weight-loss advice, detox claims, diagnosis language, treatment guidance, metabolism claims, hormone claims, performance claims, blood-sugar claims, or rigid tracking systems. Please flag safety boundary issues, AI-like sameness, generic wellness phrasing, and author voice that is either invisible or exaggerated.

## Internal Review Notes

- Day 11 Mara Lin: ordered grocery-list method from repeat meals; avoids turning the list into a new eating plan.
- Day 12 Mara Lin: zone structure for fresh, pantry, and flexible items; avoids stores, labels, and product picks.
- Day 13 June Carter: language boundary article; avoids weight-loss and moralizing language.
- Day 14 Theo Grant: source-aware comparison fields; avoids winner framing and product recommendations.
- Day 15 June Carter: unused-grocery reflection; treats food waste as planning information rather than blame.
- Local verification: JSON parsed successfully; body banned-pattern scan returned no hits; `git diff --check` returned clean.

## External Review Notes

- Approved for publishing queue: yes
- Approved date: 2026-09-12
- Scheduled release plan: Everyday Food Rhythm: 5 articles/day from 2026-09-20 through 2026-09-29
- ChatGPT first pass: overall REVISE. Blocking note: Day 12 phrase "An empty fresh zone may explain thin meals" implied a food-category deficiency or causal judgment.
- Gemini first pass: PASS across all five articles.
- Claude first pass: OVERALL PASS, with editorial note that Day 12 looked structurally close to Day 11 and that the batch closing disclaimer pattern could vary more.
- Revision applied: Day 12 now uses neutral grocery-planning wording about item availability and meal role; all five closing lines were varied by author rhythm without adding new claims.
- Local verification after revision: body banned-pattern scan returned no hits; `git diff --check` returned clean.
- ChatGPT delta re-review: PASS.
- Gemini delta re-review: PASS.
- Claude delta re-review: PASS.

## Current Stop Point

Day 11-15 passed internal safety review, human polish, and ChatGPT + Gemini + Claude external quorum. This batch is approved for the Food Rhythm publishing queue and scheduled under Everyday Food Rhythm: 5 articles/day from 2026-09-20 through 2026-09-29.
