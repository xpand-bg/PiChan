# PiChan V1 — Project Passport UI Spec

**Status:** DESIGN HQ — REFERENCE LOCK CANDIDATE  
**Product version:** V1.0  
**Design system revision:** 0.4  
**Date:** 2026-09-13  
**Owner:** PiChan Design HQ

This document defines the optimized Project Passport composition. It preserves the locked product hierarchy and turns it into the reference screen for the PiChan UI system.

Use with:

- `UI_DESIGN_SYSTEM_V1.md`
- `PRODUCT_UI_TOKENS_V1.md`
- `UI_COMPONENT_LIBRARY_V1.md`
- `PASSPORT_STATE_MATRIX_V1.md`
- Production Assets 2.2

---

## 1. Passport design job

The Passport must answer, in order:

1. **What is this?**
2. **What matters right now?**
3. **Why does PiChan believe it?**
4. **What changed?**
5. **What should I watch next?**

The first viewport prioritizes identity and intelligence over market price.

---

## 2. Core visual principle

The Passport is not a stack of SaaS cards.

Use:

- open research sections
- structural dividers
- grouped evidence rows
- a small number of elevated signature components

Reserve elevated surfaces for:

- the unified Decision Strip
- PiChan Brief
- materially important Risk Findings when needed
- interactive/context objects

---

## 3. Responsive composition

### Mobile

- reference width: 390 px
- gutter: 16 px
- one-column flow
- no primary horizontal scrolling
- bottom navigation: Radar / Search / Watch / Me
- explicit Back affordance on detail-route navigation when history exists
- bottom-tab state preserves actual origin when known

### Desktop

- reference width: 1440 px
- left product rail
- product canvas max width: ~1220 px
- research/context split: ~68/32
- 24 px column gap
- context rail sticks below the identity/decision area
- global search is a primary top-bar control

Desktop uses extra width for context and scanability, not decorative emptiness.

---

## 4. Locked semantic order

1. Identity header
2. Unified Decision Strip
3. PiChan Brief
4. Market Pulse
5. Identity / official links / declared wallets
6. Risk Signals
7. Supply & Holder Intelligence
8. Liquidity Intelligence
9. Creator Intelligence preview
10. Recent Flight Recorder events
11. Contextual actions

Desktop may place Market Pulse, official identity, Creator preview and secondary actions in the sticky context rail while preserving semantic order.

---

## 5. Identity header

Required:

- project/token icon
- project/token name
- ticker
- chain
- deployment/mint address
- copy
- explorer action
- lifecycle state when relevant
- Unclaimed / Claimed / Authority Verified / Canonical / Disputed states where applicable
- Watch control
- overflow/context actions

Rules:

- name leads
- ticker is secondary
- address is technical metadata
- verification/claim chips support identity rather than competing with it
- Watch remains visible at the top
- token/project image fallback follows verified image → deterministic identicon → initials
- never use the PiChan bird as token artwork

---

## 6. Unified Decision Strip — signature component

One shared structure with three independent outputs:

### Reputation

- label `Reputation`
- grade or `Unrated`
- optional coverage helper
- neutral brand treatment
- no green/red grade scale

### Risk Signals

- label `Risk Signals`
- compact severity summary
- Critical / Warning / Info / Unknown remain explicit
- strongest semantic color belongs here

### Data Confidence

- label `Data Confidence`
- High / Medium / Low
- segmented evidence coverage meter
- cyan/blue + neutral segments
- never green

Public UI does **not** show the internal label `Decision Strip`.

Each segment may reveal/scroll to deeper explanation.

---

## 7. PiChan Brief — primary brand moment

Directly after the Decision Strip.

Required:

- small approved PiChan mark
- `PiChan Brief`
- short descriptor such as `3 things worth your attention`
- one concise conclusion sentence
- 3–6 prioritized evidence-backed findings
- evidence/freshness footer
- `View evidence` / `Why?`

Visual treatment:

- raised research surface
- subtle cyan/royal accent
- no full-card gradient
- no speech bubble
- no fake AI typing treatment

Tone: **PiChan investigated this asset; here is what is worth knowing.**

---

## 8. Market Pulse

Market data is context, not the hero.

Mobile:

- compact two-column metric grid
- Price
- Market Cap / FDV
- Liquidity
- 24h Volume
- Holders
- Age

Desktop:

- compact context rail module

Rules:

- JetBrains Mono for values
- freshness visible/accessible
- no giant red/green trading treatment
- `Unknown` stays explicit

---

## 9. Identity & official links

Use compact open/grouped rows.

Possible rows:

- Website
- X
- Telegram
- Docs / GitHub
- declared project wallets

Evidence states may include:

- Authority
- Declared by project
- Discovered / unverified
- Conflicting

Do not use one generic blue check for different evidence strength.

---

## 10. Standard Evidence Footer

Pattern:

`[Source type] · [Freshness] · View evidence`

Examples:

- `Onchain · Checked 3m ago · View evidence`
- `Provider · Checked 8m ago · View evidence`
- `Declared by project · Observed Sep 13 · View evidence`
- `Conflicting · Needs review · View evidence`

This is shared across Passport, Radar, Creator Intelligence and Flight Recorder.

---

## 11. Risk Signals

Default presentation is an open evidence list, not cards inside cards.

Each finding includes:

- severity symbol/rail
- title
- severity label
- concise factual condition description
- Evidence Footer

Order:

1. Critical
2. Warning
3. material Unknown
4. Info

Elevate to a stronger card only when Critical, recently material, or conflict/unknown is highly consequential.

---

## 12. Supply & Holder Intelligence

Summary can include:

- total supply
- holder count
- top-holder concentration
- largest relevant holder
- creator/project wallet holdings

Desktop uses structured rows/table.  
Mobile uses compact stacked records.

Holder/entity record may include:

- rank
- address/entity
- share
- role/category
- related-cluster marker when evidenced
- provider attribution for provider-derived labels

No full interactive bubble graph in V1.

---

## 13. Liquidity Intelligence

Show:

- total known liquidity
- primary pool(s)
- DEX
- quote asset
- pool age
- lock/burn/control state when determinable
- material recent changes

Unknown remains explicit.

Recent material changes link to Flight Recorder evidence.

---

## 14. Creator Intelligence preview

Compact context object:

- creator/origin wallet/entity
- observed role
- known project count
- 1–2 notable evidence-backed observations
- evidence source
- `View Creator Intelligence`

Avoid accusatory copy from weak relationships.

On desktop this sits naturally in the context rail.

---

## 15. Flight Recorder preview

Show the latest 3–5 material events as chronology.

Each event may include:

- event type/icon
- timestamp
- event title
- before → after where useful
- materiality/severity when applicable
- evidence/source state

Action: `View full Flight Recorder`.

The pattern must read as history, not a social feed.

---

## 16. Contextual actions

Primary:

- Watch / Watching

Secondary where applicable:

- Share
- external market / Drones destination
- Report incorrect information
- Claim this Passport only when eligible and Unclaimed

Never show Claim on an already Claimed Passport.

Do not display internal state/debug explanations such as `Claim hidden because...` to the user.

---

## 17. High-fidelity reference decisions — v0.4

The refined mobile and desktop passes lock these visual decisions as the current reference candidate:

- no visible internal `Decision Strip` heading
- vector system icons instead of Unicode/mockup glyphs
- Back affordance on mobile detail routes
- Search shown as the originating tab in the static reference only; production preserves actual origin
- unified Decision Strip stays one component
- PiChan Brief carries the strongest brand expression
- Risk rows use narrow severity rails + labels rather than nested cards
- Market Pulse remains unboxed/open on mobile and compact in the desktop rail
- holder data uses compact structured rows
- Unknown states use explicit neutral labels
- Creator preview is contextual, not a large feature card
- Actions remain secondary to intelligence
- desktop context rail contains Market Pulse, identity evidence, Creator preview and actions

---

## 18. Required states

Detailed behavior is locked in `PASSPORT_STATE_MATRIX_V1.md`.

Design/implementation must support:

- normal complete data
- new / unknown asset
- Unrated + Low Confidence
- Unclaimed
- Claimed
- Authority Verified
- Canonical
- Disputed
- conflicting evidence
- stale evidence
- provider partial outage
- unsupported finding/module
- loading / skeleton
- error / retry

---

## 19. Reference lock criteria

Passport is ready to become the reusable UI reference when:

1. identity is stronger than price
2. Reputation, Risk and Confidence cannot be confused
3. PiChan Brief feels ownable and evidence-first
4. evidence provenance remains accessible
5. Risk hierarchy is clear without casino styling
6. mobile and desktop use the same semantic model
7. claim/action logic matches actual state
8. incomplete/conflicting/stale evidence is designed explicitly
9. system icons are consistent vectors
10. Production Assets 2.2 are consumed directly

**Current decision:** cross-device Passport v0.4 is the Design HQ reference-lock candidate. Final lock follows component/state QA, then Radar uses this same system.
