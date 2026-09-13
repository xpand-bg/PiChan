# PiChan Product Architecture

**Status:** ACTIVE SOURCE OF TRUTH  
**Updated:** 2026-09-13

## Product north star

PiChan is an **onchain intelligence and market discovery product** focused on project identity, evidence, history, reputation and monitoring.

Primary product loop:

> Radar / Search → Passport → understand evidence → Flight Recorder → Watch → Alert → return.

PiChan is not a full trading terminal, custody product, portfolio tracker or generic analytics dashboard.

## V1 launch networks

PiChan V1 launches with:

- **Robinhood Chain**
- **Solana**

The core remains multi-chain. Base, BNB Chain, Ethereum and additional networks are V2 candidates.

See [`ADR-001-MULTICHAIN-FOUNDATION.md`](./ADR-001-MULTICHAIN-FOUNDATION.md).

## Four public product pillars

### 1. Radar

Answers: **What should I investigate?**

Radar surfaces evidence-backed intelligence events rather than only price movement.

V1 groups:

- Signals
- New
- Verified

Every Radar item explains why it appears.

### 2. Project Passport

Answers: **What is this and what matters?**

Passport combines:

- project/asset identity
- chain/deployment identity
- canonical/claim/verification state
- Reputation Grade / Unrated
- Risk Signals
- Data Confidence
- PiChan Brief
- Market Pulse
- official links and declared wallets
- supply/holder intelligence
- liquidity intelligence
- Creator Intelligence preview
- recent Flight Recorder events
- Watch / Share / action / report entry points

### 3. Flight Recorder

Answers: **What happened?**

Flight Recorder preserves historical truth rather than overwriting old states.

It records meaningful events across identity, authority/control, supply/holders, liquidity, creator/origin relationships, reputation/confidence and lifecycle/disputes.

### 4. Watch

Answers: **What changes from now on?**

Watch monitors material intelligence changes rather than simple price targets.

V1 delivery:

- in-app alerts
- Telegram alerts

## Supporting product: Creator Intelligence

Creator Intelligence is a drill-down shared by Passport, Flight Recorder, Radar and Watch.

It models typed roles such as deployer, creator, owner/admin, token authorities, funder and project-declared wallet roles.

It shows known projects/deployments, funding relationships, historical events and source-attributed labels.

## Product identity model

PiChan separates:

```text
Project
   ↓
Asset
   ↓
Deployment
```

A Project is the broader identity. An Asset is a fungible onchain asset associated with that project. A Deployment is the chain-specific contract/mint.

Canonical deployment identity is:

```text
chain_id + address
```

Address alone is never globally unique.

## V1 asset scope

First-class V1 support:

- Robinhood Chain ERC-20 fungible assets
- Solana SPL Token
- Solana Token-2022

Architecture may ingest canonical registry metadata for recognized official assets.

NFTs, arbitrary contracts and broad protocol auditing are outside V1.

## Three intelligence outputs

PiChan keeps these separate.

### Reputation Grade

Answers:

> What does identity, transparency, history and creator behavior tell us?

Public output:

- A+ through F when evidence is sufficient
- `Unrated` when evidence is insufficient

### Risk Signals

Answers:

> What current technical, control, supply or liquidity conditions deserve attention?

Public severity:

- Critical
- Warning
- Info
- Unknown

Risk Signals are findings, not a universal safety score.

### Data Confidence

Answers:

> How complete, fresh and consistent is the supporting evidence?

Public output:

- High
- Medium
- Low

See [`INTELLIGENCE_MODEL_V1.md`](./INTELLIGENCE_MODEL_V1.md) for locked semantics.

## Evidence-first architecture

PiChan does not store only conclusions.

```text
Chain / Registry / Signature / Provider
                  ↓
              Observation
                  ↓
               Evidence
                  ↓
        Finding / Event / Snapshot
                  ↓
 Reputation + Confidence + PiChan Brief
                  ↓
 Passport / Flight Recorder / Watch / Radar
```

This allows scoring and provider logic to evolve without destroying historical truth.

## Provenance and conflicts

Every important evidence item should know its source, source type/tier, observation time, freshness and subject.

Material source conflicts are preserved and may reduce confidence; PiChan must not silently overwrite disagreement.

## Chain adapters

```text
PiChan Core
   │
   ▼
Normalized Evidence Layer
   │
   ├── Robinhood Chain Adapter
   └── Solana Adapter
```

Future networks add adapters/evidence modules rather than rebuild Passport, Flight Recorder, Watch or Radar.

External data providers sit behind replaceable source adapters.

## Chain-specific evidence

Robinhood Chain and Solana use different native evidence modules, but both map to the same normalized PiChan concepts.

Robinhood Chain focuses on contract/source state, administrative controls, supply behavior, creator history, holder structure and liquidity behavior.

Solana focuses on SPL/Token-2022 type, token authorities and extensions, creator/funder relationships, holder/funding structure and liquidity behavior.

Capabilities are explained in context rather than automatically treated as malicious.

## Verification model

PiChan distinguishes:

- Unclaimed
- Claimed
- Authority Verified
- Canonical
- Disputed

A wallet signature proves control of that wallet, not automatically ownership of a whole project.

Projects may declare official links and typed wallets. Signed declarations remain distinct from stronger direct/authoritative evidence.

## Lifecycle model

V1 project lifecycle vocabulary includes:

- Active
- Inactive
- Community-led
- Disputed
- Abandoned only when supported by evidence/review

Lifecycle changes are historical events, not silent state replacements.

## Search architecture

V1 search supports:

- deployment/mint address
- project/token name
- ticker
- creator/deployer wallet

Search is chain-aware and exposes same-name/copy ambiguity rather than assuming a ticker identifies one asset.

## PiChan Brief

V1 Brief is generated from structured normalized evidence using deterministic rules/templates.

AI language generation may improve presentation later, but it must never become the factual source of truth.

## Core V1 domain objects

- Project
- Asset
- Deployment
- Chain
- Wallet/Entity
- EntityRelationship
- Claim
- Verification
- OfficialLink
- ProjectWallet
- Observation
- Evidence
- RiskFinding
- Event
- Snapshot
- ReputationSnapshot
- ConfidenceSnapshot
- MarketSnapshot
- HolderSnapshot
- LiquiditySnapshot
- Watch
- Alert
- Report/Dispute

## V1 screens/routes

- `/` — Radar + Search
- `/p/{chain}/{address}` — Passport
- `/p/{chain}/{address}/history` — Flight Recorder
- `/creator/{chain}/{address}` — Creator Intelligence
- `/watch` — Watchlist
- `/alerts` — Alerts
- `/me` — My PiChan
- `/claim/...` — claim/verification flow
- `/admin` — private operations/review

Mobile primary navigation:

- Radar
- Search
- Watch
- Me

## Distribution loop

V1 distribution includes:

- Telegram scan/bot
- Telegram alerts
- shareable Passport cards
- external market/action links / Drones integration point

## Explicitly outside V1

- additional chains beyond Robinhood Chain + Solana
- native trade execution
- auto/copy trading
- custody
- portfolio management
- price-target alerts
- giant charting suite
- full interactive holder graph
- arbitrary wallet P&L terminal
- KOL/social sentiment terminal
- public comments/social network
- public developer API
- native mobile app
- autonomous AI investigator
- PiChan token

## Scope hierarchy

For V1 implementation, authority order is:

1. `PRODUCT_SPEC_V1.md`
2. `INTELLIGENCE_MODEL_V1.md`
3. `ADR-001-MULTICHAIN-FOUNDATION.md`
4. this `PRODUCT_ARCHITECTURE.md`
5. `V1_BUILD_PLAN.md` for implementation order
6. brand/design source-of-truth docs for visual execution

New ideas found during implementation go to V1.1/V2 unless Product HQ explicitly changes the locked V1 scope.
