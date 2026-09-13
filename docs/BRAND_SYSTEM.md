# PiChan Brand System

**Brand Guidelines:** Version 1.0 — September 2026  
**Production asset revision:** 2.1  
**Status:** FINAL LOCKED

This is the implementation reference for the approved PiChan identity.

## 1. Identity principle

The final production refinement changes **only the bird icon**. The approved wordmark, custom `P`, permanent copy, palette, typography, gradient rules, spacing rules, supporting elements and visual brand-kit structure are unchanged.

The bird should read as observant, curious, intelligent and confident — not angry, childish or overly cute.

## 2. Permanent messaging

Use these exact lines on core brand surfaces:

- **Primary tagline:** `See what others miss.`
- **Positioning line:** `Onchain intelligence & market discovery.`
- **Personality line:** `PiChan is watching.`
- **Community:** `PiChan | The Flock`
- **Tone:** `Curious. Data-driven. Independent. Forward-thinking.`

Do not replace these with generated alternatives in permanent brand surfaces.

## 3. Logo source of truth

Canonical bird:

`brand/vector/PiChan_Icon_Master.svg`

All badge, app-icon, lockup, favicon and social-avatar uses must derive from this source.

Approved hierarchy:

1. `PiChan_Primary_Horizontal_*`
2. `PiChan_Secondary_Stacked_*`
3. `PiChan_Circular_Badge.svg`
4. `PiChan_App_Icon.svg`
5. `PiChan_Icon_Master.svg`
6. `PiChan_Icon_Monochrome_*`
7. `PiChan_Wordmark_*`

The wordmark files are locked and must not be reconstructed.

## 4. Locked palette

| Token | Hex |
|---|---|
| Deep Navy | `#041F5F` |
| Cyan Blue | `#12B6F6` |
| Royal Blue | `#153FE9` |
| White | `#FFFFFF` |
| Success | `#22C55E` |
| Warning | `#F59E0B` |
| Error | `#EF4444` |
| Border / Divider | `#E5E7EB` |
| Muted Text | `#6B7280` |
| Surface | `#0B1220` |

## 5. Gradient

`linear-gradient(90deg, #153FE9 0%, #12B6F6 100%)`

Use for digital backgrounds, accents, charts and hero surfaces. Never apply it to the core logo.

## 6. Typography

- **Plus Jakarta Sans** — brand, website and product UI
- **JetBrains Mono** — market data, numbers, wallet addresses, code and technical values

## 7. Minimum size

- Full horizontal logo: **120–140 px** minimum digital width
- Icon only: **24–32 px** minimum digital width
- Print primary logo: **40 mm** minimum width
- Print icon: **8 mm** minimum width

## 8. Clear space

For the full logo, preserve clear space equal to the wordmark `i` dot around the lockup.

## 9. Background rules

- Dark: approved full-color logo
- Light: approved light-background treatment
- Image/busy surface: only when contrast and clear space remain sufficient

## 10. Never

- redraw the bird
- change its proportions
- add white halos, strokes or decorative outlines not present in the approved master
- alter the eye, beak, feather rhythm, throat dots or wing
- distort, rotate or apply shadows/glows/3D effects
- change the wordmark construction or colors
- rewrite permanent messaging
- use legacy bird versions

## 11. Implementation rule

Use `src/brand/tokens.ts` for brand tokens and exact files from `brand/vector/` for logo assets. Do not reconstruct the identity in CSS, canvas, text glyphs or generated artwork.

Any future identity change requires an explicit new version. Until then, **Brand Guidelines Version 1.0 / Production Assets 2.1 is final and locked.**
