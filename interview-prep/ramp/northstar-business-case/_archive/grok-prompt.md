# Grok prompt — update Procurement_Design_Session.pptx

Copy everything below the line into Grok (attach the current `.pptx`).

---

## Role

You are editing an existing **6-slide** Ramp-branded PowerPoint: `Procurement_Design_Session.pptx` for a **live design session** with **Monica (Controller) at NorthStar Aviation**.

The presenter is **Harrison**, Ramp **Procurement Activation** (senior IC). He is a **buyer-side procurement / P2P expert** (Coupa, policy, NetSuite-adjacent), not a generic AE. Tone: peer Controller conversation — prescribe a spine, leave blanks for *her* numbers, lock a first step. **Not** a product tour.

## Hard rules

1. **Keep exactly 6 slides.** Do not add/remove slides. Preserve Ramp branding, fonts, colors, and overall layout chrome. Update text (and icons only if they still match the point).
2. **Sparse glass, dense talk.** Short lines. No paragraphs. No feature laundry lists.
3. **Client-facing language.** Prefer “buying channel” on the glass; if you keep “Spend Program,” it must appear with a plain gloss once.
4. **Define once on slide 4 or 5:** *Three-way = order + receipt + invoice before pay.*
5. **Do NOT invent dollar amounts** (no “$5k”, no fake FP&A bands). Write **“your bands” / “Band A / B / C — fill with Monica”**.
6. **Do NOT** invent quote thresholds, commodity codes, UNSPSC, punchouts, or Coupa comparisons.
7. **Do NOT** imply Ramp replaces NetSuite. NetSuite = books + **item receipt (receiving)**.
8. **Do NOT** headline AI as a peer “next step.” AI may appear as **one subordinate line** under Approvals or as a footnote on slide 5 — never equal billing with Bill Pay / the parts path.
9. **Matching is per channel:** Parts = three-way. Services = later, **separate** channel, two-way. Never “mix 2-way and 3-way on one request.”
10. Intake uses **quantity × unit price**, never “estimates” or ballpark totals alone.
11. Receiving happens in **NetSuite**, not “somewhere in Ramp,” and **requester ≠ sole receiver**.
12. Replace brochure phrases (“Slack / email + mobile notifications”, “AI prepares a summary so reviewers decide faster” as a lead bullet) with **design decisions** Monica can accept/edit.
13. Speaker notes: optional short bullets per slide for Harrison (discovery steals / one-liners). Do not dump notes onto the slide body.
14. After edits, return: (a) the updated `.pptx`, (b) a brief changelog per slide.

## Session objective (do not put all of this on slides — encode it in the copy)

60-day win = **one trusted aircraft-parts buying path**: request → approve → PO in NetSuite → receive in NetSuite → three-way match → pay — with an audit trail Monica can pull without hunting Slack. Pilot first. Emergency path exists but converts to a real order. Change orders if qty/price/need-by/vendor move after approve.

---

## Slide-by-slide copy (use this text)

### SLIDE 1 — Title

**Keep layout.** Replace titles/subtitles with:

- **Eyebrow / title:** `PROCUREMENT DESIGN SESSION`
- **Subtitle:** `How purchasing will run on Ramp`
- **Support line:** `Align on design. Lock the first step.`
- **Context line:** `NorthStar Aviation  ·  Monica  ·  Controller  ·  Harrison · Activation`

**Optional thin outcome strip** (only if space; else leave for talk):

- `First 60 days: controlled parts path`
- `Need-by protected · qty × unit price · trail request → pay`
- `NetSuite stays books + receiving`

**Remove:** anything that sounds like a webinar or “agenda overview” on this slide.

---

### SLIDE 2 — Replace current Agenda with Today → Future

**New slide title:** `TODAY → PILOT FUTURE`  
**Subtitle:** `What we’re fixing in the first path`

Use a clean two-column table (or paired lines):

| Today | Pilot future |
|-------|----------------|
| Email / Slack buys | One parts buying channel |
| Need-by in spreadsheets | Need-by on every approval |
| Thresholds ad hoc | Your bands — in the system |
| Weak / late PO discipline | PO on approval → NetSuite |
| Manual / late match | Three-way before pay |
| Audit scavenger hunt | One pullable packet |

**Footer (one line):** `Parts first. Services and edge cases later.`

**Do not** keep the old 01/02/03 agenda unless you demote it to a tiny footer; the contrast table is the job of this slide.

---

### SLIDE 3 — Priorities & recommended design

**Title:** `PRIORITIES & STARTING DESIGN`  
**Subtitle:** `Starting point based on how you buy today — edit with me`

**Left — What matters most** (keep two cards if that’s the layout):

1. **Approval speed**  
   `Slow approvals delay aircraft parts and miss need-by dates.`

2. **Audit readiness**  
   `One traceable record: request → approval → receipt → invoice → payment.`

**Right — Recommended starting design** (decision bullets, not features):

- `One primary buying channel for aircraft parts & materials`
- `Requesters enter qty × unit price (not estimates) + need-by + vendor + ship-to`
- `Required NetSuite coding on the request (GL / dimensions you use today); default what we can`
- `Inventory confirms need on the record before spend moves`
- `Approvals follow your dollar bands; every approver sees need-by`
- `PO created on approval → synced to NetSuite`
- `Receive in NetSuite · three-way match before pay in Bill Pay`
- `Quote / justification only when your policy requires (your cutoff)`

**Footer:** `Out of scope day one: services channel, every exception, AI-led buying.`

**Remove:** vague “conditional routing…” as a lead; thresholds live with *her* bands. Remove any invented $ amounts.

---

### SLIDE 4 — How it works (three columns)

**Title:** `HOW IT WORKS`  
**Subtitle:** `Intake · Approvals · Receive & match`

#### Column A — Intake

- `One parts buying channel (Spend Program)`
- `Qty × unit price required`
- `Need-by date required`
- `Vendor + ship-to`
- `Required NetSuite fields (default + complete)`
- `Inventory confirmation of need`
- `New vendor → onboarding path`
- `Quote only when your policy says so`

#### Column B — Approvals

- `Inventory / Ops confirms need first (or parallel if you prefer)`
- `Then Manager → Finance/Controller → C-level by your bands`
- `Need-by visible on every approval`
- `Visible SLAs surface bottlenecks`
- `Optional: AI drafts a short summary for humans — AI does not approve`

#### Column C — Receive, match & pay

- `PO auto-created on approval → NetSuite`
- `Item receipt in NetSuite (warehouse/ops)`
- `Requester is not the sole receiver`
- `Invoice in Bill Pay`
- `Three-way match = order + receipt + invoice before pay`
- `Complete digital trail back to NetSuite`

**Footer:** `Parts = three-way. Services later = separate channel, two-way.`

**Remove:** leading with Slack/email/mobile as design points. Remove any flow that skips receiving.

---

### SLIDE 5 — Close the loop (systems) — demote AI

**Title:** `CLOSE THE LOOP`  
**Subtitle:** `Systems of record for the parts path`

**Primary block — match equation (large):**

`PO + Receipt + Invoice  →  Three-way  →  Pay`

**Systems table:**

| Step | System |
|------|--------|
| Request + approvals | Ramp |
| Purchase order | Ramp → NetSuite |
| Item receipt | NetSuite |
| Invoice match + pay | Bill Pay |

**One-liner under table:**  
`NetSuite coding is required/defaulted on the channel after connect — not auto-magic.`

**Secondary (small) — only if you keep a second card:**

**Bill Pay**  
`Matched invoices pay in Ramp. Due dates leave the spreadsheet. Full request-to-payment trail.`

**AI (footnote-size, not equal card):**  
`AI does not approve or reject. Optional later: summarize requests for C-level reviews as volume grows. Not week-one scope.`

**Remove:** AI as a peer headline equal to Bill Pay. Do not pitch “AI Procurement Policies” as the natural next step before the parts path is live.

---

### SLIDE 6 — Recommended first step + lock

**Title:** `RECOMMENDED FIRST STEP`  
**Subtitle:** `Start with proof, then scale`

**Hero:**  
`THIS WEEK`  
`Stand up the Aircraft Parts & Materials buying channel.`  
`Publish to a small pilot group. Run one real request end-to-end.`

**Support:**  
`One live request = proof of speed + a pullable audit trail — then we expand.`

**Three steps (keep numbered if layout has them):**

1. `Confirm channel scope + pilot owners`
2. `Build and publish in a short working session`
3. `Run the first request and review together`

**Add a “LOCK BEFORE WE LEAVE” strip (required):**

1. `Your dollar bands (A / B / C)`
2. `NetSuite owner for POs + receipts`
3. `Pilot site or parts family`
4. `Working session on the calendar now`

**Footer:** `60-day win = one trusted parts path — not every edge case day one.`

**Also allow a tiny “guardrails” line if space:**  
`Emergency buys: document + convert to real qty/price in ~2 business days. After approve, qty/price/need-by/vendor changes = change order.`

---

## Verbal defs (put in speaker notes for slide 1 or 4 — not giant on-glass)

- Spend Program = buying channel  
- Three-way = order + receipt + invoice before pay  
- Opening line energy: *You’re already on Ramp for expense — I’m here to design purchasing, not re-sell Ramp.*

## Discovery blanks Harrison will fill live (leave visual holes; don’t fabricate)

Dollar bands · quote cutoff · who receives today · match tolerance · required NS line fields · NS admin · pilot scope

## Done criteria

- [ ] Qty × unit price appears on slides 3 and 4  
- [ ] Receive in NetSuite appears before three-way  
- [ ] No invented dollar thresholds  
- [ ] AI is not a co-headline on slide 5  
- [ ] Slide 6 has Lock before we leave  
- [ ] Parts three-way / services later called out once  
- [ ] Still exactly 6 slides, Ramp-branded  
