# PiChan Product Architecture

**Status:** ACTIVE SOURCE OF TRUTH  
**Updated:** 2026-09-13

## Product north star

PiChan is an **onchain intelligence and market discovery product** focused on project identity, evidence, history, reputation and monitoring.

Primary user loop:

> Paste an address → understand the project → inspect evidence and history → assess reputation and confidence → watch important changes.

PiChan is not intended to become a full trading terminal, custody product or generic analytics dashboard.

## Flagship product system

### 1. Project Passport

Answers: **What is this project?**

Core capabilities:

- project identity
- chain and deployment identity
- official links
- project verification
- Reputation Grade
- Data Confidence
- creator/deployer context
- important warnings
- share / watch / action entry points

### 2. Flight Recorder

Answers: **What happened to this project?**

Core capabilities:

- meaningful historical events
- ownership/authority changes
- official-link changes
- verification events
- reputation changes
- creator/deployer events
- evidence history

PiChan should preserve historical truth rather than overwrite old states.

### 3. Watch

Answers: **What changes from now on?**

Core capabilities:

- watchlists
- material-change detection
- reputation/confidence changes
- official-link changes
- authority/ownership changes
- creator/deployer activity
- alerts
- Telegram delivery

## Supporting capabilities

- chain-aware search
- wallet-signed project claims
- official-link verification
- creator/deployer intelligence
- evidence-first reputation engine
- explainable Reputation Grade
- separate Data Confidence score/state
- shareable Passport cards
- Telegram bot and group distribution
- Drones/action integration where relevant
- My PiChan area for watches, claims and alerts
- private admin/review system

## Evidence-first rule

PiChan should not store only conclusions such as `reputation = B+`.

It must preserve the evidence and events that produced the conclusion.

Conceptual flow:

```text
Chain / Claim / External Source
            ↓
         Evidence
            ↓
          Events
            ↓
   Reputation Engine
            ↓
 Reputation + Confidence
            ↓
 Passport / Flight Recorder / Watch
```

This allows scoring logic to evolve without losing historical truth.

## Multi-chain foundation

PiChan launches RH-first but is multi-chain by design.

See: [`ADR-001-MULTICHAIN-FOUNDATION.md`](./ADR-001-MULTICHAIN-FOUNDATION.md)

Planned product expansion:

1. RH
2. Solana
3. Base
4. BNB Chain
5. Ethereum
6. Additional chains based on demand and data quality

Core product systems must remain chain-agnostic. Chain-native behavior belongs in adapters and chain-specific evidence modules.

## Canonical identity rule

An onchain deployment is identified by at least:

```text
chain_id + address
```

An address alone must never be treated as globally unique.

PiChan should also support a parent **Project** identity containing multiple official chain deployments.

## Reputation architecture

Reputation consists of:

### Chain-independent framework

- identity
- verification
- history
- creator/deployer reputation
- transparency
- evidence quality and freshness

### Chain-specific evidence

Examples differ by network and are interpreted through chain modules.

The public grade remains simple and explainable. The underlying evidence may be network-specific.

## V1 launch scope

V1 remains **RH-first**.

Planned V1 product capabilities:

- RH contract search
- Project Passport
- Reputation Grade
- Data Confidence
- project verification
- official links
- deployer intelligence
- Flight Recorder
- historical records
- Watch
- alerts
- Telegram lookup/distribution
- share cards
- Drones/action integration point
- My PiChan foundation
- admin/review tools

## Explicitly outside V1

- native trade execution
- auto trading
- custody
- portfolio management
- giant trading-chart suite
- full social sentiment terminal
- complex analytics dashboards
- PiChan token
- broad social-network features
- multi-chain launch at the same time as RH

## Expansion principle

Adding a new chain should mean:

1. implement a chain adapter
2. implement chain-specific evidence modules
3. map data into the normalized PiChan model
4. validate reputation behavior for that network
5. expose the network through existing Passport / Flight Recorder / Watch interfaces

It should **not** require rebuilding the core PiChan product.

## Development rule

Before adding a new core field, table, route or service, ask:

> Would this still make sense when PiChan supports RH, Solana and Base?

If not, it likely belongs in a chain-specific adapter/module rather than the core model.
