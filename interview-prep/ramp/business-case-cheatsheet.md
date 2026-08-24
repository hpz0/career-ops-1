# Ramp business case — day of (Mon 5pm ET)

**Open:** [`business-case-northstar.md`](business-case-northstar.md)  
**Customer:** NorthStar Aviation · Monica (Controller) · NetSuite · already on Ramp Expense  
**Goal:** First PO path live in **60 days** — request → approve → PO → matched invoice

---

## Your wedge (one line)

> You’re already on Ramp for expense. Procurement is the same control story for **parts spend** — one intake, approvals that match how you actually buy, POs in NetSuite, and a trace from request to payment Monica can audit.

---

## Prescriptive hypothesis (don’t ask blank-slate discovery)

| Today | 60-day future |
|-------|----------------|
| Email/Slack + spreadsheets | **Spend Program** for aircraft parts / MRO |
| C-level by $ threshold (ad hoc) | **Approval policy** in Ramp (threshold + need-by date) |
| Manual invoice match | **Bill Pay** + **3-way match** (PO + receipt + invoice) |
| NetSuite = system of record | **PO sync to NetSuite**; Ramp = intake + approvals |

**First step to commit:** Publish one Spend Program (“Aircraft parts / MRO”) + pilot with **one site or one category** in week 2.

---

## Call flow (~45 min)

| Block | Min | Do |
|-------|-----|-----|
| Open | 5 | Rapport, agenda, **60-day outcome** |
| Validate | 12 | 5 discovery Qs — test hypothesis, don’t lecture |
| Prescribe | 15 | Future state + why **3-way** + NetSuite |
| Commit | 10 | **First Spend Program** + owners + date |
| Expand | 5 | Bill Pay depth + **Procurement agents** (audit pack) |
| Close | 3 | Recap, homework, next session |

---

## 5 discovery questions (Monica)

1. Walk me through **one urgent parts request** last month — where did approval slow you down vs the need-by date?
2. When audit asks “show request → approval → PO → payment,” **what’s hardest to produce** today?
3. Who besides you **must approve** parts spend — inventory, ops, C-level thresholds?
4. NetSuite today: PO created there or only after the fact? **Who owns the integration** on your side?
5. For physical parts, do you **confirm receipt** before paying — or pay on invoice only?

---

## Ramp product map (say naturally)

```
Request (Spend Program) → Approvals → PO → Vendor invoice → Bill Pay match → Pay
                              ↑                                    ↑
                         Policies                          2-way (services) /
                                                         3-way (parts) 
```

- **Spend Program** = form + approval workflow (Manage spend → Programs)
- **PO matching** in Bill Pay — toggle auto-import POs; **3-way** for goods
- **NetSuite:** sync POs to accounting (Monica’s world)
- **Procurement agents:** AI **research** (vendor docs, risk summary) — **humans approve**; good for audit trail + faster Legal/Security on new vendors

---

## Part 2 triage (10 min, no prep)

Rank by: **(1) blocks first PO in 60 days (2) Monica’s two pains — speed + audit (3) rework risk**

| Signal | Usually |
|--------|---------|
| No Spend Program / no sponsor | **P0** |
| Approval policy wrong, requests flowing | **P0** |
| NetSuite sync not started | **P1** early |
| Bill Pay not configured | **P1** before match |
| “Customize everything first” | **Push back** — pilot one program |
| Agents / extra programs | **P2** after v1 live |
| One stuck urgent req | **Triage live** — unblock + fix policy after |

Template: *“Priority #N because ___. Next step: ___.”*

---

## Stories (30 sec each)

- **S1 Plenty:** Coupa + policy + NetSuite — same muscle, buyer-side.
- **No-PO-No-Pay:** Designed so right behavior = easiest path (audit + speed).
- **S2 e-invoice:** Upstream quality → less AP firefighting.

---

## Don’t

- Coupa feature dump · pretend Ramp admin tenure · promise 60-day **everything** · skip **first-step commitment**
