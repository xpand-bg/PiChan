# PiChan V1 — Project Passport UI Spec

**Status:** DESIGN HQ — STRUCTURE LOCK CANDIDATE  
**Product version:** V1.0  
**Design system revision:** 0.2  
**Date:** 2026-09-13  
**Owner:** PiChan Design HQ

This is the optimized Passport structure for visual design. It preserves the locked product hierarchy while removing generic dashboard patterns and making PiChan feel like an intelligence instrument.

---

## 1. Passport design job

The Passport must answer, in order:

1. **What is this?**
2. **What matters right now?**
3. **Why does PiChan believe it?**
4. **What changed?**
5. **What should I watch next?**

The first viewport must prioritize identity and intelligence over market price.

---

## 2. Core visual principle

The Passport is not a stack of SaaS cards.

Use:

- open research sections
- structural dividers
- grouped evidence rows
- a small number of elevated signature components

Reserve real card treatment for:

- the unified Decision Strip
- PiChan Brief
- important Risk Findings when elevation helps urgency
- interactive contextual objects

Do not wrap every section inside a rounded container.

---

## 3. Responsive composition

### Mobile

- reference width: 390 px
- gutter: 16 px
- one-column flow
- no primary horizontal scrolling
- bottom navigation: Radar / Search / Watch / Me

### Desktop

- reference width: 1440 px
- left product rail
- canvas max width: ~1220 px
- main/context split: ~68/32
- 24 px column gap
- context rail becomes sticky after the identity/decision area

Desktop extra space is used for context and scanability, not decorative emptiness.

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

Desktop may move Market Pulse, links, verification details and Creator preview into the sticky context rail while preserving semantic order.

---

## 5. Product top bar

### Mobile

Compact:

- PiChan compact identity/context title
- overflow/context action

### Desktop

Use a proper global search / command field in the top product bar.

Do not show a redundant generic `Passport` title beside search.

Search is a core PiChan entry point and must not appear secondary.

---

## 6. Identity header

### Required content

- project/token icon
- name
- ticker
- chain badge
- deployment address/mint
- copy
- explorer action
- lifecycle state if relevant
- Unclaimed / Claimed / Authority Verified / Canonical / Disputed states where applicable
- Watch control
- overflow/context actions

### Mobile pattern

```text
[icon] Project Name                         [Watch]
       $TICKER
[Chain] [Canonical] [Claimed]
0x90b4…e887   [copy] [explorer]
```

### Rules

- project name leads
- ticker is secondary
- verification chips support identity rather than competing with it
- address is technical metadata
- Watch remains visible in the header

---

## 7. Unified Decision Strip — signature component

Reputation, Risk Signals and Data Confidence remain independent outputs but share one structural container.

```text
┌──────────────────────────────────────────────┐
│ Reputation  │ Risk Signals │ Data Confidence│
│ B+          │ 2 Warning    │ Medium         │
│ evidence…   │ 1 Unknown    │ ▮ ▮ ▮ ▯       │
└──────────────────────────────────────────────┘
```

### Reputation segment

- `Reputation`
- grade or `Unrated`
- neutral branded treatment
- no green/red grade scale

### Risk segment

- `Risk Signals`
- compact severity summary
- strong severity color allowed here only

### Confidence segment

- `Data Confidence`
- High / Medium / Low
- segmented evidence-coverage meter
- cyan/blue + neutral segments; no green

### Interaction

Each segment can reveal/scroll to its deeper explanation.

### Mobile

Prefer one three-segment strip when readable. If content/localization becomes cramped, use a 2 + 1 layout inside the same shared component — never horizontal carousel.

---

## 8. PiChan Brief — signature component

Directly after the Decision Strip.

### Anatomy

- small approved PiChan mark
- `PiChan Brief`
- one concise summary sentence
- 3–6 prioritized findings
- last checked/evidence count where useful
- `View evidence` / `Why?`

### Visual treatment

- elevated surface
- subtle cyan/royal accent
- no full-card gradient
- no chat bubble
- no assistant typing treatment

The tone is: **PiChan investigated this asset; here is what is worth knowing.**

---

## 9. Market Pulse

Important context, not hero content.

### Mobile

Two-column compact metric grid:

- Price
- Market Cap / FDV
- Liquidity
- 24h Volume
- Holders
- Age

### Desktop

Place in sticky context rail.

### Rules

- JetBrains Mono values
- no oversized green/red trading UI
- Unknown is explicit
- freshness is accessible

---

## 10. Identity & official links

Use an open section / compact grouped list, not another large card.

Rows may include:

- Website
- X
- Telegram
- Docs / GitHub
- declared project wallets

Every row may show:

- Authority / authoritative
- Declared by project
- Discovered / unverified
- Conflicting

Never use one generic checkmark for different evidence strength.

---

## 11. Standard Evidence Footer — signature pattern

Major findings use one repeated footer pattern:

`[Source type] · [Freshness] · View evidence`

Examples:

- `Onchain · Checked 3m ago · View evidence`
- `Provider · Checked 8m ago · View evidence`
- `Declared by project · Observed Sep 13 · View evidence`
- `Conflicting · Needs review · View evidence`

This component is shared by Passport, Radar, Creator Intelligence and Flight Recorder.

---

## 12. Risk Signals

Risk section should feel like an evidence list, not cards nested inside a card.

### Section header

- Critical count
- Warning count
- Info count
- Unknown count

### Standard finding row

```text
[icon] Finding title                         [Warning]
       Factual capability/condition summary.
       Onchain · Checked 3m ago · View evidence
```

### Elevation rule

Only elevate a finding into a stronger card when:

- Critical
- materially changed recently
- conflict/unknown is highly consequential

Order:

1. Critical
2. Warning
3. material Unknown
4. Info

---

## 13. Supply & Holder Intelligence

Use an open research section.

Summary:

- total supply
- holder count
- top-holder concentration
- largest relevant holder
- creator/project wallet holdings

Desktop uses structured rows/table.  
Mobile converts records into stacked rows.

Every holder/entity row may include:

- rank
- address/entity
- share
- role/category when sourced
- related-cluster indicator when evidence supports it
- provider attribution for provider labels

No full interactive bubble graph in V1.

---

## 14. Liquidity Intelligence

Show:

- total known liquidity
- primary pools
- DEX
- quote asset
- pool age
- lock/burn/control state when determinable
- material recent changes

Unknown states must remain explicit.

Recent change links to Flight Recorder evidence.

---

## 15. Creator Intelligence preview

Compact context object:

- creator/origin wallet/entity
- observed role
- known project count
- 1–2 notable evidence-backed observations
- evidence/source state
- `View Creator Intelligence`

Avoid accusatory language from weak correlations.

On desktop this belongs in the context rail.

---

## 16. Flight Recorder preview

Show latest 3–5 material events in a chronology pattern.

Each event:

- event type/icon
- title
- timestamp
- before → after when relevant
- materiality/severity
- evidence source

Action: `View full Flight Recorder`.

The pattern must feel like history, not a social feed.

---

## 17. Contextual actions and state logic

### Always available when applicable

- Watch / Watching
- Share
- external market / Drones destination
- Report incorrect information

### Claim

`Claim this Passport` appears **only when the Passport is eligible and Unclaimed**.

Never show Claim on a Passport already marked Claimed.

### Desktop duplication rule

Watch lives primarily in the identity header. Do not duplicate it as a giant second block in the context rail.

The context rail may contain compact secondary actions.

---

## 18. Optimized mobile wireframe

```text
┌────────────────────────────────────┐
│ PiChan                        [•••] │
├────────────────────────────────────┤
│ [icon] Project Name         [Watch]│
│        $TICKER                     │
│ [RH Chain] [Canonical] [Claimed]   │
│ 0x90b4…e887 [copy] [↗]            │
├────────────────────────────────────┤
│ DECISION STRIP                     │
│ Reputation │ Risk │ Confidence     │
│ B+         │ 2W   │ Medium ▮▮▮▯   │
├────────────────────────────────────┤
│ PiChan Brief                       │
│ • finding                          │
│ • finding                          │
│ • finding          [View evidence] │
├────────────────────────────────────┤
│ Market Pulse                       │
│ Price        MCap/FDV              │
│ Liquidity    24h Volume            │
│ Holders      Age                   │
├────────────────────────────────────┤
│ Identity & Official Links          │
│ Website                 Authority  │
│ X                       Declared   │
│ Project wallet          Declared   │
├────────────────────────────────────┤
│ Risk Signals                       │
│ ! Warning finding          Warning │
│   Onchain · 3m · Evidence          │
│ ? Unknown finding          Unknown │
│   Provider · stale · Evidence      │
├────────────────────────────────────┤
│ Supply & Holders                   │
│ summary + stacked records          │
├────────────────────────────────────┤
│ Liquidity                          │
│ pools / control / change           │
├────────────────────────────────────┤
│ Creator Intelligence               │
│ creator summary                [→] │
├────────────────────────────────────┤
│ Flight Recorder                    │
│ ○ event                            │
│ │ event                            │
│ ○ event                        [→] │
├────────────────────────────────────┤
│ Share · Report · External          │
├────────────────────────────────────┤
│ Radar     Search     Watch     Me   │
└────────────────────────────────────┘
```

---

## 19. Optimized desktop wireframe

```text
┌────────────┬────────────────────────────────────────────────────────────────────┐
│ PiChan     │ [ Global search / command field........................ ] [Alerts] │
│            ├────────────────────────────────────────────────────────────────────┤
│ Radar      │ [Identity................................................][Watch]  │
│ Search     │ [ Reputation | Risk Signals | Data Confidence ]                    │
│ Watch      ├──────────────────────────────────────────┬─────────────────────────┤
│ Me         │ PiChan Brief                             │ STICKY CONTEXT RAIL     │
│            │                                          │ Market Pulse            │
│            ├──────────────────────────────────────────┤                         │
│            │ Risk Signals                             │ Official Links          │
│            │                                          │ Verification            │
│            ├──────────────────────────────────────────┤                         │
│            │ Supply & Holder Intelligence             │ Creator Preview         │
│            │                                          │                         │
│            ├──────────────────────────────────────────┤ Share / Report / Action │
│            │ Liquidity Intelligence                   │                         │
│            │                                          │                         │
│            ├──────────────────────────────────────────┤                         │
│            │ Recent Flight Recorder                   │                         │
└────────────┴──────────────────────────────────────────┴─────────────────────────┘
```

---

## 20. Required state variants

Before high-fidelity approval, design:

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

---

## 21. Structure lock criteria

Passport structure is ready for high fidelity when:

1. identity is stronger than price
2. Decision Strip clearly separates all three intelligence outputs
3. PiChan Brief feels ownable and evidence-first
4. the page no longer feels like a stack of generic SaaS cards
5. evidence footer is consistent
6. Risk hierarchy is clear without casino styling
7. claim/action logic cannot contradict identity state
8. desktop context rail improves usability without duplicate actions
9. mobile works with incomplete/unknown data
10. Production Assets 2.2 are consumed directly with no logo redraw

---

## 22. Next step

Create the first high-fidelity mobile Passport using `PRODUCT_UI_TOKENS_V1.md`, then derive desktop and extract final reusable components from the approved screen.
