# PiChan V1 — UI Design System

**Status:** DESIGN HQ — FOUNDATION LOCK  
**Product version:** V1.0  
**Design system revision:** 0.2  
**Date:** 2026-09-13  
**Owner:** PiChan Design HQ

This document defines the visual and interaction foundation for PiChan V1. Use it with `UI_DESIGN_REQUIREMENTS_V1.md`, `PRODUCT_UI_TOKENS_V1.md`, the locked product specifications and Production Assets 2.2.

The product must feel like **an intelligence instrument**, not a generic crypto dashboard or trading terminal.

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

Core mental model:

> **What is it? → What matters? → Why does PiChan believe it? → What changed? → What should I watch?**

Avoid generic neon-Web3 styling, glassmorphism everywhere, casino red/green language, excessive gradients, decorative fake data, mascot overuse and cyberpunk effects.

---

## 2. Visual direction

PiChan V1 is **dark-first**.

Product character:

- intelligence lab
- observatory
- investigation console
- premium research product

Not:

- exchange terminal
- meme coin scanner
- game UI

Use the bird selectively in the shell, PiChan Brief, purposeful empty/onboarding states and share assets.

---

## 3. Product-surface token source

Concrete UI values live in:

`docs/PRODUCT_UI_TOKENS_V1.md`

Brand anchors remain locked:

- Deep Navy `#041F5F`
- Cyan `#12B6F6`
- Royal Blue `#153FE9`
- White `#FFFFFF`

The official brand gradient remains:

`linear-gradient(90deg, #153FE9 0%, #12B6F6 100%)`

Use it sparingly; never on the logo and never as the default card background.

---

## 4. Intelligence semantics — three visual grammars

### Reputation Grade

Purpose: identity, transparency and observed history.

- letter grade / `Unrated`
- neutral PiChan brand treatment
- no green=A safe / red=F scam convention
- meaning comes from grade + label + evidence coverage

### Risk Signals

Purpose: current technical/control/supply/liquidity conditions.

- explicit severity icon + label
- Critical red
- Warning amber
- Info royal blue
- Unknown neutral gray
- only intelligence family with strong severity color

### Data Confidence

Purpose: completeness, freshness and consistency of evidence.

- High / Medium / Low
- compact segmented coverage meter
- cyan/blue + neutral empty segments
- never green

These outputs may share one structural Decision Strip, but they must never become one composite safety/trust score.

---

## 5. Evidence visual language

Evidence is a first-class object.

Every major finding can reveal:

- source
- source type/tier
- observed time
- freshness
- direct / declared / provider / unverified status
- conflicts

Standard evidence footer:

`[Source type] · [Freshness] · View evidence`

Examples:

- `Onchain · Checked 3m ago · View evidence`
- `Provider · Checked 8m ago · View evidence`
- `Declared by project · Observed Sep 13 · View evidence`
- `Conflicting · Needs review · View evidence`

This becomes a reusable signature pattern across Passport, Radar, Creator Intelligence and Flight Recorder.

---

## 6. Typography

Primary/UI: **Plus Jakarta Sans**  
Data/technical: **JetBrains Mono**

Use Mono for addresses, hashes, prices, percentages, timestamps when useful and technical identifiers. Do not use Mono for normal body copy.

Type scale and weights are defined in `PRODUCT_UI_TOKENS_V1.md`.

---

## 7. Layout and spacing

Use a 4 px base grid.

Mobile-first, then expand density on desktop.

Key rules:

- mobile is never a compressed desktop mockup
- desktop may use parallel context, but product semantics do not change
- no primary horizontal scrolling
- long addresses have truncation + copy/full reveal
- tables become stacked/expandable records on mobile

---

## 8. Surface philosophy

PiChan is **not** a page of cards.

Use:

- open sections
- separators
- grouped rows
- deliberate feature surfaces

Reserve elevation/cards for:

- unified Decision Strip
- PiChan Brief
- material Risk Findings
- interactive/contextual objects
- modal/floating layers

Use layer contrast + borders before shadows.

---

## 9. App shell

### Mobile

Bottom navigation is locked:

- Radar
- Search
- Watch
- Me

Top bar stays compact and contextual.

### Desktop

Recommended:

- left rail/sidebar
- PiChan logo at top
- Radar / Search / Watch / Me
- lower account/utility area
- proper global search/command field in top product bar

The desktop search field must feel like a core entry point, not a tiny secondary control.

---

## 10. Component personality

Components are:

- compact
- strongly aligned
- slightly rounded
- quiet by default
- bright only when information deserves attention

Buttons:

- Primary: cyan with high-contrast navy text
- Secondary: surface + border
- Destructive: red only for destructive/system-danger actions

Chips communicate actual filter/status meaning; they are not decoration.

---

## 11. Signature PiChan UI patterns

### Unified Decision Strip

One structural component containing three independent segments:

- Reputation
- Risk Signals
- Data Confidence

This becomes a recognizable PiChan pattern.

### PiChan Brief

- small approved PiChan mark
- concise evidence-based summary
- 3–6 prioritized findings
- calm blue/cyan emphasis
- no AI-chat cliché

### Evidence Trail

The standard source/freshness/evidence disclosure pattern above.

### Why on Radar

Every organic Radar item visibly explains why PiChan surfaced it.

### Watching state

Clear state transition using observation/eye logic; no mascot decoration required.

---

## 12. Data display

Important values use JetBrains Mono with tabular numerals.

Compact scan formats:

- `$1.24M`
- `$328K`
- `+4.2%`

Full precision belongs in detail where needed.

Market data is context, not the product hero.

---

## 13. Motion

Use short motion only for orientation/state change:

- micro interactions
- expanding evidence
- filtering
- sheets/modals
- navigation continuity

No continuously animated market data or decorative ambient motion in dense research surfaces.

Respect reduced motion.

---

## 14. Passport flagship direction

The optimized Passport anatomy is now defined in:

`docs/PASSPORT_UI_SPEC_V1.md`

Key V0.2 corrections:

- unified Decision Strip
- fewer nested cards
- open research sections
- sticky desktop context rail
- stronger desktop global search
- no contradictory Claim action states
- no duplicated Watch blocks
- standardized Evidence Footer
- Risk displayed primarily as evidence rows rather than cards inside cards

Passport is the first high-fidelity screen because it contains most reusable system primitives.

---

## 15. First reusable component set

1. App shell
2. Global search / command field
3. Project identity block
4. Chain badge
5. Verification/status badge
6. Unified Decision Strip
7. Reputation segment
8. Risk summary segment
9. Data Confidence segment
10. Risk Finding row/card
11. Evidence Footer / source row
12. Freshness label
13. Metric tile/row
14. PiChan Brief
15. Radar event card
16. Timeline event
17. Watch control
18. Address row
19. Filter/segmented control
20. Loading/empty/error/partial states
21. Modal/bottom sheet
22. Crypto invoice/payment status components

---

## 16. Design QA rules

A screen fails Design HQ if:

- Reputation, Risk and Confidence look like one score
- unknown data looks positive
- evidence provenance is inaccessible
- critical findings are visually weaker than decorative data
- cyan is used everywhere and loses meaning
- the page becomes a collection of generic cards
- mobile is compressed desktop
- mascot usage becomes noise
- UI resembles an exchange terminal
- terminology differs from locked product language
- logo assets are reconstructed instead of consuming Production Assets 2.2

---

## 17. Current lock and next step

**Direction:** dark-first evidence intelligence product.  
**Visual character:** quiet intelligence, bright signals.  
**Passport structure:** V0.2 structure-lock candidate.  
**Product tokens:** V0.2 foundation locked.  
**Brand assets:** Production Assets 2.2.

Next Design HQ step: **build the first high-fidelity mobile Project Passport**, validate it against the state matrix, then derive desktop and finalize the component library.
