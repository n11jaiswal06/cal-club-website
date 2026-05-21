# cal-club-website

Marketing landing page for Cal Club — the AI nutrition coach for people who work out.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Plus Jakarta Sans via `next/font/google`
- No CSS framework — design tokens live in `app/globals.css` (`:root` custom properties), ported 1:1 from the Luffu design prototype.

## Run

```bash
npm install
npm run dev
# open http://localhost:3000
```

Production build:

```bash
npm run build
npm run start
```

## Project layout

```
app/          # App Router — layout, page, globals.css
components/   # Section components (Nav, Hero, Adapts, Problem, FAQ, FinalCTA, Footer)
lib/          # Content (FAQ items, problem rows, check-in tiles)
public/assets # Logo + 3 phone screenshots (dawn, midday, now)
design/       # Original handoff: HTML/CSS prototype, README spec, brief
```

## Design source of truth

`design/Cal Club Landing.html` is the original single-file HTML/CSS/JS prototype.
If anything in this React port disagrees with that prototype, **the prototype wins** — fix the port.

`design/README.md` has the full Luffu design-system spec (tokens, type scale, section breakdown, breakpoints, interactions).

## Outstanding TODOs

Search the codebase for `TODO:` to find the placeholders that need real values before launch:

- Real App Store deep link (hero + final CTA)
- Real Play Store deep link (hero + final CTA)
- Real Instagram URL (footer)
- Real X / Twitter URL (footer)
- Privacy Policy route (footer)
- Terms of Service route (footer)

## Known caveats

- `backdrop-filter` (nav blur) is unsupported in Firefox <103 — nav appears solid there. Matches prototype.
- `text-wrap: balance` degrades to normal wrapping on older browsers. Matches prototype.
- The hero phone is static `dawn.png`. The prototype source has carousel CSS/JS but the rendered hero is a single still image; the port mirrors that.
