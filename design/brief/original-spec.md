# Cal Club — Landing Page Design Prompt

> Paste this into Claude (or Claude Code) to generate the first HTML draft of the Cal Club marketing landing page. Build it as a **single responsive HTML file with inline CSS, mobile-first.** Iterate one section at a time after the first draft.

---

## Product

**Cal Club** is an AI nutrition coach for people who work out — casual gym-goers, runners, and anyone who trains and cares about how they eat. Not a generic calorie tracker. It is **proactive** (checks in through the day), **training-aware** (adjusts around your workouts), **memory-driven** (remembers your goals and history), and **built for Indian food**.

**Positioning:** "The AI nutrition coach for people who work out." It sits between a passive tracker (MyFitnessPal — just logs) and a human coach (expensive, slow). Cal Club coaches you in real time.

**Stage:** Live on iOS and Android. No reviews/testimonials yet — trust comes from founder credibility (ex-cult.fit), the product itself (real screenshots), and a confident, specific voice.

---

## Visual references

- **welling.ai** — clean, scientific, premium typography hierarchy
- **talktoash.com** — warm storytelling, in-page UI demos, "different by design" trust framing
- **calai.app** — screenshot density, photo→macro workflow

The execution, however, must follow the **Cal Club "Luffu" design system below**, which is light-mode, editorial, and calm — NOT the dark-mode SaaS look common in this category. Leaning light/editorial is a deliberate differentiator.

---

## Design system (Luffu) — non-negotiable constraints

**Voice:** Editorial, calm, body-aware. Reads like a magazine spread, not a settings panel. Progress over perfection. Quiet chrome, loud content. No wellness-speak ("journey," "holistic," "embrace"). Specific numbers and real food names everywhere.

**Font:** Plus Jakarta Sans only. (No Inter, DM Sans, etc.)

**Color palette (closed — no other colors):**

| Token | Hex | Role |
|---|---|---|
| `onyx` | `#1A1A1A` | Primary text, hero numerals, **CTA buttons** |
| `linen` | `#FAF8F4` | Page background (scaffold) |
| `cream` | `#F5F2EC` | Inset/tinted surfaces (e.g. final CTA bg) |
| `sand` | `#EDE8DF` | Tertiary tinted surface |
| `stone` | `#A8A39A` | Secondary/muted text, labels, social icons |
| `cardSurface` | `#FFFFFF` | Card background |
| `cardBorder` | `#EBE6DC` | 0.5px card border |
| `divider` | `#E8E3D9` | Hairline rules between sections/rows |
| `ember` | `#D95F28` | **Brand highlight only** (e.g. credential line). NOT for buttons. |

**Typography tokens:**

| Token | Size / Weight / Tracking | Use |
|---|---|---|
| `displayLarge` | 34 / 700 / -0.04 | Hero + final CTA headline |
| `titleLarge` | 20 / 700 / -0.02 | Section titles |
| `titleSmall` | 15 / 600 / -0.01 | Card titles, FAQ questions |
| `bodyLarge` | 15–17 / 400 | Hero subhead, lead body |
| `bodyMedium` | 14 / 400 | Default body, FAQ answers |
| `bodySmall` | 13 / 400 / stone | Captions, footer, support line |
| Small-caps label | 11 / 500–600 / +1.2px / UPPERCASE / stone (or ember) | Section labels, credential line |

**Spacing (4pt scale):** xs 4, sm 8, md 12, lg 16, xl 20, xxl 24, section 32. Card padding `lg`–`xl`. Between sections `section` (32).

**Radius:** card 18, cardXL 22, chip 10, button = full pill.

**Hard rules:**
- Primary CTA = **onyx background, linen text** (NOT ember).
- Ember is a highlight only (credential line, focused states).
- **No shadows / no Material elevation.** Depth comes from tinted surfaces (cream/sand on linen).
- **No decorative gradients.**
- Cards: white surface, 0.5px `cardBorder`, radius 18, zero elevation.
- Minimum tap target 44×44pt. Respect reduced-motion.
- Hairline dividers (`divider`) between major sections — magazine convention.

---

## Page structure

### 1. Nav (sticky, blur on scroll)
- **Left:** Cal Club logo + wordmark (`brand` style, onyx).
- **Center-right:** two text links — "How it works", "Why Cal Club" — anchor-scroll to sections.
- **Right:** one button, "Download" (onyx), which **anchor-scrolls smoothly back to the hero** where the store buttons live. Add a subtle pulse/highlight on the store buttons when reached.
- **Mobile:** logo left, Download button right, no hamburger.
- Background `linen`, backdrop blur once scrolled past hero.

### 2. Hero (split: text left, screenshot right)
Left column, stacked in this exact order:

```
The AI nutrition coach for people who work out.    ← displayLarge, onyx

Cal Club knows your training, your goals, and       ← bodyLarge ~17pt, onyx @ 90%
the food you actually eat — and coaches you in
real time.

FOUNDED BY EX-CULT.FIT                              ← small-caps label, EMBER, +1.2 tracking

[ Download for iOS ]   [ Get on Android ]          ← onyx buttons, linen text, custom-styled
                                                     side by side (stacked on narrow mobile)
```

- **Credential line sits BELOW the subhead, ABOVE the buttons** — it's the closer right before the CTA.
- Store buttons: custom-styled (small Apple/Android icon + "Download for iOS" / "Get on Android"), NOT the generic store badges.
- **Right column:** the "Midday Check-in" app screenshot at full size, in a clean device frame on linen — soft `cardBorder` frame or faint `cream`/`sand` backdrop. **No shadow.**
- Background `linen`. Optional hairline `divider` between nav and hero.
- **Mobile order:** headline → subhead → credential line → screenshot → store buttons.

### 3. The problem
```
WHY MOST NUTRITION APPS FAIL YOU                   ← small-caps label, stone

Logging your food isn't the same as                ← titleLarge, onyx
knowing what to eat.
```
Three cards in a row (stacked on mobile). Each: punch line in `titleSmall`, supporting line in `bodyMedium` @ 90%. No icons — pure type.

- **Card 1:** "Trackers count what you ate." / "They don't tell you what to eat next."
- **Card 2:** "Generic plans ignore your training." / "A heavy leg day and a rest day shouldn't look the same."
- **Card 3:** "Eating right shouldn't feel like a second job." / "Tracking macros, guessing portions, checking labels — Cal Club does it for you."

Cards: `cardSurface` white, 0.5px `cardBorder`, radius 18, padding `xl`, gap `xl`. Background `linen`.

### 4. FAQs (accordion, collapsed by default)
```
FREQUENTLY ASKED                                   ← small-caps label, stone

Questions about Cal Club                           ← titleLarge, onyx
```
Wrapping container: white `cardSurface`, 0.5px `cardBorder`, radius 18, zero elevation. Each row: `lg` vertical padding, full-width tap target, question in `titleSmall`, answer in `bodyMedium` @ 90%, 1px `divider` between rows. Chevron 20px stone, rotates 180° on open.

**Q: How is Cal Club different from ChatGPT?**
ChatGPT can answer nutrition questions, but it forgets you between conversations. It doesn't know what you ate yesterday, what you trained today, or whether you're behind on protein right now. Cal Club remembers all of it — and uses it to coach you in real time, not just respond when asked.

**Q: How is this different from MyFitnessPal or HealthifyMe?**
Trackers log what you ate. Cal Club tells you what to eat next. If you trained heavy in the morning, Cal Club knows you need more protein at dinner — and suggests exactly what to have. MyFitnessPal will tell you you're 60g short. Cal Club will hand you the plate.

**Q: Does Cal Club work with Indian food?**
Yes — Cal Club is built for the food Indians actually eat. Dal, roti, sabzi, biryani, paneer, dosa, and thousands of other home-cooked and restaurant dishes are recognized accurately. It also separates the protein from the curry — so chicken pieces and paneer cubes are logged individually, not mashed into one "chicken curry" estimate.

**Q: Do I need to log every meal?**
No. You can snap a photo, describe a meal in a sentence ("two rotis, dal, half a bowl of sabzi"), or pick from meals you've logged before. Most people log in seconds. Skip a meal and Cal Club just works with what it knows — no guilt, no streak penalty.

**Q: What does Cal Club cost?**
Cal Club is free to download and comes with a 3-day trial. The premium plan unlocks unlimited AI coaching, personalized check-ins, and AI-powered meal logging. Full pricing is in the app.

**Q: Is my data private?**
Yes. Your food logs, conversations, and training data are encrypted at rest and in transit. We don't sell your data, we don't share it with advertisers, and we don't use your conversations to train external AI models. What you tell Cal Club stays with Cal Club.

**Q: I work out casually — will this still work for me?**
Cal Club works for any level. Whether you do three gym sessions a week, the occasional run, or just walk daily, Cal Club adapts. It scales protein targets to your training, suggests meals that fit your real life, and never assumes you're a competitive athlete. The bar is "you care about how you eat" — that's it.

Below the accordion: `Still have questions? Email us at hello@calclub.app.` in `bodySmall` stone.

### 5. Final CTA (centered, cream background)
```
                  Cal Club.                        ← displayLarge, onyx, centered
                  The AI nutrition coach for
                  people who work out.

         [ Download for iOS ]  [ Get on Android ]
```
- Background `cream` (`#F5F2EC`) — a deliberate step up from linen to signal the closing beat.
- Centered alignment (contrasts with the left-aligned hero). Keep the period after "Cal Club." — it lands with finality.
- Same store buttons as hero. Generous whitespace.

### 6. Footer (linen, quiet)
Three columns desktop, stacked mobile. 1px `divider` hairline above.
- **Left:** Cal Club wordmark (`brand` style) + tagline in `bodySmall` stone: "The AI nutrition coach for people who work out."
- **Right:** `hello@calclub.app` (mailto) + social icons (only the ones that are live — empty links hurt more than missing ones).
- **Bottom row:** "Privacy Policy · Terms of Service" + "© 2026 Cal Club. Made in India."
- All text `bodySmall` stone; links hover to onyx; social icons 20px stone stroke.
- No newsletter signup, no sitemap, no tech-stack credits, no redundant store badges.

---

## Tone reminders
- Editorial, calm, athlete-to-everyone (NOT bro-y, NOT competitive-athlete-only).
- Specific numbers and real food names everywhere.
- No wellness clichés.
- Let the Midday Check-in screenshot do the demo work in the hero.

---

## Deferred sections (not in v1 — add later as assets allow)
- **Three check-ins a day** — Dawn / Midday / Now screenshot triptych. Delivers on the "coaches you in real time" promise.
- **Comparison table** — Cal Club vs MyFitnessPal vs ChatGPT vs Human Coach.
- **How it works** — snap a meal → log it → get coached (3 steps).
- **Built different** — three trust pillars (ex-cult.fit credential, sports-nutrition training data, memory).
- **Free macro / TDEE calculator** — embedded tool doubling as email capture.

---

## Placeholders to fill before publishing
- Real social handles (list only live, active accounts).
- Confirm the "we don't use conversations to train external AI models" claim is accurate.
- Final premium price (if you want it on the page instead of "in the app").
- App Store + Play Store deep links for the buttons.
