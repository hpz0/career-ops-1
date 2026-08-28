# NorthStar business case — prep (read this)

One document. Plain language. Deck: `NorthStar-Aviation-Procurement-Design-Activation.pptx`

**Day-of short version:** [`cheatsheet.md`](cheatsheet.md) (last section below is the same thing)

---

## 1. What is this interview?

Ramp is checking if you can do **Procurement Activation** — help customers actually **use** Ramp for purchasing.

**Part 1 (~15 min)** — Role-play with **Monica**, Controller at **NorthStar Aviation** (fake customer). You present your deck, recommend how **aircraft parts** buying should work, ask good questions, and **book a follow-up** before you hang up.

**Part 2 (~10 min)** — They describe **4 fake client situations**. You **rank** them most urgent → least, and say **what you’d do next** on each. Think: you manage many customers; who will **fail to go live in 60 days** if you ignore them?

You’re not graded on memorizing Ramp buzzwords. You’re graded on **procurement sense**, **listening**, **a clear recommendation**, and **closing with a calendar hold**.

---

## 2. Words that might confuse you

| Term | Plain English |
|------|----------------|
| **AOG** | **Aircraft on ground** — the plane is stuck and needs a part **urgently**. Aviation shops sometimes allow a faster “emergency” buy. You still write it down and turn it into a proper PO soon — not forever in Slack. You don’t need to say “AOG” to Monica unless she does. Say **“emergency buy when a plane is down.”** |
| **SoD** | **Segregation of duties** — the person who **requested** the part shouldn’t be the **only** person who confirms it was received. Basic fraud/control rule. Say: *“The requester shouldn’t be the sole person confirming receipt.”* |
| **Three-way match** | Before paying: **order + receipt + invoice** must line up. Proves you ordered it, got it, and were billed correctly. |
| **Spend Program** | Ramp’s term for a **buying channel** (rules for one type of spend). With Monica, say **“parts program.”** |
| **Need-by date** | Date the part must arrive — should show on every approval. |
| **Qty × unit price** | Quantity times price per unit — **not** a vague total guess. |
| **Pilot** | Small test group, **one real purchase** end-to-end, before company-wide rollout. |
| **Procurement agents** | AI step in the workflow that **researches** (web, contracts) and **summarizes** for humans. Can **route** by risk. **Does not approve.** Add after the basic path works. |
| **60-day window** | Time to get the customer **actually submitting requests** — not just “configured.” Part 2 is about protecting that. |

---

## 3. The story (30 seconds)

NorthStar buys **aircraft parts**. Approvals are **slow** → parts miss **need-by dates**. No clean **paper trail from request to payment** (email, Slack, spreadsheets).

**Your idea:** One **parts path** first. Request → approve → PO in NetSuite → receive → match invoice → pay. **Small pilot.** **One real request this week.** **Put a working session on the calendar** before you leave.

**Best moment:** Ask why **Inventory** is in the approval path — **visibility** (they can’t see stock) vs **accountability** (someone must own the decision)? Design around her answer.

---

## 4. Part 1 — slide-by-slide

| Slide | Your job |
|-------|----------|
| 1 Title | 10 sec — design session, not sales pitch |
| 2 Problems | Speed + audit → **one parts program first**. Ask: priority match? |
| 3 Path | Walk 5 steps in 60 sec → **Inventory question** → fill blanks |
| 4 Extensions | Bill Pay + agents — **90 seconds max** |
| 5 This week | Build → first request together → **lock calendar + owners** |

---

## 5. Part 1 — script (rehearse out loud, ~12–14 min)

### Open (Slide 1)

> Monica — thanks for the time. You’re already on Ramp for expense. I’m here to **design how purchasing should run**, not re-sell Ramp.
>
> Approvals are slow enough that **parts miss need-by dates**, and there’s **no clean trail** from request to payment — email, Slack, spreadsheets.
>
> I’ve stood up purchasing systems from the **buy side** — workflows, policy, NetSuite — so this is control design, not a product tour.
>
> In ~15 minutes: align on a **parts path**, confirm a few choices **with you**, leave with a **concrete next step**. Fair?

### Problems (Slide 2)

> Two problems: **approval speed** (parts miss need-by) and **audit** (no single trail request → payment).
>
> I’d stand up **one aircraft parts program first** — not every category. Prove it, then expand.
>
> **Does that match your priority?**

### Path (Slide 3) — **core**

> Five steps:
> 1. **Request** — qty × price, need-by, vendor, part #, NetSuite fields you require  
> 2. **Approve** — your dollar thresholds; Inventory is TBD  
> 3. **PO** — on approval → NetSuite  
> 4. **Receive** — where you receive today  
> 5. **Match & pay** — order + receipt + invoice before pay  

**Inventory question:**

> I don’t want Inventory in the path just because it’s always been there. Is it for **visibility** (requesters can’t see stock) or **accountability** (named owner so people don’t over-order)?  
> **Which is closer for NorthStar?**

Then ask 3–4 of: thresholds · who receives · required NetSuite fields · pilot group.

> Enough to build — rest in a short working session.

### Extensions (Slide 4) — 90 sec

> **Bill Pay** — pay matched invoices in Ramp; full trail.  
> **Procurement agents** — research + structured report in the workflow; can route by risk; **humans approve**. After the parts path works — new vendors, legal/security. Not week one for known suppliers.

### Close (Slide 5)

> This week: stand up parts program, pilot group, **one real request end-to-end**.
>
> **Before we drop:** Inventory decision · thresholds or owner · receiving owner · pilot · **45–60 min on the calendar**
>
> Can we lock that now?

### Wrap

> **What would make you call this a failure in 60 days?**

---

## 6. Part 1 — day-of cheat sheet

- Flow: Open → Slide 2 → Slide 3 (**Inventory question**) → Slide 4 (90s) → Slide 5 (**calendar**)
- Prescribe: parts program · qty×price · need-by · her bands · PO→NetSuite · receive where she does · three-way · pilot
- Part 2 open line: *“Who hits day 60 with zero live usage if I wait a week?”*
- Don’t: read slides · invent $ thresholds · Coupa tour · skip calendar

---

## 7. If Monica pushes back

| She says | You say |
|----------|---------|
| We have NetSuite | Keep it. Ramp = intake/approvals/match; NetSuite = books + receiving. |
| Our process is unique | Real controls stay. Slack isn’t a control. |
| Everyone day one | Pilot first. |
| Estimates OK | Matching needs qty×price; change orders if things shift. |
| AI now | Agents help later; humans approve; pilot doesn’t depend on them. |

---

## 8. Part 2 — how it works

They give **4 situations**. You:

1. Say your **rank** (1 = most urgent, 4 = least)  
2. One sentence per account: **why + what you’d do next**

**Open with:**
> “I’m ranking by who’s most likely to have **zero live usage at day 60** if I wait a week.”

**What matters most:**
- Built but **nobody using it** (especially late in the 60 days)  
- **Was using it, stopped** (went back to Slack)  
- **Broken live request** (e.g. match failed — no receipt)  
- **Person blocking** launch (Inventory won’t play)  
- **Healthy customer** asking for Bill Pay or AI next → usually **lower** priority  

---

## 9. Part 2 — practice scenarios

### Set A — rank: **A1 → A4 → A2 → A3**

| # | Situation | Why urgent | Next step |
|---|-----------|------------|-----------|
| A1 | Day 48, program built, **zero requests**, champion quiet | About to fail activation | Call champion + Controller today; offer “submit first request together” |
| A4 | Day 25, Inventory **blocking** pilot | Can’t launch | Controller + Inventory; resolve visibility vs accountability; don’t let one person block |
| A2 | Day 12, waiting on NetSuite admin for PO sync | Early; can workaround | 30-min admin session; temp manual PO if needed |
| A3 | Day 70, working well, wants services + AI | Already live — expansion | Schedule later after at-risk accounts |

### Set B — rank: **B2 → B1 → B4 → B3**

| # | Situation | Why | Next step |
|---|-----------|-----|-----------|
| B2 | Day 55, one success then **back to Slack** | Regression | Find friction; fix; re-run one request on a call |
| B1 | Day 5, wants **full design** before any pilot | Scope trap | Reset to parts-only pilot |
| B4 | Day 40, competitor eval, AE wants you | Deal risk | One sharp call; don’t sink a week in features |
| B3 | Day 30, 3 requests in, AP wants Bill Pay | Healthy | Schedule Bill Pay — lower than fires |

### Set C — rank: **C2 → C1 → C4 → C3**

| # | Situation | Why | Next step |
|---|-----------|-----|-----------|
| C2 | Day 50, match **failed** — no receipt | Trust broken | Fix receiving owner; re-run request |
| C1 | Day 20, **thresholds blank**, Controller away 2 wks | Build stalled | Get directional thresholds from backup |
| C4 | Day 35, two sites, design keeps growing | Scope creep | Freeze one pilot site |
| C3 | Day 15, wants AI before first program | Distraction | First program + first request first |

---

## 10. Checklist

**Night before**
- [ ] Read sections 1–4 once  
- [ ] Rehearse section 5 out loud with deck  
- [ ] Rank one practice set in section 9  

**Day of**
- [ ] Section 6 + deck only  
- [ ] Notepad: Inventory decision · bands · receiver · pilot · **session time**

---

## 11. Questions to ask Monica (write answers down)

1. Last missed need-by — where did time get stuck?  
2. Audit request→payment pull — how painful today?  
3. PO before the buy or after the invoice?  
4. Who receives? Same as requester?  
5. Invoice mismatch tolerance?  
6. Approval thresholds — who at what $?  
7. When is a quote required?  
8. Required NetSuite PO line fields?  
9. NetSuite admin for POs + receipts?  
10. Pilot — one site or one parts family?
