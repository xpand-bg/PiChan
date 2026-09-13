# PiChan V1 — Flight Recorder UI QA Lock

**Status:** FINAL DESIGN QA — LOCKED  
**Product version:** V1.0  
**Date:** 2026-09-13  
**Owner:** PiChan Design HQ

This document records the final Design HQ QA decision for the Flight Recorder surface. It is implementation authority together with `FLIGHT_RECORDER_UI_SPEC_V1.md` and the locked V1 design-system contracts.

---

## 1. Final architecture

Public surface: **Flight Recorder**  
Internal pattern: **Black Box Timeline**

The surface is a project-specific historical chronology built from normalized PiChan observations/events.

It is not:

- a transaction explorer
- a price chart
- a social activity feed
- a generic audit table
- a marketing changelog

The central visual grammar is:

`time → event family → event meaning → State Delta / Fact Block → evidence`

---

## 2. Signature components locked

### State Delta

Required for meaningful state changes.

Examples:

- `$752K → $612K`
- `Unclaimed → Authority Verified`
- `34.8% → 38.4%`
- `2 → 3`
- `Medium → Low`

Rules:

- no automatic red/green increase/decrease semantics
- warning treatment only when event semantics justify it
- Before and After always textual
- technical numeric values may use mono type
- status/state values use standard product type

### Fact Block

Used when no legitimate previous value exists.

Never invent a fake Before state merely to preserve visual consistency.

### Event Inspector

Desktop only as the persistent context surface.

It contains selected-event evidence/time/state detail, not market statistics.

---

## 3. Historical integrity lock

Corrections are additive historical relationships.

Required behavior:

- keep original event
- mark original Corrected/Superseded where applicable
- link original to correcting event
- show correcting event at its real timestamp
- preserve both evidence trails
- update current Passport state from accepted current evidence

Forbidden:

- silently edit/delete a prior event to make history appear cleaner
- rewrite historical timestamps
- remove an event because its Radar signal expired

---

## 4. Time semantics

UI distinguishes when useful:

- evidence/source occurrence time
- PiChan observed time

Labels are explicit, for example:

- `Occurred onchain`
- `Observed by PiChan`

The product must not imply PiChan knew about evidence before it existed.

---

## 5. Event-state QA coverage

Passed:

- material numeric delta
- identity/status delta
- holder concentration delta
- creator/project-count delta
- Reputation/Confidence change with explanatory reason
- first observation with no previous state
- stale supporting evidence
- provider partial outage
- corrected/superseded event
- linked correction chain
- loading
- empty history
- error/retry

---

## 6. Responsive QA

### Mobile

Passed:

- one-column chronology remains scannable
- timeline rail is supportive, not required for semantics
- filters remain compact
- long status deltas remain readable
- correction relationships remain understandable
- bottom navigation does not cover final event content
- event detail can open inline or in the locked bottom-sheet pattern

### Desktop

Passed:

- chronology remains dominant
- sticky Event Inspector adds evidence value
- inspector differentiates observed vs source occurrence time
- filters do not become a dashboard toolbar
- no redundant market context appears in the right rail

---

## 7. Relationship QA

### Passport

Passport = current state + recent history preview.  
Flight Recorder = how the current state came to exist.

### Radar

Radar = `Why investigate now?`  
Flight Recorder = `What changed over time?`

The same normalized event may appear in both contexts, but each surface keeps its own information architecture.

---

## 8. Accessibility QA

Implementation requirements:

- semantic ordered chronology
- meaningful event headings
- exact timestamp available to assistive technology
- textual Before / After labels
- status not encoded by color alone
- accessible filter controls
- visible focus on selected desktop event
- accessible evidence actions
- reduced-motion support
- WCAG 2.2 AA target

---

## 9. Implementation guardrails

Developer HQ must:

- consume locked design tokens/components
- preserve State Delta semantics
- preserve event taxonomy
- preserve evidence provenance/freshness
- preserve correction relationships
- keep materiality separate from risk severity
- never substitute demo events in production empty/error states
- never use price direction to determine event color
- never hard-code Search/Radar active for detail routes; preserve runtime origin when known

---

## 10. Final decision

**Flight Recorder V1 is LOCKED for implementation.**

Approved reference direction:

- mobile: `PiChan_Flight_Recorder_Mobile_v02_LOCKED`
- desktop: `PiChan_Flight_Recorder_Desktop_v02_LOCKED`
- QA/state system: `PiChan_Flight_Recorder_Final_QA_LOCKED`

Further changes require a documented design-system/product reason, not screen-level restyling.
