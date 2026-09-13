# PiChan V1 — Product UI Tokens

**Status:** DESIGN HQ — FOUNDATION LOCK  
**Product version:** V1.0  
**Design system revision:** 0.2  
**Date:** 2026-09-13

This file defines the concrete product-surface tokens used by PiChan V1. Locked brand colors remain unchanged; these are derived UI roles for the dark-first product experience.

## 1. Color roles

### Brand anchors

- `brand.navy` — `#041F5F`
- `brand.cyan` — `#12B6F6`
- `brand.royal` — `#153FE9`
- `brand.white` — `#FFFFFF`

### Product surfaces

- `bg.canvas` — `#060B14`
- `bg.surface` — `#0B1220`
- `bg.surfaceRaised` — `#101A2B`
- `bg.surfaceSelected` — `#102647`
- `bg.overlay` — `rgba(3, 8, 18, 0.78)`

### Borders

- `border.subtle` — `#172235`
- `border.default` — `#24334A`
- `border.strong` — `#365170`
- `border.focus` — `#12B6F6`

### Text

- `text.primary` — `#F8FAFC`
- `text.secondary` — `#CBD5E1`
- `text.muted` — `#94A3B8`
- `text.disabled` — `#64748B`
- `text.inverse` — `#041F5F`

These text roles are chosen to maintain strong contrast on the dark product surfaces.

### Semantic states

- `status.critical` — `#EF4444`
- `status.warning` — `#F59E0B`
- `status.info` — `#153FE9`
- `status.unknown` — `#64748B`
- `status.success` — `#22C55E`

Rules:

- success green is for successful system actions, not investment safety
- Critical/Warning color belongs to Risk and operational states, not Reputation
- Unknown must always include a label/icon, never color alone

### Intelligence roles

- `intel.reputation` — brand-neutral navy/cyan treatment; grade meaning comes from text
- `intel.risk` — severity tokens above
- `intel.confidence.active` — `#12B6F6`
- `intel.confidence.secondary` — `#153FE9`
- `intel.confidence.empty` — `#24334A`

## 2. Typography tokens

Primary: Plus Jakarta Sans  
Technical/data: JetBrains Mono

### Mobile

- `display` — 32/38, 700
- `h1` — 28/34, 700
- `h2` — 22/28, 600
- `h3` — 18/24, 600
- `bodyLarge` — 16/24, 400
- `body` — 14/21, 400
- `label` — 13/18, 500
- `small` — 12/17, 400
- `micro` — 11/15, 500

### Desktop

- `display` — 44/52, 700
- `h1` — 34/42, 700
- `h2` — 26/34, 600
- `h3` — 20/28, 600
- `bodyLarge` — 16/24, 400
- `body` — 14/21, 400
- `label` — 13/18, 500
- `small` — 12/17, 400
- `micro` — 11/15, 500

Technical values use equivalent optical sizes in JetBrains Mono with tabular numerals.

## 3. Spacing

4 px base grid.

- `space.1` 4
- `space.2` 8
- `space.3` 12
- `space.4` 16
- `space.5` 20
- `space.6` 24
- `space.8` 32
- `space.10` 40
- `space.12` 48
- `space.16` 64
- `space.20` 80

Default mobile page gutter: 16 px.  
Default desktop content gap: 24 px.

## 4. Radius

- `radius.sm` — 8 px
- `radius.control` — 10 px
- `radius.md` — 12 px
- `radius.card` — 14 px
- `radius.feature` — 18 px
- `radius.pill` — 999 px

Cards should not become oversized rounded SaaS bubbles.

## 5. Elevation

Prefer border + layer contrast over shadows.

- `shadow.none` — none
- `shadow.float` — `0 12px 32px rgba(0,0,0,.28)`
- `shadow.modal` — `0 24px 64px rgba(0,0,0,.40)`

Use shadows only for floating/overlay layers.

## 6. Motion

- `motion.fast` — 140 ms
- `motion.standard` — 180 ms
- `motion.panel` — 220 ms
- easing — `cubic-bezier(.2,.8,.2,1)`

Respect `prefers-reduced-motion`.

## 7. Layout

### Mobile

- reference width: 390 px
- page gutter: 16 px
- minimum touch target: 44 px
- bottom navigation: 68 px + safe area
- top app bar: 56 px

### Desktop

- reference width: 1440 px
- expanded rail: 216 px
- collapsed rail: 76 px
- product canvas max width: 1220 px
- Passport main/context split: 68/32
- column gap: 24 px

### Breakpoint guidance

- compact/mobile: `< 768`
- tablet/compact desktop: `768–1099`
- desktop: `>= 1100`

Exact CSS breakpoints may be tuned during implementation, but component behavior must follow the same model.

## 8. Core component dimensions

- primary button height: 44 px mobile / 42 px desktop
- compact button: 36 px
- input/search: 48 px mobile / 44 px desktop
- chip: 28–32 px
- decision strip segment min height: 92 px mobile / 116 px desktop
- metric row/tile min height: 68 px
- finding row min target: 72 px
- app navigation icon: 22–24 px
- metadata icon: 16 px

## 9. Focus and interaction

Keyboard focus must be visible using the cyan focus token plus sufficient separation from the component border/background.

Hover must never be the only indication of interactability.

Pressed/selected states should use surface changes and borders before glow effects.

## 10. Brand asset use

Consume the current locked Production Assets 2.2 directly from `brand/vector/`.

Do not redraw the bird, reconstruct the wordmark, add halos, or generate logo artwork inside the UI.
