# ADR-001 — Multi-Chain Foundation

**Status:** LOCKED  
**Date:** 2026-09-13  
**Decision owner:** PiChan Product HQ

## Decision

PiChan V1 launches with **Robinhood Chain + Solana**.

The product and data architecture are multi-chain by design. Neither launch chain may be hard-coded as the universal PiChan model.

Planned network direction:

1. **Robinhood Chain + Solana** — V1 launch networks
2. **Base** — planned V2 EVM expansion
3. **BNB Chain** — planned V2 expansion
4. **Ethereum** — planned V2 expansion
5. Additional chains based on product demand and data quality

The order after V1 may change based on demand, but the architectural rules in this ADR remain locked.

## Public naming

Public UI/copy must use **Robinhood Chain** rather than unofficial shorthand.

Internal adapters/configuration may use technical identifiers such as `robinhood` / chain ID `4663`.

## Product positioning

PiChan is not a chain-specific explorer.

PiChan is an **onchain intelligence, identity, history, reputation and monitoring layer**.

Core product loop:

> Radar / Search → Passport → understand evidence → Flight Recorder → Watch → Alert → return.

Core public products:

- **Radar** — what should I investigate?
- **Project Passport** — what is this and what matters?
- **Flight Recorder** — what happened?
- **Watch** — what changes next?

Creator Intelligence is a supporting drill-down shared by the core products.

## Architecture rule

All core product models, APIs and storage must be chain-agnostic unless a feature is inherently chain-specific.

Do **not** build core tables/routes/services around network-specific naming such as:

- `rh_projects`
- `solana_projects`
- `rh_contracts`
- `solana_mints`

Prefer normalized concepts:

- `chains`
- `projects`
- `assets`
- `deployments`
- `wallets` / `entities`
- `entity_relationships`
- `observations`
- `evidence`
- `risk_findings`
- `events`
- `snapshots`
- `reputation_snapshots`
- `confidence_snapshots`
- `market_snapshots`
- `holder_snapshots`
- `liquidity_snapshots`
- `watches`
- `alerts`
- `claims`
- `verifications`
- `reports` / `disputes`

## Canonical identity

An onchain deployment identity is at minimum:

```text
chain_id + address
```

An address alone is not globally unique.

Examples:

```text
robinhood + 0x123...
solana    + 8fs2...
base      + 0x123...
```

## Project → Asset → Deployment

PiChan must separate the real-world/project identity from a token asset and its chain-specific deployment.

```text
Project
   └── Asset
        ├── Robinhood Chain deployment
        ├── Solana deployment
        └── future network deployments
```

V1 first-class asset scope is fungible tokens/assets, but this structure must support future asset types without a core rewrite.

This model enables canonical-deployment and impersonation checks.

## Chain adapter layer

```text
PiChan Core
   │
   ▼
Normalized Evidence Layer
   │
   ├── Robinhood Chain Adapter
   ├── Solana Adapter
   ├── Base Adapter (V2)
   ├── BNB Adapter (V2)
   └── Ethereum Adapter (V2)
```

Each chain/provider adapter converts native data into normalized PiChan observations/evidence/events.

Core Passport/Reputation/Watch logic must not consume vendor-native or chain-native response shapes directly.

## Neutral terminology

Internal models must not assume EVM semantics.

Prefer:

- `address` / `deployment_address` rather than only `contract_address`
- `deployment` rather than assuming `contract`
- typed entity roles rather than a universal `deployer`

Typed roles may include:

- deployer
- creator
- owner/admin
- mint authority
- freeze authority
- update authority
- funder
- project-declared wallet role

UI may use chain-appropriate labels while the underlying model stays neutral.

## Intelligence architecture

PiChan keeps three public outputs separate:

1. **Reputation Grade** — identity/transparency/history/creator behavior
2. **Risk Signals** — current technical/control/supply/liquidity findings
3. **Data Confidence** — evidence completeness, quality, freshness and consistency

The Reputation Engine consumes normalized evidence and uses a chain-independent reputation framework plus chain-specific evidence modules.

See [`INTELLIGENCE_MODEL_V1.md`](./INTELLIGENCE_MODEL_V1.md).

## Chain-specific evidence

### Robinhood Chain / future EVM examples

- contract creator
- ownership/admin state
- proxy/upgradeability
- supply controls
- transfer/trading restrictions
- taxes/fees where detectable
- deployer/creator history
- funding relationships
- pool/liquidity behavior

### Solana examples

- SPL vs Token-2022
- mint authority
- freeze authority
- metadata/update authority
- Token-2022 extensions
- creator/funder relationships
- program/launch context
- holder/funding relationships

PiChan must not blindly apply an EVM-specific rule to Solana or vice versa.

## Provider independence

External analytics/security/indexing vendors are replaceable source adapters.

PiChan stores normalized observations/evidence and historical events so vendor changes do not erase product history or force a product rewrite.

When sources materially disagree, PiChan preserves the conflict rather than silently choosing one response.

## Search behavior

V1 search is chain-aware:

- Solana-format mints route to Solana lookup
- Robinhood Chain EVM addresses route to supported EVM lookup
- name/ticker search may return multiple same-name assets
- canonical/claim/verification evidence is shown rather than assuming the first result is official

As more EVM chains are added, identical `0x...` addresses may resolve on multiple networks and must remain chain-qualified.

## Creator intelligence

Creator/origin reputation and history are evidence-based.

PiChan may connect wallets/projects using typed relationships such as deployer, authority, funder or declared project wallet.

Cross-chain entity merging requires strong evidence; weak coincidences must never be treated as proven identity.

## Development requirement

From this decision onward:

> **Developer HQ must build core PiChan systems chain-agnostically. Network-specific implementation belongs in chain/source adapters and chain-specific evidence modules.**

Before adding a core field, table, route or service, ask:

> Would this still make sense for both Robinhood Chain and Solana, and later Base?

If not, it likely belongs in a chain-specific module.

## Why this is locked

Launching with one EVM network and one non-EVM network forces the abstraction boundary to become real in V1 rather than theoretical.

This prevents later rewrites of:

- database identity
- APIs
- search
- evidence models
- scoring logic
- monitoring
- historical records
- URL structure

## Scope authority

This ADR defines architecture/network direction only.

The locked V1 product scope is defined in:

- [`PRODUCT_SPEC_V1.md`](./PRODUCT_SPEC_V1.md)
- [`INTELLIGENCE_MODEL_V1.md`](./INTELLIGENCE_MODEL_V1.md)
- [`V1_BUILD_PLAN.md`](./V1_BUILD_PLAN.md)
