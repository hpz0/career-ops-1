# Domain Refresher — P2P, ERP & Procurement Activation

**For:** Harrison · Ramp Senior Manager, Procurement Product Activation  
**Purpose:** Get fluent again after time away from hands-on systems work (Comcast = categories; Plenty = where you *implemented*). Speak with Controller-level depth without claiming Ramp admin expertise you don’t have yet.

**Assumption:** “PDP” → **P2P (Procure-to-Pay)**. If you meant something else, say so.

**How to use:** Read sections 1–6 once slowly. Then drill **§10 Speakable depth** and **§11 Your proof map** out loud. Full playbook plan stays in `ramp-activation-playbook-plan.md`.

---

## 1. Vocabulary map (don’t mix these up)

| Term | What it means | Why interviewers care |
|------|---------------|----------------------|
| **Intake** | How a request enters the system (“I need to buy X”) | Broken intake = maverick spend + no visibility |
| **P2P (Procure-to-Pay)** | Requisition → PO → receive → invoice → pay | Classic Coupa-land; your home turf |
| **S2P (Source-to-Pay)** | Sourcing/RFx + contracts **on top of** P2P | Strategic layer; Ramp AI agents push into this |
| **Intake-to-pay** | Ramp’s framing: one continuous flow from request through payment | Use *their* words in interviews |
| **AP (Accounts Payable)** | Invoice capture, match, payment | Controllers live here; your e-invoice +50% story |
| **ERP** | System of record for GL, vendors, POs, sometimes inventory (NetSuite, etc.) | Integration is where go-lives die |
| **CLM** | Contract lifecycle (Ironclad, DocuSign CLM) | Legal stalls; Ramp bidirectionally integrates |
| **3-way match** | PO + receipt + invoice must align before pay | Control vs speed tradeoff Controllers care about |
| **Maverick / off-contract spend** | Buying outside approved process/vendors | Your 99% on-contract proof attacks this |
| **Activation / implementation** | Closed-won → configured + adopted + handed to CSM | *This job* |

**One sentence that sounds senior:**  
> “P2P is the transaction engine; intake is the front door; ERP is the system of record; activation fails when those three aren’t designed together.”

---

## 2. End-to-end buying flow (know this cold)

```
INTAKE          APPROVE           COMMIT            FULFILL         PAY / CLOSE
request     →   workflow      →   PO / card     →   receive     →   invoice match
(who/what/why)  (policy/$)        (vendor/$)        (goods/svc)     (AP / 3-way)
```

### What “excellent” looks like at each step

| Stage | Excellent | Broken (what you’ll hear from Controllers) |
|-------|-----------|-----------------------------------------------|
| **Intake** | One front door; enough data to route; policy checked early | Email/Slack chaos; incomplete forms; IT buys on personal cards |
| **Approve** | Right people, parallel where safe, thresholds by risk/$ | 8 serial approvers; approvers who rubber-stamp; CFO on every $200 |
| **Commit** | PO or controlled card issued; vendor master clean | “Just pay the invoice”; duplicate vendors; no PO |
| **Fulfill** | Receipt / confirmation when needed | Matching fails because nobody received |
| **Pay** | Clean match; e-invoice; exceptions queued | AP as data-entry hell; late fees; duplicate payments |

### Your Coupa-era metrics in this flow
- **Req cycle 3 → 1.5 days** → intake + approval speed  
- **99% on contract** → commit discipline (preferred vendors / contracted suppliers)  
- **E-invoice +50%** → pay/AP labor  

---

## 3. Approval structures (depth Controllers expect)

Approvals are **policy encoded as workflow**, not “who’s nice to ask.”

### Design dimensions you should name
1. **Thresholds** — by $ amount, category, or risk (new vendor vs known)  
2. **Routing** — cost center / department / project / entity  
3. **Serial vs parallel** — parallel cuts cycle time; serial for true dependencies  
4. **Delegation / out-of-office** — mid-market killers when CFO is traveling  
5. **Exception path** — emergencies, rush, “CEO said so” (if you don’t design it, people bypass)  
6. **Segregation of duties** — requestor ≠ sole approver ≠ payment releaser (when company cares)

### Mid-market reality (Ramp’s segment)
- Often **no dedicated procurement person** — Controller or finance ops owns the tower  
- Approvers are busy operators; **every extra click kills adoption**  
- They want control *and* speed — your job in discovery is to find the minimum viable control set  

### Speakable line
> “I’d rather ship a tight two-step approval that people use than an eight-step ‘perfect’ policy that drives everyone back to Slack. Discovery is finding that line with the Controller.”

---

## 4. ERP — what Activation actually needs to know

You don’t need to be a NetSuite admin. You need to know **what must be true** for procurement software + ERP to coexist.

### Why ERP matters in go-lives
Ramp (or Coupa) may own the **buying experience**, but Finance still closes books in **ERP**:
- Vendor master / subsidiaries  
- Chart of accounts / departments / classes / locations  
- PO ↔ bill ↔ payment trail  
- Accruals and period close  

If sync is wrong, Controllers lose trust on week one — product dies politically even if UX is great.

### NetSuite (your proof — speak specifically)
You **orchestrated migration to NetSuite with dynamic MRP** (inventory/manufacturing context). For *this* role, translate that muscle:

| NetSuite concept | Why activation cares |
|------------------|----------------------|
| **Vendors** | Duplicate vendors = duplicate payments / bad reporting |
| **Subsidiaries / entities** | Multi-entity approval and bill routing |
| **Accounts / departments** | Coding on intake must land correctly in GL |
| **POs / vendor bills** | Whether Ramp creates/syncs POs and invoices |
| **Items vs expenses** | Inventory items vs OpEx services — different flows |
| **MRP / inventory** (your past) | Shows you understand ERP as ops backbone, not just “accounting software” |

**Honest framing:**  
> “At Plenty I led the move onto NetSuite with dynamic MRP — I’m not claiming I’m a NetSuite Solutions Consultant, but I’ve sat through the integration and data-migration pain: vendor masters, coding, and the ‘who owns the source of truth’ fights. That’s the conversation Activation has to get right early.”

### QuickBooks Online (nice-to-have on JD)
Mid-market heavy. Mentally file:
- Simpler than NetSuite; still has vendors, charts, bills  
- Sync issues are often **chart mapping + vendor duplicates**, not fancy MRP  
- Don’t fake deep QBO scars — say you’d learn their Ramp↔QBO patterns in week one  

### Integration discovery questions (sound expert on calls)
Ask / coach specialists to ask:
1. What’s system of record for vendors — Ramp or ERP?  
2. Do you require POs before invoice payment today?  
3. How do you code spend today (dept / class / location / project)?  
4. Who owns ERP admin access if we need a connector change?  
5. Close calendar — any blackout near month-end?  

---

## 5. CLM & legal (your Ironclad edge)

**CLM** sits beside P2P: contract negotiated → terms should constrain buying.

| Concept | Interview depth |
|---------|-----------------|
| **Intake of contracts** | Upload MSA/SOW → extract terms (Ramp markets AI here) |
| **Obligation vs transaction** | Contract says pricing/term; P2P executes purchases against it |
| **Legal as bottleneck** | Deals stall in redlines; Activation must plan for it |
| **Your Ironclad + DocuSign SpringCM** | You’ve been on the **buyer CLM** side of that integration conversation |

**Speakable:**  
> “I’ve lived Ironclad and DocuSign CLM — I know where legal kills velocity. Bidirectional CLM/ticketing workflows only work if Activation designs when Legal is in the path versus when policy can auto-pass.”

---

## 6. AP, matching, and “Bill Pay bundled”

JD / sibling roles: Procurement priority; **Bill Pay** sometimes bundled.

### 3-way match (classic control)
1. **PO** — what we ordered  
2. **Receipt** — what we got  
3. **Invoice** — what vendor billed  

Pay when they align (within tolerances). Services often use **2-way** (PO + invoice) because there’s no warehouse receipt.

### Why your e-invoice story matters
Manual PDF invoices → AP labor. Electronic invoices / AP automation → less keying, fewer errors. You drove **+50% supplier e-invoice adoption** and reduced AP labor — that’s Controller gold.

### When Procurement + Bill Pay are in one deal
- Don’t let Bill Pay steal the critical path if Procurement is the product bet  
- Shared discovery: payment methods, approval of bills vs POs, vendor onboarding  
- Handoff clarity: who configures what; one customer project plan  

---

## 7. Implementation mechanics (Activation craft)

### The stages (same as your playbook)
1. **Handoff / readiness** — scope, sponsors, ERP access, red flags  
2. **Discovery** — current state → future state  
3. **Configuration** — workflows, users, sync, policies  
4. **Education** — role-based training  
5. **Go-live + hypercare** — criteria, not vibes  
6. **CSM handoff** — written context  

### Discovery that isn’t a demo
Leave with:
- Current intake channel(s)  
- Approval matrix (real, not aspirational)  
- ERP + who admins it  
- Top 10 vendors / % of spend  
- Pain metrics they already feel (cycle time, late invoices, audit findings)  
- Change risks (who will resist)

### Configuration landmines
- Wrong approvers → silent shadow process  
- Vendor sync one-way vs two-way confusion  
- Training only the champion → org never adopts  
- Going live before a single successful test transaction  

### Change management (underrated, you know this)
Publishing a **Procurement Policy** at Plenty *was* change management. Same muscle: rules + enablement + enforcement.

---

## 8. Mid-market Controller psychology

Ramp’s segment (~100–999 employees):
- Controller often = CAO/finance ops/pseudo-CFO  
- Bought Ramp for **speed + control + visibility**, allergic to Coupa-class heaviness  
- Fear: another tool that creates work  
- Trust trigger: you speak **close, audit, AP backlog, accruals**, not only “employee delight”

**Opening posture on a customer call:**  
> “Walk me through the last time something expensive was bought the wrong way — what broke, who cleaned it up, and what you wish had been true.”

That beats a feature tour every time.

---

## 9. Coupa → Ramp translation (how to talk about your past)

| Coupa-world thing you did | How to say it for Ramp |
|---------------------------|-------------------------|
| Led Coupa P2P implementation | “I owned buyer-side P2P go-live — discovery through adoption” |
| Procurement Policy | “I wrote the operating rules the system had to enforce” |
| 99% on contract | “We killed maverick spend with process + platform together” |
| Req cycle 3→1.5 days | “We cut intake-to-approval latency in half” |
| Ironclad / DocuSign | “I’ve been on the CLM side of finance-stack integrations” |
| NetSuite migration | “I’ve lived ERP cutover and source-of-truth fights” |
| TripActions | “T&E sits in the same control conversation as P2P” |
| Team of 3 buyers | “I coached operators who executed the process daily” |

**Do not say:** “I was a Coupa consultant” or “I configured Ramp.”  
**Do say:** “I was the internal owner who made P2P stick.”

---

## 10. Speakable depth — drills (practice aloud)

### A. “Explain P2P to me like I’m an AE”
> Employees request something, the right people approve against policy, we commit with a PO or controlled payment method, we confirm we got what we paid for, and AP pays a matched invoice. If any step is email chaos, Finance loses visibility and control.

### B. “What’s the difference between P2P and intake-to-pay?”
> P2P often starts once a requisition is already somehow born. Intake-to-pay includes the messy front door — how the request is created, enriched, and policy-checked — through payment. Ramp’s bet is owning that whole spine so you’re not stitching five tools.

### C. “Where do ERP integrations usually fail?”
> Vendor master duplicates, GL coding mismatches, unclear system of record, and going live without a test transaction before month-end close. Politically, they fail when the Controller wasn’t in discovery.

### D. “How do you know a customer is ready to go live?”
> Sponsors named, approval paths tested, ERP sync validated on sample txs, requesters and approvers trained, exception path documented, CSM handoff written. If any of those are yellow, we don’t pretend it’s green.

### E. “Product feedback from the field — example shape”
> “In 6 of 10 mid-market deals, discovery stalls on multi-entity approval routing. That’s not one loud customer — it’s a pattern. Here’s frequency, time-to-go-live impact, and a proposed product behavior.”

### F. “3-way match in plain English”
> Don’t pay until what we ordered, what we received, and what they billed agree — within tolerance. It’s how you stop paying for air.

### G. “Vendor credit apps — a real process call”
> We stopped signing vendors’ credit applications by default. Those forms smuggle in the vendor’s terms. Instead we gave them a Controller-signed company packet with the info they needed to extend credit — on our posture. Vendor onboarding is risk, not paperwork. If a product ‘auto-fills credit apps,’ I’d want Finance-controlled output, not blind acceptance of vendor paper.

---

## 11. Your proof map (only real claims)

| Domain topic | Proof in cv.md / story bank |
|--------------|----------------------------|
| P2P implementation | Coupa lead; policy; cycle time; on-contract % |
| Approvals / policy | Published & enforced Procurement Policy |
| ERP | NetSuite + dynamic MRP migration |
| CLM | Ironclad + DocuSign SpringCM |
| AP adjacency | E-invoice rate +50%; AP labor down |
| T&E adjacency | TripActions |
| Analytics | Power BI + ERP spend analytics |
| People / coaching | Team of 3; S6 IT category owner |
| Enterprise complexity | Comcast Wireless/Fixed Network categories (stakeholder weight — not systems claim) |

**Gap to own cleanly:** Deep Ramp product admin / connector click-paths — you’ll learn on the job. Your foundation is **process design + Controller credibility + implementation ownership**.

---

## 12. Study plan (3 sessions, ~90 min total)

### Session 1 — Flow & vocabulary (30 min)
- Re-read §§1–3  
- Draw the intake→pay flow from memory  
- Say drills A, B, F out loud  

### Session 2 — ERP & AP (30 min)
- Re-read §§4, 6  
- List 5 ERP discovery questions from memory  
- Practice NetSuite honest framing (§4)  
- Say drills C, D  

### Session 3 — Activation craft + your stories (30 min)
- Re-read §§7–9 and playbook plan stages  
- Walk S1 (Coupa) as discovery→config→education→go-live  
- Walk S6 as how you’d ramp a specialist  
- Say drill E  

Optional homework (no fabrication): skim Ramp’s procurement pages for their words — *intake-to-pay, AI agents, Price Intelligence* — and practice one “Why Ramp” using **their** nouns.

---

## 13. Cheat phrases (keep / kill)

**Keep**
- system of record  
- approval thresholds / parallel routing  
- maverick spend  
- time-to-go-live  
- change management  
- Controller / finance ops  
- handoff readiness  

**Kill**
- “synergy” / “leverage going forward”  
- fake NetSuite module names you can’t explain  
- “I’ve implemented Ramp”  
- quota / AE language  

---

## Related files
- Cheatsheet + Q&A: `ramp-procurement-activation-cheatsheet.md`  
- 90-day + playbook: `ramp-activation-playbook-plan.md`  
- Stories: `story-bank.md` (S1–S6)  
- Full intel: `ramp-senior-manager-procurement-product-activation.md`
