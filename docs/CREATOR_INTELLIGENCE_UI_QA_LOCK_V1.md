# PiChan V1 — Creator Intelligence UI Final QA Lock

**Status:** DESIGN HQ — FINAL LOCK  
**Product version:** V1.0  
**Architecture:** Lineage Ledger  
**Date:** 2026-09-13  
**Owner:** PiChan Design HQ

This file records the final Creator Intelligence review against the V1 Product Spec, Build Plan, shared PiChan UI system, Search, Passport and Flight Recorder.

## 1. Final design decision

Creator Intelligence is locked as an **evidence-backed relationship investigation surface**.

It answers:

> **What is this wallet connected to, what role did it play, and what proves that relationship?**

Public product name remains **Creator Intelligence**. `Lineage Ledger` is an internal design-system pattern name only.

## 2. Locked information hierarchy

1. creator wallet/address identity
2. chain + first observed context
3. observed role summary
4. Creator Summary
5. Lineage Ledger / mobile Evidence Paths
6. Known Projects
7. Funding Relationships
8. Labels & Attribution
9. Cross-chain identity state
10. Evidence Chronology

Desktop may move relationship detail, labels, funding and cross-chain identity into the sticky context rail.

## 3. Address and identity QA

PASS — raw wallet/address identity remains primary.

PASS — deterministic identicon is used unless stronger approved identity artwork exists.

PASS — display/entity names are not invented without evidence.

PASS — full address remains accessible to copy/reveal actions and assistive technology.

PASS — chain context stays visible.

## 4. Relationship QA

PASS — each relationship carries explicit text for role/type.

PASS — direct/verified evidence uses a strong solid Evidence Link.

PASS — provider/observed/correlational evidence uses a weaker/dashed treatment plus explicit wording.

PASS — connector color/style is never the only semantic indicator.

PASS — Relationship Inspector exposes source, target, chain, evidence class, first observed and inspectable reference where available.

PASS — mobile converts the same semantics into vertical Evidence Paths rather than horizontal graph navigation.

## 5. Funding QA

Locked rule:

> **Funding ≠ ownership.**

PASS — transfers can establish `Funded` / `Funded by` relationships.

PASS — a funding transfer alone never merges wallet identities.

PASS — amount/asset/time may be shown when useful and supported.

PASS — funding-only cases do not receive `Creator` / `Owner` labels without separate evidence.

## 6. Labels & attribution QA

PASS — PiChan-observed roles remain distinct from project declarations and external provider labels.

PASS — provider labels remain source-attributed.

PASS — provider freshness / last checked is available when the provider exposes it.

PASS — stale provider labels visibly become stale/contextual rather than silently remaining current fact.

PASS — project-declared labels stay `Declared by project` unless independently verified.

## 7. Cross-chain identity QA

Default state:

`No supported cross-chain identity link established.`

PASS — same naming, timing, branding, behavior or funding pattern does not merge cross-chain wallets.

PASS — strong cross-chain linking requires inspectable evidence such as signed proof, authoritative registry evidence or another Product HQ-approved strong method.

PASS — linked-entity state exposes why the wallets are connected.

## 8. Known Projects QA

Each project record supports where available:

- project/token
- chain
- first observed / deployment date
- relationship role
- current lifecycle / identity state
- notable factual historical event
- Passport destination
- relationship evidence destination

PASS — no project ranking by token returns.

PASS — no Creator ROI / win rate / success score.

PASS — lifecycle and event language remains factual.

## 9. Corrections and conflicts QA

PASS — corrected relationships preserve the old relationship in Evidence Chronology.

PASS — current Creator view reflects the corrected state.

PASS — project declaration vs onchain conflict can show both sources and an unresolved/conflict state.

PASS — conflicting evidence is never silently collapsed into a confident role.

## 10. Partial-data QA

Covered states:

- normal multi-project creator
- single known project
- no supported projects beyond entry relationship
- multiple observed roles
- provider-labelled wallet
- stale provider label
- conflicting role/label evidence
- funding-only relationship
- cross-chain link not established
- strong verified cross-chain entity
- corrected relationship
- loading
- partial provider outage
- error/retry

Rules:

- Unknown and Unavailable remain explicit
- no fake peers
- no speculative graph completion
- provider outage removes/marks only affected enrichment
- onchain-backed relationships remain available when unrelated providers fail
- no demo relationships are substituted

## 11. Mobile QA

Final reference:

`PiChan_Creator_Intelligence_Mobile_v03_LOCKED.png`

PASS — all required sections fit the normal vertical research flow.

PASS — no primary horizontal graph scrolling.

PASS — Evidence Paths preserve source → relationship → target logic.

PASS — Known Projects include first-observed context.

PASS — provider attribution and cross-chain identity state remain visible.

PASS — evidence chronology remains reachable before fixed bottom navigation.

PASS — tapping a relationship can use the shared bottom-sheet evidence pattern.

## 12. Desktop QA

Final reference:

`PiChan_Creator_Intelligence_Desktop_v03_LOCKED.png`

PASS — bounded 3-part Lineage Ledger uses desktop width without becoming a freeform graph explorer.

PASS — creator remains the visual anchor.

PASS — strong and weaker links remain distinguishable.

PASS — Known Projects use a structured desktop table/list.

PASS — selected relationship updates the sticky Relationship Inspector.

PASS — provider attribution/freshness stays readable in context rail.

PASS — funding and cross-chain identity remain separate facts.

## 13. Accessibility QA

Implementation must preserve:

- equivalent structured relationship/list semantics for the visual lineage
- relationship type in text
- evidence class/source in text
- visible focus for selectable nodes/edges
- keyboard selection on desktop
- accessible full wallet addresses
- touch targets for evidence/reveal actions
- reduced-motion behavior
- source/strength not communicated by color alone

## 14. Runtime navigation rule

Creator Intelligence is a detail route, not a fifth primary navigation destination.

The app must preserve the originating primary tab where practical (for example Search, Radar or Watch). Static references may show Search as the sample origin, but implementation must not hard-code that state.

## 15. Final visual QA reference

`PiChan_Creator_Intelligence_Final_QA_LOCKED.png` records the final review of:

- evidence-link grammar
- funding-only relationship
- provider label + stale state
- conflicting role evidence
- no cross-chain merge
- strong cross-chain link
- corrected relationship
- single-project/partial data
- no-known-projects-beyond-entry
- loading/error/outage

## 16. Lock

**Creator Intelligence V1 is locked.**

Developer HQ must consume the shared PiChan V1 tokens/components and implement the locked `Lineage Ledger` / mobile `Evidence Paths` architecture.

Implementation may adapt spacing for real content and responsive constraints, but must not:

- turn Creator Intelligence into a wallet P&L terminal
- add creator ROI, win rate or a global creator score
- turn funding into ownership
- silently merge cross-chain identities
- remove source attribution from external labels
- hide relationship corrections/conflicts
- replace the bounded lineage model with a generic graph hairball
- fabricate missing relationships or provider data
- fork the locked PiChan product visual language

Any future conceptual change to these rules is a Product/Design HQ decision, not implementation polish.