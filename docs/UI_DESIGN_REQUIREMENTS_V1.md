# PiChan V1 — UI / Design Requirements

**Status:** LOCKED pre-design contract  
**Product version:** V1.0  
**Design handoff revision:** 1.0  
**Date:** 2026-09-13  
**Decision owner:** PiChan Product HQ / Design HQ

This document closes UI/UX ambiguities in the locked V1 product before visual design begins. It does **not** add product scope. Product behavior remains governed by `PRODUCT_SPEC_V1.md`; this document defines how the locked behavior must be expressed consistently in the responsive web product.

## 1. Source-of-truth relationship

Where documents overlap, use this order:

1. `PRODUCT_SPEC_V1.md` — product behavior, screens, flows, launch scope and acceptance
2. `INTELLIGENCE_MODEL_V1.md` — evidence, Reputation, Risk, Confidence, freshness and event semantics
3. `MONETIZATION_V1.md` — project monetization and crypto billing
4. `ADR-001-MULTICHAIN-FOUNDATION.md` — multi-chain architecture
5. `PRODUCT_ARCHITECTURE.md` — system/product architecture
6. `V1_BUILD_PLAN.md` — implementation sequence
7. **this document** — UI/UX execution requirements
8. `BRAND_SYSTEM.md` + `brand/vector/` + `src/brand/tokens.ts` — visual identity implementation

Visual design may improve hierarchy, clarity and interaction quality, but may not rename locked product concepts, merge separate intelligence outputs, invent data or alter commercial/intelligence separation.

## 2. Product form factor

V1 is a **responsive web product**, optimized mobile-first and fully usable on desktop.

V1 does not require a native mobile app.

The same information architecture and intelligence semantics must survive across mobile and desktop; desktop may increase density but must not introduce a separate product model.

## 3. Navigation and route contract

### Mobile primary navigation

- **Radar**
- **Search**
- **Watch**
- **Me**

### Desktop primary navigation

Desktop must expose the same primary destinations clearly. Exact shell treatment may be top navigation or side navigation, but it must not add extra public product pillars.

### Locked public routes

- `/` — Radar home
- `/search` — dedicated Search destination
- `/p/{chain}/{address}` — Project Passport
- `/p/{chain}/{address}/history` — Flight Recorder
- `/creator/{chain}/{address}` — Creator Intelligence
- `/watch` — Watchlist
- `/alerts` — Alerts
- `/me` — My PiChan

Search may also be invoked globally from other surfaces, but `/search` must exist as a stable destination so mobile navigation and deep linking are unambiguous.

Alerts are not a fifth bottom-navigation item. They are reachable from Watch and Me and may use an unread indicator in the app shell.

Claimed-project management is entered from `Me → Managed Projects`. The exact internal project-management route can be implementation-defined as long as the public information architecture is unchanged.

## 4. Required screen families for Design HQ

Design HQ must cover at minimum:

1. Radar
2. Search / search results / ambiguity results
3. Project Passport
4. Flight Recorder
5. Creator Intelligence
6. Watchlist
7. Alerts / notification detail
8. Me
9. Claim / authority-verification flow
10. Managed Projects / Project Control Center
11. Project Inbox / response / correction flow
12. Crypto invoice / payment / confirmation / expiry states
13. Telegram-connected state and notification settings
14. Report / dispute flow
15. Essential admin review surfaces needed for V1 operations

Admin screens may be visually simpler than public/product surfaces, but must use the same status vocabulary and evidence semantics.

## 5. Passport information hierarchy is fixed

Design may change layout, grouping and responsive presentation, but the V1 Passport must preserve this semantic order:

1. Identity header
2. Decision strip
   - Reputation Grade / Unrated
   - Risk Signals summary
   - Data Confidence
3. PiChan Brief
4. Market Pulse
5. Identity / official links / declared wallets
6. Risk Signals
7. Supply & Holder Intelligence
8. Liquidity Intelligence
9. Creator Intelligence preview
10. Recent Flight Recorder events
11. Actions — Watch / Share / external action / Report / Claim when eligible

The three intelligence outputs must remain visibly distinct. Never combine Reputation, Risk and Confidence into one composite "safety" meter.

## 6. Evidence-first UI rules

Every important conclusion must be visually capable of answering:

- **What is the claim/finding?**
- **What evidence supports it?**
- **Where did the evidence come from?**
- **When was it observed/checked?**
- **Is the evidence direct, declared, provider-sourced, stale, conflicting or unknown?**

The UI must provide reusable evidence/freshness affordances rather than hiding provenance in a separate technical page.

At minimum the design system needs patterns for:

- source / provenance label
- freshness / observation time
- evidence detail disclosure
- conflict state
- unknown state
- stale / needs refresh state
- project-declared state
- authority/canonical verification state

Unknown must never look like a positive result.

## 7. Status and color semantics

Status must never rely on color alone. Use label + icon/symbol + color where relevant.

Required semantic families:

- Critical
- Warning
- Info
- Unknown
- High / Medium / Low Confidence
- Unrated
- Claimed
- Authority Verified
- Canonical
- Disputed
- Active / Inactive / Community-led / Abandoned where supported
- Fresh / stale / partial provider outage

Do not use green or reassuring visual language to imply an asset is "safe". Success green is for successful UI actions/system states, not investment safety.

## 8. Core reusable component families

The UI design system must define reusable patterns for:

- app shell / desktop and mobile navigation
- PiChan logo usage in product shell
- global search field
- chain/network selector and chain badge
- token/project identity block
- wallet/address display + copy + explorer action
- Reputation display
- Risk summary + Risk Finding card
- Data Confidence display
- evidence/source row
- freshness indicator
- metric/value tile
- compact market-data row
- Radar event card
- Sponsored Sighting card with explicit sponsorship treatment
- timeline / Flight Recorder event
- Watch control
- alert row/detail
- filter/sort controls
- tabs / segmented controls
- tables/lists for holders, wallets and project data
- empty / loading / skeleton / error / partial-data states
- tooltip / popover / expandable detail
- bottom sheet / modal / confirmation
- toast / inline feedback
- wallet connection/signature state
- report/dispute form
- Project Inbox item
- project entitlement / Pro state
- invoice / crypto payment state

Components must support real content length, long addresses and incomplete data.

## 9. Commercial separation

Paid state must be visually and logically separate from independent intelligence.

### Sponsored Sighting

Sponsored content must:

- be explicitly labelled **Sponsored**
- use a visually distinct container/treatment
- never mimic an organic Radar signal
- never alter the styling or value of Reputation, Risk or Confidence

### Passport Pro

Pro may add project-side operational tools, but public truth/intelligence remains visually independent of entitlement state.

### Priority Review

Payment means faster queue handling only; UI copy must never imply guaranteed approval.

## 10. Crypto payment UX requirements

Every invoice/payment surface must clearly show:

- product/service
- project receiving the entitlement/service
- quoted price
- settlement asset
- settlement network
- exact amount
- destination address
- copy action
- invoice expiry
- payment status
- confirmation status
- transaction reference when available
- entitlement result / campaign / priority result

Network and asset must never be visually ambiguous. Expired invoices must not appear payable without regeneration/requote.

## 11. Responsive behavior

Design mobile first, then define desktop expansion.

Minimum expectations:

- no horizontal scrolling for primary mobile flows
- data tables must have a deliberate mobile pattern rather than simply shrinking desktop tables
- long wallet addresses use controlled truncation with copy/full-view affordance
- charts/visualizations must degrade gracefully on small screens
- critical actions remain reachable without precision tapping
- desktop may use side-by-side evidence/data panels where mobile stacks them

Exact breakpoints belong to the design system implementation, not product semantics.

## 12. Accessibility

Target **WCAG 2.2 AA** for V1 product UI.

Design and implementation must include:

- sufficient contrast
- visible keyboard focus
- full keyboard navigation for core web flows
- semantic headings and controls
- meaningful accessible names for icon-only actions
- touch targets approximately 44×44 px where practical
- status not communicated by color alone
- reduced-motion behavior for non-essential animation
- charts/data visualizations with textual equivalents for essential information

## 13. Motion and visual effects

Motion should support orientation, state change and brand character, not distract from evidence.

Avoid:

- continuous decorative animation behind dense data
- animation that delays access to findings
- glowing/red flashing "danger" effects
- speculative AI/crypto visual clichés that reduce trust

Respect `prefers-reduced-motion`.

## 14. Performance requirements for UI choices

The visual system must be implementable without excessive client weight.

Guidelines:

- use the approved SVG brand assets rather than raster recreations
- lazy-load secondary charts/visualizations
- avoid background video in core product surfaces
- avoid requiring a heavy charting library for simple sparklines/metrics
- skeletons/loading states must not cause layout jumps
- preserve strong Core Web Vitals on representative mobile hardware

Implementation target where practical:

- LCP ≤ 2.5 s
- CLS ≤ 0.1
- INP ≤ 200 ms

Performance targets apply to production conditions and should be measured, not assumed from mockups.

## 15. Required data states

Every data-bearing component must consider:

- loading
- complete data
- no data yet
- unknown/unsupported
- stale data
- conflicting evidence
- provider partial outage
- error/retry
- permission/login required where applicable

Passport-specific design must also cover:

- new/unknown asset
- Unrated / Low Confidence
- Unclaimed
- Claimed
- Authority Verified
- Canonical
- Disputed

No production design should depend on perfect complete data.

## 16. Copy and terminology lock

Use the locked PiChan product vocabulary exactly unless Product HQ changes it.

Examples:

- Radar
- Project Passport / Passport
- Flight Recorder
- Watch
- Creator Intelligence
- Reputation Grade
- Risk Signals
- Data Confidence
- PiChan Brief
- Market Pulse
- Project Control Center
- Project Inbox
- Passport Pro
- Priority Review
- Launch Pack
- Sponsored Sighting

Do not casually replace these with crypto-generic terms such as "alpha", "ape", "degen score", "safety score" or "trust score".

## 17. Brand implementation lock

The product UI must consume the final approved identity exactly from:

- `docs/BRAND_SYSTEM.md`
- `brand/vector/`
- `src/brand/tokens.ts`

Locked permanent lines:

- **See what others miss.**
- **Onchain intelligence & market discovery.**
- **PiChan is watching.**
- **PiChan | The Flock**

Do not redraw the bird, recreate the wordmark, add halos/outlines, recolor the identity or regenerate logo artwork inside product code.

## 18. Design deliverables before Developer HQ implementation lock

Before the UI layer is considered ready for implementation, Design HQ must provide:

1. product design tokens
2. typography scale
3. spacing/layout grid
4. radius/border/elevation rules
5. semantic color system
6. iconography rules
7. responsive app shell
8. core component library
9. state matrix for core components
10. mobile + desktop screen specifications for the required screen families
11. interaction notes for non-obvious flows
12. accessibility notes
13. final asset references

Developer HQ should implement reusable components/tokens first rather than styling each screen independently.

## 19. UI acceptance gate

The V1 UI/design system is ready to hand to implementation only when:

1. the three intelligence outputs cannot be confused with each other
2. Unknown/stale/conflicting evidence states are designed, not omitted
3. organic and sponsored Radar are unmistakably separate
4. all primary mobile flows work without desktop-only assumptions
5. desktop layouts increase clarity/density without changing product semantics
6. evidence provenance/freshness is accessible from major findings
7. required loading/error/partial states exist
8. wallet/address/network/payment details cannot be misread
9. core flows meet accessibility expectations
10. all identity assets use the locked PiChan brand masters with no reconstructed logo artwork

---

**Decision:** Product scope remains V1.0 locked. This document is the mandatory Design HQ → Developer HQ UI execution contract.
