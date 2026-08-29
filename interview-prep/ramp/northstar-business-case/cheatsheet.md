# Day-of live walkthrough — NorthStar (~15 min Part 1)

**Deck:** [`NorthStar-Aviation-Procurement-Design-Activation-Final.pdf`](NorthStar-Aviation-Procurement-Design-Activation-Final.pdf) (3 slides)  
**Full prep:** [`prep.md`](prep.md)

**Posture:** Homework → hypothesis → pressure-test. **Thesis:** friction down, control stays. **Parts first.** **Goal:** purchasing live in Ramp within 60 days.

**Rules:** Point at deck · don’t read · ask → listen → fill blanks · **end with calendar lock**

---

## Timing rail

| Time | Section | Slide |
|------|---------|-------|
| 0:00–1:30 | Intro + agenda | None |
| 1:30–3:00 | Current state / pains → parts first | None |
| 3:00–11:00 | Walk path + discovery per step + Confirm blanks | **Slide 2** |
| 11:00–12:30 | Bill Pay reinforce + AI (if room) | Slide 2 or blank |
| 12:30–15:00 | This week + lock calendar | **Slide 3** |

**Part 2 (~10 min):** Activation risk — zero usage at day 60? Rank → one line each.

---

## 1. Intro (~90 sec) — NO SLIDE

**Say (close to this, then stop):**

- Thanks for the time — I’ve gone through the kickoff notes.
- Biggest issues I’m hearing: **approval speed** on aircraft parts + **clean audit trail** request → payment.
- I have a preliminary view of how that could look in Ramp — want to **pressure-test** it, catch nuance, align on what goes **live first**.
- If we use the time well: clear design **and** concrete first step toward the first purchase through Ramp. **Sound good?**

**Discovery (if she opens up before you show deck):**

- What’s the one thing that would make this project a win for you in 60 days?
- When a part is urgent, what breaks first — approval, vendor, or receiving?

**Don’t:** pain-point slides · “I’m not selling Ramp” · long product tour

---

## 2. Current state / pains (~90 sec) — NO SLIDE

**Anchor from brief (confirm, don’t lecture):**

- ~600 employees · aircraft mfg · **NetSuite** · buying via **email + Slack**
- Payment due dates in **spreadsheets** · no dedicated intake
- Inventory validates need · existing vs new vendors differ · C-level by dollar
- Manual PO/invoice matching · ACH/check runs

**Two problems (get her nod):**

1. **Speed** — approvals slow → parts miss need-by
2. **Control / visibility** — no clean trail: request → approval → PO → receipt → invoice → payment

**Recommend:**

- **One controlled parts program first** — request through payment — prove it, expand later.

**Ask:** *Does that match what hurts most?*

**Discovery:**

- Where do requests start today — Slack, email, both?
- When something goes wrong, what’s hardest to reconstruct after the fact?
- Roughly what share of spend is **aircraft parts** vs everything else?

---

## 3. Slide 2 — Path walkthrough (~8 min)

**Transition:** *Here’s how I’d wire it — tell me where I’m wrong.*

Walk boxes **once** (~60–90 sec), then **pressure-test step by step**.

### Step 1 — Request

**On slide:** qty × price · need-by · vendor · part #

**Say:** One front door for parts — employee captures what AP and Inventory need up front.

**Discovery:**

- Beyond qty/price/need-by — **required fields** for parts? (part #, tail/serial, work order, GL?)
- Who should be able to **request** vs **order**?
- Existing vendor vs new vendor — different info at intake?
- Estimates OK at request, or must be firm before approval?

---

### Step 2 — Approve

**On slide:** thresholds · **Inventory TBD**

**Say:** Routing follows **your** rules — not a generic template.

**Discovery (WOW — ask early):**

- **Inventory in the path — visibility** (can’t see stock), **accountability** (named owner), or **both**?
- Dollar thresholds — same across categories or different for parts?
- Who sets/changes approval rules? Who is the bottleneck today?
- Does Inventory **approve**, **validate**, or just **inform**?

---

### Step 3 — PO

**On slide:** on approval → **NetSuite**

**Say:** Approved request becomes a real PO — NetSuite stays books of record.

**Discovery:**

- POs created in NetSuite today — who, and from what trigger?
- Anything that must **not** sync or must edit in NetSuite only?
- Blanket POs or standing orders for repeat parts?

---

### Step 4 — Receive

**On slide:** NetSuite **or** Ramp — **confirm**

**Say:** For parts, receiving matters — three-way needs proof goods arrived.

**Discovery:**

- Who confirms receipt today? Where is it recorded?
- Parts vs services — different receiving rules?
- **SoD:** requester ≠ sole receiver — who is the receiver role?
- Partial shipments / backorders — how handled?

**If AOG / emergency raised:**

- **Pattern A (prefer):** same Parts Program + **Emergency flag** → shorter approval branch (discover who)
- **Pattern B:** buy now → **after-the-fact PO** within ~2 days → receive → match → pay
- Flag ≠ skip receive · still three-way

---

### Step 5 — Match & pay

**On slide:** three-way → **Bill Pay**

**Say (one breath):** Order + receipt + invoice match → pay in Ramp — **Bill Pay** closes the trail you want; don’t stop at the PO.

**Discovery:**

- How does AP know which PO an invoice belongs to today?
- Invoice ≠ PO — who resolves, typical causes?
- ACH vs check — any constraints on moving pay into Ramp?

**Bill Pay reinforce (~15 sec, if not covered):**

- Same system from request through payment = the audit trail, not a separate upsell.

**AI (~30 sec, only if natural):**

- After core path runs: AI for **research/prep** (vendor diligence, docs) — **humans still approve**; not autonomous approvals.

---

### Confirm with me (slide blanks — fill live)

| Blank on slide | Discovery if not answered yet |
|----------------|-------------------------------|
| **Inventory — why in path?** | Visibility vs accountability vs both (see Step 2) |
| **Thresholds** | $ bands · who at each · parts vs other |
| **Receiving** | Who · NetSuite vs Ramp · partials |
| **Required fields** | part # · tail · WO · vendor · new vs existing |

**Transition out:** *That’s enough for a first build — rest in a working session.*

**Killer (if time):** *If I fix **one** thing in 60 days, biggest impact on you?* — then **shut up**.

---

## 4. Slide 3 — This week + close (~2–3 min)

**Say:**

- Best first step: **one path live**, not whole company day one — **aircraft parts** (the pain).
- **This week:** stand up program + **one real request** → review what broke.
- **Lock before we leave:** working session · pilot group · open items on calendar.

**Discovery:**

- Who should be in the **pilot group**? (requesters + approvers + receiver + AP)
- First real part you’d route — low risk but representative?
- What’s blocking a pilot request in the **next two weeks** if not calendar?

**Must lock (verbal checklist):**

- [ ] Inventory decision (visibility / accountability / both)
- [ ] Thresholds + owner of rules
- [ ] Receiving (who + where recorded)
- [ ] Pilot group named
- [ ] **Working session on calendar**

**Do NOT end with:** “Any questions?” / “I’ll follow up.”

---

## 5. Pushback — one-liners

| She says | You say |
|----------|---------|
| Don’t change everything | One high-impact path first — prove, expand. |
| Approvals are complicated | Separate **required** rules from friction of how it evolved. |
| Need NetSuite | Ramp upstream; NetSuite = books; keep synced. |
| Employees won’t adopt | One clear place — kill email/Slack chase. |
| AI nervous | Gather info + prep review; your team approves. |
| Process is unique | Preserve **business requirement**, not every tribal step. |

---

## 6. Part 2 triage (~10 min)

**Open:** *Ranking by **activation risk** — zero live usage at day 60 if I wait a week?*

Also: business impact · blocked vs workaround · async OK?

| P | Means |
|---|--------|
| 1 | Blocked from procurement live / zero usage late in window |
| 2 | Live transaction broken · regression to Slack · critical spend |
| 3 | Important but workaround exists |
| 4 | Optimization / AI before first request |

**Magic line:** *Blocker to activation, or optimization we handle async?*

**Form:** *“#N because __. Next I’d __.”*

**Practice order:** A1→A4→A2→A3 · B2→B1→B4→B3 · C2→C1→C4→C3

---

## 7. Product facts (if stuck)

| Topic | Line |
|-------|------|
| NetSuite | Ramp upstream; NS = books; thoughtful PO origin |
| 3-way | Parts: PO + receipt + invoice |
| 2-way | Services later — per program |
| Bill Pay | Match + pay — closes audit trail |
| Agents | Research + report; **do not approve** |

---

## 8. Before you join — 30 sec scan

**NORTHSTAR** — speed + audit · parts first · friction ↓ control stays  

**PATH** — Request → Approve → PO → Receive → Match → **Bill Pay** · NS = books  

**WOW** — Inventory: visibility vs accountability?  

**CLOSE** — parts program + first real request + **calendar**  

**PART 2** — activation risk × impact · blocker vs async  
