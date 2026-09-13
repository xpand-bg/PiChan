# PiChan Vector Assets

**Brand Guidelines:** v1.0  
**Production asset revision:** v2.2  
**Status:** FINAL LOCKED

## Source hierarchy

`PiChan_Icon_Master.svg` is the one canonical PiChan bird geometry.

`PiChan_Wordmark_LightBG.svg` and `PiChan_Wordmark_DarkBG.svg` are the canonical approved wordmark vectors. Their design and color construction are unchanged.

All other bird-based assets must derive from the canonical bird master.

## Production 2.2 cleanup

Revision 2.2 removes unintended white vector artifacts at the beak/head junction that became visible in circular/avatar exports. This is not a redesign.

Do not reintroduce:

- white spikes/slivers next to the beak
- accidental white micro-contours around the mouth
- artificial outer white halos around the full-color bird

The white ring in the **Circular Badge** is an intentional badge border; it is not an outline around the bird.

## Files

- `PiChan_Icon_Master.svg` — full-color bird source of truth
- `PiChan_Icon_LightBG_Keyline.svg` — approved light-surface treatment
- `PiChan_Icon_Monochrome_Navy.svg` — one-color navy variant
- `PiChan_Icon_Monochrome_White.svg` — one-color white variant
- `PiChan_Wordmark_LightBG.svg` — locked navy/cyan wordmark
- `PiChan_Wordmark_DarkBG.svg` — locked white/cyan wordmark
- `PiChan_Primary_Horizontal_LightBG.svg` — primary light-surface lockup
- `PiChan_Primary_Horizontal_DarkBG.svg` — primary dark-surface lockup
- `PiChan_Secondary_Stacked_LightBG.svg` — stacked light-surface lockup
- `PiChan_Secondary_Stacked_DarkBG.svg` — stacked dark-surface lockup
- `PiChan_Circular_Badge.svg` — X/social avatar badge
- `PiChan_App_Icon.svg` — app icon composition
- `PiChan_Official_Digital_Gradient.svg` — gradient reference only

## Usage rule

When using the repository as a complete asset folder, composite SVGs may reference the canonical master/wordmark files in the same directory. External handoff packages must provide self-contained production vectors and rendered PNG exports.

For social use, render the circular badge from the production vector; do not screenshot or regenerate the logo.

## Do not

- edit a derivative and treat it as a new master
- redraw the eye, beak, feathers, cheek dots or wing
- crop the wing in the circular badge
- change colors
- apply the official digital gradient to the core logo
- use legacy PiChan bird variants
- use generated raster artwork as the vector source

Any future identity change requires a new brand version and synchronized changes to the brand documentation and implementation tokens.
