# PiChan V1 — UI Design System

**Status:** DESIGN HQ — FOUNDATION LOCK  
**Product version:** V1.0  
**Design system revision:** 0.1  
**Date:** 2026-09-13  
**Owner:** PiChan Design HQ

This document defines the visual and interaction foundation for PiChan V1. It must be used together with `UI_DESIGN_REQUIREMENTS_V1.md`, the locked product specifications and the locked PiChan brand identity.

The goal is to create a product that feels like **an intelligence instrument**, not a generic crypto dashboard or trading terminal.

---

## 1. Product design principle

PiChan should feel:

- observant
- calm
- precise
- evidence-first
- technically credible
- fast to scan
- distinctive without visual noise

The visual idea is **quiet intelligence with bright signals**.

PiChan is not designed around hype, price movement or casino energy. It is designed around clarity:

> **What is it? → What matters? → Why does PiChan believe it? → What changed? → What should I watch?**

### Avoid

- generic neon-Web3 styling
- oversized glowing charts
- glassmorphism everywhere
- red/green trading-terminal language as the main visual system
- excessive gradients
- decorative data that looks meaningful but is not
- mascot overuse
- fake AI / cyberpunk effects

---

## 2. Visual direction

### Default product mode

PiChan V1 is **dark-first**.

Primary product surfaces use Deep Navy / near-black neutral backgrounds because PiChan is a monitoring/intelligence product and dense evidence is easier to structure in a controlled dark environment.

The system must remain tokenized so a future light product theme can be added without rebuilding components, but V1 does not require a theme switcher.

### Product character

Think:

- intelligence lab
- observatory
- investigation console
- premium research product

Not:

- exchange terminal
- meme coin scanner
- cyberpunk game UI

### Brand presence

The PiChan bird appears selectively:

- product logo / shell
- PiChan Brief
- purposeful empty states
- onboarding / first-use moments
- share assets

Do not place the mascot inside every card or module.

---

## 3. Core product palette

Locked brand colors remain unchanged:

- Deep Navy — `#041F5F`
- Cyan Blue — `#12B6F6`
- Royal Blue — `#153FE9`
- White — `#FFFFFF`

Existing semantic colors remain available:

- Success — `#22C55E`
- Warning — `#F59E0B`
- Error — `#EF4444`
- Border / Divider — `#E5E7EB`
- Muted Text — `#6B7280`
- Surface — `#0B1220`

### Dark product surface tokens

The design system should use these roles, not raw colors directly in components:

- `bg.canvas` — deepest page background
- `bg.surface` — standard card/panel background
- `bg.surfaceRaised` — raised/interactive panel
- `bg.surfaceSelected` — selected/active panel
- `border.subtle` — low-contrast separators
- `border.default` — standard structural border
- `border.strong` — active/focused border
- `text.primary` — primary readable text
- `text.secondary` — explanatory text
- `text.muted` — low-priority metadata
- `text.inverse` — text on bright surfaces
- `accent.primary` — Cyan Blue
- `accent.secondary` — Royal Blue

Implementation values should be tuned during component construction for WCAG 2.2 AA contrast while preserving the locked brand colors as anchors.

### Gradient

The approved gradient remains:

`linear-gradient(90deg, #153FE9 0%, #12B6F6 100%)`

Use sparingly for:

- selected accent moments
- hero/introduction surfaces
- subtle data emphasis
- share assets

Never use the gradient as a default card background or on the core logo.

---

## 4. Intelligence semantics

The three primary PiChan intelligence outputs must have different visual grammar.

### 4.1 Reputation Grade

Purpose: identity, transparency and observed history.

Visual form:

- large letter grade or `Unrated`
- contained badge / score tile
- neutral PiChan brand styling rather than traffic-light styling
- supporting label: `Reputation`
- optional short reason / evidence coverage note

Rules:

- do not use green to imply A = safe
- do not use red to imply F = scam
- grade color may use controlled brand-blue intensity, but meaning comes from the letter + label

### 4.2 Risk Signals

Purpose: current technical/control/supply/liquidity conditions.

Visual form:

- explicit severity icon
- severity label
- finding title
- short evidence summary
- provenance/freshness disclosure

Severity tokens:

- Critical — Error red
- Warning — Warning amber
- Info — Royal Blue
- Unknown — neutral muted/gray

Risk is the only intelligence family that uses strong severity color.

### 4.3 Data Confidence

Purpose: completeness, freshness and consistency of evidence.

Visual form:

- `High / Medium / Low`
- compact segmented meter or confidence bars
- brand blue/cyan + neutral empty segments
- no green

Confidence should feel like **evidence coverage**, not safety.

---

## 5. Evidence visual language

Evidence is a first-class UI object.

Every important finding should be able to reveal:

- source
- source tier/type
- observed time
- freshness
- direct / declared / provider / unverified state
- conflict if present

### Evidence chips

Use compact labels such as:

- `Onchain`
- `Authority`
- `Provider`
- `Declared by project`
- `Unverified`
- `Conflicting`
- `Stale`

### Freshness language

Use plain text:

- `Live`
- `Checked 3m ago`
- `Observed Sep 13`
- `Historical`
- `Needs refresh`

Never use a tiny unlabeled dot as the only evidence/freshness indicator.

---

## 6. Typography

### Brand / interface

**Plus Jakarta Sans**

### Data / technical values

**JetBrains Mono**

Use Mono selectively for:

- addresses
- hashes
- timestamps where useful
- prices / market values
- percentages
- chain IDs
- code-like identifiers

Do not render all body copy in Mono.

### Product type scale

#### Mobile

- Display — 32 / 38, Bold
- H1 — 28 / 34, Bold
- H2 — 22 / 28, SemiBold
- H3 — 18 / 24, SemiBold
- Body L — 16 / 24, Regular
- Body — 14 / 21, Regular
- Label — 13 / 18, Medium
- Small — 12 / 17, Regular
- Micro — 11 / 15, Medium

#### Desktop

- Display — 44 / 52, Bold
- H1 — 34 / 42, Bold
- H2 — 26 / 34, SemiBold
- H3 — 20 / 28, SemiBold
- Body L — 16 / 24, Regular
- Body — 14 / 21, Regular
- Label — 13 / 18, Medium
- Small — 12 / 17, Regular
- Micro — 11 / 15, Medium

Data values may use JetBrains Mono at equivalent optical sizes.

---

## 7. Spacing system

Use a 4 px base grid.

Core spacing tokens:

- 4
- 8
- 12
- 16
- 20
- 24
- 32
- 40
- 48
- 64
- 80

Default component/card spacing should favor 16 / 20 / 24 rather than excessive empty space.

PiChan should feel calm and premium but still information-dense.

---

## 8. Radius, border and depth

### Radius

- Small controls/chips — 8 px
- Inputs/buttons — 10–12 px
- Cards — 14–16 px
- Large feature panels — 18–20 px
- Pills — 999 px

Avoid exaggerated 28–40 px SaaS-card rounding.

### Borders

Borders are important in dark mode to separate evidence/data surfaces.

Use:

- subtle 1 px structural borders
- stronger focus/selected border when needed
- no bright strokes around every card

### Elevation

Keep shadows minimal.

Use layer contrast + border before shadow.

Modal / popover / floating command surfaces may use restrained shadow for separation.

---

## 9. Iconography

Use one consistent outline icon family with simple geometry and medium stroke weight.

Rules:

- do not mix filled, outline and illustrated icons randomly
- use filled status icons only when semantic urgency benefits from it
- network/project logos are content, not system icons
- the PiChan bird is a brand asset, not a generic icon

Recommended optical sizes:

- 16 px metadata
- 18–20 px controls
- 24 px primary actions/navigation

---

## 10. App shell

### Mobile

Locked bottom navigation:

- Radar
- Search
- Watch
- Me

Top bar behavior:

- compact PiChan mark / context title
- contextual actions on the right
- Alerts may surface through Watch/Me or notification indicator

### Desktop

Recommended shell:

- left navigation rail / sidebar
- PiChan horizontal or compact logo at top
- Radar
- Search
- Watch
- Me
- lower utility/account area

The rail may collapse at narrower desktop widths.

Reasons:

- leaves strong vertical scan path
- supports dense Passport content
- keeps global search and product sections predictable
- avoids turning PiChan into a generic exchange header

### Content width

Use a centered product canvas with a deliberate max width for research content rather than full-bleed data across ultrawide screens.

Passport desktop can use a primary column + contextual secondary rail where useful.

---

## 11. Component personality

PiChan components should feel:

- compact
- clear
- slightly rounded
- strongly aligned
- data-aware
- quiet by default
- bright only where information deserves attention

### Buttons

Primary action:

- Cyan accent
- high contrast label
- no unnecessary gradient

Secondary:

- surface / border treatment

Danger:

- red only for destructive/system-danger actions

### Chips

Chips should communicate filters/status, not decorate the screen.

### Cards

Cards should have a clear reason to exist. Prefer grouping related evidence into one purposeful panel over creating many tiny floating cards.

---

## 12. Data display

### Numbers

Use JetBrains Mono for important values.

Tabular numerals required where supported.

### Market values

Use compact formats when scanning:

- `$1.24M`
- `$328K`
- `+4.2%`

Full precision belongs in detail/tooltip where required.

### Addresses

Pattern:

`0x90b4…e887` or equivalent Solana truncation

Always provide:

- copy
- full reveal
- explorer action where available

### Tables on mobile

Do not horizontally shrink desktop tables.

Convert to:

- stacked rows
- expandable records
- prioritized columns
- horizontal scroll only for specialist secondary data where unavoidable

---

## 13. Motion

Interaction motion:

- 120–180 ms micro state changes
- 180–240 ms sheets/modals/panels
- ease-out entry / standard easing for controls

Use motion for:

- state confirmation
- expanding evidence
- filtering
- navigation continuity

Do not animate live market data continuously just for effect.

Respect `prefers-reduced-motion`.

---

## 14. Signature PiChan UI moments

PiChan should have a few ownable patterns rather than dozens of decorative motifs.

### PiChan Brief

A signature panel with:

- small PiChan bird/mark
- `PiChan Brief`
- concise evidence-based findings
- calm cyan/blue emphasis
- no chat-bubble / AI-assistant cliché

### Why on Radar

Every Radar item visibly includes the reason PiChan surfaced it.

This should become a recognizable visual pattern.

### Evidence trail

Expandable evidence/source rows should be consistent across Passport, Flight Recorder, Radar and Creator Intelligence.

### Watching state

Watch should have a clear state change using the eye/observation concept, without turning the UI into mascot illustration.

---

## 15. Passport flagship layout direction

Passport is the first flagship screen to design because it contains most system primitives.

### Mobile structure

1. compact product shell
2. identity header
3. Reputation / Risk / Confidence decision strip
4. PiChan Brief
5. Market Pulse
6. official identity / links
7. Risk Signals
8. Supply & Holders
9. Liquidity
10. Creator preview
11. Flight Recorder preview
12. actions / Watch / Share / Report / Claim

### Desktop structure

Recommended composition:

- main research column: ~65–72%
- secondary context rail: ~28–35%

Main column:

- identity
- decision strip
- PiChan Brief
- Risk Signals
- holders
- liquidity
- Flight Recorder

Secondary rail:

- Market Pulse
- official links
- verification states
- Creator preview
- Watch/share actions

The information order remains semantically consistent even when desktop uses parallel layout.

---

## 16. First design-system component set

Design these before full screen production:

1. App shell
2. Global search
3. Project/token identity block
4. Chain badge
5. Verification/status badge
6. Reputation tile
7. Risk summary
8. Risk Finding card
9. Data Confidence tile
10. Evidence/source row
11. Freshness label
12. Metric tile
13. PiChan Brief panel
14. Radar card
15. Timeline event
16. Watch button/state
17. Address row
18. Filter chip / segmented control
19. Empty/loading/error states
20. Modal / bottom sheet

This component set is enough to construct the first Passport and Radar designs without inventing one-off UI.

---

## 17. Design QA rules

A screen fails Design HQ review if:

- Reputation, Risk and Confidence look like one score
- unknown data looks positive
- evidence provenance is hidden or inaccessible
- a critical finding is visually weaker than decorative information
- brand cyan is used everywhere and loses meaning
- cards are added purely for visual style
- mobile is a compressed desktop mockup
- PiChan mascot becomes decorative noise
- the UI feels like an exchange/trading terminal
- terminology differs from locked product language

---

## 18. Current design decision

**Direction selected:** dark-first evidence intelligence product.

**Visual character:** quiet intelligence, bright signals.

**First flagship screen:** Project Passport.

**Next Design HQ step:** create the Passport component anatomy and mobile/desktop wireframe using the system above, then refine the reusable component library from the screen rather than designing isolated components with no real context.
