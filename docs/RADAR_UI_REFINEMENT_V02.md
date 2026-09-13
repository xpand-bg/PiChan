# PiChan V1 — Radar UI Refinement v0.2

**Status:** DESIGN HQ — REVIEW CANDIDATE  
**Product version:** V1.0  
**Date:** 2026-09-13  
**Owner:** PiChan Design HQ

This refinement follows the first high-fidelity `Signal Tape` pass. It does not change locked V1 product scope or the UI foundation. It improves hierarchy, density and distinctiveness before Radar lock.

## 1. Direction kept

Keep the `Signal Tape` model:

- chronological observation stream
- event first, market price second
- visible `Why on Radar`
- evidence/freshness on every organic item
- compact Reputation / Risk / Confidence context
- clear separation of Sponsored Sighting

Do not return to a generic token-card grid.

## 2. v0.2 improvements

### A. `Why on Radar` becomes the signature Radar object

The first pass used a contained mini-card. v0.2 makes it feel more like an intelligence annotation:

- subtle cyan observation rail/bracket
- eye/observation icon
- label `WHY ON RADAR`
- one concise evidence-backed sentence
- low-contrast background tint only when needed

It should read as PiChan's explanation attached to the observation, not as another card inside the feed item.

### B. Add event-family label for scanability

Organic Signals may show a small factual taxonomy label such as:

- LIQUIDITY
- CREATOR
- IDENTITY
- HOLDERS
- CONTROL
- REPUTATION

This derives from existing event families and does not create a new score/filter. It helps users understand what changed before reading detail.

### C. Reduce mobile header/filter height

Mobile v0.2:

- keep `Signals / New / Verified` visible
- collapse chain choice to one compact `All chains` filter control that opens the existing mobile filter sheet
- omit `Radar Pulse` from mobile

The first organic observation should appear sooner.

### D. Make intelligence context quieter

Reputation / Risk / Confidence remain visible but are supporting metadata. Prefer one compact line beneath `Why on Radar`; no mini Decision Strip inside Radar items.

### E. Stronger Evidence Footer hierarchy

Use one predictable bottom line:

`Onchain · checked 2m ago · View evidence`

`View Passport` remains the primary item destination. `Watch` remains a secondary action.

### F. Sponsored Sighting becomes more obviously outside the tape

Sponsored placement:

- no timeline marker
- no organic event-family label
- no `Why on Radar`
- explicit `SPONSORED SIGHTING`
- explicit `Paid placement · PiChan intelligence remains independent`
- contained/dashed geometry unlike organic observations

### G. Replace desktop explainer rail

The first-pass `How to read Radar` module is useful for a prototype but weak as a persistent product surface.

Desktop v0.2 context rail uses useful current context instead:

1. `Radar Pulse` — counts derived from current result set when reliable
2. `Current Scope` — active group + chain scope + updated state
3. `Source Health` — compact source availability/freshness note only where operationally useful
4. compact link to Watch where signed-in state supports it

Do not turn the context rail into a market dashboard.

## 3. Organic Signal item v0.2 anatomy

1. timestamp + chronology marker
2. project identity + chain / verification context
3. event-family label
4. event title
5. factual summary / before → after when useful
6. `Why on Radar` intelligence annotation
7. compact Reputation / Risk / Confidence context when useful
8. Evidence Footer
9. `View Passport` / event-history destination
10. Watch

## 4. Mobile density target

Aim for roughly 250–290 px per normal Signal item at 390 px width.

Rules:

- no nested card stack
- one clear line of chronology
- event title must remain visible without scrolling past decorative context
- signal reason must be visible in the feed
- metadata can wrap but should not dominate

## 5. Desktop density target

Main feed ~800–840 px, context rail ~300–330 px.

Use whitespace and separators rather than large item containers. The chronology rail is subtle and continuous.

## 6. New variant

New uses the same structure but changes the event semantics:

- event family: `NEW DEPLOYMENT`
- title: `New deployment observed`
- age/discovered time prominent
- claim/canonical state visible if known
- `Why on Radar`: newly discovered supported deployment
- likely initial intelligence state can be `Unrated / Unknown / Low` when evidence is sparse

New does not imply good or promising.

## 7. Verified variant

Verified also uses the same structure:

- event family: `IDENTITY`
- title such as `Authority verified`, `Project claim accepted`, or `Canonical deployment established`
- show exact verification type and source
- `Why on Radar`: the identity/authority state materially changed

Verified never implies safe.

## 8. Stale / partial-data handling

Do not create a large outage card inside the organic feed unless necessary.

Preferred treatment:

- affected item's Evidence Footer becomes explicit: `Provider · stale 42m · View evidence`
- optional compact source-health note in desktop context rail
- unaffected onchain-backed observations remain fully usable

## 9. Lock review questions

Before locking Radar, review:

1. Does the feed feel like PiChan intelligence rather than token discovery marketing?
2. Is `Why on Radar` visually memorable without becoming a card-inside-card pattern?
3. Can users scan event type + change + reason quickly on mobile?
4. Are Reputation / Risk / Confidence clearly secondary context?
5. Is Sponsored Sighting unmistakably paid and outside organic ranking?
6. Does desktop use extra width for context rather than filler?
7. Do New and Verified feel like variants of one system rather than separate products?

If these pass after v0.2 visual review, perform state QA and lock Radar.