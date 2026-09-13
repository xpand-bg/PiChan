# PiChan V1 — UI Component Library

**Status:** DESIGN HQ — COMPONENT LOCK CANDIDATE  
**Product version:** V1.0  
**Design system revision:** 0.4  
**Date:** 2026-09-13  
**Owner:** PiChan Design HQ

This document converts the locked UI direction into reusable production component rules. It is derived from `UI_DESIGN_SYSTEM_V1.md`, `PRODUCT_UI_TOKENS_V1.md`, `PASSPORT_UI_SPEC_V1.md` and `PASSPORT_STATE_MATRIX_V1.md`.

---

## 1. Component philosophy

PiChan is not a generic card-based SaaS dashboard.

Default building blocks:

- open research sections
- grouped evidence rows
- compact status chips
- one strong unified Decision Strip
- one signature PiChan Brief surface
- evidence-first rows and timelines
- restrained contextual action surfaces

Elevation is reserved for hierarchy, urgency or interaction.

---

## 2. App shell

### Mobile

Primary bottom navigation:

- Radar
- Search
- Watch
- Me

Target: `68 px + safe area`.

Rules:

- detail routes preserve primary navigation
- detail routes show Back when history exists
- preserve originating tab state when known
- do not falsely hard-code Radar active
- deep-link fallback may return to Radar

Top app bar target: 56 px.

### Desktop

- left navigation rail
- global search/command field
- alerts/account utilities
- research canvas max width ~1220 px
- Passport context rail sticky below identity/decision area

---

## 3. Global Search / Command Field

Supports:

- project name
- ticker
- deployment/mint address
- creator/deployer wallet

States:

- idle
- focused
- typing
- loading
- results
- ambiguous results
- no results
- error

Ticker/name ambiguity must be surfaced explicitly.

---

## 4. Project Identity Block

Required:

- project/token image
- name
- ticker
- chain
- deployment/mint
- verification/canonical/claim state
- Watch control

Project image fallback:

1. verified project/token image
2. deterministic neutral identicon
3. neutral initials

Never use the PiChan bird as project artwork.

Address row always provides controlled truncation, copy, full reveal and explorer action where available.

---

## 5. Status chips

Families:

- network
- Canonical
- Claimed
- Authority Verified
- Disputed
- lifecycle
- evidence source
- severity

Rules:

- status never relies on color alone
- one generic checkmark must not represent different verification strengths
- labels remain readable at compact size

---

## 6. Unified Decision Strip

Three independent segments:

1. Reputation
2. Risk Signals
3. Data Confidence

Production UI never shows the internal name `Decision Strip`.

### Reputation

- grade / `Unrated`
- optional coverage helper
- neutral branded treatment
- no safety color scale

### Risk

- severity summary
- explicit Unknown
- strong semantic color allowed

### Confidence

- High / Medium / Low
- segmented evidence meter
- cyan/blue + neutral empty states
- never green

Mobile keeps the segments in one shared component; use a 2+1 layout only if content becomes unreadable.

---

## 7. PiChan Brief

Required:

- approved PiChan mark from Production Assets 2.2
- title `PiChan Brief`
- concise descriptor
- one conclusion sentence
- 3–6 findings
- Evidence Footer
- disclosure action

Rules:

- bird stays small
- no speech bubble
- no fake typing
- no full-card gradient
- factual tone

---

## 8. Evidence Footer

Pattern:

`[Source type] · [Freshness] · View evidence`

Supports:

- fresh
- historical
- stale
- conflicting
- provider partial outage
- unknown

Evidence disclosure opens supporting detail without silently changing the conclusion.

---

## 9. Risk Finding Row

Default form is an open evidence row.

Required:

- severity rail/icon
- title
- severity label
- concise condition description
- Evidence Footer

Order:

1. Critical
2. Warning
3. material Unknown
4. Info

Elevated card variant is reserved for Critical, recent material change, or consequential conflict/unknown.

---

## 10. Metric / Market Row

Required:

- muted label
- technical value
- optional contextual delta
- freshness access

Market styling remains secondary to intelligence.

No exchange-style giant red/green treatment.

---

## 11. Holder / Entity Record

Desktop may show:

- rank
- address/entity
- share
- role/category
- source/relationship marker

Mobile converts to compact stacked records.

Provider-derived labels require attribution.

---

## 12. Creator Preview

Required:

- origin wallet/entity
- observed role
- known project count
- evidence-backed observation summary
- evidence source
- `View Creator Intelligence`

Avoid accusatory language when relationship evidence is weak.

---

## 13. Flight Recorder Event

Required:

- event type/icon
- timestamp
- title
- before → after where useful
- materiality/severity where applicable
- evidence access

The pattern reads as chronology, not social feed.

---

## 14. Watch Control

States:

- Watch
- Watching
- loading
- error
- login/connect required

Primary Watch stays in the Passport identity header.

Do not duplicate it as an oversized desktop side-rail block.

---

## 15. Buttons

### Primary

- cyan fill
- navy label
- ~44 px mobile target

### Secondary

- surface background
- structural border
- light text

### Destructive

- red only for destructive/system-danger actions

`Claim this Passport` is shown only when eligible and Unclaimed.

Internal logic/debug explanations are never public UI copy.

---

## 16. Modal / Bottom Sheet

Use for:

- evidence detail
- full address reveal
- report/dispute
- wallet signature explanation
- mobile filters
- confirmations

Mobile prefers bottom sheets for compact contextual tasks. Desktop uses modal/popover based on task complexity.

Must support keyboard focus management and Escape close where appropriate.

---

## 17. Loading / Empty / Unknown / Error

Every data-bearing component supports:

- loading
- complete
- no data yet
- unsupported
- Unknown
- stale
- conflicting
- provider partial outage
- error/retry

Skeletons preserve final dimensions.

Unknown is neutral and explicit; never visually positive.

---

## 18. Iconography

Use one consistent vector icon family.

Do not ship Unicode placeholder symbols.

Targets:

- 16 px metadata
- 18–20 px controls
- 22–24 px primary navigation

PiChan bird is a brand asset, not a system icon.

---

## 19. Accessibility

Interactive components require:

- visible keyboard focus
- meaningful accessible name
- approximately 44×44 px touch target where practical
- status not communicated by color alone
- correct semantic role
- reduced-motion support

Target WCAG 2.2 AA.

---

## 20. High-fidelity learnings — v0.4

Cross-device Passport review confirms:

- the Decision Strip is distinctive without feeling gimmicky
- PiChan Brief is the right brand signature moment
- open research sections outperform nested cards
- Risk works best with narrow severity rails + labels
- evidence/freshness can stay visible without overwhelming the page
- mobile holder records should prioritize share + entity and keep metadata secondary
- desktop benefits from the 68/32 research/context composition
- sticky desktop context improves long-form research usability
- Search is a strong static reference origin; runtime preserves actual entry context
- system icons must be vectors with one consistent stroke style
- internal state/debug notes must never appear in public UI

---

## 21. State validation

Detailed state behavior is in `PASSPORT_STATE_MATRIX_V1.md`.

Every reusable intelligence component must support:

- normal
- Unrated
- Unknown
- stale
- conflicting
- provider partial outage
- loading
- error

The Decision Strip and PiChan Brief must remain semantically correct even when only partial evidence exists.

---

## 22. Component lock gate

Ready for Developer HQ only when:

1. mobile and desktop variants are specified
2. core state variants are specified
3. evidence/freshness grammar is consistent
4. no placeholder glyph iconography remains
5. project artwork fallback is deterministic
6. Risk / Confidence / Reputation remain unmistakably separate
7. Production Assets 2.2 are consumed directly
8. keyboard/touch/accessibility behavior is documented
9. public copy contains no internal design/debug language

**Current status:** component system is a v0.4 lock candidate pending final state/component QA; Radar must reuse it rather than introduce a second component language.
