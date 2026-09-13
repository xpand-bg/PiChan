# PiChan V1 — Feature UI Components

**Status:** DESIGN HQ — LOCKED FOUNDATION  
**Product version:** V1.0  
**Design system revision:** 1.0  
**Date:** 2026-09-13  
**Owner:** PiChan Design HQ

This document extends `UI_COMPONENT_LIBRARY_V1.md` with the reusable feature-level components required by the locked V1 build plan. It does not add product scope.

The base component library defines the shared visual grammar. This document covers the V1 flows that sit outside the Passport reference screen.

---

## 1. Radar Signal Card

Organic Radar cards must include:

- project/token identity
- chain
- signal/event title
- short factual reason
- **Why on Radar**
- relevant freshness/time
- compact Reputation / Risk / Confidence context only where useful
- Passport destination

Rules:

- organic order/ranking is not purchasable
- no fake urgency or trading-call language
- market movement alone is not enough to make the card look like a PiChan finding
- `Why on Radar` must be visible without opening a hidden technical page

States:

- normal
- new asset
- verified/canonical
- material event
- stale supporting source
- partial provider outage
- loading
- error

---

## 2. Sponsored Sighting Card

Paid visibility uses a separate component from organic Radar.

Required:

- explicit `Sponsored` label
- project/token identity
- campaign message/approved destination
- visual treatment distinct from organic Signal cards
- no styling that implies PiChan endorsement

Forbidden:

- copying organic `Why on Radar` styling as if the placement were evidence-selected
- changing Reputation, Risk or Confidence appearance because the project paid
- hiding sponsorship in tooltip/metadata only

States:

- approved/active
- scheduled
- ended
- campaign unavailable/error for project-side management

---

## 3. Search Result / Ambiguity Row

Supports:

- exact address/mint result
- name result
- ticker result
- creator/deployer wallet result
- same-name/same-ticker ambiguity

Required fields where relevant:

- identity
- chain
- address/mint
- canonical/claim/verification state
- result type

Rules:

- never silently route ambiguous name/ticker searches to one asset
- exact address/mint match may receive stronger priority
- chain must remain visible where ambiguity is possible

---

## 4. Alert Row / Alert Detail

Alert row:

- project identity
- event/finding type
- materiality/severity when applicable
- timestamp
- unread/read state
- compact reason

Alert detail:

- what changed
- before → after when applicable
- evidence footer
- Passport / Flight Recorder destination

States:

- unread
- read
- delivery pending
- delivered
- deduplicated/suppressed where surfaced operationally
- stale supporting evidence
- error

No price-target alert component exists in V1.

---

## 5. Filter / Sort / Segmented Control

Use for Radar groups, chain filters, lists and management views.

Required states:

- default
- selected
- disabled
- loading/locked while query updates where necessary

Rules:

- controls must not depend on color alone
- mobile uses compact chips, segmented controls or bottom-sheet filters depending count/complexity
- desktop may expose inline controls

---

## 6. Tabs

Tabs are secondary navigation inside a screen, never substitutes for the four public product pillars.

Required:

- selected label + non-color indicator
- keyboard navigation on web
- overflow strategy for small screens

Do not create a fifth public pillar through a tab treatment.

---

## 7. Toast / Inline Feedback

Use for:

- copied address
- Watch added/removed
- settings saved
- report submitted
- signature/payment errors

Rules:

- transient toasts never contain the only copy of critical failure information
- important errors also remain inline at the affected control/surface
- success green is allowed for successful UI action confirmation, not investment safety

---

## 8. Wallet Connect / Signature Component

Supports EVM and Solana wallet flows.

Required presentation:

- wallet/network context
- purpose of signature
- what the signature proves
- clear statement that wallet control does not automatically prove whole-project ownership

States:

- disconnected
- connecting
- connected
- wrong/unsupported network where relevant
- signature requested
- signing
- signed
- user rejected
- wallet/provider error
- session expired

Never obscure the address being used for the claim/verification action.

---

## 9. Claim / Authority Verification Status

Required states:

- eligible / Unclaimed
- claim started
- signature required
- submitted / pending review
- more evidence requested
- Claimed
- Authority Verified
- rejected
- disputed
- superseded/re-review required where product logic supports it

Rules:

- `Claim this Passport` is not a purchase CTA
- claim/verification state is visually separate from Reputation, Risk and Confidence
- payment is never required for claim, factual correction or project response

---

## 10. Report / Dispute Form

Required:

- target project/finding context
- reason/category
- explanation
- evidence/reference attachment or link capability where implemented
- submission confirmation

States:

- draft
- validation error
- submitting
- submitted
- under review
- resolved
- rejected/closed with reason where appropriate

Historical findings are corrected transparently; they are not silently erased by the UI.

---

## 11. My PiChan List Item

Reusable for:

- Watches
- Alerts
- Claims / Managed Projects
- Telegram connection

Required:

- clear destination
- status
- optional unread/count context

Keep account complexity minimal and wallet-first.

---

## 12. Managed Project / Project Control Center Status

Required public-management context:

- project identity
- claim/verification state
- transparency completeness
- Project Inbox count
- Passport Pro entitlement state

Rules:

- project-side controls cannot directly edit PiChan Reputation, Risk, Confidence or historical findings
- free truth-management actions remain visibly available without Pro

---

## 13. Project Inbox Item

Required:

- item type
- project/finding context
- priority/status
- received/updated time
- next action

Possible types include:

- correction request
- response opportunity
- verification/review request
- monitoring/admin workflow item supported by V1

States:

- new
- open
- awaiting project
- awaiting PiChan/admin
- resolved
- closed

Pro may enhance workflow/analytics but may not gate the project's ability to correct factual information or respond to findings.

---

## 14. Passport Pro / Entitlement State

Required states:

- free/no entitlement
- active
- expiring soon
- expired
- renewal invoice created
- renewal pending confirmation

Required information where relevant:

- project receiving entitlement
- active-until date
- included operational capabilities
- renewal action

Rules:

- entitlement belongs to the Project
- expiry disables paid capabilities only
- claim, verification, public Passport, official links/wallet declarations and independent intelligence remain intact

---

## 15. Crypto Invoice / Payment Component

Required fields:

- product/service
- project receiving the product/service
- quoted commercial price
- settlement asset
- settlement network
- exact amount
- destination address
- copy action
- invoice expiry
- payment status
- confirmation status
- transaction reference when available
- entitlement/campaign/priority result

Required states:

- invoice ready / awaiting payment
- payment detected
- confirming
- confirmed
- activated/completed
- expired
- unsupported/wrong settlement context
- verification error / retry

Rules:

- network and asset must never be visually ambiguous
- expired invoices do not appear payable without regeneration/requote
- payment does not imply approval for Priority Review or Sponsored Sighting
- billing state never changes independent intelligence styling

---

## 16. Priority Review State

Required copy distinction:

- paid faster queue/service priority
- approval remains evidence/policy dependent

States:

- not requested
- invoice pending
- paid / queued
- under review
- more evidence requested
- approved outcome
- rejected outcome
- completed

Never use `Guaranteed`, `Approved because paid`, or equivalent language.

---

## 17. Launch Pack State

Project-side one-time product/bundle presentation.

Required:

- exact included deliverables/capabilities
- payment state
- fulfillment/progress state where relevant

Do not represent Launch Pack as improved Reputation/Risk/Confidence.

---

## 18. Telegram Connection / Notification Settings

Required states:

- not connected
- connection in progress
- connected
- delivery enabled/disabled
- connection error

Settings may include supported alert preferences/cooldowns but no price-target alert UI.

Telegram scan/share outputs must preserve the same intelligence vocabulary as web.

---

## 19. Share Component

Required:

- canonical Passport link
- copy link
- native share where supported
- approved share-card preview/asset when generated

Share artwork must use locked Production Assets 2.2 and must not change evidence or score semantics for marketing effect.

---

## 20. Admin Review Queue Item

Admin surfaces may be visually simpler but reuse the same status language.

Required context where applicable:

- subject/project
- workflow type
- evidence/status
- priority state
- payment/entitlement context only where operationally necessary
- audit trail access

Types include:

- claim/verification review
- dispute/correction
- Priority Review
- Sponsored Sighting campaign review
- payment/entitlement inspection

Admin UI must not provide an untracked shortcut for rewriting independent intelligence/history.

---

## 21. Cross-feature implementation rule

All feature components must reuse:

- `PRODUCT_UI_TOKENS_V1.md`
- the base primitives in `UI_COMPONENT_LIBRARY_V1.md`
- standard Evidence Footer
- locked semantic status language
- Production Assets 2.2

No feature team may introduce a second visual language for Radar, billing, project management or admin.

Screen-specific composition can differ, but component semantics remain shared.