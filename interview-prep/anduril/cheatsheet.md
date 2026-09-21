# Anduril Buyer/Planner — MASTER CHEAT SHEET

**PRIMARY SOURCE.** Overlays copy from here. If anything conflicts, this wins.

**You:** Harrison Pizzi · Plenty manufacturing buyer → Comcast · Richboro, PA · ~30-day notice  
**Role:** Buyer/Planner · **Book:** Copperhead + Seabed Sentry · Quincy QCY-01  
**HM:** Stephen Shaw (friend — one sentence, not a favor)  
**Comp ask:** $140K base (posted $99–130K; Senior listed $129–171K)  
**Clearance:** eligible for Secret — don’t claim you have one  
**Answers:** ~90–120 sec · Situation → Approach → Result → stop

**Person overlays (print for that call only):** `jamie` · `robbie` · `kyle` · `stephen` · `janine`  
**Deep dive:** `stephen-onsite.md` · Hardware: `hardware-primer.md`  
**Panel focus (Stephen, Sep 2026):** **BOM management → clear to build** + **NPI**. Robbie and Kyle are both NPI seats (sourcing→eng program · NPI ME).

| When | Who | Overlay |
|------|-----|---------|
| Mon 2:00–2:30 | Jamie Lichay — buyer/planner peer | `jamie-cheatsheet.md` |
| Thu 12:00–12:30 | Robbie Collins — sourcing → eng program / NPI | `robbie-cheatsheet.md` |
| Thu 12:30–1:00 | Kyle Davis — NPI mechanical engineer | `kyle-cheatsheet.md` |
| Thu 1:00–1:45 | Stephen Shaw — HM | `stephen-cheatsheet.md` |
| If scheduled | Janine — buyer/planner peer | `janine-cheatsheet.md` |

---

## 1. Open (~60–75 sec)

Your draft, tightened for speech:

> I’m Harrison. Most of my career has been in procurement and supply chain, a lot of it tied directly to manufacturing.
>
> Before Comcast I was Senior Global Supply Manager at Plenty. I owned direct materials end to end — BOMs and MRP, inventory and planning with ops, CapEx and tooling, and supplier quality issues that could stop a line. We took about 30% out of BOM cost in six months, so I spent a lot of time balancing cost, supply, quality, and production at once. I was deep in the systems too — NetSuite, Arena for BOM and change control, Coupa.
>
> I’m at Comcast now managing wireless and fixed network categories. Big spend, complex suppliers, heavy commercial work. I’ve kept building on negotiation and supplier management there.
>
> What I want next is to get back closer to the hardware and the production environment — where procurement decisions show up in what actually gets built. That’s what drew me to this role and to Anduril’s maritime business. I can bring the commercial and supplier muscle from Comcast plus the hands-on manufacturing and planning from Plenty, and put it closer to the product.

Stop. Let them steer.  
Recall / ETQ / Stephen only if they ask.

---

## 2. Why Anduril (one answer)

Your draft. Answers *why Anduril* — not “I’m good at Comcast.”

> What really draws me to Anduril is that you’re not just building advanced defense products — you’re trying to build the industrial base and supply chain around them in a fundamentally different way.
>
> The traditional defense model can mean huge, fragmented supply chains and very long production timelines. Anduril is trying to change that — build capable systems, scale them faster, and create a supply chain that can actually support that speed.
>
> That’s personally exciting to me because supply chain is the part of the business I understand and enjoy. I’ve worked the manufacturing side — BOMs, MRP, suppliers, inventory, production — and at Comcast I’ve built real experience managing complex suppliers and commercial relationships.
>
> So when I look at Anduril, I see a company where procurement and supply chain aren’t just a support function. They’re part of solving the actual problem. Doing that on the maritime team, helping scale Copperhead and Seabed Sentry, is exactly the work I want.

**If they only ask why leave Comcast:**  
> Comcast is strong commercial work. I want supply chain tied to building and scaling hardware. That’s this seat.

**If they push mission/defense:** stay on industrial base / scale / supply chain — don’t give a geopolitics speech.


---

## 3. Technical BOM → clear-to-build (HAVE COLD — Stephen’s last coaching)

**Job in one line:** take the BOM and turn it into a **viable clear-to-build plan** — material that can actually be bought, timed, and on the floor when the build needs it. Not PO clerk. Not PDF reader.

> I don’t PO the PDF. I read the whole packet: rev, specs, qty, need date, open trade studies. At Plenty that lived in Arena.
>
> Then I sort it. Critical path and long lead first. COTS that should be dual-sourced. Custom that needs eng in the room. Soft callouts that aren’t buyable yet. Missing lead times, sole source, TBD finishes: flagged the same week with options, not a shrug.
>
> Then I buy to the plan: long lead first, buffers only on parts that stop a build or a test, clean item master so MRP isn’t lying. And I stay on it after the PO — when the rev moves, I intercept. End state: **clear to build** — ops can release without a surprise shortage on a part that was never really buyable or never really timed.

**Spot issues early:** long lead vs need date · sole source · soft specs · wrong buffer · rev drift · bad UoM / conversion. Clearing a queue isn’t the job.

**Plenty proof — purchasable BOM + unit of measure (Jamie / planning rooms):**  
> I didn’t just consume BOMs — I built and cleaned them for **purchasability**. Hard part was unit of measure. Ops often ran **weight**. Sales thought in **finished-goods cases**. We bought by **count / box / each**. If those conversions weren’t right in the item master and BOM, MRP lied and you weren’t clear to build even when the screen looked green. I made the buy unit, stock unit, and BOM unit line up so the plan matched how we actually purchased.

---

## 4. How you work with NPI (Robbie + Kyle — COLD)

**Stephen:** significant NPI focus. **Robbie** = sourcing moving toward eng program mgmt. **Kyle** = NPI mechanical engineer. Same buyer posture for both — accent differs (program/schedule vs mechanical design).

> Eng owns the requirement. I turn it into a buyable, schedulable plan. I want in early, before the unique part is sacred: what’s frozen vs in trade study, what’s long lead, what’s sole source, and whether OTS dies for a real reason or a soft one.
>
> I bring supplier reality back — lead times, MOQs, capacity. If it isn’t buyable yet, I say so the same week with options. When the rev moves, I intercept in PLM (Arena). I’m not redesigning your board. I’m keeping material lined up and stopping a thirty-week fantasy. End state: **clear to build**.

**Lead story for both eng rooms — Comcast disaggregation:**
> Network disaggregation: software off the vendor box. Worked with eng on hardware requirements — capacity, form factor, power/thermal, ports, management interfaces — then took it to market. Built-to-spec and off-the-shelf options. Multiple vendors against a real spec.

**Backup only — cold plasma / sanitation:** seed pathogens → early tech / outside service → in-house; or S18 dirty PN → WO → clean PN. Catching a parts/process problem early, not playing ME.

**Don’t:** stack Comcast + plasma + sanitation in one room. One NPI story.

---

## 5. Other must-have answers

**Trade study / long lead still open**  
> Buy blank/raw/long-lead path now. Name who owns scrap if the study flips. Decision date on eng. Finish when the dash locks. Update mBOM the same day.

**Shortage morning**  
> Confirm it’s real. Call supplier same morning. Ask MFG if we can build around it. Quality if someone wants a sub. Fix why the system missed it.

**ECO after PO**  
> Effectivity + what’s bought. Use / rework / scrap. Freeze bad rev. Disposition dock/WIP. Update mBOM same day. Arena + ETQ were day-to-day for that at Plenty.

**MRP / safety stock**  
> System drives buys from BOM + demand − on-hand/on-order + lead time. Safety stock only on parts that kill the build. Dirty item master = noise. Wrong UoM = fake clear-to-build.

**Clear to build (Stephen — say this)**  
> BOM → buyable plan → material timed to the release. If a line isn’t purchasable, lead time is fantasy, or UoM is wrong, you’re not clear to build — the system just looks green.

**Process build — seed / media sanitation (S18 — process rooms)**  
> Sanitation started as an outside service. Worked change control with eng and plant science to bring it in-house and in-line. Dirty/raw under one NetSuite part number → work order for clean → clean material back under a differentiated part number. Planned against throughput, capacity, and how long clean stayed in-spec. Process + inventory truth, not just a vendor scrub.

**Base A/B nutrients (commonality only — not BOM method)**  
> Worked with plant science and eng on Base A and Base B as the start for every cultivar; fine-tune with micro/macro per cultivar. ~20% changeover cut. Shared base, variant top-up — same idea as shared boards across Copperhead/Sentry.

**Low volume / MOQ**  
> Seeds/nutrients: annual forecast, restocking fee or roll volume; cost of stockout mattered, not just unit price.

**Tub recall**  
> Brittle tubs → chips → recall. Quarantine → good material in → vendor 100% → process review with SQE (ETQ). Own it until parts are good.

**Make vs buy**  
> COTS: buy, dual source if a miss kills schedule. Custom while iterating: keep eng close. Specialty: buy from people who live there. Make never means no buying.

**No ME / commodity gap**  
> Not an ME. I make requirements buyable and keep material moving. Plenty directs were mostly farm inputs, packaging, CapEx/tooling + spares BOMs. Not foam/electronics commodity depth. Method transfers.

**Oracle**  
> Same job as NetSuite MRP. Different screens. I’ll learn yours.

**90 days**  
> Own Copperhead/Sentry materials. Floor + BOMs + open POs + true lead times. Shortage rhythm with MFG/quality/eng. By 90: S&OP cadence, cleaner master data, red-part list with owners.

**Comp (only if asked)**  
> Around $140K base. Over this posting, inside Senior bands. Happy to talk equity. Not pretending $115K works.

---

## 6. Story → room (don’t repeat full recall)

| Story | Jamie / Janine | Robbie | Kyle | Stephen |
|-------|----------------|--------|------|---------|
| Open / Why Anduril | yes | short | short | full |
| Clear-to-build / BOM→plan | **LEAD** | **LEAD** | **LEAD** | **must** |
| MRP / safety stock | **LEAD** | backup | backup | yes |
| Purchasable BOM + UoM | **LEAD proof** | light | light | yes |
| Work with NPI | light | **LEAD** | **LEAD** | yes |
| Comcast disaggregation | backup | **LEAD story** | **LEAD story** | one NPI max |
| Sanitation process (S18) | **LEAD if process** | backup only | backup only | **yes if process** |
| Technical BOM method | yes | **yes** | **yes** | yes |
| Base A/B commonality | yes | no | no | yes |
| Tub recall | short | only if asked | only if asked | once if needed |
| MOQ / low volume | yes | light | light | **must** |
| Trade-study hedge | backup | **yes** | **yes** | **must** |
| Coupa 0→80 | if process | skip | skip | light |
| Arena / ETQ | name once | name once | name once | name once |

---

## 7. Product / site flash

| Thing | Line |
|-------|------|
| Copperhead (Toledo) | Your book. High-speed AUV. More OTS, less sole source. |
| Seabed Sentry | Your book. Seafloor nodes. Commonality mostly boards/electronics. |
| Dive-LD / Alder | Neighbors. Know names. Don’t claim ownership. |
| Quincy | Eng + low-rate / design change. On-site. |
| Quonset | Volume plant ~1 hr south. |
| DPAS | Primes with rated orders can jump queue; get closer to suppliers, early demand, dual source, buffer red parts. |

---

## 8. Asks (pick 2–3 per room) — make these earn the room

**Jamie / Janine (peer buyer/planner)**  
1. On your book, where does clear-to-build usually break — BOM, lead time, UoM/master data, or suppliers?  
2. Copperhead vs Sentry: what’s actually common on the BOM vs what’s forced unique?  
3. How clean is Oracle / item master / unit of measure day to day?  
4. When eng flips a rev after the PO, how fast should planning intercept — and who owns the scrap call?  
5. What’s the worst shortage morning you’ve had recently, and what would have prevented it?  
6. What do you wish the last person in this seat had done differently?

**Robbie (sourcing → eng program / NPI)**  
1. Which open trade studies on Copperhead/Sentry are burning long-lead clock, and who signs a hedge before finish locks?  
2. As you move toward program: what does “clear to build” mean for a gate you’re accountable for?  
3. Sole source today — tech, qual, or volume? Which ones should die?  
4. When a rev releases, what do you want from planning/buyer the same day?  
5. What does a good buyer do in design review that a mediocre one doesn’t?  
6. How early do you want supply chain in before a unique part gets locked?

**Kyle (NPI mechanical engineer)**  
1. On NPI right now, which long leads are burning while the print’s still open?  
2. When you release a rev, what do you want from planning/buyer the same day?  
3. Where does clear-to-build break between mechanical NPI and supply — soft specs, sole source, or master data?  
4. What does a good buyer do in your design review that a bad one doesn’t?  
5. Which parts are still sole source for a soft reason vs a real technical one?  
6. How do you want me to push back when a callout isn’t buyable yet?

**Stephen (HM)**  
1. Day-one ownership: Copperhead / Sentry vs LD / Alder?  
2. Which long-lead hedges do you want signed before finish specs lock?  
3. How will you measure this seat at six months — clear-to-build, shortage rate, something else?  
4. Between Robbie’s program lane and Kyle’s NPI ME lane, where should this buyer spend the most time early?  
5. Quincy vs Quonset: who owns inventory and the PO when a kit moves?  
6. Which parts lose most often to DPAS-rated customers, and what’s the workaround?  
7. Any reservations about my background I can clear up now?

---

## 9. Logistics (one story)

Quincy on-site · same as Stephen · Travel ≤25% (ask Quonset + vendors vs field) · Secret eligible · Notice ~30 days · Other processes: open, this one is specific (manufacturing + Stephen)

---

## 10. Don’t

Lead Comcast · Coupa tour · geopolitics / Palmer quotes · fake electronics · Oracle wizard · apologize for 10 min about not being an ME · stack three NPI stories · full recall four times · open with comp · two Quincy stories

## Numbers (1–2 per answer)

30% BOM · ~20% changeover (Base A/B) · Coupa ~7 weeks / ~15 punchouts / 99% on contract / 3→1.5 days (process rooms only) · ~40% plastic (packaging only) · $140K ask
