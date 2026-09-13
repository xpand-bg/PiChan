# PiChan V1 — Flight Recorder UI Spec

**Status:** DESIGN HQ — HIGH-FIDELITY DRAFT  
**Product version:** V1.0  
**Design system:** locked V1 foundation  
**Date:** 2026-09-13  
**Owner:** PiChan Design HQ

Flight Recorder answers one question:

> **What changed, when, and what evidence proves it?**

Route:

`/p/{chain}/{address}/history`

Flight Recorder is the historical truth surface for a Passport. It is not a transaction explorer, social activity feed, price chart or changelog marketing page. It converts normalized PiChan observations into an understandable chronology of meaningful state changes.

This spec reuses the locked V1 app shell, typography, evidence language, event taxonomy, status semantics and Production Assets 2.2. It does not expand product scope.

---

## 1. Locked product requirements

From the V1 product/build contracts:

Flight Recorder must preserve historical truth rather than silently overwrite old state.

V1 event families:

- identity / verification
- contract / authority / control
- supply / holder structure
- liquidity
- creator / origin activity
- reputation / confidence
- dispute / lifecycle

Each event contains, where applicable:

- event type
- observed timestamp
- before value
- after value
- source / evidence reference
- severity / materiality

The observation pipeline additionally requires:

- event generation from evidence diffs
- typed event taxonomy
- before / after payloads
- immutable chronology / correction metadata
- snapshots
- materiality classification

---

## 2. Research-informed principles

### A. A historical log works when every record answers who/what/when

Audit-log products such as GitHub expose structured event type, actor/context and timestamp, and let users filter by action/time. PiChan should use the same principle but translate raw blockchain state into project-level meaning.

PiChan implication:

- event family is visible
- event title states what changed
- timestamp is explicit
- evidence/source is always accessible
- filtering operates on event taxonomy rather than freeform visual categories

### B. Raw blockchain detail should be progressively disclosed

Solscan exposes timestamp, result, signer, main actions and detailed instructions/program logs, but recommends hiding low-level instruction details for general users unless needed.

PiChan implication:

- the timeline leads with human-readable state change
- transaction/signature, exact instruction/log detail and provider payload live behind evidence/detail disclosure
- the user should not need to decode raw transactions to understand the event

### C. Event logs are evidence, not the final product narrative

Etherscan documents event logs as structured data used to track specific contract activities and changes. Flight Recorder should preserve that evidence while adding normalized PiChan semantics.

PiChan implication:

- raw source remains traceable
- PiChan event title is deterministic and evidence-backed
- raw logs/transactions never replace the normalized before → after explanation

### D. Event systems benefit from typed filtering and payload detail

Stripe's event tooling supports event-type filtering and lets users inspect the underlying event object. Flight Recorder should mirror the useful part of that model: compact chronology first, structured payload/evidence second.

---

## 3. Chosen direction — Black Box Timeline

`Black Box Timeline` is the internal design pattern name. Public UI remains **Flight Recorder**.

The visual concept is restrained:

- one continuous chronology rail
- grouped dates
- clear event-family labels
- concise event title
- **State Delta** (`Before → After`) as the signature object
- evidence/freshness always attached
- optional event inspector on desktop

The aviation metaphor comes from the product name, not decorative cockpit graphics.

Avoid:

- giant aircraft illustrations
- glowing sci-fi timelines
- social-feed cards
- raw transaction-table-first layout
- price-chart-first layout

---

## 4. Information hierarchy

The hierarchy is:

1. Project identity / back to Passport
2. Flight Recorder title + history context
3. Event filtering / scope
4. Date group
5. Event family
6. Event title
7. concise meaning
8. State Delta when applicable
9. materiality / severity context
10. Evidence Footer
11. deeper event/evidence detail

The event title and delta must be understandable before the user opens raw evidence.

---

## 5. Project history header

Use a compact version of the locked Project Identity Block.

Required:

- project image/fallback
- project name
- ticker
- chain
- truncated deployment/mint
- Canonical / Claimed / Authority Verified / Disputed state when relevant
- Back to Passport

Do not repeat the full Passport Decision Strip.

Optional derived history context:

- total recorded events
- first observed date/age
- last recorded event

These are history-navigation aids, not new intelligence scores.

---

## 6. Timeline navigation / filters

### Mobile

Keep the header compact.

Use:

- `All events`
- `Material only` optional toggle/filter
- one `Filter` control opening the locked mobile bottom-sheet pattern

Filter sheet can use the existing event taxonomy:

- Identity
- Control
- Holders / Supply
- Liquidity
- Creator
- Reputation / Confidence
- Dispute / Lifecycle

### Desktop

Use compact chips or a filter popover above the chronology.

Recommended visible controls:

- All events
- Material
- Identity
- Control
- Holders
- Liquidity
- Creator
- Reputation

Dispute/Lifecycle can remain in overflow/filter when space is limited.

Filtering does not change historical truth; it only changes the visible subset.

---

## 7. Date grouping

Chronology is newest first by default.

Use clear date separators such as:

- `Today`
- `Sep 12, 2026`
- `Sep 08, 2026`

Within each group, show exact or useful event time.

When source occurrence time and PiChan observed time materially differ, detail view may show both:

- `Occurred onchain: 14:31:48`
- `Observed by PiChan: 14:33:02`

Do not imply PiChan observed an event before the evidence existed.

---

## 8. Flight Recorder Event anatomy

Required:

1. timeline marker
2. time
3. event-family label
4. title
5. concise factual summary
6. State Delta when applicable
7. materiality/severity label where useful
8. Evidence Footer
9. expand/detail destination

Example:

```text
14:32
LIQUIDITY · MATERIAL
Liquidity decreased 18.6%
Primary pool liquidity moved below the configured materiality threshold.

BEFORE              AFTER
$752K          →     $612K

Onchain · tx 0x81…e2 · observed 2m ago · View evidence
```

---

## 9. Signature object — State Delta

`State Delta` is Flight Recorder's defining component.

Purpose:

> show the old state and new state without forcing the user to infer the change from prose.

### Numeric delta

```text
BEFORE        AFTER
$752K   →     $612K
```

### Status delta

```text
BEFORE        AFTER
Unclaimed → Authority Verified
```

### Concentration delta

```text
TOP 10 HOLDERS
34.8%   →     38.4%
```

### Count delta

```text
KNOWN PROJECTS
2       →     3
```

Rules:

- Before is historical state, not bad/red by default
- After is current-at-event state, not good/green by default
- semantic warning/critical treatment appears only when materiality/risk warrants it
- unknown values stay explicit
- do not use green/red purely for increase/decrease

Not every event needs a delta. New observations without a meaningful previous value may show a structured fact block instead.

---

## 10. Materiality and severity

Flight Recorder stores history, so not every event is a warning.

Separate concepts:

- `Material` = important change worth surfacing
- Risk severity = Critical / Warning / Info / Unknown where the event is tied to a Risk Finding
- ordinary historical event = neutral

Examples:

- liquidity -18.6% → `Material`
- authority changed → `Material`
- project claim accepted → neutral identity event
- Risk Finding appeared → may use Warning/Critical

Do not color the entire timeline based on price-like positive/negative semantics.

---

## 11. Evidence Footer

Reuse the locked evidence grammar, extended with event identifiers when useful.

Examples:

- `Onchain · tx 0x81…e2 · observed 2m ago · View evidence`
- `Direct verification · signature 7Y…ke · View evidence`
- `Provider · observed Sep 12 · View evidence`

States:

- fresh
- historical
- stale supporting source
- conflicting
- corrected/superseded
- provider partial outage

Evidence disclosure must preserve the event conclusion and show the supporting source, not replace history silently.

---

## 12. Desktop Event Inspector

Desktop uses the extra width for a **sticky Event Inspector**, not generic market statistics.

When no event is selected:

- history summary
- event-family legend
- source/freshness note

When an event is selected:

- event title
- exact observed timestamp
- family
- materiality/severity
- State Delta
- source type
- transaction/signature/reference
- source occurrence time where available
- PiChan observation time
- evidence action
- correction/supersession relationship if applicable

The inspector is progressive disclosure. The main timeline remains readable without it.

---

## 13. Mobile event detail

Mobile keeps one-column chronology.

Tapping an event may:

- expand a small detail section inline for straightforward events, or
- open the locked bottom-sheet pattern for evidence/raw detail

Do not navigate away just to reveal transaction/signature metadata.

---

## 14. Corrections and historical integrity

This is a critical Flight Recorder state.

If later evidence corrects a prior PiChan event:

- original event remains in chronology
- mark it `Corrected` / `Superseded` where appropriate
- show the correction relationship
- add the correcting event with its own timestamp/evidence
- current Passport state follows the corrected evidence

Example:

```text
Sep 08
Liquidity control reported as Unlocked
[Corrected by event on Sep 09]

Sep 09
Liquidity control evidence corrected
Unlocked → Burned LP
```

Never delete the original event solely to make history look cleaner.

---

## 15. Confidence / Reputation events

When Reputation or Data Confidence changes, Flight Recorder must explain the underlying reason.

Bad:

`Confidence changed Medium → Low`

Better:

`Data Confidence decreased`
`Holder-label source became stale; two concentration inputs are no longer current.`

Then show:

`Medium → Low`

The score/state change is the result; the evidence reason is the meaning.

---

## 16. Relationship with Radar

Radar and Flight Recorder share event vocabulary but have different jobs.

### Radar

`Why should I investigate this now?`

- selective
- current
- material
- cross-project discovery

### Flight Recorder

`What happened to this project over time?`

- project-specific
- historical
- complete enough to preserve relevant state changes
- immutable/correctable chronology

A Radar Signal may deep-link to the corresponding Flight Recorder event.

Do not make Flight Recorder visually identical to Radar Signal Tape.

---

## 17. Relationship with Passport

Passport shows:

- current state
- recent Flight Recorder preview

Flight Recorder shows:

- how current state came to exist
- prior state
- corrections
- exact evidence chronology

The Passport preview and full Flight Recorder use the same event-family terminology.

---

## 18. Loading / empty / partial states

### Loading

- skeleton preserves timeline rail and event geometry
- project identity remains stable when already known

### No recorded events yet

Use:

`No historical changes recorded yet.`

Explain that the current Passport can still exist from the initial observation.

### Provider partial outage

- existing historical events remain visible
- affected evidence gets stale/partial treatment
- do not remove already-recorded history

### Error

- preserve project context
- retry chronology region
- Passport/back navigation remains usable

---

## 19. Accessibility

Requirements:

- chronology is a semantic ordered list, not visual-only lines
- each event has a meaningful heading
- exact time available to assistive technology
- before/after labels are textual, not arrow-only
- materiality/severity never relies on color alone
- filters keyboard accessible
- selected event in desktop inspector has visible focus/state
- bottom sheet/modal follows locked focus-management rules
- reduced motion disables animated timeline sweeps/transitions

---

## 20. Mobile composition

Reference width: 390 px.

Recommended structure:

```text
Back to Passport
[icon] Signal Bird $BIRD
       Robinhood Chain · 0x90b4…e887

Flight Recorder
What changed, when, and why.
[All events] [Filter]

TODAY
│ 14:32  LIQUIDITY · MATERIAL
● Liquidity decreased 18.6%
│ $752K → $612K
│ evidence footer
│
│ 12:08  IDENTITY
● Authority verified
│ Unclaimed → Authority Verified
│ evidence footer

SEP 12
│ 18:41  HOLDERS · MATERIAL
● Top-10 concentration crossed threshold
│ 34.8% → 38.4%
```

The timeline rail is subtle. Events are open sections, not nested cards.

---

## 21. Desktop composition

Reference width: 1440 px.

Use standard app shell.

Recommended layout:

- main chronology: ~760–820 px
- sticky Event Inspector: ~320–360 px
- 24 px gap

The main column contains identity/history header, filters and chronology.

The right inspector contains selected-event evidence detail. It must not become a market dashboard.

---

## 22. First high-fidelity build

Build and review:

1. mobile normal chronology with mixed event families
2. desktop chronology + selected Event Inspector
3. State Delta component variants
4. QA board covering:
   - material numeric change
   - identity/status change
   - Reputation/Confidence change with reason
   - corrected/superseded event
   - no events
   - loading
   - provider stale/partial state

---

## 23. Lock criteria

Flight Recorder can be locked when:

1. users can understand a material change without opening raw blockchain data
2. Before → After is visually clear and semantically neutral unless actual risk severity applies
3. event family + timestamp + evidence are always available
4. corrected events remain historically visible
5. Reputation/Confidence changes explain why they changed
6. Radar and Flight Recorder share vocabulary but do not feel like the same screen
7. desktop inspector adds evidence detail rather than redundant statistics
8. mobile chronology remains scannable without card nesting
9. partial/stale source states do not erase historical events
10. accessibility semantics do not depend on the visual timeline rail

**Current Design HQ decision:** proceed with the `Black Box Timeline` high-fidelity direction.
