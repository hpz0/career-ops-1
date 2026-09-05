# Anduril onsite brief (from Stephen)

**Source:** Your notes after talking with **Stephen** (friend / hiring manager). Treat as coaching for *this* loop, not public company facts.  
**Loop:** Onsite with **4–5 people** on the team.  
**Your book (per Stephen):** **Copperhead** + **Seabed Sentry**. Know Dive-LD / Shallow LD (**Alder**) as neighbors, not your primary ownership claim.

**Labels in this file**
- **[Stephen]** = what he told you to emphasize or how the seat works
- **[cv / story-bank]** = backed by `cv.md` or locked stories
- **[fill]** = plausible Plenty detail you should confirm or rewrite in your voice before the loop
- **[public]** = Anduril product pages / open press (safe to say at a high level)
- **[typical]** = normal manufacturing buyer/planner practice (not Anduril-specific)

**Pair with:** `cheatsheet.md` · `prep.md` · `hardware-primer.md` · `decision-playbook.md` (if present)

---

## 60-second open (retuned for this onsite)

> I’m Harrison. The chapter that matches this seat is Plenty. I was Senior Global Supply Manager on a real manufacturing line: I designed our procure-to-pay operating model, stood up NetSuite BOMs and MRP with inventory / safety stock so we weren’t flying blind, and I owned complex BOM work myself — engineering BOM into manufacturing BOM, demand and supply planning, and change control when the design moved.  
>  
> Stephen and I talked about Copperhead and Seabed Sentry. That’s the work I want: long-lead hedges while trade studies are still open, more off-the-shelf where we can, less sole-source pain, and common electronics so planning isn’t inventing a new supply chain per vehicle. I’m here to learn how this team runs shortages and who owns the call when a finish spec isn’t locked yet.

Keep Comcast to one sentence if asked. Don’t lead with it.

---

# Part 1 — What Stephen wants you to highlight (Plenty)

These are *his* prompts. Below each: what you can say, what’s proven, and blanks to close.

## 1. Designed P2P (procure-to-pay)

**Why they care:** Shows you can build an operating system, not only firefight POs. Use lightly on this seat — materials is the hero — but it proves process ownership.

**What to say (locked facts)** [cv / story-bank S1]
- Led Coupa P2P end-to-end: approval workflows, catalogs, punchouts.
- **No-PO-No-Pay** with threshold / emergency exceptions designed in (not a blunt gate).
- Published / enforced Procurement Policy; managed **3 buyers**.
- Results you can use: **99% of spend on contract**; req cycle **3 days → 1.5**; e-invoice **+50%**; Coupa corporate noticed the punchout build; you were a **Coupa certified admin ~5 years**.

**One-liner**
> I didn’t inherit a clean P2P. I designed the path: Coupa, policy, No-PO-No-Pay with real exceptions, catalogs and punchouts — and we got 99% on contract while cutting cycle time in half.

**Don’t:** turn the onsite into a Coupa admin interview. Bridge back to materials in one breath.

---

## 2. NetSuite MRP and safety stock

**Why they care:** JD / seat is buyer **and** planner. MRP exceptions and inventory policy are the daily language.

**What to say (locked)** [cv / story-bank S4]
- Manufacturing inventory was manual / not scalable.
- You implemented **NetSuite BOMs, MRP, and inventory management** inside the existing ERP.
- Cross-functional with ops / quality / procurement.
- Outcome language: dynamic MRP, better spend visibility and throughput (no fake site count).

**Safety stock — how to talk without inventing a service-level model** [Stephen + typical; confirm your memory]

Stephen specifically called this out. You don’t need Blue Yonder. You need a decision frame:

1. What fails the build if it’s late? (red parts)
2. Is demand lumpy or steady?
3. Is the part revision-stable? (safety stock on a moving rev is scrap with a label)
4. Cash vs idle line / missed test window
5. What does MRP say vs what the floor knows?

**Script**
> In NetSuite we stopped managing inventory out of spreadsheets. MRP told us what to buy and when; safety stock was for the parts that killed the line when they went to zero — not a blanket buffer on everything. I’d set it with ops based on lead time, scrap, and how ugly demand was, then clean the item master so the system wasn’t lying.

**[fill] before onsite — write one real example**
- Part family you buffered: _______________________
- Why (lead time / sole source / scrap / launch spike): _______________________
- What you watched (stockout, expedite cost, excess): _______________________

If you can’t remember a part name, use the *method* above and say so. Don’t invent SKUs.

**Bridge to Anduril** [Stephen]
> Same problem when a trade study is open: you may place a raw / long-lead buy before finish specs lock, then finish or machine once engineering freezes. That’s a planned hedge, not panic expediting.

---

## 3. Built complex BOMs (mBOM & eBOM), demand consolidation, planning, change control

**Why they care:** Stephen said you did this yourself. Copperhead / Sentry want someone who can read and challenge a BOM, not wait for a planner.

### Vocabulary (say the words)

| Term | Plain English |
|------|----------------|
| **eBOM** (engineering bill of materials) | How engineering defines the product (design view). |
| **mBOM** (manufacturing bill of materials) | How the floor builds it (buy, make, kit, sequence). |
| **Demand consolidation** | Roll need across similar BOMs / configs so you buy once for shared parts instead of siloed forecasts. |

**What to say (directionally locked)** [cv: NetSuite BOMs + NPI + 30% BOM cost; Stephen: you owned eBOM→mBOM, demand + supply planning, change mgmt]

> I owned the BOM work in NetSuite — not as a spectator. Engineering released design; I translated that into a manufacturing BOM we could plan and buy against. When we had like configurations, I consolidated demand on the common parts so MRP wasn’t fragmenting the buy. When the design changed, I ran the change through planning and supply — open POs, inventory disposition, effectivity — not just an email that said “new rev.”

**Demand consolidation → Anduril commonality** [Stephen]
> Stephen’s point: commonality is mostly **tier 2** (electronics, boards). That’s exactly where consolidation matters. Same board across Copperhead and Sentry variants? One forecast, one buy, clearer safety stock, less sole-source drama if you can dual-qualify.

**30% BOM cost (use as backup, not the open)** [cv / S5]
- Negotiation + value engineering + supplier optimization + S&OP demand planning, **in ~6 months**.
- Don’t lead every room with it. Use when they ask about cost / VE / commercial muscle.

**[fill] one concrete BOM example**
- Product / cultivar / line: _______________________
- What made the BOM “complex” (levels, options, packaging, equipment): _______________________
- Shared parts you rolled up: _______________________
- Change that hurt (rev after PO): _______________________

---

## 4. NPI + change management (Plenty “new cultivar” framing)

**Stephen’s framing:** introduce a new **cultivar** with engineers and scientists → **design validation test (DVT)** → associated change management → strategic procurement.

This is your closest analog to Anduril **open trade studies** + NPI on Copperhead / Sentry.

### Story skeleton (fill blanks; don’t invent metrics)

| Beat | Say this | Your blank |
|------|----------|------------|
| **S** | Plenty was launching / changing a grow configuration — new cultivar (or material set) with R&D / science + engineering. | Cultivar or program name: __________ |
| **T** | Get from concept to something we could buy and build without starving the line or freezing forever. | Your ownership line: __________ |
| **A — DVT** | Design validation test: what has to pass before we scale buy. Sit with engineers/scientists on specs that drive suppliers (material, tolerance, packaging, process). | What was validated: __________ |
| **A — procurement** | Strategic buy: long-lead vs finish, sole source risk, incoming quality, dual path if we could. | What you bought early vs held: __________ |
| **A — change mgmt** | When DVT moved the design: effectivity, scrap/rework, PO intercept, mBOM update, tell ops. | One change that landed late: __________ |
| **R** | Launch / change landed with a plan, not a surprise shortage. | Result you can defend (even qualitative): __________ |

**Proof anchors you already have** [cv]
- Embedded sourcing early in **NPI** cycles for faster launches.
- Partnered with Supplier Quality (FDA/SQF context).
- NetSuite BOM/MRP was the system of record for the plan.

**Anduril translation (say this in the room)** [Stephen]
> At Plenty a new cultivar was an NPI: scientists and engineers still learning the design, DVT not done, and me trying to feed production. Stephen described the same pattern here — open trade study, long leads that won’t wait for the PowerPoint to finish. I’d place the raw / long-lead order to cut calendar time, then finish to the locked print when it lands. Cash and scrap risk are real; the alternative is a zero-inventory miracle that misses water test.

---

# Part 2 — Role map (what Stephen said about the work)

## Product map

| Name | What it is (high level) | Your posture |
|------|-------------------------|--------------|
| **Dive-LD** | Large-diameter AUV family [public] | Neighbor / context. Don’t pretend you own the whole LD book unless they say so. |
| **Shallow LD (Alder)** | Shallower LD variant / effort [Stephen] | Know the name. Ask how BOM/planning splits from deep LD. |
| **Copperhead (Toledo)** | High-speed AUV family; mass-production intent [public + Stephen] | **This role.** Toledo = how Stephen referred to it (site/program — confirm in room, don’t invent). |
| **Seabed Sentry** | Seafloor sensor node network [public + Stephen] | **This role.** Different shape than an AUV; same pain: housings, power, electronics, connectors, long loiter. |

**Public one-liners (safe)**
- Copperhead: high-speed undersea vehicles (incl. munition variants in public materials); built for delivery from autonomous platforms; Lattice-linked family story. [public]
- Seabed Sentry: AI-enabled seabed sensors for persistent awareness; modular / deployable with AUVs in public messaging. [public]

**Don’t:** recite Ghost Shark Australia pricing as if it’s your factory.

## Design / sourcing intent for *your* lines [Stephen]

1. **More OTS (off-the-shelf), less sole source**
2. **In-house design ownership** (so you’re not stuck with a black-box vendor design you can’t dual-source)
3. **Commonality mostly at tier 2** — electronics, boards — not necessarily the whole vehicle looking identical

**Interview implication:** your best stories are dual-source / qualify alternate / consolidate common boards / push engineering toward a buyable standard part — not “I love custom.”

**Script**
> If commonality lives in boards and electronics, that’s where I’d spend planner brain: one item master, one forecast rollup, dual path where we can, and hard questions when someone wants a unique board for a soft reason.

## Open trade studies + long-lead hedge [Stephen]

**Pattern he described**
1. Component trade study still open (finish process, plating, vendor, exact dash number, etc.).
2. Raw / long-lead material still has a clock.
3. **Buy the raw (or the long-lead blank) now** to burn lead time.
4. **Finish / machine / coat after** the spec freezes and the material is on the dock.

**How you decide (steal from decision-playbook logic)** [typical]
- How stable is the *material* vs the *finish*?
- What’s the cost of being wrong (scrap, rework, wrong alloy)?
- Who signs the risk (engineering + you + finance)?
- Can you buy a blank that serves both trade-study options?
- What’s the drop-dead date for the next build / test?

**Script**
> I wouldn’t wait for every finish callout before I move a 20-week melt or a specialty board fab slot. I’d write down the hedge: what we’re buying, what we’re *not* assuming, who owns scrap if the study picks the other path, and when we stop. Then I’d put the PO in and keep engineering on a decision date.

**Plenty bridge:** cultivar / DVT material that changed midstream; you still had to feed the line. [fill with your example]

## DPAS (you wrote “DPAS”) — say it right

**Correct name:** **DPAS** = **Defense Priorities and Allocations System** (often talked about with **rated orders**, DO/DX). [public]

**What Stephen meant in buyer language** [Stephen + public]
- Some defense buyers can put a **priority rating** on orders so suppliers must prioritize those deliveries over unrated commercial work.
- If Anduril is often **unrated / without that hammer**, big primes with rated demand can **jump the queue** on the same scarce parts.
- He called out painful components (you wrote **CSAG** + **atomic clock**). Most likely he meant **CSAC** (**chip-scale atomic clock**) — precision timing parts that are long-lead and capacity-constrained. **Confirm the acronym with him**; don’t correct him in the panel if he says CSAG — ask privately.

**How to talk about it without policy cosplay**
> I get that we’re competing for the same constrained parts as players who can rate orders. If we don’t have DPAS leverage, the buyer job gets more about relationship, forecast honesty, early POs, dual source, and buffers — not waiting in line hoping. I’d want to know which Copperhead / Sentry components are in that fight today.

**Ask Stephen’s team**
- Which parts lose to rated demand most often?
- What’s the playbook when a supplier slips us for a rated customer — split, premium, redesign, second source?

---

# Part 3 — How to play a 4–5 person onsite

You won’t get names until the calendar lands. Assume a mix. Rotate proof; don’t play the tub recall four times the same way.

| Likely hat | What they probe | Lead with | Have ready |
|------------|-----------------|-----------|------------|
| **Stephen / HM** | Ownership, judgment, you’ll stay | Copperhead + Sentry ownership; trade-study hedge; Plenty NPI/cultivar | Comp / Quincy only if he opens it |
| **Peer buyer** | POs, suppliers, expedite, OTS vs custom | Dual-source / sole-source push; CAPA containment | One shortage war story |
| **Peer planner** | MRP, safety stock, BOM, commonality | NetSuite MRP + demand rollup on shared boards | Item master hygiene rant (short) |
| **Engineering / NPI** | Can you keep up with open studies | Buy raw now / finish later; eBOM→mBOM; when you push back | Cultivar DVT story |
| **Quality / manufacturing** | Escapes, quarantine, floor reality | Tub CAPA sequence | Who freezes a bad lot here? |
| **Ops / program** | Dates, customer promises | “Can we actually promise that?” BOM literacy | S&OP / lumpy demand |

**Rotation rule:** CAPA once fully. Other rooms get the short version or a different angle (cost, planning, NPI).

---

# Part 4 — Steal-these answers (mapped to Stephen)

### “Walk me through how you’d support an open trade study.”
> Confirm what’s frozen vs open. If the long-lead is the material or a fab slot, I’d rather buy the hedge with a written scrap owner than lose twelve weeks. Finish when the dash number locks. I’d keep a decision date on engineering and update the mBOM the same day so MRP stops planning fiction.

### “How do you think about commonality?”
> Stephen said it’s mostly tier-2 electronics. I’d hunt shared boards and connectors across Copperhead and Sentry, one forecast, one safety-stock policy, and I’d push unique part proliferation when it’s preference not requirement.

### “Tell me about MRP / inventory.”
> NetSuite: BOMs, MRP, inventory after we left manual. Safety stock on line-killers with ugly lead times; not a blanket. Clean master data or the exception pile is noise.

### “Have you done NPI with technical teams?”
> Plenty new cultivar: engineers and scientists, DVT, then I bought and planned against a moving design. Change management was half the job — intercept POs, disposition material, update the manufacturing BOM.

### “Why not stay in big-company procurement?”
> Comcast is real scale. This seat is Copperhead and Sentry materials — factory work with someone I already trust. That’s the job I want.

---

# Part 5 — Questions to ask *them* (pick 2–3 per room)

1. For Copperhead and Seabed Sentry, which BOMs do I own day one, and what’s still with LD / Alder?
2. Where are the open trade studies right now, and who signs a raw-material hedge before finish specs lock?
3. Which tier-2 electronics are actually common today vs still unique by vehicle?
4. What’s the top part that loses to DPAS-rated customers, and what’s the current workaround?
5. Toledo / Alder — how should I talk about those in planning (site, program, BOM split)?
6. Oracle (or whatever ERP): how healthy is item master / MRP exception hygiene?
7. When engineering changes a board mid-build, who calls effectivity — and how fast does the PO get intercepted?

---

# Part 6 — Night-before checklist (fill the blanks)

- [ ] HM name on cheatsheet = **Stephen** (confirm spelling he uses at work)
- [ ] Cultivar / NPI story blanks filled (Part 1.4)
- [ ] One safety-stock example or honest “method-only” line
- [ ] One demand-consolidation example (shared packaging / shared grow hardware / shared MRO — whatever was real)
- [ ] Confirm **CSAC vs CSAG** with Stephen offline
- [ ] Products cold: Copperhead, Seabed Sentry, Dive-LD, Shallow LD (Alder), Quonset vs Quincy
- [ ] CAPA sequence cold (quarantine / new lot / 100% / process)
- [ ] Trade-study hedge script out loud once
- [ ] Comp / location story still aligned with Stephen (don’t freestyle with the panel)

---

# Honesty box

Stephen’s coaching is a gift. It is not a script to recite as if you sat in their standups.

- Don’t claim DPAS policy expertise you don’t have.
- Don’t invent CSAC lead times or Anduril’s real sole sources.
- Don’t upgrade Plenty stories with numbers that aren’t in `cv.md` / story-bank.
- Do show the *decision muscle* he already told you they need: hedge long leads, consolidate common electronics, run change control, keep the line fed.
