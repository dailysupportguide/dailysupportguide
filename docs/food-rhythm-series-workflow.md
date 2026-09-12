# Everyday Food Rhythm 50-Day Workflow

## Purpose

This workflow turns the `Everyday Food Rhythm` 50-topic plan into a repeatable production process from Day 1 through Day 50.

It is designed to keep each batch small, preserve author voice, prevent AI-like sameness, and keep the topic in practical daily-life planning rather than diet or medical advice.

## Operating Rule

Run this series in 10 batches of 5 articles.

Do not process more than 5 articles in one task. If a task reaches any Safety Stop Valve condition, stop immediately and report a short status summary.

## Required Inputs

- Topic map: `docs/food-rhythm-series-production-plan.md`
- Author style guide: `docs/nutrient-series-author-style-guide.md`
- Site authors: `assets/authors.js`
- Draft files: `content/drafts/food-rhythm-day-N-N.json`
- Review packets: `docs/reviews/food-rhythm/day-N-N-batch-review.md`

## Non-Goals

- Do not publish during drafting or review.
- Do not approve, schedule, commit, or push unless the user explicitly asks.
- Do not add brands, stores, affiliate links, product examples, supplement recommendations, tests, diagnosis, treatment advice, weight-loss claims, detox language, or rigid diet rules.
- Do not use Grok for required review quorum.

## Batch Lifecycle

Each batch follows the same six gates.

### Gate 1: Batch Intake

For the selected 5 days:

- Confirm day numbers and titles from the production plan.
- Confirm assigned authors.
- Confirm safety watch items.
- Confirm whether the user wants drafts only, drafts plus internal polish, or drafts plus external review.

Exit condition: user has approved the selected batch scope.

### Gate 2: Draft

Create one English article per day.

Each draft must include:

- Title.
- Slug candidate.
- Author object using the existing author id and name.
- Deck or short summary.
- Body sections.
- Practical food-rhythm, grocery, snack, kitchen, or meal-planning check.
- Clear safety boundary.
- Required ending: "This article is general education only and is not medical advice."

Exit condition: all 5 drafts exist in working form.

### Gate 3: Internal Safety Review

Check every draft for:

- Diet rules or weight-loss advice.
- Shame language around food, groceries, snacks, takeout, weekends, or family meals.
- Supplement, product, store, app, device, or brand recommendations.
- Medical advice, diagnosis, treatment guidance, detox claims, hormone claims, metabolism claims, blood-sugar claims, or performance claims.
- Personal health decisions.
- Risky phrasing around pregnancy, breastfeeding, medication use, allergies, eating disorder history, chronic conditions, surgery, and individualized nutrition plans.

Exit condition: no blocking safety issues remain.

### Gate 4: Human Polish

Reduce AI-like wording and make author voice visible.

Check for:

- Repeated openings.
- Same-length sections across articles.
- Generic wellness phrasing.
- Over-polished reassurance.
- Templated disclaimers.
- Invisible author voice.
- Gimmicky author voice.

Exit condition: each article reads like a human-written site article in the assigned author voice.

### Gate 5: Three-AI Quick Review

Only after user approval, send the 5-article batch to:

- ChatGPT
- Gemini
- Claude

Required quorum: all three must PASS or provide only non-blocking editorial notes.

Reviewer prompt must include:

> Also judge whether the article stays safely in everyday food rhythm, grocery, snack, and meal-planning education. Flag any sentence that sounds like diet rules, weight-loss advice, medical advice, diagnosis, treatment guidance, product recommendation, brand/store example, shame language, or a rigid tracking system. Also flag AI-like sameness, generic wellness phrasing, and author voice that is either invisible or exaggerated.

Exit condition: ChatGPT + Gemini + Claude pass the batch, or the task stops with required revisions.

### Gate 6: Approval Candidate Report

Report:

- Days completed.
- Authors used.
- Safety issues found and fixed.
- Human polish notes.
- External review result, if performed.
- Whether the batch is ready for approval.

Stop after reporting. Do not approve, schedule, publish, commit, or push without user confirmation.

## 50-Day Batch Runbook

1. Day 1-5: draft, internal safety review, human polish, local verification, external quorum if requested.
2. Day 6-10: draft, internal safety review, human polish, local verification, external quorum if requested.
3. Day 11-15: draft, internal safety review, human polish, local verification, external quorum if requested.
4. Day 16-20: draft, internal safety review, human polish, local verification, external quorum if requested.
5. Day 21-25: draft, internal safety review, human polish, local verification, external quorum if requested.
6. Day 26-30: draft, internal safety review, human polish, local verification, external quorum if requested.
7. Day 31-35: draft, internal safety review, human polish, local verification, external quorum if requested.
8. Day 36-40: draft, internal safety review, human polish, local verification, external quorum if requested.
9. Day 41-45: draft, internal safety review, human polish, local verification, external quorum if requested.
10. Day 46-50: draft, internal safety review, human polish, local verification, external quorum if requested.

## Author Rotation Check

Before starting a batch, verify that the production plan still gives each author 10 articles:

- Mara Lin: 10
- Nora Vale: 10
- Eli Brooks: 10
- June Carter: 10
- Theo Grant: 10

If this count changes, stop and ask whether to rebalance before drafting.

## Safety Stop Valve

Stop immediately if any of these occur:

- More than 5 articles are being handled in one task.
- More than 25 browser or external-review interactions occur in one task.
- One external AI fails, rate-limits, or has login trouble 3 times consecutively.
- Output, review text, or DOM snapshot becomes too large.
- Codex UI begins to lag or freeze.
- User says stop, pause, safety valve, or asks to close all actions.

When stopped:

- Do not continue browser automation.
- Do not continue external review.
- Do not modify files.
- Do not commit.
- Do not push.
- Do not approve.
- Do not publish.
- Leave a short status summary and wait for user confirmation or a new task.
