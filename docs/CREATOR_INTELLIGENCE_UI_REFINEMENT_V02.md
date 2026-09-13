# PiChan V1 — Creator Intelligence High-Fidelity Refinement v0.2

**Status:** DESIGN HQ — REVIEW CANDIDATE  
**Date:** 2026-09-13  
**Parent spec:** `CREATOR_INTELLIGENCE_UI_SPEC_V1.md`

This refinement records the first high-fidelity visual review of the Creator Intelligence `Lineage Ledger` direction.

## 1. Direction retained

Keep the `Lineage Ledger` architecture.

The screen should feel like a relationship investigation surface, not:

- a wallet portfolio
- a wallet P&L profile
- a generic graph explorer
- a social-profile page
- a creator leaderboard

The core user question remains:

> What is this wallet connected to, and what evidence proves those relationships?

## 2. Mobile refinement

The mobile layout is explicitly linear and evidence-first.

Order:

1. creator address / chain / observed role summary
2. Creator Summary
3. Lineage Evidence Paths
4. Known Projects
5. Funding Relationships
6. Labels & Attribution
7. Cross-chain identity state
8. Evidence Chronology

The full reference must show all sections before the bottom navigation. Mobile never receives a squeezed desktop network graph.

## 3. Desktop refinement

Desktop keeps the 68/32 research/context model established by Passport and Flight Recorder.

Main column:

- creator identity
- Creator Summary
- bounded Lineage Ledger
- Known Projects
- Evidence Chronology

Sticky context rail:

- selected Relationship Inspector
- observed role summary
- labels & attribution
- funding summary
- cross-chain identity state

## 4. Evidence Link grammar

Evidence links use both text and connector treatment.

### Strong/direct

- solid connector
- explicit role text
- evidence class such as `Direct onchain` or `Authority verified`

### Weaker/contextual

- dashed connector
- explicit wording such as `Observed relationship` or `Provider-labelled`
- never visually equivalent to direct evidence

Connector color/style is never the only semantic indicator.

## 5. Funding rule

Funding is always represented as a relationship, never automatic ownership/entity identity.

The UI must preserve the explicit rule:

`Funding ≠ ownership`

Any entity merge requires separate strong evidence.

## 6. External label rule

External/provider labels remain visibly attributed.

Example structure:

- label: `High-activity wallet`
- source class: `External provider label`
- PiChan treatment: `Context only`

Provider labels do not silently become PiChan conclusions.

## 7. Cross-chain rule

Default state:

`No supported cross-chain identity link established.`

A second-chain wallet remains separate unless the strong-evidence threshold is met.

Strong-link examples can include cryptographic signed proof plus corroborating project evidence.

Weak coincidences such as naming, timing, branding or funding pattern alone never merge identities.

## 8. Known Projects rule

Known Projects is factual project history, not performance scoring.

Each record prioritizes:

- project
- chain
- creator relationship
- current lifecycle / identity state
- one recent/notable evidence-backed event
- relationship evidence destination

Never add creator ROI, win-rate or project price-performance ranking to V1.

## 9. Partial-data behavior

A creator with one known project or incomplete enrichment data remains useful.

Explicitly show:

- known projects: `1`
- funding relationships: `Unknown` when unavailable
- provider labels: `Unavailable` when unavailable

Do not fill an empty lineage with fake peers or speculative nodes.

## 10. Relationship correction

If later evidence changes a creator relationship:

- prior relationship remains in Evidence Chronology
- prior relationship is marked Corrected/Superseded
- new relationship is shown from the new evidence timestamp
- current Creator view reflects the corrected state

This mirrors Flight Recorder historical-integrity rules.

## 11. QA conclusion

The current v0.2 direction passes the key conceptual tests:

- direct vs weak/provider relationships are distinguishable
- funding does not imply ownership
- provider labels stay attributed
- cross-chain coincidence does not become identity
- partial data does not trigger speculative graph completion
- project history stays factual
- mobile preserves relationship semantics without horizontal graph navigation

**Decision:** retain `Lineage Ledger` and proceed to final component/state QA before lock.
