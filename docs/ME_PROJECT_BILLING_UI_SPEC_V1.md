# PiChan V1 — Me, Project Control Center & Crypto Billing UI Spec

**Status:** DESIGN HQ — RESEARCH / CONCEPT DRAFT  
**Product version:** V1.0  
**Date:** 2026-09-14  
**Owner:** PiChan Design HQ

This document translates the locked `PRODUCT_SPEC_V1.md`, `MONETIZATION_V1.md` and `UI_DESIGN_REQUIREMENTS_V1.md` into the user/account, managed-project and crypto-billing design architecture.

It does not change pricing, accepted assets/networks, entitlement rules or intelligence semantics.

---

## 1. Product questions

### Me

Answers:

> **What is connected to my PiChan account?**

### Project Control Center

Answers:

> **What does my claimed project need, and what can I manage?**

### Billing

Answers:

> **What am I buying, for which project, how exactly do I pay, and what happens after payment?**

---

## 2. Core separation

Three different concepts must never be collapsed:

1. **User/account state** — wallet-authenticated PiChan session, Watches, Alerts, Telegram, notification settings.
2. **Project-management state** — claimed/verified project operations, disclosures, inbox, responses, entitlement.
3. **Independent intelligence state** — Reputation, Risk, Data Confidence, verification evidence, Flight Recorder and organic Radar.

Commercial state may unlock project-side tools. It must not visually or logically imply that payment improves independent intelligence.

> **Payment → entitlement / service / labelled campaign. Payment never → trust.**

---

## 3. Me information architecture

Public route: `/me`.

Mobile primary navigation remains:

- Radar
- Search
- Watch
- Me

Recommended Me hierarchy:

1. Wallet-authenticated identity
2. Watches
3. Alerts
4. Telegram connection
5. Notification settings
6. Managed Projects
7. Billing & invoices
8. Security & sessions
9. Sign out

Me is not a portfolio and must not contain balances, P&L or trading positions.

---

## 4. Wallet-first identity UX

V1 prefers wallet-first identity.

The connected wallet block must show:

- truncated wallet address
- copy/full-view affordance
- authenticated/session state
- explicit wording that wallet authentication proves address control, not project ownership

### Authentication UX principles

For EVM wallets, use a Sign-In with Ethereum style flow with human-readable signing context, origin/domain binding, nonce and time-bounded session semantics.

For Solana wallets, use the same human-readable challenge principles and supported Sign-In-With wallet standards where available.

The UI must never ask the user to sign opaque hex/JSON as a normal authentication step.

Session/security surfaces should support:

- active session
- expired session
- reconnect required
- signature rejected
- invalid/expired challenge
- sign out

---

## 5. Managed Projects

`Me → Managed Projects` is the entry point to claimed-project management.

Each project row should show:

- project identity
- chain
- claim / authority-verification state
- Passport Pro state
- concise attention count / urgent workflow state
- Project Control Center destination

Do not add a new primary navigation pillar for project teams.

---

## 6. Project Control Center

The Project Control Center is a project-side management experience.

Recommended V1 hierarchy:

1. Project identity and public Passport destination
2. **Public State** — independent intelligence snapshot
3. **Needs Attention**
4. Recent PiChan observations
5. Project Inbox
6. Information / disclosure completeness
7. Official-wallet management
8. Passport Pro entitlement / upgrade / renewal
9. Pro analytics when entitled

### Public State

May show:

- Reputation / Unrated
- Risk summary
- Data Confidence
- disclosure/information completeness

The screen must visually state that commercial status cannot alter these intelligence outcomes.

### Needs Attention

Examples:

- Project Inbox items requiring context
- incomplete transparency disclosures
- official wallet awaiting stronger verification
- dispute/correction workflow requiring action

Attention is workflow priority, not Risk severity.

---

## 7. Passport Pro presentation

Passport Pro is a **Project Intelligence Console**, not a verification badge and not a researcher subscription.

The Pro module may explain access to:

- aggregate research-interest analytics
- Passport views
- Watch additions / watcher growth in aggregate
- Telegram scan analytics
- search interest where available
- advanced project monitoring
- configurable team alerts
- historical project analytics
- team roles
- enhanced share assets
- advanced Project Inbox workflow
- priority support

Analytics remain aggregate and must not reveal individual researchers/watchers.

### Free state

Show the Pro capability set as an operational upgrade.

Do not visually mute or degrade the public intelligence state because Pro is inactive.

### Active state

Show:

- entitlement active
- active-until date
- renewal action
- enabled Pro areas

### Expired state

Keep public truth/verification/history intact.

Only paid operational capabilities become unavailable until renewal.

---

## 8. Fixed-duration purchase flow

Passport Pro uses fixed-duration access with manual crypto renewal.

Recommended flow:

```text
Project Control Center
      ↓
Explore Passport Pro
      ↓
Choose access period
      ↓
Review product + project
      ↓
Generate invoice
      ↓
Pay exact crypto invoice
      ↓
Payment detected
      ↓
Confirming
      ↓
Paid
      ↓
Project entitlement active
```

Recommended selectable periods may include:

- 1 month
- 3 months
- 12 months

Exact commercial periods and prices remain configuration-driven.

No automatic recurring wallet withdrawal exists in V1.

---

## 9. Crypto invoice anatomy

Every invoice must clearly show:

- invoice identifier/status
- product/service
- target project
- access period/service quantity where applicable
- quoted commercial price/reference currency
- settlement asset
- settlement network
- **exact settlement amount**
- destination address/reference
- copy action
- QR where useful
- invoice expiry
- payment status
- confirmation state
- transaction hash/reference once detected
- resulting entitlement/service state

Asset and network must be visually adjacent enough that the user cannot reasonably mistake one for the other.

Required warning pattern:

> **Send only {asset} on {network}.**

Wrong-asset/network warnings must be factual, not panic-styled.

---

## 10. Example data vs commercial lock

High-fidelity references may use an explicitly labelled **Example invoice** to demonstrate layout.

Any displayed amount, token or network in a reference is sample data only unless separately locked by Product HQ.

Production values must come from configuration / invoice data.

---

## 11. Payment state model

The UI should support a simple, understandable state machine:

- `ACTIVE` / awaiting payment
- `PROCESSING` / payment detected, awaiting confirmation
- `COMPLETED` / confirmed and entitlement/service activated
- `EXPIRED`
- `FAILED`

Where implementation needs an exception/review state for a mismatched transfer, it must not display as completed and must not auto-activate an entitlement until the payment is valid.

### Active

Show destination, exact amount, asset, network and countdown/expiry.

### Processing

Show:

- payment detected
- transaction reference
- amount/network detected
- confirmation state
- explicit instruction not to send again

### Completed

Show:

- Paid / Completed
- resulting entitlement/service
- active-until date where applicable
- destination back to Project Control Center

### Expired

- invoice is non-payable
- old destination/amount is not presented as an active payment instruction
- primary action is regenerate/requote

### Failed / exception

- explain that entitlement was not activated
- preserve payment/transaction reference where one exists
- provide clear retry/new invoice/support workflow according to implementation state

---

## 12. Renewal behavior

Passport Pro belongs to the **Project**, not to an individual wallet/person.

Early renewal extends from the existing entitlement expiry.

Do not shorten existing paid access.

Renewal UI should make this explicit before payment.

---

## 13. Invoice and entitlement history

Me may provide `Billing & invoices` as an account-level entry point, but every commercial record must remain attached to its target project/product.

Project Control Center should expose the relevant entitlement state directly.

Recommended invoice list fields:

- product
- project
- created date
- amount / settlement asset
- status
- transaction reference where available
- entitlement/service result

---

## 14. Priority Review / Launch Pack / Sponsored Sighting

All V1 paid products reuse the same payment primitives.

The checkout shell should therefore be generic enough for:

- Passport Pro entitlement
- Priority Review service
- Launch Pack service/bundle
- Sponsored Sighting campaign

Commercial copy must preserve each product's trust boundary.

Examples:

- Priority Review: payment buys faster handling only; no outcome guarantee.
- Sponsored Sighting: payment buys labelled visibility only; organic Radar and intelligence remain independent.

---

## 15. Responsive model

### Mobile

- stacked order/payment flow
- large copy/send actions
- no horizontally scrolling invoice data
- bottom sheets/nested routes for secondary configuration

### Desktop

Use the locked PiChan shell.

Recommended billing composition:

- main column: payment instructions/status
- side rail: order summary, project, commercial rules, payment safety

Project Control Center desktop may use a side rail for entitlement/Pro state and analytics preview.

---

## 16. Accessibility

Required:

- wallet/address copy actions have accessible names
- payment status is textual, not color-only
- countdown expiry has a textual absolute expiry available to assistive technology
- QR is never the only way to obtain the destination
- exact amount and network are readable as text
- status progression uses semantic ordered-step structure
- controls target approximately 44×44 px where practical
- keyboard focus remains visible

---

## 17. Research-derived UX conclusions

Current crypto checkout patterns reinforce several design choices:

- invoice/checkout systems expose explicit payment states instead of treating payment as a single button action
- stablecoin checkout requires the user to understand the selected wallet/asset/network before confirming
- deposit-style stablecoin payment flows require exact amounts and careful handling of network/destination instructions
- wallet sign-in standards use human-readable messages, origin/domain binding and one-time nonces to reduce replay/phishing risk

PiChan should therefore keep authentication, payment and entitlement activation as separate understandable states.

---

## 18. Lock direction

Recommended concept to take into high fidelity:

### Me

**Account Hub** — wallet identity + Watches/Alerts/Telegram + Managed Projects.

### Project side

**Project Control Center** — public state + actionable project workflow + Pro entitlement.

### Billing

**Exact Invoice** — explicit project/product, exact amount, explicit asset/network, expiry, onchain state and entitlement result.

### Non-negotiables

- wallet authentication proves address control, not project ownership
- Passport Pro is a project entitlement, not a verification badge
- free truth/correction workflows remain free
- payment never changes independent intelligence
- no auto-recurring wallet withdrawal in V1
- exact prices and settlement assets/networks remain configurable/TBD
