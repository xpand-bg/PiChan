# PiChan V1 — Watch & Alerts UI QA Lock

**Status:** DESIGN HQ — LOCKED  
**Product version:** V1.0  
**Date:** 2026-09-13  
**Owner:** PiChan Design HQ

This document is the final component/state QA lock for Watch + Alerts.

---

## 1. Locked product promise

Watch answers:

> **What changed while I wasn't looking?**

An Alert answers:

> **What changed, why did PiChan alert me, and what evidence proves it?**

Primary lock rule:

> **One normalized material transition should create one understandable user alert.**

---

## 2. Final information architecture

Primary Watch modes:

- Alerts
- Watching

No additional primary Watch tabs in V1.

Global notification / Telegram settings may be linked from Watch settings or Me, but must use the same underlying Watch/Delivery system.

---

## 3. Watch action state QA

Required states:

- Available — `Watch`
- Adding — `Watching…`
- Active — `Watching ✓`
- Removing — pending state inside settings
- Login/connect required — preserve project context
- Error — `Retry Watch`

QA lock:

- Watch is one tap into Recommended monitoring
- Stop Watching is not a destructive one-tap main-screen action
- settings are the explicit place to remove a Watch

**PASS**

---

## 4. Monitoring profile QA

### Recommended

- default profile
- PiChan-managed calibrated materiality rules
- all six supported event families visible
- event-family controls are read-only / managed
- helper points to Custom for user selection

### Custom

- event families become user-selectable
- raw technical thresholds remain configuration-driven
- no price-target or arbitrary predicate builder

**PASS**

---

## 5. Alert feed QA

Each Alert Row must preserve:

- project identity
- chain
- timestamp
- event family
- factual title
- state/change context
- unread/read state
- signature `Why PiChan alerted you`

Unread/read requirements:

- not color-only
- unread has explicit structural/accessibility state
- read reduces emphasis without hiding facts
- selected desktop row has visible selected/focus state

Corrected Alerts remain in chronological history.

**PASS**

---

## 6. Alert Detail QA

Required hierarchy:

1. project identity
2. event family
3. title
4. What Changed
5. State Delta / factual change
6. Why PiChan alerted you
7. Evidence
8. Delivery
9. Flight Recorder
10. Passport
11. correction context where relevant

`Why PiChan alerted you` is mandatory for all user-facing material Alerts.

State Delta must expose textual Before / After semantics.

**PASS**

---

## 7. Alert vs Delivery QA

Locked separation:

- Alert is the persistent PiChan intelligence notification
- Delivery is a channel-specific attempt/state

In-app:

- unread
- read

Telegram:

- pending
- delivered
- failed / retry
- disconnected

Rules:

- Telegram failure never deletes the Alert
- Telegram failure never creates a duplicate Alert
- reconnect/retry acts on Delivery only

**PASS**

---

## 8. Mark all read QA

Required behavior:

- action clears unread markers immediately or after confirmed response according to implementation strategy
- success feedback says how many alerts were marked read where useful
- failure restores prior unread state and offers retry
- unread navigation badge updates consistently

**PASS**

---

## 9. Corrections / conflicting evidence QA

Corrections:

- original Alert remains in history
- original receives Corrected / Superseded treatment
- detail links to correction chain / correcting event
- current Passport and Flight Recorder use current evidence

Conflicts:

- unresolved evidence remains explicitly unresolved
- UI never rewrites conflicting evidence into false certainty

Telegram:

- previously delivered message cannot be erased
- opening the deep-link shows current correction/conflict context

**PASS**

---

## 10. Stale evidence / provider outage QA

Required:

- onchain-backed Alerts remain visible
- stale provider evidence shows freshness state
- provider-only enrichment may become unavailable without removing unrelated Alerts
- previously loaded Alert history remains intact
- retry does not inject demo alerts

**PASS**

---

## 11. Dedup / cooldown QA

Example lock case:

```text
5 provider observations
→ 1 normalized state transition
→ 1 user Alert
```

Required:

- repeated provider retries do not create user spam
- unchanged conditions do not repeatedly notify
- dedup/suppressed operational records remain auditable where needed

**PASS**

---

## 12. Watching list QA

Required row information:

- project identity
- chain
- Recommended / Custom
- delivery state
- unread count if non-zero
- latest selected material Alert or quiet state
- Watch settings
- Passport destination

Forbidden:

- holdings
- balance
- P&L
- price targets
- position / trading state

**PASS**

---

## 13. Empty / quiet / error QA

### No Watches

`PiChan isn't watching anything yet.`

CTA: Find a project.

### Watches exist, no Alerts

`Quiet is useful too.`

No demo or fake activity.

Required system states:

- loading
- all read
- provider partial outage
- Alert Detail partial data
- error / retry
- Telegram disconnected
- settings save pending / error

**PASS**

---

## 14. Telegram QA

Telegram Alert must include:

- PiChan Alert + exact project identity
- chain
- factual change headline
- State Delta / factual change when useful
- Why PiChan alerted you
- observed/evidence context
- deep links to Passport / event

Forbidden:

- buy/sell language
- fake urgency
- price targets
- universal Alert Severity
- safety claims implied by color

**PASS**

---

## 15. Accessibility QA

Required:

- semantic list/feed for Alerts
- textual unread/read state
- textual risk/event semantics
- textual Before / After
- keyboard reachable rows / inspector / settings
- visible selected/focus state
- explicit switch labels + states
- Recommended managed controls exposed as read-only/disabled
- textual Telegram/channel state
- reduced-motion behavior

**PASS**

---

## 16. Responsive lock

### Mobile

- one-column Alert feed
- stacked `Why PiChan alerted you` for readability
- dedicated/nested Alert Detail
- bottom sheet / nested Watch Settings
- settings must scroll if taller than viewport
- bottom navigation never covers content

### Desktop

Alerts:

- main feed + Alert Inspector

Watching:

- project list + Watch Settings context rail

**PASS**

---

## 17. Final visual references

- `PiChan_Watch_Alerts_Mobile_v02_LOCKED.png`
- `PiChan_Watch_Watching_Mobile_v02_LOCKED.png`
- `PiChan_Watch_Alert_Detail_Mobile_v02_LOCKED.png`
- `PiChan_Watch_Settings_Mobile_v02.png`
- `PiChan_Watch_Settings_Custom_Mobile_v01_LOCKED.png`
- `PiChan_Watch_Alerts_Desktop_v02_LOCKED.png`
- `PiChan_Watch_Watching_Desktop_v03_LOCKED.png`
- `PiChan_Watch_Alerts_Final_QA_LOCKED.png`

---

## 18. Final non-negotiables

- Alert ≠ Delivery
- Materiality ≠ Risk severity
- Watch ≠ Portfolio
- provider message ≠ user Alert
- Recommended is one-tap and PiChan-managed
- Custom selects event families only
- `Why PiChan alerted you` is mandatory
- correction ≠ deletion
- Telegram failure ≠ lost Alert
- dedup/cooldown is part of product trust
- no price targets / P&L / buy-sell calls / universal Alert Severity

# DESIGN HQ — FINAL LOCK

Watch + Alerts V1 is approved for implementation against the locked UI spec and this QA contract.