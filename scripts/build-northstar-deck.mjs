#!/usr/bin/env node
/**
 * Generates NorthStar Aviation design-session deck via python-pptx.
 * Run: node scripts/build-northstar-deck.mjs
 */
import { execSync } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'interview-prep/ramp');
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, 'NorthStar-Aviation-Procurement-Design-Session.pptx');

const py = `#!/usr/bin/env python3
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE

# Palette — clean aviation / finance (not Ramp trademark colors)
NAVY = RGBColor(0x1B, 0x28, 0x38)
SLATE = RGBColor(0x4A, 0x55, 0x68)
MIST = RGBColor(0xF4, 0xF6, 0xF8)
WHITE = RGBColor(0xFF, 0xFF, 0xFF)
ACCENT = RGBColor(0xC9, 0x8A, 0x2E)  # warm gold
TEAL = RGBColor(0x0E, 0x7C, 0x7B)
LIGHT_TEAL = RGBColor(0xE6, 0xF4, 0xF4)
CARD_BG = RGBColor(0xF8, 0xFA, 0xFC)

W, H = Inches(13.333), Inches(7.5)  # 16:9

prs = Presentation()
prs.slide_width = W
prs.slide_height = H
blank = prs.slide_layouts[6]


def add_bg(slide, color=MIST):
    bg = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, W, H)
    bg.fill.solid()
    bg.fill.fore_color.rgb = color
    bg.line.fill.background()
    spTree = slide.shapes._spTree
    sp = bg._element
    spTree.remove(sp)
    spTree.insert(2, sp)


def add_bar(slide, height=Inches(0.55)):
    bar = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, W, height)
    bar.fill.solid()
    bar.fill.fore_color.rgb = NAVY
    bar.line.fill.background()
    return bar


def textbox(slide, left, top, width, height, text, size=18, bold=False, color=NAVY, align=PP_ALIGN.LEFT):
    tb = slide.shapes.add_textbox(left, top, width, height)
    tf = tb.text_frame
    tf.word_wrap = True
    tf.vertical_anchor = MSO_ANCHOR.TOP
    p = tf.paragraphs[0]
    p.text = text
    p.font.size = Pt(size)
    p.font.bold = bold
    p.font.color.rgb = color
    p.alignment = align
    return tb


def add_footer(slide, label):
    add_bar(slide, Inches(0.08))
    textbox(slide, Inches(0.5), Inches(7.05), Inches(5), Inches(0.35), label, size=10, color=SLATE)
    textbox(slide, Inches(11.5), Inches(7.05), Inches(1.5), Inches(0.35), "NorthStar", size=10, color=SLATE, align=PP_ALIGN.RIGHT)


def card(slide, left, top, width, height, title, body, title_color=NAVY, accent_bar=True):
    shape = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, top, width, height)
    shape.fill.solid()
    shape.fill.fore_color.rgb = WHITE
    shape.line.color.rgb = RGBColor(0xE2, 0xE8, 0xF0)
    shape.line.width = Pt(1)
    if accent_bar:
        bar = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, left, top, Inches(0.08), height)
        bar.fill.solid()
        bar.fill.fore_color.rgb = ACCENT
        bar.line.fill.background()
    textbox(slide, left + Inches(0.25), top + Inches(0.2), width - Inches(0.4), Inches(0.45), title, size=16, bold=True, color=title_color)
    textbox(slide, left + Inches(0.25), top + Inches(0.65), width - Inches(0.4), height - Inches(0.75), body, size=13, color=SLATE)


# ── Slide 1: Title ──
s1 = prs.slides.add_slide(blank)
add_bg(s1, NAVY)
textbox(s1, Inches(0.9), Inches(2.0), Inches(11), Inches(1.2), "Procurement Design & Activation", size=40, bold=True, color=WHITE)
textbox(s1, Inches(0.9), Inches(3.15), Inches(11), Inches(0.6), "NorthStar Aviation  ·  Design session with Monica (Controller)", size=20, color=RGBColor(0xCB, 0xD5, 0xE1))
textbox(s1, Inches(0.9), Inches(4.0), Inches(11), Inches(0.5), "Align on design. Lock the first step.", size=18, color=ACCENT)
textbox(s1, Inches(0.9), Inches(5.5), Inches(11), Inches(0.4), "Harrison Pizzi  ·  August 2026", size=14, color=RGBColor(0x94, 0xA3, 0xB8))

# ── Slide 2: Problems + direction ──
s2 = prs.slides.add_slide(blank)
add_bg(s2, MIST)
add_footer(s2, "What we're solving")
textbox(s2, Inches(0.7), Inches(0.45), Inches(8), Inches(0.6), "What we're solving", size=28, bold=True, color=NAVY)

card(s2, Inches(0.7), Inches(1.35), Inches(5.8), Inches(2.1),
     "Approval speed",
     "Approvals bottleneck.\\nParts miss need-by dates.")
card(s2, Inches(6.85), Inches(1.35), Inches(5.8), Inches(2.1),
     "Audit readiness",
     "No single trail request → payment.\\nEmail, Slack, spreadsheets.")

# Direction bar
dir_shape = s2.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.7), Inches(3.85), Inches(11.95), Inches(1.55))
dir_shape.fill.solid()
dir_shape.fill.fore_color.rgb = TEAL
dir_shape.line.fill.background()
textbox(s2, Inches(1.0), Inches(4.05), Inches(11.4), Inches(0.45), "START HERE", size=12, bold=True, color=RGBColor(0xB2, 0xDF, 0xDB))
textbox(s2, Inches(1.0), Inches(4.4), Inches(11.2), Inches(0.9),
       "One controlled aircraft parts path — request through payment.\\nProve it with a pilot, then expand.", size=20, bold=True, color=WHITE)

# ── Slide 3: Path + confirm ──
s3 = prs.slides.add_slide(blank)
add_bg(s3, MIST)
add_footer(s3, "Recommended path")
textbox(s3, Inches(0.7), Inches(0.45), Inches(10), Inches(0.6), "Recommended path · confirm together", size=28, bold=True, color=NAVY)

steps = [
    ("1  Request", "Parts Program\\nQty × price · need-by\\nVendor · part #"),
    ("2  Approve", "Your thresholds\\nInventory? (TBD)"),
    ("3  PO", "On approval\\n→ NetSuite"),
    ("4  Receive", "Where you\\nreceive today"),
    ("5  Match & pay", "Order + receipt\\n+ invoice → pay"),
]
x0 = Inches(0.55)
step_w = Inches(2.35)
gap = Inches(0.12)
for i, (title, body) in enumerate(steps):
    left = x0 + i * (step_w + gap)
    top = Inches(1.25)
    h = Inches(2.35)
    shape = s3.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, top, step_w, h)
    shape.fill.solid()
    shape.fill.fore_color.rgb = WHITE if i % 2 == 0 else LIGHT_TEAL
    shape.line.color.rgb = RGBColor(0xCF, 0xD8, 0xE3)
    shape.line.width = Pt(1)
    # step number circle
    circ = s3.shapes.add_shape(MSO_SHAPE.OVAL, left + Inches(0.15), top + Inches(0.15), Inches(0.42), Inches(0.42))
    circ.fill.solid()
    circ.fill.fore_color.rgb = TEAL if i < 4 else ACCENT
    circ.line.fill.background()
    num = str(i + 1)
    textbox(s3, left + Inches(0.15), top + Inches(0.18), Inches(0.42), Inches(0.35), num, size=14, bold=True, color=WHITE, align=PP_ALIGN.CENTER)
    textbox(s3, left + Inches(0.15), top + Inches(0.62), step_w - Inches(0.3), Inches(0.55), title.split(' ', 1)[1] if ' ' in title else title, size=15, bold=True, color=NAVY)
    textbox(s3, left + Inches(0.15), top + Inches(1.15), step_w - Inches(0.3), Inches(1.1), body.replace('\\\\n', '\\n'), size=11, color=SLATE)
    if i < 4:
        arrow = s3.shapes.add_shape(MSO_SHAPE.RIGHT_ARROW, left + step_w + Inches(0.02), top + Inches(1.0), Inches(0.08), Inches(0.25))
        arrow.fill.solid()
        arrow.fill.fore_color.rgb = RGBColor(0x94, 0xA3, 0xB8)
        arrow.line.fill.background()

textbox(s3, Inches(0.7), Inches(3.75), Inches(12), Inches(0.35),
       "Three-way = order + receipt + invoice before pay", size=12, bold=True, color=TEAL)

# Confirm panel
confirm = s3.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.7), Inches(4.2), Inches(11.95), Inches(2.55))
confirm.fill.solid()
confirm.fill.fore_color.rgb = WHITE
confirm.line.color.rgb = ACCENT
confirm.line.width = Pt(2)
textbox(s3, Inches(1.0), Inches(4.35), Inches(4), Inches(0.4), "Confirm with me", size=16, bold=True, color=ACCENT)

prompts = [
    "Inventory in the path — visibility, accountability, or both?  _______________",
    "Approval thresholds — who / at what $  _______________",
    "Receiving — system + owner  _______________",
    "Pilot group + working session (45–60 min)  _______________",
]
for j, line in enumerate(prompts):
    textbox(s3, Inches(1.0), Inches(4.85 + j * 0.42), Inches(11.4), Inches(0.38), line, size=13, color=NAVY)

# ── Slide 4: Extensions ──
s4 = prs.slides.add_slide(blank)
add_bg(s4, MIST)
add_footer(s4, "After the path is live")
textbox(s4, Inches(0.7), Inches(0.45), Inches(10), Inches(0.6), "After the path is live", size=28, bold=True, color=NAVY)
textbox(s4, Inches(0.7), Inches(1.05), Inches(10), Inches(0.4), "Extensions — not week-one blockers", size=16, color=SLATE)

card(s4, Inches(0.7), Inches(1.75), Inches(5.8), Inches(3.2),
     "Bill Pay",
     "Matched invoices paid in Ramp.\\n\\nDue dates leave the spreadsheet.\\n\\nFull request-to-payment trail in one place.")
card(s4, Inches(6.85), Inches(1.75), Inches(5.8), Inches(3.2),
     "AI summary (optional)",
     "Drafts a short summary for human approvers.\\n\\nDoes not approve or reject.\\n\\nUseful as volume grows — path first.")

textbox(s4, Inches(0.7), Inches(5.3), Inches(11.5), Inches(0.5),
       "Vendor research agents can help on new vendors later. Not required to prove the parts path.", size=12, color=SLATE)

# ── Slide 5: This week + lock ──
s5 = prs.slides.add_slide(blank)
add_bg(s5, MIST)
add_footer(s5, "This week")
textbox(s5, Inches(0.7), Inches(0.45), Inches(10), Inches(0.6), "This week", size=28, bold=True, color=NAVY)

hero = s5.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.7), Inches(1.2), Inches(11.95), Inches(1.1))
hero.fill.solid()
hero.fill.fore_color.rgb = NAVY
hero.line.fill.background()
textbox(s5, Inches(1.0), Inches(1.45), Inches(11.4), Inches(0.75),
       "Stand up the Aircraft Parts Program  ·  pilot group  ·  one real request end-to-end", size=20, bold=True, color=WHITE)

actions = [
    ("1", "Build & publish the Parts Program"),
    ("2", "Run the first request together"),
    ("3", "Review what broke — tune before scaling"),
]
for k, (num, label) in enumerate(actions):
    left = Inches(0.7) + k * Inches(4.05)
    box = s5.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, Inches(2.55), Inches(3.85), Inches(1.35))
    box.fill.solid()
    box.fill.fore_color.rgb = WHITE
    box.line.color.rgb = RGBColor(0xE2, 0xE8, 0xF0)
    textbox(s5, left + Inches(0.2), Inches(2.7), Inches(0.5), Inches(0.5), num, size=28, bold=True, color=TEAL)
    textbox(s5, left + Inches(0.75), Inches(2.85), Inches(2.9), Inches(0.9), label, size=14, bold=True, color=NAVY)

lock = s5.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.7), Inches(4.15), Inches(11.95), Inches(2.35))
lock.fill.solid()
lock.fill.fore_color.rgb = CARD_BG
lock.line.color.rgb = ACCENT
lock.line.width = Pt(2)
textbox(s5, Inches(1.0), Inches(4.3), Inches(5), Inches(0.4), "Lock before we leave", size=16, bold=True, color=ACCENT)

locks = [
    "☐  Inventory decision for the pilot",
    "☐  Approval thresholds (or owner who has them)",
    "☐  Receiving owner + system",
    "☐  Pilot group + session on calendar",
]
for m, item in enumerate(locks):
    textbox(s5, Inches(1.0), Inches(4.85 + m * 0.42), Inches(11), Inches(0.38), item, size=14, color=NAVY)

textbox(s5, Inches(0.7), Inches(6.65), Inches(11.5), Inches(0.35),
       "60-day win = one trusted parts path — not every edge case on day one.", size=11, color=SLATE)

prs.save(${JSON.stringify(outPath)})
print("Saved:", ${JSON.stringify(outPath)})
`;

const pyPath = join(root, 'scripts/.build-northstar-deck.py');
writeFileSync(pyPath, py);
execSync(`python3 ${pyPath}`, { stdio: 'inherit', cwd: root });
console.log(`\nDeck: ${outPath}`);
