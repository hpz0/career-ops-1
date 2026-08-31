# Interview Intel: Anduril Industries — Buyer/Planner (Maritime / Quincy)

**URL:** https://job-boards.greenhouse.io/andurilindustries/jobs/5169966007?gh_jid=5169966007  
**Job posting (JD) source:** Greenhouse boards API (`/v1/boards/andurilindustries/jobs/5169966007`) + job-board page. ATS `updated_at`: 2026-08-22. Req **11321**. Posting first published 2026-06-23.  
**Legitimacy:** official first-party Greenhouse ATS (no evaluation report)  
**Report:** N/A (URL-entry prep; no `reports/` match)  
**Researched:** 2026-08-24  
**Sources:** Greenhouse job JSON; Anduril Ghost Shark program-of-record news; Defense News Dive acquisition (2022); Quonset Development Corp / PBN / WJAR on Quonset factory; Exponent Anduril interview process; interviewing.io Anduril process; Glassdoor Anduril interviews hub (252 interviews, 3/5 difficulty, ~47% positive — page updated Jul 3, 2025); Blind offer threads (equity = private RSUs); Zero G Talent Quincy maritime workforce note (Jul 2026); user statements 2026-08-24  
**Audiences covered:** recruiter-screen, hiring-manager, peer-tech, panel-mixed  
**Day-of print:** [`cheatsheet.md`](cheatsheet.md) · Hardware study: [`hardware-primer.md`](hardware-primer.md) · Decisions: [`decision-playbook.md`](decision-playbook.md)

Write all human-facing prep in English. Market terms (Secret, ITAR, S&OP, MRP, CAPA) kept and explained in place. Acronym expansions also live in [`cheatsheet.md`](cheatsheet.md) and [`hardware-primer.md`](hardware-primer.md).

---

## Recruiter-side risk map (internal)

| Potential doubt | Evidence | Fix in the room |
|-----------------|----------|-----------------|
| Can they do manufacturing buying/planning? | Plenty Senior Global Supply Manager: direct materials, CapEx, NetSuite bill of materials (BOM) / material requirements planning (MRP), sales and operations planning (S&OP), new product introduction (NPI), Supplier Quality | Lead Plenty. CAPA tub story. Comcast is supporting cast. |
| Overqualified / will bounce | Current title Senior Manager, Enterprise Procurement; hunt is Director+ | Say it: IC value-chain ownership on a line is the job you want; title inflation at Comcast is not the goal |
| Defense / maritime domain | None in cv.md | Transfer: spec, quality, lead time, containment. Do not fake hull design. |
| Logistics | Quincy on-site; you sit Richboro, PA; 25% travel; Secret eligibility | One location story, aligned with the HM you know |
| Comp mismatch | Posted $99–130K; you want $140K; profile walk-away $140K | Senior Buyer/Planner comps $129–171K; equity is extra; don’t open with the number |
| Generic Anduril fan | Easy to sound like Luckey/Lattice TED talk | Plenty manufacturing itch + Quincy/Quonset is real build + HM; skip geopolitics speech |

---

## Company profile

### Anduril (parent)

- **What:** US defense technology company. Sells **products** (autonomous systems + **Lattice OS** AI command-and-control) to DoD and allies — not a body-shop prime. [JD; Exponent company blurb; Wikipedia]
- **Founded:** 2017 · HQ Costa Mesa, CA (“The Press”). Founders: Palmer Luckey, Trae Stephens, Matt Grimm, Joe Chen, Brian Schimpf (**CEO**). [Exponent; Wikipedia]
- **Name:** Tolkien’s sword; ignore unless they joke first.
- **Scale (public round-numbers, not talking points to overclaim):** private company; Wikipedia cites ~7,000 employees (2026) and a May 2026 valuation figure — **do not recite valuation in interview**. Blind threads treat RSUs as illiquid paper. [Wikipedia; Blind]
- **Culture filter:** mission comfort with **defense / weapons**. Ambivalence gets screened. [Exponent; Design Gurus / interviewing.io]

### Maritime division (this job)

- **Origin:** Anduril acquired **Dive Technologies** (Quincy, MA) in **February 2022** and made it the maritime division. Dive’s DIVE-LD: large-displacement unmanned underwater vehicle (UUV / AUV), commercial off-the-shelf (COTS) internals, additive/composite hull story at founding. [Defense News 2022-02-02; CompositesWorld]
- **Job posting team blurb:** next-gen autonomous underwater vehicles (**AUVs**); ultra-long-range, full-ocean-depth; manufacturing architecture that scales **large → extra-large**; executing multi-million-dollar contracts **and** **Robot-as-a-Service (RaaS)** AUV operations. [Greenhouse JD]
- **This req’s org:** Greenhouse department **Manufacturing : Undersea Reconnaissance & Strike — Production**. Office **Quincy, MA (QCY-01)**. [Greenhouse API]
- **Dive-LD (public product facts):** ~5.8 m / 19 ft length, ~1.2 m / 4 ft diameter, depth on the order of **6,000 m**, modular payload (ISR, mine warfare, survey, cable/pipeline, etc.). [Anduril Dive-LD product page via secondary writeups; cite as public product sheet, not a spec you memorized from classified material]
- **Ghost Shark / Dive-XL:** Royal Australian Navy **A$1.7B (US$1.12B)** five-year program of record **10 Sep 2025** after ~A$140M co-development; LRIP then high-rate in 2026; Anduril Australia factory (Sydney). First production Ghost Shark rolled off in **Nov 2025**, RAN delivery targeted **Jan 2026**. Anduril says it self-funded Dive acquisition ahead of government paper and invested in AU manufacturing. [Australian Defence Ministers 2025-09-10; Anduril news “Ghost Shark Enters Program of Record”; Breaking Defense 2025-11-03]
- **Quincy vs Quonset (why your 25% travel and your BOM matter):**
  - **Quincy:** maritime engineering center / low-rate build + water. Brose has said Quincy is **out of space** vs Navy demand. Zero G (Jul 2026) relays ~12 Dive-LD hulls/year at Quincy (24 with extra shifts) — treat as **reported**, not a number you swear in court.
  - **Quonset Point, RI:** production factory, **~150,000 sq ft**, ribbon-cut **25 Aug 2025**, opening late 2025; public target **>200 hulls/year** class capacity; ~1 hour south of Quincy; chosen in part **for proximity to Quincy**. [Quonset Development Corp 2025-10-01; WJAR 2025-08-25; PBN on $8.3M facility]
- **Planning implication:** you will live in **NPI / low-rate / mixed RaaS+contract** demand in Quincy while volume tries to move to Quonset. Master data, common-vs-unique BOM, and shortage escalation across two sites is the job.

### What this Buyer/Planner actually does [JD]

Own the value chain **raw materials → assembly line → finished goods to customer**: demand forecast, inventory, purchase orders (**POs**) for production **and** R&D, material requirements planning (**MRP**) + item master, shortage firefighting, make/buy, sales and operations planning (**S&OP**), demand-planning KPIs, **bill of materials (BOM) literacy** so you can challenge a sales promise.

**Required:** 3+ years technical procurement in **manufacturing**; negotiation; cross-functional; read design spec; full value-chain ownership under quality constraints; **Oracle or similar enterprise resource planning (ERP)**; travel ≤25%; **Secret clearance eligibility**.

**Preferred (honest gaps):** engineering/supply-chain degree (you: **B.S. Agribusiness Management** — business/ag manufacturing, not ME); Lean/Six Sigma (**don’t claim**); Blue Yonder / statistical demand models (**don’t claim**); SQL (**don’t claim**); Tableau/Power BI/Qlik — **Power BI is in cv.md**.

---

## Process Overview

- **Rounds:** unknown for *this* Buyer/Planner req — not enough candidate write-ups. Company-typical (mostly SWE/TPM reports): **~3 stages**, **~3–4 weeks**, ~**28 days** average on Glassdoor per Exponent’s read of reviews. [Exponent]
- **Format (company-typical, SWE-weighted — adapt):** recruiter ~30 min → technical **or** hiring-manager ~60 min → onsite 3–4× ~60 min. Program/ops roles swap coding for execution/ownership. [Exponent; interviewing.io]
- **This search:** you **know the HM**. Likely HM-heavy; recruiter may still exist for logistics/comp/clearance. Do not skip recruiter prep.
- **Platform:** not stated in the posting; confirm before the call.
- **Difficulty:** Glassdoor **3/5** company-wide; **~47% positive** interview experience (hub page, 252 interviews, updated Jul 3, 2025). FAQ text: **Senior Buyer** interviews rated among the **hardest** Anduril loops (alongside Brand Designer). No public transcript of the Senior Buyer questions (Glassdoor login wall). [Glassdoor Anduril interviews]
- **Positive experience rate:** ~47% (Glassdoor hub). Not role-specific.
- **Known quirks:** “Why Anduril / why defense?” repeats; recruiters often know the team; few fully remote seats; visa/citizenship tight because export + clearance. [Exponent]
- **Sources:** Exponent Anduril interview process; interviewing.io; Glassdoor E3546800 interviews hub.

## Audience Map

- **Round 1** (recruiter / TA, ~30 min) → `recruiter-screen` [inferred from company pattern]
- **Round 2** (HM you know, ~45–60 min) → `hiring-manager` — **not inferred as peer-tech**; you already have an HM relationship
- **Round 3+** (operations / manufacturing / quality / planning peers, possibly on-site Quincy) → `peer-tech` or `panel-mixed` [inferred]

No named panelists provided — no Panel Intel names. If you get a calendar, paste it and we fill the table.

---

## Round-by-round

### Round 1: Recruiter screen — audience: `recruiter-screen`

- **Duration:** ~30 min [Exponent, company-typical]
- **Conducted by:** Anduril TA / recruiter (must be `@anduril.com` — JD scam warning)
- **Platform:** not stated in the invite, confirm before the call
- **What they evaluate:** mission comfort, why this team (maritime, not generic Anduril), clearance/citizenship, Quincy on-site, travel, comp ballpark, “do they understand this is buying **and** planning”
- **Reported questions:**
  - Why Anduril / why defense — [source: Exponent; interviewing.io]
  - Walk through background / what you want next — [source: interviewing.io recruiter call]
  - Qualms about defense industry — [source: interviewing.io]
- **How to prepare:** Print `cheatsheet.md`. One location story. Comp script. Do not volunteer Ramp/TNC play-by-play.

### Round 2: Hiring manager — audience: `hiring-manager`

- **Duration:** unknown for this req; company HM screens often ~60 min [Exponent]
- **Conducted by:** the HM you know (name on cheatsheet)
- **Platform:** not stated in the invite, confirm before the call
- **What they evaluate:** will you **own the line**; manufacturing judgment; won’t flee to a Director title in 9 months; can you talk BOM/shortage/quality without theater
- **Reported questions:** none attributed to *this* HM. Inferred from JD tagged below.
- **How to prepare:** CAPA story + 90-day. Ask what is on fire. Camera/lighting if video.

### Round 3+: Peers (MFG / Quality / Planning / Engineering) — audience: `peer-tech` [inferred]

- **Duration / platform:** unknown
- **What they evaluate:** MRP exceptions, safety stock vs expedite, vendor OTIF, reading a drawing/spec, S&OP with lumpy defense+RaaS demand
- **Reported questions:** no Buyer/Planner Glassdoor set retrieved. Adjacent Anduril supply-chain *guides* (not candidate-attributed) drill safety stock, stockouts, supplier KPIs, vendor delay — treat as **[inferred from JD / role archetype]**, not Glassdoor quotes.
- **How to prepare:** NetSuite MRP story (S4). CAPA containment sequence. Honest tool gaps.

---

## Likely questions (per audience)

### Recruiter-screen

**Walk me through your CV / why looking?**  
Use the open on `cheatsheet.md`. Plenty first. Comcast one sentence if asked. End on which lines you'd own and where shortages are.

**Comp?**  
~$140K base. Posted band is $99–130K. Senior Buyer/Planner has listed $129–171K. Scripts on the cheatsheet. If they only have this req's band, ask them to run it by the HM as senior-scope.

**Why Anduril / why maritime?**  
Cheatsheet has the short version. Core: manufacturing itch (Plenty) + Quincy/Quonset is real build + you know the HM + you're fine with defense. Not a Lattice TED talk. Not China talking points. [Exponent: "Why Anduril?" is a values filter; vague "I want a challenge" fails.]

**Are you comfortable with defense / weapons?**  
Yes, plainly. Bad material lots already taught you what "doesn't work" costs a customer. You're not looking for a soft consumer brand. Don't invent a military family bio.

**Location / remote / visa?**  
On-site Quincy (same story as the HM). No sponsorship. Secret: eligible, not current (unless you later confirm otherwise). Travel 25%: ask Quonset vs field-test.

**Timeline / notice?** ~30 days.

**Other processes?** You have some. This one is specific: manufacturing seat + HM. No company names unless pressed.

**Background:** Plenty → Comcast is fine. You're not hiding Comcast. You're just not leading with it.

### Hiring-manager

**Why this role, why now?**  
Plenty was direct materials, MRP, quality. Comcast is big-company category work. You want the factory job again, with someone you already trust, on vehicles that have to work.

**First 90 days?** Cheatsheet. Quincy vs Quonset and RaaS vs contract demand if that's in play.

**Overqualified / will you bounce?**  
At Plenty you *did* this job (with a bigger title). Comcast Senior Manager doesn't mean you want Director theater. You want ownership of the line. Don't promise a 10-year lock-in.

**Leadership:** S6 only if asked. This req isn't a people-manager posting.

**Questions:** cheatsheet list (BOM family, Quincy/Quonset, MRP health, quarantine owner).

### Peer-tech

All tagged **[inferred from JD]** unless noted.

- **Shortage to parts on the dock.** NetSuite MRP + call the supplier + loop in ops. Oracle: "Same job, different screens. I lived MRP in NetSuite. I'll learn yours in week one."
- **Safety stock vs expedite.** Demand is lumpy (AUV + RaaS). No Blue Yonder models: say so. Trade service level, cash, and lot constraints.
- **Supplier fails spec.** Tub story. Quarantine → good material in → vendor 100% → process review.
- **Make/buy.** Walk `decision-playbook.md`: process-dependent (COTS buy, printed hybrid, housings usually buy). Close with lead time, yield, volume, revision churn. No fake Anduril example.
- **BOM pushback to sales.** Plenty NPI + BOM ownership. "Can we actually promise that date?"
- **KPIs.** OTIF, shortage aging, inventory $, quality escapes, MRP exceptions. Power BI is in cv.md.
- **Lean/Six Sigma?** No belt. CAPA and process review is how you do the work.

**Ask them:** What does a bad shortage day look like? Who can stop a build? How often does engineering change the BOM after the PO is out?

### Panel-mixed

No names yet. Recruiter: fit + logistics. HM: you'll own shortages. Peers: containment mechanics. Don't play the same recall tape three times.

---

## Story bank mapping

| # | Audience | Topic | Story | Fit | Gap? |
|---|----------|-------|-------|-----|------|
| 1 | recruiter-screen | Why you / manufacturing proof | **S8** CAPA tub + **S5** 30% BOM | strong | — |
| 2 | recruiter-screen | Systems / ERP | **S4** NetSuite MRP | partial (not Oracle) | Name the gap; don’t fake BY/SQL |
| 3 | hiring-manager | Own a value chain under quality | **S8** + Plenty direct-materials scope | strong | — |
| 4 | hiring-manager | Cost without sounding auction-only | **S5** | strong | — |
| 5 | peer-tech | Containment / CAPA | **S8** | strong | Add $ or lot counts later if you remember them |
| 6 | peer-tech | Planning / S&OP | **S4** + S&OP line in cv.md | partial | No Blue Yonder |
| 7 | any | P2P / Coupa | **S1** | weak for this JD | Don’t lead with it |
| 8 | hiring-manager | Why leave / Director hunt | cheatsheet “why leave Comcast” | strong | — |
| 9 | recruiter-screen | Why Anduril / defense | cheatsheet Why Anduril block | strong | Swap in personal details if you have them; don’t invent military bio |

---

## Technical prep checklist

- [ ] Dive-LD vs Dive-XL / Ghost Shark — sizes, who buys (US vs RAN), don’t mix factories — why: HM will know if you blur Australia vs Quincy
- [ ] Quincy engineering/low-rate vs Quonset volume — why: JD site is QCY-01; travel 25%
- [ ] RaaS vs production-contract demand — why: in the JD team blurb
- [ ] MRP exceptions, item master, safety stock — why: JD “MRP and associated master data”
- [ ] CAPA sequence cold (quarantine / new lot / 100% / process) — why: your best manufacturing proof; JD quality + shortages
- [ ] BOM common vs unique across LD/XL family — why: JD BOM literacy; public “large to extra-large” architecture
- [ ] Make vs buy / change order / delay sequence (`decision-playbook.md`) — why: peer-tech will ask how you decide, not just what a thruster is
- [ ] Secret / ITAR / export questions on the Greenhouse form — why: application + eligibility
- [ ] Comp: $99–130 vs $140 vs Senior $129–171 — why: recruiter screen
- [ ] One location story with the HM — why: otherwise the loop is theater

Max 10.

---

## Company signals (per audience)

### Recruiter / HR

- **Volunteer:** Plenty manufacturing match, Quincy awareness, clearance eligibility, notice, $140K if asked.
- **Don’t volunteer:** valuation gossip; band insults; other companies’ details; takes on Luckey.
- **Words that sound like the job:** Dive-LD, Quonset, MRP, S&OP, shortage, BOM, Secret. Lattice once is enough.
- **They screen for:** visa surprise, “I need remote,” “I’m really a Director,” soft/weird defense answer.

### Hiring manager

- **Lead:** Plenty direct materials + the recall + you’ll own shortages.
- **Ask:** what’s broken in buy vs plan today; who owns material Quincy ↔ Quonset.

### Peer / technical

- **Lead:** how you ran containment with the vendor, not how you feel about autonomy.
- **Avoid:** Lean belts, SQL bravado, Oracle deep-admin, undersea engineering cosplay.
- **Ask:** who freezes a BOM; what a red shortage day looks like.

### Mixed panel

- Frame: Plenty manufacturing buyer/planner; Quincy AUV materials; HM already knows you.
- Don’t repeat the recall the same way three times.
- Don’t contradict yourself on location, $140K, clearance, or notice.

---

## Coffee Chat Cross-Reference

No coffee-chat note provided. HM relationship is **not** a coffee-chat file — treat as user-stated, unnamed. Skip table.

---

## Post-research

1. **Story gaps:** optional CAPA metrics if you remember them; Oracle vs NetSuite depth. Why Anduril / defense is drafted on the cheatsheet (manufacturing itch + real Quincy build + HM). Swap in personal details if you have them; don't invent a military bio.
2. **Interview date:** none given. When you have one, say so and we time-box a plan.
3. **`deep` mode:** optional if you want strategy/competitors (HII, GD Bluefin/Quincy neighbors, Navy Replicator). This pack is enough to interview the **seat**.
4. **career-ops:** system update available **v1.26.0 → v1.28.0**. Your CV/profile/tracker are not touched by that. Say if you want it applied.
5. **Tracker:** interview-prep from URL does not write `data/applications.md`. Ask if you want a row.

**Not done (on purpose):** tailored PDF, outreach, applying, naming the HM.
