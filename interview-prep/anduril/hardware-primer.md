# Anduril Maritime — Hardware Primer (for a non-engineer Buyer/Planner)

**Who this is for:** You. You're a strong manufacturing buyer/planner without an ME degree. They like engineering fluency. You don't fake that. You learn the **bill of materials language**, know what usually breaks schedules, and ask sharp questions.

**Sources (public):** Anduril Dive-LD / Seabed Sentry pages; CompositesWorld + Popular Mechanics on Dive's 3D-printed hull; Defense News / Naval News on Dive acquisition, Ghost Shark, Copperhead, Seabed Sentry; ORNL write-ups on Dive additive manufacturing.  
**Not sources:** Classified configs, actual Anduril BOM, exact vendor list. If something below is labeled **[public]** it's reported. If **[typical AUV / inferred]**, it's industry-normal and you should verify on the floor.

**Pair with:** `cheatsheet.md` (day of) · `prep.md` (process) · `decision-playbook.md` (make vs buy, change orders, delays)

---

# Part 1 — Overview (read this twice)

## What you're supporting

Anduril's Quincy maritime work is mostly about **autonomous underwater vehicles (AUVs)** and related undersea gear.

Think of an AUV as a robot submarine with no crew. It swims a mission, collects data or delivers a payload, and comes home (or gets recovered).

Public family you should know by name:

| Product | Plain English | Why a buyer cares |
|---------|---------------|-------------------|
| **Dive-LD** | Large-diameter AUV (~19 ft long, ~4 ft across). Deep (~6,000 m). Modular payload bay. | Core Quincy vehicle. Hull + internals + batteries + thrusters + sensors. |
| **Dive-XL / Ghost Shark** | Extra-large version. Ghost Shark is the Australian Navy program of record. | Same *family* idea (modular, production-minded). Mostly built in Australia; don't pretend you own that factory. |
| **Seabed Sentry** | Seafloor sensor "node" that sits on the bottom and listens / computes / talks acoustically. | Different shape, same deep-ocean pain: pressure housings, buoyancy, connectors, power, sensors. |
| **Copperhead** | Smaller, faster AUV family (100 / 500 class). Some variants are munition-like. | Different BOM mix (speed, actuators, different battery/propulsion tradeoffs). |
| **Robot-as-a-Service (RaaS)** | They also *operate* AUVs as a service, not only sell them. | Spares, consumables, repair kits, field logistics. Demand is lumpy. |

Your Buyer/Planner job (from the posting): own materials from **raw / purchased parts → assembly line → finished vehicle to customer**. Forecast, inventory, purchase orders, material requirements planning, shortages, make/buy, sales and operations planning, know the bill of materials well enough to challenge a bad ship date.

## The one design idea that unlocks Dive-LD

Most people picture a submarine as a hard metal tube that keeps all the water out.

**Dive-LD is different [public].**

- Outer "skin" / fairings are **3D-printed** (large-format additive manufacturing). About **nine** large tube sections on Dive-LD historically, fastened on, then coated smooth.
- Water **floods into** parts of the vehicle (**free-flooded** architecture).
- The brains and sensitive electronics live in smaller **pressure vessels** (sealed cans that keep pressure out).
- An **internal skeleton** carries the structural loads (public reports describe an **aluminum A-frame** that can split for battery swap); the outer fairings make it smooth in the water.

House analogy someone used in press: like a skyscraper. The frame holds the building. The glass skin is not the main structure.

**Buyer translation:** you're not only buying "a hull." You're buying printed fairings (or print feedstock), fasteners, coatings, pressure housings, batteries that can survive the environment, thrusters, cables, connectors, buoyancy materials, sensors, and a mountain of brackets/mounts.

## What "COTS" means here

**Commercial off-the-shelf (COTS)** = buy a standard product that already exists, instead of designing a custom one from scratch.

Dive/Anduril lean hard on this for speed and cost [public]. Your Plenty muscle still applies: supplier quality, lead time, second sources, quarantine when a lot fails.

Defense still adds wrinkles: export rules (**ITAR**, International Traffic in Arms Regulations), traceability, lot control, sometimes long-lead "mil" parts even when the philosophy is commercial.

## How to sound competent without being an engineer

Your job is not to redesign the thruster. Your job is:

1. Know the **major buckets** on the bill of materials.
2. Know what usually has **long lead time**, **single source**, or **quality escapes**.
3. Ask: "What's the depth rating?" "What's the alternate?" "What fails first in salt water?" "Is this pressure-tolerant or inside a housing?"
4. Connect shortages to **build sequence** (you can't install the payload if the housing or harness is late).

Line you can use if they poke the non-engineer angle:

> I don't pretend I've designed pressure vessels. I do know how to learn a bill of materials fast, sit with engineering and quality when a lot fails, and keep the line fed. At Plenty that was packaging and direct materials under real quality pressure. Here I'll do the same with underwater hardware. Teach me the critical path parts and I'll own them.

---

# Part 2 — Dive-LD: what's on the vehicle (deeper)

## A. Structure and outer hull [public]

**What it is**
- About **nine large tube-shaped fairings** printed on industrial big-area printers.
- Material reported: **carbon-fiber-filled ABS** (ABS = a common engineering plastic; carbon fiber chopped in for stiffness). Historically printed via partners like Additive Engineering Solutions on Cincinnati BAAM-class machines; Dive also printed many smaller internal parts in-house.
- Fairings **mechanically fastened** (reports: about four fasteners per fairing).
- Outer surface gets a **coating / fill** so print ridges don't kill hydrodynamics, and so the plastic survives depth/water better.
- **~77–85 smaller printed parts** inside historically: brackets, mounts for sensors/motors/electronics.

**Buyer questions**
- Do we print fairings in-house, at a partner, or both? What's the queue time?
- Who owns the **resin / pellet feedstock** buy? Spec? Lot traceability?
- Coating: vendor, cure time, scrap rate after depth test?
- Fasteners: marine-grade? Torque / install process owned by manufacturing or by you to kit?
- When engineering changes a sensor mount, is that a **printed** change (fast) or a machined long-lead?

**Failure modes that smell like your recall story**
- Brittle plastic / coating crack / water intrusion into the wrong place.
- Print delamination (layers don't bond).
- Fastener corrosion or wrong hardware for salt water.

## B. Pressure vessels / electronics bottles [public + typical]

**What they are**
Sealed housings that keep one atmosphere (or controlled pressure) around electronics while the outside sees crushing depth pressure.

At 6,000 m, outside pressure is brutal. The free-flooded outer vehicle can get wet. The **computers, radios, and delicate boards usually cannot**.

**Typical materials [typical AUV]**
- Metals: aluminum, titanium, stainless (trade cost, weight, corrosion, depth).
- Composites: carbon-fiber housings show up on products like Seabed Sentry [public for Sentry].
- Seals: O-rings, face seals, gland seals. Material choice matters (temperature, chemicals, compression set).
- Penetrators: how cables get through the wall without leaking.

**Buyer questions**
- Make vs buy on housings?
- Seal kit as a spare? Shelf life?
- Hydrostatic test capacity: in-house tank vs vendor?
- What is the scrap / rework loop when a bottle fails leak test?

## C. Buoyancy: syntactic foam [typical AUV, often critical]

**What it is**
**Syntactic foam** = resin packed with tiny hollow glass microspheres. Strong in compression, lighter than water, used so the vehicle floats/neutrally buoyants correctly at depth.

Not "packing foam." If the wrong grade is used for the depth, it **crushes** and the vehicle's weight/balance goes wrong.

**Buyer notes**
- Often sold in blocks, then machined/bonded to shape.
- Spec is depth rating + density + water absorption.
- Long lead and specialty vendors are common.
- Damage in handling is expensive.

**Buyer questions**
- Depth rating of the foam grade vs Dive-LD mission?
- Who machines it? Bonding adhesive approved?
- How do we quarantine a suspect block?

## D. Energy: batteries [public + typical]

Dive marketing emphasizes **modular, long-endurance power** (on the order of multi-day missions; public "up to ~10 days" class language).

**Two big architectures [typical]**
1. **Batteries inside a pressure housing** (dry).
2. **Pressure-tolerant batteries** (designed to sit at ambient pressure / oil-compensated / specially packaged).

Lithium-ion is common. That brings: UN shipping rules, state-of-charge limits for freight, thermal runaway risk, lot tracking, and "don't store these next to the heater."

**Buyer questions**
- Cell vs module vs pack: what do we buy?
- Single source?
- Cycle life vs calendar life for Robot-as-a-Service vs sold vehicles?
- Incoming test: capacity, insulation resistance, visual?
- Spares strategy for field recovery / RaaS?

## E. Propulsion [public]

Reported historically for Dive-LD: **direct-drive electric thruster**, magnetic coupling to the propeller, roughly **6 kW** class, cruise speeds similar to other AUVs (~6 knots class in older press).

**Buyer translation**
- Motor / thruster assembly
- Propeller / duct
- Magnetic coupling hardware (keeps a seal strategy cleaner)
- Controllers, power electronics, cabling
- Mounts (often printed or machined)

**Buyer questions**
- Thruster lead time? Repairable vs throwaway?
- Acoustic quieting requirements that constrain which COTS thruster you can use?
- Spares for RaaS ops?

## F. Navigation, compute, communications [public concept + typical]

Underwater, radio dies fast. Vehicles lean on:

- **Inertial navigation** (IMUs: gyros/accelerometers) + dead reckoning
- **Doppler velocity logs (DVL)** / acoustic positioning when available
- **Acoustic modems** (talk through water slowly)
- Occasional **surface** for GPS / satellite
- Onboard **compute** running autonomy (Anduril ties products to **Lattice**)

**Buyer translation:** IMUs, acoustic hardware, antennas/transducers, single-board computers or rugged compute, cables, connectors, software licenses sometimes.

You don't need to derive Kalman filters. You do need to know these are often **long-lead, export-controlled, single-source, calibration-sensitive**.

## G. Payloads and sensors [public]

Dive-LD sells **payload flexibility** (public: >1 m³ modular free-flooded payload interface). Missions called out publicly include:

- Intelligence / surveillance / reconnaissance (ISR)
- Mine warfare
- Seafloor mapping / survey
- Pipeline and cable inspection
- Environmental monitoring

**Sensor types you'll hear [typical]**
- Sonar (side-scan, multibeam, forward-look)
- Cameras / lights
- Magnetometers
- CTD (conductivity, temperature, depth)
- Chemical sensors
- Acoustic arrays (Seabed Sentry partners on sensing; Ultra Maritime Sea Spear is named in public Seabed Sentry coverage)

**Buyer angle:** payload kits change by customer. That means **configure-to-order** demand, common vs unique BOM, and NPI (new product introduction) style chaos when a new sensor shows up.

## H. Cables, connectors, harnesses [typical, high pain]

Salt water + pressure + motion = connector hell.

- Wet-mate vs dry-mate connectors
- Underwater mateable power/data
- Cable potting / overmold
- Strain relief
- Pinouts that engineering changes after you've already ordered

**Plenty transfer:** this is like punchouts and catalogs, except a wrong connector doesn't just delay AP. It kills a dive test.

## I. Fasteners, adhesives, coatings, seals [typical]

Unsexy. Late. Everywhere.

- Marine fasteners (material + coating)
- Threadlocker / torque specs
- Structural adhesives for foam and printed parts
- Antifouling / hydrodynamic coatings
- O-ring kits by housing

Your recall story maps cleanly here: material property wrong → field failure → quarantine → vendor process review.

## J. Test and ground support [typical]

Not always on the vehicle BOM, but it stops production:

- Hydrostatic test fixtures
- Lift fixtures / cradles
- Battery charge carts
- Deck handling gear
- Calibration targets
- Shipping containers with UN battery rules

Ask early: "What's GSE (ground support equipment) vs vehicle BOM ownership?"

---

# Part 3 — Other products you might touch

## Seabed Sentry [public]

- Seafloor node, months-to-years life, depth **>500 m** (shallower than Dive-LD's 6,000 m marketing depth, different design point).
- Carbon-fiber buoyant outer shell / pressurized housing for compute + sensing.
- Acoustic communications.
- Modular payload >0.5 m³.
- Deployed by larger AUVs (Dive-XL class) in public messaging.
- Partnership messaging with Ultra Maritime on sensing.

**Buyer buckets:** composite shells, pressure housings, acoustic arrays, tethers/clump weights, batteries/power for long loiter, connectors, Lattice-capable compute.

## Copperhead [public]

- High-speed AUV family (100 and 500 classes).
- Commercial sensing payloads *or* munition variants (Copperhead-M) in public materials.
- Designed for **mass production** (Anduril's pitch).

**Buyer buckets:** different propulsion (speed), different structural approach, energetics/munition supply chain if that variant is in scope (huge process/compliance difference — ask before assuming).

## Ghost Shark / Dive-XL [public]

- Extra-large AUV; Australian program of record (~A$1.7B).
- Produced in Australia; US Quincy/Quonset story is related family + US demand, not "you own Sydney."

**Buyer posture:** know the name, know it's XL-class, don't overclaim.

---

# Part 4 — Bill of materials map (study sheet)

Use this as a mental checklist when they say "walk me through how you'd learn the product."

1. **Structure:** printed fairings, skeleton/frames, fasteners, coatings  
2. **Pressure housings:** bottles, seals, penetrators  
3. **Buoyancy:** syntactic foam, adhesives, machined shapes  
4. **Energy:** cells/modules/packs, BMS (battery management system), chargers  
5. **Propulsion:** thruster, prop, controllers, mounts  
6. **Nav / compute / comms:** IMU, DVL, acoustic modem, compute, wiring  
7. **Payload:** sonar/camera/etc. kits (common vs unique)  
8. **Harness:** cables, connectors, overmolds  
9. **Consumables / kits:** O-rings, adhesives, fasteners, coatings  
10. **Spares / RaaS:** field replaceable units, batteries, props, seals  
11. **GSE / test:** fixtures, tanks, charge gear (ownership TBD)

For each: lead time, sole source?, depth/export constraints, incoming inspection, scrap path, alternate.

---

# Part 5 — Manufacturing + planning reality (Quincy vs Quonset)

**Quincy [public context]**  
Engineering + low-rate build/test, water access. Capacity constrained vs demand in public comments from Anduril leadership historically.

**Quonset, RI [public]**  
Volume factory (~150k sq ft class), opened late 2025, ~1 hour south. Scaling hull production is the point.

**Your planning brain**
- Common parts across LD / XL / payloads vs unique.
- Engineering change orders hit printed parts differently than cast/machined long-leads.
- Robot-as-a-Service demand ≠ steady production schedule.
- Transfer of material ownership Quincy ↔ Quonset will create "whose shortage is it?" fights. Get that RACI early.

---

# Part 6 — How water ruins your week (physics for buyers)

You don't need equations. You need instincts.

| Thing | Plain meaning | Buyer implication |
|-------|---------------|-------------------|
| **Hydrostatic pressure** | Water squeezes harder as you go deeper | Depth rating on foam, housings, connectors, batteries is not optional marketing |
| **Free-flooded** | Water is *supposed* to be in parts of the vehicle | "Wet" vs "dry" zones; don't store dry electronics in the wet zone |
| **Buoyancy / trim** | Float, sink, or neutral; nose up/down | Foam and ballast changes are configuration controlled |
| **Corrosion** | Salt eats metal and some coatings | Material callouts, plating, inspection |
| **Biofouling** | Ocean crud grows on stuff | Coatings, maintenance kits for RaaS |
| **Acoustic signature** | How noisy you are | Thruster/COTS choices aren't only about price |
| **Thermal** | Electronics cook in sealed bottles | Housing design + derating; not your design job, but scrap/test loops become yours |

---

# Part 7 — Spec literacy (drawings without an ME degree)

When engineering hands you a print or a PDF:

1. **What is the part number / revision?** Wrong rev = wrong buy.  
2. **Material callout:** e.g. "ABS-CF," "Ti-6Al-4V," "316SS," foam grade.  
3. **Critical dimensions** with tolerances (the numbers with ±).  
4. **Surface finish / coating** notes.  
5. **Torque / assembly** notes that affect kits.  
6. **Acceptance criteria:** what incoming inspection checks.  
7. **ITAR / export** marking if present.  
8. **Next higher assembly:** where it sits on the vehicle (helps shortage prioritization).

Line for interviews:

> I'm not going to pretend I can stress-analyze a housing. I can read a bill of materials, catch a rev mismatch, and make sure the supplier is building to the revision that's actually released.

---

# Part 8 — Quality / containment (your superpower transfer)

Plenty packaging recall → same playbook underwater:

1. **Contain** (quarantine suspect lots, WIP, finished goods if needed)  
2. **Protect the customer / test article**  
3. **Feed the line** with known-good material  
4. **Vendor 100% / tightened inspection** as temporary wall  
5. **Process review** (root cause, CAPA: corrective and preventive action)  
6. **Prevent recurrence** (spec, incoming checks, second source, design change if needed)

Extra underwater twists:
- A "use as is" on a seal or foam grade can kill a vehicle later, not on the dock.
- Lot traceability matters more when a failure is found after a dive.

---

# Part 9 — Smart questions that signal "I'll learn fast"

Steal these. Ask 2–3 max per conversation.

1. For Dive-LD, which bill of materials buckets are **longest lead** today: batteries, thrusters, foam, housings, printed fairings, sensors?  
2. Are fairings still **partner-printed**, in-house, or mixed? Who buys feedstock?  
3. What fails incoming inspection most often?  
4. How do you handle **engineering changes** on printed mounts vs metal housings?  
5. What's common across Dive-LD / Dive-XL / Seabed Sentry vs unique?  
6. Robot-as-a-Service: separate spares warehouse and planners, or same Buyer/Planner?  
7. Quincy vs Quonset: who owns the inventory when a kit moves south?  
8. Which parts are **ITAR** or otherwise export-locked?  
9. When a hydrostatic test fails, what's the material disposition path?  
10. Where should a non-engineer Buyer/Planner sit in design reviews so we don't discover long-leads after the promise date?

---

# Part 10 — 7-day study plan (do this)

**Day 1:** Memorize product table (Dive-LD, XL/Ghost Shark, Seabed Sentry, Copperhead, RaaS).  
**Day 2:** Free-flooded vs pressure vessel. Explain it out loud in 60 seconds.  
**Day 3:** Hull/print/coating/fasteners. Skim CompositesWorld Dive article if you can.  
**Day 4:** Batteries + thrusters. List what you'd put on a shortage war-room board.  
**Day 5:** Syntactic foam + seals + connectors.  
**Day 6:** Seabed Sentry vs Dive-LD differences (depth, loiter, housing).  
**Day 7:** Practice the non-engineer line + 5 smart questions. Rehearse the recall story once.

---

# Part 11 — Glossary (say the full words)

| Term | Meaning |
|------|---------|
| AUV / UUV | Autonomous / unmanned underwater vehicle |
| LD / XL | Large diameter / extra large |
| Free-flooded | Water enters parts of the structure on purpose |
| Pressure vessel / bottle | Sealed housing that keeps electronics dry/pressurized correctly |
| Fairing | Outer shaped skin for smooth flow |
| Additive manufacturing / BAAM | 3D printing; BAAM = big area additive manufacturing |
| ABS-CF | ABS plastic with carbon fiber fill |
| COTS | Commercial off-the-shelf |
| Syntactic foam | Strong lightweight buoyancy foam (glass microspheres in resin) |
| Hydrostatic test | Pressure test (often water) to prove a part survives depth |
| Wet-mate connector | Connector designed to be joined in water |
| IMU | Inertial measurement unit (gyros/accels for navigation) |
| DVL | Doppler velocity log (speed over seafloor, acoustic) |
| Acoustic modem | Underwater "radio" using sound |
| BMS | Battery management system |
| BOM | Bill of materials |
| MRP | Material requirements planning |
| NPI | New product introduction |
| RaaS | Robot-as-a-Service |
| ITAR | US export control rules for many defense articles |
| GSE | Ground support equipment |
| OTIF | On time, in full |
| CAPA | Corrective and preventive action |
| ASW / ASuW | Anti-submarine / anti-surface warfare |
| ISR | Intelligence, surveillance, reconnaissance |
| CTD | Conductivity, temperature, depth sensor |

---

# Honesty box

You will not know Anduril's real bill of materials from the internet. Nobody honest does.

What you *can* walk in with:
- How Dive-LD is put together at a systems level [public]
- What categories usually dominate underwater vehicle supply risk
- A containment playbook you've already run
- Curiosity that sounds like ownership, not tourism

If they want a stress engineer, that's not this req. If they want someone who will own materials while the factory scales, that's you. Learn this file, then shut up and listen on the floor.
