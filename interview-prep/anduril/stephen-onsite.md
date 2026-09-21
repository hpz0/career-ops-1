# Anduril onsite prep: Buyer/Planner (Quincy)

**Role:** Buyer/Planner · Copperhead + Seabed Sentry (per Stephen)  
**HM:** Stephen  
**You:** Harrison Pizzi · Plenty manufacturing buyer (direct materials) → Comcast enterprise procurement  
**Comp ask:** $140K base (posted $99–130K; Senior bands have listed higher)  
**Also:** `loop-schedule.md` (Mon/Thu interviewer map) · `cheatsheet.md` · `from-2024-prep.md` · `story-bank.md` · `decision-playbook.md` · `hardware-primer.md`

This is one document you can prep from. Say the scripted answers out loud until they sound like you, not like a page.

**Loop:** Jamie Lichay (Mon) · Robbie Collins · Kyle Davis · Stephen Shaw (Thu). Room cards live in `loop-schedule.md`. Keep answers ~90–120 seconds in the 30-minute blocks.

---

# 1. What this job is

You buy and plan materials for **Copperhead** and **Seabed Sentry**.

- **Copperhead:** high-speed undersea vehicles (mass / production intent). Stephen called the effort **Toledo**.
- **Seabed Sentry:** seafloor sensor nodes. Different shape, same supply problems (housings, power, electronics, connectors, long leads).
- **Dive-LD / Shallow LD (Alder):** neighbors. Know the names. Don’t claim you own them unless they say so.
- **Quincy:** engineering, low-rate build, design changes, water access. Your 2024 note: R&D / Sentry / Copperhead / Dive changes live here.
- **Quonset:** volume factory ~1 hour south. Material ownership across sites will matter.

Stephen’s priorities for these lines:
1. More **off-the-shelf**, less sole source
2. **In-house design ownership** (so you’re not stuck with a black-box vendor design)
3. Commonality mostly at **tier 2** (boards, electronics), not the whole vehicle looking identical
4. **Open trade studies:** burn long-lead time by buying raw / blanks before finish specs lock
5. **DPAS gap:** primes with rated orders can jump the queue on scarce parts (timing / atomic-clock class components)

You are not interviewing to sound like an ME. You are interviewing as someone who has already owned **direct materials, BOMs, MRP, NPI, quality escapes, and low-volume supplier contracts** in a real factory.

---

# 2. Opening (60–75 seconds)

**Source of truth:** master `cheatsheet.md` §1.

> I’m Harrison. Most of my career has been in procurement and supply chain, a lot of it tied directly to manufacturing.
>
> Before Comcast I was Senior Global Supply Manager at Plenty. I owned direct materials end to end — BOMs and MRP, inventory and planning with ops, CapEx and tooling, and supplier quality issues that could stop a line. We took about 30% out of BOM cost in six months, so I spent a lot of time balancing cost, supply, quality, and production at once. I was deep in the systems too — NetSuite, Arena for BOM and change control, Coupa.
>
> I’m at Comcast now managing wireless and fixed network categories. Big spend, complex suppliers, heavy commercial work. I’ve kept building on negotiation and supplier management there.
>
> What I want next is to get back closer to the hardware and the production environment — where procurement decisions show up in what actually gets built. That’s what drew me to this role and to Anduril’s maritime business. I can bring the commercial and supplier muscle from Comcast plus the hands-on manufacturing and planning from Plenty, and put it closer to the product.

Stop. Let them steer. Don’t dump the recall, ETQ, or Stephen in the open.


# 3. Why Anduril (one answer)

**Source of truth:** master `cheatsheet.md` §2.

> The thing that attracts me about this seat is how close it is to the product. At Comcast I manage complex categories, negotiate, drive cost, and work through supply issues at scale. I’m good at that. What I want next is an environment where procurement isn’t just supporting the business — it’s directly enabling production.
>
> I want to be closer to the hardware, engineering, suppliers, and the manufacturing process. I’ve had real impact at Comcast, and I’m ready for more ownership and more speed — somewhere the supply chain actually matters to the mission. Anduril is trying to get advanced hardware to warfighters faster and break the old cost-plus model. I believe that. Maritime is a startup inside Anduril. Deadlines are real. Copperhead and Seabed Sentry is the book I want to own.

**If they only ask why leave Comcast:** stop after paragraph one.

**No engineering degree**
> I’m not an ME. I still sit with engineers on specs, SOWs, and what the floor can actually buy. I don’t design the part. I turn the requirement into a buyable plan and keep material moving when the drawing changes.

**Commodity gap**
> At Plenty most of my directs were farm inputs, packaging, and CapEx/tooling, plus spares BOMs with eng. I haven’t lived foam or electronics as a commodity buyer. I have lived technical BOMs, MRP, NPI with engineers, quality escapes, and low-volume contracts. Different parts. Same job.


# 4. Stephen’s themes (full stories)

These are the themes he told you to lead with. Each one has a real Plenty example.

## 4.1 Procure-to-pay / systems ownership

**Use when:** “Have you built process?” or they doubt you can operate without hand-holding. Keep it short. This seat is materials first.

**Story**
> When I started at Plenty, procurement was slow and opaque in NetSuite. I led the Coupa standup in about seven weeks: workflows, policy, No-PO-No-Pay with real exceptions, roughly fifteen punchout catalogs, supplier info management. We got to about 99% of spend on contract and cut req cycle time from three days to one and a half. I was a Coupa admin for years and became the NetSuite reporting person my Supply Chain Director leaned on.
>
> I’m not applying to be your Coupa owner. It just shows I can build an operating system when one doesn’t exist, then go back to materials.

## 4.2 NetSuite MRP, inventory, safety stock

**Use when:** planning, shortages, “how do you decide buffers?”

**Story**
> Inventory was manual. I put BOMs, MRP, and inventory management into NetSuite so the system could drive what to buy and when. Safety stock wasn’t a blanket buffer. It was for the parts that kill you: long lead, sole source, high stockout cost. I’d sit with ops, pick those, set a number, and keep the item master honest. If lead times and revs in the system are wrong, MRP just creates noise.
>
> On Copperhead and Sentry I’d start the same way: which parts stop a build or a water test, how stable is the rev, what’s the cash vs idle-time trade, and is the item master trustworthy.

**Low-volume bridge (Stephen loves this)**
> Plenty was high-mix, low-volume a lot of the time. We couldn’t always hit MOQs. On seeds we used an annual forecast with either a restocking fee or rolling volume into the next year. On nutrients we used warehouse stocking and similar commercial structures. Supplier choice wasn’t just unit price. It was cost of quality and cost of a stockout. That’s the same problem on early maritime builds.

## 4.3 Commonality / consolidation (Base A / Base B nutrients)

**Use when:** commonality across Copperhead/Sentry, SKU sprawl, “how do you simplify a BOM,” working with eng/scientists on shared vs unique.  
**Do not use as:** your answer to “how do you buy a technical BOM.” Wrong tool.

**Story**
> Nutrient recipes were exploding. Every cultivar had its own mess of parts and changeovers. I worked with plant science and engineering to build a Base A and Base B nutrient that could start every cultivar. Then they fine-tuned with micro and macro nutrients per cultivar as needed.
>
> That cut the SKU noise, cleaned the forecast, and cut changeover about 20%. Shared base, variant top-up. Same idea Stephen described on boards and electronics across Copperhead and Sentry: share what you can, make uniqueness earn its keep.

**Also have ready:** spares BOMs with eng (manifolds, harnesses, conveyors). Rev change after PO: intercept, disposition dock, update mBOM same day.

## 4.4 NPI / working with engineering (pick the right story)

### A. Cold plasma (Plenty) — use for quality problem → early tech → vendor development

**Best for:** Jamie/Stephen on ownership and spotting issues early. Fine for Robbie if you frame it as sourcing/process, not as you inventing the physics.

**Story**
> Our seeds weren’t clean enough. Pathogens were getting into the grow. I stayed on emerging seed-cleaning tech and found vendors doing early cold plasma work that cleaned exceptionally well without hurting plant growth.
>
> I brought early prototype equipment in-house, built test plans with the team, and worked the vendor hard on our requirements: kill specific pathogens, hit cleanliness counts. We refined the machine until it met what we needed. That’s not me playing scientist. That’s a buyer owning a quality problem, finding the tech, and dragging a young vendor up to a real production standard.

### B. Network disaggregation (Comcast) — use for technical specs + OTS vs custom with engineering

**Best for:** Robbie or anyone asking “have you bought against a technical spec / NPI with eng?” Often cleaner than cold plasma for a sourcing engineer.

**Story**
> At Comcast we’re pushing network disaggregation: separate the software stack from the hardware box so you’re not locked to one vendor’s appliance.
>
> I worked with engineering on the hardware requirements: capacity/throughput, form factor, power and thermal, port types and speeds, management interfaces, and whatever else eng needed for the software to land clean. Then I took that to market. Built-to-spec boxes and off-the-shelf boxes that could meet the need. Multiple vendors competing against a real spec instead of one OEM’s black box.
>
> That’s the buyer half of NPI: help eng write something buyable, then bring options that fit.

**Rule:** One NPI story per room. Don’t stack cold plasma + Comcast + hydrogel.

### C. Seed / grow-media sanitation process (Plenty) — use for building a floor process

**Best for:** Jamie / Janine / Stephen when they ask “built a process?” Better than Coupa for manufacturing change control. Robbie backup only.

**Story**
> Seed and grow-media sanitation started as an outside service. I worked change control with engineering and plant science to bring it in-house and put it in-line — same family of work as the cold plasma cleaning.
>
> Dirty / raw under one NetSuite part number. Work order for disposition and cleaning. Clean material received back under a differentiated part number so the system couldn’t treat dirty and clean as the same thing. Planning had to respect throughput, capacity, and how long clean stayed inside our specs.
>
> Outside service → in-house capability. Process + inventory truth + timing to the build.

## 4.5 Quality escape / CAPA

**Use once fully. Shorten in later rooms.**

**Story**
> Tub packaging went brittle. Plastic started chipping into product. It became a recall.
>
> We quarantined the bad material, got conforming lots in so the line wasn’t dead, put the vendor on 100% inspection as containment, and ran a process review so the next lots didn’t repeat it. I partnered with Supplier Quality. At Plenty that supplier-quality / SCAR / CAPA work lived in **ETQ**. It wasn’t a PO complaint thread.
>
> Same sequence if a resin, seal, foam grade, or board lot fails here. Contain, feed the line, then fix the cause.

Related packaging win if they stay on packaging:
> Separately we moved clamshell to tub and cut plastic about 40% on that change. I also wrote an internal white paper on plastic use. Different problem than the recall, same commodity family.

## 4.6 Manufacturing constraint / tooling

**Use with manufacturing or ops.**

**Story**
> Postharvest bottleneck was the sealer. I owned packaging tooling and materials around that constraint: internal sealing and denesting, external thermoform tools, and materials that raised throughput at the sealer. I’m not a lean black belt. I do know how to buy against the actual constraint on the floor.

## 4.7 Mistake / pressure / disagreement (have ready)

**Mistake**
> I double-ordered a low-value PO because it wasn’t marked ordered. I owned it and built filters and views so open vs ordered couldn’t hide in the queue. Small dollars. Process mattered.

**Pressure**
> During COVID, masks, sanitizer, and test kits were scarce. I used supplier relationships and partnered with our lab provider to get kits when the market was chaos. When allocation is real, relationships and early demand beat blasting RFQs into the void. That’s relevant if you’re competing with DPAS-rated buyers for the same parts.

**Disagreement**
> Someone said lab testing cost too much. I ran internal vs external cost, brought the data, and we changed the path. Disagreeing is fine if you bring numbers.

---

# 5. How you’d actually do the Anduril work

This is the part that gets you hired. Not vibes. Judgment.

## 5.1 Open trade study + long-lead hedge

**What Stephen described:** finish specs still open; raw / long-lead clock already running; buy raw now; finish later.

**How you’d run it**
1. What’s frozen vs open? Material grade vs plating vs vendor vs dash number.
2. What’s the drop-dead date for the next build or test?
3. Can one blank / raw serve both trade-study options?
4. Scrap risk if engineering flips: who signs, what’s the $ exposure?
5. Put the PO in. Put the decision date on engineering. Update the mBOM the day the finish locks.

**Say**
> If the long lead is twenty weeks and the finish callout is still in trade study, I’m not waiting for the PowerPoint. I’d buy the blank or raw that covers the likely options, document what we’re not assuming, name who owns scrap if the study flips, and keep engineering on a decision date. Then when the print locks, we finish. MRP has to get updated the same day or we’ll keep planning the wrong thing.

**Plenty / Comcast parallel (if they ask for proof you’ve done the motion)**
> Trade-study hedges map to buying long-lead equipment while requirements were still tightening (cold plasma prototypes, packaging tools). Spec-driven multi-vendor buys map to Comcast disaggregation: eng writes a buyable spec, I bring built-to-spec and OTS options.

## 5.2 Make vs buy (short, confident)

> It depends on the process. Off-the-shelf connectors, fasteners, a lot of electronics: buy. Qualify, dual source if it can kill schedule. Printed mounts while engineering is still iterating: control close to home if we can. Specialty foam, batteries, atomic-clock class timing parts: buy from people who already live in that world. Final integration: make. Make never means “no buying.” It means we still buy feedstock, hardware, and long-lead components.

## 5.3 Engineering change after the PO is out

> First questions are effectivity and what’s already bought. Can we use the old rev, rework it, or is it scrap? Freeze outgoing POs if the old rev is dead. Disposition dock and WIP. Change or cancel open orders. Update the manufacturing BOM the same day. First good new part through incoming before we kit a pile of vehicles on a fantasy rev.
>
> At Plenty that change traffic lived in **Arena** (PLM) and often in **ETQ** for quality/change control. I used both day to day. The system name isn’t the point. Intercepting the buy before we keep ordering the dead rev is.

Printed bracket changes are annoying and usually recoverable. Machined housings and pinout changes are schedule killers. A connector pinout change after harnesses are on order is basically a new part.

## 5.4 Shortage morning

> Confirm it’s real. Wrong lead time and unreceived dock inventory fake a lot of shortages. If it’s real, call the supplier the same morning for a hard date, split, or expedite quote. Ask manufacturing if we can build around it. Quality if someone wants a substitute. Then fix why the system didn’t see it last week.
>
> Oracle vs NetSuite: same job, different screens. I lived MRP in NetSuite. I’ll learn yours.

## 5.5 DPAS / allocation disadvantage

**DPAS** = Defense Priorities and Allocations System. Rated orders (DO/DX) can legally jump unrated work at suppliers.

**Say**
> If a prime can rate an order and we can’t, the supplier will feed them first when capacity is tight. You don’t whine about it. You get closer to the supplier, put honest demand in early, dual source where you can, and hold buffer on the parts that stop a vehicle. Stephen mentioned timing / atomic-clock class components as painful. I’d want to know which Copperhead and Sentry parts are losing to rated demand today and what the current workaround is.

(Your notes said “CSAG.” Likely **CSAC**, chip-scale atomic clock. Confirm with Stephen privately. Don’t correct him in panel.)

## 5.6 OTS / sole source / commonality

> If the goal is more off-the-shelf and less sole source, I spend time in design reviews before the unique part is sacred. Shared boards across Copperhead and Sentry should be one item, one forecast, ideally two qualified sources. In-house design ownership matters because a black-box vendor design is how you stay sole-sourced forever.

## 5.7 Buying strategy when you’re handed a technical BOM

**This is the answer to practice until it’s automatic.** Recruiter flagged it. You don’t need to have lived every AUV commodity. You need a clear method.

### What you do, in order

1. **Get the packet, not just the PDF.** Drawing/rev, specs, qual requirements, qty, need date / build date, make vs buy notes if any, approved vendor list if it exists, open trade studies. In PLM if that’s where truth lives (**Arena** at Plenty).
2. **Sanity-check the data.** Missing rev, TBD callouts, “ref vendor” with no second source, lead time blank, qty that doesn’t match the build plan. Those are issues, not paperwork.
3. **Sort every line into buckets:**
   - **Critical path / long lead** — batteries, boards, housings, specialty materials, anything that can miss the build
   - **COTS / standard** — fasteners, connectors, many electronics; dual-source if a miss hurts
   - **Custom / controlled** — machined, molded, unique boards; eng stays in the loop
   - **Soft / incomplete** — finish TBD, dash TBD, “or equivalent”; do not pretend it’s buyable yet
4. **Run a risk pass before you PO.** Lead time vs need date. Sole source. MOQ vs real demand. Rev stability. Spec the supplier can’t actually hold. Anything that fails goes back to eng/program the same week with options (OTS alt, hedge buy, dual source, change the date).
5. **Build the buy plan.** Long lead and critical path first. Set buffers only where a miss kills the line or the test. Put POs in. Put decision dates on open studies. Load clean lead times and revs into MRP so the system isn’t folklore.
6. **Stay in the loop after the PO.** Watch confirmations, slip risk, and ECO traffic in PLM. If the rev moves, intercept. Don’t forward an email and hope.

### Say it (90–120 sec)

> If you hand me a technical BOM today, I don’t start by issuing POs. I read the whole packet: rev, specs, qty, need date, what’s still in trade study. At Plenty that lived in **Arena** for BOM and change control, and I used it day to day, not just as an implementer.
>
> Then I sort it. Critical path and long lead first. COTS that should be dual-sourced. Custom that needs engineering in the room. Soft callouts that aren’t buyable yet. Missing lead times, sole source, TBD finishes, revs that don’t match the build: those get flagged the same week, with options, not a shrug.
>
> After that I buy to the plan: long lead first, buffers only on parts that stop a build or a test, clean item master so MRP isn’t lying. And I stay on it after the PO goes out, because the drawing will move.
>
> At Plenty I owned turning engineering intent into something we could actually plan and buy, and I intercepted when revs changed mid-order. At Comcast I’ve done the spec-to-market version on disaggregated network hardware with engineering. Different parts. Same method.

### What “good” looks like to them
- You use **all** the info you’re given
- You **spot issues in the parts** before shortage day
- You can talk **buckets and sequence**, not vibes

## 5.8 Spot issues in the parts (before the fire)

> The job isn’t clearing a queue. It’s reading the BOM and the open PO book and asking what fails next. Long lead vs need date. Sole source with no backup. Spec we can’t buy. Wrong buffer. Rev drift. If I only move when the line is already short, I’m late.

**Plenty proof:** seed pathogen problem → found cold plasma early → requirements and test plans with the vendor before it became a bigger grow failure.  
**Comcast proof:** Nokia 90-day vendor hold = stockout risk designed out of the contract before it hit deployment.

---

# 6. Room plan (named loop)

Full cards: `loop-schedule.md`. Rotate stories. Do **not** tell the full recall four times.

| Room | What they care about | Lead with | Have ready |
|------|----------------------|-----------|------------|
| **Jamie Lichay** (Mon) | Desk-ready buyer/planner | MRP + safety stock · technical BOM method | Short recall · Base A/B commonality |
| **Robbie Collins** | Sourcing eng / high-speed AUV supply | Comcast disaggregation NPI **or** cold plasma | Trade-study hedge · sole source |
| **Kyle Davis** | Confirm his seat in minute one | Match to MFG / quality / planning | Independence + one data story |
| **Stephen Shaw** (HM, 45m) | Ownership, judgment, you’ll stay | Why Anduril (one answer) + trade-study + MOQ | Comp / Quincy only if he opens it |

---

# 7. Likely questions (full answers)

### Walk me through supporting an open trade study
> I’d ask what’s frozen. If the long lead is material or a fab slot, I’d buy that now with a written scrap owner and a decision date on engineering. Finish when the dash number is real. Update the manufacturing BOM the same day so MRP isn’t still planning the old thing.

### What’s your buying strategy when you get a technical BOM?
> I don’t PO the PDF. I read the packet: rev, specs, qty, need date, open studies. Sort critical path and long lead, COTS, custom, and soft callouts. Flag landmines the same week with options. Then buy long lead first, buffer only what stops the build, keep MRP honest, and intercept when the rev moves. Plenty was eBOM→mBOM and rev intercepts. Comcast disaggregation was spec-to-market with eng.

### How do you spot issues in the parts early?
> Long lead vs need date. Sole source. Soft specs. Wrong buffer. Rev drift. Read the BOM and open POs and ask what fails next. Seed cleanliness / cold plasma is the Plenty version of catching a parts problem before the operation eats it.

### Tell me about working with engineering
> Plenty: Base A/B nutrients with plant science and eng; cold plasma requirements and test plans with the vendor; spares BOMs. Comcast: disaggregation hardware specs with eng, then built-to-spec and OTS boxes to market. I bring supplier constraints early so we don’t design into a fantasy lead time.

### How do you set safety stock?
> On the parts that stop the line or the test. Lead time, demand ugliness, rev stability, cash. Not everything. And only if the item master isn’t garbage.

### How do you evaluate suppliers?
> Start from the requirement. Can they make it? Capacity, quality system, financial health, past performance. RFQ with real specs. Score cost, lead time, quality, flexibility, and whether they’ll work with engineering when the drawing changes. Site visit on critical parts. Dual source if a miss kills schedule. Here I’d also ask who else is eating their capacity and whether we’re unrated against DPAS customers.

### How do you handle a supplier quality failure?
> Quarantine, protect the build, get known-good material in, tighten inspection as a wall, then SCAR / CAPA with the supplier. That’s the tub recall playbook.

### Greatest achievement
Pick one:
- Materials room: **~30% BOM cost** in six months
- Process room: **Coupa in ~7 weeks**, ~15 punchouts, 99% on contract
- Ops room: nutrient premix **~20% changeover** or sealer throughput work

### Weakness
> Big-room presenting used to be rough. Supplier QBRs and teach-backs forced practice. Still not my favorite thing. I’d rather clear the shortage. I’m better than I was.

### Why should we hire you without a defense background?
> Because the factory problems transfer. BOMs, MRP, NPI with engineers, quality escapes, low-volume contracts, long leads. Stephen’s already walked me through Copperhead and Sentry. I’ll learn the maritime specifics on the floor. I won’t pretend I already know your real BOM.

### 90 days
> First few weeks: own Copperhead and Sentry materials. Walk the floor. Learn the BOMs, open POs, shortages, true lead times, who buys vs who plans today. Next: shortage rhythm with manufacturing, quality, and engineering. Clear containment rules. By ninety days: a real S&OP cadence for my lines, cleaner master data, make/buy notes where they matter, and a red-part list with owners.

### Comp (if asked)
> I’ve seen the posting. I’m around $140K base for this scope. I know that’s above this band and inside what Senior has been listed at. Happy to talk equity. I’m not going to pretend $115K works.

---

# 8. Questions to ask them

Ask 2–3 per room. Listen.

1. On Copperhead and Seabed Sentry, what do I own day one vs what’s still with LD / Alder?
2. Which open trade studies are live right now, and who signs a long-lead hedge before finish specs lock?
3. Which boards or electronics are actually common today vs still unique by variant?
4. Which parts lose most often to DPAS-rated customers, and what’s the workaround?
5. Quincy vs Quonset: who owns inventory and the PO when a kit moves?
6. How healthy is Oracle / MRP master data? What do people actually trust day to day?
7. When engineering changes a board mid-build, who sets effectivity and how fast do POs get intercepted?
8. What separates a good buyer/planner here from a great one?
9. How will you measure this seat at six months?
10. Any reservations about my background I can clear up now?

---

# 9. Logistics (don’t freestyle)

- **Quincy:** on-site. One story, same as Stephen.
- **Travel ≤25%:** ask if it’s Quonset + suppliers or field/test travel.
- **Clearance:** eligible for Secret. Don’t claim you have one.
- **Notice:** ~30 days.
- **Other processes:** you have some. Don’t give a tour. This one is specific because of the manufacturing work and Stephen.
- **Equity (from your 2024 notes, confirm if still true):** 4-year vest; settles to common ~twice a year.

---

# 10. Night-before run-through

Say these out loud once each:
1. Why Anduril (one answer)
2. Technical BOM method (§5.7)
3. Tub recall
4. Base A/B nutrients (commonality only)
5. Comcast disaggregation **or** cold plasma (pick one for eng rooms)
6. MOQ / low-volume contracts
7. Spot issues in the parts early

Products cold: Copperhead, Seabed Sentry, Dive-LD, Alder, Quonset vs Quincy.  
Numbers cold: 30% BOM, 99% on contract, 3→1.5 days, ~15 punchouts / ~7 weeks Coupa, ~20% changeover, ~40% plastic cut, $140K ask.
