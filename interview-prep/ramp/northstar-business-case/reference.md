# Reference — glossary, questions, objections

**Do not start here.** Use when you forget a term or need a lookup during prep.

**Start here instead:** [`README.md`](README.md) → [`study-guide.md`](study-guide.md) → [`script.md`](script.md)

---

## Glossary (plain English)

| Term | Means |
|------|--------|
| **Spend Program** | Ramp’s name for a **buying channel** — rules for one type of spend (here: aircraft parts). Say “parts program” on the call; mention “Spend Program” once if useful. |
| **Three-way match** | Before you pay, three things must agree: **what you ordered** (PO) + **what you received** (receipt) + **what the vendor billed** (invoice). Stops paying for parts you never got. |
| **Two-way match** | PO + invoice only (no receipt). Used for **services** where there’s nothing to “receive” in a warehouse. |
| **Need-by date** | Date the part must arrive. Should show on **every approval** so approvers see urgency. |
| **Qty × unit price** | Requesters enter **quantity** and **price per unit** — not a vague total estimate. Needed for clean matching. |
| **NetSuite coding / GL** | Accounting fields on the PO line (account, department, location, etc.). NetSuite stays the **books**; Ramp should collect required fields on the request. |
| **Bill Pay** | Ramp’s accounts-payable module — capture invoice, match to PO, pay. Closes the loop after the PO. |
| **Procurement agents** | AI step **in the approval workflow** — researches vendor docs/web, produces a structured report, can **route** by risk. **Does not approve.** Phase two, not week one for parts. |
| **Pilot** | Small group, one parts path, **one real request end-to-end** — prove it works before rolling out company-wide. |
| **Segregation of duties** (often shortened **SoD**) | The **requester** shouldn’t be the **only person** who confirms receipt. Prevents fraud and garbage data. |
| **AOG / emergency buy** | **Aircraft on ground** — urgent purchase when a plane is down. You still document it and convert to a proper PO quickly; don’t let Slack be the permanent system. |
| **Change order** | After approval, if qty, price, need-by, or vendor changes → **re-approve**; don’t let AP silently fix fiction. |
| **Activation window** | ~60 days to get the customer **actually using** procurement — not just “configured.” Part 2 triage uses this. |

---

## Discovery questions (ask Monica; write answers)

| # | Question |
|---|----------|
| 1 | Last time a part **missed need-by** — where did time get stuck? |
| 2 | When audit asks for **request → payment** trail — how long does that take today? |
| 3 | Is the **PO created before** the buy or **after** the invoice shows up? |
| 4 | **Who receives** goods in the system? Is it the same person who requested? |
| 5 | If invoice **price or qty** doesn’t match the PO — what tolerance before AP stops payment? |
| 6 | **Approval thresholds** — who approves at what dollar levels? |
| 7 | When is a **quote required** (preferred vs spot vendor)? |
| 8 | On a NetSuite parts PO line today — which fields are **required**? |
| 9 | Who is the **NetSuite admin** for POs and receipts? |
| 10 | **Pilot scope** — one site or one parts family? |

**Inventory question (most important):**  
Is Inventory in the path for **visibility** (requesters can’t see stock) or **accountability** (named owner so people don’t over-order)?

**Notepad columns:** PO timing · Inventory why · bands · receiver · NS fields · tolerance · quote rule · NS owner · pilot

---

## If Monica pushes back

| She says | You say |
|----------|---------|
| We already have NetSuite | Keep it. Ramp handles intake, approvals, match; NetSuite stays books + receiving. |
| Our process is unique | Keep real controls. Undocumented Slack isn’t a control. |
| Roll out to everyone day one | Pilot first, then expand. |
| Estimates are fine | Matching needs real qty × price; use change orders if things shift. |
| Can we mix match rules on one program? | Matching is per channel — parts use three-way; services later, separate. |
| Turn on AI now | Agents research and route; humans approve. After the parts path works. |

---

## Default design (your recommendation — adapt her numbers)

**Start with:** aircraft parts only · qty × unit price · need-by · vendor · part # · her NetSuite fields · her approval thresholds · PO → NetSuite · receive where she receives today · three-way before pay · small pilot

**Not on day one:** every category · services channel · AI as dependency · rebuilding all of NetSuite

**60-day win (one sentence):**  
One trusted parts path — request through payment — with a trail Monica can pull without hunting Slack.

---

## Where the rest lives

| Topic | File |
|-------|------|
| Full timed script | [`script.md`](script.md) |
| Night-before prep | [`study-guide.md`](study-guide.md) |
| Day-of one screen | [`cheatsheet.md`](cheatsheet.md) |
| Part 2 scenarios | [`triage.md`](triage.md) |
