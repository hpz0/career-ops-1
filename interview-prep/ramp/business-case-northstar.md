# NorthStar business case — closed pack (use this)

Nothing optional below is “nice to have.” This is the full design + delivery kit for the role play + triage.

**Day-of one screen:** [`business-case-cheatsheet.md`](business-case-cheatsheet.md)  
**Deck paste:** [`business-case-slides-ramp-deck.md`](business-case-slides-ramp-deck.md)

---

## What they score

| Must land | How you land it |
|-----------|-----------------|
| Rapport + clear agenda | Open in 90s as a P2P peer |
| Discovery | 10 questions below — steal answers that change the design |
| Prescriptive design | Locked stances — adapt numbers, don’t abandon the spine |
| First-step commitment | Calendar hold before hang-up |
| Bill Pay + AI (brief) | 90 seconds max, after the path is clear |
| Part 2 triage | Rubric + 4 drills memorized |

---

## Locked design (complete)

### Buying channel (Ramp: Spend Program)
**Aircraft parts / MRO only** for v1.

### Intake fields (complete set)
| Field | Required? | Notes |
|-------|-----------|--------|
| Description / what & why | Yes | Part / aircraft context |
| Vendor or new-vendor flag | Yes | |
| **Quantity + UOM** | Yes | |
| **Unit price** | Yes | From quote/catalog/contract — **not estimate** |
| Extended | Calc | qty × unit |
| **Need-by date** | Yes | Visible on every approval |
| Ship-to / site | Yes | |
| **NetSuite coding** | Yes* | Account (GL) + whatever she requires today (dept / class / location). Default what you can on the channel; requester completes the rest. *Ask discovery Q10.* |
| Quote attachment | Conditional | New / non-preferred above **her** threshold |
| Commodity / UNSPSC | No | Unless she already uses it — don’t invent |

Ramp imports NetSuite accounts/dimensions when connected. It does **not** invent coding. Defaults + required fields = your job.

### Approvals
1. Inventory/ops confirms need  
2. Manager → Finance/Controller → C-level using **her** dollar bands  
3. Need-by on every notification  
4. Requester ≠ sole receiver (SoD)

### After approval
- Purchase order created in Ramp → **sync to NetSuite**  
- **Receive in NetSuite** (item receipt) — default; confirm who receives today  
- Invoice → Bill Pay → **three-way match** → pay  

### Matching
| Channel | Rule |
|---------|------|
| Parts (this pilot) | **Three-way** (order + receipt + invoice) |
| Services (later) | **Separate channel, two-way** |
| Same channel, both rules | **No** — Ramp sets matching per channel |

### Exceptions (one sentence each — closed)
**Emergency / AOG-style:** Documented exception path — buy to protect the need-by, convert to a real order with qty/unit price within X business days (agree X with Monica; propose 2). Still no silent email forever.  
**Change order:** After approval, qty / unit price / need-by / vendor change → change order with re-approval (same bands or lighter band she chooses for small variances).  
**Match variance:** Use **her** AP tolerance; don’t invent %. Ask discovery Q5.  
**New vendor:** Vendor intake (W-9 / payment details) before or gated with approval — don’t pay a ghost vendor.

### Out of v1
Company-wide every requester · services channel · AI agents as dependency · commodity taxonomy · rebuilding NetSuite custom workflows

### 60-day success definition (say it)
> One trusted parts path at the pilot: request → approve → order in NetSuite → receipt → matched pay — with an audit trail Monica can pull without hunting Slack.

---

## Discovery (complete — 10 questions)

**Steal and write down:** PO birthplace · receiver · SoD · bands · quote rule · match tolerance · required NS fields · NS owner · pilot

1. Last missed need-by — where did time die (person, thread, ownership)?  
2. Audit pull request→payment — how long, what’s painful?  
3. NetSuite PO **before** the buy or **after** the invoice?  
4. Who enters the **item receipt**? Same as requester?  
5. Price/qty mismatch — what’s tolerance before AP stops?  
6. Dollar bands + who sits in each today?  
7. Preferred vs spot — quote required above any amount today?  
8. On a NetSuite parts PO line today, which fields are **required** (account, dept, location, class, custom)?  
9. Who owns NetSuite admin for POs + item receipts?  
10. Pilot: one site or one parts family — which proves value without catastrophe?

**Mirror before prescribe:**  
> “So today the order is often [before/after], receiving sits with [role], coding needs [fields], and the break is [speed / trail / both].”

---

## Full call script (timed)

### 0:00–1:30 — Open
> Monica, thanks for the time. I’m Harrison — I help customers stand up Ramp for purchasing. You’re already on Ramp for expense, so I’m not here to re-sell Ramp.
>
> You’ve got growing parts complexity, requests in email and Slack, need-by dates in spreadsheets, and manual invoice matching. For a Controller that usually means two problems: **approvals slow down hot parts**, and **audit can’t pull one clean thread from request to payment**.
>
> I’ve stood up procure-to-pay and policy from the buy side at a manufacturing company on NetSuite, so I’m going to treat this as control design — not a product tour.
>
> By the end I want: how you buy parts today, a recommended first version of the path, and a concrete next step with owners. Fair?

### 1:30–12:00 — Discovery
Run Q1–Q10. Don’t lecture. Write answers.

### 12:00–22:00 — Prescribe
> Here’s the design I’d put in front of a Controller in your seat.
>
> **One parts buying channel** — Ramp calls that a Spend Program. Requesters enter **quantity and unit price**, not a ballpark, plus need-by, vendor, ship-to, and the **NetSuite coding fields you already require on a PO line** — we default what we can so people aren’t doing accounting homework. Inventory confirms need on the record. Approvals follow **your** dollar bands. Every approver sees the need-by date.
>
> On approval, Ramp creates the purchase order and syncs it to **NetSuite**. Warehouse receives **in NetSuite**. Invoice hits **Bill Pay** and we **three-way match** — order, receipt, invoice — before pay. That stops paying for parts you never got and gives you the trail you’re missing.
>
> Services stay out of this channel. They don’t need a warehouse receipt; parts do. Mixing under one matching rule creates fake receipts or stuck services. Parts first.
>
> Emergencies exist in aviation. We’ll document an exception path that still converts to a real order with qty and price within a couple of days — not permanent Slack. If price or qty changes after approve, that’s a change order with re-approval — we don’t hope AP cleans up fiction.
>
> First 60 days: one pilot site or parts family. Prove the path. Then expand.

### 22:00–24:00 — Bill Pay + AI (assignment requirement — keep short)
> **Bill Pay** is the AP half of this story — where the invoice is captured, matched, and paid. Without it, you only fixed the front half.
>
> **AI procurement agents** — phase two. They research vendor packets and summarize risk. **They don’t approve.** Useful for audit consistency after the path is live. Not a week-one dependency.

### 24:00–28:00 — Commit
> This week I need: (1) your approval bands written down, (2) 30 minutes with NetSuite PO/receipts owner, (3) named pilot, (4) a working session to review the draft parts channel before we publish. Can we lock that session before we hang up?

### 28:00–30:00 — Close
> Recap: parts channel, qty×price, your bands, your required NetSuite fields, receive in NetSuite, three-way before pay, pilot contained. I’ll send a one-pager. What would make you call this a failure in 60 days — so I design against it?

---

## Objections (closed)

| Pushback | Answer |
|----------|--------|
| We have NetSuite | Keep it. Ramp = intake, approvals, match visibility. NetSuite = books + receiving. |
| Process is unique | Critical controls stay. Undocumented Slack isn’t a control. |
| Everyone day one | Shadow process. Pilot, then expand. |
| Estimates are fine | Change orders exist. Don’t approve fiction. |
| Receive in two systems? | No. Default NetSuite. |
| Need commodity codes | Only if you use them today. I care about required GL/dimensions first. |
| Can’t we 2-way and 3-way in one program? | Not as a per-request mix. Matching is per channel. Parts = three-way. |

---

## Part 2 — Triage (complete drills)

**Say first:**  
> “I rank against the 60-day commitment: first controlled parts path live, Monica’s speed and audit pains, and rework risk.”

**Form:** *“#N because __. Next I’d __ with __.”*

### Drill set (memorize patterns)

**A — “Customize every edge case before go-live.”**  
**#1** — stalls first path.  
Next: park edge cases; encode real bands; publish pilot channel this week; revisit exceptions from live traffic.

**B — “NetSuite admin unavailable / PO sync blocked.”**  
**#1 or #2** — blocks order-in-books story.  
Next: same-day escalate with Monica to name owner + 30-min session; don’t fake dual books; slip expand dates, don’t skip sync plan.

**C — “Execs ignore Ramp approvals; need-bys still missed.”**  
**#2** — direct speed pain after go-live.  
Next: pull 5 requests; need-by vs approve timestamps; cut approver bloat / delegates / escalation SLA; Monica reinforces “Slack isn’t approval.”

**D — “AP paying invoices with no receipt.”**  
**#2** — audit + three-way failure.  
Next: stop-gap hold payments without receipt on pilot vendors; confirm receiving owner + permissions; verify three-way on for parts channel.

**E — “Bill Pay not configured; invoices piling up.”**  
**#3 early / #2 if POs already flowing.**  
Next: 30-min Bill Pay setup (AP role, invoice approvals, PO match); train one AP clerk.

**F — “Legal stuck on new vendor; hot part waiting.”**  
**#2** for the live order; agent/onboarding = #4 for system.  
Next: unblock this buy with manual review Monica owns; add vendor intake (+ later AI research packet) on the channel for next time.

**G — “Inventory won’t leave Slack; won’t confirm in Ramp.”**  
**#2** — breaks audit + need confirm.  
Next: Monica message — no confirm in Ramp, no approve; 15-min enablement for inventory lead; make step required.

**H — “Can we turn on AI agents week one?”**  
**#4**  
Next: after first 10 live requests; agents research, humans approve.

---

## Credibility (max one each)

- Coupa P2P + policy; req cycle 3→1.5 days; 99% on contract  
- NetSuite migration — you speak her system  
- “I’ve been the customer. Controlled path has to be the easy path.”

---

## Pre-call checklist (all closed)

- [ ] Open + prescribe + Bill Pay/AI + commit spoken once cold  
- [ ] Q1–Q10 order memorized  
- [ ] Stances locked (table above)  
- [ ] Emergency + change-order sentences ready  
- [ ] Triage drills A–H once out loud  
- [ ] Six slides pasted into Ramp deck  
- [ ] Notepad columns: PO birth · receiver · bands · NS fields · tolerance · quote · pilot · NS owner  
