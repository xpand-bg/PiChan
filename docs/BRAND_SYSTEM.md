# PiChan Brand System

**Brand Guidelines:** v1.1  
**Logo Master:** v2.0  
**Status:** LOCKED  
**Effective:** September 2026

This document is the implementation reference for the PiChan identity. It translates the visual brand kit into rules that product, web, social and engineering work can use consistently.

## 1. Identity principle

PiChan is an onchain intelligence and market discovery product with a recognizable bird companion rooted in the Pi-Chan lore.

The final bird is the approved **Curious PiChan / Concept B** refinement. Its character is:

- curious
- observant
- intelligent
- confident
- distinctive

It is not angry, childish, overly cute or generic.

The final refinement changed **only the bird geometry**. The wordmark construction and colors, messaging, typography, palette, gradient and other brand rules remain unchanged.

## 2. Locked messaging

Use these exact lines unless a campaign specifically calls for approved campaign copy:

- **Primary tagline:** `See what others miss.`
- **Positioning line:** `Onchain intelligence & market discovery.`
- **Personality line:** `PiChan is watching.`
- **Community:** `PiChan | The Flock`

Do not replace these with generated alternatives in permanent brand surfaces.

## 3. Logo source of truth

The bird source of truth is:

`brand/vector/PiChan_Icon_Master.svg`

Every badge, app icon, lockup, favicon, animation and social avatar must derive from that geometry.

Approved vector assets live in `brand/vector/`.

### Hierarchy

1. `PiChan_Primary_Horizontal_*` — preferred full logo
2. `PiChan_Secondary_Stacked_*` — vertical / compact applications
3. `PiChan_Circular_Badge.svg` — avatar / social profile
4. `PiChan_App_Icon.svg` — app icon
5. `PiChan_Icon_Master.svg` — icon-only UI use
6. `PiChan_Icon_Monochrome_*` — one-color applications
7. `PiChan_Wordmark_*` — text-only applications

### Never

- redraw the bird
- change its proportions
- re-angle the eye or beak
- change feather count or wing cuts
- crop the wing in a badge/avatar
- stretch or rotate the mark
- add shadows, glows, bevels or 3D effects to the core logo
- recolor the bird outside approved versions
- use old bird variants

## 4. Locked palette

| Token | Hex | Primary use |
|---|---|---|
| Deep Navy | `#041F5F` | Primary, background, dark UI |
| Cyan Blue | `#12B6F6` | Brand accent, buttons, links |
| Royal Blue | `#153FE9` | Secondary accent, charts, highlights |
| White | `#FFFFFF` | Base, negative space |

### UI states

| Token | Hex |
|---|---|
| Success | `#22C55E` |
| Warning | `#F59E0B` |
| Error | `#EF4444` |
| Border / divider | `#E5E7EB` |
| Muted text | `#6B7280` |
| Dark surface | `#0B1220` |

## 5. Gradient

Official digital gradient only:

`linear-gradient(90deg, #153FE9 0%, #12B6F6 100%)`

Use for backgrounds, accents, selected UI surfaces and data visualization.

Do **not** apply the gradient to the PiChan bird or change the approved wordmark color construction.

## 6. Typography

### Plus Jakarta Sans

Primary typeface for brand, website and product UI.

Suggested hierarchy from the locked kit:

- Bold 700 — headlines
- SemiBold 600 — subheadings
- Medium 500 — UI / buttons
- Regular 400 — body text
- Light 300 — secondary text

### JetBrains Mono

Use for market data, numbers, wallet addresses, code and technical values.

## 7. Clear space

For the full logo, keep clear space around all sides equal to the height of the wordmark `i` dot.

For the icon alone, keep at least 12% of the icon width as clear space.

## 8. Minimum size

- Full horizontal logo: **120–140 px** minimum digital width; prefer 140 px
- Icon only: **24–32 px** minimum digital width; prefer 32 px
- Print primary lockup: **40 mm** minimum width
- Print icon: **8 mm** minimum width

At small sizes use the same bird geometry. Do not create a new simplified character.

## 9. Background rules

### Light surfaces

Use the light-background wordmark and, when necessary, `PiChan_Icon_LightBG_Keyline.svg` to protect the white head from disappearing into the surface.

### Dark surfaces

Use the dark-background wordmark treatment with the standard full-color bird.

### Photography / busy imagery

Use only when contrast, clear space and legibility are preserved. Prefer a controlled brand surface rather than placing the logo over visual noise.

## 10. Character and illustration use

The minimal bird mark is the **identity**.

A realistic PiChan may appear in lore, editorial storytelling, campaign art and selected launch creative, but it never replaces the core logo master.

The product should feel like a serious intelligence product with an ownable companion — not a mascot-heavy memecoin interface.

## 11. Implementation rule

Use `src/brand/tokens.ts` for product tokens and the exact files from `brand/vector/` for logo assets. Do not reconstruct the logo in CSS, canvas, text glyphs or generated artwork.

Any future identity change requires an explicit brand-version update. Until then, **Brand Guidelines v1.1 / Logo Master v2.0 is locked.**
