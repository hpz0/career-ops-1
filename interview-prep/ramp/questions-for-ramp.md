# Questions for Ramp

Reverse / product questions to ask interviewers, Activation peers, or Product — **not** Monica discovery.

Steal answers that change how you’d design go-lives or coach specialists.

---

## Vendor master / duplicates

**Duplicate vendor submissions**  
How does Ramp handle near-duplicate vendors on intake or PO — e.g. requester submits **Amazon Inc** but the master is **Amazon**?

- Soft / fuzzy match on legal name?  
- Match on email, EIN / tax ID, payment details, or ERP vendor ID?  
- Suggest merge / pick-from-existing, or create a second vendor and clean up later?  
- Who owns resolution — requester, AP, Activation, or auto-merge?  
- What happens when NetSuite already has the “right” vendor and Ramp creates a twin?

*Why ask:* Duplicate vendors break preferred lists, three-way match, and audit. Controllers care. Buyer-side you’ve lived this; you want Ramp’s real behavior before you promise “clean master” on a design call.

---

## Blanket POs + NetSuite qty/rate workaround

**Blanket / release POs**  
How does Ramp handle **blanket purchase orders** (approved ceiling, multiple releases or bills over time)?

- Native blanket PO in Ramp, or standard PO only?  
- **Releases** against a blanket — created in Ramp, NetSuite, or both?  
- Three-way match on **releases** vs header — what’s the unit of match?  
- When Ramp syncs to NetSuite, does it preserve blanket PO type / remaining balance, or flatten to a standard PO?  
- Pilot design: parts-only channel first — when do you introduce blankets (MRO services, standing suppliers, site contracts)?

**NetSuite dollar-swap pattern (validate with Product)**  
On NetSuite, for **amount-known / invoice-count-unknown** spend (services, expense lines, many blanket scenarios), teams often work around partial billing limits by **swapping qty and dollars**:

- PO line: **quantity = approved dollar ceiling** (e.g. 50,000) · **rate = $1.00** · extended = $50,000  
- Partial bill for $5,000: bill **qty 5,000 @ $1** — consumes “dollars” via quantity decrements  
- **Why:** If you instead use qty = 1 @ $50,000, NetSuite can treat the line as fully billed when qty is exhausted, even if dollar value isn’t — and you can’t bill arbitrary partial **dollar** amounts cleanly on item/expense lines the way ops expects.

*Check me:* Is that still the right mental model for NetSuite item/expense PO lines in 2026, or do you see customers using native blanket PO + release workflows instead?

**Questions for Ramp specifically**

- Does Ramp **intake** support blanket POs (ceiling amount, release against balance)?  
- On sync **Ramp → NetSuite**, can specialists configure qty = dollars / rate = $1, or does Ramp force “real” qty × unit price from the request?  
- **Partial release / partial bill:** If NetSuite bills qty 5,000 of 50,000 @ $1, does Ramp match and show **remaining blanket balance**?  
- **Vendor-facing PO PDF:** If the ERP shows “50,000 units @ $1,” does Ramp generate a saner display, or is that an NS form problem?  
- **When NOT to use $1 trick:** Real unit-based buys (e.g. 50 hours @ $200/hr) should stay qty × rate — does Activation have a decision tree for blanket vs standard vs dollar-swap?  
- **Mismatch risk:** Vendor invoices 1 × $5,000 but PO is 5,000 × $1 — does match tolerate that, or fail AP?

*Why ask:* Blanket POs are everywhere in mid-market MRO/services. You’ve seen NetSuite partial-bill pain from the buyer side; you need to know whether Ramp is a first-class blanket story or “handle it in NetSuite and match what comes back.” Don’t promise Monica a blanket path on the NorthStar parts pilot unless Product confirms.

**Buyer-side note (for you, not Monica on day one)**  
Common NetSuite community pattern (e.g. NetSuite Professionals “swap dollars and quantity”): dollar ceiling → qty = dollars, rate = $1; partial bills decrement qty. Caveats: vendor PDF looks odd; wrong pattern if true UOM exists; expense vs item sublists behave differently; native **Blanket Purchase Order** type may be preferable when licensed/configured — ask customers which they use today before encoding the workaround in Ramp.

---

## Also ask (parked from prep)

See [`caroline.md`](caroline.md) — Ask her (role / motion).  
See business-case discovery — those are **customer** questions, not Ramp product questions.
