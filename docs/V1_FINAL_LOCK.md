# PiChan V1 — Final Product Lock

**Status:** FINAL LOCK  
**Version:** 1.0  
**Date:** 2026-09-13  
**Decision owner:** PiChan Product HQ

This document records the final V1 product decision after Product HQ review. It is a lock/index document, not a replacement for the detailed specifications it references.

## 1. V1 launch definition

PiChan V1 launches as an **onchain intelligence, identity, reputation, history and monitoring product** on:

- **Robinhood Chain**
- **Solana**

Supported first-class assets:

- Robinhood Chain ERC-20 fungible assets
- Solana SPL Token
- Solana Token-2022

V2 chain candidates include Base, BNB Chain and Ethereum.

## 2. Four public product pillars

V1 public information architecture is frozen around:

1. **Radar** — what should I investigate?
2. **Project Passport** — what is this and what matters?
3. **Flight Recorder** — what happened?
4. **Watch** — what changes next?

**Creator Intelligence** is a supporting drill-down, not a fifth public pillar.

Claimed-project management is a project-side workflow accessed from `Me / Managed Projects`, not another public pillar.

## 3. Intelligence contract

PiChan keeps three outputs separate:

- **Reputation Grade / Unrated**
- **Risk Signals**
- **Data Confidence**

PiChan never presents lack of evidence as safety.

Important product law:

> **PiChan tells users what we know, what we do not know, what changed, and why it matters. It never pretends uncertainty is safety.**

Evidence is preserved with provenance/freshness and historical state is not silently overwritten.

## 4. Core research loop

```text
Radar / Search / Telegram
          ↓
       Passport
          ↓
Identity + Risk + Supply + Liquidity + Creator
          ↓
   Flight Recorder
          ↓
        Watch
          ↓
        Alert
          ↓
  Return to PiChan
```

## 5. Discovery rule

PiChan does not wait for projects to register.

It may automatically discover/index supported assets and create **Unclaimed Passports** from observed evidence.

Radar surfaces a useful subset because PiChan has an evidence-backed reason to show it.

Organic V1 Radar groups:

- Signals
- New
- Verified

Every organic item should explain **Why on Radar**.

Organic ranking is never for sale.

## 6. Claimed projects

Project claiming exists to improve public identity/transparency and is free.

Free factual actions include:

- claim Passport
- authority verification where supported
- official links
- official wallet declarations
- factual corrections
- project response to findings
- disputes
- transparency disclosures/status eligibility
- basic Project Inbox

Payment is never required to correct truth or respond to PiChan evidence.

A wallet signature proves control of a wallet/authority; it does not automatically prove ownership of an entire project.

## 7. V1 business model

PiChan initially monetizes project-side tools rather than charging research users.

V1 paid products:

- **Passport Pro**
- **Priority Review**
- **Launch Pack**
- **Sponsored Sighting**

Research users retain free core public intelligence in V1.

### Non-negotiable commercial rule

Payment cannot directly change:

- Reputation
- Risk Signals
- Data Confidence
- Flight Recorder history
- canonical / authority-verification outcomes
- transparency eligibility
- organic Radar ranking

## 8. Crypto-only billing

All V1 payments are **crypto-only**.

Exact prices: **TBD**.  
Accepted assets/networks: **TBD/configurable**.

V1 uses a simple fixed-duration/manual-renewal model rather than automatic wallet withdrawals.

```text
Product
  ↓
Invoice
  ↓
Crypto Payment
  ↓
Onchain Confirmation
  ↓
Entitlement / Campaign / Priority
```

Passport Pro belongs to the **Project**, not one individual wallet.

When Pro expires:

- claim remains
- verification remains
- public Passport remains
- official links/wallet declarations remain
- Reputation/Risk/Confidence remain independent
- Flight Recorder remains
- only paid operational capabilities are disabled

## 9. Project Control Center

Claimed projects receive a management experience.

Free layer:

- public information/disclosures
- claim/review state
- corrections/responses
- Project Inbox
- transparency completeness

Passport Pro adds operational value such as:

- aggregated Passport/research analytics
- Telegram scan analytics
- aggregate Watch growth
- advanced project monitoring
- configurable team alerts
- historical project analytics
- team roles
- advanced Inbox workflow
- enhanced share assets

Project analytics must remain aggregated and must not expose identities of individual researchers/watchers.

## 10. Sponsored Sighting

Sponsored Sighting is allowed only in a clearly labelled sponsored surface.

Rules:

- never inserted into organic ranking as if it were organic
- campaign subject to review/eligibility policy
- advertiser cannot edit PiChan Reputation/Risk/Confidence/verification output
- payment does not guarantee campaign approval

## 11. V1 exclusions

V1 does not include:

- chains beyond Robinhood Chain + Solana
- native trade execution
- copy trading
- custody
- portfolio tracking
- price-target alerts
- full trading-terminal charting
- full interactive holder graph
- arbitrary wallet P&L/smart-money terminal
- KOL/social sentiment scoring
- public social/comments layer
- paid researcher plan
- automatic recurring wallet withdrawals
- public developer API
- native mobile app
- autonomous AI investigator
- PiChan token
- NFTs / broad arbitrary-contract analysis

## 12. Source-of-truth hierarchy

Developer HQ and Design HQ must use these documents in this order where their domains overlap:

1. [`PRODUCT_SPEC_V1.md`](./PRODUCT_SPEC_V1.md) — product behavior, screens, scope, acceptance
2. [`INTELLIGENCE_MODEL_V1.md`](./INTELLIGENCE_MODEL_V1.md) — intelligence/evidence semantics
3. [`MONETIZATION_V1.md`](./MONETIZATION_V1.md) — project monetization and crypto billing
4. [`ADR-001-MULTICHAIN-FOUNDATION.md`](./ADR-001-MULTICHAIN-FOUNDATION.md) — multi-chain/domain architecture
5. [`PRODUCT_ARCHITECTURE.md`](./PRODUCT_ARCHITECTURE.md) — high-level product/system architecture
6. [`V1_BUILD_PLAN.md`](./V1_BUILD_PLAN.md) — Developer HQ implementation order
7. [`UI_DESIGN_REQUIREMENTS_V1.md`](./UI_DESIGN_REQUIREMENTS_V1.md) — locked responsive UI/UX execution contract
8. [`UI_FINAL_QA_LOCK_V1.md`](./UI_FINAL_QA_LOCK_V1.md) — final lock for the reusable UI foundation + Passport reference
9. [`UI_DESIGN_SYSTEM_V1.md`](./UI_DESIGN_SYSTEM_V1.md), [`PRODUCT_UI_TOKENS_V1.md`](./PRODUCT_UI_TOKENS_V1.md), [`UI_COMPONENT_LIBRARY_V1.md`](./UI_COMPONENT_LIBRARY_V1.md), [`UI_FEATURE_COMPONENTS_V1.md`](./UI_FEATURE_COMPONENTS_V1.md), [`UI_CORE_STATE_MATRIX_V1.md`](./UI_CORE_STATE_MATRIX_V1.md) and screen/state specs — Design HQ implementation system
10. [`BRAND_SYSTEM.md`](./BRAND_SYSTEM.md) and locked brand masters — visual identity execution

This file records that these decisions have completed Product HQ review.

## 13. UI / Design execution lock

Product scope remains V1.0 frozen.

The locked UI foundation must preserve:

- the four-pillar information architecture
- separate Reputation / Risk / Confidence outputs
- evidence provenance and freshness visibility
- Unknown / stale / conflicting / partial-data states
- clear separation between organic intelligence and sponsored/commercial state
- mobile-first responsive web behavior with desktop expansion
- the final locked PiChan brand identity

`UI_DESIGN_REQUIREMENTS_V1.md` is the mandatory Design HQ → Developer HQ contract.

The reusable UI foundation and Project Passport reference screen are locked in the Design HQ V1 documents. Remaining V1 screen families are designed from that locked system and must not introduce a second component language.

Design decisions that only improve hierarchy, responsiveness, accessibility or reusable component structure do not require Product HQ scope reopening as long as they preserve the locked semantics.

## 14. Change control

V1 is frozen.

New ideas discovered in Design HQ or Developer HQ go to **V1.1/V2 backlog** unless they are required to:

- satisfy an existing locked V1 acceptance criterion
- correct a factual/product contradiction
- address a correctness/security issue

Any material V1 scope change requires a new explicit Product HQ decision and corresponding source-of-truth update.

## 15. Handoff state

**Product HQ:** V1 locked.  
**Brand identity:** FINAL LOCKED — Brand Guidelines v1.0 / Production Asset Revision 2.2.  
**Design HQ:** reusable UI foundation + Project Passport reference locked; subsequent screen families must reuse the locked tokens/components/state contracts.  
**Developer HQ:** audits current code against the locked V1 product + UI contracts and implements according to `V1_BUILD_PLAN.md`; screen-specific public UI should not be considered final until its Design HQ screen spec is approved.
