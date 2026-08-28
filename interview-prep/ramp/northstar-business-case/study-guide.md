# NorthStar business case — study guide

Everything you need to **wow** the Activation panel: procurement judgment, collaborative design, commit, triage under pressure.

**Print day-of:** [`cheatsheet.md`](cheatsheet.md) · **Rehearse:** [`script.md`](script.md) · **Deck:** [`NorthStar-Aviation-Procurement-Design-Activation.pptx`](NorthStar-Aviation-Procurement-Design-Activation.pptx)

---

## 1. What they’re actually scoring

This is **not** a Ramp product quiz. It’s a simulation of **senior IC Activation**:

| Dimension | What “wow” looks like |
|-----------|------------------------|
| **Peer credibility** | You sound like a Controller’s implementer, not an AE reading release notes |
| **Prescription + flexibility** | You recommend a parts path **and** leave joints for her numbers |
| **Discovery** | You ask questions that **change** the design — especially Inventory |
| **Product sense** | Bill Pay closes the loop; agents are workflow research + routing, not magic |
| **Commitment** | Calendar hold, named owners, one live request — before you hang up |
| **Triage** | Calm ranking when four accounts are on fire; activation window is the north star |

---

## 2. NorthStar context (stay in character)

| Fact | Use |
|------|-----|
| **Monica** · Controller | Cares about speed + audit; not impressed by feature lists |
| **NetSuite** · system of record | Books + receiving; Ramp = buying path + approvals + match |
| **Expense already on Ramp** | You’re extending, not greenfield selling |
| **Pains** | Need-by misses; no request→payment trail (email/Slack/sheets) |
| **Growth** | Carrier contracts / regions → volume multiplies bad process |

**Your positioning:** Buyer-side operator — *“I’ve been the customer.”* Plenty = Coupa, policy, NetSuite. Comcast = enterprise scale only when relevant.

---

## 3. Your deck — slide by slide

### Slide 1 — Title
**Job:** Set tone. 10 seconds.  
**Say:** Design session, not demo.  
**Don’t:** Read the date line.

### Slide 2 — What we’re solving
**Job:** Two pains + one direction.  
**Say:** Speed + audit → **one parts program first**. Ask: *“Does that match your priority?”*  
**Don’t:** Read “regional expansion” from speaker note as a lecture — one sentence max if at all.

### Slide 3 — Recommended path (★ most important)
**Job:** 5-step flow + **Confirm with me** panel.  
**Say:** Walk flow in 60 seconds. **Stop at Inventory question.** Write her answers on blanks.  
**Wow moment:** Visibility vs accountability vs both — see [`script.md`](script.md).  
**Don’t:** Read all four confirm lines as a checklist interrogation. Pick 3–4 based on her answers.

### Slide 4 — Ramp extensions
**Job:** Show you know product; keep it short.  
**Bill Pay:** Match + pay; trail closes.  
**Procurement agents (accurate):**
- Embedded **Agent review** step in Spend Program workflow  
- Research: web + attached docs (contracts, SOC 2, etc.)  
- Structured report + agent fields (risk tier, missing info)  
- Can **route** via split paths (e.g. high risk → Security)  
- **Does not approve or reject**  
- Good for: new vendors, legal/security, **duplicate request detection**  
- **Not** week-one for known MRO parts pilot  

**Don’t:** Spend >90 seconds here. Don’t promise agents fix NetSuite duplicate vendors automatically — ask Ramp internally (see [`../questions-for-ramp.md`](../questions-for-ramp.md)).

### Slide 5 — This week + lock
**Job:** Close the deal.  
**Say:** Build → first request together → review what broke. Read lock list. **Get calendar time.**  
**Don’t:** End without owners or session time.

---

## 4. Recommended defaults vs open joints

**Prescribe these (your POV):**
- One **aircraft parts** program first  
- **Qty × unit price** + need-by on every request  
- PO on approval → **NetSuite**  
- **Three-way** before pay (define it once)  
- **Pilot** small — prove one end-to-end request  
- **Emergency:** document + convert to real order in ~2 business days — not forever Slack  
- **Change order** if qty/price/need-by/vendor moves after approve  

**Discover these (her numbers / org):**
- Inventory: visibility vs accountability vs both  
- Dollar bands + approvers  
- Receiving: NetSuite vs Ramp; who; SoD (requester ≠ sole receiver)  
- Required NetSuite line fields (GL, dept, class, location)  
- Quote rule above what threshold  
- Match tolerance  
- NetSuite admin for PO + receipt  
- Pilot scope (site vs parts family)  

**Adapt, don’t abandon:** If she receives in Ramp today, design for that — don’t fight religion on slide 3.

---

## 5. Discovery questions (steal answers)

Write on notepad: **PO birth · Inventory why · bands · receiver · NS fields · tolerance · quote · NS owner · pilot**

1. Last missed need-by — where did time die?  
2. Audit pull request→payment — how long, what’s painful?  
3. PO **before** the buy or **after** the invoice?  
4. Who enters **item receipt**? Same as requester?  
5. Price/qty mismatch — tolerance before AP stops?  
6. Dollar bands + who in each?  
7. Quote required above what amount?  
8. Required fields on a NetSuite parts PO line today?  
9. Who owns NetSuite admin for POs + receipts?  
10. Pilot: one site or one parts family?

**Mirror before you prescribe:**
> “So today POs often happen [before/after], receiving is [role/system], coding needs [fields], and the break is [speed / trail / both].”

---

## 6. Objection handling

| Pushback | Response |
|----------|----------|
| NetSuite is our ERP | Keep it. Ramp runs intake, approvals, match visibility. |
| Our process is unique | Controls stay; Slack isn’t a control. |
| Everyone day one | Pilot → expand. |
| Ballpark estimates OK | Change orders exist; match needs qty×price. |
| Mix 2-way and 3-way on one program | Matching is per channel — parts three-way; services later separate. |
| AI will fix approvals | Agents research + route; **humans approve**. Not a substitute for bands. |
| Inventory is sacred | OK — design SLA/parallel so need-by doesn’t die. |

---

## 7. Part 2 triage — master the frame

Full scenarios: [`triage.md`](triage.md)

**One sentence frame:**
> Zero live usage at day 60 = failure. Rank what prevents the **first trusted request** or kills a **live** one.

**Memorize top triggers:**
- Built but **zero usage** + late window  
- **Regression** to Slack after one success  
- **Broken match** / no receipt  
- **Person blocking** pilot (Inventory)  
- **Scope creep** before first request  
- Healthy **Bill Pay / AI / services** ask → lower  

---

## 8. Stories (use sparingly)

| Story | When |
|-------|------|
| **S1** Coupa / policy / 99% on contract / cycle time | Implementation credibility — reframe as customer go-live |
| **S7** Controller-signed credit packet | Vendor onboarding / terms control — if vendor setup comes up |
| **S8** Tub packaging CAPA | Quality / shortage — only if manufacturing tangent |

**Max one story in Part 1.** This round is design, not STAR theater.

---

## 9. What “wow” is NOT

- Coupa feature tour  
- Inventing $5k FP&A thresholds  
- Reading every bullet  
- AI as the hero of the hour  
- Perfect process design in triage  
- Leaving without **calendar + owners**  

---

## 10. What “wow” IS

1. **Inventory diagnostic** — visibility vs accountability — pause, listen, adapt  
2. **Qty×price + three-way** without being asked  
3. **Writing her answers** on the confirm panel like a working session  
4. **Bill Pay + agents** described accurately in 90 seconds  
5. **Lock before leave** — session booked  
6. **Triage** — rank first, crisp next steps, activation language  

---

## 11. Rehearsal plan

| When | Do |
|------|-----|
| **Tonight** | Read study guide once · run [`script.md`](script.md) out loud with timer · target 12–14 min |
| **Morning of** | [`cheatsheet.md`](cheatsheet.md) only · one cold open · one Inventory question · one close |
| **10 min before** | Notepad columns · deck open on Slide 1 · water |

**Cold-run checklist:**
- [ ] Open without slides  
- [ ] Inventory question feels natural, not scripted  
- [ ] Agents = workflow research + routing, not “summary”  
- [ ] Lock list + calendar ask  
- [ ] Part 2: rank one set (A, B, or C) out loud in [`triage.md`](triage.md)  

---

## 12. Notepad template

```
INVENTORY: visibility / accountability / both — decision:
BANDS: A $___ B $___ C $___  approvers:
RECEIVE: system ___  owner ___
NS FIELDS REQUIRED:
TOLERANCE:
QUOTE ABOVE $:
NS ADMIN:
PILOT:
SESSION: date/time:
60-DAY FAIL IF:
```

---

## 13. File map

| File | Purpose |
|------|---------|
| `NorthStar-Aviation-Procurement-Design-Activation.pptx` | **Present this** |
| `script.md` | Timed Part 1 script |
| `cheatsheet.md` | Day-of one screen |
| `triage.md` | Part 2 scenarios |
| `pack.md` | Deep reference / legacy full pack |
| `../questions-for-ramp.md` | Ask Ramp about duplicate vendors, etc. |

Good luck. Lead with judgment, not jargon.
