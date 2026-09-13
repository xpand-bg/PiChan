# PiChan V1 — Creator Intelligence High-Fidelity Refinement v0.2

**Status:** DESIGN HQ — FINAL LOCK  
**Date:** 2026-09-13  
**Parent spec:** `CREATOR_INTELLIGENCE_UI_SPEC_V1.md`

This refinement records the final high-fidelity review of the Creator Intelligence `Lineage Ledger` direction and locks the composition for V1 implementation.

## 1. Direction locked

Keep the `Lineage Ledger` architecture.

The screen is a relationship-investigation surface, not:

- a wallet portfolio
- a wallet P&L profile
- a generic graph explorer
- a social-profile page
- a creator leaderboard

The core user question remains:

> What is this wallet connected to, and what evidence proves those relationships?

## 2. Mobile lock

The mobile layout is linear and evidence-first.

Order:

1. creator address / chain / observed role summary
2. Creator Summary
3. Lineage Evidence Paths
4. Known Projects
5. Funding Relationships
6. Labels & Attribution
7. Cross-chain identity state
8. Evidence Chronology

The locked mobile reference is:

`PiChan_Creator_Intelligence_Mobile_v03_LOCKED.png`

Mobile never receives a squeezed desktop network graph. Relationships remain understandable in normal reading order.

## 3. Desktop lock

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

The locked desktop reference is:

`PiChan_Creator_Intelligence_Desktop_v03_LOCKED.png`

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

Locked rule:

> `Funding ≠ ownership`

Any entity merge requires separate strong evidence.

## 6. External label rule

External/provider labels remain visibly attributed.

Required runtime fields where available:

- provider/source name
- label text
- freshness / last checked
- details/evidence access

PiChan does not silently restate provider labels as its own conclusions.

## 7. Cross-chain rule

Default state:

`No supported cross-chain identity link established.`

A second-chain wallet remains separate unless the strong-evidence threshold is met.

Strong-link examples can include cryptographic signed proof plus corroborating project evidence.

Weak coincidences such as naming, timing, branding or funding patterns alone never merge identities.

## 8. Known Projects rule

Known Projects is factual project history, not performance scoring.

Each record prioritizes:

- project
- chain
- first observed / deployment date when known
- creator relationship
- current lifecycle / identity state
- one recent/notable evidence-backed event
- relationship evidence destination

Never add creator ROI, win-rate or price-performance ranking to V1.

## 9. Partial-data behavior

A creator with one known project or incomplete enrichment data remains useful.

Explicitly show Unknown/Unavailable when data is missing.

Do not fill an empty lineage with fake peers or speculative nodes.

## 10. Relationship correction

If later evidence changes a creator relationship:

- prior relationship remains in Evidence Chronology
- prior relationship is marked Corrected/Superseded
- new relationship is shown from the new evidence timestamp
- current Creator view reflects the corrected state

This mirrors Flight Recorder historical-integrity rules.

## 11. Final refinements from QA

The final pass added or clarified:

- first-observed context inside Known Projects
- source/freshness treatment for external provider labels
- inspectable transaction/reference information in Relationship Inspector
- explicit strong-evidence wording for cross-chain identity links
- conflict state for project declaration vs onchain role evidence
- stale provider-label state
- no-known-projects-beyond-entry state
- loading/error/partial-provider behavior
- preservation of the originating primary tab at runtime rather than hard-coding Search/Radar

## 12. QA conclusion

PASS — direct vs weak/provider relationships are distinguishable.

PASS — funding does not imply ownership.

PASS — provider labels stay attributed and freshness-aware.

PASS — cross-chain coincidence does not become identity.

PASS — strong cross-chain links require inspectable evidence.

PASS — corrected relationships preserve historical context.

PASS — partial data does not trigger speculative graph completion.

PASS — project history stays factual.

PASS — mobile preserves relationship semantics without horizontal graph navigation.

PASS — desktop Relationship Inspector explains why selected nodes are connected.

**Decision:** Creator Intelligence V1 is visually locked. Developer HQ must implement this architecture from the shared PiChan design system and may not replace it with a generic graph explorer or wallet-performance dashboard.