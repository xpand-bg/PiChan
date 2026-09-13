# PiChan V1 — Intelligence Model

**Status:** LOCKED — implementation source of truth  
**Version:** 1.0  
**Date:** 2026-09-13  
**Decision owner:** PiChan Product HQ

This document defines how PiChan V1 represents evidence, reputation, risk, confidence, freshness and material events across Robinhood Chain and Solana.

## 1. Core principle

PiChan is **evidence-first**.

Do not store only conclusions such as `reputation = B+` or `warning = true`.

Store:

```text
Observation
   ↓
Normalized Evidence
   ↓
Finding / Event
   ↓
Reputation + Confidence + Brief
   ↓
Passport / Flight Recorder / Watch / Radar
```

Raw provider payloads may be retained where appropriate, but all product logic must consume normalized evidence.

## 2. Three public intelligence outputs

These must remain separate.

### 2.1 Reputation Grade

Question answered:

> **What does PiChan know about the project's identity, transparency and observed history?**

Reputation is not a security score, price forecast or investment recommendation.

Public states:

- A+
- A
- A-
- B+
- B
- B-
- C+
- C
- C-
- D
- F
- **Unrated**

`Unrated` is required when evidence coverage is insufficient to publish a meaningful grade. Lack of negative evidence must never become a high reputation score by default.

Internal reputation dimensions:

1. **Identity & verification** — canonical identity, claim strength, authority verification
2. **Transparency** — official links, disclosed wallets, control disclosures, evidence consistency
3. **Continuity** — identity stability and history over time
4. **Creator history** — observed outcomes/behavior of related origin entities
5. **Observed project behavior** — material changes, disputes, liquidity/control/supply behavior relevant to trust

Initial weighting target:

- Identity & verification: 25%
- Transparency: 15%
- Continuity: 15%
- Creator history: 20%
- Observed project behavior: 25%

Weights must live in configuration/versioned scoring policy, not be scattered in application code.

Initial grade mapping for a publishable score:

- A+ = 95–100
- A = 90–94
- A- = 85–89
- B+ = 80–84
- B = 75–79
- B- = 70–74
- C+ = 65–69
- C = 60–64
- C- = 55–59
- D = 40–54
- F = 0–39

### Grade eligibility

A public letter grade requires:

- Data Confidence of at least **Medium**, and
- usable evidence in at least 3 of the 5 reputation dimensions, and
- no unresolved evidence integrity condition that makes the grade misleading.

Otherwise show **Unrated**.

A project may have critical Risk Signals while still having a historical Reputation Grade. The two outputs must not overwrite each other.

### 2.2 Risk Signals

Question answered:

> **What technical, control, supply or liquidity conditions deserve attention right now?**

Risk Signals are findings, not one universal score.

Public severity:

- **Critical** — a condition that may materially prevent expected transfer/trading behavior, create extraordinary control, or represent an immediate severe change
- **Warning** — a material capability/concentration/control condition worth inspecting
- **Info** — relevant capability/context that is not inherently negative
- **Unknown** — required evidence is unavailable, stale beyond policy, unsupported or conflicting

The UI may show summary counts such as:

`0 Critical · 2 Warnings · 1 Unknown`

Never show `SAFE`, `100% safe`, `guaranteed` or equivalent.

A capability is not automatically malicious. Example: an active freeze authority must be described as a capability and contextualized rather than automatically labelled a scam.

### 2.3 Data Confidence

Question answered:

> **How much reliable, fresh and consistent evidence supports what PiChan is showing?**

Public states:

- High
- Medium
- Low

Initial confidence dimensions:

- evidence coverage: 40%
- source quality/directness: 25%
- freshness: 20%
- consistency/corroboration: 15%

Initial mapping:

- High: 80–100
- Medium: 50–79
- Low: 0–49

Weights and thresholds are versioned configuration.

Confidence must decrease when important evidence is missing or contradictory. Unknown data must not be treated as a positive signal.

## 3. Evidence provenance hierarchy

Each evidence record includes source type, source identifier, observed time and raw/reference locator when possible.

Preferred evidence tiers:

### Tier 1 — Direct / authoritative

Examples:

- direct chain observation
- canonical protocol/network registry
- current onchain authority
- cryptographic wallet signature

### Tier 2 — Specialized analytics/provider

Examples:

- contract/token security provider
- market/liquidity provider
- holder/funding analytics provider

### Tier 3 — Signed project declaration

Examples:

- official website submitted by authority-verified representative
- declared treasury/team wallet
- Telegram/X submitted by accepted project claim

### Tier 4 — Unverified external observation

Examples:

- discovered website/social link
- community report
- external profile/label not yet corroborated

Higher tier does not mean every fact from that source is automatically correct; it sets the starting provenance strength.

## 4. Evidence conflict rule

When material sources disagree:

- preserve both observations
- create an evidence-conflict state
- do not silently choose the latest vendor response
- reduce Data Confidence where appropriate
- surface the conflict in admin/review and to users when material

## 5. Freshness

Evidence must have a freshness policy by type.

Examples:

- live market/liquidity: short TTL
- holder distribution: short/medium TTL
- contract authority: refreshed on event or scheduled check
- verified claim: persistent until superseded/revoked
- historical event: immutable once accepted, except correction metadata

UI vocabulary may include:

- Live
- checked X minutes ago
- observed on DATE
- historical
- needs refresh

Freshness policy must be configuration-driven.

## 6. Robinhood Chain risk modules

V1 Robinhood Chain modules should attempt to normalize at least the following where detectable.

### Contract/source

- source verified/open-source status
- proxy detection
- upgradeability
- implementation/admin change

### Ownership/privilege

- owner/admin exists
- owner/admin changed
- renounced state where meaningful
- privileged roles/addresses

### Supply control

- mint capability
- burn capability where privileged
- balance modification capability where detectable

### Transfer/trading control

- pause capability/state
- blacklist capability/state
- whitelist/restriction behavior
- buy/sell restriction / honeypot-style finding

### Fees

- current buy/sell tax where detectable
- modifiable fee/tax capability where detectable
- pool fee context where available

### Address reputation

- creator/deployer/admin risk labels, always source-attributed

### Liquidity

- pool identity
- total known liquidity
- pool age
- large liquidity change
- LP ownership/lock/burn state only where the mechanism is actually determinable

Do not reduce Uniswap V3 or other concentrated-liquidity positions to a simplistic `LP locked = safe` statement.

## 7. Solana risk modules

V1 Solana modules support both legacy SPL Token and Token-2022.

### Base authorities

- mint authority
- freeze authority
- metadata/update authority where applicable
- close authority where applicable

### Token-2022 extensions

Detect and explain enabled extensions relevant to user control/risk, including where applicable:

- permanent delegate
- pausable behavior
- transfer fees
- transfer hooks
- non-transferable state
- default account state
- metadata controls/pointers
- other extensions added to supported normalization policy

Do not label every active authority/extension as malicious. Explain what it enables.

### Solana-specific origin/context

- mint creator/origin relationships where observable
- authority wallets
- initial/important funder relationships
- launchpad/program relationships where useful

## 8. Supply & holder intelligence

Normalized holder metrics should include where data supports them:

- total supply
- circulating estimate only when methodology is reliable
- holder count
- top 10 relevant-holder concentration
- top 20 relevant-holder concentration where useful
- largest relevant holder
- creator/project declared wallet holdings
- related-wallet cluster concentration

### Exclusions

Concentration calculations should exclude or separately classify known:

- burn addresses
- liquidity pools
- system/program addresses
- exchange/custodian wallets when reliably tagged

The UI must make the methodology inspectable.

### Related-wallet evidence

V1 may use:

- direct transfers between top holders
- common funding wallet
- creator/project funding relationship
- near-launch funding relationship
- authoritative/provider relationship labels

Relationship strength must be represented internally. Weak evidence must not be presented as proven common ownership.

### Provider classifications

Labels such as `sniper`, `bundler`, `insider`, `dev` may be displayed only when:

- a source supports the classification
- the source is named/traceable
- PiChan does not silently convert a vendor label into a PiChan factual assertion

## 9. Liquidity intelligence

Normalized liquidity objects include where available:

- pool address/identifier
- DEX/protocol
- pair/base/quote assets
- total liquidity/value
- pool creation time
- liquidity provider/control metadata where meaningful
- lock/burn metadata only when determinable

Material liquidity events create Flight Recorder events and may trigger Watch alerts.

Thresholds must be configurable. Initial thresholds should be conservative enough to avoid noisy alerts and are tuned using live data before production launch.

## 10. Market Pulse

Market Pulse is context, not trading analysis.

Normalized fields may include:

- price
- market cap when reliable
- FDV
- liquidity
- 24h volume
- 24h transaction counts / buys/sells where available
- holder count
- asset/deployment age

When market cap is not reliable, show FDV or `Unknown` rather than inventing a value.

## 11. Creator Intelligence

Creator/origin relationships are typed.

Supported relationship roles include:

- deployer
- creator
- mint authority
- freeze authority
- update authority
- owner/admin
- initial funder
- project-declared wallet role

Creator history should report observed project facts/events, not speculative labels.

Examples of safe factual outcomes:

- active market observed
- inactive/no current market data
- large liquidity removal event observed
- ownership/authority changed
- disputed
- project declared inactive/community-led

Avoid automatically labelling historical projects “rugged” unless PiChan defines and evidences that finding explicitly in a future policy.

## 12. Event taxonomy

All material events use stable typed event codes.

### Identity

- `project_claimed`
- `authority_verified`
- `canonical_status_changed`
- `official_link_added`
- `official_link_changed`
- `official_wallet_declared`
- `lifecycle_changed`
- `dispute_opened`
- `dispute_resolved`

### Control / contract

- `owner_changed`
- `authority_changed`
- `proxy_implementation_changed`
- `risk_finding_added`
- `risk_finding_resolved`

### Supply / holders

- `material_mint`
- `material_burn`
- `holder_concentration_changed`
- `related_cluster_detected`
- `project_wallet_balance_changed`

### Liquidity

- `pool_created`
- `liquidity_added_materially`
- `liquidity_removed_materially`
- `liquidity_lock_changed`
- `liquidity_lock_expiring`

### Creator

- `creator_new_deployment`
- `creator_relationship_discovered`

### Scoring

- `reputation_changed`
- `confidence_changed`

Every event stores evidence references and before/after values where applicable.

## 13. Watch materiality

Watch should prefer fewer meaningful alerts over constant noise.

Initial severity mapping:

### Critical candidate events

- severe transfer/sell restriction newly detected
- new extraordinary control/privilege finding
- material contract implementation/authority change
- very large liquidity removal
- large unexpected mint
- canonical identity dispute

### High candidate events

- creator launches a new project
- meaningful holder/cluster concentration change
- official identity/link change
- liquidity lock/control condition changes
- major project-declared wallet movement

### Informational candidate events

- authority/project verification completed
- Reputation Grade changed without critical event
- Confidence materially increased/decreased
- new pool discovered

Exact thresholds are stored in configuration and calibrated before launch.

## 14. PiChan Brief generation

Brief input is normalized evidence/findings/events only.

Priority order:

1. critical risk/control changes
2. canonical/identity ambiguity
3. major supply/holder concentration
4. major liquidity condition/change
5. important creator history
6. verification/transparency positives
7. important unknowns

V1 templates should produce concise factual statements such as:

> Authority verified. No critical transfer-control finding is currently detected in the checked evidence. Four related top-holder wallets appear to hold 16.8% combined. Liquidity has been stable across the latest observation window.

Avoid:

> This token is safe and likely to perform well.

## 15. Data-source architecture

Providers are replaceable adapters, not the product truth.

Preferred source strategy:

### Robinhood Chain

- direct RPC / chain observations
- Robinhood authoritative registries where relevant
- explorer/indexer data
- specialized security provider(s)
- market/liquidity provider(s)

### Solana

- direct Solana RPC / parsed indexer observations
- token/program metadata
- wallet/funding/history provider(s)
- specialized security provider(s)
- market/liquidity provider(s)

Every adapter maps into PiChan normalized schemas. Product code must not depend directly on vendor-specific response shapes.

## 16. Versioning

Store with every score/finding where relevant:

- scoring model version
- normalization policy version
- source adapter/version metadata when useful
- calculation timestamp

Historical scores must remain interpretable after future model changes.
