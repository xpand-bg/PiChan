# PiChan V1 — Final UI Component / State QA Lock

**Status:** FINAL LOCK — UI FOUNDATION + PASSPORT REFERENCE  
**Product version:** V1.0  
**Date:** 2026-09-13  
**Decision owner:** PiChan Design HQ / Product HQ

This document records the final QA pass of the V1 UI foundation and Project Passport reference against the locked build plan and UI execution contract.

It does **not** mean every V1 screen has already been visually composed. It means the reusable visual system, component semantics, cross-feature states and Project Passport reference are now locked. Remaining screen families must be designed from this system and may not introduce a second visual language.

---

## 1. QA inputs reviewed

Product/build authority:

- `V1_FINAL_LOCK.md`
- `PRODUCT_SPEC_V1.md`
- `INTELLIGENCE_MODEL_V1.md`
- `MONETIZATION_V1.md`
- `V1_BUILD_PLAN.md`
- `UI_DESIGN_REQUIREMENTS_V1.md`

Design system:

- `UI_DESIGN_SYSTEM_V1.md`
- `PRODUCT_UI_TOKENS_V1.md`
- `UI_COMPONENT_LIBRARY_V1.md`
- `UI_FEATURE_COMPONENTS_V1.md`
- `UI_CORE_STATE_MATRIX_V1.md`
- `PASSPORT_UI_SPEC_V1.md`
- `PASSPORT_STATE_MATRIX_V1.md`
- Production Assets 2.2

---

## 2. Issues found in the final QA and corrected

### A. Build-plan features were broader than the Passport component library

The Passport component library correctly covered intelligence/research primitives, but the locked V1 build plan also requires Radar sponsorship, alerts, claims/signatures, Project Inbox, Pro entitlements, crypto invoices, Priority Review, Telegram, report/dispute and admin workflows.

**Correction:** added `UI_FEATURE_COMPONENTS_V1.md` with locked cross-feature component contracts.

### B. Passport state matrix was not sufficient as the only V1 state matrix

The Passport matrix covers intelligence uncertainty well, but V1 also needs operational states for Search, Watch, Alerts, Claims, Billing, Sponsored Sighting, Project Inbox, Pro expiry and admin review.

**Correction:** added `UI_CORE_STATE_MATRIX_V1.md` as the cross-feature state contract.

### C. Product lock still referenced the previous brand asset revision

`V1_FINAL_LOCK.md` still contained Production Asset Revision 2.1 after the corrected identity package was moved to 2.2.

**Correction:** synchronized the product lock to **Production Asset Revision 2.2** and added the current Design HQ source documents to the source-of-truth hierarchy.

No V1 feature scope was added by these corrections.

---

## 3. Build-plan → UI coverage audit

| Build phase / locked feature | UI contract | QA result |
|---|---|---|
| Phase 4 — Passport | Passport spec, Decision Strip, PiChan Brief, evidence, risk, holders, liquidity, Creator preview, history, actions | PASS |
| Phase 5 — Flight Recorder | Flight Recorder event component + evidence/history semantics | PASS |
| Phase 6 — Creator Intelligence | Creator preview/base evidence components; full screen must reuse same entity/evidence grammar | PASS foundation |
| Phase 7 — Watch + Alerts | Watch control, Alert Row/Detail, notification states | PASS |
| Phase 8 — Radar | Organic Radar Signal card, Why on Radar, filters, Sponsored Sighting separation | PASS foundation |
| Phase 9 — Search | Global search, result/ambiguity rows, same-name/ticker state | PASS |
| Phase 10 — Claims / verification | Wallet connect/signature, claim and authority state components | PASS |
| Phase 11 — Telegram / share | Telegram connection/settings + Share component | PASS |
| Phase 12 — My PiChan | reusable Watch/Alert/Managed Project/Telegram list item patterns | PASS foundation |
| Phase 13 — Project Control Center | managed-project status, Project Inbox, free-vs-Pro separation | PASS foundation |
| Phase 14 — Crypto billing | invoice/payment, entitlement, Priority Review, Launch Pack, Sponsored campaign state | PASS |
| Phase 15 — Report / dispute / admin | report/dispute forms + admin queue component/state contract | PASS foundation |
| Phase 16 — hardening | accessibility, focus, touch, reduced motion, loading/error/outage contracts | PASS contract |
| Phase 17 — launch calibration | responsive semantic parity, Unknown/stale/provider-source visibility, final identity use | PASS contract |

`PASS foundation` means the reusable component/state contract is locked, while the feature still requires its own final screen composition before Developer HQ treats that screen as visually complete.

---

## 4. Locked component families

### Shared research/product primitives

- responsive app shell
- global search / command field
- project identity block
- chain/network + verification/status chips
- address row
- unified Decision Strip
- Reputation segment
- Risk summary / Risk Finding
- Data Confidence segment
- PiChan Brief
- Evidence Footer
- freshness/source states
- market/metric rows
- holder/entity records
- Creator preview
- Flight Recorder events
- Watch control
- buttons
- modal/bottom sheet
- feedback/toast
- filters / sort / segmented controls / tabs
- loading / empty / Unknown / stale / conflict / outage / error states

### Feature-level V1 components

- Radar Signal card
- Sponsored Sighting card
- Search ambiguity row
- Alert row/detail
- wallet connect/signature
- claim / authority status
- report/dispute form
- My PiChan list item
- Managed Project / Control Center status
- Project Inbox item
- Passport Pro / entitlement state
- crypto invoice/payment
- Priority Review state
- Launch Pack state
- Telegram connection/settings
- Share component
- Admin review queue item

No missing component family was found for a locked V1 user-facing or operational flow after the corrections above.

---

## 5. Locked state families

### Intelligence/data states

- loading
- complete
- no data yet
- Unrated
- Unknown / unsupported
- stale
- conflicting
- provider partial outage
- error / retry
- new/unknown asset
- Claimed / Unclaimed
- Authority Verified
- Canonical
- Disputed

### Interaction/account states

- idle / hover / pressed / focus / disabled
- loading/pending
- login/connect required
- permission/role restricted
- Watch / Watching / add/remove failure
- wallet connecting / signing / rejected / provider error

### Commercial/workflow states

- free / Pro active / expiring / expired
- invoice ready / awaiting payment / detected / confirming / confirmed / expired / verification error
- Priority Review queued / under review / completed approved or rejected
- Sponsored draft / pending / scheduled / active / rejected / ended
- Project Inbox new / open / awaiting project / awaiting PiChan / resolved / closed
- report/dispute draft / submitting / under review / resolved / rejected
- admin queue new / assigned / blocked / resolved / rejected

No happy-path-only gap remains in the reusable state contract.

---

## 6. Semantic QA — PASS

The locked UI system preserves the non-negotiable product semantics:

- Reputation, Risk Signals and Data Confidence remain separate outputs
- no composite safety/trust score
- Unknown does not look positive
- strong red/amber semantic color is reserved primarily for Risk/operational severity
- High Confidence is not represented as safety green
- evidence provenance/freshness remains accessible
- project/payment state cannot alter PiChan intelligence styling
- organic Radar and Sponsored Sighting are separate components
- claim/authority state is separate from reputation/risk/confidence
- payment never implies approval
- Pro expiry never removes free truth-management/public intelligence
- historical evidence is corrected transparently rather than silently erased

---

## 7. Responsive QA — PASS

Locked behavior:

- responsive web, mobile-first
- four primary destinations remain Radar / Search / Watch / Me
- Passport/Creator/history remain detail routes, not extra pillars
- no primary mobile horizontal scrolling
- long technical values use controlled truncation + reveal/copy
- desktop increases density/context without changing semantics
- Passport reference uses the same semantic hierarchy on mobile and desktop
- desktop research/context split is ~68/32 with sticky context rail where useful

---

## 8. Accessibility / production QA — PASS contract

The system requires:

- WCAG 2.2 AA target
- visible keyboard focus
- keyboard navigation for core web controls
- accessible names for icon-only controls
- status never by color alone
- ~44×44 px practical touch targets
- reduced-motion behavior
- textual equivalents for essential chart/data meaning
- SVG brand masters rather than reconstructed artwork
- no Unicode placeholder icons in production

Implementation still must be tested in the running product; this lock defines the acceptance contract.

---

## 9. Brand QA — PASS

The UI lock consumes:

- Brand Guidelines v1.0
- Production Assets **2.2**
- canonical files from `brand/vector/`

Rules remain:

- do not redraw the PiChan bird
- do not reconstruct the wordmark
- do not add white halos/keylines except the explicitly approved light-background asset
- do not generate logo artwork inside product code
- token/project artwork must never substitute the PiChan bird

---

## 10. Passport reference QA — PASS / LOCKED

The Project Passport is now the reference screen for the V1 visual system.

Locked principles:

- identity + intelligence before price
- unified Decision Strip with three independent outputs
- PiChan Brief as the primary branded research moment
- open research sections rather than card soup
- Evidence Footer as a signature reusable pattern
- Risk rows with narrow severity treatment rather than exchange/casino styling
- market context visually secondary to PiChan intelligence
- structured mobile holder records
- desktop 68/32 research/context composition
- claim/action visibility matches actual state
- mobile + desktop preserve one semantic model

Future screens may not reinterpret these primitives without explicit Design HQ change control.

---

## 11. What is locked vs what remains to design

### Locked now

- product UI visual direction
- product tokens
- typography/spacing/radius/border/elevation model
- semantic color rules
- iconography rule
- app-shell model
- reusable core component grammar
- cross-feature component contracts
- cross-feature state matrix
- Passport mobile/desktop reference composition
- Passport detailed intelligence state behavior
- accessibility/interaction contract
- Production Asset 2.2 use

### Still requires screen-specific Design HQ work

- Radar final screen composition
- Search/results final screen composition
- Flight Recorder full-screen composition
- Creator Intelligence full-screen composition
- Watchlist / Alerts screens
- Me
- Claim/verification flow composition
- Project Control Center / Inbox screens
- crypto billing screens
- report/dispute flow
- operational admin surfaces

Those screens are **not free to redesign the system**. They must reuse the locked foundation and their existing feature/state contracts.

---

## 12. Final decision

**UI foundation:** LOCKED.  
**Component semantics:** LOCKED.  
**Cross-feature states:** LOCKED.  
**Project Passport reference:** LOCKED.  
**Brand consumption:** Production Assets 2.2 LOCKED.  
**V1 product scope:** unchanged and FINAL LOCKED.

The next Design HQ task is **Radar**, built from this locked system.

Any new component/state introduced later must be required by an already-locked V1 behavior or explicitly approved through change control. Visual novelty alone is not a reason to fork the design system.