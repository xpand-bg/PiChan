# PiChan Brand Audit

**Audit date:** September 2026  
**Brand Guidelines:** v1.1  
**Logo Master:** v2.0  
**Result:** PASS / LOCKED

## Scope

Final consistency review after the Curious PiChan bird refinement.

## Verified

### Identity

- Final bird direction: Curious PiChan / Concept B final refinement
- Bird reads as curious, observant, intelligent and confident
- Organic silhouette replaces the rejected egg-like feel
- Body/wing balance is stronger
- Full wing remains visible in the approved circular badge/avatar composition
- Legacy angry / overly cute bird directions are not approved

### Wordmark

- Wordmark design remains unchanged
- Approved light-background construction remains Deep Navy + Cyan
- Approved dark-background construction remains White + Cyan
- Custom P remains part of the locked wordmark

### Palette

Core values are identical across brand documentation and implementation tokens:

- Deep Navy `#041F5F`
- Cyan Blue `#12B6F6`
- Royal Blue `#153FE9`
- White `#FFFFFF`

### Messaging

Permanent brand copy is unchanged:

- `See what others miss.`
- `Onchain intelligence & market discovery.`
- `PiChan is watching.`
- `PiChan | The Flock`

No replacement tagline or positioning line was introduced during the logo refinement.

### Typography

- Plus Jakarta Sans - brand/UI
- JetBrains Mono - data/technical content

### Gradient

Official digital gradient remains:

`linear-gradient(90deg, #153FE9 0%, #12B6F6 100%)`

The gradient is not applied to the core bird or used to alter the approved wordmark construction.

### Vector master

- `brand/vector/PiChan_Icon_Master.svg` is the single canonical bird source
- Master uses smooth cubic Bézier paths rather than the earlier straight-segment trace
- Production master audit: 428 cubic curve commands / 0 line-segment trace commands
- No raster image is embedded in the canonical bird master
- Final standalone export pack contains all approved SVG, PDF and PNG variants
- All standalone SVG variants passed render smoke testing

### Small-size review

Reviewed at:

- 128 px
- 64 px
- 48 px
- 32 px
- 24 px

The icon remains recognizable through the approved minimum-size range. Fine detail naturally reduces at 24 px; no alternate mascot geometry is introduced.

## Repository structure

Canonical source and implementation documentation are synchronized across:

- `README.md`
- `brand/README.md`
- `brand/BRAND_GUIDELINES.md`
- `brand/LOCK.md`
- `brand/brand_tokens.json`
- `brand/manifest.json`
- `brand/vector/`
- `docs/BRAND_SYSTEM.md`
- `src/brand/tokens.ts`

Some repository composite SVGs intentionally reference the canonical bird/wordmark masters to prevent geometry drift. The official self-contained production package should be used for external handoff and standalone design-tool use.

## Final status

**IDENTITY LOCKED.**

Future product, website, X/community and campaign design must use these assets and rules. Any identity redesign requires an explicit new brand version and synchronized replacement of the master assets, docs and implementation tokens.
