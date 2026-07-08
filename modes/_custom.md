# Custom Instructions -- career-ops

## House Rules

- **Dual-track search:** Harrison targets both (A) procurement/supply chain builder roles AND (B) enterprise account management / account executive roles. Detect track from the JD title and tailor all output.
- **Active interview:** Ramp — remote AE. Do NOT suggest re-applying to Ramp. Prioritize interview prep (`interview-prep/ramp.md`) over new AE cold apps at lower fit.
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

## Off-Limits

- Never claim quota-carrying sales experience, President's Club, or revenue closed unless explicitly added to cv.md by the user.
