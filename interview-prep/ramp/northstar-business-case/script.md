# NorthStar business case — full script (Part 1)

**Target:** ~12–14 min talk · 1–2 min buffer · **Do not read slides verbatim.**

Deck: `NorthStar-Aviation-Procurement-Design-Activation.pptx` (5 slides)

---

## 0:00–1:30 · Open (Slide 1 — don’t linger)

> Monica — thanks for the time. You’re already on Ramp for expense. I’m here to **design how purchasing should run**, not re-sell Ramp.
>
> From what I understand: approvals are slow enough that **parts miss need-by dates**, and there’s **no clean trail** from request to payment — a lot of it lives in email, Slack, and spreadsheets. With carrier contracts and regional growth, volume is going to multiply whatever process you have today.
>
> I’ve stood up procure-to-pay from the **buy side** — workflows, policy, NetSuite — so I’m going to treat this as control design, not a product tour.
>
> In the next ~15 minutes I want to: align on a **recommended path for aircraft parts**, confirm a few design choices **with you**, and leave with a **concrete first step**. Fair?

*(Advance to Slide 2.)*

---

## 1:30–3:30 · Problems → direction (Slide 2)

> Two problems I’m designing against — and you can tell me if I’ve got the order wrong.
>
> **Approval speed** — bottlenecks mean parts miss need-by.  
> **Audit readiness** — no single thread from request through receipt, invoice, and payment.
>
> I would **not** try to solve every category day one. I’d stand up **one controlled program for aircraft parts first** — highest volume, highest pain — and make need-by and the audit trail non-negotiable on that path. Services and edge cases come **after** we prove this works.
>
> **Does that match your priority, or is something else more urgent?**

*(Listen. Adjust one sentence if she redirects — e.g. audit-first — then advance to Slide 3.)*

---

## 3:30–9:00 · Path + discovery (Slide 3 — core of the interview)

> Here’s the path I’d start with — **five steps**, and we’ll fill in the blanks together.
>
> **Request** — one Parts Program. Quantity times unit price — not a ballpark — need-by, vendor, part number, and whatever NetSuite coding you require on a PO line today.  
> **Approve** — your dollar thresholds. Whether Inventory sits in front of that is a **design choice** we need to nail.  
> **PO** — created on approval, synced to NetSuite.  
> **Receive** — wherever you receive today — NetSuite or Ramp — we’ll confirm.  
> **Match and pay** — three-way: order plus receipt plus invoice before pay in Bill Pay.
>
> *(Pause. Point to “Confirm with me.”)*

### Inventory moment — **this is the wow**

> On Inventory — the notes said Inventory Manager confirms need before spend moves. I **don’t** want that step just because it’s traditional.
>
> Is Inventory in the path because **requesters can’t reliably see** available quantity, condition, or allocations — or because you need a **named owner** so people don’t over-order?  
> If it’s visibility, we might capture more on the request and only route to Inventory in some cases. If it’s accountability, we keep the gate — but design it so it doesn’t sit and kill need-by: parallel where we can, clear SLA, backup approver.
>
> **Which is it closer to for NorthStar?**

*(Adapt from her answer. Examples:)*

- **Visibility-heavy:** “We’d default qty from stock view where possible; Inventory only on exceptions or above $X.”  
- **Accountability-heavy:** “Inventory confirms on the record first — or parallel with manager — need-by on every notification.”  
- **Both:** “Confirm step stays; we shorten it with better intake fields.”

### Then confirm (pick 3–4, don’t interrogate)

> Great — a few more so we can build this week:
> - **Approval thresholds** — who at what dollar levels?  
> - **Receiving** — who enters receipt, and in NetSuite or here? Requester shouldn’t be the sole receiver if we can avoid it.  
> - **Required fields** beyond qty, price, need-by — GL, department, location, class?  
> - **Pilot** — one site or one parts family, and who’s in the pilot group?

> That’s enough to build. The rest we finish in a short working session.

*(Write answers on notepad / slide blanks. Do not fake her numbers.)*

---

## 9:00–10:30 · Extensions (Slide 4 — 90 seconds max)

> Once this path is live, two natural extensions — **not** week-one blockers.
>
> **Bill Pay** — matched invoices paid in Ramp. Due dates leave the spreadsheet. You get the full request-to-payment trail in one place instead of a scavenger hunt.
>
> **Procurement agents** — these are different from “chat summary.” They’re **embedded in the approval workflow**: they can search the web, analyze attached contracts or SOC reports, produce a **structured report** with risk tiers, and even **route** the request based on findings — for example, high security risk to Security approvers. **They do not approve or reject** — humans do. Best after the parts path is real: new vendors, legal/security review, duplicate-request detection. For your pilot I’d keep approvals human on known MRO suppliers.
>
> Path first. Then these are easy adds.

*(Advance to Slide 5.)*

---

## 10:30–13:30 · Close (Slide 5)

> **This week:** stand up the Aircraft Parts Program, publish to a small pilot, run **one real request end-to-end**.
>
> Build and publish → run the first request **together** → review what broke before we scale.
>
> **Before we drop, I need to lock:**
> - Inventory step decision for the pilot  
> - Approval thresholds — or the owner who has them  
> - Who owns receiving  
> - Pilot group — and **45 to 60 minutes on the calendar** this week or next for a working session  
>
> Can we put names and a session time down now?

*(If yes: repeat back owners + time. If no: “What’s the one thing that would block you from a pilot request in the next two weeks?”)*

---

## 13:30–15:00 · Wrap

> I’ll recap: parts path, qty times price, your thresholds, receiving confirmed, three-way before pay, pilot scoped. I’ll send a one-pager with open items.
>
> **What would make you call this a failure in 60 days** — so I design against it?

*(Listen. One sentence echo.)*

> Talk soon — thanks, Monica.

---

## Credibility (max **one** drop in Part 1 — only if natural)

- *“I’ve been the customer on Coupa and NetSuite — controlled path has to be the easy path or people go back to Slack.”*  
- *“At Plenty we cut req cycle time when policy and workflow moved together — same lesson here.”*  
- **Do not** Coupa click-path tour.

---

## If they interrupt / pushback (short)

| They say | You say |
|----------|---------|
| We’re unique | Critical controls stay. Undocumented Slack isn’t a control. |
| NetSuite is our system | Agreed — Ramp for intake/approvals/match visibility; NetSuite stays books + receiving unless you prefer otherwise. |
| Estimates are fine | Change orders exist — I’d rather approve qty×price we can match than fiction AP has to unwind. |
| Turn on AI now | Agents are workflow research + routing — great for new vendors later; I wouldn’t make the pilot depend on them. |
| Inventory must stay | Then we design SLA and parallel so need-by doesn’t die — not remove the step blindly. |

---

## Part 2 handoff

When they say “Part 2” or “triage” → switch to [`triage.md`](triage.md).  
Open with: *“I’m ranking by activation risk inside 60 days — zero live usage at day 60 if I wait a week.”*
