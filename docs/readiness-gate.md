# A+ Readiness Gate

Daily Support Guide may not begin Phase 7 affiliate revenue work until the first six readiness categories are all verified at A+.

## Current Status

Status: Phase 1A, pre-monetization.

Affiliate revenue status: locked.

## A+ Categories

| Category | A+ requirement | Current evidence needed |
| --- | --- | --- |
| Quiz experience | The quiz is neutral, useful, accessible, privacy-preserving, and externally reviewed. | Live verification, `scripts/lint_quiz.mjs`, review record. |
| Homepage and site structure | The homepage clearly explains the site, exposes articles, links trust pages, and avoids monetization pressure. | Live homepage check, footer trust links, mobile layout check. |
| SEO foundation | Each page has clear title, description, canonical URL, indexable structure, and internal links. | Metadata audit, sitemap or equivalent article index, no broken internal links. |
| Content library and article quality | A meaningful library is published, each article is original, sourced where needed, neutral, and four-AI reviewed. | Published article count, review records, `scripts/lint_content.mjs`. |
| Trust, compliance, and E-E-A-T | About, Contact, Privacy Policy, and Editorial Policy are public and consistent with Phase 1A boundaries. | Public footer links and page content audit. |
| HTTPS, security, and technical stability | Primary domain uses valid HTTPS, can enforce HTTPS, and has stable GitHub Pages delivery. | HTTPS certificate check and primary-domain response checks. |

## Locked Phase 7 Items

Do not start these until all six categories are A+:

- Affiliate links.
- Monetized outbound links.
- Affiliate tracking IDs.
- Retailer links.
- Coupon or promo language.
- Product rankings.
- Product recommendations.
- Paid traffic campaigns built around affiliate conversion.

## Minimum Evidence Before Unlock

Before Phase 7 can be discussed as implementation work, the repo must contain:

- A current readiness audit under `docs/reviews/`.
- Passing internal lint output.
- Four-AI review records for the quiz and active content library.
- Live HTTPS verification for `https://dailysupportguide.com/`.
- Public trust pages linked from the live site.
- User approval to unlock Phase 7.
