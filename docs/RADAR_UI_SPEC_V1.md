# PiChan V1 — Radar UI Spec

**Status:** DESIGN HQ — CONCEPT / HIGH-FIDELITY DRAFT  
**Product version:** V1.0  
**Design system:** locked V1 foundation  
**Date:** 2026-09-13  
**Owner:** PiChan Design HQ

Radar answers one question:

> **What should I investigate?**

It is not a gainers page, a social feed or a trading-terminal watchlist. It is PiChan's evidence-backed observation stream.

This spec reuses the locked V1 tokens, shell, evidence language, status semantics, feature components and Production Assets 2.2. It does not add product scope.

---

## 1. Chosen design direction — Signal Tape

Radar should feel like a live intelligence tape / observation log rather than a grid of token cards.

The core visual metaphor is:

- PiChan observes many things
- only material observations become Radar items
- each item has a timestamp, identity, event, reason and evidence trail
- the feed reads as intelligence chronology, not social engagement

Public UI still says **Radar**. `Signal Tape` is an internal design pattern name only.

Why this direction is strongest:

- differentiates PiChan from generic crypto scanners
- naturally supports `Why on Radar`
- handles Signals / New / Verified without inventing separate visual systems
- connects directly to Flight Recorder chronology
- keeps market price secondary
- works well on mobile and desktop
- makes Sponsored Sighting easy to separate visibly

---

## 2. Screen anatomy

Radar order:

1. Radar header
2. group tabs — Signals / New / Verified
3. chain filter — All chains / Robinhood Chain / Solana
4. optional compact Radar Pulse summary derived from the current feed
5. organic Radar stream
6. clearly separated Sponsored Sighting module where enabled
7. pagination / load-more / continuation state

No extra public product pillar is introduced.

---

## 3. Radar header

### Mobile

Compact top area:

- title `Radar`
- short descriptor: `What should I investigate?`
- search entry/icon
- filter control if needed

Keep the top visually lighter than Passport; Radar is an entry surface and should begin scanning quickly.

### Desktop

Use the standard PiChan shell:

- left navigation rail with Radar active
- global Search / command field in top bar
- Radar title + descriptor in content header
- chain filter visible inline

### Optional visual motif

A subtle low-contrast radar/sweep arc may appear in the header background.

Rules:

- decorative only
- no fake quantitative meaning
- no continuous animation required
- reduced-motion removes movement entirely
- should feel like observatory instrumentation, not cyberpunk decoration

---

## 4. Group tabs

Locked groups:

- **Signals** — material PiChan observations/events; default
- **New** — newly discovered launches/deployments
- **Verified** — recently claimed / authority-verified projects

Tabs use the locked segmented/tab system.

Rules:

- group labels remain visible on mobile
- selected state uses non-color indicator + surface/border treatment
- counts may be shown if available from the current result set
- tab order does not change

---

## 5. Chain filter

Locked values:

- All chains
- Robinhood Chain
- Solana

Mobile:

- compact control beneath/alongside tabs
- if width becomes tight, use a small filter button opening a bottom sheet

Desktop:

- inline pills/segmented filter

No other V1 filter is required by product scope.

---

## 6. Radar Pulse summary

A compact, optional summary derived only from items already in the Radar result set.

Example:

`12 material signals · 7 new deployments · 4 recently verified`

Purpose:

- gives immediate sense of activity
- makes Radar feel like a live observation surface
- does not create a new score/ranking

Rules:

- no fake market sentiment
- no green/red market mood
- no “hotness” score
- if backend cannot provide reliable counts cheaply, omit this block rather than fake it

---

## 7. Organic Radar Signal item — signature composition

Organic Radar items are **open timeline records**, not standalone social cards.

### Anatomy

1. chronology marker / timestamp
2. project/token identity
3. chain + relevant canonical/verification state
4. event title
5. short factual event summary
6. visible **Why on Radar** line
7. compact intelligence snapshot when useful
8. Evidence Footer
9. Passport / Flight Recorder destination
10. Watch control when appropriate

### Example

```text
14m
●  Signal Bird   $BIRD   [Robinhood Chain]
   Liquidity decreased 18.6%
   Primary pool moved from $752K → $612K.

   Why on Radar
   Material liquidity change crossed PiChan's configured threshold.

   Reputation B+   Risk 2 Warning   Confidence Medium
   Onchain · checked 2m ago · View evidence

   View Passport →                       Watch
```

### Visual rules

- timeline rail/marker uses subtle cyan/blue
- event title is the visual lead, not token price
- severity color appears only where event/risk semantics require it
- market deltas may be shown, but do not turn item into gain/loss trading UI
- keep cards visually open; use separators and light surface shifts before large rounded containers

---

## 8. `Why on Radar` — core signature

This is mandatory on every organic item.

It should visually look like a compact evidence explanation, not marketing copy.

Pattern:

- small eye/observation icon
- label `Why on Radar`
- one sentence explaining the evidence-backed inclusion reason

Examples:

- `Material liquidity change crossed the configured threshold.`
- `Creator deployed another supported asset 18 minutes ago.`
- `Related-holder concentration crossed 35%.`
- `Project authority was cryptographically verified.`
- `A new canonical deployment was established.`

Rules:

- one concise reason first
- more evidence available through disclosure
- do not use hype terms such as hot, trending, alpha, mooning
- paid placement never receives an organic `Why on Radar` treatment

---

## 9. Compact intelligence snapshot

Radar may show a very small snapshot of:

- Reputation Grade / Unrated
- Risk Signals summary
- Data Confidence

This is supporting context, not the item headline.

Preferred desktop form:

`Rep B+  ·  Risk 2W / 1?  ·  Confidence Medium`

Preferred mobile form:

small three-part line/chips beneath the reason when space allows.

Rules:

- preserve the three separate concepts
- never merge into one score
- omit rather than crowd the item if content density is too high

---

## 10. Signals view

Default Radar view.

Signal item categories may include already-locked event families such as:

- liquidity change
- holder concentration change
- creator activity
- control/authority change
- verification/canonical change
- material reputation/confidence change

The UI does not invent ranking logic; order comes from product/backend Radar logic.

Design priority:

1. event
2. why it matters / Why on Radar
3. identity
4. evidence/freshness
5. intelligence context
6. optional market context

---

## 11. New view

New items should feel observational, not promotional.

### New deployment item

Lead with:

- `New deployment observed`
- project/token identity
- chain
- age / discovered time
- claim/canonical state if known
- current evidence coverage
- Why on Radar: newly discovered supported deployment

If data is sparse:

- Reputation: Unrated
- Risk: Unknown where evidence is missing
- Confidence: Low

Do not imply that being New means interesting/good.

---

## 12. Verified view

Lead with the verification event rather than a generic project card.

Examples:

- `Authority verified`
- `Project claim accepted`
- `Canonical deployment established`

Show:

- verification type
- evidence/source
- timestamp
- identity
- Why on Radar explanation

Verified never means safe.

---

## 13. Sponsored Sighting

Sponsored content must be visually and semantically separate from organic Radar.

Recommended placement:

- dedicated module between organic feed sections, not disguised as a normal timeline record
- explicit top label: `Sponsored Sighting`
- supporting line: `Paid placement · PiChan intelligence remains independent`

Visual treatment:

- different container geometry from organic Radar items
- dotted/dashed structural accent or contained surface
- neutral brand blue, not Risk severity colors
- no organic timeline marker
- no `Why on Radar`

May show PiChan intelligence beside the placement only if clearly separated from the campaign message and unchanged by payment.

---

## 14. Mobile composition

Reference width: 390 px.

```text
┌────────────────────────────────────┐
│ Radar                    [Search]   │
│ What should I investigate?         │
│                                    │
│ [Signals] [New] [Verified]         │
│ [All chains ▾]                     │
├────────────────────────────────────┤
│ 14m  ● Signal Bird  $BIRD          │
│      [Robinhood Chain]             │
│                                    │
│      Liquidity decreased 18.6%     │
│      $752K → $612K                 │
│                                    │
│      Why on Radar                  │
│      Material liquidity change     │
│      crossed PiChan threshold.     │
│                                    │
│      B+ · 2W/1? · Medium           │
│      Onchain · 2m · Evidence       │
│      View Passport →        Watch  │
├────────────────────────────────────┤
│ 31m  ● Nova       $NOVA            │
│      [Solana]                      │
│      Creator launched another      │
│      supported project.            │
│      Why on Radar …                │
├────────────────────────────────────┤
│ SPONSORED SIGHTING                 │
│ Paid placement · intelligence      │
│ remains independent                │
│ [project campaign module]          │
├────────────────────────────────────┤
│ Radar     Search     Watch     Me   │
└────────────────────────────────────┘
```

Mobile rules:

- one-column stream
- no horizontal carousel
- event title visible before supporting metrics
- evidence/footer readable without opening the item
- bottom navigation remains visible

---

## 15. Desktop composition

Reference width: 1440 px.

Recommended layout:

- standard 216 px left rail
- top global search
- content canvas ~1180–1220 px
- main feed ~760–820 px
- right context rail ~300–340 px
- 24 px gap

### Main feed

Contains:

- Radar header
- groups + chain filter
- Signal Tape organic feed
- Sponsored Sighting module where enabled

### Right context rail

Use for compact Radar context, not another dashboard.

Recommended modules:

1. `Radar Pulse` summary — counts derived from current feed
2. `Watching` shortcut when logged in, compact only
3. short legend explaining Signals / New / Verified if useful

Do not put large market widgets in this rail.

---

## 16. Interaction behavior

Organic item click/tap:

- primary destination: Passport
- event-specific secondary destination: Flight Recorder where useful

Watch:

- uses locked Watch component states
- does not block opening Passport

Evidence:

- opens existing evidence detail modal/sheet pattern

Tabs/filter:

- preserve current scroll position where sensible
- loading skeleton matches timeline geometry

No infinite-scroll behavior is mandated by design; implementation may use pagination or incremental loading as long as state is clear.

---

## 17. Radar states

Must support the locked state matrix:

- organic normal
- new asset
- verified/canonical
- material event
- stale source
- provider partial outage
- Sponsored Sighting
- loading
- empty
- error / retry

### Empty

Do not fabricate items.

Suggested copy:

`Nothing new matches this Radar view right now.`

Offer:

- switch group
- switch chain filter
- Search

### Partial provider outage

Keep unaffected items available.

Use a compact source-health note:

`Some provider-backed observations may be delayed.`

Do not remove onchain-backed reasons that remain valid.

---

## 18. Accessibility

- tabs are keyboard-navigable
- feed items have clear heading hierarchy
- timeline markers are decorative unless carrying semantic state
- Why on Radar is text, not icon-only
- sponsored label is exposed to assistive technology
- status never relies on color alone
- touch targets follow locked ~44 px guidance
- reduced-motion disables any optional radar sweep animation

---

## 19. Visual uniqueness rules

Radar should feel unmistakably PiChan because of:

- dark observatory shell
- restrained cyan signal rail
- chronological observation structure
- `Why on Radar` evidence explanation
- compact Reputation / Risk / Confidence snapshot
- visible provenance/freshness
- clean separation between organic and Sponsored Sighting

Do **not** achieve uniqueness through:

- giant glowing radar circles
- animated crypto charts
- neon gradients everywhere
- token-price leaderboards
- engagement metrics / likes / comments
- “hot” / “trending” / “alpha” language

---

## 20. First high-fidelity decision

The first visual pass should test **Signals** on both mobile and desktop because it is the hardest/highest-value Radar mode.

The high-fidelity sample should include:

- one liquidity-change signal
- one creator-activity signal
- one verification signal
- one stale/partial-data example
- one Sponsored Sighting module

Once Signals works, New and Verified should be variants of the same system, not separate redesigns.

---

## 21. Lock criteria

Radar can be locked when:

1. it clearly answers `What should I investigate?`
2. organic items visibly explain `Why on Radar`
3. the feed does not look like a gainers page or social feed
4. event intelligence leads over token price
5. New does not imply good
6. Verified does not imply safe
7. Sponsored Sighting cannot be mistaken for organic ranking
8. mobile and desktop share one semantic system
9. evidence/freshness remains visible
10. the design reuses locked PiChan V1 components/tokens without forking the visual language

**Current Design HQ decision:** proceed with high-fidelity `Signal Tape` direction for mobile + desktop review.