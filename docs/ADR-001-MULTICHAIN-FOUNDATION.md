# ADR-001 — Multi-Chain Foundation

**Status:** LOCKED  
**Date:** 2026-09-13  
**Decision owner:** PiChan Product HQ

## Decision

PiChan launches **RH-first**, but the product and data architecture must be **multi-chain by design from day one**.

RH is the first supported network and proving ground. It must never be treated as a permanent hard-coded boundary of the product.

Planned expansion order:

1. **RH** — launch network and initial proving ground
2. **Solana** — second network and first non-EVM architecture
3. **Base** — first major EVM expansion after RH
4. **BNB Chain** — planned expansion
5. **Ethereum** — planned expansion
6. Additional chains based on product demand and data quality

The order after Solana may change based on demand, but the architectural rule does not.

## Product positioning

PiChan is not an RH-only explorer.

The long-term product is an **onchain project identity, history, reputation and monitoring layer**.

Core product loop:

> Paste an address → identify the project → inspect evidence and history → understand reputation and confidence → watch important changes.

The core PiChan products remain chain-independent:

- **Project Passport** — what is this project?
- **Flight Recorder** — what happened to this project?
- **Watch** — what changes from now on?
- Reputation Grade
- Data Confidence
- Project verification
- Official links
- Historical evidence
- Deployer / creator intelligence
- Alerts
- Share cards
- Telegram distribution
- Admin review

## Architecture rule

All core product models, APIs and storage must be chain-agnostic unless a feature is inherently chain-specific.

Do **not** build core tables, routes or services around RH-specific naming such as:

- `rh_projects`
- `rh_contracts`
- `rh_deployers`

Prefer neutral concepts such as:

- `chains`
- `projects`
- `deployments`
- `addresses`
- `entities`
- `evidence`
- `events`
- `reputation_scores`
- `watchlists`

Every onchain deployment identity must include the chain/network as part of its primary identity.

A contract or mint address alone is **not globally unique**.

Canonical identity must conceptually be:

```text
chain_id + address
```

For example:

```text
rh      + 0x123...
base    + 0x123...
solana  + 8fs2...
```

## Chain adapter layer

PiChan must consume chain data through adapters rather than allowing chain-specific logic to spread throughout the application.

```text
PiChan Core
   │
   ▼
Normalized Chain Layer
   │
   ├── RH Adapter
   ├── Solana Adapter
   ├── Base Adapter
   ├── BNB Adapter
   └── Ethereum Adapter
```

Each adapter converts native chain information into normalized PiChan evidence and events.

The Reputation Engine consumes normalized evidence rather than raw chain-specific structures.

## Neutral terminology

Internal data models should avoid assuming every network is EVM.

Prefer:

- `address` or `asset_address` instead of only `contract_address`
- `deployment` instead of assuming `contract`
- `creator_entity` / `origin_entity` where a universal concept is needed
- typed roles such as `deployer`, `mint_authority`, `update_authority`, `creator`, `owner`, `program`

The user interface can use chain-appropriate friendly labels while the underlying model stays neutral.

## Reputation model

PiChan must have:

1. A **chain-independent reputation framework**
2. **Chain-specific evidence modules**

Common evidence can include:

- project ownership verification
- official links
- identity consistency
- project age
- historical identity changes
- creator/deployer history
- transparency signals
- evidence freshness and quality

Chain-specific evidence may differ.

### EVM / RH / Base / BNB / Ethereum examples

- contract creator
- ownership state
- proxy / upgradeability state
- supply controls
- deployer history
- funding relationships

### Solana examples

- mint authority
- freeze authority
- update authority
- token extensions
- metadata authority
- creator wallets
- program relationships

PiChan must **not** blindly apply an EVM-specific scoring rule to Solana or vice versa.

The public Reputation Grade stays understandable and consistent, while the evidence behind it respects each network.

## Project vs deployment

PiChan must support the possibility that one real project exists on multiple networks.

Conceptually:

```text
Project
  ├── RH deployment
  ├── Solana deployment
  ├── Base deployment
  └── BNB deployment
```

This allows PiChan to distinguish official deployments from copies or impersonations.

Future Passport capability:

> Official deployments: RH ✓  Solana ✓  Base ✓

and potentially:

> Warning: this token is not an official deployment of the verified project.

## Search behavior

Search must evolve toward chain-aware detection.

Examples:

- Solana-format addresses can be recognized directly.
- EVM-style `0x...` addresses may exist on multiple supported chains.
- When ambiguity exists, PiChan should return the matching networks rather than assuming one chain.

## Creator / deployer intelligence

Long term, PiChan should support reputation and history across chains where evidence strongly links identities.

Example:

> Creator history: 4 known projects across 2 chains.

Cross-chain identity connections must be evidence-based; PiChan must not infer ownership from weak coincidence alone.

## Development requirement

From this decision onward:

> **Developer HQ must build core PiChan systems chain-agnostically unless the implementation is inherently network-specific.**

RH-specific code belongs inside the RH adapter or RH evidence module, not inside the core product model.

## Why this is locked now

Retrofitting multi-chain support after an RH-specific schema would require a major rewrite of:

- database identity
- APIs
- evidence models
- scoring logic
- search
- URLs
- monitoring
- historical records

Making the boundary explicit now lets RH remain fast to ship without turning RH assumptions into permanent technical debt.

## Launch scope is unchanged

This decision does **not** expand V1 scope.

V1 remains RH-first.

Solana and other chains are subsequent product phases. The requirement is simply that V1's architecture leaves a clean path for those phases.
