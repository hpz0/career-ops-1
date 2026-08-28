# Questions & trench topics for Ramp

**Purpose:** Prove you’ve been in the **P2P trenches** — not Monica/NorthStar role-play. Use in Activation interviews, Product partnership conversations, or “how would you contribute to the roadmap?” moments.

**How to use:**
- **Don’t** dump all of this in one answer.
- **Do** pick one topic when they ask about ERP pain, match failures, NetSuite, or “what would you feed back to Product?”
- Frame as: *“I’ve lived this on the buyer side — curious how Ramp handles it today and where you want customer voice.”*

NorthStar design session → [`northstar-business-case/`](northstar-business-case/) only.

---

## Blanket POs + NetSuite partial-bill / qty×$1 workaround

### What you’ve lived (credibility — say in your words)

Mid-market and manufacturing teams use **blanket POs** when the **dollar ceiling is known** but **invoice count and timing aren’t** — standing MRO, services, site contracts, “approved $50k with this vendor this quarter.”

On **NetSuite**, standard PO lines often break down for that pattern:

- If you raise **qty 1 @ $50,000**, the line can behave like it’s **fully billed when quantity is exhausted**, even when you still have dollar room — or you can’t cleanly post **arbitrary partial dollar** bills the way AP expects.
- A common **buyer-side workaround** (widely discussed in NetSuite practitioner communities): **swap qty and dollars** — PO line **qty = 50,000 · rate = $1.00**; bill $5,000 as **qty 5,000 @ $1**. Partial spend = partial qty decrement.
- **When that’s wrong:** Real unit economics (50 hours @ $200/hr) — keep honest qty × rate; don’t force the $1 trick.
- **Downstream pain:** Vendor PO PDF looks absurd; invoice must **match PO structure** (5,000 × $1, not 1 × $5,000) or match/variance fails; expense vs item sublists differ; some shops use **native Blanket PO + releases** instead.

That’s not textbook — that’s **implementation scar tissue**. It’s the kind of thing Activation hears after go-live when match “mysteriously” breaks.

### What to ask Ramp (learn + show product sense)

- Does Ramp support **blanket POs / releases** natively, or is it “standard PO + sync to NetSuite”?
- On **Ramp → NetSuite sync**, can customers encode the qty/$1 pattern, or does Ramp force “real” qty × unit price from intake?
- **Partial release / partial bill:** Does Ramp show **remaining blanket balance** and match at release level or header?
- **Invoice mismatch:** Vendor sends 1 × $5,000 against PO 5,000 × $1 — tolerance, transformation, or hard fail?
- Does Activation have a **decision tree**: blanket vs standard vs dollar-swap vs native NS blanket type?

### Product contribution angle (if they ask “what would you bring?”)

> “I’d bring the NetSuite partial-bill patterns customers actually use — including the unglamorous workarounds — so Product doesn’t design match and intake only for clean qty×price parts POs. Blankets and services are where mid-market implementations stall; I’ve debugged that from the buyer seat.”

---

## Vendor master / duplicate submissions

### What you’ve lived

Duplicate vendors (**Amazon Inc** vs **Amazon**, DBA vs legal name, acquired supplier still on old master) break **preferred vendor lists**, **three-way match**, and **audit**. Buyers spend cycles merging masters in NetSuite/Coupa while requesters keep creating twins at intake.

### What to ask Ramp

- Fuzzy match on name, email, EIN, payment details, ERP vendor ID?  
- Suggest merge / pick-existing vs create-and-clean-up-later?  
- Who resolves — requester, AP, Activation?  
- NetSuite already has canonical vendor — does Ramp create a twin on sync?

### Product contribution angle

> “Vendor master hygiene is a go-live week-2 fire. I’d pressure-test intake and agent duplicate-detection against how messy real masters are — not demo-vendor clean.”

---

## How to drop one trench topic (30–60 sec)

**Template:**  
> “One thing I’ve hit standing up P2P in NetSuite: [problem]. Customers often [workaround]. I’m curious whether Ramp [handles / plans / matches] that today — because that’s where I’ve seen implementations stall after the happy-path demo.”

**Blanket example:**  
> “Blanket spend where you know the dollar ceiling but not how many invoices — on NetSuite we sometimes swap qty and dollars so partial bills work. I’m curious if Ramp supports blankets and releases natively, or if specialists still architect that in the ERP and match what comes back.”

---

## Also ask (role / motion — not product trenches)

See [`caroline.md`](caroline.md) — Ask her (Bill Pay playbook, activation assumptions, etc.).
