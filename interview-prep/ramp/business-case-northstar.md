# Ramp business case — NorthStar (rewritten)

**Role:** Procurement Activation Specialist · **IC path**  
**Customer:** NorthStar Aviation · Monica (Controller)  
**Day-of one-pager:** [`business-case-cheatsheet.md`](business-case-cheatsheet.md)  
**Paste into Ramp’s deck:** [`business-case-slides-ramp-deck.md`](business-case-slides-ramp-deck.md)

---

## Direct answers (Harrison’s questions)

### 1. Two-way vs three-way — and can both live in one program?

**Plain English:**
- **Two-way match:** Before you pay, the **invoice** has to agree with the **purchase order** (vendor + amount/lines).
- **Three-way match:** Those two **plus** a **receipt** — someone confirms the parts actually arrived.

**Can both be in the same Spend Program?**  
**No — not as “pick 2-way or 3-way per request.”** In Ramp, invoice matching is set in that program’s **procurement controls**. You choose the rule **for that program**. Docs: enable three-way *for a specific Spend Program*. If you flip a program from two-way to three-way, it applies to POs from that program (including existing ones — you can then add receipts).

So:
| Design | When |
|--------|------|
| **One program: Aircraft parts → three-way** | NorthStar v1 (this case) |
| **Second program later: Services → two-way** | When they buy services through Ramp |
| **Mixed parts+services in one program with three-way ON** | Bad — services get stuck waiting for a fake “receipt” |
| **Mixed in one program with three-way OFF** | Bad for parts — can pay without proof of receipt |

**v1 proposal:** one parts program, three-way on. Don’t build a services program on day one unless Monica asks.

**How to say it:**  
> “Matching is a rule on the buying channel, not a per-line toggle. For parts I’ll set **three-way** — invoice must match the purchase order and a receipt. If you later add a services channel, that one can be **two-way**. Mixing both buy types in one channel with one matching rule usually creates pain.”

---

### 1b. Intake: quantity + unit cost — not “estimated” amount

**You’re right.** For a purchase-order path that will be matched, the request should capture **commercial facts**, not a vague estimate.

**Required on the parts request (line level):**
- **Quantity** (and unit of measure if they use ones — each, kit, etc.)
- **Unit cost** (from quote, catalog, or agreed price list)
- **Extended amount** = qty × unit cost (system-calculated if possible)
- **Need-by date**
- **Vendor** (or new-vendor flag)
- **What / why** (part description / aircraft context)
- **Ship-to / site**
- **Quote attached** when required by policy (new vendor / over threshold)

**Why not “estimated cost” as the main field:**  
Finance and AP match invoices to **ordered qty and price**. An estimate that becomes a purchase order creates exceptions, change orders, and audit noise — exactly what Monica doesn’t want.

**When people only have a rough number:** That’s a **pre-request** problem (get a quote first), not a reason to weaken intake. Policy: *no parts request without quantity + unit price from a quote/catalog* (with a thin exception path for true emergencies that still converts to a real PO after).

**How to say it:**  
> “I’d capture **quantity and unit cost** on the request — not a ballpark total — so the purchase order is matchable when the invoice lands.”

---

### 2. What is a “Spend Program”?

**Ramp’s name for:** a **request form + approval path** bundled together and published for employees.

When someone needs to buy, they pick the right program (e.g. “Aircraft parts”), fill the questions, and it routes to the right people. Different programs can have different questions and different approvers.

**On the call with Monica, say:**  
> “Think of it as a **buying channel** — one place to request parts, with the questions and approvals you care about baked in. Ramp calls that a Spend Program.”

Define once, then you can say “program” freely.

---

### 3. Should you invent FP&A @ $5k + quote @ $5k?

**No — don’t invent NorthStar’s dollar thresholds.** The brief already says they use **dollar thresholds for C-level**. Your job as a procurement person is:

1. **Encode what they already do** (so go-live is familiar, not a policy fight).
2. **Propose hygiene rules** that Controllers usually want — then **ask Monica for her numbers**.

**Recommended policy structure to propose (numbers TBD with Monica):**

| Rule | Proposal | Why (procurement judgment) |
|------|----------|----------------------------|
| **Approval tiers** | Mirror **their** existing manager → C-level thresholds | Don’t invent politics; formalize what already happens in email |
| **Need-by date required** | Always | Their #1 pain — make time risk visible to every approver |
| **Inventory / ops confirms need** | Required step before dollars escalate | Already happens informally — put it on the record |
| **Supporting quote** | Required above **their** threshold for non-catalog / non-preferred vendors | Audit + price discipline; **ask Monica for the number** (often $2.5k–$10k mid-market) |
| **Competitive quotes** | Required above a higher tier (or for new vendors over X) | Cost + fraud control; phase in after pilot if needed |
| **No purchase order / no pay** (for in-scope parts) | After pilot is stable | Your Plenty pattern — right path = easiest path |

**How to say it:**  
> “I’m not going to invent your dollar limits. I’ll bring a **policy skeleton** — who approves, when we need a quote, when inventory signs off — and we’ll drop in **your** thresholds so Ramp matches reality. If you don’t have a quote rule today, I’d recommend adding one for non-preferred vendors above a number you pick.”

That’s senior. Inventing “FP&A over $5k” without knowing if they even have FP&A in the approval chain is junior.

---

### 4. Best visuals for Ramp’s branded deck

| Slide | Visual | Why |
|-------|--------|-----|
| 1 | Outcome + agenda | Controller-friendly |
| 2 | **Today → future** (two columns) | Instant contrast |
| 3 | **End-to-end buy path** (simple horizontal flow) | No jargon wall |
| 4 | **Approval swimlane** (roles × dollar bands) | Your expertise on display |
| 5 | **Matching + NetSuite** (parts = 3-way diagram) | Integrations credibility |
| 6 | **60-day plan + this week’s ask** | Commitment |

Swimlanes: **yes** — one slide with rows = Requester / Inventory / Manager / Controller / C-level and columns = Under A / Under B / Over B. Leave dollar labels as **“Your current thresholds”** or blanks to fill live.

Skip: Coupa screenshots, feature grids, AI deep-dives on slide 1–4.

---

### 5. Branded PPT upload

You can’t upload the .ppt here. Use [`business-case-slides-ramp-deck.md`](business-case-slides-ramp-deck.md) — **copy/paste into Ramp’s template**. Keep their branding; replace body text/diagrams.

---

## Your positioning (IC Activation Specialist)

You’re not demoing Ramp. You’re the **buyer-side operator** who designs how NorthStar should buy:

- Intake that captures **need-by** and enough detail for audit  
- Approvals that match **real authority**  
- Matching that fits **physical parts**  
- NetSuite stays system of record for the purchase order  
- Pilot small, then expand  

**Line:** *I’ve been the customer. The goal is make the controlled path the easy path.*

---

## Prescriptive design (v1)

### Buying channel (Spend Program)
**Name:** Aircraft parts / MRO request  
**Matching:** Three-way (this program only)

**Required on the request (line level):**
- What / why (description)  
- Vendor (or “new vendor”)  
- **Quantity** + unit of measure  
- **Unit cost** (from quote / catalog / price list — not a ballpark)  
- Extended amount = qty × unit cost  
- **Need-by date** (required)  
- Ship-to / site  
- Inventory confirmation step  
- Quote attached when policy requires (new vendor / over threshold)  
- GL / coding dimensions as Monica needs for NetSuite  

### Approval path (encode theirs + add hygiene)
1. Requester submits  
2. Inventory (or ops) **confirms need**  
3. Manager (under threshold A)  
4. Controller / Finance (band B — often Monica’s band)  
5. C-level (above their existing exec threshold)  

Every notification shows **need-by date**.

### After approval
- Ramp creates the **purchase order**  
- Sync purchase order into **NetSuite**  
- Vendor invoices → **Bill Pay**  
- **Three-way match** before pay (parts)

### Out of scope for day 1 (say it)
- Rebuilding every NetSuite custom workflow  
- Company-wide every category on day one  
- AI agents as a dependency (nice week 6+)  

---

## Call arc

| Block | Do |
|-------|-----|
| Open | 60-day outcome in plain English |
| Validate | One missed need-by story · how they pull audit trails · who must approve · NetSuite ownership · do they confirm receipt before pay |
| Prescribe | Buying channel + swimlane + three-way for parts |
| Policy ask | “What are your dollar thresholds today? Do you require quotes above a number?” |
| Commit | Draft program this week · approval matrix · NetSuite contact · pilot team · calendar hold |
| Close | Recap + homework |

---

## Part 2 triage (same rubric)

Rank by: blocks first controlled purchase path → Monica’s speed/audit pain → rework risk.  
Template: *“I’d put this #__ because __. Next I’d __.”*
