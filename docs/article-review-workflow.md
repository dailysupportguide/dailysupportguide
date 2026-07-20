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

## Publishing

The GitHub Actions workflow runs on a schedule. It publishes approved articles only when their scheduled date is due in `America/New_York`.
