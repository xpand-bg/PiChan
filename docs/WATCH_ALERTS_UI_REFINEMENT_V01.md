# PiChan V1 — Watch & Alerts High-Fidelity Refinement

**Status:** DESIGN HQ — HIGH-FIDELITY DRAFT  
**Product version:** V1.0  
**Design revision:** Watch / Alerts v0.1  
**Date:** 2026-09-13  
**Owner:** PiChan Design HQ

This document translates `WATCH_ALERTS_UI_SPEC_V1.md` into the first high-fidelity Watch + Alerts system. It does not expand product scope.

## 1. Direction

Public product name: **Watch**.  
Internal design pattern: **Watchtower**.

Primary question:

> **What changed while I wasn't looking?**

Watch is a monitoring inbox plus watched-project management, not a trading portfolio or technical rule builder.

Two primary modes only:

- **Alerts** — chronological material-change inbox
- **Watching** — monitored-project management

## 2. Locked high-fidelity hierarchy for this draft

### Mobile Alerts

Order:

1. PiChan brand / settings
2. `Watch`
3. `PiChan is watching.`
4. `12 projects · 3 unread · Telegram connected`
5. `Alerts / Watching` segmented control
6. `All / Unread / Filter / Mark all read`
7. date-grouped alert feed
8. bottom app navigation with Watch active + unread badge

### Mobile Watching

Each project row shows:

- project identity
- chain
- Recommended / Custom monitoring profile
- delivery state
- unread count when non-zero
- latest material alert summary
- `Watch settings`
- Passport destination

No balances, P&L, price targets or trading position.

### Alert Detail

Order:

1. project identity
2. event family
3. factual alert title
4. compact context
5. `WHAT CHANGED`
6. Flight Recorder `State Delta` when applicable
7. signature **WHY PICHAN ALERTED YOU** annotation
8. Evidence
9. Delivery state
10. Flight Recorder destination
11. Passport destination
12. correction/history behavior where relevant

## 3. Signature Watch element

**WHY PICHAN ALERTED YOU** is the signature explanation for Watch.

It explains why the normalized material event triggered a user notification, without exposing low-level implementation jargon.

Examples:

- `Liquidity changed materially enough to cross PiChan's configured threshold.`
- `A relevant current authority changed.`
- `Top-holder concentration crossed the configured material-change threshold.`
- `The creator/origin wallet linked to this project launched another supported deployment.`
- `Data Confidence moved from Medium to Low because a supporting source became stale.`

This must remain separate from:

- `Why on Radar`
- Flight Recorder event explanation
- underlying Risk severity

## 4. Monitoring profile interaction

One-tap Watch uses **Recommended** by default.

### Recommended

- active immediately after Watch succeeds
- PiChan centrally manages calibrated materiality rules
- six event families remain visible for transparency
- event-family controls are **read-only / managed** in this state
- helper: `Switch to Custom to choose event families.`

### Custom

User may enable/disable the six event families:

- Risk & Control
- Liquidity
- Supply & Holders
- Identity & Lifecycle
- Creator Activity
- Reputation & Confidence

No raw percentage threshold builder exists in V1.

## 5. Alert-row treatment

Alert rows are open chronology surfaces, not heavy cards.

Required:

- unread marker independent of color
- token/project identity
- chain
- timestamp
- event-family label
- factual headline
- compact state/change context
- `Why PiChan alerted you` explanation

Selected desktop row may use the locked selected-surface treatment so its Alert Inspector relationship is clear.

Read rows preserve information but reduce emphasis.

Corrected rows use purple correction treatment and stay in alert history.

## 6. Alert / delivery separation

Alert history and delivery are distinct UI concepts.

Example alert detail:

- In-app: `Unread`
- Telegram: `Delivered · 14:33`

Telegram failure must not remove the in-app alert.

The UI must support:

- delivered
- pending
- failed / retry
- disconnected channel

without recreating or duplicating the underlying Alert.

## 7. Desktop composition

### Alerts selected

Main column:

- Watch header/status
- Alerts / Watching segmented control
- minimal filters
- chronological alerts

Context rail:

- **Alert Inspector** for the selected row
- project identity
- event family
- What Changed / State Delta
- Why PiChan alerted you
- evidence
- delivery
- Flight Recorder / Passport destinations

### Watching selected

Main column:

- watched-project list
- profile
- channel state
- unread count
- latest material alert

Context rail:

- selected project Watch settings
- Recommended / Custom
- event families
- channel state
- watched since / last evaluated
- Stop watching

When Recommended is selected, category controls are visibly managed/read-only. Custom makes them editable.

## 8. Telegram output

Telegram uses the same event vocabulary and explanation model as web.

Reference anatomy:

```text
PiChan Alert · Signal Bird ($BIRD)
Robinhood Chain

Liquidity decreased 18.6%
$752K → $612K

Why PiChan alerted you:
Material liquidity change crossed the configured threshold.

Observed 14:33 · Onchain evidence

[Open Passport] [View event]
```

Forbidden:

- buy/sell language
- price targets
- fake urgency
- alert-color semantics that imply investment safety

## 9. Noise-control UX assumption

The high-fidelity system assumes this upstream pipeline:

```text
Observation
  ↓
Evidence
  ↓
Flight Recorder event
  ↓
Materiality evaluation
  ↓
Dedup / cooldown
  ↓
Alert
  ↓
In-app + Telegram delivery
```

Repeated provider observations for one unchanged condition must not create duplicate user alerts.

## 10. High-fidelity states represented

The v0.1 system visually covers:

- unread alert
- read alert
- selected alert
- corrected / superseded alert
- stale supporting evidence concept
- Telegram delivered
- Telegram delivery error
- Watching with unread counts
- watched project with no recent material event
- Recommended monitoring profile
- Custom profile entry point
- no Watches empty state
- Watching with no Alerts state
- login/connect-required behavior
- one-tap Watch assumption

## 11. Visual artifacts

Design references generated in this pass:

- `PiChan_Watch_Alerts_Mobile_v01.png`
- `PiChan_Watch_Watching_Mobile_v01.png`
- `PiChan_Watch_Alert_Detail_Mobile_v01.png`
- `PiChan_Watch_Settings_Mobile_v02.png`
- `PiChan_Watch_Alerts_Desktop_v01.png`
- `PiChan_Watch_Watching_Desktop_v02.png`
- `PiChan_Watch_Alerts_System_v01.png`

## 12. QA points before final lock

Before locking Watch + Alerts, Design HQ should do one final pass for:

- unread/read hierarchy at dense desktop sizes
- alert row tap/focus states
- Custom profile enabled/disabled toggle states
- `Mark all read` confirmation/feedback
- Telegram disconnected / failed state
- stale/conflicting evidence alert detail
- corrected alert chain
- Watch add/remove/loading/error states from Passport
- provider partial-outage behavior
- mobile sheet height / scrolling
- keyboard and accessibility semantics

The architecture is considered strong enough to proceed to final component/state QA rather than concept exploration.