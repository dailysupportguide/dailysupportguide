# Everyday Body Signals 50-Day Workflow

## Purpose

This workflow turns the `Everyday Body Signals` 50-topic plan into a repeatable production process from Day 1 through Day 50.

It is designed to keep each batch small, preserve author voice, prevent AI-like sameness, and maintain the stricter safety boundary required for body-signal articles.

## Operating Rule

Run this series in 10 batches of 5 articles.

Do not process more than 5 articles in one task. If a task reaches any Safety Stop Valve condition, stop immediately and report a short status summary.

## Required Inputs

- Topic map: `docs/body-signals-series-production-plan.md`
- Author style guide: `docs/nutrient-series-author-style-guide.md`
- Site authors: `assets/authors.js`
- Content queue target, when approved by user: a future body-signals scheduled content file or the existing content structure chosen at implementation time.

## Non-Goals

- Do not publish during drafting or review.
- Do not commit or push unless the user explicitly asks.
- Do not add brands, stores, affiliate links, product examples, supplement recommendations, doses, tests, diagnosis, treatment advice, or symptom checkers.
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
- Practical food-pattern or routine check.
- Clear safety boundary.
- Required ending: "This article is general education only and is not medical advice."

Exit condition: all 5 drafts exist in working form.

### Gate 3: Internal Safety Review

Check every draft for:

- Symptom-to-deficiency claims.
- Diagnosis language.
- Supplement, dose, product, store, or brand recommendations.
- Medical advice or treatment guidance.
- Personal health decisions.
- Risky phrasing around pregnancy, breastfeeding, medication use, eating disorder history, chronic conditions, surgery, and persistent symptoms.

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

> Also judge whether the article stays safely in food-pattern and daily-routine education. Flag any sentence that sounds like symptom diagnosis, deficiency identification, medical advice, supplement recommendation, product recommendation, treatment guidance, or a symptom checker. Also flag AI-like sameness, generic wellness phrasing, and author voice that is either invisible or exaggerated.

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

| Batch | Days | Theme | Primary Gate Risk | Completion Marker |
| --- | --- | --- | --- | --- |
| 1 | 1-5 | Energy, breakfast, lunch, takeout, stress | Fatigue language can sound diagnostic. | Days 1-5 are approval candidates. |
| 2 | 6-10 | Sweet cravings, coffee, recovery, sitting, busy schedules | Avoid stimulant, recovery, and productivity promises. | Days 6-10 are approval candidates. |
| 3 | 11-15 | Skin, mouth corners, mouth sores, nails, hair | High risk of deficiency and beauty-product framing. | Days 11-15 are approval candidates. |
| 4 | 16-20 | Seasonal skin, healing, greasy takeout, vegetarian checks | Healing and vegetarian topics need extra caution. | Days 16-20 are approval candidates. |
| 5 | 21-25 | Sleep, night waking, mood, stress eating, focus | Avoid sleep, mental health, and cognitive treatment claims. | Days 21-25 are approval candidates. |
| 6 | 26-30 | Brain fog, tired-wired nights, restlessness, late nights, pressure weeks | Avoid brain fog diagnosis and stimulant dosing advice. | Days 26-30 are approval candidates. |
| 7 | 31-35 | Bloating, slow digestion, thirst, cold hands, hunger | Digestive, thirst, and cold-extremity topics need escalation wording. | Days 31-35 are approval candidates. |
| 8 | 36-40 | Night snacks, salty takeout, vegetables, protein, hydration | Avoid weight-loss, blood pressure, and protein target advice. | Days 36-40 are approval candidates. |
| 9 | 41-45 | Office workers, parents, older adults, students, fitness beginners | Avoid demographic medical advice and performance guarantees. | Days 41-45 are approval candidates. |
| 10 | 46-50 | Vegetarian, delivery, travel, period, weekly check-in | Avoid period treatment, detox/reset, and symptom-checker format. | Days 46-50 are approval candidates. |

## Author Rotation Check

Before starting a batch, verify that the production plan still gives each author 10 articles:

- Mara Lin: 10
- Nora Vale: 10
- Eli Brooks: 10
- June Carter: 10
- Theo Grant: 10

If this count changes, stop and ask whether to rebalance before drafting.

## Suggested Commands

Use these only for local verification. They do not replace editorial review.

```powershell
git -C "C:\Users\chris\Documents\Codex\dailysupportguide-live-sync" status --short
```

```powershell
$path="C:\Users\chris\Documents\Codex\dailysupportguide-live-sync\docs\body-signals-series-production-plan.md"
$rows=Get-Content -LiteralPath $path | Where-Object { $_ -match "^\| [0-9]+ \|" }
$rows.Count
$rows | ForEach-Object { ($_ -split "\|")[3].Trim() } | Group-Object | Sort-Object Name
```

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

## Full-Series Completion Definition

The 50-day workflow is complete only when:

- All 50 articles are drafted.
- All 50 pass internal safety review.
- All 50 pass human polish.
- All 50 pass ChatGPT + Gemini + Claude review, if external review is requested for the series.
- All 50 are reported as approval candidates.
- User separately authorizes approval, scheduling, commit, push, and publication steps.
