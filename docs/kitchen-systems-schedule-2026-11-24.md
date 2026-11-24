# Kitchen Systems Day 1-20 publication schedule

Approved by the user on 2026-11-24.

## Execution plan and acceptance criteria

1. Verify existing approval-candidate and reviewer metadata for Day 1-20, without repeating editorial review.
2. Preserve article bodies and reviewer results; record explicit publishing approval.
3. Add an independent scheduled source and persist its published states in the daily workflow.
4. Schedule one article per day from 2026-11-25 through 2026-12-14 using America/New_York dates, retaining the existing workflow hours and 07:00 local publishing gate. In November/December this gate is 20:00 Asia/Taipei; GitHub scheduling may run later.
5. Verify first publication, same-day repeat, next-day publication, delayed-run daily limit, and the full 20-day schedule using isolated fixtures.
6. Deploy the queue and publisher integration together. No manual workflow run is needed.

Day 21-25 and later drafts are outside this authorization. Existing published content is unchanged by scheduling. Existing review records are retained; no new external review was performed.

## Validation

- `node scripts/check_kitchen_schedule.mjs`: passed; 20 sequential daily releases, same-day repeats, pre-07:00 gate, delayed-run daily limit, unchanged legacy articles/queues, and persisted publication status.
- `node scripts/lint_content.mjs`: passed.
- `node scripts/lint_site_gate.mjs`: passed.
- JavaScript syntax checks and `git diff --check`: passed.

| Day | Scheduled date (America/New_York) | Title |
| --- | --- | --- |
| 1 | 2026-11-25 | How to Make Your Kitchen Easier to Start From |
| 2 | 2026-11-26 | The Three-Zone Counter Check Before a Busy Week |
| 3 | 2026-11-27 | A Five-Minute Kitchen Reset That Does Not Need a Plan |
| 4 | 2026-11-28 | What to Notice When the Kitchen Feels Too Full |
| 5 | 2026-11-29 | A Simple Note for What Belongs Within Reach |
| 6 | 2026-11-30 | How to Build a Pantry Shelf You Actually Use |
| 7 | 2026-12-01 | What to Do With Half-Used Pantry Items |
| 8 | 2026-12-02 | The Pantry List That Starts With What Is Already Open |
| 9 | 2026-12-03 | How to Compare Pantry Staples Without Picking a Winner |
| 10 | 2026-12-04 | Pantry Words That Make Food Decisions Feel Bigger Than They Are |
| 11 | 2026-12-05 | A Fridge Layout for Tired Weeknights |
| 12 | 2026-12-06 | How to Stop Losing Small Things in the Fridge |
| 13 | 2026-12-07 | The Leftover Shelf: A Calm Way to See What Is Ready |
| 14 | 2026-12-08 | How to Write a Fridge Note That Helps Tomorrow |
| 15 | 2026-12-09 | Careful Language for Food That Needs to Be Used Soon |
| 16 | 2026-12-10 | A Freezer Map for People Who Forget What Is Inside |
| 17 | 2026-12-11 | The Two-Line Freezer Note |
| 18 | 2026-12-12 | How to Use Frozen Food Without Making Dinner Complicated |
| 19 | 2026-12-13 | Freezer Inventory: What to Record and What to Leave Alone |
| 20 | 2026-12-14 | Why "Backup Food" Is a Better Phrase Than "Emergency Food" |
