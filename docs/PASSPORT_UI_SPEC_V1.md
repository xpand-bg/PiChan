# PiChan V1 — Project Passport UI Spec

**Status:** DESIGN HQ — VISUAL REVIEW DRAFT  
**Product version:** V1.0  
**Design system revision:** 0.1  
**Date:** 2026-09-13  
**Owner:** PiChan Design HQ

This is the first flagship-screen specification built from the locked product requirements and `UI_DESIGN_SYSTEM_V1.md`. It does not change product scope. The purpose is to turn the locked Passport information hierarchy into a concrete mobile/desktop composition and reusable component anatomy.

---

## 1. Passport design job

The Passport must let a user answer, quickly and in order:

1. **What is this?**
2. **What matters right now?**
3. **Why does PiChan believe that?**
4. **What changed?**
5. **What should I watch next?**

The page must feel like a research instrument, not a trading page.

### Visual priority

The first viewport should establish:

- identity
- canonical/claim/verification state
- Reputation / Risk / Confidence as three distinct concepts
- PiChan Brief
- a clear Watch action

Price/market data is important but must not dominate identity and intelligence.

---

## 2. Global composition

### Mobile target

- reference viewport: 390 px wide
- page padding: 16 px
- section gap: 20–24 px
- card radius: 14–16 px
- sticky bottom navigation: Radar / Search / Watch / Me
- no primary horizontal scrolling
- one-column flow

### Desktop target

- reference viewport: 1440 px
- left app rail: 80–220 px depending collapsed/expanded state
- product canvas max width: ~1180–1240 px
- content gap: 24 px
- research layout: main column ~68%, context rail ~32%
- identity header may span both columns
- decision strip remains a single coherent row

---

## 3. Passport section order

Locked semantic order:

1. Identity header
2. Decision strip
3. PiChan Brief
4. Market Pulse
5. Identity / official links / declared wallets
6. Risk Signals
7. Supply & Holder Intelligence
8. Liquidity Intelligence
9. Creator Intelligence preview
10. Recent Flight Recorder events
11. Actions

Desktop may place Market Pulse, identity links and Creator preview in the context rail, but reading order and semantics remain unchanged.

---

## 4. Identity header anatomy

### Required content

- project/token icon
- project/token name
- ticker
- chain badge
- deployment address/mint
- copy action
- explorer action
- lifecycle state when relevant
- Unclaimed / Claimed / Authority Verified / Canonical / Disputed states when applicable
- Watch control
- overflow/context actions

### Mobile composition

```text
[Token icon] Project Name                 [Watch]
             $TICKER
[Chain] [Canonical] [Claimed]
0x90b4…e887   [copy] [explorer]
```

Rules:

- project name is the primary line
- ticker is secondary
- verification/canonical states do not compete with the name
- address is technical metadata, not headline content
- Watch must remain visible without scrolling into a separate action section

### Desktop composition

Use a single horizontal header with identity left and primary actions right. Secondary metadata may sit below the name.

---

## 5. Decision strip

This is the signature Passport intelligence summary.

It contains **three separate components**:

### Reputation

- label: `Reputation`
- value: letter grade or `Unrated`
- optional evidence-coverage helper
- neutral brand treatment

### Risk Signals

- label: `Risk Signals`
- summary: e.g. `0 Critical · 2 Warning · 1 Unknown`
- only this card may use strong red/amber severity accents

### Data Confidence

- label: `Data Confidence`
- value: High / Medium / Low
- compact coverage meter
- cyan/blue + neutral segments, never green

### Mobile

Three equal compact tiles in one row when 390 px allows it. If localization/content makes this unreadable, switch to 2 + 1 grid before allowing horizontal scroll.

### Desktop

Three equal tiles in a single row beneath the identity header.

### Interaction

Each tile is clickable/tappable and scrolls or reveals its underlying evidence/detail section.

---

## 6. PiChan Brief

Signature panel directly after the decision strip.

### Anatomy

- small approved PiChan bird/brand mark
- heading: `PiChan Brief`
- one-sentence summary
- 3–6 findings, prioritized
- optional evidence count / last checked line
- expandable `Why?` / `View evidence` action

### Tone

Concise, factual, calm.

Avoid chat UI, speech bubbles or fake assistant typing indicators.

### Visual treatment

- slightly raised dark surface
- subtle cyan/royal accent line or corner element
- no full-card gradient
- brand mark small enough that content remains dominant

---

## 7. Market Pulse

Market data is useful context, not the page hero.

### Mobile

2-column metric grid. Suggested first six:

- Price
- Market Cap / FDV
- Liquidity
- 24h Volume
- Holders
- Age

Transactions can appear in the extended row/detail when available.

### Desktop

Compact vertical or 2-column block in the context rail.

### Metric tile rules

- label small/muted
- value prominent, JetBrains Mono
- change indicators contextual, not giant green/red trading signals
- unavailable data uses `Unknown` / `—` with reason when important
- freshness accessible

---

## 8. Identity & official links

Purpose: separate **who the project says it is** from **what PiChan independently verified**.

### Structure

- Official website
- X
- Telegram
- Docs / GitHub
- Declared project wallets

Every row can carry one of:

- Authority / authoritative
- Declared by project
- Discovered / unverified
- Conflicting

Do not use a generic blue check for all levels.

---

## 9. Risk Signals

### Section summary

At section top:

- critical count
- warning count
- info count
- unknown count

### Risk Finding card anatomy

```text
[severity icon] Finding title            [Warning]
Short factual description of capability/condition.
[Onchain] [Checked 3m ago]
Evidence source / expand details                 >
```

### Priority

Order:

1. Critical
2. Warning
3. Unknown when important
4. Info

Unknown cannot be visually weaker than harmless informational notes when it represents missing material evidence.

---

## 10. Supply & Holder Intelligence

### Summary layer

- total supply
- holder count
- top-holder concentration
- largest relevant holder
- creator/project wallet holdings when known

### Holder list

Desktop: structured table/list.  
Mobile: stacked holder records.

Each record may contain:

- rank
- address/entity label
- share of supply
- category/role when sourced
- related-cluster marker when evidence exists
- source attribution for provider labels

Known LP/burn/system addresses excluded from concentration must be explainable.

No full Bubblemaps-style graph in V1.

---

## 11. Liquidity Intelligence

Display:

- total known liquidity
- primary pool(s)
- DEX
- quote asset
- pool age
- liquidity control/lock/burn state when determinable
- material recent changes

Use explicit `Unknown` when lock/control state cannot be determined.

Recent material change should link to Flight Recorder evidence.

---

## 12. Creator Intelligence preview

Compact profile card:

- creator/origin wallet/entity
- observed role
- known project count
- one or two notable historical observations
- evidence/source state
- `View Creator Intelligence` action

Do not use accusatory copy from weak relationships.

---

## 13. Flight Recorder preview

Show the latest 3–5 material events.

### Event anatomy

- event icon/type
- title
- timestamp
- before → after when applicable
- severity/materiality marker
- evidence source

Action: `View full Flight Recorder`.

The timeline should visually communicate chronology, not social-feed engagement.

---

## 14. Actions

Primary:

- Watch / Watching

Secondary:

- Share
- external market / Drones destination when available
- Report incorrect information
- Claim this Passport when eligible

Claim must never look like a purchase CTA.

---

## 15. Mobile wireframe

```text
┌──────────────────────────────────┐
│ PiChan                    [•••]  │
├──────────────────────────────────┤
│ [icon] Project Name      [Watch] │
│        $TICKER                   │
│ [RH Chain] [Canonical] [Claimed] │
│ 0x90b4…e887 [copy] [↗]          │
├──────────────────────────────────┤
│ [Reputation] [Risk] [Confidence]│
├──────────────────────────────────┤
│ PiChan Brief                     │
│ • finding                        │
│ • finding                        │
│ • finding                  [Why] │
├──────────────────────────────────┤
│ Market Pulse                     │
│ [Price]       [MCap/FDV]         │
│ [Liquidity]   [24h Volume]       │
│ [Holders]     [Age]              │
├──────────────────────────────────┤
│ Identity & Official Links        │
│ Website               [Authority]│
│ X                     [Declared] │
│ Project wallet        [Declared] │
├──────────────────────────────────┤
│ Risk Signals                     │
│ [!] Warning finding              │
│     evidence + freshness         │
│ [?] Unknown finding              │
├──────────────────────────────────┤
│ Supply & Holders                 │
│ concentration / creator / list   │
├──────────────────────────────────┤
│ Liquidity                        │
│ pools / control / recent change  │
├──────────────────────────────────┤
│ Creator Intelligence             │
│ creator summary            [→]   │
├──────────────────────────────────┤
│ Flight Recorder                  │
│ ○ event                          │
│ │ event                          │
│ ○ event                    [→]   │
├──────────────────────────────────┤
│ Share · Report · Claim           │
├──────────────────────────────────┤
│ Radar   Search   Watch   Me      │
└──────────────────────────────────┘
```

---

## 16. Desktop wireframe

```text
┌──────────────┬───────────────────────────────────────────────────────────────┐
│ PiChan       │ [Identity header.....................................][Watch]│
│              │ [Reputation] [Risk Signals] [Data Confidence]               │
│ Radar        ├───────────────────────────────────────┬───────────────────────┤
│ Search       │ PiChan Brief                          │ Market Pulse          │
│ Watch        │                                       │                       │
│ Me           ├───────────────────────────────────────┤ Official Links        │
│              │ Risk Signals                          │                       │
│              │                                       ├───────────────────────┤
│              ├───────────────────────────────────────┤ Verification / Status │
│              │ Supply & Holder Intelligence          │                       │
│              │                                       ├───────────────────────┤
│              ├───────────────────────────────────────┤ Creator Preview       │
│              │ Liquidity Intelligence                │                       │
│              │                                       ├───────────────────────┤
│              ├───────────────────────────────────────┤ Watch / Share         │
│              │ Recent Flight Recorder                │ Report / Claim        │
│              │                                       │                       │
└──────────────┴───────────────────────────────────────┴───────────────────────┘
```

---

## 17. First-pass component dimensions

These are design targets, not implementation absolutes.

### Mobile

- top app bar: 56 px
- bottom navigation: 64–72 px + safe area
- button/touch target: min ~44 px
- card internal padding: 16 px
- feature-card padding: 18–20 px
- decision tile min height: 88–96 px
- metric tile min height: 72–80 px

### Desktop

- expanded side rail: ~208–224 px
- collapsed rail: ~72–80 px
- content canvas: max ~1180–1240 px
- card padding: 20–24 px
- decision tile: ~120–140 px height depending evidence helper content

---

## 18. Required state variants before high-fidelity lock

Passport must be designed for:

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
- unsupported address
- loading / skeleton
- error / retry

The normal state alone is not enough to approve the Passport system.

---

## 19. Visual review criteria

Before this screen moves to high fidelity, confirm:

1. identity is more prominent than market price
2. Reputation, Risk and Confidence cannot be mistaken for one score
3. PiChan Brief is a signature element but not an AI-chat cliché
4. evidence provenance is visible without overwhelming the page
5. Risk has urgency without casino/trading-terminal styling
6. mobile remains easy to scan with incomplete data
7. desktop uses the extra space for context, not decorative emptiness
8. the final locked PiChan logo assets are consumed directly with no redraws

---

## 20. Next design step

After visual review of this anatomy/wireframe:

1. lock Passport composition
2. define concrete product-surface color tokens and contrast values
3. create the first high-fidelity mobile Passport
4. create desktop from the same component system
5. extract/refine the reusable components
6. use the locked components to design Radar next
