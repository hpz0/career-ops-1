# Anduril Maritime: How I'd Run the Buyer/Planner Seat

**What this is:** Interview prep. Written as if I already have the Quincy job, because that's how they'll ask it: "walk me through a make vs buy," "engineering just changed the print," "the thruster slipped four weeks."

**What this is not:** Anduril's actual process. I don't have their engineering change form, their Oracle screens, or their real bill of materials. Labels:

- **[Plenty]** = I have done a version of this.
- **[public]** = Dive-LD / Anduril facts from open sources (see `hardware-primer.md`).
- **[typical]** = how manufacturing buyers usually handle this class of part. Verify on day one.

**Pair with:** `cheatsheet.md` · `hardware-primer.md` · `prep.md`

If they ask how I decide, I don't give a philosophy. I give a sequence, then a recommendation with numbers.

---

# The loop I use for every decision

Same motion whether it's make vs buy, a change order, or a boat stuck in a port.

1. **What is actually true?** Date, quantity, revision, where the parts sit (supplier / dock / work-in-process / finished goods). Not Slack rumor.
2. **What breaks if I do nothing?** Which hull, which water-test slot, which customer promise, how many days of line.
3. **What are the options?** At least two. Usually three. "Hope" is not an option.
4. **Who has to say yes?** I can move a purchase order. I cannot bless a substitute material. Quality owns spec. Engineering owns design. Manufacturing owns the sequence on the floor.
5. **Pick, write it down, tell people.** Item master, purchase order, material requirements planning, and the humans who will get surprised. A decision that lives only in my head is not a decision.

**Interview line:**
> I don't need to be the smartest person on the vehicle. I need the facts, the impact, two real options, and the right people in the room. Then I own the materials action.

---

# 1. Make vs buy

Yes, it depends on the part **and** the manufacturing process. A printed fairing, a titanium bottle, and a wet-mate connector are three different businesses. Treating them with one "we should make more in-house" slogan is how you starve the line.

The job posting asks for make/buy. They want to hear a method, not a vibe.

## What I am actually choosing

Not a binary. The real menu is:

| Choice | Meaning |
|--------|---------|
| **Buy finished** | Supplier ships a part we inspect and install. |
| **Buy near-net, finish here** | Example: foam block from a specialty mill, we machine/bond. Or printed fairing from a partner, we coat and assemble. |
| **Make** | We convert material on our floor (print, machine, wire, assemble). I still **buy** the feedstock, inserts, resin, fasteners. Make never means "no buying." |
| **Dual** | Qualified second path (second printer, second machine shop, or make *and* buy). Insurance, not romance. |

**Make vs buy is a supply-chain design, not a pride contest.** [typical]

## The questions I collect before I have an opinion

I will not recommend from a slide. I want:

**From engineering**
- Is the design frozen, or will this change three times in 90 days?
- Depth rating / material callout / export (International Traffic in Arms Regulations, **ITAR**) constraints.
- Can a commercial off-the-shelf (**COTS**) part do it, or is this custom?

**From manufacturing**
- Do we have the process *today* (printer, CNC, hydrostatic tank, certified welders)? Capacity after the current queue?
- Yield / scrap. First-article time.
- Who inspects? Incoming vs in-process.

**From me / the supplier market**
- Lead time to a good part (not a quote, a *good* part).
- Piece price at this volume vs the volume Quonset is shooting for. [public: Quincy is low-rate; Quonset is the volume plant]
- Sole source? Tooling ownership? Minimum order quantity?
- Quality system: can they do lot traceability, or are we the ones who will eat a recall?

When those boxes are empty, my recommendation is: **don't decide yet; here's the data pull and a date.** That is a better answer than a fake certainty.

## How the process changes the call

### Commercial off-the-shelf (connectors, many sensors, fasteners, some thrusters)

**Default: buy.** [typical]

We are not in the business of inventing hex bolts. COTS is how Dive got speed in the first place [public]. My job is qualification, second source if the part can kill a schedule, incoming inspection, and not letting engineering "tweak" a pinout after the purchase order is already out.

I would only "make" a COTS-class part if the market cannot meet depth/export/acoustic constraints *and* engineering has signed that this is now a custom. That's a design change, not a buyer hobby.

### Additive / 3D-printed fairings and mounts [public process, typical buying]

Dive-LD outer hull: large printed fairings (carbon-fiber-filled ABS historically), fastened on, then coated. Lots of smaller printed brackets inside.

**This is the classic hybrid.**

| I lean **partner-print (buy)** when… | I lean **print here (make)** when… |
|--------------------------------------|-------------------------------------|
| We don't have printer capacity or overnight operators | Engineering is iterating weekly and a two-week ship from Ohio kills NPI (new product introduction) |
| The partner already holds the large-format process (BAAM-class) | The change is a bracket, not a 4-foot tube, and we already print those in-house |
| Quality of the big print is the scarce skill | Queue time at the partner is the bottleneck and we have open machine time |
| Volume is still a science project | Volume is stable *and* we have the people to run a second shift |

Feedstock (pellets/resin) is a **buy** either way. Coatings might stay outsourced even if we print. Fasteners are buy.

**How I'd close it:**
> At this volume I would keep large fairings with a qualified print partner and keep small mounts in-house so engineering changes don't sit on a dock. Revisit when Quonset rate makes a second printer pencil out. Here's partner lead time, our scrap, and the CapEx (capital expenditure) for bringing the big print in.

I would not pretend I know which way Anduril already went. I would ask on week one. Then I'd own the one they picked.

### Machined pressure housings / bottles [typical]

Sealed cans for electronics. Aluminum / titanium / stainless. Tight tolerances. Hydrostatic test.

**Default at low rate: buy from a shop that already lives in this world.** Unless Quincy has idle CNC, certified processes, and a tank on site with open capacity.

Make in-house starts to win when:
- Lead time at the shop is longer than our NPI cycle *and* we have the machines.
- ITAR or source-control drawings make a random job shop painful.
- We are scrapping bottles on leak test because the supplier doesn't understand the spec (that's a quality conversation first; switching to make is not the first move).

**Hybrid that is very common:** buy the bottle, we do final assembly, cabling, and test. Or buy the forging/blank, we machine the last features. I like hybrids when they cut lead time without pretending we are a titanium mill.

### Syntactic foam (buoyancy) [typical]

Specialty. Depth-rated. Few mills. Wrong grade crushes.

**Almost always buy the material.** Maybe machine/bond in-house if we have the process. I would not stand up a microsphere plant. I *would* dual-source the grade if one mill is 20 weeks and they know it.

### Batteries [typical + public mission need]

Buy. Cells/modules/packs from people who already do UN shipping, lot trace, and abuse testing. Making cells in Quincy would be a different company.

My decisions here are: pack vs module, safety stock vs cycle-life for Robot-as-a-Service (**RaaS**) vs sold hulls, incoming test, and freight rules (state of charge, hazmat). Not "should we become a battery OEM."

### Harnesses / cables [typical]

**This one flips with revision churn.**

- Pinouts still moving: build here or use a local shop with 48-hour turns. A 12-week overmold from a distant vendor is how you miss a water test.
- Frozen, volume up: buy the overmolded assembly. Better process control, better cost.

Connectors themselves stay buy (often sole source, annoying, export-y).

### Structure / weldments [public + typical]

Dive-LD-class vehicles have an internal frame (reports: aluminum A-frame, splits for battery swap). Fairings hang on that.

Weldments: buy unless we have welders, fixtures, and non-destructive test on the floor. Brackets: print or machine depending on load. I would not move structural welding in-house to save $80 a frame if a failed weld is a vehicle.

### Final assembly / integration

**Make.** That's the product. Payloads, Lattice-capable compute, water test. I buy the pieces. We own the build.

## How I reach a conclusion (the close)

I score it in English, not a 40-tab model.

**Schedule:** which path puts a *conforming* part on the stand first, and which path still works at 5× volume.

**Quality:** who can hold the spec, lot control, and the failure mode (your tub story maps here: brittle plastic is a process, not a purchase-order complaint). [Plenty]

**Money:** piece price *and* scrap *and* freight *and* the CapEx if we make. Cheap piece price with 30% reprint is not cheap.

**Changeability:** if engineering will spin the revision, the path that eats change orders wins even if the unit cost is uglier.

**Risk:** sole source, ITAR, one printer, one mill, one boat.

Then I say the sentence out loud:

> I recommend **[buy / make / hybrid]** for **[part family]** because **[schedule or quality or changeability]**. Numbers: lead time A vs B, yield, volume. We revisit when **[rate / CapEx / second source]** changes. Until then the item master should be **[make item / buy item]** so material requirements planning isn't lying.

If two paths are close, I pick the one that protects the next water-test date, and I put a review date on the calendar. Indecision is also a decision: it is "keep buying the old way while we argue."

**Plenty transfer:** the 30% bill-of-materials cost work was negotiation + value engineering + sales and operations planning, not "make everything." I will not perform make-in-house theater to sound like an engineer. [Plenty]

**Trap:** recommending make because "we're a hardware company." Integration is the company. Printed fairings and titanium bottles are processes you either own or you pay someone who does.

---

# 2. Engineering change orders

A change order is not an email. It is a decision about **material that already exists** plus **material we haven't bought yet**.

I assume they have some flavor of engineering change / ECO (engineering change order) / revision control. I will learn their form. The logic doesn't change.

## What I need on the change, day of

- Old revision → new revision. What physically changed.
- **Effectivity:** date, serial number, hull number, or "all future." Vague effectivity is how you build a mix of old and new by accident.
- Is the old part **usable**, **reworkable**, or **scrap**?
- Where is everything: open purchase orders, dock, kit, work-in-process, finished goods, supplier's floor.

If engineering cannot answer effectivity, I do not release a new purchase order. I will sound stubborn. That is the job.

## The sequence I run

1. **Stop the bleed.** If old rev cannot be used, freeze outgoing purchase orders and tell the supplier to stop mid-process if we still own that material. Paying for a stop is often cheaper than paying for finished scrap.
2. **Disposition what we have.** Use-as-is (Quality + Engineering sign). Rework. Return. Scrap. Quarantine until that's written. Same muscle as the tub recall: don't keep feeding the line from a bad pile. [Plenty]
3. **Intercept supply.** Change purchase order revision, cancel/replace, or dual-run old and new if we must finish hulls already promised on the old rev.
4. **Fix the system.** Bill of materials, item master, material requirements planning. If Oracle still thinks we need 40 of the old bracket, it will keep telling me I'm short on a part we no longer want.
5. **First good new part.** Incoming inspection / first article. Don't kit 20 vehicles on a revision nobody has seen wet.
6. **Tell the floor and the planner (me).** New kit list, new shortages, new dates. Sales if a promise moved.

## Process changes how painful this is

| Process | Change-order reality |
|---------|----------------------|
| **Printed bracket / mount** | Often the cheapest change. Reprint, scrap the old plastic, move on. Still update the bill of materials or you'll reprint the old one too. |
| **Large printed fairing** | Not cheap, still faster than a mold. Partner queue + coating cure is the real delay. |
| **Machined housing** | Tooling, fixtures, long lead. Dual-run or delay the change until we can intercept. Don't "just update the CAD" after the shop has already cut metal. |
| **COTS connector / sensor** | Pinout changes are nuclear. Last-time-buy the old, qualify the new, don't mix cable assemblies. |
| **Foam grade / adhesive / O-ring compound** | Looks small. Can be a vehicle. Treat like a material change, not a clerical revision. Quality with me. |
| **Firmware / compute** | May have a hardware revision even if the box looks the same. Lot/serial tracking. |

**Printed vs metal is the interview gold.** If they say "engineering changed a sensor mount," I ask: is that a printed part or a machined long-lead? Printed: I protect the next build by reprinting and eating scrap. Machined: I may tell engineering the change lands on hull 7, not hull 3, unless they want to pay for two sets of metal.

## What I will not do

- Quietly keep buying old rev "so we don't lose the slot" when old rev is unusable.
- Let sales promise the new config on a date that still has old kits on the shelf.
- Treat a supplier "we already started" as a veto. It's a cost input. We can pay to stop.

**Interview line:**
> Change orders are a materials intercept, not a paperwork race. I want effectivity, disposition of what's already bought, and the bill of materials updated the same day so planning matches the floor.

---

# 3. Long lead times (before it's on fire)

Long lead is a planning design. A slipped lead time is a fire. Don't mix them.

## How I find the real critical path

Not "what's expensive." What's **longer than our planning fence** and **has no alternate**.

On a Dive-LD-class vehicle I'd expect the painful bucket to be some mix of: batteries, thrusters, specialty foam, pressure housings, acoustic/nav boxes, wet-mate connectors. Printed fairings can be long if the partner is queued, or short if we print. I would walk the bill of materials with manufacturing and sort every part into:

- **Green:** COTS, dual source, short lead, we can miss a week.
- **Yellow:** long but we have stock or a second path.
- **Red:** single source, lead time > demand visibility, quality-sensitive.

Reds get a strategy, not a hope. [typical]

## Tools (none of these is always right)

**Buy ahead / firm up the forecast.** If the Navy (or RaaS ops) demand is lumpy, material requirements planning will under-buy until it's too late. I would rather hold a controlled buy-ahead on red parts than live in expedite forever. Cash vs service: I say the trade out loud in sales and operations planning (**S&OP**). [Plenty: S&OP + MRP]

**Safety stock.** Works when demand is ugly but the part is stable. Dies when engineering changes the rev every month (you will safety-stock the wrong thing). Dies when the part is a $80k battery pack and we have two hulls a month.

**Dual source / dual process.** Best insurance. Costs qualification time. Worth it on reds.

**Redesign toward COTS.** That's engineering. I bring the lead-time number to the design review so they see it before they promise a date. Job posting literally wants bill-of-materials literacy to challenge a sales promise. This is that.

**Minimum order quantity / lot size.** A mill that sells foam in slabs the size of a door is not "bad." I plan the leftover and the shelf life. I do not pretend the unit of measure is one vehicle.

**Item master hygiene.** Lead times in Oracle that are folklore will make every exception report a lie. Cleaning that is not glamorous. It is the job. I did the NetSuite version of this at Plenty. [Plenty]

## How I'd set a long-lead policy in 90 days

1. List red parts with true lead time (supplier confirmation, not the catalog).
2. For each: stock / dual source / redesign ask / accept the risk (named owner).
3. Put the ones we will stock into S&OP so Finance sees the cash.
4. Revisit when Quincy vs Quonset rate changes. Volume can turn a buy-ahead into a stranded pile.

---

# 4. Delays (the fire)

Something moved right. Supplier, ship, quality hold, customs. Same loop as the top of this file. Different options.

## 4a. Supplier lead time slip ("it's now 8 weeks, not 4")

**Confirm.** New date in writing, quantity, whether it's the whole order or a split. "We're seeing delays" is not a date.

**Impact.** Which work orders, which test window, which customer. If hull 4 can skip the payload kit and still do a hull-only test, that's a different problem than "we cannot mate the nose."

**Options, in the order I actually try:**

1. **Split shipment.** Send 2 now, 6 later. Don't wait for perfection.
2. **Expedite / premium freight / overtime at the supplier.** Price it. Compare to idle line + missed water time.
3. **Alternate part or supplier** already qualified. If not qualified, that's an engineering/quality path, not a buyer surprise.
4. **Resequence the line.** Build what we can. Pull kits forward that aren't blocked. Manufacturing owns the sequence; I feed them the truth.
5. **Borrow / transfer.** Quincy ↔ Quonset, or RaaS spares vs production (this starts fights; I still ask). Document who pays it back.
6. **De-scope / later install.** Payload ships after the hull if engineering says that's legal. Never a silent field-fit.
7. **Tell the promise date it moved.** Early. Sales hates surprises more than they hate a new date.

**What I will not do:** sit on a slip hoping it comes back. The tub recall taught the same lesson as a late thruster: containment first, then feed the line, then fix the cause. [Plenty]

**Cause, after the line is protected:** is this a capacity problem, a quality restart, a sub-tier shortage, or a vendor who always lies? That decides whether this is a one-off expedite or a dual-source project.

## 4b. Shipping delay (port, truck, weather, lost pallet)

**Incoterms first.** Whose problem is the boat? If we own freight, I am on the carrier. If they own it, I am still on the *outcome* (the line does not care whose spreadsheet it is). I escalate both.

**Partial receive** if the shipment split. Don't hold the whole receipt because one crate is missing.

**Mode change:** ocean → air if the math works. Batteries and some sensors are not "just air it." UN / hazmat / state-of-charge rules. I check before I hero-quote Friday air.

**Tracking vs actual.** I want a handoff: left factory, in bond, on water, at broker, on dock. "It's shipping" is three different lies.

## 4c. Customs, ITAR, lithium, paperwork

Defense hardware plus batteries is a paperwork delay pretending to be a logistics delay.

I keep commercial invoices, export classification, and battery UN documents in the same place as the purchase order. When a broker holds a crate, I do not start a new engineering debate. I get the missing doc.

If a part is ITAR-locked, I do not "just send it to the other shop in another country" as a shortage workaround. That's how you get a different, worse fire.

## 4d. Quality hold / failed incoming

This is not a delay. This is a bad part.

Playbook I already have [Plenty S8]:

1. Quarantine (suspect lots, kits, maybe finished goods).
2. Protect the vehicle / customer.
3. Get known-good material (new lot, other supplier, sort).
4. Vendor 100% inspect or tightened incoming as a wall.
5. Process review (corrective and preventive action, **CAPA**).
6. Then, and only then, argue about credits and scorecards.

Use-as-is on a seal or a foam grade is a signed Quality/Engineering call. I will not "just this once" to make a shortage report green.

## 4e. Allocation (not enough for everyone)

Production hull vs RaaS spare vs engineering prototype vs Quonset vs Quincy.

I do not privately pick winners. I bring: quantities, dates, customer impact, and a proposed allocation. Leadership / program / manufacturing manager names the winner. I execute and I record it so next week's material requirements planning doesn't steal it back.

---

# 5. Shortage morning (what "own the line" looks like)

I walk in. Material requirements planning (or the floor) says we cannot build.

1. Is it real? (wrong lead time in the item master, demand double-booked, parts on the dock not received)
2. If real: which job is actually next, not which job is loudest.
3. Supplier on the phone the same morning. New date, split, expedite quote.
4. Manufacturing: can we build around it?
5. Quality if the "fix" is a substitute.
6. Visible board: aging shortages, not a 40-row novel. I can do this in Power BI. [Plenty / cv.md]
7. After it's unblocked: why the system didn't see it last week. That's the preventive half.

**Oracle vs NetSuite:** same job, different screens. I will not fake Oracle clicks. I will learn them. [Plenty]

---

# 6. Other calls I'll make every week

**Safety stock vs expedite.** Expedite is a tax you pay when you refused to hold a buffer on a red part, or when engineering changed the world. I will not safety-stock everything. I will not expedite everything. I pick reds, I say the cash, I live with the rest.

**Purchase order firming.** If the forecast is a rumor, I don't firm a 40-week battery buy without S&OP. If the forecast is a program of record, I don't wait for a perfect forecast either.

**Push back on a ship date.** "Can we actually promise that?" Bill of materials + true lead times + current shortages. This is in the posting. I will do it even if it makes sales unhappy. I'd rather fight in a meeting than miss in the water.

**Quincy vs Quonset.** When a kit moves south: who owns the inventory, who owns the shortage, which item master, which buyer. I would get that written early. Two sites plus RaaS is how parts vanish into "I thought you had it."

**Make/buy revisit.** The right answer at 12 hulls a year is wrong at 200. Quonset exists. I would not tattoo last year's decision on the item master forever.

---

# 7. How I'd say this in the room (steal these)

**Make vs buy**
> It depends on the process. COTS I buy. Printed mounts I'd rather control here if we're still iterating. A titanium bottle I'd buy unless we already have the machines and the tank time. I close it with lead time, yield, volume, and how often the revision will move. Then I set the item master so planning matches the choice.

**Change order**
> First question is effectivity and what we already have on order. Printed scrap is annoying. Machined scrap is a schedule. I intercept the purchase orders the same day and I won't kit mixed revisions.

**Lead time slip**
> Confirm the date, name the hulls, split if we can, price the expedite against idle time, then tell the promise if it moved. I don't wait to see if it gets better.

**Quality**
> Quarantine, good material in, vendor 100% as a wall, process review. I have done that on packaging that became a recall. Same motion if a resin or a seal lot fails here.

---

# 8. Questions that make this real on day one

1. Who signs make vs buy: engineering, manufacturing, me, finance?
2. How do change orders actually flow into Oracle and the purchase order?
3. Which ten parts are red right now, and is that list in the system or in someone's head?
4. When a supplier slips, who is allowed to change a customer date?
5. Quincy vs Quonset: one item master or two, and who owns a part in transit?
6. Printed fairings: partner, in-house, or both, and who buys feedstock?

Ask two per conversation. Write the answers into this file after the loop.
