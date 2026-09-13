# PiChan V1 — UI Design System

**Status:** DESIGN HQ — REFERENCE SCREEN CANDIDATE  
**Product version:** V1.0  
**Design system revision:** 0.4  
**Date:** 2026-09-13  
**Owner:** PiChan Design HQ

Use this document with `UI_DESIGN_REQUIREMENTS_V1.md`, `PRODUCT_UI_TOKENS_V1.md`, `UI_COMPONENT_LIBRARY_V1.md`, `PASSPORT_UI_SPEC_V1.md`, `PASSPORT_STATE_MATRIX_V1.md`, the locked product specifications and Production Assets 2.2.

PiChan must feel like **an intelligence instrument**, not a generic crypto dashboard or trading terminal.

---

## 1. Product design principle

Visual idea: **quiet intelligence with bright signals**.

PiChan should feel:

- observant
- calm
- precise
- evidence-first
- technically credible
- fast to scan
- distinctive without visual noise

Core mental model:

> **What is it? → What matters? → Why does PiChan believe it? → What changed? → What should I watch?**

Avoid generic neon-Web3 styling, casino red/green language, excessive gradients, glassmorphism everywhere, decorative fake data, mascot overuse and cyberpunk effects.

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

Use the PiChan bird selectively in the shell, PiChan Brief, purposeful empty/onboarding states and share assets. It is not a generic system icon.

---

## 3. Product tokens

Concrete UI values live in `PRODUCT_UI_TOKENS_V1.md`.

Locked brand anchors remain:

- Deep Navy `#041F5F`
- Cyan `#12B6F6`
- Royal Blue `#153FE9`
- White `#FFFFFF`

Approved gradient:

`linear-gradient(90deg, #153FE9 0%, #12B6F6 100%)`

Use sparingly; never on the logo and never as the default card background.

---

## 4. Intelligence semantics — three visual grammars

### Reputation Grade

- grade or `Unrated`
- neutral PiChan brand treatment
- no green = safe / red = scam scale
- meaning comes from grade + label + evidence coverage

### Risk Signals

- explicit severity icon + label
- Critical red
- Warning amber
- Info royal blue
- Unknown neutral gray
- only intelligence family with strong severity color

### Data Confidence

- High / Medium / Low
- segmented evidence-coverage meter
- cyan/blue + neutral empty segments
- never green

These share one structural Decision Strip but never become one composite safety/trust score.

---

## 5. Evidence language

Evidence is first-class UI.

Every major finding can reveal:

- source
- source type/tier
- observed time
- freshness
- direct / declared / provider / unverified status
- conflict when present

Standard Evidence Footer:

`[Source type] · [Freshness] · View evidence`

Examples:

- `Onchain · Checked 3m ago · View evidence`
- `Provider · Checked 8m ago · View evidence`
- `Declared by project · Observed Sep 13 · View evidence`
- `Conflicting · Needs review · View evidence`

---

## 6. Typography and data

Primary/UI: **Plus Jakarta Sans**  
Technical/data: **JetBrains Mono**

Use Mono selectively for addresses, hashes, prices, percentages, timestamps and identifiers.

Market values stay secondary to PiChan intelligence.

Project/token artwork is content. Fallback order:

1. verified project/token image
2. deterministic neutral identicon
3. neutral initials

Never use the PiChan bird as token artwork.

---

## 7. Layout and surface philosophy

Use a 4 px base grid.

Mobile-first; desktop increases density without changing semantics.

PiChan is **not** a page of cards.

Default structure:

- open research sections
- separators
- grouped rows
- restrained context surfaces

Reserve elevated card treatment for:

- unified Decision Strip
- PiChan Brief
- materially important Risk Findings when needed
- contextual/interactive objects
- modal/floating layers

Use layer contrast + borders before shadows.

---

## 8. App shell

### Mobile

Primary navigation:

- Radar
- Search
- Watch
- Me

Passport/Creator are detail routes.

Detail rules:

- preserve bottom navigation
- show Back when history exists
- preserve originating primary-tab state where known
- do not hard-code Radar active
- deep-link fallback may return to Radar

### Desktop

- left rail/sidebar
- Radar / Search / Watch / Me
- proper global search/command field in top bar
- alerts/account utilities
- research canvas max width ~1220 px
- Passport secondary rail is sticky on long research pages

---

## 9. Signature PiChan patterns

### Unified Decision Strip

One component, three independent segments:

- Reputation
- Risk Signals
- Data Confidence

`Decision Strip` is an internal name and must not appear as public UI copy.

### PiChan Brief

- small approved PiChan mark
- one concise conclusion sentence
- 3–6 prioritized findings
- evidence/freshness footer
- calm cyan/blue emphasis
- no chat/AI-assistant cliché

### Evidence Trail

Use the same source/freshness/disclosure grammar across Passport, Radar, Creator Intelligence and Flight Recorder.

### Why on Radar

Every organic Radar item explains why PiChan surfaced it.

### Watching state

Use observation/eye logic for state transition without mascot decoration.

---

## 10. Iconography and interactions

Use one consistent vector icon family.

- 16 px metadata
- 18–20 px controls
- 22–24 px primary navigation

No Unicode placeholder glyphs in production.

Buttons:

- Primary: cyan + navy label
- Secondary: surface + structural border
- Destructive: red only for destructive/system-danger actions

Motion is short and functional. Respect reduced motion.

---

## 11. Passport reference-screen learnings — v0.4

The refined mobile and desktop high-fidelity passes confirm:

- identity and intelligence read before market price
- the unified Decision Strip is compact and distinctive
- PiChan Brief is the correct main brand moment
- open research sections feel more credible than nested cards
- Risk rows work better with restrained severity rails than floating cards
- Market Pulse works as context rather than trading UI
- desktop benefits from a sticky context rail
- Search is the correct visible origin in the static reference; production preserves actual origin
- public UI contains no internal implementation notes such as `Decision Strip` or `Claim hidden...`
- final vector system icons replace mockup glyphs

The cross-device structure is now a **reference-screen candidate**.

---

## 12. State validation

Mandatory state behavior is defined in `PASSPORT_STATE_MATRIX_V1.md`.

The design has been explicitly validated for:

- normal claimed/canonical
- new/unknown asset
- Unrated + Low Confidence
- Authority Verified + strong evidence
- Disputed / conflicting evidence
- stale evidence
- provider partial outage
- unsupported findings
- loading / skeleton
- error / retry

High Confidence must never visually imply Safe.

---

## 13. Reusable component source

Production component rules live in `UI_COMPONENT_LIBRARY_V1.md`.

Core families:

1. App shell
2. Global search / command field
3. Project identity block
4. Chain + verification/status badges
5. Unified Decision Strip
6. PiChan Brief
7. Evidence Footer
8. Risk Finding row/card
9. Metric/data row
10. Holder/entity record
11. Creator preview
12. Flight Recorder event
13. Watch control
14. Button system
15. Modal/bottom sheet
16. Loading/empty/unknown/error states

---

## 14. Design QA rules

A screen fails Design HQ if:

- Reputation, Risk and Confidence look like one score
- unknown/missing data looks positive
- evidence provenance is inaccessible
- critical findings are visually weaker than decorative data
- cyan is used everywhere and loses meaning
- the page becomes a collection of generic cards
- mobile is compressed desktop
- mascot usage becomes noise
- UI resembles an exchange terminal
- terminology differs from locked product language
- placeholder glyph icons ship to production
- internal design/debug copy appears publicly
- the PiChan identity is reconstructed instead of consuming Production Assets 2.2

---

## 15. Current lock and next step

**Direction:** dark-first evidence intelligence product.  
**Visual character:** quiet intelligence, bright signals.  
**Passport cross-device reference:** v0.4 candidate.  
**State semantics:** validated.  
**Component library:** foundation defined.  
**Brand assets:** Production Assets 2.2.

Next Design HQ step: **finish Passport component/state lock, then design Radar from the same system without introducing a second visual language.**
