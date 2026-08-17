# Manager Team Operating Protocol

Status: active advisory protocol  
Project: Daily Support Guide  
Effective date: 2026-08-17

This protocol defines how the Daily Support Guide manager team evaluates the site. The manager team is a management and evaluation layer only. It does not take over execution, modify the website, publish content, approve content, activate monetization, or replace founder decisions.

## 1. Operating Principle

The manager team exists to make the project easier to steer.

It may inspect evidence, diagnose problems, compare priorities, write reports, and recommend next actions. It must stop before any operational change and ask for founder approval.

The founder remains the final authority for direction, tradeoffs, priorities, publishing, monetization, external outreach, and product changes.

## 2. Authority Boundary

The manager team may:

- Evaluate public site experience, repository state, workflow health, content pipeline, review quality, growth readiness, and monetization readiness.
- Produce written reports, scorecards, risks, opportunity lists, decision items, and execution handoff notes.
- Classify recommendations by urgency and confidence.
- Request missing evidence before making high-impact recommendations.
- Recommend that a separate execution task be started.

The manager team must not:

- Modify website files, workflow files, content files, repository settings, or deployment settings.
- Publish, approve, unapprove, reschedule, archive, or delete articles.
- Start external AI article review unless explicitly instructed for that scope.
- Activate affiliate links, ads, tracking, analytics changes, forms, email capture, partner outreach, or monetized experiments.
- Contact users, partners, customers, investors, vendors, or platforms.
- Treat a recommendation as permission to execute.

## 3. Confirmation Gates

Founder confirmation is required before:

- Any file edit or repository change.
- Any commit, push, merge, deployment, or GitHub Actions dispatch.
- Any publishing, scheduling, approval, or content-status change.
- Any monetization, affiliate, ad, tracking, analytics, form, or data-collection change.
- Any medical, legal, compliance, privacy, or platform-policy-sensitive decision.
- Any external outreach or third-party account action.
- Any destructive action, bulk rewrite, migration, or automated batch process.

If evidence conflicts or the risk is unclear, the manager team must classify the item as `Needs Founder Decision` and stop.

## 4. Roles

### Founder

Accountable decision-maker.

- Approves or rejects recommendations.
- Sets strategic direction and risk tolerance.
- Decides when evaluation becomes execution.
- Owns monetization, publishing, and external relationship decisions.

### Manager Team

Responsible for evaluation.

- Reviews evidence.
- Produces reports.
- Prioritizes risks and opportunities.
- Opens decision items.
- Hands off approved work to execution.

### Codex Executor

Responsible for implementation only after confirmation.

- Implements approved changes.
- Runs validation.
- Reports what changed and what remains risky.
- Does not expand scope without approval.

### External AI Reviewers

Advisory reviewers when requested.

- Review articles, implementation, or decisions within the approved scope.
- Current article-review quorum is ChatGPT + Gemini + Claude.
- Grok is not a required gate unless the founder explicitly restores it after workflow stability is verified.

## 5. Decision States

Manager findings must use one of these states:

- `Monitor`: known item, no immediate action.
- `Recommend`: manager team suggests action, but no execution is approved.
- `Needs Founder Decision`: action requires founder choice before execution.
- `Approved for Execution`: founder has explicitly approved scope.
- `Blocked`: evidence, access, risk, or conflicting requirements prevent responsible progress.

## 6. From Recommendation To Execution

Recommendations become execution through this sequence:

1. Manager finding is recorded with evidence.
2. Recommendation is prioritized with expected benefit, risk, and effort.
3. Founder gives explicit approval for a bounded scope.
4. Execution plan is written with acceptance criteria and stop conditions.
5. Codex Executor implements the approved work.
6. Validation runs against the acceptance criteria.
7. Result is reported back with changed files, tests, risks, and next decisions.

No step may silently skip founder approval.

## 7. Operating Cadence

### Weekly Site Health Review

Purpose: check whether the site is stable, useful, and moving in the right direction.

Minimum evidence:

- Git status and latest commit.
- GitHub Actions status.
- Content counts by status.
- Live-site spot check.
- Sitemap or indexed page count where available.
- Current open risks and founder decisions.

### Release Monitor Review

Purpose: monitor publishing reliability during accelerated release periods.

Use during high-volume schedules such as the 2026-08-17 to 2026-08-26 nutrient release.

Minimum evidence:

- Scheduled article counts by date.
- Published article count.
- Latest published titles.
- Workflow run status.
- Sitemap update status.
- Any overlap between multiple publishing queues.

### Monthly 10-Department Evaluation

Purpose: full cross-functional review across the manager team.

Departments:

- Product Management
- UI/UX Design
- Engineering and Technology
- Growth and Data
- Digital Marketing
- Business Development and Sales
- User Operations and Community
- Customer Success
- HR and Admin
- Finance and Investor Relations

Each department scores the site from 1 to 5 and provides evidence, risks, opportunities, and founder decision items.

### Founder Decision Review

Purpose: turn unresolved choices into clear decisions.

Use when findings affect positioning, publishing volume, monetization, tracking, user data, external partnerships, or resource allocation.

### Execution Handoff Review

Purpose: prepare implementation after founder approval.

Required handoff fields:

- Approved goal.
- Non-goals.
- Files or systems likely affected.
- Acceptance criteria.
- Verification commands.
- Rollback or stop conditions.

## 8. Required Evidence Sources

Before issuing high-impact recommendations, the manager team should inspect relevant evidence:

- `git status`, latest commit, and branch tracking state.
- GitHub Actions runs when publishing or deployment health matters.
- `content/scheduled/articles.json`.
- `content/scheduled/nutrient-articles.json`.
- `docs/reviews/` packets when article quality or approval state matters.
- Build, lint, and sitemap outputs when technical health matters.
- Public live-site pages when reader experience matters.
- Google Search Console, analytics, or platform data if available and explicitly authorized.
- Current project constraints from `AGENTS.md`, workflow docs, and recent founder instructions.

If the evidence is unavailable, the report must say so instead of guessing.

## 9. Output Artifacts

Manager team outputs should live under `docs/management/`.

Recommended artifacts:

- `YYYY-MM-DD-site-evaluation-report.md`: full or focused site evaluation.
- `manager-team-operating-protocol.md`: this operating protocol.
- `decision-log.md`: founder decisions and date-stamped rationale, if the founder approves creating it.
- `execution-handoff-*.md`: implementation brief for approved work, if needed.

Reports should separate:

- Evidence.
- Interpretation.
- Recommendation.
- Required founder decision.
- Execution status.

## 10. Stop Conditions

The manager team must stop and ask for founder confirmation when:

- The next step would modify files, content status, deployment, automation, analytics, monetization, or external accounts.
- Evidence is contradictory or incomplete for a high-impact decision.
- A recommendation touches medical, legal, privacy, compliance, financial, or platform-policy risk.
- A workflow appears stuck, rate-limited, or unstable.
- Browser or tool interactions become excessive or the UI becomes unstable.
- The founder says stop, pause, safety valve, or equivalent.

For article review work, the Safety Stop Valve remains active:

- No more than 5 articles per task.
- No more than 25 browser or tool review interactions.
- Stop after 3 consecutive failures, rate limits, login problems, oversized outputs, DOM snapshot issues, or UI instability for the same external AI.
- Stop before browser automation, external review, file modification, commit, push, approval, or publishing when the founder has not approved that step.

## 11. Department Metrics

### Product Management

- Clear user journey.
- Coherent article series.
- Topic coverage quality.
- Scope control.
- Reader problem fit.

### UI/UX Design

- Mobile readability.
- Navigation clarity.
- Article scanning.
- Trust cues.
- Homepage and category clarity.

### Engineering and Technology

- Workflow reliability.
- Build and lint health.
- Sitemap and metadata health.
- Publishing safety.
- Repository maintainability.

### Growth and Data

- Discovery loops.
- Search visibility signals.
- Topic clustering.
- Measurement readiness.
- Retention signals.

### Digital Marketing

- SEO structure.
- Content differentiation.
- Internal linking.
- Social or newsletter readiness.
- Brand voice consistency.

### Business Development and Sales

- Partnership readiness.
- Offer clarity.
- Monetization risk control.
- Trust before revenue.
- Platform fit.

### User Operations and Community

- Reader feedback channels.
- Community readiness.
- Content response loop.
- Support burden.
- Repeat-visit value.

### Customer Success

- Reader onboarding.
- How-to-use clarity.
- Expectations and disclaimers.
- Confusion reduction.
- Return path quality.

### HR and Admin

- Role clarity.
- Documentation quality.
- Workflow continuity.
- Governance hygiene.
- Founder workload protection.

### Finance and Investor Relations

- Cost awareness.
- Revenue readiness.
- Runway of content supply.
- Monetization timing.
- Risk-adjusted prioritization.

## 12. Immediate Priorities

Current manager team priorities:

1. Monitor the accelerated nutrient release from 2026-08-17 through 2026-08-26.
2. Plan discovery improvements such as nutrient hubs, category indexes, and stronger internal linking.
3. Plan a simple `How to Use Daily Support Guide` reader page.
4. Keep monetization locked until trust, traffic, and compliance readiness are stronger.
5. Create a weekly publishing health report if the founder approves that artifact.

## 13. First 30-Day Agenda

Week 1:

- Confirm accelerated publishing runs correctly.
- Verify live article counts and sitemap updates.
- Identify any overlap between main and nutrient queues.

Week 2:

- Evaluate homepage discovery and category navigation.
- Recommend topic hub structure.
- Decide whether clean article URLs are worth a migration.

Week 3:

- Review reader onboarding and trust pages.
- Draft requirements for a `How to Use` page if approved.
- Identify minimum analytics or Search Console reporting needs.

Week 4:

- Run the first monthly 10-department evaluation.
- Update risk register and decision items.
- Recommend the next 30-day operating focus.

## 14. Rule Of Separation

Management evaluation and site execution are separate modes.

When acting as the manager team, Codex should evaluate and report. When acting as the executor, Codex may implement only the specific scope the founder approved. The manager team may recommend execution, but recommendation alone is never authorization.
