# PiChan V1 — Watch & Alerts UI Spec

**Status:** DESIGN HQ — LOCKED  
**Product version:** V1.0  
**Date:** 2026-09-13  
**Owner:** PiChan Design HQ

Watch answers:

> **What changed while I wasn't looking?**

Alert detail answers:

> **What changed, why did PiChan alert me, and what evidence proves it?**

Watch is a primary product pillar. Alerts are the monitoring output of Watch, not a separate pillar.

V1 delivery channels:

- in-app alert history / centre
- Telegram

No price-target alerts, trading calls, balances, P&L, or buy/sell recommendations exist in Watch V1.

---

## 1. Core product contract

Watch V1 supports:

- watch / unwatch
- one-tap Recommended monitoring
- optional Custom event-family preferences
- material-event evaluation
- deduplication / cooldowns
- in-app alert history
- Telegram delivery
- configuration-driven materiality thresholds
- corrections / superseded alerts
- stale / partial-provider states

High-value supported alert classes include:

- critical/warning risk or control finding appears or changes
- owner / authority / upgrade / control change
- material mint / burn event
- material liquidity removal / change
- LP lock / burn / control change where reliable
- material holder / related-wallet concentration change
- official identity / link / dispute / lifecycle change
- connected creator launches another supported project
- Reputation Grade change
- material Data Confidence change

---

## 2. Chosen direction — Watchtower

`Watchtower` is an internal design pattern name. Public UI remains **Watch**.

Watch is a monitoring inbox plus watched-project management.

Primary IA:

```text
WATCH
PiChan is watching.
12 projects · 3 unread · Telegram connected

[ Alerts 3 ] [ Watching 12 ]
```

### Alerts

Chronological cross-project material changes, newest first.

### Watching

Projects the user actively monitors plus profile, delivery state, unread count and latest selected material alert.

No third primary tab is required.

---

## 3. One-tap Watch behavior

From Passport:

1. user presses `Watch`
2. if account / identity requirement is satisfied, project becomes watched immediately
3. default profile is **Recommended**
4. action confirms as `Watching ✓`
5. optional next action: `Customize alerts`

If login/connect is required:

- preserve project context
- explain why identity is required
- after connect, return to the same project/watch action

Selecting `Watching` opens Watch settings; it does not immediately remove the Watch.

`Stop watching` is explicit inside settings.

Watch states:

- available
- adding
- watching
- removing
- login/connect required
- action error / retry

---

## 4. Monitoring profiles

### Recommended — default

PiChan monitors all supported material V1 event families using centrally calibrated materiality rules.

Required behavior:

- starts immediately after Watch succeeds
- six event families stay visible for transparency
- category controls are **managed / read-only**
- helper: `Switch to Custom to choose event families.`

### Custom

User may enable/disable event families:

1. Risk & Control
2. Liquidity
3. Supply & Holders
4. Identity & Lifecycle
5. Creator Activity
6. Reputation & Confidence

Custom changes event-family selection only.

V1 does **not** expose arbitrary percentage, amount, wallet, price, or raw event-signature rule builders.

---

## 5. Alert generation model

PiChan alerts on interpreted project state changes, not raw provider messages.

Locked conceptual pipeline:

```text
Observation
  ↓
Evidence
  ↓
Flight Recorder event / normalized state transition
  ↓
Materiality evaluation
  ↓
Dedup / cooldown
  ↓
Alert
  ↓
In-app + Telegram delivery
```

Required trust rule:

> **One normalized material transition should create one understandable user alert.**

Provider retries, repeated observations, refreshes and unchanged conditions must not generate duplicate notifications.

Suppressed / deduplicated records may remain operationally auditable without appearing as duplicate user Alerts.

---

## 6. Alert vs materiality vs risk severity

These remain separate concepts.

### Alert

A user-facing historical notification because a watched project experienced a selected material event.

### Materiality

Whether the change is important enough to notify according to configured rules.

### Risk severity

Critical / Warning / Unknown semantics only where an underlying Risk Finding supports them.

Do not invent a universal red/yellow/green Alert Severity score.

`Material` does not automatically mean `Warning`.

---

## 7. Alerts feed

The Alerts tab is a date-grouped chronological feed (`Today`, `Yesterday`, date).

Each Alert Row contains where applicable:

- unread/read state
- project identity
- ticker + chain
- timestamp
- event-family label
- factual headline
- compact state/change context
- signature `Why PiChan alerted you`
- optional underlying risk/material context
- evidence freshness when relevant

Unread must not rely on color alone. Use structural marker + stronger hierarchy + accessible unread state.

Read alerts preserve facts while reducing emphasis.

Corrected alerts remain in chronology with explicit correction treatment.

Controls remain minimal:

- All
- Unread
- Filter
- Mark all read

`Mark all read` must provide clear success feedback; on failure, restore prior unread state and offer retry.

---

## 8. Signature alert detail

`Why PiChan alerted you` is the signature Watch explanation.

Alert Detail order:

1. project identity
2. event family + optional underlying risk semantics
3. factual alert title
4. observed time
5. occurred-onchain time where known
6. What Changed
7. State Delta / factual change / relationship change
8. **Why PiChan alerted you**
9. evidence + freshness
10. delivery status
11. Open Flight Recorder
12. Open Passport
13. correction/history context where relevant

Example:

```text
LIQUIDITY
Liquidity decreased 18.6%

WHAT CHANGED
$752K → $612K

WHY PICHAN ALERTED YOU
Liquidity changed materially enough to cross PiChan's configured threshold.

EVIDENCE
Onchain · primary pool · observed 14:33

Open Flight Recorder →
Open Passport →
```

For first observations with no prior value, use a factual initial-observation block rather than inventing a fake Before value.

---

## 9. Alert and delivery are separate records

An Alert exists in PiChan independently from channel delivery.

### In-app

Every generated user alert remains in Watch history while applicable to the account/project relationship.

States:

- unread
- read
- corrected / superseded
- stale supporting evidence
- conflicting evidence

### Telegram delivery

States:

- pending
- delivered
- failed / retry
- disconnected

Telegram failure never removes, recreates or duplicates the underlying Alert.

Channel reconnect/retry acts on Delivery, not Alert creation.

---

## 10. Corrections and historical integrity

If later evidence corrects an alert:

- original Alert remains in history
- original receives `Corrected` / `Superseded` treatment
- detail links to the correcting event / correction chain
- current Passport and Flight Recorder reflect current evidence
- Telegram message cannot be retroactively erased, so its deep-link must show correction context

Never silently rewrite or delete a historical alert.

Conflicting evidence is shown as unresolved context rather than collapsed into false certainty.

---

## 11. Stale evidence and provider outage behavior

Stale or unavailable provider enrichment must affect only the evidence/conclusion it supports.

Required:

- already-created onchain-backed Alerts stay visible
- evidence footer shows stale/unavailable freshness state
- unrelated alerts do not disappear during partial provider outage
- provider-only conclusions are visibly weakened / unavailable
- previously loaded Watch history remains intact during refresh failure
- retry refreshes affected regions without inserting demo data

---

## 12. Watching tab

The Watching tab is monitoring management, not a portfolio.

Each row shows:

- project identity
- ticker + chain
- Recommended / Custom profile
- enabled delivery (`In-app`, `Telegram`)
- unread count when non-zero
- latest selected material alert summary or quiet state
- Watch settings
- Passport destination

Forbidden:

- balances
- holdings
- P&L
- price targets
- trading position

Quiet state copy:

> **Quiet is useful too.**  
> PiChan is watching your projects. No selected material changes have triggered an alert yet.

---

## 13. Watch project settings

Mobile: bottom sheet / nested detail.  
Desktop: context rail / side panel.

Required sections:

### Monitoring profile

- Recommended
- Custom

### Alert families

Visible in both modes.

- Recommended: managed / read-only
- Custom: user-selectable

### Delivery

- in-app alert history: always available while watched
- Telegram: enabled/disabled if connected

### Monitoring state

- watched since
- last evaluated where useful
- Stop watching

No threshold slider maze or raw technical predicate builder.

---

## 14. Telegram alert composition

Telegram uses the same event vocabulary and explanation model as web.

Reference:

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

- BUY / SELL / APE / DUMP NOW
- price targets
- fake urgency
- safety implications from color alone

If evidence is stale or conflicting, Telegram output must say so.

---

## 15. Navigation and responsive behavior

Primary navigation remains:

- Radar
- Search
- Watch
- Me

Watch may show a numeric unread badge. Badge means unread notifications, not risk severity.

### Desktop

Alerts selected:

- main: Watch header, tabs, filters, chronological feed
- right rail: selected Alert Inspector

Watching selected:

- main: watched-project list
- right rail: selected project Watch settings

### Mobile

- Alerts and Watching use one-column flow
- Alert Detail is a dedicated/nested route
- Watch settings use bottom sheet or nested route
- settings content must scroll independently when sheet height exceeds viewport
- bottom app navigation must never obscure content

---

## 16. Required empty / loading / error states

### No watches

> **PiChan isn't watching anything yet.**  
> Watch a Passport and PiChan will notify you when something material changes.

CTA: `Find a project`

### Watches exist, no alerts

> **Quiet is useful too.**  
> PiChan is watching your projects. No selected material changes have triggered an alert yet.

Other required states:

- notification-centre loading
- all read
- provider partial outage
- alert-detail partial data
- alert/detail error + retry
- Telegram disconnected
- settings save pending / error
- Watch add/remove pending / error

No demo alerts or fake activity in production empty states.

---

## 17. Accessibility

Required:

- Alerts use semantic list/feed structure
- unread/read is textual/structural and not color-only
- risk severity is textual
- State Delta exposes Before / After labels
- alert rows and inspector are keyboard reachable
- selected alert has visible focus/selected state
- settings toggles have explicit labels/states
- Recommended managed state is exposed as read-only/disabled, not simply visual
- Telegram/channel status is textual
- reduced motion removes alert-entry/highlight effects

---

## 18. Final V1 lock

Public name: **Watch**  
Internal pattern: **Watchtower**  
Primary modes: **Alerts / Watching**  
Signature explanation: **Why PiChan alerted you**  
Default monitoring: **Recommended**  
Custom monitoring: **event-family selection only**  
Delivery: **In-app + Telegram**

Non-negotiables:

- Alert ≠ Delivery
- Materiality ≠ Risk severity
- Watch ≠ Portfolio
- Telegram failure ≠ lost Alert
- correction ≠ deletion
- provider message ≠ user Alert
- dedup/cooldown is part of product trust
- no price alerts or trading calls

**DESIGN HQ LOCKED — implementation should preserve these semantics and information hierarchy.**