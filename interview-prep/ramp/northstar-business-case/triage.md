# Part 2 — Triage (10 min)

**Format:** Rank 4 scenarios 1→4. One–two sentences each: **trigger + next action.**

**Open every time:**
> “I’m ranking by **activation risk inside the 60-day window** — which account is most likely to have **zero trusted usage at day 60** if I wait a week?”

**Form:** *“#N because [trigger]. Next I’d [action] with [owner].”*

---

## Decision tree (quick)

| Signal | Priority |
|--------|----------|
| Day 40+ · program built · **zero requests** | **Highest** |
| **Live request broken** or team **abandoned** back to Slack | **Highest** |
| **Hard blocker** to first request (person refuses, policy fight) | **High** |
| Early dependency you can **work around** (NS admin, sync) | **Medium** |
| Scope creep / multi-site design before usage | **Contain** |
| Already active · expansion (Bill Pay, AI, services) | **Lower** |
| Feature tourism before first Program | **Lowest** |

**Tie-breaker:** *“Which one fails activation if I ignore it until next week?”*

---

## Set A — Suggested rank: **A1 → A4 → A2 → A3**

| # | Scenario | Why | Next step |
|---|----------|-----|-----------|
| **A1** | Day 48 · Program built · **zero requests** · champion quiet | Highest activation risk — work done, no usage; silent champion = dies at day 60 | Same-day outreach to champion **and** Controller backup; offer 20-min “submit first request together”; escalate to CSM/AE in 48h |
| **A4** | Day 25 · design agreed · **Inventory blocking** pilot | Hard stop on launch — every day = zero requests | Controller + Inventory call; re-open visibility vs accountability; pilot without step **or** parallel + SLA — don’t let one role block |
| **A2** | Day 12 · waiting on **NetSuite admin** for PO sync | Real dependency but early — workaround possible | 30-min admin session this week; temp manual PO path so pilot still moves |
| **A3** | Day 70 · path **live and used** · wants services + AI | Already activated — expansion | Schedule services design after health check; don’t jump ahead of at-risk accounts |

**A4 vs A2:** Active human blocker on ready pilot beats early technical dependency — unless A2 is day 45+ with no workaround.

---

## Set B — Suggested rank: **B2 → B1 → B4 → B3**

| # | Scenario | Why | Next step |
|---|----------|-----|-----------|
| **B2** | Day 55 · one success · then **back to Slack** | Regressed — “tried Ramp, didn’t stick” | Diagnose friction (approver, mandate, fields); fix blocker; re-run one request on a call with pilot group |
| **B1** | Day 5 · wants **full multi-category** design before pilot | Scope trap at start of window | Reset: parts path only; book build session for parts; park other categories |
| **B4** | Day 40 · **competitor eval** · AE wants you on call | Deal risk — but sales motion, not multi-day design | One tight call: speed + trail + NetSuite books + one live path in 60 days; defer feature bake-off |
| **B3** | Day 30 · pilot live · 3 requests · AP asks **Bill Pay** | Healthy activation — real expansion | Confirm three-way working; schedule Bill Pay enablement — lower than stalled accounts |

**B4 vs B3:** If AE says deal at risk, B4 moves up. If portfolio has other at-risk activations, B3 waits.

---

## Set C — Suggested rank: **C2 → C1 → C4 → C3**

| # | Scenario | Why | Next step |
|---|----------|-----|-----------|
| **C2** | Day 50 · first request **failed match** — no receipt in NS | Live attempt broke — trust dies | Fix receiving owner + permissions immediately; re-run failed request; document who receives |
| **C1** | Day 20 · **thresholds undefined** · Controller away 2 weeks | Policy blank stalls build | Directional thresholds from backup or last matrix — don’t wait |
| **C4** | Day 35 · **two sites** · design keeps expanding | Scope creep | Freeze **one** pilot site/path; park variants until usage exists |
| **C3** | Day 15 · wants **AI + custom workflows** before first Program | Feature distraction | Redirect: first Program + first request; agents after path is real |

---

## Pattern library (if they mix scenarios)

| Pattern | Rank | Next |
|---------|------|------|
| Customize every edge case before go-live | #1 | Park exceptions; publish pilot this week |
| NS admin / PO sync blocked | #1–2 | Escalate owner + 30-min session; temp path if needed |
| Execs ignore Ramp; need-bys missed | #2 | Timestamp analysis; escalation SLA; Controller mandate |
| AP paying without receipt | #2 | Hold pay on pilot vendors; fix three-way |
| Bill Pay not configured | #2–3 | 30-min setup once POs flow |
| Legal/vendor stuck; hot part waiting | #2 live order | Monica manual unblock; vendor intake on channel |
| Inventory won’t confirm in Ramp | #2 | Controller: no confirm, no approve; 15-min enablement |
| AI agents week one | #4 | After ~10 live requests |
| Duplicate vendor / master mess | #2–3 | Pilot on known vendors; agent or MDM session later |

---

## Delivery tips

1. **Say rank first** — all four numbers in order.  
2. **Then** one sentence per account — don’t redesign their whole process.  
3. Show **judgment under time pressure**, not perfect process design.  
4. Name **who** you pull in (Controller, NS admin, CSM, AE).  
5. If unsure, **state assumption** and rank anyway — hesitation reads worse than a reasoned call.
