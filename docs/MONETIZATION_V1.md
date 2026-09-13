# PiChan V1 — Monetization & Crypto Billing

**Status:** LOCKED — V1 business and billing source of truth  
**Version:** 1.0  
**Updated:** 2026-09-13  
**Decision owner:** PiChan Product HQ

## 1. Core principle

PiChan monetizes **project tooling, analytics, monitoring, workflow and clearly separated visibility**.

Payment must never change PiChan's independent intelligence.

Projects can pay for better operational tools and more reach. They cannot pay to:

- improve Reputation
- suppress or downgrade Risk Signals
- increase Data Confidence
- remove or rewrite Flight Recorder history
- alter canonical / authority-verification outcomes
- alter transparency eligibility
- alter organic Radar ranking

> **Money can buy tools, speed and clearly labelled visibility. Money cannot buy trust.**

## 2. Payment rule

All paid PiChan V1 products are settled in **crypto only**.

V1 does not require card or fiat checkout.

Exact prices are **TBD**.

Accepted settlement assets and payment networks are **TBD** and must remain configurable.

PiChan should be designed stablecoin-first for simple commercial pricing, but no specific token or network is locked by this document.

## 3. Simple V1 billing model

PiChan V1 does **not** use automatic recurring wallet withdrawals or subscription smart contracts.

Passport Pro uses **fixed-duration access with manual crypto renewal**.

Recommended selectable periods are configurable and may include:

- 1 month
- 3 months
- 12 months

The final commercial periods and prices may be changed without changing the entitlement architecture.

Flow:

```text
Choose paid product / period
          ↓
PiChan creates invoice
          ↓
User pays supported crypto
          ↓
PiChan verifies onchain payment
          ↓
Invoice becomes PAID
          ↓
Entitlement becomes ACTIVE
          ↓
Expiry reminder
          ↓
Manual renewal or expiry
```

No automatic charge occurs when an entitlement expires.

If Passport Pro expires, the project remains claimed/verified and its public evidence/history remains intact. Only Pro capabilities become unavailable.

## 4. One universal payment engine

All V1 paid products use the same billing primitives:

```text
Product
   ↓
Invoice
   ↓
Crypto Payment
   ↓
Confirmation
   ↓
Entitlement / Campaign / Queue Priority
```

Core billing objects:

- `Product`
- `Invoice`
- `Payment`
- `Entitlement`
- `Campaign` where sponsored visibility is purchased

The billing model must separate:

- product / entitlement type
- quoted commercial price
- quote currency / pricing reference
- accepted crypto asset
- settlement network
- settlement amount
- payer wallet where known
- destination / invoice reference
- invoice expiry
- payment status
- transaction hash
- confirmation state
- entitlement start
- entitlement end

This prevents commercial pricing from being hard-coded to a volatile token.

## 5. Renewal behavior

Passport Pro is attached to the **Project**, not to one individual person/wallet.

If an active entitlement is renewed early, the new duration extends from the existing expiry rather than shortening the existing paid period.

Example:

```text
Current Pro expiry: October 13
Renew one month on October 5
New expiry: November 13
```

V1 reminders may be delivered in-app and through connected Telegram channels before expiry.

## 6. Free public intelligence

Research users receive PiChan's core public intelligence without payment.

V1 does not require a paid researcher subscription.

## 7. Free claimed Passport

Projects may claim their Passport and improve public truth without payment.

Free project actions include:

- claim Passport
- prove wallet / authority control where supported
- provide official links
- provide project metadata
- declare official project wallets
- submit corrections
- respond to PiChan findings
- submit disputes
- complete transparency disclosures
- earn any objective transparency status
- use the basic Project Inbox to receive and answer factual requests

These remain free because PiChan benefits from better public evidence and because projects must never need to pay to correct the public record or respond to factual findings.

## 8. Passport Pro

Passport Pro is the primary recurring V1 project product.

It is a **Project Intelligence Console**, not a paid verification badge.

Core direction:

- Project Control Center
- advanced Passport analytics
- aggregated research-interest analytics
- Passport views
- search interest where available
- Telegram scan analytics
- Watch additions / watcher growth in aggregate
- advanced project monitoring
- configurable team alerts
- historical project analytics
- team members and roles
- enhanced share assets
- advanced Project Inbox workflow
- priority support

Analytics are aggregated and must not reveal individual researchers/watchers.

Exact Pro price and package duration remain TBD.

## 9. Project Control Center

Claimed projects access a project-side management experience showing, as relevant:

- current Reputation / Unrated state
- current Data Confidence
- current Risk Signal summary
- public information completeness
- project disclosures
- recent PiChan observations
- items requiring attention
- Project Inbox
- Passport/Telegram/Watch analytics for Pro projects
- Pro entitlement status and renewal

The Project Control Center never provides a mechanism to edit PiChan-generated intelligence conclusions.

## 10. Project Inbox

Claimed projects receive factual workflow items such as:

- new PiChan finding requiring project context
- unresolved data question
- community report
- request to identify a project-associated wallet
- claim / verification workflow message

Basic receive/respond capability is free.

Advanced workflow, history, assignment and configurable notification controls may require Passport Pro.

A project response becomes evidence/context; it does not automatically remove a finding or increase Reputation.

## 11. Priority Review

Priority Review is an optional one-time paid product.

Payment buys faster handling only.

It must never guarantee:

- claim approval
- canonical status
- authority verification
- Reputation improvement
- Risk Signal removal
- Data Confidence improvement
- transparency eligibility

Priority Review uses the universal crypto invoice/payment engine.

## 12. Launch Pack

Launch Pack is an optional one-time launch-oriented product.

It may bundle:

- priority review workflow
- a fixed Passport Pro period
- Project Control Center setup
- official-wallet/transparency setup assistance
- launch share assets
- monitoring setup

Exact contents, duration and price remain TBD.

It uses the same crypto payment engine and creates explicit entitlements/services after confirmed payment.

## 13. Sponsored Sighting

Sponsored Sighting is paid visibility in a **clearly separated sponsored Radar surface**.

It is part of the V1 commercial model but is never mixed into organic evidence-driven ranking.

Rules:

- always labelled `Sponsored`
- organic `Signals`, `New`, `Verified`, creator/reputation/event logic remain independent
- advertiser may provide approved creative/short message
- PiChan-generated Reputation, Risk, Confidence and verification state remain independent and uneditable
- minimum identity/eligibility policy is configuration/admin controlled
- unresolved serious identity disputes may make a project ineligible
- payment does not guarantee campaign approval

Sponsored Sighting uses the same invoice/payment engine plus a campaign state such as:

`pending_payment → paid → review → scheduled → live → complete`

Exact campaign products/prices remain TBD.

## 14. Transparency rule

Any PiChan transparency designation is earned through objective evidence/disclosure criteria.

It cannot be purchased.

A free project that satisfies the criteria can earn it. A paying project that does not satisfy the criteria cannot.

Embeddable/public transparency badges may be offered without making transparency status itself paid.

## 15. Privacy rule

Project analytics must be aggregated.

Projects may see metrics such as:

- Passport views
- Telegram scans
- Watch additions
- aggregate engagement
- aggregate conversion funnels

They must not receive identities of individual users or wallets that researched/watched them unless a future user-controlled feature explicitly shares that information.

## 16. Pricing rule

No exact V1 price is locked in product architecture.

Product HQ will set prices later using actual traffic, demand, conversion, operating cost and willingness-to-pay testing.

Pricing changes must be configuration changes and must not require intelligence-model changes.

## 17. Expiry and downgrade rule

When Passport Pro expires:

Remain intact:

- claim state
- authority/canonical verification
- official links
- declared wallets
- project responses
- transparency status
- Reputation / Risk / Confidence
- Flight Recorder
- public Passport

Paid-only operational capabilities become unavailable until renewed.

No public trust state is revoked because a project stopped paying.

## 18. Development requirement

Developer HQ must implement commercial state separately from intelligence state.

There must be no code path where successful payment directly changes:

- Reputation
- Risk Signals
- Data Confidence
- Flight Recorder events
- canonical / authority verification outcomes
- transparency eligibility
- organic Radar ranking

All paid capabilities must be explicit entitlements, service workflow state or labelled campaign state.
