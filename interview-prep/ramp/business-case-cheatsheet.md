# Business case — day of (print this)

**Customer:** NorthStar · Monica (Controller) · NetSuite · already on Ramp Expense  
**Slides:** paste [`business-case-slides-ramp-deck.md`](business-case-slides-ramp-deck.md) into Ramp’s branded deck  
**Full logic:** [`business-case-northstar.md`](business-case-northstar.md)

---

## Plain-English glossary (say once)

| Term | Say |
|------|-----|
| **Spend Program** | Ramp’s name for a **buying channel** — the request form + approval path for a type of purchase |
| **Purchase order (PO)** | Official record of what was approved to buy |
| **Three-way match** | Invoice matches the PO **and** someone confirmed the goods arrived |
| **Two-way match** | Invoice matches the PO (fine for services; not enough for parts) |
| **Bill Pay** | Where vendor invoices are uploaded, approved, and paid in Ramp |

---

## Matching — one rule per buying channel

- **Two-way** = invoice ↔ purchase order  
- **Three-way** = invoice ↔ purchase order ↔ **receipt**  
- Ramp sets this **per Spend Program** (not mix-and-match on one request)  
- **Parts pilot = three-way.** Services later = separate channel with two-way  
- Don’t put parts + services in one program with one matching rule  

## Intake — commercial facts, not estimates

On the request: **qty + unit cost** (+ need-by, vendor, ship-to, quote when required).  
Extended = qty × unit. **Not** a vague “estimated total” as the main field — that breaks matching.

---

## Policy — propose structure, take their numbers

Don’t invent “FP&A over $5k.”

**Do propose:**
1. Encode **their** existing dollar → C-level rules  
2. **Need-by date** required  
3. Inventory confirms need (already informal — make it formal)  
4. **Quote** required above a threshold **Monica picks** (for non-preferred / new vendors)  
5. After pilot: no PO → no pay for in-scope parts  

Ask live: *“What are your thresholds today? Do you require quotes above a number?”*

---

## Call spine

1. Open — 60-day outcome (speed + audit)  
2. Validate — missed need-by · audit pull · who approves · NetSuite owner · receipt before pay?  
3. Prescribe — buying channel + swimlane + three-way for parts  
4. Commit — draft channel · matrix · NetSuite · pilot · calendar hold  

**Wedge:** *I’ve been the customer. Controlled path = easiest path.*

---

## Slide order (6)

1. Outcome  
2. Today vs future  
3. Buy path flow (+ define Spend Program)  
4. **Approval swimlane** (expertise)  
5. Three-way + NetSuite  
6. 60 days + this week’s ask  

---

## Triage (Part 2)

Rank: blocks first controlled path → speed/audit → rework.  
*“#__ because __. Next I’d __.”*
