# PiChan V1 — Radar UI QA Lock

**Status:** FINAL LOCK — RADAR REFERENCE  
**Product version:** V1.0  
**Date:** 2026-09-13  
**Owner:** PiChan Design HQ / Product HQ

This document records the final component/state QA for Radar and locks the screen family for V1 implementation.

It must be read with:

- `UI_FINAL_QA_LOCK_V1.md`
- `UI_DESIGN_SYSTEM_V1.md`
- `PRODUCT_UI_TOKENS_V1.md`
- `UI_COMPONENT_LIBRARY_V1.md`
- `UI_FEATURE_COMPONENTS_V1.md`
- `UI_CORE_STATE_MATRIX_V1.md`
- `RADAR_UI_SPEC_V1.md`
- `RADAR_UI_REFINEMENT_V02.md`
- Production Assets 2.2

This lock does not add or change product scope.

---

## 1. Final direction

Radar uses the **Signal Tape** composition internally.

Public UI remains `Radar`.

The screen is an evidence-backed observation stream answering:

> **What should I investigate?**

It is not a gainers page, token-card grid, social feed, market leaderboard, or trading terminal.

---

## 2. Locked screen composition

### Mobile

1. compact PiChan app header
2. `Radar` + `What should I investigate?`
3. `Signals / New / Verified`
4. one compact chain filter opening the existing mobile filter sheet
5. organic chronological observation stream
6. separated Sponsored Sighting when enabled
7. loading / continuation / empty / error state as required
8. locked bottom navigation

`Radar Pulse` is intentionally omitted from mobile to keep the first signal above the fold sooner.

### Desktop

1. standard PiChan left rail
2. global search / command field
3. Radar title + descriptor
4. group tabs + chain filter
5. main Signal Tape feed
6. sticky context rail containing useful current context only:
   - Radar Pulse when reliable
   - Current Scope
   - Source Health where useful
   - compact Watch shortcut when applicable
7. separated Sponsored Sighting when enabled

The context rail must never become a market dashboard.

---

## 3. Organic item contract — LOCKED

Every normal organic Radar item uses one visual grammar:

1. timestamp + chronology marker
2. project/token identity
3. chain / relevant identity state
4. factual event-family label
5. event title
6. concise factual summary
7. visible `WHY ON RADAR` annotation
8. optional compact Reputation / Risk / Confidence context
9. standard Evidence Footer
10. `View Passport` primary destination
11. Watch icon control when appropriate

Event title and reason lead over price or market performance.

Normal organic items remain visually open with separators rather than large rounded-card containers.

---

## 4. `Why on Radar` — LOCKED signature

`Why on Radar` is mandatory for every organic item.

Final treatment:

- compact cyan observation bracket / rail
- observation/eye icon
- label `WHY ON RADAR`
- one concise evidence-backed sentence
- no nested card by default

It is an intelligence annotation attached to the observation.

Forbidden:

- marketing/hype copy
- `hot`, `alpha`, `trending`, `mooning` or equivalent
- paid campaign copy using the same treatment
- unexplained ranking language

---

## 5. Event-family labels — LOCKED

Small factual taxonomy labels improve scanability without creating a new score/filter.

Allowed labels derive from existing event taxonomy, including examples such as:

- LIQUIDITY
- CREATOR
- IDENTITY
- HOLDERS
- CONTROL
- REPUTATION
- NEW DEPLOYMENT

They may use restrained event-relevant accent color, but strong warning/error semantics remain governed by the locked Risk system.

---

## 6. Intelligence context — LOCKED

Radar may show compact supporting context:

- Reputation Grade / `Unrated`
- Risk summary / `Unknown`
- Data Confidence

Rules:

- the three concepts remain visibly separate
- no composite score
- no mini Decision Strip inside Radar
- omit the line if insufficient space/data rather than crowd the signal
- New may correctly show `Unrated / Unknown / Low`
- Verified may still show warnings/risks and never means safe

---

## 7. Evidence Footer — LOCKED

Use the standard product grammar:

`[Source] · [Freshness] · View evidence`

Examples:

- `Onchain · checked 2m ago · View evidence`
- `Provider · stale 42m · View evidence`
- `Direct · observed 1h ago · View evidence`

Stale/conflicting/partial-provider states remain attached to the affected conclusion rather than hidden in a global message only.

---

## 8. Signals / New / Verified semantic QA — PASS

### Signals

Lead with the material event and evidence-backed reason.

### New

Lead with `New deployment observed` or equivalent discovery event.

New does **not** imply good, promising, safe, or endorsed.

Sparse evidence may correctly render:

- Reputation: `Unrated`
- Risk: `Unknown`
- Confidence: `Low`

### Verified

Lead with the exact verification/identity event, such as:

- `Authority verified`
- `Project claim accepted`
- `Canonical deployment established`

Verified does **not** imply safe and does not override Risk/Reputation/Confidence semantics.

All three groups use the same item grammar rather than three separate visual systems.

---

## 9. Sponsored Sighting QA — PASS / LOCKED

Sponsored Sighting is unmistakably outside organic Radar ranking.

Required:

- explicit `SPONSORED SIGHTING`
- explicit `Paid placement · PiChan intelligence remains independent`
- separate contained/dashed geometry
- no organic chronology marker
- no organic event-family label
- no `Why on Radar`
- no paid modification of Reputation, Risk, Confidence, evidence, or organic ranking

Campaign message and independent PiChan intelligence must never visually merge into one endorsement statement.

---

## 10. State QA — PASS

Radar is implementation-ready only with the following states:

### Feed states

- loading / skeleton
- organic normal
- material event
- New
- Verified / Canonical
- stale supporting source
- provider partial outage
- empty
- error / retry
- incremental loading / continuation if implemented

### Item data states

- complete
- partial
- Unrated
- Unknown
- Low / Medium / High Confidence
- conflicting evidence where applicable

### Watch interaction

- available
- adding
- Watching
- removing
- login/connect required
- error

### Sponsored

- organic feed unaffected by campaign state
- active sponsored placement uses Sponsored component only
- no sponsored item is fabricated into organic loading/empty states

---

## 11. Loading state — LOCKED

Skeletons preserve the Signal Tape geometry:

- timeline marker position
- identity block
- event title
- Why on Radar annotation area
- evidence/footer line

Do not replace the entire feed with generic rectangular cards.

---

## 12. Empty state — LOCKED

Never fill production Radar with sample/demo tokens.

Recommended user-facing message:

`Nothing new matches this Radar view right now.`

Offer only relevant next actions:

- change group
- change chain filter
- Search

Empty is calm; it is not an error state.

---

## 13. Error / provider outage — LOCKED

### Partial provider outage

- keep unaffected observations usable
- affected Evidence Footers show stale/outage state
- optional desktop Source Health summarizes affected provider classes
- do not fabricate missing Radar reasons

### Screen-level error

Preserve:

- active group
- chain filter
- user context

Show inline retry without replacing the whole app shell.

---

## 14. Interaction QA — PASS

Organic item:

- primary row/title destination: Passport
- event-specific history link may route to Flight Recorder where useful

Evidence:

- uses the existing evidence modal/bottom-sheet pattern

Watch:

- uses the locked Watch control semantics
- icon-only production control requires an accessible label and practical touch target

Tabs/filter:

- keyboard navigable on desktop/web
- mobile chain filter uses existing bottom sheet
- state remains visible during loading

---

## 15. Responsive QA — PASS

### Mobile

- one-column stream
- no horizontal scrolling
- first signal appears quickly
- event reason remains visible without opening detail
- bottom navigation remains consistent with the locked shell

### Desktop

- main feed remains dominant
- context rail is secondary and sticky where implementation supports it
- extra width improves scanability/context rather than adding decorative widgets

Semantic order does not change across breakpoints.

---

## 16. Accessibility QA — PASS contract

Implementation must preserve:

- WCAG 2.2 AA target
- heading hierarchy
- keyboard-accessible tabs/filter/items
- accessible names for icon-only Watch/search controls
- sponsored label exposed to assistive technology
- status not communicated by color alone
- ~44×44 px practical mobile targets
- reduced-motion equivalent for any optional header radar motion
- no required meaning contained only in decorative timeline markers

---

## 17. Final visual refinements from v0.2 → lock

Final polish is limited to execution quality, not layout redesign:

- Watch becomes a clearly bounded icon control in production rather than a floating decorative eye
- `View Passport` uses a consistent forward destination indicator
- spacing aligns to the locked 4/8 px rhythm
- event labels use consistent typography/underline geometry
- context rail source states use semantic text + marker, not color alone
- no placeholder Unicode/system glyphs are allowed in production; use the locked vector icon family

These do not change the v0.2 architecture.

---

## 18. Lock decision

The final QA questions pass:

1. Radar clearly answers `What should I investigate?` — **PASS**
2. Feed reads as PiChan intelligence, not token marketing — **PASS**
3. `Why on Radar` is distinctive and evidence-first — **PASS**
4. Signals / New / Verified share one system — **PASS**
5. New does not imply good — **PASS**
6. Verified does not imply safe — **PASS**
7. Reputation / Risk / Confidence remain secondary and separate — **PASS**
8. evidence/freshness remains visible — **PASS**
9. Sponsored Sighting cannot be mistaken for organic ranking — **PASS**
10. mobile/desktop preserve one semantic model — **PASS**
11. loading/empty/stale/outage/error states are defined — **PASS**
12. design reuses the locked PiChan V1 foundation — **PASS**

**Radar UI family: FINAL LOCKED for V1.**

Future implementation may refine rendering details for real content and accessibility, but may not replace the Signal Tape composition, hide `Why on Radar`, merge paid and organic content, or introduce a second Radar visual language without Design HQ change control.

Next screen family: **Search / canonical ambiguity**.
