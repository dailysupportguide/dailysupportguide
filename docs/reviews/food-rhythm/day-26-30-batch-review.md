# Everyday Food Rhythm Day 26-30 Batch Review Packet

## Batch Metadata

- Series: Everyday Food Rhythm
- Batch: Day 26-30
- Draft file: `content/drafts/food-rhythm-day-26-30.json`
- Status: approved
- External quorum: passed
- Grok required: no

## Articles

| Day | Slug | Title | Author | Status |
| --- | --- | --- | --- | --- |
| 26 | `read-menu-without-perfect-choice` | How to Read a Menu Without Searching for the Perfect Choice | June Carter | approval_candidate |
| 27 | `delivery-meals-what-to-notice` | Delivery Meals: What to Notice Before Ordering Again | Theo Grant | approval_candidate |
| 28 | `balance-takeout-across-week` | A Simple Way to Balance Takeout Across the Week | Nora Vale | approval_candidate |
| 29 | `restaurant-notes-neutral` | How to Keep Restaurant Notes Neutral and Useful | Mara Lin | approval_candidate |
| 30 | `eating-out-becomes-default` | What to Do When Eating Out Becomes the Default | Eli Brooks | approval_candidate |

## Safety Watch

- Avoid restaurant recommendations, rankings, product picks, app names, brand names, store examples, affiliate language, coupons, or shopping prompts.
- Avoid good/bad food labels, shame language, guilt framing, restriction, overcorrection, detox, cleanse, compensation, or weight-loss framing.
- Avoid medical advice, diagnosis, treatment, blood-sugar, hormone, metabolism, energy-performance, or productivity-cure claims.
- Keep the batch inside everyday eating-out rhythm, menu language, delivery/takeout notes, restaurant-note fields, and practical weekly reflection.

## Internal Review State

- Local JSON structure: passed
- Banned-pattern check: passed
- Human polish / anti-AI pass: passed
- External ChatGPT review: passed_initial_delta_and_micro_delta
- External Gemini review: passed_initial_delta_and_micro_delta
- External Claude review: revised_then_delta_revise_then_micro_delta_passed

## Reviewer Prompt Addition

Tell ChatGPT, Gemini, and Claude:

> These are Everyday Food Rhythm eating-out articles. They should feel human-written and practical, but must not add brands, stores, app names, product examples, affiliate language, restaurant recommendations, rankings, medical advice, diet rules, weight-loss advice, detox claims, diagnosis language, treatment guidance, metabolism claims, hormone claims, performance claims, blood-sugar claims, productivity-cure claims, shame language, or rigid tracking systems. Please flag safety boundary issues, AI-like sameness, generic wellness phrasing, and author voice that is either invisible or exaggerated.

## Internal Review Notes

- Day 26 June Carter: menu wording and choice-pressure boundary; avoids perfect-choice and good/bad framing.
- Day 27 Theo Grant: delivery note fields; avoids app, brand, and vendor names.
- Day 28 Nora Vale: warm weekly takeout rhythm; avoids strict rules and correction language.
- Day 29 Mara Lin: structured restaurant-note fields; avoids rankings and public-review style.
- Day 30 Eli Brooks: direct eating-out-heavy week checklist; avoids shame and overcorrection.
- Anti-template polish: varied structures across the batch after Claude feedback (3/5/2/5/3 H2s), varied endings, and kept each article aligned to its author voice.
- Revision after first external review: ChatGPT and Gemini passed initial review; Claude requested stronger structural variation and less shared closing-aphorism rhythm across the batch.
- Local verification: JSON parsed successfully; body banned-pattern scan returned no hits; `git diff --check` returned clean.

## External Review Notes

- Approved for publishing queue: yes
- Approved date: 2026-09-12
- Scheduled release plan: Everyday Food Rhythm: 5 articles/day from 2026-09-20 through 2026-09-29
- ChatGPT first pass: PASS.
- Gemini first pass: PASS.
- Claude first pass: REVISE for batch-level structural sameness and shared closing rhythm; no safety boundary blocker.
- ChatGPT delta re-review after structure revision: PASS.
- Gemini delta re-review after structure revision: PASS.
- Claude delta re-review after structure revision: REVISE for unchanged Day 27 structure.
- Day 27 micro revision: changed Theo article from a 5-H2 field skeleton into a 3-H2 delivery-row structure.
- ChatGPT Day 27 micro-delta: PASS.
- Gemini Day 27 micro-delta: PASS.
- Claude Day 27 micro-delta: PASS.

## Current Stop Point

Day 26-30 passed internal safety review, human polish, and ChatGPT + Gemini + Claude external quorum. This batch is approved for the Food Rhythm publishing queue and scheduled under Everyday Food Rhythm: 5 articles/day from 2026-09-20 through 2026-09-29.
