# Ramp business case — NorthStar Aviation (Procurement Activation Specialist)

**Round:** Business case · **Part 1** live role play (15 min prep) · **Part 2** triage (10 min, conversational)  
**When:** Monday 5pm ET  
**Day-of:** [`business-case-cheatsheet.md`](business-case-cheatsheet.md)

**Ramp docs (read once):**
- [Procurement Quick Start](https://support.ramp.com/ramp-procurement-quick-start-guide)
- [Procurement agents / policies](https://support.ramp.com/getting-started-with-ramp-procurement-policies)

---

## Assignment recap

| Part | Task |
|------|------|
| **1** | Lead first **Procurement design & activation** call with **NorthStar Aviation**. They use Ramp **Expense** already. Get purchasing on Ramp (requests, approvals, POs, matched invoices) in **60 days**. **Prescriptive** — show up with a future-state hypothesis, adapt on the call. Optional deck ≤6 slides. |
| **2** | **4 scenarios** — rank priority + 1–2 sentence next step each. No screenshare. |

---

## Customer brief (NorthStar)

| | |
|--|--|
| **Company** | ~600 employees · aircraft manufacturer/refurbisher for U.S. carriers |
| **Spend** | Growing vendor + **aircraft parts** complexity |
| **Contact** | **Monica**, Controller · purchasing through **NetSuite** |
| **Today** | Requests via **email/Slack**; need-by dates in **spreadsheets**; no procurement tool; inventory mgr confirms need; **$ thresholds → C-level**; manual invoice match; ACH + weekly checks |
| **Pains** | **(1) Approval speed** — miss need-by dates for parts **(2) Audit** — traceable record request → payment |

**Your read:** Monica = economic buyer + day-to-day owner. Speaks **controls, speed, NetSuite, audit**. Not a procurement org — you’re **designing** how they buy, not optimizing a category desk.

---

## Prescriptive hypothesis (future state)

Show this as a **draft**, not gospel — “Based on what we know, here’s what I’d recommend we validate in the first 30 minutes.”

### Target end-state (60 days)

1. **One primary Spend Program:** “Aircraft parts / MRO purchase request” (add a second program later for services/tools if needed).
2. **Intake captures:** vendor (or new-vendor flag), estimated amount, **need-by date**, ship-to/site, line description, GL/coding dimensions, attachment (quote/spec).
3. **Approval policy:**
   - Inventory / ops **confirms need** (or requester + manager attestation if that’s how they work today).
   - **Threshold routing** mirrors today’s C-level rules (e.g., &lt;$X manager → &lt;$Y VP → C-level).
   - **Need-by date visible** on every approval notification — approvers see **time risk**, not just dollars.
4. **PO:** Auto-create on final approval; **sync to NetSuite** (system of record Monica already trusts).
5. **Bill Pay:** Invoices uploaded/OCR’d; **3-way match** for physical parts (PO + receipt confirmation + invoice). 2-way only for pure services.
6. **Optional week-6+:** **Procurement agent** on the program — e.g., vendor due diligence summary + “audit packet” fields for Monica (missing W-9, COI, contract terms flagged **before** approval, not after payment).

### Why 3-way for NorthStar

They buy **physical aircraft parts**. Ramp docs: 3-way = invoice matches PO **and** goods received. That directly serves Monica’s **audit readiness** and reduces paying before parts show up.

### Phased 60-day plan

| Week | Milestone |
|------|-----------|
| **1** | This call + confirm buyers/approvers + NetSuite admin intro |
| **2** | **Publish v1 Spend Program** + pilot **one category/site** (e.g., one MRO line or one facility) |
| **3** | Tune approval policy from first 10 requests; enable **PO → NetSuite** sync |
| **4** | **Bill Pay** approvals + **PO import/match**; train AP on 3-way |
| **5–6** | Expand who can request; second program only if pilot proves value |
| **7–8** | Vendor onboarding forms for **new** parts vendors; optional **Procurement agent** for high-risk vendors |

**v1 scope guard (say out loud):** “We are not rebuilding every NetSuite workflow in week one. We are getting **one trusted path** from request to matched invoice for parts — then iterate.”

---

## Part 1 — Live call script

### Open (60–90 sec)

> Monica, good to meet you. I’m [Harrison] — I work with customers activating Ramp Procurement. I know you’re already on Ramp for expense, so a lot of the admin and user muscle is already there.
>
> My goal for today is to align on what “good” looks like in the **next 60 days**: your team submitting parts requests in Ramp, approvals that don’t bottleneck need-by dates, POs you can trust in NetSuite, and invoices matched before you pay — so audit isn’t a scavenger hunt through email and Slack.
>
> I’ll share a **recommended first version** based on what we see with manufacturers like you, then I want your corrections. By the end we’ll leave with **one concrete first step** and owners. Sound fair?

### Discovery (validate hypothesis — ~12 min)

Ask, then **listen** — tie answers back to Spend Program fields and approval steps.

1. **Speed pain:** “Pick a recent parts request that missed a need-by date — where did time actually get lost?”  
   → Maps to approval chain, notifications, approver availability.

2. **Audit pain:** “When someone asks for request-to-payment proof, what do you pull today and how long does it take?”  
   → Maps to single system of record, PO linkage, match status.

3. **Approvers:** “Who has to say yes besides you — inventory, ops, exec thresholds?”  
   → Maps to workflow steps; don’t replicate NetSuite chaos — **encode** the real rules.

4. **NetSuite:** “Are POs born in NetSuite today, or after the email thread?”  
   → Maps to sync direction and who owns ERP config.

5. **Receipt:** “Before you pay a parts invoice, do you confirm receipt in the warehouse — formally or informally?”  
   → 3-way vs 2-way.

6. **Pilot scope:** “If we started with **one line of spend or one site** for 30 days, what would be representative but low-risk?”  
   → Gets commitment without boiling the ocean.

**Buyer-side credibility (one beat, if natural):**  
> I’ve stood up P2P from the customer seat — approvals, policy, NetSuite-adjacent process — so I’m not going to pretend email workflows are fine. The goal is to make the **right path the easy path**.

### Prescribe (~12 min)

Walk the **future-state diagram** verbally or on slide 2–4:

> Here’s what I’d recommend for v1: a single **Spend Program** for aircraft parts and MRO. Requesters fill one form — vendor, amount, need-by date, site, description. Inventory or the manager confirms need the way you do today, but **inside Ramp** so it’s on the record.
>
> Dollar thresholds route to the same exec levels you use now — but every approver sees the **need-by date**, not just the dollar amount.
>
> When approved, Ramp creates the **PO** and syncs to **NetSuite**. When the vendor invoices, AP loads it in **Bill Pay**, we **match to the PO**, and for parts we use **three-way match** so payment lines up with what you ordered and received.
>
> That gives you one thread from request to payment — which is what I heard you need for audit — and it attacks the approval delay problem because nothing lives in Slack threads anymore.

### Commit first step (~8 min)

> For the **first step this week**, I’d like to **draft and publish one Spend Program** with you — even a thin version — and run **one real or sample parts request** end-to-end with a small pilot group.
>
> I need from you: (1) the **approval matrix** — names/roles and thresholds, (2) your **NetSuite admin** on a 30-minute sync, (3) one **pilot team** willing to submit the next five requests in Ramp instead of email.
>
> Can we put **30 minutes on the calendar Thursday** to review the draft program together and name those three owners?

Adjust if she pushes back — fallback first step: **approval matrix workshop** only, then program publish week 2.

### Bill Pay + AI agents (~5 min)

**Bill Pay (if not already deep on expense-side pay):**

> Expense got you comfortable with Ramp approvals. **Bill Pay** is where vendor invoices land — OCR, approval, payment. Procurement connects because the **PO is already there**; matching is what stops AP from re-keying and guessing.

**Procurement agents (light touch — don’t oversell AI):**

> Ramp also has **Procurement agents** — think automated **research**, not automated approval. For a new parts vendor, an agent can pull public security/legal signals and summarize attachments **before** your approvers spend an hour hunting. You still approve; the audit trail gets **consistent packets**. We can turn that on **after** the first program is moving — it’s a great phase-two for audit readiness.

### Close

> Recap: **60-day outcome** = parts requests through Ramp, POs in NetSuite, matched invoices. **This week** = draft Spend Program + approval matrix + NetSuite intro. I’ll send a one-pager and the Quick Start links. Anything I missed that would block you?

---

## Optional slide deck (≤6 slides)

| # | Title | Content |
|---|--------|---------|
| 1 | **NorthStar × Ramp Procurement — 60-day plan** | Agenda · Monica + Harrison · Outcome statement |
| 2 | **Today → Future** | Email/Slack/spreadsheet vs single Ramp thread (diagram) |
| 3 | **Recommended Spend Program (v1)** | Aircraft parts/MRO · key intake fields · pilot scope |
| 4 | **Approvals built for speed + audit** | Threshold routing · need-by on every step · inventory confirm |
| 5 | **NetSuite + Bill Pay + 3-way match** | PO sync · invoice match · why 3-way for parts |
| 6 | **Next 60 days + commitment** | Week table · **This week:** publish program + 3 owners + date |

Keep slides **sparse** — you’re evaluated on the **conversation**, not deck polish.

---

## Part 2 — Conversational triage framework

They’ll give **4 scenarios** cold. Use a consistent rubric out loud:

> “I’m ranking against the **60-day commitment**: first real PO path in Ramp, Monica’s **speed** and **audit** pains, and whether fixing it now avoids rework.”

### Ranking criteria (highest first)

1. **Blocks first Spend Program or first approved PO** (no sponsor, wrong approvers, can’t publish program).
2. **Active customer pain / escalation** (missed need-by, audit fire drill, AP paying without match).
3. **Foundation for match + NetSuite** (Bill Pay permissions, PO sync, 3-way config) — must start early even if pain isn’t visible yet.
4. **Expansion / optimization** (second program, agents, vendor onboarding polish) — after v1 traffic.

### Scenario archetypes + model answers

Use these as pattern libraries — **adapt to exact facts they read**.

**A — “Customer wants full custom workflow / every edge case before go-live”**  
**Rank:** Usually #1 or #2 (stall risk).  
**Next step:** Scope **v1 pilot** one program + one site; document edge cases in parking lot; schedule working session for approval matrix only — don’t delay publish.

**B — “NetSuite sync failing / ERP admin unavailable”**  
**Rank:** High if PO is supposed to land in NetSuite within 60 days.  
**Next step:** Same-day email to Monica + NetSuite admin with sync checklist; temporary manual PO export only if Ramp docs allow — parallel path to fix integration.

**C — “Approvals still slow after program live — execs ignore Ramp”**  
**Rank:** High — direct hit on Monica’s speed pain.  
**Next step:** Pull 5 recent requests; compare need-by vs approval timestamps; tighten notifications, delegate rules, or reduce approver count for pilot threshold band.

**D — “New vendor / parts supplier — Legal wants review, request stuck”**  
**Rank:** Medium-high if blocking active PO.  
**Next step:** Unblock **this** request with manual review; add **Procurement agent** + vendor onboarding step on program for next time.

**E — “Bill Pay not set up — invoices piling up, no match”**  
**Rank:** High once POs exist; medium if still pre-PO.  
**Next step:** 30-min Bill Pay setup (permissions, approval chain, PO auto-import); one AP clerk trained on match workflow.

**F — “Inventory won’t confirm need in Ramp — keeps using Slack”**  
**Rank:** High — breaks audit story.  
**Next step:** Align with Monica on **required field/step**; 15-min enablement for inventory lead; Monica message that Slack requests won’t be paid without Ramp record.

### Answer template (1–2 sentences)

> “I’d put **[scenario]** **[#]** because **[60-day / speed / audit reason]**. Next I’d **[specific action + owner]**.”

---

## Product cheat sheet (from Ramp docs)

| Concept | One line |
|---------|----------|
| **Spend Program** | Intake form + approval workflow; publish under Manage spend → Programs |
| **Request flow** | Employee → Request → pick Program → approvals → **auto PO** |
| **PO editing** | Ramp-created POs editable; ERP-synced POs edited in ERP |
| **Bill Pay** | Separate invoice approval chain; set AP permissions under Bill Pay → Settings |
| **2-way match** | Invoice ↔ PO (services/software) |
| **3-way match** | Invoice ↔ PO ↔ receipt (physical goods — **NorthStar parts**) |
| **NetSuite** | PO sync supported; toggle auto-import POs in Bill Pay for matching |
| **Vendor onboarding** | Vendor forms before approve — W-9, payment details |
| **Procurement agents** | Admin-configured AI **research** tasks; output routes via workflow splits; **no auto-approve** |
| **Best practice** | Start simple one program; conditional questions; add programs later |

---

## Your proof points (use sparingly)

| Beat | Source |
|------|--------|
| Stood up P2P + policy + NetSuite context | S1 Plenty |
| Approval redesign cut cycle time 3d → 1.5d | cv.md / S1 |
| No-PO-No-Pay — control without chaos | S1 (confirmed) |
| e-invoice + AP labor | S2 |
| “I’ve been the customer” | Caroline debrief wedge |

**Don’t** lead with Coupa config trivia — lead with **Monica’s outcomes**.

---

## Pre-call checklist (15 min prep slot)

- [ ] Re-read customer brief + this hypothesis  
- [ ] Skim cheatsheet product map  
- [ ] Pick **pilot scope** suggestion (one MRO category / one site)  
- [ ] Prepare **approval matrix** blank template to screen-share or describe  
- [ ] One sentence each: Bill Pay value, agents value  
- [ ] Part 2: practice ranking 4 archetypes aloud once  

---

## After the round

Debrief: what they asked, triage scenarios given, gaps. Update `story-bank.md` if a new anecdote surfaced.
