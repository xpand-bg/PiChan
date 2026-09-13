# PiChan V1 — UI Component Library

**Status:** DESIGN HQ — COMPONENT FOUNDATION  
**Product version:** V1.0  
**Design system revision:** 0.3  
**Date:** 2026-09-13  
**Owner:** PiChan Design HQ

This document converts the locked UI direction into reusable production component rules. It is derived from `UI_DESIGN_SYSTEM_V1.md`, `PRODUCT_UI_TOKENS_V1.md` and the high-fidelity Passport work.

---

## 1. Component philosophy

PiChan is not a generic card-based SaaS dashboard.

The default building blocks are:

- open research sections
- grouped evidence rows
- compact status chips
- one strong unified Decision Strip
- one signature PiChan Brief surface
- evidence-first rows and timelines
- restrained action surfaces

Elevation is reserved for components that need hierarchy or interaction.

---

## 2. App shell

### Mobile shell

Primary bottom navigation:

- Radar
- Search
- Watch
- Me

Height target: `68 px + safe area`.

Detail routes such as Passport are not separate primary tabs.

Rules:

- preserve bottom navigation for orientation and fast escape
- detail screens must provide an explicit back affordance in the top bar when navigation history exists
- deep-linked Passport fallback back target is Radar
- do not hard-code `Radar` as active when the user entered from Search or Watch
- implementation may preserve the originating primary-tab state during the detail session
- when origin is unknown, no primary tab needs to be falsely highlighted

Top app bar target: 56 px.

### Desktop shell

- left navigation rail
- proper global search / command field
- alerts / account utilities in top bar
- research canvas max width ~1220 px

Passport context rail becomes sticky below the identity/decision area.

---

## 3. Global Search / Command Field

Purpose: one fast entry point for project name, ticker, deployment/mint address and creator/deployer wallet.

States:

- idle
- focused
- typing
- loading
- results
- ambiguous results
- no results
- error

Desktop target height: 44 px.  
Mobile target height: 48 px.

Search must never imply ticker uniqueness. Same-name/ticker ambiguity is surfaced explicitly.

---

## 4. Project Identity Block

Required:

- project/token icon
- name
- ticker
- chain
- deployment/mint
- verification/canonical/claim states
- Watch control

### Token/project icon

The project icon is content, not PiChan branding.

Fallback order:

1. verified project/token image when available
2. deterministic neutral identicon derived from deployment/mint
3. neutral initials fallback

Never use the PiChan bird as the fallback token icon.

### Address row

Always include:

- controlled truncation
- copy
- full reveal
- explorer action where available

Technical values use JetBrains Mono in production.

---

## 5. Status chips

Base height: 28–32 px.

Families:

- chain/network
- Canonical
- Claimed
- Authority Verified
- Disputed
- lifecycle
- evidence source
- severity

Rules:

- status must not rely on color alone
- do not use one generic blue check for all verification strengths
- semantic label remains readable at compact sizes

---

## 6. Unified Decision Strip

Signature component containing three independent segments:

1. Reputation
2. Risk Signals
3. Data Confidence

The public UI should **not** show an internal heading such as `Decision Strip` above this component.

### Reputation segment

Required:

- label `Reputation`
- grade or `Unrated`
- optional coverage helper

No green/red safety scale.

### Risk segment

Required:

- label `Risk Signals`
- compact severity summary
- explicit Unknown where present

Strong severity color is allowed here.

### Confidence segment

Required:

- label `Data Confidence`
- High / Medium / Low
- segmented coverage meter

No green.

### Responsive behavior

Desktop: three equal segments.  
Mobile: three segments when readable; 2+1 inside the same shared container if text becomes cramped.

Never horizontal-scroll the Decision Strip.

---

## 7. PiChan Brief

Signature elevated surface.

Required:

- approved PiChan mark from Production Assets 2.2
- title `PiChan Brief`
- short descriptor
- concise summary / 3–6 prioritized findings
- evidence/freshness footer
- `View evidence` / `Why?` action

Rules:

- the bird remains small and secondary to content
- no speech bubble
- no fake assistant typing
- no full-card gradient
- factual tone only

---

## 8. Evidence Footer

Shared signature component.

Pattern:

`[Source type] · [Freshness] · View evidence`

Examples:

- `Onchain · Checked 3m ago · View evidence`
- `Provider · Checked 8m ago · View evidence`
- `Declared by project · Observed Sep 13 · View evidence`
- `Conflicting · Needs review · View evidence`

States:

- fresh
- historical
- stale
- conflicting
- provider partial outage
- unknown

The disclosure action opens the evidence detail without changing the underlying conclusion.

---

## 9. Risk Finding Row

Default risk presentation is an open evidence row, not a nested card.

Required:

- severity icon/symbol
- finding title
- severity label
- short factual condition summary where needed
- Evidence Footer

Ordering:

1. Critical
2. Warning
3. material Unknown
4. Info

Elevated card variant is reserved for Critical, recently material change, or consequential conflict/unknown.

---

## 10. Data / Metric Row

Used for Market Pulse and compact intelligence summaries.

Required:

- small muted label
- prominent technical value
- optional contextual delta
- optional freshness access

Market price/change styling must remain secondary to PiChan intelligence.

Green/red must not dominate the page like an exchange terminal.

---

## 11. Holder / Entity Record

Desktop table fields can include:

- rank
- address/entity
- share
- role/category
- source/relationship marker

Mobile converts the record into a stacked row/cardless record.

Addresses use truncation + copy/full reveal.

Provider-derived labels require source attribution.

---

## 12. Creator Preview

Compact context component.

Required:

- creator/origin entity or wallet
- observed role
- known project count
- one or two notable evidence-backed observations
- evidence source
- `View Creator Intelligence`

Avoid accusatory language when relationship evidence is weak.

---

## 13. Flight Recorder Event

Chronology component, not a social feed.

Required:

- event type/icon
- timestamp
- event title
- before → after where useful
- materiality/severity where applicable
- evidence/source access

Timeline connector remains visually subtle.

---

## 14. Watch Control

States:

- Watch
- Watching
- loading
- error
- login/connect required where applicable

Primary Watch control remains visible in Passport identity header.

Do not duplicate it as a second oversized block in the desktop context rail.

---

## 15. Buttons

### Primary

- cyan fill
- navy high-contrast label
- 44 px mobile target
- 42–44 px desktop

### Secondary

- surface background
- structural border
- light text

### Destructive

- red only for destructive/system-danger actions

`Claim this Passport` is not a purchase CTA and is shown only for eligible Unclaimed Passports.

---

## 16. Modal / Bottom Sheet

Use for:

- evidence detail
- full address reveal
- report/dispute
- wallet signature explanation
- mobile filters
- confirmations

Mobile prefers bottom sheet for compact contextual tasks.  
Desktop prefers modal/popover based on task complexity.

Must support keyboard focus trap and Escape close where appropriate.

---

## 17. Loading / Empty / Unknown / Error

Every data-bearing component must support:

- loading
- complete
- no data yet
- unsupported
- Unknown
- stale
- conflicting
- provider partial outage
- error/retry

Skeletons preserve final layout dimensions to avoid layout shift.

Unknown is neutral and explicit; never visually positive.

---

## 18. Iconography

Production UI must use one consistent vector icon family.

Do not ship placeholder Unicode symbols such as `⌕`, `◉`, `◇` or text glyph arrows as final icons.

Rules:

- outline system icons by default
- 16 px metadata
- 18–20 px controls
- 22–24 px primary navigation
- filled icons only where semantic urgency justifies them
- PiChan bird remains a brand asset, not a system icon

---

## 19. Accessibility contract

All interactive components:

- visible keyboard focus
- meaningful accessible name
- approximately 44×44 px touch target where practical
- status not communicated by color alone
- appropriate semantic role
- reduced-motion support

The locked dark tokens meet strong text contrast targets; implementation must preserve WCAG 2.2 AA in real states.

---

## 20. High-fidelity Passport learnings

The first mobile high-fidelity pass confirms the following decisions:

- dark-first product direction works
- Decision Strip is distinctive and compact
- PiChan Brief creates the correct signature brand moment
- open research sections feel more credible than nested cards
- market data can stay useful without becoming the page hero
- standardized evidence/freshness language improves scanability

Corrections for the next visual pass:

- remove visible internal label `Decision Strip` from production UI
- use final vector system icons rather than mockup glyphs
- add explicit mobile back behavior for Passport detail routes
- use verified project image / deterministic identicon instead of a generic letter-circle where real content is unavailable
- preserve slightly more breathing room between long research sections on desktop while keeping mobile information density high

---

## 21. Component lock gate

The component library is ready for Developer HQ only when:

1. all core states above are visually specified
2. mobile and desktop variants are defined
3. evidence and freshness patterns are consistent
4. no placeholder glyph iconography remains
5. project icon fallback behavior is deterministic
6. Risk/Confidence/Reputation remain unmistakably separate
7. Production Assets 2.2 are consumed directly
8. keyboard/touch/accessibility behavior is documented

**Current status:** component foundation defined; visual component lock follows Passport mobile + desktop review.
