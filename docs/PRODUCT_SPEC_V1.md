# PiChan V1 — Product Specification

**Status:** LOCKED — implementation source of truth  
**Version:** 1.0  
**Date:** 2026-09-13  
**Decision owner:** PiChan Product HQ

## 1. Product definition

PiChan is an **onchain intelligence, identity, reputation and monitoring product**.

Primary promise:

> **Paste an address. Know what you are looking at, what matters, what changed, and what to watch next.**

PiChan does not tell users that an asset is “safe”, does not issue buy/sell recommendations, and does not attempt to replace a trading terminal.

The V1 user should be able to answer, in roughly one minute:

1. Is this the correct/canonical asset or an impersonation?
2. Who controls or represents it?
3. What technical capabilities or risk signals exist?
4. How concentrated is supply and are important holders related?
5. What does liquidity look like?
6. What is known about the creator/origin wallets and their previous projects?
7. What has changed since launch?
8. Can PiChan notify me when something material changes?

## 2. Launch networks

V1 launches with **both**:

- **Robinhood Chain** — EVM-compatible, mainnet chain ID 4663
- **Solana** — SPL Token and Token-2022 fungible assets

Public UI must use the full label **Robinhood Chain**. Internal adapter identifiers may be shorter/technical.

V2 chain expansion is planned for Base, BNB Chain, Ethereum and additional chains based on demand/data quality.

## 3. V1 asset scope

Supported in V1:

- fungible ERC-20 deployments on Robinhood Chain
- Solana SPL Token mints
- Solana Token-2022 mints
- canonical/official registry metadata when authoritative registries identify an asset

Not supported as first-class V1 Passport types:

- NFTs / NFT collections
- arbitrary smart contracts
- lending positions
- perpetual markets
- protocol audits
- wallets as general P&L/trading profiles

Architecture must still use `Project → Asset → Deployment` so future asset types do not require a schema rewrite.

## 4. Four public product pillars

### 4.1 Radar

Answers: **What should I investigate?**

Radar is an intelligence feed, not a “top gainers” page.

V1 feed groups:

- **Signals** — material PiChan events (default)
- **New** — newly discovered launches/deployments
- **Verified** — recently claimed/authority-verified projects

Each item must explain **why it is on Radar**.

Examples:

- liquidity decreased materially
- creator launched another project
- related-holder concentration crossed a threshold
- project authority was verified
- contract/token authority changed
- a new canonical deployment was established

Radar rankings/signals must never be changed by paid placement. Sponsored products are outside V1.

Filters:

- All chains
- Robinhood Chain
- Solana

### 4.2 Project Passport

Answers: **What am I looking at and what matters?**

Canonical route:

`/p/{chain}/{address}`

Passport V1 information order:

1. **Identity header**
   - project/token name
   - ticker
   - chain
   - deployment address/mint
   - canonical / claimed / authority-verification state
   - lifecycle state

2. **Decision strip**
   - Reputation Grade or `Unrated`
   - Risk Signals summary (`Critical / Warning / Unknown`)
   - Data Confidence (`High / Medium / Low`)

3. **PiChan Brief**
   - deterministic evidence-based summary
   - 3–6 “worth knowing” findings
   - every factual statement traceable to evidence

4. **Market Pulse**
   - price
   - market cap when reliable, otherwise FDV
   - liquidity
   - 24h volume
   - 24h transactions where available
   - holder count where available
   - deployment/asset age

5. **Identity & official links**
   - website
   - X
   - Telegram
   - documentation/GitHub where supplied
   - declared official wallets
   - evidence/verification level for each

6. **Risk Signals**
   - chain-specific controls/capabilities
   - findings grouped by severity
   - no universal “safe” label

7. **Supply & Holder Intelligence**
   - total supply
   - holder count
   - top-holder concentration excluding known LP/burn/system addresses where identifiable
   - largest relevant holder
   - creator/project wallet holdings
   - basic related-wallet clusters
   - provider-labelled categories such as sniper/bundler/insider only when sourced and clearly attributed

8. **Liquidity Intelligence**
   - total known liquidity
   - primary pool(s)
   - DEX / quote asset
   - pool age
   - liquidity control/lock/burn state only when determinable
   - material recent changes

9. **Creator Intelligence preview**
   - origin/creator wallet/entity
   - known project count
   - previous-project outcomes/events based on observed evidence
   - link to full Creator profile

10. **Recent Flight Recorder events**

11. **Actions**
   - Watch
   - Share
   - external market/trading destination / Drones integration where available
   - Report incorrect information

### 4.3 Flight Recorder

Answers: **What happened?**

Route:

`/p/{chain}/{address}/history`

Flight Recorder preserves historical truth. New state must not silently overwrite old state.

V1 event families:

- identity / verification
- contract / authority / control
- supply / holder structure
- liquidity
- creator/origin activity
- reputation / confidence
- dispute / lifecycle

Every event must contain, when applicable:

- event type
- observed timestamp
- before value
- after value
- source/evidence reference
- severity/materiality

### 4.4 Watch

Answers: **What changes from now on?**

Watch is for project/intelligence changes, not price-target alerts.

V1 delivery:

- in-app alerts
- Telegram alerts

V1 high-value alert classes:

- critical risk/control finding appears or changes
- contract upgrade / owner / authority change
- material mint/burn event
- material liquidity removal/change
- LP/lock condition change when reliably detectable
- material holder/related-wallet concentration change
- official link/identity change
- dispute/lifecycle change
- creator launches another project
- Reputation Grade changes
- Data Confidence changes materially

Alert thresholds must be configuration-driven, not scattered as hard-coded constants.

## 5. Supporting product: Creator Intelligence

Route:

`/creator/{chain}/{address}`

Creator Intelligence is a drill-down, not a fifth primary navigation item.

It should show:

- wallet/entity identifier
- observed roles (deployer, creator, mint authority, update authority, funder, etc.)
- known projects/deployments
- historical project events/outcomes
- relevant funding relationships
- risk/address labels with source attribution
- evidence chronology

Cross-chain entity linking is allowed only when supported by strong evidence. PiChan must not merge identities from weak coincidence.

## 6. Search

V1 search accepts:

- Robinhood Chain contract address
- Solana mint address
- token/project name
- ticker
- creator/deployer wallet address

Rules:

- canonical deployment identity is `chain_id + address`
- address alone is never globally unique
- Solana-format addresses can be routed directly to Solana lookup
- EVM addresses must not assume a chain when future ambiguity exists
- name/ticker results must surface same-name/copy ambiguity

### Impersonation / canonical check

When several assets share a name/ticker, PiChan should show the candidate deployments and identify canonical/claimed deployments only when evidence supports that conclusion.

“Verified” means identity/control evidence, never “safe investment”.

## 7. PiChan Brief

V1 Brief must be produced from normalized structured evidence and deterministic templates/rules.

LLM-generated factual conclusions are not required for V1 and must not be the source of truth.

Brief rules:

- facts must reference existing evidence
- missing data must be described as unknown, not assumed positive
- avoid investment language
- prioritize the few findings most relevant to identity, control, supply, liquidity, creator and recent change

## 8. Verification states

V1 distinguishes:

- **Unclaimed** — no accepted project claim
- **Claimed** — a signed representative claim exists
- **Authority Verified** — control of a relevant current onchain authority/deployer role has been cryptographically established
- **Canonical** — strong authoritative evidence links this deployment to the project/asset identity
- **Disputed** — material identity/claim dispute is unresolved

These states may coexist where conceptually valid (for example a canonical deployment may also be authority verified).

Wallet signatures prove control of a wallet, not automatically ownership of an entire project.

## 9. Official links and declared wallets

Claimed/verified projects may submit:

- website
- X
- Telegram
- docs/GitHub
- treasury wallet
- team wallet
- liquidity wallet
- marketing/operations wallet
- other typed project wallets

The UI must distinguish:

- direct/onchain or authoritative verification
- signed project declaration
- discovered but unverified data

A project-declared wallet is labelled **Declared by project** unless independently verified by stronger evidence.

## 10. Lifecycle states

Supported V1 project lifecycle vocabulary:

- Active
- Inactive
- Community-led
- Disputed
- Abandoned (only when evidence/administrative review supports the designation)

Claim/verification state is separate from lifecycle state.

Lifecycle transitions must be recorded in Flight Recorder.

## 11. My PiChan

Primary mobile navigation:

- Radar
- Search
- Watch
- Me

`Me` contains:

- Watches
- Alerts
- Claims
- Telegram connection
- notification settings

Wallet-first identity is preferred. Public browsing/search does not require login.

## 12. Telegram bot

V1 Telegram behavior:

- paste/send a supported address → compact PiChan Scan
- show chain, reputation/unrated, risk summary, confidence, market basics and key findings
- link to Passport
- Watch action where identity is connected
- shareable result

Group-command support may use `/pichan {address}`.

## 13. Share cards

V1 cards may include:

- project/ticker
- chain
- Reputation Grade / Unrated
- Data Confidence
- Critical/Warning counts
- 1–2 key evidence findings
- PiChan branding

Cards must not use “safe”, “guaranteed”, buy/sell language or imply PiChan endorsement.

## 14. Report / dispute

Every Passport provides **Report incorrect information**.

V1 report categories:

- wrong official link
- fake/incorrect claim
- impersonation/canonical deployment issue
- incorrect wallet/entity label
- community takeover / lifecycle issue
- other evidence error

Reports enter the private admin review queue. V1 has no public comments, voting or review scores.

## 15. Explicitly outside V1

- Base / BNB Chain / Ethereum support
- native trading/execution
- copy trading
- custody
- portfolio tracking
- price-target alerts
- full TradingView-style charts
- full Bubblemaps-style interactive graph
- arbitrary wallet P&L/smart-money terminal
- KOL/social sentiment scoring
- public comments/social network
- sponsored Radar ranking
- public developer API
- native mobile app
- autonomous AI investigator
- PiChan token
- NFTs and broad arbitrary-contract analysis

These may be considered only after V1 proves the core loop.

## 16. V1 success loop

```text
Radar / Telegram / external share
            ↓
          Search
            ↓
         Passport
            ↓
 Understand identity + evidence + risk + supply + liquidity + creator
            ↓
     Flight Recorder
            ↓
          Watch
            ↓
          Alert
            ↓
       Return to PiChan
```

## 17. Launch acceptance criteria

V1 is not launch-ready until:

1. both Robinhood Chain and Solana addresses resolve correctly
2. Passport can distinguish evidence, unknowns and conflicts
3. Risk Signals work through chain-specific modules
4. holder and liquidity panels have source/freshness metadata
5. Creator Intelligence works on both launch chains at a useful baseline
6. Flight Recorder preserves before/after changes
7. Watch produces material-change alerts
8. Radar is populated from real PiChan observations rather than mock data
9. Telegram can return a useful scan for both chains
10. claim/authority verification and admin review are functional
11. all major factual claims expose provenance internally and key UI claims expose it to users
12. mobile Passport/Radar/Watch flows are production-ready
13. rate limiting, abuse protection, monitoring and production migrations are in place

## 18. Scope lock rule

New ideas discovered during implementation go to a **V1.1/V2 backlog** unless they are required to satisfy a locked V1 acceptance criterion or fix a correctness/security issue.

Developer HQ must not expand V1 feature scope without a Product HQ decision.
