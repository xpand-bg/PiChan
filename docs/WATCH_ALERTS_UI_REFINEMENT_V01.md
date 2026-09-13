# PiChan V1 — Watch & Alerts High-Fidelity Refinement

**Status:** DESIGN HQ — FINAL LOCK  
**Product version:** V1.0  
**Design revision:** Watch / Alerts v0.2  
**Date:** 2026-09-13  
**Owner:** PiChan Design HQ

This document translates `WATCH_ALERTS_UI_SPEC_V1.md` into the final high-fidelity Watch + Alerts system. It does not expand product scope.

---

## 1. Final direction

Public product name: **Watch**.  
Internal design pattern: **Watchtower**.

Primary question:

> **What changed while I wasn't looking?**

Watch is a monitoring inbox plus watched-project management, not a portfolio, trading tool, or technical rule builder.

Two primary modes only:

- **Alerts** — chronological material-change inbox
- **Watching** — monitored-project management

---

## 2. Final mobile hierarchy

### Alerts

1. PiChan brand / settings
2. `Watch`
3. `PiChan is watching.`
4. watched count + unread count + Telegram connection
5. `Alerts / Watching` segmented control
6. `All / Unread / Filter / Mark all read`
7. date-grouped Alert feed
8. bottom app navigation with Watch active + unread badge

Final mobile alert rows use a stacked signature explanation:

- project identity
- event family
- factual headline
- state/change context
- **WHY PICHAN ALERTED YOU**
- short reason

This was chosen over a side-by-side mobile reason line because it is easier to scan and preserves the signature explanation.

### Watching

Each watched project row shows:

- project identity + chain
- Recommended / Custom profile
- delivery state
- unread count if non-zero
- latest selected material alert or quiet state
- Watch settings
- Passport destination

### Alert Detail

Order is locked:

1. project identity
2. event family
3. factual alert title
4. compact context
5. What Changed
6. State Delta / factual change
7. **Why PiChan alerted you**
8. Evidence
9. Delivery
10. Flight Recorder
11. Passport
12. correction/history context

---

## 3. Monitoring profile interaction

### Recommended

- default after one-tap Watch
- PiChan-managed calibrated materiality rules
- six event families remain visible
- category controls are **managed/read-only**
- helper: `Switch to Custom to choose event families.`

### Custom

- event-family controls become editable
- user may enable/disable the six supported categories
- PiChan still owns threshold calibration
- no arbitrary percentage/amount/price/event-signature rule builder

Final mobile settings references include both Recommended and Custom states.

---

## 4. Signature Watch element

**WHY PICHAN ALERTED YOU** is mandatory for every user-facing material Alert.

It explains why the normalized event triggered Watch without exposing raw implementation details.

Examples:

- `Liquidity changed materially enough to cross PiChan's configured threshold.`
- `A relevant current authority changed.`
- `Top-holder concentration crossed the configured material-change threshold.`
- `The creator/origin wallet linked to this project launched another supported deployment.`
- `Data Confidence moved from Medium to Low because supporting evidence became stale.`

It remains distinct from:

- Radar `Why on Radar`
- Flight Recorder chronology
- Risk severity

---

## 5. Alert-row states

Final supported visual states:

- unread
- read
- selected desktop row
- corrected / superseded
- stale evidence context
- conflicting evidence context

Rules:

- unread uses structural + textual state, not color alone
- read reduces hierarchy but preserves facts
- event-family color follows event semantics
- `Material` is not equivalent to `Warning`
- corrected Alerts remain visible in historical order

---

## 6. Alert / Delivery separation

The final UI treats the Alert and each Delivery as separate stateful objects.

Example:

- Alert: `Unread`
- In-app: available
- Telegram: `Delivered · 14:33`

Other Telegram states:

- pending
- failed / retry
- disconnected

Telegram failure never removes or recreates the Alert.

---

## 7. Desktop composition

### Alerts selected

Main column:

- Watch header/status
- Alerts / Watching segmented control
- minimal filters
- chronological alert rows

Right rail:

- selected Alert Inspector
- project identity
- event family
- State Delta / factual change
- Why PiChan alerted you
- evidence
- delivery state
- Flight Recorder / Passport links

### Watching selected

Main column:

- watched-project list
- profile
- delivery
- unread count
- latest material alert

Right rail:

- selected project Watch settings
- Recommended / Custom
- event families
- delivery
- watched since / last evaluated
- Stop watching

Recommended shows categories as managed/read-only; Custom makes them editable.

---

## 8. Noise-control UX contract

The locked interface assumes:

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
In-app + Telegram Delivery
```

Five repeated provider observations describing one unchanged transition must still produce one user Alert.

Suppressed duplicates remain operationally auditable but never appear as repeated Watch notifications.

---

## 9. Final state QA decisions

The final QA passes:

- Watch action available / adding / watching / remove / retry
- Recommended managed state
- Custom editable event-family state
- Mark all read success/failure behavior
- unread/read hierarchy
- Telegram pending/delivered/failed/disconnected
- Alert/Delivery separation
- corrected/superseded history
- stale supporting evidence
- conflicting evidence
- provider partial outage
- dedup/cooldown behavior
- no Watches empty state
- Watching with no Alerts quiet state
- login/connect-required context preservation
- settings save pending/error
- keyboard reachability and accessible state labels

---

## 10. Final visual references

Final lock references:

- `PiChan_Watch_Alerts_Mobile_v02_LOCKED.png`
- `PiChan_Watch_Watching_Mobile_v02_LOCKED.png`
- `PiChan_Watch_Alert_Detail_Mobile_v02_LOCKED.png`
- `PiChan_Watch_Settings_Mobile_v02.png` — Recommended managed state
- `PiChan_Watch_Settings_Custom_Mobile_v01_LOCKED.png`
- `PiChan_Watch_Alerts_Desktop_v02_LOCKED.png`
- `PiChan_Watch_Watching_Desktop_v03_LOCKED.png`
- `PiChan_Watch_Alerts_Final_QA_LOCKED.png`

The Telegram composition and system behavior remain represented by the v0.1 system board and the final QA contract.

---

## 11. Lock criteria

The following are non-negotiable in implementation:

- Alert ≠ Delivery
- Materiality ≠ Risk severity
- Watch ≠ Portfolio
- provider message ≠ user Alert
- Recommended is one-tap and PiChan-managed
- Custom selects event families only
- Why PiChan alerted you is required
- correction ≠ deletion
- stale/provider failure remains explicit
- dedup/cooldown is part of product trust
- no price alerts, balances, P&L, buy/sell language or universal Alert Severity

**DESIGN HQ FINAL LOCK — no further concept redesign required for V1.**