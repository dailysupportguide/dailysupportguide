# Lifestyle Explorer Quiz Review Packet

## Project Goal Header

Current big goal: Build Daily Support Guide as an English-first, U.S.-audience informational site with a neutral quiz, label-reading/routine articles, SEO foundations, and no affiliate links until a later monetization phase is safe.

Current project state: The quiz is live in Phase 1A and has been revised into a neutral path-based explorer. It is not frozen until ChatGPT, Gemini, Claude, and Grok all pass the same version.

Current step: External four-AI review for the homepage Lifestyle Explorer quiz.

Distance to goal: The quiz can be treated as frozen only after all four AI reviewers return PASS or all blocking comments are fixed and resubmitted.

Non-drift boundaries:
- U.S.-audience English content.
- General education and organization only.
- No diagnosis, scoring of health, deficiency claims, treatment, cure, prevention, dosage, or individualized medical advice.
- No product, brand, retailer, supplement, medicine, affiliate, coupon, discount, or buying recommendation.
- No answer storage, tracking analytics, personal data collection, or external submission in Phase 1A.
- The quiz may suggest neutral guides already on the site.

## Homepage Quiz Context

Visible section heading:

- Eyebrow: Lifestyle Explorer
- H2: A quick way to organize what you want to compare.
- Intro: This tool creates a neutral reading plan. It does not diagnose, score your health, or tell you what to buy.
- Privacy note: Your answers are used only on this page to show the next prompt and result. They are not stored or sent anywhere.

Sitewide Phase 1A notice:

- No affiliate links.
- No tracking analytics.
- No brand recommendations.

Editorial boundary:

- Daily Support Guide publishes general educational content.
- It is not medical advice and should not replace guidance from a qualified professional.
- The site does not recommend specific products, brands, supplements, medicines, dosages, or treatment decisions during Phase 1A.

## Quiz Questions

Question 1: What do you want to organize first?

- Reading labels and package details
- Making daily routines easier
- Comparing similar options calmly

Question 2: What usually makes the decision feel harder?

- Too many claims at once
- Unclear serving or direction details
- Not enough time to compare

Question 3: What kind of guide is most useful to you?

- A short checklist
- A plain walkthrough
- A note-taking framework

Question 4: When would you use this most?

- Before the day starts
- While comparing options
- During a weekly reset

## Result Logic

The result uses the answer choices only in browser memory during the current page session. It does not write to localStorage, sessionStorage, cookies, analytics, or a server.

Result-composition rule:

- The quiz does not calculate a score, level, severity, type, deficiency, or health status.
- The first answer selects one primary path headline and one first-step card.
- The second, third, and fourth answers each add one independent support card.
- All four cards are displayed together as neutral organizing notes.
- The support cards do not rank the user, diagnose the user, or imply that one answer is better or worse than another.
- Suggested guide links are based only on the primary path and only point to neutral on-site articles.

Focus result paths:

- Label-reading path: Start with serving size, servings per container, directions, and plain label facts before looking at any front-of-package claim.
- Routine-support path: Keep the plan small enough to repeat: one cue, one short action, and one low-pressure check-in.
- Comparison path: Put similar details side by side and compare only neutral attributes such as format, amount, count, serving size, and missing information.

Decision difficulty result prompts:

- Lower the noise: Ignore broad claims at first. Read the reference facts, then decide what still needs verification.
- Clarify the unit: Write down the exact serving, count, direction, or label term that makes the comparison unclear.
- Use a short pass: Pick three fields to compare now, then save anything uncertain for a later review instead of deciding under pressure.

Preferred guide style result prompts:

- Use a checklist: Make the result practical: reference amount, comparable details, missing information, and questions for a qualified professional.
- Use a walkthrough: Move from the top of the label downward so each number has context before you compare it.
- Use neutral notes: Keep notes factual: what the label says, what it does not say, and what you are not going to assume.

Use-time result prompts:

- Morning use: Choose one small comparison rule before the day gets crowded.
- Shopping use: Pause before choosing. Compare like with like, then leave anything unclear out of the decision.
- Weekly reset: Use the reset to clean up notes, not to pressure yourself into a perfect decision.

Result disclaimer:

- Use this as a neutral reading plan. It is not a product recommendation, health assessment, diagnosis, or buying instruction.
- This page does not store your answers.
- For personal medical, allergy, pregnancy, medication, or nutrition questions, ask a qualified professional.

Suggested guide links:

- Label path: serving size vs servings per container; how to read serving size.
- Routine path: no matching routine guide is published yet, so the quiz shows a neutral note instead of an unrelated link.
- Comparison path: serving size vs servings per container.

## Internal Mechanical Checks

- `node scripts/lint_quiz.mjs`: passed. This lint blocks affiliate/buying language, retailer names, diagnosis/treatment/cure/prevention/dosage patterns, and any `localStorage`, `sessionStorage`, `navigator.sendBeacon`, or `fetch(` usage in the quiz files.
- `node scripts/lint_content.mjs`: passed.
- JavaScript syntax check for `assets/app.js`: passed.

## External Reviewer Prompt

Review this quiz for the current step only. Return one of:

- `PASS`: no required changes.
- `CHANGES_REQUIRED`: list only concrete safety, compliance, factual, UX clarity, privacy, or conversion-trust issues that must be fixed before the quiz can be frozen.

Do not suggest affiliate links, product recommendations, medical advice, diagnosis, scoring, tracking analytics, account systems, new site features, or broad redesigns. Keep feedback scoped to this quiz and its current Phase 1A boundaries.

## Four-AI Review Result

- ChatGPT: PASS on final clarification packet.
- Gemini: PASS on final clarification packet.
- Claude: PASS after result-composition rule was added.
- Grok: PASS on final clarification packet.

Final status: frozen for Phase 1A quiz scope.
