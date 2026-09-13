# PiChan V1 — Search UI Final QA Lock

**Status:** DESIGN HQ — FINAL LOCK  
**Product version:** V1.0  
**Search architecture:** Identity Resolver  
**Date:** 2026-09-13  
**Owner:** PiChan Design HQ

This file records the final Search review. It locks Search against the V1 Product Spec, Core UI State Matrix, component system, Production Assets 2.2, Passport and Radar reference screens.

## 1. Final design decision

Public product name remains **Search**.

Search is locked as an **identity resolver** with one governing principle:

> **Resolve first. Investigate second.**

Search determines the correct project/deployment/creator identity. Passport and Creator Intelligence handle deeper investigation.

## 2. Final review changes from v0.2

The final pass intentionally reduced visual noise and improved scan speed:

- mobile brand/header area shortened so the input appears sooner
- ambiguity notice compressed without losing meaning
- mobile project rows reduced to a denser ~120–145 px rhythm
- ticker + chain combined where useful
- address/mint moved higher in each ambiguous row
- identity badges remain visible but secondary
- creator result kept as a separate type rather than another project row
- desktop changed from loose stacked result rows to a resolver/table hybrid
- desktop columns now expose Project/Token, Address/Mint, Identity and Destination at a glance
- desktop context rail reduced to query-specific resolution information only
- no persistent generic onboarding panel
- no market context added

## 3. Identity correctness QA

PASS — exact address/mint is the strongest visual resolver input.

PASS — same-name/ticker collisions show every valid candidate rather than silently selecting one.

PASS — chain + address/mint remain visible at the point of ambiguous choice.

PASS — Canonical, Claimed, Authority Verified, Unclaimed and Disputed remain identity states, not safety labels.

PASS — creator/deployer wallets use a separate component and destination.

PASS — EVM address logic remains future-safe for same-address multi-chain contexts.

PASS — Solana-format identifiers may scope directly to Solana.

## 4. Result ordering QA

Locked order:

1. exact identifier match(es)
2. strongest project/name matches
3. other project/token matches
4. creator/wallet matches

Explicitly excluded from identity ordering:

- token price
- market cap
- search popularity
- paid placement
- Sponsored Sighting state

Payment can never buy a stronger Search identity position.

## 5. State QA

Required Search states are covered:

- Idle
- Typing
- Autocomplete open
- Autocomplete closed
- Keyboard active suggestion
- Loading
- Exact address/mint
- Same-name/ticker ambiguity
- EVM same-address multi-chain ambiguity
- Creator/wallet match
- Valid supported but unindexed identifier
- Generic no indexed result
- Malformed/unsupported identifier
- Copy-address success
- Error / Retry

Rules:

- query is preserved through loading/error
- no-result states never inject unrelated popular tokens
- valid unindexed identifiers expose the actual scan/index path
- unsupported identifiers are not guessed into a supported chain

## 6. Autocomplete QA

PASS — compact grouped suggestion model.

PASS — project/token and creator/wallet results are visually distinct.

PASS — exact identifier result receives explicit treatment.

PASS — desktop keyboard contract is defined:

- Down/Up Arrow moves active result
- Enter opens active result
- Escape closes suggestions without clearing query

PASS — no price/market columns appear in autocomplete.

## 7. Mobile QA

PASS — input appears early.

PASS — no horizontal scrolling is required.

PASS — ambiguity context remains readable without becoming a warning-card wall.

PASS — row density supports multiple ambiguous candidates on one screen.

PASS — destination remains explicit.

PASS — Search stays active in bottom navigation.

Final reference:

`PiChan_Search_Hifi_Mobile_v03_LOCKED.png`

## 8. Desktop QA

PASS — standard locked PiChan shell is preserved.

PASS — global Search and Search page use one component/system.

PASS — resolver/table hybrid uses desktop width efficiently.

PASS — query-specific context rail adds identity-resolution value without becoming a dashboard.

PASS — market statistics/trending content are absent.

Final reference:

`PiChan_Search_Hifi_Desktop_v03_LOCKED.png`

## 9. Accessibility QA

Implementation must preserve:

- accessible Search input name
- semantic result-group headings
- visible focus state
- accessible active suggestion
- keyboard navigation
- Enter selection
- Escape dismissal without query loss
- accessible labels for clear/copy icon controls
- non-color identity/state communication

## 10. Final visual QA reference

`PiChan_Search_Final_QA_LOCKED.png` records the final exact-match, ambiguity, creator, unindexed, cross-chain, malformed/error and interaction/ordering review.

## 11. Lock

**Search V1 is locked.**

Developer HQ must implement the locked Identity Resolver architecture and consume the shared PiChan V1 tokens/components. Implementation may adapt spacing to real content/responsive constraints, but must not:

- turn Search into discovery/trending
- hide same-name alternatives
- collapse identity states into a safety badge
- add paid ranking
- remove chain/address context from ambiguous candidates
- merge creator results into project/token results
- fork the locked product visual language

Any future conceptual change to these rules is a Product/Design HQ change, not implementation polish.