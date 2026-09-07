# Anduril onsite prep: Buyer/Planner (Quincy)

**Role:** Buyer/Planner · Copperhead + Seabed Sentry (per Stephen)  
**HM:** Stephen  
**You:** Harrison Pizzi · Plenty manufacturing buyer (direct materials) → Comcast enterprise procurement  
**Comp ask:** $140K base (posted $99–130K; Senior bands have listed higher)  
**Also:** `cheatsheet.md` · `from-2024-prep.md` · `story-bank.md` · `decision-playbook.md` · `hardware-primer.md`

This is one document you can prep from. Say the scripted answers out loud until they sound like you, not like a page.

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

> I’m Harrison. I spent most of my career in manufacturing procurement at Plenty. Senior Global Supply Manager. I owned direct materials end to end: BOMs and MRP in NetSuite, inventory and safety stock, S&OP with ops, CapEx and tooling, and the supplier quality problems that stop a line.
>
> A few things that stuck. We took about 30% out of BOM cost in six months. I stood up Coupa when buying was still living in NetSuite. And I ran a packaging failure that became a recall: quarantine, get conforming material in, put the vendor on 100% inspection, then dig into the process so it didn’t repeat.
>
> I’m at Comcast now on wireless and fixed network categories. Useful, but it’s not the factory job. Stephen and I talked about Copperhead and Seabed Sentry: open trade studies, long leads, getting off sole source. That’s the work I want to do.

If they only ask “tell me about yourself,” stop after paragraph two and let them steer. Don’t dump every story in the open.

---

# 3. Why Anduril / why leave Comcast / why defense

**Why this role**
> I want to own materials on a production line again. Plenty was that. Comcast is category work at scale. This Buyer/Planner job is shortages, lead times, engineering changes, and getting good parts to the floor. That’s what I’m looking for.

**Why Anduril**
> They’re building real hardware in Quincy and scaling capacity. Maritime vehicles that have to work in water. Hard supply problems. I already know Stephen. I’m not looking for a paper defense contractor.

**Defense comfort**
> I’m comfortable with it. I’ve already lived what a bad material lot does to a product and a customer. These systems either work or they don’t. That doesn’t bother me.

**No engineering degree**
> I’m not an ME. At Plenty I still sat with engineers and scientists on specs, SOWs, tooling, and new cultivars. Cold plasma equipment, hydrogel, packaging tools, spares BOMs. I don’t design the part. I learn the requirement, turn it into a buyable plan, and keep the line fed when the drawing moves. That’s the job.

---

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

## 4.3 Complex BOMs, demand consolidation, change control

**Use when:** “Walk me through a BOM,” commonality, engineering changes.

**Plain language**
- **eBOM:** how engineering defines the product
- **mBOM:** how manufacturing buys, kits, and builds it
- Your job: keep those connected, and make sure planning buys what the floor will actually use

**Story**
> I owned that work myself. Engineering would release a design. I’d turn it into a manufacturing BOM we could plan and buy against in NetSuite.
>
> Best consolidation example: nutrient recipes. We moved to pre-mixed nutrient solutions, consolidated parts, and cut changeover time about 20%. I also owned spares BOMs with engineering: manifolds, wire harnesses, conveyors, so ops had the right parts instead of tribal lists.
>
> When a rev changed after material was on order, I didn’t just forward an email. I intercepted POs, dispositioned what was on the dock, and updated the mBOM so MRP stopped calling for the dead part.
>
> Stephen said commonality on Copperhead and Sentry is mostly boards and electronics. That’s the same muscle. Shared board = one forecast, one buy, one safety-stock policy. Unique board for a soft reason gets a hard question.

**Cost backup (don’t lead every room with this)**
> We took about 30% out of BOM cost in six months through negotiation, value engineering, supplier work, and S&OP. Useful if they ask commercial rigor. Don’t make it the whole interview.

## 4.4 NPI / cultivar work with engineers and scientists

**Use when:** open trade studies, working with engineering, “have you done NPI?”

**Story**
> New cultivar work at Plenty was NPI with engineers and scientists while production still needed material and equipment. Specs moved. I still had to buy.
>
> Concrete examples: I brought cold plasma equipment in-house. Wrote the specs and SOW, worked the vendor to tailor capacity to the cultivar. Did joint design work on hydrogel with engineering. Owned packaging tooling: sealing and denesting internally, prototype and production thermoforming tools externally. Did feasibility on custom strawberry media before we scaled CapEx.
>
> That’s the same pattern Stephen described here. Trade study still open, long lead already running. You buy the raw or the long-lead path, write down who owns scrap if the answer changes, and finish once the print locks. Waiting for perfect is how you miss the build.

## 4.5 Quality escape / CAPA

**Use once fully. Shorten in later rooms.**

**Story**
> Tub packaging went brittle. Plastic started chipping into product. It became a recall.
>
> We quarantined the bad material, got conforming lots in so the line wasn’t dead, put the vendor on 100% inspection as containment, and ran a process review so the next lots didn’t repeat it. I partnered with Supplier Quality. It wasn’t a PO complaint thread.
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

**Plenty parallel**
> Cold plasma and packaging tooling were that motion: lock enough of the requirement to buy long-lead equipment, keep shaping details with engineering, don’t freeze the factory waiting for every line on the SOW.

## 5.2 Make vs buy (short, confident)

> It depends on the process. Off-the-shelf connectors, fasteners, a lot of electronics: buy. Qualify, dual source if it can kill schedule. Printed mounts while engineering is still iterating: control close to home if we can. Specialty foam, batteries, atomic-clock class timing parts: buy from people who already live in that world. Final integration: make. Make never means “no buying.” It means we still buy feedstock, hardware, and long-lead components.

## 5.3 Engineering change after the PO is out

> First questions are effectivity and what’s already bought. Can we use the old rev, rework it, or is it scrap? Freeze outgoing POs if the old rev is dead. Disposition dock and WIP. Change or cancel open orders. Update the manufacturing BOM the same day. First good new part through incoming before we kit a pile of vehicles on a fantasy rev.
>
> Printed bracket changes are annoying and usually recoverable. Machined housings and pinout changes are schedule killers. A connector pinout change after harnesses are on order is basically a new part.

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

---

# 6. Room plan (4–5 people)

Rotate stories. Do **not** tell the full recall four times.

| Room | What they care about | Lead with | Have ready |
|------|----------------------|-----------|------------|
| Stephen / HM | Ownership, judgment, you’ll stay | Copperhead/Sentry, trade-study hedge, low-volume MOQ contracts | Comp / Quincy only if he opens it |
| Buyer peer | Suppliers, expedite, dual source | Sole-source push, SCAR/CAPA, COVID allocation | One shortage war story |
| Planner peer | MRP, safety stock, BOM hygiene | NetSuite MRP, nutrient consolidation, item master | Change-order intercept |
| Engineering / NPI | Can you keep up | Cold plasma / hydrogel / tooling NPI | Trade-study hedge script |
| Quality / MFG | Escapes, floor reality | Tub recall sequence | Sealer bottleneck / tooling |
| Ops / program | Dates and promises | “Can we actually promise that?” | S&OP, Quincy vs Quonset ownership |

---

# 7. Likely questions (full answers)

### Walk me through supporting an open trade study
> I’d ask what’s frozen. If the long lead is material or a fab slot, I’d buy that now with a written scrap owner and a decision date on engineering. Finish when the dash number is real. Update the manufacturing BOM the same day so MRP isn’t still planning the old thing.

### How do you set safety stock?
> On the parts that stop the line or the test. Lead time, demand ugliness, rev stability, cash. Not everything. And only if the item master isn’t garbage.

### Tell me about working with engineering
> Regularly. Specs, lead times, SOWs. Cold plasma equipment, hydrogel, packaging tools, spares BOMs. I bring supplier constraints early so we don’t design into a thirty-week fantasy.

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
1. Opening
2. Trade-study hedge
3. Tub recall
4. Nutrient consolidation / BOM ownership
5. Cold plasma NPI
6. MOQ / low-volume contracts
7. No engineering degree
8. Why leave Comcast

Products cold: Copperhead, Seabed Sentry, Dive-LD, Alder, Quonset vs Quincy.  
Numbers cold: 30% BOM, 99% on contract, 3→1.5 days, ~15 punchouts / ~7 weeks Coupa, ~20% changeover, ~40% plastic cut, $140K ask.
