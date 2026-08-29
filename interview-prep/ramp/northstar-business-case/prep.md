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
| **AOG** | **Aircraft on ground** — plane down, part needed now. See **emergency / after-the-fact PO** below. Say “emergency buy when a plane is down” with Monica unless she says AOG. |
| **SoD** | **Segregation of duties** — see **below** (not “two people must receive”). |
| **Three-way match** | Before paying: **order + receipt + invoice** must line up. Proves you ordered it, got it, and were billed correctly. |
| **Spend Program** | Ramp’s term for a **buying channel** (rules for one type of spend). With Monica, say **“parts program.”** |
| **Need-by date** | Date the part must arrive — should show on every approval. |
| **Qty × unit price** | Quantity times price per unit — **not** a vague total guess. |
| **Pilot** | Small test group, **one real purchase** end-to-end, before company-wide rollout. |
| **Procurement agents** | AI step in the workflow that **researches** (web, contracts) and **summarizes** for humans. Can **route** by risk. **Does not approve.** Add after the basic path works. |
| **60-day window** | Time to get the customer **actually submitting requests** — not just “configured.” Part 2 is about protecting that. |

### SoD and receiving — what it actually means

**Not:** two people must both receive the same shipment (that’s a rare, extra-tight control for high-value stuff).

**Yes:** someone **other than the requester** should confirm receipt — usually **one** designated receiver (warehouse, central receiving, inventory ops).

**Why:** If the same person can order and say “we got it,” they can approve payment for goods that never arrived. Three-way match only works if receipt is honest.

**How systems enforce it (not honor system):**

| Layer | What happens |
|-------|----------------|
| **Permissions** | Requester can submit reqs; only users with **receiving** rights post an item receipt (NetSuite) or complete a receive step (Ramp, if receive lives there). |
| **Workflow** | Receipt/confirm step assigned to **ops/warehouse role**, not the person who submitted the request. |
| **Match** | AP / Bill Pay matches PO ↔ **receipt record** ↔ invoice. No receipt qty → match fails or flags (when three-way is on). |

**NorthStar default:** PO in Ramp → sync NetSuite → **item receipt in NetSuite** by whoever receives today — discover **who** that is; don’t let the requester be the **only** receiver if you can avoid it.

**Small team reality (fine to say in the interview):**  
> “Ideal is requester isn’t the receiver. If one person wears both hats today, we document it, keep match on, and add a compensating control — manager review or central receive when volume justifies it.”

**One line for Monica:**  
> “Who receives today — and can we keep the requester from being the **only** person who confirms receipt in the system? That’s what protects three-way match.”

### Emergency / AOG — what you’re actually proposing

**Not proposing:** “Just buy with no PO and hope AP figures it out.” Slack forever is the failure mode.

**Two clean patterns (pick with Monica; both are real):**

| Pattern | When | What happens |
|---------|------|----------------|
| **A. Fast PO first** | You can open a PO in minutes | Expedited request → short approval (or pre-approved emergency band) → PO → buy → receive → match → pay. Same path, faster SLA. Prefer this when the system can keep up. |
| **B. After-the-fact PO** | Part must ship *now*; waiting for full approval loses the plane | Buy to protect need-by → **same day / within X business days** (propose **2**) create the PO with real qty × unit price → receive → match → pay. Documented exception, not an open hole. |

**Pattern B is still a PO** — just **late**. The invoice should still match a PO + receipt. You’re not inventing “pay with no PO.”

### How does “fast PO” actually work? (Pattern A)

You’re not inventing a mystery path. You’re **compressing the same parts channel**. Common ways:

| Design | How it works | Pros / cons |
|--------|----------------|-------------|
| **1. Same program, emergency branch** | One Parts Program. Field/flag: **Emergency**. Approval policy **splits**: if Emergency = yes → short chain (e.g. Inventory notify + Controller or Ops lead only); if no → normal thresholds. | Usually best. One channel, one matching rule, audit can filter on the flag. |
| **2. Same program, higher parallel / SLA** | Same approvers as normal, but **parallel** where safe + hard SLA (e.g. 30–60 min) + backup if silent. | Less “short”; good when legal still wants the same people. |
| **3. Separate Emergency Parts Program** | Second Spend Program with fewer approvers, same three-way / NetSuite sync. | Clearer for ops; **two** programs to maintain. Only if emergencies are frequent and the main path is too heavy. |

**Default recommendation for Monica:** **#1 — same Parts Program + Emergency flag + shorter approval branch.**  
Not a different product. Not “skip PO.” Same request → PO → receive → match; fewer people in the way when the flag is on.

**Who’s on the short chain?** Discover with her — often Controller (or Ops) + maybe Inventory notify, **not** full C-level ladder for every AOG. Pre-approve a dollar band for emergencies if she has one.

**Pattern B (buy first)** still uses the **same program**: after-the-fact request tagged Emergency / after-the-fact → short or retrospective approval → PO with qty×price → receive → match. The flag tells AP/receiving this PO was late.

**Don’t:** build a third “services + emergency + AI” maze on day one. Encode flag + short branch in the working session if AOG is real for them.

**Flag on the request — yes, that’s wise.** If you use after-the-fact *or* the short branch:

- Field or tag: **Emergency / after-the-fact PO** (or “PO after buy”)
- Why it helps:
  - Approvers see *why* controls were compressed  
  - Receiving / AP know this isn’t a normal open order — **confirm receipt and pay against this PO**, don’t treat it as maverick  
  - Audit can pull “emergency” volume later  
  - Activation can report how often the exception fires (if it’s constant, fix the main path)

Also capture: who authorized the emergency, need-by, vendor, qty × price, when the formal PO will be created.

**Receiving / match on after-the-fact:**  
Once the PO exists, treat it like a normal three-way: **receive against that PO**, then match invoice. The flag doesn’t mean “skip receive” — it means “this PO was born late; don’t lose the receipt and don’t pay as non-PO.”

**What to say if Monica asks:**  
> “Emergencies happen. Prefer a fast PO when we can. If the part has to move first, we still convert to a real PO with qty and price within a couple of days — tagged as after-the-fact so receiving and AP know to close it cleanly. Not permanent Slack.”

**Pilot note:** Don’t build the whole exception engine day one. Agree the rule verbally; encode the flag + SLA in the working session if emergencies are common.

---

## 3. The story (30 seconds)

NorthStar buys **aircraft parts**. Approvals are **slow** → parts miss **need-by dates**. No clean **paper trail from request to payment** (email, Slack, spreadsheets).

**Your idea:** One **parts path** first. Request → approve → PO in NetSuite → receive → match invoice → pay. **Small pilot.** **One real request this week.** **Put a working session on the calendar** before you leave.

**Best moment:** Ask why **Inventory** is in the approval path — **visibility** (they can’t see stock) vs **accountability** (someone must own the decision)? Design around her answer.

---

## 4. How to use the deck (tool, not teleprompter)

Part 1 is **~12–15 minutes total** — not 30. Most of that is **Slide 3** (talk + listen).

| Slide | Time | What you do |
|-------|------|-------------|
| 1 Title | ~20 sec | Hello → advance |
| 2 Problems | ~2 min | Point at the two cards + “parts first” bar → **ask if that matches** |
| 3 Path | **~7–8 min** | Walk the five boxes once → **stop** → Inventory question → **write her answers** on the blanks |
| 4 Extensions | ~1 min | Name Bill Pay + agents, path first → advance |
| 5 This week | ~2–3 min | Point at build steps + **Lock** list → get names + calendar time |

**Rules**
- Don’t read the slide. Point at it and talk.
- Don’t recite stage directions (“Run Q1–Q10”). Those are for *you*.
- Don’t pitch meta-lines about “not selling Ramp” / “not a product tour” — just *do* the design session.
- Need-by visible to approvers is already on the path; you don’t need a special line about it unless she asks.

---

## 5. Part 1 — talk track (rehearse once, then leave it)

Prompts only. Say it in your own words. Times assume **~15 min**.

### Slide 1 (~20 sec)

Thanks · Harrison · want to lock how **aircraft parts** purchasing should run and leave with a next step.

### Slide 2 (~2 min)

**Point:** approval speed / need-by misses · audit trail mess (email, Slack, sheets).

**Recommend:** one **parts program** first — request through payment — then expand.

**Ask:** Does that match what hurts most, or is something else first?

*(If she redirects, follow her — don’t force the slide.)*

### Slide 3 (~7–8 min) — this is the interview

**Walk once (60–90 sec), pointing at each box:**

1. Request — qty × price, need-by, vendor, part #  
2. Approve — **your** dollar thresholds; Inventory TBD  
3. PO — on approval → NetSuite  
4. Receive — NetSuite or Ramp (we’ll confirm)  
5. Match & pay — order + receipt + invoice before pay  

**Then stop. Don’t keep talking.** Go to **Confirm with me**.

**Must ask (the wow):**  
Inventory in the path — **visibility** (can’t see stock), **accountability** (named owner), or **both**? Which is it for you?

*(Adapt the path from her answer. Write on the blank.)*

**Then fill the other blanks with her — pick what she hasn’t already answered:**
- Thresholds: who / at what $?  
- Receiving: where + who? (Requester shouldn’t be the only person who confirms receipt if you can avoid it.)  
- Anything else required on the request beyond qty / price / need-by?

**Exit Slide 3:** Enough for a first build — we’ll finish the rest in a working session.

### Slide 4 (~1 min)

**Bill Pay** — once POs are flowing: match + pay; trail closes.  
**Agents** — later: research + report in the workflow; humans still approve; good for new vendors / reviews — not week-one for known parts suppliers.

### Slide 5 (~2–3 min)

**This week:** stand up the Aircraft Parts Program → small pilot → **one real request** end-to-end → review what broke.

**Point at Lock before we leave — get concrete answers:**
- Inventory decision for the pilot  
- Thresholds (or who has them)  
- Receiving owner  
- Pilot group + **working session on the calendar** (45–60 min)

If she won’t lock time: *What’s blocking a pilot request in the next two weeks?*

**Optional close (10 sec):** *What would make this a failure in 60 days?* — only if you have time.

---

## 6. Part 1 — day-of cheat sheet

- **~15 min.** Deck = whiteboard. Point → ask → write.
- Bulk of time = **Slide 3** (Inventory + blanks).
- Slide 4 = ~60 seconds. Slide 5 = get **calendar**.
- Part 2: *“Who hits day 60 with zero live usage if I wait a week?”*
- Don’t: read slides · invent $ · Coupa tour · skip calendar · perform “I’m not selling”

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
- [ ] Read §1–3 once  
- [ ] Walk §4–5 with the deck open once (~15 min clock) — point, don’t read  
- [ ] Rank one practice set in §9  

**Day of**
- [ ] [`cheatsheet.md`](cheatsheet.md) + deck only  
- [ ] Notepad: Inventory · bands · receiver · pilot · **session time**

---

## 11. Questions to ask Monica (if time / she opens the door)

These are **optional** — Slide 3 blanks already cover the must-haves. Don’t run a 10-question interrogation.

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
