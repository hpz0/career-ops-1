# Custom Instructions -- career-ops

## House Rules

- **Interview-prep layout:** One folder per company under `interview-prep/{company-slug}/`. Default two active files: `cheatsheet.md` (day-of) + `prep.md` (scripts/intel). Named rounds can use clearer names (e.g. Ramp: `caroline.md` + `caroline-prep.md`). Cross-company stories stay in `interview-prep/story-bank.md`. Put superseded drafts in `{company}/_archive/` — do not keep parallel “chatgpt / v2 / hm-qa” copies at the top level. Prefer this over flat `interview-prep/{company}-{role}.md` dumps when writing new prep for Harrison.
- **Dual-track search:** Harrison targets both (A) procurement/supply chain builder roles AND (B) enterprise account management / account executive roles. Detect track from the JD title and tailor all output.
- **Active interview (priority):** Ramp — Procurement Product Activation — **HM Caroline Novas done 2026-08-12** (went fine). She will decide **manager vs IC**, then next steps. Debrief: `interview-prep/ramp/caroline-debrief-2026-08-12.md`. Do NOT re-apply; confirm remote + base when path is clear.
- **Active interview:** The Nuclear Company — Sr. Category Manager Indirect/Corporate — **HM next week w/ Rebekah O'Hara** (Director, Strategic Sourcing). Prep: `interview-prep/the-nuclear-company/` (cheatsheet + prep; HM sheet if present). Relocation already OK — do not reopen.
- **Secondary Ramp thread:** AE exploratory with Max — keep warm; do not confuse with Activation role in outreach or prep.
- **Hunt refinement (Jul 2026):** Prioritize **Director+** remote procurement/sourcing — especially **data centers, hardware, infrastructure**, and **source-to-pay / spend analytics**. **Remote US only — not relocating** to Boston, SF, NYC, etc. **Not an engineer** — discard engineering/PM/design titles. Deprioritize on-site PA suburbs and 25%+ travel titles.
- **Scan is two steps (IMPORTANT):**
  1. `node scan.mjs` — zero-token scan of tracked companies + job boards. Does NOT run `search_queries` in portals.yml.
  2. Agent WebSearch — after step 1, run enabled `search_queries` and append new URLs to `data/pipeline.md`.
  - Results land in **`data/pipeline.md`** (Pending section), NOT `data/applications.md`.
- **Track B CV rule:** When the role is Account Executive, Account Manager, Strategic Account Manager, or Key Account Manager, reframe cv.md using the Account Management tailoring rules in `modes/_profile.md`. Never invent quota numbers or closed-won revenue.
- **Track B priority:** Fintech/spend SaaS AE (Ramp, Coupa, Zip) > biotech AE selling to scientists (Benchling-type).
- **Track A CV rule:** When the role is procurement/supply chain, use standard procurement framing from cv.md.
- **Buyer-side angle for AE:** Always lead with "I was the procurement buyer" positioning for sales roles.

## Output Preferences

- Evaluation reports: state which track (A or B) the role belongs to in Block A.
- Flag agency postings (Boden Talent, Spencer Rigby, Zazu, etc.) — note end employer if known.
- If score >= 4.0 on Track B fintech/spend AE, note account-management CV variant.

## Resume / CV Formatting (persistent)

- **One page every time** — letter format for US roles; tighten spacing, drop weak early roles / non-relevant certs / empty Projects section when needed to fit.
- **Short professional summary** — 2–3 lines max (not 4+).
- **Always include a Skills section** — JD-keyworded, truthful reformulation only.
- Prefer Core Competencies + Skills + Experience + Education; omit Projects/Certifications unless they strengthen the specific JD.
- Ask clarifying questions when JD skills are adjacent but not explicit in `cv.md` (e.g. Power BI, spend analytics, domain-specific categories).

## Off-Limits

- Never claim quota-carrying sales experience, President's Club, or revenue closed unless explicitly added to cv.md by the user.
