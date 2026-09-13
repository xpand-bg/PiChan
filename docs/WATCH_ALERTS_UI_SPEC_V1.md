# PiChan V1 — Watch & Alerts UI Spec

**Status:** DESIGN HQ — RESEARCH / CONCEPT DRAFT  
**Product version:** V1.0  
**Date:** 2026-09-13  
**Owner:** PiChan Design HQ

Watch answers:

> **What changed from now on?**

Alert detail answers:

> **What changed, why did PiChan alert me, and what evidence proves it?**

Watch is one of the four primary public product pillars. Alerts are the monitoring output of Watch, not a separate primary pillar.

V1 delivery channels:

- in-app alert centre
- Telegram

No price-target alerts exist in V1.

---

## 1. Locked product requirements

From `PRODUCT_SPEC_V1.md` and `V1_BUILD_PLAN.md`, Watch V1 must support:

- watch / unwatch
- alert preferences
- material-event evaluation
- deduplication / cooldowns
- in-app notification centre
- Telegram delivery
- configuration-driven materiality thresholds

High-value alert classes:

- critical risk/control finding appears or changes
- contract upgrade / owner / authority change
- material mint/burn event
- material liquidity removal/change
- LP/lock condition change when reliably detectable
- material holder/related-wallet concentration change
- official link/identity change
- dispute/lifecycle change
- creator launches another project
- Reputation Grade changes
- Data Confidence changes materially

Watch must never become a price-alert or trading-call product.

---

## 2. Research conclusions

### A. Existing crypto alerts are mostly condition builders

Etherscan Watch List monitors selected addresses and sends notifications for matching address/token-transfer activity.

Arkham Alerts can monitor addresses/entities using transaction/token/value/chain criteria and deliver through Telegram/email/webhooks.

Nansen Smart Alerts similarly monitor wallets/tokens/labels and deliver real-time notifications through messaging channels.

Tenderly/OpenZeppelin monitoring systems expose low-level transaction/event/function conditions, severity, thresholds and delivery channels.

**PiChan opportunity:** do not compete by creating another transaction-rule builder. PiChan already has normalized intelligence, evidence, materiality and Flight Recorder events. Watch should alert on **interpreted project state changes**, not raw blockchain noise.

### B. Alert fatigue is a product failure, not only an infrastructure problem

PagerDuty and Grafana both emphasize deduplication/grouping/suppression because repeated notifications create alert fatigue and obscure important events.

**PiChan implication:**

- an event should not create multiple user alerts because providers repeat the same observation
- cooldown/dedup logic happens before delivery
- related updates should update/group into one understandable alert where the event model supports it
- suppressed/deduplicated observations remain operationally auditable, but do not become duplicate user notifications

### C. Immediate setup beats configuration-first setup

Competitive products often require filters, thresholds and destinations before monitoring becomes useful.

**PiChan implication:**

- `Watch` is one tap from Passport
- default profile is **Recommended**
- project starts monitoring immediately after successful identity/account requirement
- customization is optional after Watch is active
- no threshold slider maze in V1

---

## 3. Chosen direction — Watchtower

`Watchtower` is an internal design pattern name. Public UI remains **Watch**.

The primary Watch destination is a **monitoring inbox**, not a settings page.

Recommended information architecture:

```text
WATCH
PiChan is watching.
12 projects · 3 unread alerts · Telegram connected

[ Alerts 3 ] [ Watching 12 ]
```

### Alerts

Cross-project material changes, newest first.

### Watching

Projects the user actively monitors plus concise monitoring state/preferences.

No third primary tab is required. Global notification/Telegram settings live behind a settings action or Me → Notification Settings.

---

## 4. One-tap Watch behavior

From Passport:

1. user presses `Watch`
2. if identity/account requirement is satisfied, project is immediately watched using **Recommended** preferences
3. action confirms with selected `Watching` state + toast
4. optional secondary action: `Customize alerts`

If login/connect is required:

- preserve the project context
- explain why identity is required
- after successful connect, return to the same project/watch action

Do not make every user configure categories before Watch becomes useful.

`Watching` uses selected cyan treatment, not safety green.

Selecting `Watching` opens project Watch settings/details; it does not immediately unwatch.

`Stop watching` is explicit inside settings to avoid accidental removal.

---

## 5. Default monitoring profile

### Recommended — default

PiChan monitors all supported **material** V1 event classes using centrally configured/calibrated thresholds.

User does not configure arbitrary percentages/amounts in V1.

Recommended copy:

> PiChan alerts you when evidence-backed project changes cross its materiality rules.

### Custom

User may enable/disable event families, not raw technical predicates.

Recommended category model:

1. **Risk & Control**
   - critical/warning risk finding
   - owner/authority/control/upgrade change
   - LP lock/burn/control state where reliable

2. **Liquidity**
   - material liquidity removal/change

3. **Supply & Holders**
   - material mint/burn
   - material holder/related-wallet concentration change

4. **Identity & Lifecycle**
   - official/canonical/authority state
   - official links
   - dispute/lifecycle change

5. **Creator Activity**
   - creator/origin wallet launches another supported project

6. **Reputation & Confidence**
   - Reputation Grade change
   - material Data Confidence change

This keeps preferences understandable without turning Watch into an expert rule-builder.

---

## 6. Delivery model

An **Alert record** and a **Delivery** are separate concepts.

### In-app

Every generated user alert remains in the in-app Watch alert history.

### Telegram

Optional external delivery channel after connection.

Telegram delivery can be enabled/disabled without deleting Watch history.

This separation prevents delivery failures from making an alert disappear from PiChan.

V1 does not require native mobile push, email, Slack, Discord or webhooks for end users.

---

## 7. Alert feed — signature list pattern

The Alerts tab is a chronological cross-project monitoring feed.

Each Alert Row contains:

- unread/read state
- project identity
- chain
- event family
- factual alert headline
- compact reason/context
- timestamp
- optional underlying risk severity when applicable
- evidence freshness state when relevant

Example:

```text
● Signal Bird  $BIRD · Robinhood Chain       14m
  LIQUIDITY
  Liquidity decreased 18.6%
  Primary pool moved $752K → $612K.
```

Rules:

- unread state uses a non-color marker plus stronger hierarchy
- read state reduces emphasis but preserves all facts
- red/amber appears only when the underlying Risk/event semantics justify it
- `Material` is not automatically styled as `Warning`
- market price movement alone does not create a PiChan Watch alert

Group the feed by date (`Today`, `Yesterday`, date) rather than by project.

---

## 8. Signature alert detail — Why PiChan alerted you

Alert detail reuses the locked Flight Recorder **State Delta** where applicable.

Example:

```text
LIQUIDITY
Liquidity decreased 18.6%

WHAT CHANGED
$752K  →  $612K

WHY PICHAN ALERTED YOU
The change crossed PiChan's configured material-liquidity threshold.

EVIDENCE
Onchain · primary pool · observed 14:33
View evidence

Open Flight Recorder →
Open Passport →
```

`Why PiChan alerted you` is the signature Watch explanation.

It must explain the alert trigger in factual product language without exposing internal implementation jargon unnecessarily.

Examples:

- `Liquidity changed materially enough to cross PiChan's configured threshold.`
- `A relevant current authority changed.`
- `Top-holder concentration crossed the configured material-change threshold.`
- `The creator/origin wallet linked to this project launched another supported deployment.`
- `Data Confidence moved from Medium to Low because a supporting source became stale.`

---

## 9. Alert detail anatomy

Required where applicable:

1. project identity
2. event family + optional Risk severity
3. alert title
4. observed time
5. occurred-onchain time where known
6. `What changed`
7. State Delta / relationship change / factual change block
8. `Why PiChan alerted you`
9. Evidence Footer
10. freshness/source state
11. delivery status where useful
12. `Open Flight Recorder`
13. `Open Passport`

For creator alerts, relationship context can replace numeric Before/After.

For first-time states where no prior value exists, use the locked factual initial-observation pattern rather than inventing a fake `Before` state.

---

## 10. Corrections and superseded alerts

Alerts are historical notifications and must preserve truth over time.

If evidence later corrects the underlying event:

- original alert remains in Alert history
- original alert receives `Corrected` / `Superseded` treatment
- alert detail links to the correcting event
- current Passport/Flight Recorder state reflects the corrected evidence
- external Telegram notification cannot be retroactively deleted, but the in-app alert record is updated with the correction context

Never silently rewrite or remove the original alert.

---

## 11. Alerts vs Risk severity vs materiality

These concepts remain separate.

### Alert

A user-facing notification because a watched project experienced a selected material event.

### Materiality

Whether the change is important enough to trigger Watch according to configured rules.

### Risk severity

Underlying Critical/Warning/Unknown semantics from a Risk Finding where applicable.

Do not invent a universal red/yellow/green `Alert Severity` score that collapses these concepts.

---

## 12. Noise control

Noise control is part of product trust.

Required behavior:

- deduplicate repeat observations for the same normalized change
- cooldown repeat notifications where the same condition remains active
- avoid multiple alerts for provider retries/reprocessing
- if several evidence updates describe the same material state transition, prefer one alert with the best current evidence
- maintain suppressed/deduplicated records operationally where needed for debugging/audit

Potential implementation key:

`user + watched project + normalized event/finding identity + meaningful state transition`

Exact logic remains an Intelligence/Developer HQ implementation detail, but the UI assumes the user receives one understandable alert, not repeated provider noise.

---

## 13. Watching tab

The Watching tab is management + monitoring status, not a token portfolio.

Each watched project row should show:

- project identity
- chain
- Watching state
- monitoring profile (`Recommended` / `Custom`)
- enabled delivery (`In-app`, `Telegram`)
- unread alert count when non-zero
- latest material alert/event summary
- Passport destination
- project Watch settings action

Do not show portfolio balance, P&L, price targets or trading position.

---

## 14. Watch project settings

Mobile: bottom sheet or nested detail.  
Desktop: side panel/context rail.

Required:

### Monitoring profile

- Recommended
- Custom

### Custom event-family toggles

- Risk & Control
- Liquidity
- Supply & Holders
- Identity & Lifecycle
- Creator Activity
- Reputation & Confidence

### Delivery

- In-app alert history: always available while watched
- Telegram: enabled/disabled if connected

### Watch state

- watched since
- last evaluated / monitoring health where useful
- `Stop watching`

No price-target input.

---

## 15. Alerts tab controls

Keep controls minimal.

Recommended:

- `All`
- `Unread`
- optional event-family filter through one Filter action
- `Mark all read`

Desktop may expose more inline filter chips if space allows.

Do not make the monitoring inbox look like an analytics query builder.

---

## 16. Desktop composition

Reference width: 1440 px.

Use locked PiChan shell.

Main research column: ~780–830 px.  
Context rail: ~300–340 px.

### Alerts selected

Main:

- Watch header/status
- Alerts / Watching segmented control
- alert filters
- chronological Alert feed

Right rail:

- selected **Alert Inspector**
- What changed
- Why PiChan alerted you
- delivery status
- evidence/destinations

### Watching selected

Main:

- watched-project list

Right rail:

- selected project's Watch settings
- monitoring profile
- categories
- channel state

---

## 17. Mobile composition

Reference width: 390 px.

```text
Watch
PiChan is watching.
12 watching · 3 unread · Telegram connected

[ Alerts 3 ] [ Watching 12 ]

TODAY
● Signal Bird                        14m
  LIQUIDITY
  Liquidity decreased 18.6%
  $752K → $612K

  Nova Protocol                     31m
  CREATOR
  Linked creator launched another project

YESTERDAY
...

[ Radar ] [ Search ] [ Watch ] [ Me ]
```

Alert tap opens deep-linkable detail/nested route or the approved mobile detail pattern.

---

## 18. Telegram alert composition

Keep Telegram messages concise and evidence-oriented.

Recommended anatomy:

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

Rules:

- no `BUY`, `SELL`, `APE`, `DUMP NOW`, or fake urgency
- no price-target language
- same event vocabulary as web
- exact project/chain identity remains visible
- if evidence is stale/conflicting, Telegram output says so

---

## 19. Navigation / unread badges

Primary mobile navigation remains:

- Radar
- Search
- Watch
- Me

Watch may display a small numeric unread badge when unread alerts exist.

The badge indicates unread notifications, not risk severity.

`Me` may still contain shortcuts to Watches / Alerts / Telegram settings as required by the product spec, but those shortcuts route into the same Watch/notification system rather than create duplicate implementations.

---

## 20. Required states

### Watch action

- available
- adding
- watching
- removing
- login/connect required
- action error
- preferences unavailable while Watch remains active

### Alert

- unread
- read
- corrected/superseded
- stale supporting evidence
- conflicting evidence
- delivery pending
- delivered
- Telegram delivery error
- deduplicated/suppressed operational state where surfaced
- alert detail error/partial data

### Notification centre

- loading
- no alerts yet
- all read
- provider partial outage
- error/retry

### Watching list

- no watched projects
- normal
- project partial-data state
- Telegram disconnected while Watch remains active
- settings save pending/error

---

## 21. Empty states

### No watched projects

Recommended:

> **PiChan isn't watching anything yet.**  
> Watch a Passport and PiChan will notify you when something material changes.

Primary CTA: `Find a project`  
Secondary path: Radar

### Watching projects, no alerts yet

Recommended:

> **Quiet is useful too.**  
> PiChan is watching your projects. No selected material changes have triggered an alert yet.

Avoid fake sample alerts in production.

---

## 22. Accessibility

Required:

- Alerts list uses semantic list/feed structure
- unread/read is available to assistive technology and not color-only
- risk severity is textual
- State Delta has textual Before/After labels
- alert inspector is keyboard reachable
- selected alert row has visible focus/selected state
- settings toggles have explicit labels and states
- Telegram/channel status is textual
- reduced motion removes animated alert-entry/highlight effects

---

## 23. Research differentiation

Competitors are strong at raw-condition monitoring:

- Etherscan: address/token transfer watch
- Arkham: entity/address/token/value/chain transaction alerts
- Nansen: wallet/token/label Smart Alerts
- Tenderly/OpenZeppelin: transaction/event/function monitor rules

PiChan V1 differentiates by monitoring **interpreted evidence-backed project state**:

```text
raw observations
      ↓
normalized evidence
      ↓
Flight Recorder event / state change
      ↓
materiality evaluation
      ↓
dedup / cooldown
      ↓
Watch alert
      ↓
in-app + Telegram
```

The user does not need to know which event signature, wallet transfer amount or provider field to monitor.

---

## 24. Lock direction

Recommended concept to take into high fidelity:

### Public name

**Watch**

### Internal pattern

**Watchtower**

### Signature alert element

**Why PiChan alerted you** + reused Flight Recorder **State Delta**

### Core IA

**Alerts / Watching**

### Default Watch profile

**Recommended** — all selected evidence-backed material V1 event classes using PiChan-configured thresholds.

### Customization philosophy

Choose event families and delivery channels; do not build a raw rule engine or price-target system in V1.

### Primary product advantage

PiChan tells the user **what changed and why it matters enough to interrupt them**, then links directly to evidence and historical context.

---

## 25. Next design pass

Build and review:

1. mobile Alerts inbox
2. mobile Watching tab + project settings sheet
3. mobile Alert Detail
4. desktop Alerts + Alert Inspector
5. desktop Watching + Watch Settings rail
6. Telegram alert template
7. component/state QA board

Do not lock until noise-control, correction, stale/conflict, delivery-error and empty states have all been visually tested.