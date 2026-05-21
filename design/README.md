# Handoff: Cal Club Landing Page

## Overview

A responsive marketing landing page for **Cal Club**, an AI nutrition coach for people who work out. The page introduces the product, makes the case against generic trackers, illustrates the three-times-a-day "adaptive" coaching with the actual app screens, answers common questions, and converts to App Store / Play Store downloads.

The design follows the **Luffu** design system — editorial, calm, light-mode, magazine-spread typography. Deliberately *not* the dark-mode SaaS look common in the nutrition category.

## About the Design Files

The files in this bundle are **design references built in plain HTML/CSS** — single-file prototypes showing the intended look, layout, copy, and behavior. They are **not production code to ship verbatim**.

Your job is to **recreate this design inside Cal Club's existing codebase**, using the project's established patterns, components, framework conventions, and asset pipeline. If the project doesn't have a marketing site stack yet, pick the most appropriate framework (Next.js / Astro / etc.) and implement there.

Treat the HTML as the **source of truth** for:
- Final copy (every word — headline, subhead, problem rows, FAQ Q&A, footer)
- Exact colors, type sizes, spacing, radii (see Design Tokens)
- Section ordering and layout
- Interaction behavior (FAQ accordion, nav scroll-blur, smooth-scroll "Download")
- Responsive breakpoints (760px / 900px / 1080px)

## Fidelity

**High-fidelity.** Pixel-precise mockups with final colors, typography, spacing, copy, and interactions. Recreate the UI exactly using the codebase's existing libraries — match the design tokens 1:1.

## Files in this Bundle

```
design_handoff_landing_page/
├── README.md                  ← this file
├── Cal Club Landing.html      ← single-file HTML prototype (the source of truth)
├── assets/
│   ├── cal-club-logo.png      ← brand monogram, transparent background
│   ├── dawn.png               ← app screenshot — Morning Brief (warm gradient)
│   ├── midday-checkin.png     ← app screenshot — Midday Check-in (slate blue)
│   └── now.png                ← app screenshot — Day Summary (dark navy)
└── brief/
    └── original-spec.md       ← original product/positioning brief from the founder
```

## Page Structure (top to bottom)

### 1. Sticky Nav

- **Height:** 64px
- **Layout:** brand mark left, "Download" CTA right (nav links removed in this version)
- **Brand mark:** logo PNG (28×28px) + "Cal Club" wordmark (700 weight, 17px, -0.025em tracking)
- **Download button:** onyx pill, 36px tall, padding 0 16px, font 13px/600, anchors back to `#top` (the hero) with smooth scroll. Triggers an ember-colored pulse animation on the hero store buttons.
- **Scroll behavior:** background goes from solid linen → translucent linen (rgba(250,248,244,0.78)) with `backdrop-filter: blur(14px) saturate(140%)` once scrolled past 12px. Bottom border switches from transparent to `--divider` at the same moment. 0.25s transition.

### 2. Hero (`#top`)

**Layout (desktop ≥900px):** two-column grid `minmax(0, 1.05fr) minmax(0, 1fr)` with 72px gap. Text left, phone right.
**Mobile:** stacks to single column, gap 48px.
**Padding:** 88px / 96px top/bottom desktop; 56px / 64px mobile.

**Left column:**
- `<h1>` — "The AI nutrition coach for people who work out." — 56–64px / 700 / -0.04em tracking / line-height 1.05 / max-width 38ch
- Subhead — "Cal Club knows your training, your goals, and the food you actually eat — and coaches you in real time." — 17–19px / 400 / max-width 36ch / color rgba(26,26,26,0.90)
- Credential eyebrow — "FOUNDED BY EX-CULT.FIT" — 11px / 600 / +1.2px tracking / UPPERCASE / color `--ember` (#D95F28) — 36px margin-top
- CTA row — two onyx pill buttons, 52px tall, 12px gap, wraps on narrow widths

**Right column (phone visual):**
- Realistic iPhone bezel, no actual photo behind it
- Phone: aspect ratio 1206/2622, max-width 360px (desktop), 9px padding, border-radius 50px, dark #0E0E0E body
- Inner screen: border-radius 41px, overflow hidden
- Dynamic island: positioned at top:2.4% / width:30% / height:3.5%, solid black, pill shape (z-index above screen)
- Screen content: `dawn.png` (Morning Brief screenshot) shown via `object-fit: cover; object-position: top center;` so the top of the screen is anchored at the top of the bezel
- **Transform:** `rotate(1.4deg) translateX(-18%)` — slight right-tilt and offset 18% of its own width to the left for visual balance
- **Backdrop blob:** a soft warm radial gradient (the Dawn tint, `rgba(217,130,100,0.38)` → `rgba(217,130,100,0.06)` → transparent) blurred 28px sits behind the phone, fading into the linen background. Positioned via the `.phone-wrap::before` pseudo-element with `--phone-tint` and `--phone-tint-fade` CSS custom properties (set inline so each phone instance can carry its own tint).

### 3. "Adapts with your day" section

**Background:** `--cream` (#F5F2EC) — magazine-spread cue that this is a distinct beat.

**Header:**
- Eyebrow: "ADAPTS WITH YOUR DAY" — `--smallcaps` style, color `--stone`
- Title (`titleLarge`): "Cal Club meets you where you are — morning, midday, and night." — 26–32px / 700 / -0.025em tracking
- Body: "Cal Club watches how your day is actually unfolding — what you've eaten, what you've trained, what you still have time to do — and shows up at the right moments with the answer for that moment." — max-width 54ch

**Three-up grid (desktop):**
Three columns, 32–48px gap. Each item ("checkin"):
1. Phone (same bezel construction as hero, max-width 220px desktop) with its own tinted backdrop:
   - **Dawn:** `--phone-tint: rgba(217,130,100,0.34); --phone-tint-fade: rgba(217,130,100,0.05);` → screen `dawn.png`
   - **Midday:** `rgba(110,130,148,0.36) / rgba(110,130,148,0.05)` → `midday-checkin.png`
   - **Now:** `rgba(50,58,82,0.42) / rgba(50,58,82,0.06)` → `now.png`
2. Below each phone (centered, 28px margin-top):
   - Eyebrow in ember (`--ember`): "DAWN" / "MIDDAY" / "NOW"
   - `<h3>` title (22–24px / 700 / -0.022em): "Morning Brief" / "Midday Check-in" / "Day Summary"
   - Body (15px / 1.55 line-height / `--text-detail`):
     - Dawn: *"A plan for the day ahead. Wake up to your target, what you trained, and where to land your meals."*
     - Midday: *"A nudge while there's still time. Behind on protein? Cal Club hands you the plate, not the math."*
     - Now: *"An honest read of how the day landed — calories earned, protein hit, what to carry into tomorrow."*

**Mobile:** single column, items stack with 56px gap.

### 4. "Why most nutrition apps fail you" section

**Header:**
- Eyebrow: "WHY MOST NUTRITION APPS FAIL YOU"
- Title (`titleLarge`): "Logging your food isn't the same as knowing what to eat."

**Numbered editorial rows** (not cards — variable text lengths require this treatment):
Each row is a 3-column grid on desktop (`64px / 1.1fr / 1.4fr`, 40–56px column gap), 1 column on mobile.
- **Column 1:** zero-padded number ("01", "02", "03") — 11px / 500 / +1.4px tracking / `--stone` / uppercase
- **Column 2:** punch line — 22–24px / 600 / -0.018em / `--onyx`
- **Column 3:** body — 16.5px / 400 / 1.55 line-height / `--text-detail` / max-width 48ch

1-px `--divider` hairline between rows (top and bottom of each row).

Rows (use these exact strings):
1. **Trackers count what you ate.** — "They don't tell you what to eat next."
2. **Generic plans ignore your training.** — "A heavy leg day and a rest day shouldn't look the same."
3. **Eating right shouldn't feel like a second job.** — "Tracking macros, guessing portions, checking labels — Cal Club does it for you."

### 5. FAQ section

**Header:**
- Eyebrow: "FREQUENTLY ASKED"
- Title (`titleLarge`): "Questions about Cal Club"

**Accordion** — single white card (`--card-surface`, 0.5px `--card-border`, radius 18px) containing 7 rows. 1px `--divider` between rows.

Each row:
- Trigger: full-width button, 20–24px padding, min-height 44px. Question text 15–16px / 600 / -0.012em / `--onyx`. Chevron 20px / `--stone` on the right, rotates 180° when open (0.22s ease).
- Panel: hidden via `max-height: 0`, expands to `scrollHeight` on click, 0.3s ease transition. Padding 0 20–28px 22–28px. Answer text 14.5–15px / 400 / 1.55–1.6 line-height / `--text-detail`. Max-width 60ch.
- One-open-at-a-time pattern: clicking a closed row closes any currently open row first.

**FAQ rows** (in this exact order, with these exact strings):

1. **How is Cal Club different from ChatGPT?**
   ChatGPT can answer nutrition questions, but it forgets you between conversations. It doesn't know what you ate yesterday, what you trained today, or whether you're behind on protein right now. Cal Club remembers all of it — and uses it to coach you in real time, not just respond when asked.

2. **How is this different from MyFitnessPal or HealthifyMe?**
   Trackers log what you ate. Cal Club tells you what to eat next. If you trained heavy in the morning, Cal Club knows you need more protein at dinner — and suggests exactly what to have. MyFitnessPal will tell you you're 60g short. Cal Club will hand you the plate.

3. **Does Cal Club work with Indian food?**
   Yes — Cal Club is built for the food Indians actually eat. Dal, roti, sabzi, biryani, paneer, dosa, and thousands of other home-cooked and restaurant dishes are recognized accurately. It also separates the protein from the curry — so chicken pieces and paneer cubes are logged individually, not mashed into one "chicken curry" estimate.

4. **Do I need to log every meal?**
   No. You can snap a photo, describe a meal in a sentence ("two rotis, dal, half a bowl of sabzi"), or pick from meals you've logged before. Most people log in seconds. Skip a meal and Cal Club just works with what it knows — no guilt, no streak penalty.

5. **What does Cal Club cost?**
   Cal Club is free to download and comes with a 3-day trial. The premium plan unlocks unlimited AI coaching, personalized check-ins, and AI-powered meal logging. Full pricing is in the app.

6. **Is my data private?**
   Yes. Your food logs, conversations, and training data are encrypted at rest and in transit. We don't sell your data, we don't share it with advertisers, and we don't use your conversations to train external AI models. What you tell Cal Club stays with Cal Club.

7. **I work out casually — will this still work for me?**
   Cal Club works for any level. Whether you do three gym sessions a week, the occasional run, or just walk daily, Cal Club adapts. It scales protein targets to your training, suggests meals that fit your real life, and never assumes you're a competitive athlete. The bar is "you care about how you eat" — that's it.

**Below the accordion:** "Still have questions? Email us at hello@calclub.app." — body-small / `--stone`. The email is a styled `mailto:` link.

### 6. Final CTA

**Background:** `--cream` (#F5F2EC). Padding 120/128px top/bottom desktop; 80/88px mobile. Centered.

- `<h2>` (`displayLarge`): "Cal Club." — note the period; it lands with finality
- Body (16–17px / 400 / `--text-body`): "The AI nutrition coach for people who work out." — max-width 30–36ch / 20–24px margin-top
- Two pill buttons (same as hero), 36px margin-top, centered

### 7. Footer

**Background:** `--linen`. 1px `--divider` top border. Padding 40px/32px top/bottom.

Three columns on desktop (`1.4fr 1fr 1fr`, 48px gap), stacks on mobile:

1. **Brand column:** Cal Club logo + wordmark, tagline below ("The AI nutrition coach for people who work out.") in body-small / `--stone`.
2. **Contact:** "CONTACT" smallcaps header → "hello@calclub.app" mailto link, color `--stone-deep`, hover `--onyx`.
3. **Follow:** "FOLLOW" smallcaps header → Instagram + X icon links, 20px stroke, color `--stone`, hover `--onyx`. (Note: replace these with real handles or remove rows that aren't live before shipping.)

**Bottom row:** 32px top margin, 24px top padding, 1px divider above. Left: "Privacy Policy · Terms of Service" links. Right: "© 2026 Cal Club. Made in India." Both 12.5px / `--stone`.

## Interactions & Behavior

| Event | Behavior |
|---|---|
| Scroll past 12px | Nav adds `.scrolled` class → translucent + backdrop blur + divider |
| Click "Download" in nav | `window.scrollTo({top:0, behavior:'smooth'})`, then 480ms later trigger `.pulse` class on both hero CTA buttons (1.4s box-shadow ember pulse animation). The class is removed after 1500ms so it can re-trigger. |
| Click FAQ question | Closes any currently open row, then opens the clicked row. Animates `max-height` from 0 → `scrollHeight + 'px'`. Chevron rotates 180°. `aria-expanded` toggles. |
| `prefers-reduced-motion: reduce` | All transitions/animations clamped to 0.01ms. Smooth scroll disabled. |

## Accessibility

- Every button is min 44×44px tap target
- Nav `<a>` for "Download" (so it works without JS)
- FAQ buttons have `aria-expanded` reflecting open state
- Phone screenshots have descriptive `alt` text including the actual on-screen copy
- Color contrast: onyx on linen and ember on linen both pass WCAG AA Large
- Honors `prefers-reduced-motion`

## Responsive Breakpoints

| Width | Notes |
|---|---|
| <760px | Mobile — single column everywhere, smaller type, container padding 24px |
| ≥760px | Tablet — type bumps up (`displayLarge` 34→56, `titleLarge` 20→32, body 15–17→17–19), problem rows go 3-column, container padding 40px |
| ≥900px | Hero splits into two columns (text + phone) |
| ≥1080px | Container padding 48px; hero `displayLarge` 56→64; checkin phones 200→220 |

Container max-width: **1120px**.

## Design Tokens

All defined as CSS custom properties on `:root`. Use the exact hex values when porting to a token system / Tailwind config / etc.

### Colors

| Token | Hex | Use |
|---|---|---|
| `--onyx` | `#1A1A1A` | Primary text, hero numerals, **CTA buttons** |
| `--linen` | `#FAF8F4` | Page background (default scaffold) |
| `--cream` | `#F5F2EC` | Tinted section backgrounds ("Adapts with your day", final CTA) |
| `--sand` | `#EDE8DF` | Tertiary tinted surface (reserved, not used in this page) |
| `--stone` | `#A8A39A` | Secondary/muted text, labels, social icons |
| `--stone-deep` | `#6B6560` | Slightly darker stone for footer mailto links |
| `--card` | `#FFFFFF` | Card surfaces |
| `--card-border` | `#EBE6DC` | 0.5px card hairline |
| `--divider` | `#E8E3D9` | 1px section / row dividers |
| `--ember` | `#D95F28` | Brand highlight (credential eyebrow, "DAWN/MIDDAY/NOW" labels) — **never used for buttons** |
| `--text-body` | `rgba(26,26,26,0.90)` | Default body text |
| `--text-detail` | `rgba(26,26,26,0.70)` | Secondary body / supporting text |

**Hard rules:**
- Primary CTA = onyx bg + linen text. **Never ember.**
- Ember is a highlight only.
- No decorative gradients.
- No shadows / no Material elevation. Depth comes from tinted surface swaps (cream/sand on linen).

### Typography

**Font family:** `"Plus Jakarta Sans", -apple-system, system-ui, sans-serif` — only this. No Inter, no Roboto.
**Weights loaded:** 400, 500, 600, 700.

| Token | Mobile | Desktop (≥760px) | Weight | Tracking | Use |
|---|---|---|---|---|---|
| `displayLarge` | 34px / 1.05 | 56–64px / 1.05 | 700 | -0.04em | Hero + final CTA headline |
| `titleLarge` | 20px / 1.25 | 32px / 1.18 | 700 | -0.02 → -0.025em | Section titles |
| `titleSmall` | 15px / 1.35 | — | 600 | -0.01em | Card titles, FAQ questions |
| `bodyLarge` | 15–17px / 1.5 | 17–19px / 1.5 | 400 | — | Hero subhead, lead body |
| `bodyMedium` | 14px / 1.55 | — | 400 | — | Default body, FAQ answers |
| `bodySmall` | 13px / 1.5 | — | 400 | — | Captions, footer, support line |
| `smallcaps` | 11px / 1.2 | — | 600 | +1.2–1.4px / UPPERCASE | Section eyebrows |

The `.problem-num`, `.problem-title`, `.problem-body`, `.checkin-title`, `.checkin-body` selectors in the source define the exact specifics for those bespoke rows.

### Spacing (4pt scale)

xs 4 · sm 8 · md 12 · lg 16 · xl 20 · xxl 24 · section 32

Section vertical padding: **88/96px desktop, 56/64px mobile.**

### Radii

- Card: **18px**
- Card XL: **22px**
- Chip: **10px**
- Button: **999px** (full pill)
- Phone bezel: **50px** / inner screen: **41px**

### Animations / Timings

- Nav scroll-blur transition: 0.25s ease
- Phone slight rotate transition: 0.6s `cubic-bezier(.7, 0, .3, 1)` (reserved for future hover/scroll interactions)
- FAQ accordion: max-height 0.3s ease, chevron rotate 0.22s ease
- Pulse: 1.4s ease-out, single iteration

## Component Inventory (suggested decomposition for React/Vue/etc.)

| Component | Props |
|---|---|
| `<Nav>` | `onDownloadClick` |
| `<BrandMark>` | `size?` |
| `<Hero>` | static content |
| `<PhoneFrame>` | `screen: 'dawn' \| 'midday' \| 'now'`, `tint: {tint, fade}`, `transform?` (for hero tilt/offset), `maxWidth?` |
| `<AdaptsSection>` | static (three `<CheckinCard>`s) |
| `<CheckinCard>` | `label`, `title`, `body`, `screen`, `tint` |
| `<ProblemSection>` | static (three `<ProblemRow>`s) |
| `<ProblemRow>` | `num`, `title`, `body` |
| `<FAQSection>` | `items: {q, a}[]` |
| `<FAQRow>` | `q`, `a`, `open`, `onToggle`, `isLast` |
| `<FinalCTA>` | static |
| `<Footer>` | static |
| `<StoreButton>` | `os: 'ios' \| 'android'`, `pulse?` |

The phone bezel (outer dark frame + inner clipped screen + dynamic island) is the most reused atom. Build it once.

## Assets

All in `assets/`:

- **cal-club-logo.png** — Cal Club monogram, 1000×1000, transparent background. Use at 22–28px in nav/footer.
- **dawn.png** — Morning Brief app screen (warm orange→purple gradient). 1179×2556 (real iPhone resolution).
- **midday-checkin.png** — Midday Check-in app screen (slate blue). 1179×2556.
- **now.png** — Day Summary app screen (dark navy). 1179×2556.

The phone bezel is **CSS-rendered**, not an image — the screenshots only fill the inner screen area.

Photography source attribution (not used in final design but documented for completeness): a hand-holding-phone treatment was explored using a CC0 Unsplash photo by Lorin Both, but reverted in favor of the cleaner floating-phone approach.

## Placeholders to Fill Before Shipping

- Real App Store + Play Store deep links on the `<a class="btn">` elements (currently `href="#"`)
- Real social handles for the footer icons (or remove rows if not live yet)
- Confirm the "we don't use conversations to train external AI models" privacy claim is accurate
- Privacy Policy + Terms of Service routes in the footer

## Notes for the Implementing Developer

- The HTML uses vanilla JS — no build step. Treat it as a reference, not a starting codebase. Implement in the project's framework using its routing, image optimization, and font loading.
- Plus Jakarta Sans is loaded via Google Fonts in the prototype. For production, self-host or use the framework's font-optimization pipeline (e.g. `next/font`).
- Phone screenshots are heavy (~400KB each). Optimize and serve in modern formats (AVIF/WebP) for production.
- The "responsive helper" pill in the bottom-right (`#responsiveNote`) is for design preview only — remove it from the production build.
- The container max-width is 1120px. The page is mobile-first and the breakpoints (760 / 900 / 1080) cleanly map to most common dev-cycles.

If anything in this README conflicts with the HTML, **the HTML is the source of truth** (or ask the designer).
