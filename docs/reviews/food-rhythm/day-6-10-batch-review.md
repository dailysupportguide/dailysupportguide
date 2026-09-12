# Everyday Food Rhythm Day 6-10 Batch Review Packet

## Batch Metadata

- Series: Everyday Food Rhythm
- Batch: Day 6-10
- Draft file: `content/drafts/food-rhythm-day-6-10.json`
- Status: approved
- External quorum: passed
- Grok required: no

## Articles

| Day | Slug | Title | Author | Status |
| --- | --- | --- | --- | --- |
| 6 | `breakfast-keeps-getting-skipped` | What to Do When Breakfast Keeps Getting Skipped | Nora Vale | internal_pass |
| 7 | `no-drama-lunch-plan-packed-workdays` | A No-Drama Lunch Plan for Packed Workdays | Eli Brooks | internal_pass |
| 8 | `simple-dinner-after-long-day` | How to Keep Dinner Simple After a Long Day | Nora Vale | internal_pass |
| 9 | `two-minute-meal-note-chaotic-weeks` | The Two-Minute Meal Note for Chaotic Weeks | Theo Grant | internal_pass |
| 10 | `recover-from-random-eating-day` | How to Recover From a Day of Random Eating | June Carter | internal_pass |

## Safety Watch

- Avoid saying readers must eat breakfast or follow a fixed meal schedule.
- Avoid meal-prep perfection, workplace productivity, energy, performance, metabolism, blood-sugar, hormone, or detox claims.
- Avoid cleanse, compensation, restriction, punishment, or overcorrection framing.
- Avoid brands, stores, apps, products, supplements, tests, coupons, affiliate language, or tracking-device examples.
- Keep the batch inside everyday food rhythm, grocery, snack, kitchen, and meal-planning education.

## Internal Review State

- Local JSON structure: passed
- Banned-pattern check: passed
- Human polish / anti-AI pass: passed
- External ChatGPT review: passed_initial_and_delta
- External Gemini review: passed_initial_and_delta
- External Claude review: passed_after_structural_delta

## Reviewer Prompt Addition

Tell ChatGPT, Gemini, and Claude:

> These are Everyday Food Rhythm articles. They should feel human-written and practical, but must not add brands, stores, product examples, affiliate language, medical advice, diet rules, weight-loss advice, detox claims, diagnosis language, treatment guidance, metabolism claims, hormone claims, performance claims, blood-sugar claims, or rigid tracking systems. Please flag safety boundary issues, AI-like sameness, generic wellness phrasing, and author voice that is either invisible or exaggerated.

## Internal Review Notes

- Day 6 Nora Vale: warm, low-pressure breakfast observation; explicitly avoids a breakfast requirement.
- Day 7 Eli Brooks: clipped lunch checklist; keeps workday planning practical without productivity promises.
- Day 8 Nora Vale: gentle dinner routine; avoids guilt and keeps examples broad and brand-free.
- Day 9 Theo Grant: note-sheet structure; uses source fields without app-style tracking.
- Day 10 June Carter: language-first recovery article; avoids detox, cleanse, punishment, and overcorrection.
- Local verification: JSON parsed successfully; body banned-pattern scan returned no hits; `git diff --check` returned clean.

## External Review Notes

- Approved for publishing queue: yes
- Approved date: 2026-09-12
- Scheduled release plan: Everyday Food Rhythm: 5 articles/day from 2026-09-20 through 2026-09-29
- ChatGPT first pass: PASS across all five articles; no blocking safety issues or AI-template blocker.
- Gemini first pass: PASS across all five articles; flags empty.
- Claude first pass: content PASS across all five articles; requested structural revision because all five used a similar intro/H2/closing/disclaimer skeleton.
- Revision applied: varied section counts and article shapes across the batch, removed fixed closing-H2 pattern from several articles, and integrated disclaimer wording by author rhythm without adding new claims.
- ChatGPT delta re-review: PASS.
- Gemini delta re-review: PASS.
- Claude delta re-review: PASS.

## Current Stop Point

Day 6-10 passed internal safety review, human polish, and ChatGPT + Gemini + Claude external quorum. This batch is approved for the Food Rhythm publishing queue and scheduled under Everyday Food Rhythm: 5 articles/day from 2026-09-20 through 2026-09-29.
