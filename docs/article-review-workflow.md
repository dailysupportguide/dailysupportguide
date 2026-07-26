# Article Review Workflow

Each article moves through these states:

1. `draft`
2. `internal_pass`
3. `external_review`
4. `approved`
5. `published`

## Internal Review

Run:

```bash
node scripts/lint_content.mjs
```

The lint checks look for:

- Affiliate or coupon language.
- Brand and retailer references.
- Medical claim language.
- Missing education-only disclaimer.
- Missing scheduled article data.

## External Four-AI Review

When browser access is available, submit the article packet to:

- ChatGPT
- Grok
- Gemini
- Claude

The article can only become `approved` when all four return pass status or all actionable comments are resolved and resubmitted.

## Safety Stop Valve

The review loop must stop immediately when the safety stop valve is triggered. This is a hard operational limit, not a recommendation.

Trigger the stop valve when:

- One Codex task has handled more than 5 articles.
- One Codex task has used more than 25 browser/tool interactions for review.
- The same external AI page fails, rate-limits, disables submission, or loses login state three times in a row.
- A tool output or DOM snapshot is too large to keep the task transcript lightweight.
- The Codex UI becomes slow, unresponsive, or risky to reopen.
- The user asks to stop, pause, or close all actions.

After the stop valve is triggered:

- Stop all browser automation and external AI submissions.
- Do not approve, publish, commit, push, or continue drafting new articles in the same task.
- Record a short status summary only: article slug, reviewer states, current repository status, and the stop trigger.
- Resume only from a fresh Codex task after user confirmation.

## Publishing

The GitHub Actions workflow runs on a schedule. It publishes approved articles only when their scheduled date is due in `America/New_York`.
