# PiChan V1 — Me / Project Control Center / Crypto Billing High-Fidelity Refinement

**Status:** DESIGN HQ — HIGH-FIDELITY DRAFT  
**Product version:** V1.0  
**Design revision:** v0.1  
**Date:** 2026-09-14  
**Owner:** PiChan Design HQ

This document translates `ME_PROJECT_BILLING_UI_SPEC_V1.md` into the first high-fidelity account/project/billing design pass. It does not expand V1 scope.

## 1. Me direction

`Me` is the user/account hub, not a portfolio.

Locked hierarchy for this draft:

1. wallet-authenticated identity
2. Watches
3. Alerts
4. Telegram
5. Notifications
6. Managed Projects
7. Billing & invoices
8. Security & sessions
9. Sign out

Wallet copy explicitly says authentication proves control of the connected address, not project ownership.

## 2. Managed Projects

Project cards expose:

- project identity
- chain
- claim / authority-verification state
- Passport Pro state
- concise attention state
- Project Control Center entry

Commercial state never changes the styling/value of independent public intelligence.

## 3. Project Control Center direction

The Control Center is organized around actionability rather than vanity metrics.

Primary modules:

- Public State
- Needs Attention
- Recent PiChan observations
- Project Inbox
- Passport Pro
- Pro analytics preview / active analytics when entitled

The Public State block keeps Reputation, Risk and Data Confidence separate and includes an explicit commercial-trust boundary.

## 4. Passport Pro direction

Passport Pro is presented as a **Project Intelligence Console**.

Draft purchase flow:

```text
Explore Passport Pro
  ↓
Choose 1 / 3 / 12 month access period
  ↓
Review current price at checkout
  ↓
Generate crypto invoice
  ↓
Pay
  ↓
Confirm
  ↓
Pro entitlement active
```

The period selector does not hard-code final V1 prices.

## 5. Crypto checkout direction

Internal design pattern: **Exact Invoice**.

The payment screen leads with:

- target project
- product / access period
- quoted price
- settlement asset
- settlement network
- exact amount
- destination + copy + QR
- invoice expiry
- payment state progression

The reference invoice uses explicit sample data only and is labelled `Example invoice`.

Production asset/network/amount values remain invoice-driven/configurable.

## 6. Payment states represented

The current references cover:

- awaiting payment
- payment detected / processing
- confirmed / Pro active
- expired invoice
- mismatch/exception behavior at system-QA level

Processing explicitly tells the user not to pay again.

Expired explicitly tells the user not to use the old invoice and provides a new-invoice/requote action.

## 7. Desktop composition

### Me

Main column:

- wallet identity
- account overview
- managed-project list

Side rail:

- account destinations
- selected managed-project preview

### Project Control Center

Main:

- project/public state
- attention/workflow
- observations
- Project Inbox

Side rail:

- Passport Pro state
- Pro capability summary
- upgrade/renewal action
- Pro analytics preview/active metrics

### Checkout

Main:

- exact payment instructions
- QR/address
- expiry
- status progression

Side rail:

- order summary
- project/product/period
- commercial rules
- payment-safety reminders

## 8. Visual artifacts

Reference artifacts generated in this pass:

- `PiChan_Me_Mobile_v01.png`
- `PiChan_Me_Desktop_v01.png`
- `PiChan_Project_Control_Center_Mobile_v01.png`
- `PiChan_Project_Control_Center_Desktop_v01.png`
- `PiChan_Passport_Pro_Mobile_v01.png`
- `PiChan_Crypto_Invoice_Mobile_v02.png`
- `PiChan_Crypto_Invoice_Desktop_v01.png`
- `PiChan_Crypto_Payment_States_Mobile_v01.png`
- `PiChan_Me_Billing_System_v01.png`

## 9. QA before final lock

Before locking this system, review:

- signed-out / connect-wallet Me state
- wallet signature rejected / expired challenge
- multiple managed-project density
- no managed projects
- claimed project with no Pro
- active Pro / renewal / early renewal
- expired Pro downgrade
- invoice loading / regeneration
- payment detected after invoice expiry
- wrong amount / wrong network exception wording
- invoice list/history
- accessibility and keyboard focus
- exact mobile bottom-sheet/route behavior for checkout and billing detail

The architecture is strong enough to continue to final component/state QA rather than redesign the concept.
