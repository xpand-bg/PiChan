# PiChan V1 — Build Plan

**Status:** LOCKED execution plan  
**Version:** 1.0  
**Date:** 2026-09-13

This document defines the recommended implementation order for the locked V1 product. It does not expand scope; `PRODUCT_SPEC_V1.md` remains the product authority.

## Phase 0 — Foundation audit and migration plan

Before feature work:

- audit current repo against `PRODUCT_SPEC_V1.md`
- preserve working functionality that maps to V1
- identify RH-specific schema/code that must become chain-agnostic
- create migration plan rather than rewriting working code blindly
- verify Cloudflare Worker/D1/R2 deployment assumptions
- establish feature flags/demo fixtures for incomplete chain adapters

Exit criterion: current code is mapped to the target architecture and no new feature work depends on obsolete RH-only assumptions.

## Phase 1 — Core domain model

Implement/normalize:

- Chain
- Project
- Asset
- Deployment
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

Canonical deployment key: `chain_id + address`.

Exit criterion: both Robinhood Chain and Solana data can be represented without chain-specific fields leaking into the core model.

## Phase 2 — Source and chain adapter layer

Build normalized adapter contracts first, then providers.

### Robinhood Chain adapter

- address validation
- token metadata
- deployer/origin relationship
- contract/source/control observations
- market/liquidity observations
- holder observations
- authoritative registry hooks

### Solana adapter

- mint validation
- SPL vs Token-2022 identification
- token metadata
- authority observations
- Token-2022 extension observations
- creator/funder relationships
- market/liquidity observations
- holder observations

### Provider adapters

All external providers map to normalized evidence objects. No UI/business logic consumes vendor payloads directly.

Exit criterion: a known test asset on each chain produces normalized observations/evidence for identity, risk, market, holders and liquidity.

## Phase 3 — Intelligence engine

Implement:

- evidence provenance tiers
- freshness policy
- conflict handling
- Risk Finding normalization/severity
- Data Confidence engine
- Reputation engine v1
- `Unrated` eligibility logic
- deterministic PiChan Brief
- versioned scoring/configuration

Exit criterion: identical fixtures produce deterministic outputs and evidence can explain every public conclusion.

## Phase 4 — Passport V1

Build the complete mobile-first Passport in locked information order:

- identity header
- decision strip
- PiChan Brief
- Market Pulse
- identity/links/wallets
- Risk Signals
- supply/holders
- liquidity
- Creator preview
- recent Flight Recorder
- Watch/Share/action/report

Required states:

- loading
- unsupported address
- unknown/new asset
- Unrated/Low Confidence
- claimed
- authority verified
- canonical
- disputed
- conflicting evidence
- provider partial outage / stale evidence

Exit criterion: Passport is useful for real assets on both launch chains, with no mock values in production paths.

## Phase 5 — Flight Recorder and observation pipeline

Implement:

- event generation from evidence diffs
- typed event taxonomy
- before/after payloads
- immutable chronology/correction metadata
- snapshot scheduling
- materiality classification

Exit criterion: repeated observations can produce meaningful diffs rather than overwrite prior state.

## Phase 6 — Creator Intelligence

Implement:

- creator/origin role resolution
- known project/deployment history
- funding/entity relationships
- evidence chronology
- source-attributed address/risk labels
- cross-project relationship queries

Do not implement speculative cross-chain identity merges in V1.

Exit criterion: users can inspect why a creator is connected to each displayed project.

## Phase 7 — Watch and alerts

Implement:

- watch/unwatch
- alert preferences
- material-event evaluation
- deduplication/cooldowns
- in-app notification centre
- Telegram delivery
- config-driven thresholds

No price-target alerts.

Exit criterion: seeded and real material events trigger one understandable alert with evidence context.

## Phase 8 — Radar

Implement real-data feeds:

- Signals
- New
- Verified
- chain filters
- “Why on Radar” reasons

Radar must derive from PiChan observations/events and never from fake/sample production data.

Exit criterion: each Radar card links to evidence-backed Passport data and explains its inclusion.

## Phase 9 — Search and canonical ambiguity

Implement:

- address/mint search
- name/ticker search
- creator wallet search
- same-name results
- canonical/claim state display
- chain-aware routing

Exit criterion: users cannot be silently routed to the wrong same-name asset.

## Phase 10 — Claims, verification and official wallets

Implement:

- EVM wallet sign-in/signature flow
- Solana wallet sign-in/signature flow
- claim submission
- role/evidence verification
- official links
- declared project wallets
- lifecycle updates
- admin review
- verified-owner/authority protection

Exit criterion: signing proves only the intended wallet/control claim and sensitive verified states cannot be overwritten without review/evidence.

## Phase 11 — Telegram and share loop

Implement:

- address scan command/message
- compact scan for both chains
- Passport deep link
- Watch action
- group command support
- share cards

Exit criterion: a Telegram user can discover PiChan, scan an asset and reach/watch the Passport without needing a desktop flow.

## Phase 12 — My PiChan

Implement:

- Watches
- Alerts
- Claims
- Telegram connection
- notification settings

Keep account complexity minimal and wallet-first.

## Phase 13 — Report/dispute and admin operations

Implement:

- report flow
- dispute workflow
- admin queue
- approve/reject/resolve actions
- audit log
- evidence corrections without erasing history

Exit criterion: identity/evidence errors can be corrected transparently.

## Phase 14 — Production hardening

Required before launch:

- production Cloudflare deployment
- D1 migrations/backups strategy
- R2 configuration
- scheduled jobs / observation workers
- rate limiting
- Turnstile/abuse controls where needed
- structured logs
- error monitoring
- provider outage/fallback behavior
- caching
- secret management
- data-retention policy
- analytics
- SEO/OpenGraph/share metadata
- mobile/browser QA
- load testing for scan/Radar paths

## Phase 15 — Launch calibration

Before public V1:

- run PiChan against a representative RH + Solana asset set
- review false positive/false negative Risk Findings
- calibrate Watch materiality thresholds
- calibrate Reputation/Confidence thresholds
- review all `Unknown`/stale states
- verify provider source/freshness display
- verify Radar quality/noise
- verify Telegram output

Scoring/alert threshold changes during calibration are configuration changes, not scope expansion.

## V1 completion gate

V1 is complete only when all acceptance criteria in `PRODUCT_SPEC_V1.md` pass on both Robinhood Chain and Solana.

Anything else goes to V1.1/V2 backlog unless required for correctness, security or a locked acceptance criterion.
