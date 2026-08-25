# Ramp business case — NorthStar (rewritten)

**Role:** Procurement Activation Specialist · **IC path**  
**Customer:** NorthStar Aviation · Monica (Controller)  
**Day-of one-pager:** [`business-case-cheatsheet.md`](business-case-cheatsheet.md)  
**Paste into Ramp’s deck:** [`business-case-slides-ramp-deck.md`](business-case-slides-ramp-deck.md)

---

## Direct answers (Harrison’s questions)

### 1. Two-way vs three-way matching — both?

**Configure both, but by type of buy — not both on every request.**

| Buy type | Matching | Why |
|----------|----------|-----|
| **Aircraft parts / physical goods** | **Three-way** | Invoice must match the purchase order **and** someone confirms the parts were received. Stops paying for parts that never showed up. |
| **Services / software / professional fees** (later program) | **Two-way** | Invoice ↔ purchase order is enough. No warehouse receipt. |

This is a **simple control on the program**, not a second project. Ramp turns three-way on in the program’s procurement controls. You’re not overcomplicating — you’re matching control to risk.

**How to say it on the call:**  
> “For parts, I’d turn on three-way matching — invoice has to match what you ordered and what you received. For services later, two-way is enough. Same platform, different rule by what you’re buying.”

Don’t propose “three-way only forever.” Don’t propose “turn on everything.” **Parts program = three-way. Optional services program = two-way.**

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

**Required questions (minimum):**
- What / why (description)  
- Vendor (or “new vendor”)  
- Estimated amount  
- **Need-by date** (required)  
- Ship-to / site  
- Inventory confirmation (or requester attests + inventory step)  
- Attachment: quote if above quote threshold / always for new vendor  

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
