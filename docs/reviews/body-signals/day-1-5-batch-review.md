# Everyday Body Signals Day 1-5 Batch Review Packet

## Batch Scope

- Series: Everyday Body Signals
- Batch: Day 1-5
- Draft file: `content/drafts/body-signals-day-1-5.json`
- Status: approved
- External quorum: passed
- Publishing approval: approved
- Schedule: 5 articles/day from 2026-09-10 through 2026-09-19
- Required external reviewers: ChatGPT + Gemini + Claude
- Grok required: no

## Articles

| Day | Slug | Title | Author | Status |
| --- | --- | --- | --- | --- |
| 1 | `afternoon-foggy-food-rhythm` | Feeling Foggy in the Afternoon? Start With Food Rhythm | Nora Vale | internal_pass |
| 2 | `still-tired-breakfast-structure` | Still Tired After Waking Up? Look at Breakfast Structure | Theo Grant | internal_pass |
| 3 | `lunch-sleepy-even-after-sleep` | Why Lunch Can Leave You Sleepy Even After Enough Sleep | Mara Lin | internal_pass |
| 4 | `busy-takeout-nutrition-gaps` | Three Small Nutrition Gaps Busy Takeout Eaters Often Miss | Eli Brooks | internal_pass |
| 5 | `stress-fatigue-food-rhythm` | Stress Can Make Fatigue Feel Heavier. Food Rhythm Still Counts. | June Carter | internal_pass |

## Internal Safety Review

Passed.

Checked for:

- Symptom-to-deficiency claims.
- Diagnosis language.
- Supplement, dose, product, store, or brand recommendations.
- Medical advice or treatment guidance.
- Personal health decisions.
- Risky phrasing around persistent fatigue, stress, sleep, caffeine, and daily body signals.

Notes:

- Day 1 keeps afternoon fogginess as a food-rhythm record.
- Day 2 keeps breakfast as a note sheet, not a tiredness explanation.
- Day 3 avoids blood-sugar diagnosis language around post-lunch sleepiness.
- Day 4 avoids restaurant, product, weight-loss, and moralizing language.
- Day 5 keeps stress and fatigue wording cautious and non-causal.
- ChatGPT required removing symptom-triggered professional-care guidance from Days 1-5; revised wording now states what food notes cannot explain without giving action guidance.

## Human Polish Review

Passed.

Checked for:

- Repeated openings.
- Identical section rhythm.
- Generic wellness phrasing.
- Over-polished reassurance.
- Templated author voice.
- Missing or exaggerated author voice.

Notes:

- Nora Vale uses gentle routine observation.
- Theo Grant uses practical note fields.
- Mara Lin uses ordered record structure.
- Eli Brooks uses clipped checklist rhythm.
- June Carter uses careful wording control.
- Claude required removing repeated author-name framing and second-paragraph template rhythm; revised second paragraphs now vary by article and do not name-drop authors in body text.

## Local Verification

Passed.

Verification performed:

- JSON parse succeeded.
- Batch contains exactly 5 articles.
- All articles use recognized author ids.
- All articles are marked `internal_pass`.
- All articles keep `externalAiReview` as `pending`.
- Required disclaimer appears in each article: "This article is general education only and is not medical advice."
- Local banned-pattern scan passed for affiliate, coupon, buy-now, brand/store, treatment, cure, prevention, dose, supplement-push, and deficiency-identification wording.

## External Review Prompt Addition

Use this instruction with ChatGPT, Gemini, and Claude:

> Also judge whether the article stays safely in food-pattern and daily-routine education. Flag any sentence that sounds like symptom diagnosis, deficiency identification, medical advice, supplement recommendation, product recommendation, treatment guidance, or a symptom checker. Also flag AI-like sameness, generic wellness phrasing, and author voice that is either invisible or exaggerated.

## External Review Results

| Reviewer | Result | Notes |
| --- | --- | --- |
| ChatGPT | PASS after revision | Initial review required removing symptom-triggered professional-care guidance from Days 1-5. Delta review passed after revised boundary wording. |
| Gemini | PASS + final delta PASS | Full review passed. Final author-voice delta review also passed. |
| Claude | PASS after revision | Initial review required reducing repeated author-name/template rhythm. First delta still found repeated note construction. Second delta passed after deeper second-paragraph rewrites. |

## Approval Candidate Status

Ready as an approval candidate.

Blocking item:

- None for Day 1-5.
