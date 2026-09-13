# PiChan V1 — Build Plan

**Status:** LOCKED execution plan  
**Version:** 1.0  
**Date:** 2026-09-13

This document defines the recommended implementation order for the locked V1 product. It does not expand scope; `PRODUCT_SPEC_V1.md` remains the product authority.

## Parallel Design Gate — before public UI implementation

Backend/domain/adapter work may proceed while Design HQ is active, but production public-surface implementation must consume the locked V1 UI/design system rather than invent screen-level styling independently.

Before Passport/Radar/Watch/Me UI is considered implementation-ready, Design HQ must satisfy `UI_DESIGN_REQUIREMENTS_V1.md` and lock:

- product design tokens
- responsive app shell
- typography/spacing/radius/border/elevation rules
- semantic status colors
- core component library
- component state matrix
- mobile + desktop screen specifications
- loading/empty/error/stale/conflict/partial-data states
- accessibility behavior
- final approved brand asset references

Implementation rules:

- use exact assets from `brand/vector/`
- use `src/brand/tokens.ts` / approved product design tokens rather than per-screen hard-coded values
- never reconstruct the PiChan logo in CSS/canvas/text/generated artwork
- preserve Reputation, Risk Signals and Data Confidence as separate UI concepts
- preserve evidence/freshness visibility
- preserve explicit organic vs sponsored separation
- use reusable components first; do not style each product screen as a one-off

## Phase 0 — Foundation audit and migration plan

Before feature work:

- audit current repo against `PRODUCT_SPEC_V1.md`
- preserve working functionality that maps to V1
- identify RH-specific schema/code that must become chain-agnostic
- create migration plan rather than rewriting working code blindly
- verify Cloudflare Worker/D1/R2 deployment assumptions
- establish feature flags/demo fixtures for incomplete chain adapters
- audit any existing UI against the final brand assets and `UI_DESIGN_REQUIREMENTS_V1.md`; treat legacy mockup styling as replaceable unless explicitly approved by Design HQ

Exit criterion: current code is mapped to the target architecture and no new feature work depends on obsolete RH-only assumptions.

## Phase 1 — Core domain model

Implement/normalize intelligence/product objects:

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
- ProjectInboxItem

Implement commercial primitives without coupling them to scoring:

- Product
- Invoice
- Payment
- Entitlement
- Campaign
- ProjectTeamMember / role model as needed

Canonical deployment key: `chain_id + address`.

Exit criterion: both Robinhood Chain and Solana data can be represented without chain-specific fields leaking into the core model, and commercial state is structurally separate from intelligence state.

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
- Watch/Share/action/report/claim

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

Use the locked Passport component/state patterns from the V1 UI/design system. Unknown/stale/conflicting states must be visible rather than silently omitted.

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

Implement real-data organic feeds:

- Signals
- New
- Verified
- chain filters
- “Why on Radar” reasons

Radar must derive from PiChan observations/events and never from fake/sample production data.

Do not mix paid placement into organic ranking logic. Sponsored Sighting must use the separate approved sponsored component/treatment from the UI/design system.

Exit criterion: each organic Radar card links to evidence-backed Passport data and explains its inclusion.

## Phase 9 — Search and canonical ambiguity

Implement:

- stable `/search` destination
- global search entry from the app shell
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

Claiming, factual corrections, project responses and transparency disclosures remain free.

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
- Claims / Managed Projects
- Telegram connection
- notification settings

Keep account complexity minimal and wallet-first.

## Phase 13 — Claimed Project Control Center

Implement the free project-side workflow first:

- managed-project entry from Me
- public state summary
- official data/disclosure management
- Project Inbox
- project response flow
- correction/dispute workflow
- transparency completeness
- claim/review status

Then add Pro-gated operational surfaces behind entitlements:

- aggregate Passport analytics
- Telegram scan analytics
- Watch additions/watcher growth analytics
- historical project analytics
- advanced monitoring/alerts
- advanced Inbox workflow
- team members/roles
- enhanced share assets

No project-side control may edit PiChan-generated Reputation, Risk, Confidence or historical findings directly.

Exit criterion: free project truth-management remains usable without payment and Pro capabilities are cleanly entitlement-gated.

## Phase 14 — Crypto billing and paid products

Implement **one universal payment engine**.

Core flow:

```text
Product → Invoice → Crypto Payment → Confirmation → Entitlement / Campaign / Priority
```

Implement:

- configurable product catalog
- quoted commercial price separate from settlement asset
- configurable accepted crypto asset/network
- invoice creation + expiry
- payer/project association
- onchain payment verification
- confirmation policy
- payment transaction record
- entitlement activation/expiry
- manual renewal
- early-renewal extension from existing expiry
- in-app/Telegram expiry reminders

V1 does not require automatic recurring withdrawal or subscription smart contracts.

Payment UI must use the locked invoice/payment patterns from `UI_DESIGN_REQUIREMENTS_V1.md`, including explicit settlement asset, network, exact amount, destination, expiry and confirmation state.

### Passport Pro

- fixed-duration Project entitlement
- belongs to Project, not individual wallet
- manual renewal
- expiry disables only paid capabilities
- claim/verification/public history remain intact

### Priority Review

- paid queue/service priority
- payment never guarantees approval

### Launch Pack

- explicit one-time service/bundle entitlements

### Sponsored Sighting

- separate sponsored campaign state
- always visually labelled
- reviewed before activation
- never modifies organic Radar ranking
- PiChan intelligence remains uneditable

Exit criterion: a confirmed supported crypto payment can activate the intended paid state without any code path modifying independent intelligence.

## Phase 15 — Report/dispute and admin operations

Implement:

- report flow
- dispute workflow
- admin queue
- approve/reject/resolve actions
- priority-review queue state
- sponsored campaign review state
- payment/entitlement inspection where operationally necessary
- audit log
- evidence corrections without erasing history

Exit criterion: identity/evidence/commercial workflow errors can be resolved transparently and admin actions are auditable.

## Phase 16 — Production hardening

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
- payment destination/verification configuration protection
- data-retention policy
- analytics
- SEO/OpenGraph/share metadata
- mobile/browser QA
- keyboard/focus/accessibility QA for core flows
- reduced-motion behavior
- Core Web Vitals checks on representative mobile hardware
- load testing for scan/Radar paths

## Phase 17 — Launch calibration

Before public V1:

- run PiChan against a representative Robinhood Chain + Solana asset set
- review false positive/false negative Risk Findings
- calibrate Watch materiality thresholds
- calibrate Reputation/Confidence thresholds
- review all `Unknown`/stale states
- verify provider source/freshness display
- verify Radar quality/noise
- verify Telegram output
- verify free claim/project-response paths
- verify payment → entitlement paths
- verify Pro expiry/downgrade behavior
- verify sponsored/organic Radar separation
- verify responsive mobile/desktop parity of product semantics
- verify the production UI uses only the final approved PiChan identity assets

Scoring/alert threshold changes during calibration are configuration changes, not scope expansion.

## V1 completion gate

V1 is complete only when:

- all acceptance criteria in `PRODUCT_SPEC_V1.md` pass on both Robinhood Chain and Solana
- enabled V1 commercial flows satisfy `MONETIZATION_V1.md`
- the implemented UI satisfies the locked Design HQ handoff in `UI_DESIGN_REQUIREMENTS_V1.md`
- final product surfaces use the locked PiChan brand system without reconstructed/legacy identity assets

Anything else goes to V1.1/V2 backlog unless required for correctness, security or a locked acceptance criterion.
