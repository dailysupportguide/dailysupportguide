# Project Governance

This repository follows the Codex-OS operating standard for long-running website work.

## Phase 1A Rules

- Keep the site static and simple enough for GitHub Pages.
- Do not add tracking analytics, affiliate links, coupons, retailer links, or monetized outbound links.
- Do not mention brands, products, stores, marketplace names, or supplement companies in editorial content.
- Do not make diagnosis, treatment, cure, prevention, disease, or symptom-based product claims.
- Do not recommend that a reader should take, buy, stop, or replace any supplement, medication, or medical product.
- Keep articles educational, comparative, and neutral.

## A+ Readiness Gate

The project must not enter affiliate monetization until all six pre-monetization categories are verified at A+:

1. Quiz experience.
2. Homepage and site structure.
3. SEO foundation.
4. Content library and article quality.
5. Trust, compliance, and E-E-A-T.
6. HTTPS, security, and technical stability.

Phase 7 affiliate revenue is locked until the six categories above are A+ and the user explicitly approves activation. Do not add affiliate links, monetized outbound links, affiliate tracking, product recommendation flows, or affiliate disclosure language that implies active monetization before that gate opens.

## Review Gates

Before publication, each article must pass:
- Internal lint checks.
- Editorial safety review.
- External four-AI review when available.

External AI review records should be stored under `docs/reviews/` or in a linked review ledger.

## Safety Stop Valve

Stop all active work immediately when any of these conditions are reached:

- A Codex task accumulates review work for more than 5 articles.
- A Codex task uses more than 25 browser/tool interactions for external AI review.
- Any browser or external AI page returns repeated rate limits, disabled submit controls, login failures, or unstable page state three times in a row.
- A tool output, DOM snapshot, or AI response is large enough that it would need to be pasted or summarized at length in the task transcript.
- The task UI becomes slow, unresponsive, or risky to reopen.
- The user says stop, pause, safety valve, close all actions, or any equivalent instruction.

When the safety stop valve is triggered:

1. Stop browser automation, external submissions, file edits, commits, pushes, approvals, and publishing actions.
2. Do not retry the failing action in the same task.
3. Write only a short status summary with the current article, reviewer states, latest commit if any, and the exact trigger.
4. Store durable state in repository files such as `docs/reviews/` before ending only if doing so is already safe and does not require more external interaction.
5. Continue later in a fresh Codex task after the user confirms.
