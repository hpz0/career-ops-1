# NorthStar business case — expert pack

**You are not demoing Ramp.** You are a procurement operator designing a control environment for a Controller who already lives in NetSuite.

**Role play:** First design/activation call · Monica, Controller · ~600-person aircraft OEM/refurb · Ramp Expense live · purchasing today = email/Slack + spreadsheets + NetSuite + manual match  

**Success in their brief:** rapport · discovery · commit a **first step** · expand Bill Pay + AI policies thoughtfully · optional ≤6 slides  

**Day-of:** [`business-case-cheatsheet.md`](business-case-cheatsheet.md) · **Deck paste:** [`business-case-slides-ramp-deck.md`](business-case-slides-ramp-deck.md)

---

## How Controllers score you

| They hear | They think |
|-----------|------------|
| Feature tour / “Spend Program” unexplained | Vendor |
| “Estimated amount” on a PO path | Amateur |
| Invented $5k FP&A rule | Don’t know our org |
| Three-way + two-way mixed in one channel | Don’t understand matching |
| Promise full company go-live in 60 days | Untrustworthy |
| **Encode our thresholds, qty×price, receive before pay, NetSuite stays books, pilot one site, need-by on every approval** | Peer |

**Your job:** Design the **procure-to-pay path** — request → approve → purchase order → receive → match → pay — so Monica gets **faster approvals** and an **audit packet she can pull**, without breaking NetSuite.

---

## Plain language (say once, then use freely)

| Word | Meaning |
|------|---------|
| **Buying channel** (Ramp: Spend Program) | The published request form + approval path for one type of buy |
| **Purchase order** | Binding record of what was approved to buy (qty, price, vendor, terms) |
| **Receipt / item receipt** | Proof goods arrived (qty received against the order) |
| **Two-way match** | Invoice must agree with the purchase order before pay |
| **Three-way match** | Invoice + purchase order + **receipt** must agree before pay |
| **Bill Pay** | Where invoices are captured, matched, approved, and paid in Ramp |

---

## Non-negotiable design decisions (take a stance)

### 1. Intake is line-level commercial truth — not estimates
Aircraft parts → purchase order → match. The request must carry:
- **Quantity** + unit of measure  
- **Unit price** (quote / catalog / contract price — not a gut “estimate”)  
- Extended = qty × unit price  
- Need-by date  
- Vendor (or new-vendor flag)  
- Ship-to / site  
- Charge coding Monica needs for NetSuite  
- Quote attachment when policy requires  

If they only have a rough number: **get a quote before the request**, or use a thin emergency path that still converts to a real order with qty/price before payment.

### 2. Matching: three-way on the parts channel — not both rules in one channel
Ramp sets matching **per buying channel** (procurement controls).  
- **Parts channel = three-way.** You do not pay for parts that never showed up.  
- **Services later = separate channel, two-way.** No warehouse receipt for a retainer.  
- Mixing parts + services under one three-way rule makes services stall. Mixing under two-way makes parts leak.

### 3. Where receiving happens (NetSuite customer — ask, then recommend)
They already buy through NetSuite. Controllers usually want **one receiving system of record**.

**Recommend (default hypothesis):**  
Purchase order created in Ramp after approval → **sync to NetSuite** → **receive in NetSuite** (item receipts) → invoice in Bill Pay **three-way matches** using NetSuite receipts.  

**Fallback:** Receive in Ramp if NetSuite receiving is broken/unusable — still three-way, but Monica may fight you on dual systems.

**Ask before locking:** *“Today, when a parts order hits NetSuite, who does the item receipt — warehouse, inventory, or AP?”*

### 4. Segregation of duties
Requester **must not** be the only receiver on their own order. Inventory/warehouse receives. AP matches and pays. Monica will respect you naming this.

### 5. Approvals: encode theirs + add hygiene — don’t invent org charts
Bring a **skeleton**, fill **their** dollar bands live:
1. Inventory / ops **confirms demand** (they already do this informally)  
2. Manager (their band)  
3. Controller / Finance (their band — often Monica)  
4. C-level (their existing exec threshold)  

**Always on:** need-by date visible to every approver.  
**Propose, don’t dictate:** supporting quote for non-preferred / new vendors above a threshold *she* sets.  
**After pilot:** no purchase order → no pay for in-scope parts.

### 6. Scope discipline (60 days)
Win = **one trusted path for parts at one pilot site (or one commodity)** — not every category, not AI agents as a dependency, not rewriting NetSuite.

---

## Recommended v1 (what you put on the table)

**Buying channel:** Aircraft parts / MRO  
**Matching:** Three-way  
**Receiving:** NetSuite item receipts (confirm with Monica)  
**Pilot:** One site **or** one parts family (e.g. consumables / AOG-adjacent — pick with her)  
**Out of v1:** Services channel, full vendor marketplace, AI agents as must-have, company-wide every requester day one  

**Policy skeleton (numbers = hers):**

| Control | Stance |
|---------|--------|
| Qty + unit price required | Yes — always for this channel |
| Need-by date required | Yes — always |
| Inventory confirms need | Yes — before dollar escalation |
| Quote | Required for new / non-preferred vendors above her threshold |
| Competitive quotes | Phase 2 unless she already requires them |
| Match | Three-way; discuss **price/qty tolerance** with AP (e.g. small variance auto-pass — get their current practice) |
| Emergency buy | Documented exception + convert to order within X days — don’t pretend emergencies don’t exist |
| Change orders | Price/qty/date change after approval = re-approval path |

---

## Discovery (Controller-grade) — order matters

You have ~10–12 minutes. **Diagnose before you prescribe.** Write answers on a notepad; your design changes with them.

### Block A — Prove you understand the pain (2 questions)
1. **Missed need-by:** “Walk me through the last parts buy that missed a need-by date. Was time lost waiting on a person, hunting the thread, or unclear who owned the approval?”  
2. **Audit pull:** “If internal audit said ‘show me request → approval → order → receipt → payment for this vendor last quarter,’ how long does that take today, and what’s the painful part?”

### Block B — Map the real control environment (these are the money questions)
3. **Where is the purchase order born today?** “Is the NetSuite purchase order created **before** the buy, or after the fact when AP gets an invoice?”  
   - *Before* → you’re formalizing. *After* → you’re fixing a control gap (big win for Monica).  
4. **Receiving:** “Who enters the item receipt in NetSuite — warehouse, inventory, or the person who requested?”  
   - Listen for SoD breaks.  
5. **Match practice:** “When invoice price or qty doesn’t match the order, what’s your tolerance before AP stops payment?”  
6. **Authority:** “Besides you, who must approve parts spend — and what are the dollar cutoffs today? I want Ramp to match reality, not invent a new org chart.”  
7. **Vendor / quote:** “How much of parts spend is preferred/contract vendors vs spot buys? Do you require a quote today above any amount?”

### Block C — Integration reality (1–2 questions)
8. **NetSuite owner:** “Who owns the NetSuite admin relationship for purchase orders and item receipts on your side?”  
9. **Pilot:** “If we started with one site or one parts category for 30 days, which would be real enough to prove value but contained enough that a miss isn’t catastrophic?”

**Stop discovery when you can fill:** PO born where · who receives · dollar bands · quote rule · pilot slice · NetSuite owner.

---

## Live call script (use this spine)

### Open (~90 seconds)
> Monica, thanks for the time. I’m Harrison — I help customers stand up Ramp for purchasing. I know you’re already on Ramp for expense, so the goal today isn’t to re-sell you on Ramp.
>
> You’ve got growing parts and vendor complexity, requests living in email and Slack, need-by dates in spreadsheets, and you’re matching invoices by hand. That usually means two problems for a Controller: **approvals are slow when a part is hot**, and **audit can’t see one clean thread from request to payment**.
>
> I’ve lived that from the buy side — I stood up procure-to-pay and policy at a manufacturing company on NetSuite — so I’m going to treat this like a control design conversation, not a software tour.
>
> End of this call I want three things: (1) a clear picture of how you buy parts today, (2) a recommended first version of the buying path, and (3) a concrete next step with owners. Fair?

### Discovery (~10–12 min)
Run Block A → B → C. Mirror back what you heard in one sentence before prescribing:
> “So today the purchase order is often [before/after], receiving sits with [role], and the break is [approvals / trail / both].”

### Prescribe (~10–12 min)
> Here’s the design I’d put in front of a Controller in your seat.
>
> **One buying channel for aircraft parts** — Ramp calls that a Spend Program. Requesters enter **quantity and unit price**, not a ballpark total, plus need-by date, vendor, and ship-to. Inventory confirms the need the way you already do — but on the record. Approvals follow **your** dollar bands. Every approver sees the need-by date, not just the dollars.
>
> When it’s approved, Ramp creates the purchase order and we sync it to **NetSuite** so your books stay authoritative. Warehouse receives **in NetSuite**. When the vendor invoices, Bill Pay does a **three-way match** — invoice, order, and receipt — before you pay. That directly attacks paying for parts you never got, and it gives you the audit trail you’re missing.
>
> I’m **not** putting services in that same channel. Services don’t need a warehouse receipt; parts do. Mixing them under one matching rule creates either fake receipts or unpaid services. Parts first. Services later if you want them.
>
> For the first 60 days I’m not boiling the ocean. One pilot site or commodity, prove the path, then expand.

**If she asks about two-way:**  
> “Two-way is invoice against order only — fine for services. For parts I’d be doing you a disservice recommending two-way as the default.”

**If she pushes full customization first:**  
> “Edge cases get a parking lot. Controllers who wait for perfect policy never get a clean trail. We encode your real thresholds, go live on a pilot, and tighten from exceptions.”

### Policy / numbers (~3 min)
> I won’t invent your dollar limits or pretend FP&A sits in a seat they don’t. Tell me today’s bands and I’ll build the swimlane to match. Separately, I’d add a quote rule for new or non-preferred vendors above a number you choose — that’s standard hygiene, not a Ramp feature.

### Expand lightly — Bill Pay + AI (~2–3 min)
> Bill Pay is where the invoice lands and matching happens — that’s the AP half of the control story, not a side quest.  
> AI procurement agents — later. They’re research assistants for vendor packets (docs, risk summaries). **They don’t approve.** Useful for audit consistency after the path is live. Not a week-one dependency.

### Commit first step (~5 min) — do not leave without this
> This week I need four things:  
> (1) your approval bands written down,  
> (2) 30 minutes with whoever owns NetSuite purchase orders and item receipts,  
> (3) a named pilot — site or parts family,  
> (4) a working session to review the draft parts channel before we publish.  
>
> Can we lock that working session before we hang up?

**Fallback if she’s cautious:** approval-matrix workshop only this week — still a win if dated.

### Close (~60 sec)
> Recap: parts channel with qty and unit price, your approval bands, NetSuite for the order and receipt, three-way before pay, pilot contained. I’ll send a one-pager. What would make you say this failed in 60 days — so I design against that?

---

## Objection handling (short)

| Pushback | Answer |
|----------|--------|
| “We already have NetSuite.” | “Keep it. Ramp fixes intake, approvals, and match visibility. NetSuite stays the books.” |
| “Our process is unique.” | “Critical controls stay. Habits and exceptions get challenged. Unique ≠ undocumented Slack.” |
| “Everyone must be live day one.” | “That’s how you get shadow process. Pilot proves the control, then expand.” |
| “Estimates are fine — prices change.” | “Then we use change orders. We don’t approve fiction and hope AP sorts it out.” |
| “Receiving in two systems?” | “I don’t want that either. Default: receive where you already receive — NetSuite.” |

---

## Part 2 — Triage (10 min)

**Rubric (say it):**  
> “I rank against the 60-day commitment: first controlled parts path live, Monica’s speed and audit pains, and whether waiting creates rework.”

| Priority | Pattern |
|----------|---------|
| **1** | Blocks publishing the parts channel or first approved order (no sponsor, wrong approvers, can’t get NetSuite admin) |
| **2** | Active speed/audit fire (missed need-by, AP paying without receipt, audit request) |
| **3** | Foundation work that must start early (Bill Pay permissions, PO sync, receiving permissions) even if quiet |
| **4** | Expansion (second channel, AI agents, nice-to-have fields) |

**Answer form:** *“#N because ___. Next I’d ___ with ___.”*

---

## Credibility beats (use once each, max)

- Stood up Coupa P2P + procurement policy; cut req cycle 3 days → 1.5; 99% on contract (Plenty).  
- NetSuite migration experience — you speak Monica’s system.  
- “I’ve been the customer. Controlled path has to be the easy path or people route around it.”

No Coupa click-path flex. No fake Ramp admin tenure.

---

## 15-minute prep checklist

- [ ] Open + prescribe + commit out loud once  
- [ ] Memorize 9 discovery questions (order)  
- [ ] Stance locked: qty×price · parts=3-way · receive in NetSuite · separate services later · their dollar bands  
- [ ] Slides pasted into Ramp deck (or go slide-light — conversation wins)  
- [ ] Notepad ready for: PO birthplace · receiver · bands · pilot · NetSuite owner  
