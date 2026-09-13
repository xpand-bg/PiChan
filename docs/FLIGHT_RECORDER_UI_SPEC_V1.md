# PiChan V1 — Flight Recorder UI Spec

**Status:** DESIGN HQ — LOCKED  
**Product version:** V1.0  
**Design system:** locked V1 foundation  
**Date:** 2026-09-13  
**Owner:** PiChan Design HQ

Flight Recorder answers one question:

> **What changed, when, and what evidence proves it?**

Route:

`/p/{chain}/{address}/history`

Flight Recorder is the historical truth surface for a Passport. It is not a transaction explorer, social activity feed, price chart or marketing changelog. It converts normalized PiChan observations into an understandable chronology of meaningful state changes.

This spec reuses the locked V1 app shell, typography, evidence grammar, event taxonomy, status semantics and Production Assets 2.2. It does not expand product scope.

---

## 1. Locked product requirements

V1 event families:

- identity / verification
- contract / authority / control
- supply / holder structure
- liquidity
- creator / origin activity
- reputation / confidence
- dispute / lifecycle

Each event contains, where applicable:

- typed event family
- observed timestamp
- source occurrence timestamp when relevant
- before value
- after value
- source / evidence reference
- severity / materiality
- correction / supersession relationship

The observation pipeline must support:

- event generation from evidence diffs
- typed event taxonomy
- before / after payloads
- immutable chronology
- correction metadata
- snapshots
- materiality classification

Repeated observations produce diffs; they do not overwrite history.

---

## 2. Design direction — Black Box Timeline

`Black Box Timeline` is the internal pattern name. Public UI says **Flight Recorder**.

The product language is restrained:

- one continuous chronology rail
- date groups
- explicit times
- event-family labels
- concise deterministic titles
- **State Delta** as the signature historical component
- evidence attached to every event
- desktop Event Inspector for progressive disclosure

The aviation metaphor comes from the name and historical-record concept. Do not add decorative cockpit graphics, glowing sci-fi timelines or aircraft illustrations.

---

## 3. Information hierarchy

1. compact Project identity / Back to Passport
2. Flight Recorder title and history context
3. event filters
4. date group
5. event time
6. event family
7. event title
8. concise explanation
9. State Delta or Fact Block
10. materiality / risk context when applicable
11. Evidence Footer
12. deeper event / evidence detail

The event must be understandable before raw blockchain evidence is opened.

---

## 4. Project history header

Use a compact form of the locked Project Identity Block.

Required:

- project artwork / deterministic fallback
- name
- ticker
- chain
- deployment / mint
- relevant Canonical / Claimed / Authority Verified / Disputed state
- Back to Passport

Do not repeat the Passport Decision Strip.

History context may show:

- total events
- first observed
- last event

These are navigation/history facts, not intelligence scores.

---

## 5. Navigation and filters

### Mobile

Visible:

- `All events`
- `Material`
- `Filter`

`Filter` opens the locked bottom-sheet pattern with taxonomy options:

- Identity
- Control
- Holders / Supply
- Liquidity
- Creator
- Reputation / Confidence
- Dispute / Lifecycle

### Desktop

Compact filter chips may expose common event families directly.

Filtering changes only the visible subset. It never changes historical truth.

Detail routes preserve the originating primary navigation tab when known. Static references may show Search as the origin, but production must not hard-code Search or Radar active.

---

## 6. Chronology and time semantics

Newest first by default.

Date separators:

- `Today`
- `Sep 12, 2026`
- historical dates as needed

When occurrence and observation differ materially, event detail exposes both:

- `Occurred onchain: 14:31:48`
- `Observed by PiChan: 14:33:02`

PiChan must never imply it observed an event before the source evidence existed.

---

## 7. Flight Recorder Event

Required anatomy:

1. timeline marker
2. exact/useful time
3. event family
4. event title
5. concise factual summary
6. State Delta where a meaningful prior state exists
7. Fact Block when there is no legitimate prior value
8. materiality/severity label when useful
9. Evidence Footer
10. event/evidence disclosure

Events are open chronology sections, not nested social-feed cards.

---

## 8. Signature component — State Delta

State Delta shows the old state and new state explicitly.

Examples:

```text
PRIMARY POOL LIQUIDITY
BEFORE                  AFTER
$752K          →         $612K
```

```text
IDENTITY STATE
BEFORE                  AFTER
Unclaimed      →         Authority Verified
```

```text
TOP 10 HOLDERS
34.8%          →         38.4%
```

Rules:

- Before is historical state, not bad/red by default
- After is event-result state, not good/green by default
- risk/material warning treatment appears only when justified by event semantics
- unknown values remain explicit
- numeric/technical values may use mono typography
- semantic/status values use normal product typography for readability
- Before and After are always textual labels; the arrow is not the only semantic carrier

---

## 9. Fact Block — events with no prior state

Do not invent a fake Before value for initial observations.

Examples:

- project first observed
- first authority evidence discovered
- initial deployment indexed

Use a structured Fact Block instead:

```text
FIRST OBSERVED
Project deployment
Sep 03 · 10:12
```

---

## 10. Materiality vs risk severity

These concepts remain separate.

- `Material` = historically important change worth surfacing
- Risk severity = Critical / Warning / Info / Unknown only when tied to a Risk Finding
- ordinary history event = neutral

Do not use market-style green/red increase/decrease semantics.

The event-family label is not repeated as a redundant badge. Secondary badges are reserved for materiality, risk or correction state.

---

## 11. Evidence Footer

Reuse the locked evidence grammar and allow event identifiers.

Examples:

- `Onchain · tx 0x81…e2 · observed 14:33 · View evidence`
- `Direct verification · signature 7Y…ke · View evidence`
- `Provider · source stale 42m · View evidence`

Supported states:

- fresh
- historical
- stale
- conflicting
- provider partial outage
- corrected / superseded

Evidence detail may expand the event, but does not silently replace the historical record.

---

## 12. Desktop Event Inspector

Desktop uses the context rail for the selected historical event.

Required when selected:

- event title
- event family
- materiality / severity
- `Observed by PiChan`
- source occurrence time where available
- chain
- State Delta / Fact Block
- evidence type
- transaction / signature / reference
- relevant entity or pool
- materiality rule where useful
- evidence / explorer actions
- correction relationship when applicable

When no event is selected, the rail may show history summary / event-family legend / evidence notes. It must not become a market dashboard.

---

## 13. Mobile event detail

Mobile keeps a one-column chronology.

`Inspect event` may:

- expand a small event-detail region, or
- open the locked bottom sheet for structured metadata/evidence

Do not navigate away solely to reveal transaction/signature metadata.

---

## 14. Corrections and historical integrity

Corrections are immutable-history relationships, not edits that erase prior events.

When later evidence corrects a prior event:

- original event remains in chronology
- original event is marked `Corrected` / `Superseded`
- original event links to the correcting event
- correcting event appears at its real timestamp with its own evidence
- current Passport state follows the newer accepted evidence

Example:

```text
Sep 08 · 16:03
Liquidity control reported as Unlocked
[Corrected by Sep 09 · 08:14]

Sep 09 · 08:14
Liquidity control evidence corrected
Unlocked → LP Burned
```

Never delete the original event solely to make the history look cleaner.

---

## 15. Reputation / Confidence events

A score/state delta alone is insufficient.

Bad:

`Medium → Low`

Required pattern:

`Data Confidence decreased`

`Holder-label source became stale; concentration evidence lost freshness.`

Then show:

`Medium → Low`

The underlying evidence change is the meaning; the score/state delta is the result.

---

## 16. Relationship with Radar

Radar and Flight Recorder share normalized event vocabulary but have different jobs.

### Radar

> Why should I investigate this now?

- cross-project
- selective
- current/material discovery
- `Why on Radar`

### Flight Recorder

> What changed to this project over time?

- project-specific
- chronological
- preserves historical state changes and corrections

A Radar Signal may deep-link to the corresponding Flight Recorder event.

Expiring from Radar never removes the historical event.

---

## 17. Relationship with Passport

Passport shows current state and a small recent-history preview.

Flight Recorder explains how that current state came to exist.

Both use the same event-family language and evidence provenance rules.

---

## 18. Loading / empty / partial / error

### Loading

- skeleton preserves timeline geometry
- known Project identity remains stable

### No recorded events

Copy:

`No historical changes recorded yet.`

A Passport may still exist from the initial current-state observation.

### Partial / stale provider state

- existing historical events remain visible
- only affected evidence/freshness changes state
- no recorded history is removed

### Error

- preserve project context
- retry chronology region
- Back / Passport navigation remains usable
- never substitute demo history

---

## 19. Accessibility

- chronology is a semantic ordered list
- every event has a meaningful heading
- exact timestamps are available to assistive technology
- Before / After labels are textual
- event materiality/severity never relies on color alone
- filters are keyboard accessible
- selected desktop event has visible focus/state
- bottom-sheet/modal focus management follows the locked component contract
- reduced motion disables timeline animation/sweep effects

Target: WCAG 2.2 AA.

---

## 20. Responsive composition

### Mobile

Reference width: 390 px.

- compact project identity
- open chronology
- date groups
- one continuous subtle rail
- State Delta full-width within event content
- no nested card soup
- fixed bottom navigation must never obscure event content; scroll area includes sufficient bottom safe padding

### Desktop

Reference width: 1440 px.

- standard app shell
- chronology ~760–820 px
- sticky Event Inspector ~320–360 px
- ~24 px gap
- context rail remains historical/evidence-specific

---

## 21. Final high-fidelity decisions

Final review locked the following refinements:

1. **State Delta remains the signature Flight Recorder component.**
2. Numeric deltas may use monospaced values; semantic/status deltas use standard product typography.
3. Non-material events do not receive redundant event-family badges.
4. Mobile uses `Inspect event` for deeper structured detail while `View evidence` stays evidence-specific.
5. Desktop Inspector explicitly distinguishes source occurrence time from PiChan observation time.
6. First-observation events use Fact Block rather than inventing a Before value.
7. Correction chains show both original and correcting events.
8. Provider staleness changes evidence state, not historical existence.
9. Mobile fixed navigation includes bottom scroll padding and cannot cover the last history record.
10. Static references preserve Search as the known origin; runtime preserves the actual originating primary tab.

---

## 22. Lock criteria — passed

Flight Recorder is locked because:

1. a material change is understandable without raw blockchain decoding
2. Before → After is explicit and semantically neutral unless real risk/material semantics apply
3. event family + timestamp + evidence are available
4. corrected events remain visible and linked to corrections
5. Reputation/Confidence changes explain why they changed
6. Radar and Flight Recorder share vocabulary but not information architecture
7. desktop Event Inspector adds useful evidence detail rather than redundant metrics
8. mobile chronology remains scannable without nested cards
9. stale/partial source states do not erase historical events
10. initial observations do not fabricate a previous state
11. fixed mobile navigation does not obscure historical content
12. accessibility semantics do not depend on the visual timeline rail

**Design HQ decision:** `Black Box Timeline` / Flight Recorder V1 is **LOCKED** for implementation.
