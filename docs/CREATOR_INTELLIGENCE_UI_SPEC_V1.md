# PiChan V1 — Creator Intelligence UI Spec

**Status:** DESIGN HQ — HIGH-FIDELITY DRAFT  
**Product version:** V1.0  
**Design system:** locked V1 foundation  
**Date:** 2026-09-13  
**Owner:** PiChan Design HQ

Creator Intelligence answers:

> **What is this wallet/entity connected to, what roles has it played, and what evidence proves those relationships?**

Route:

`/creator/{chain}/{address}`

Creator Intelligence is a drill-down from Passport/Search/Radar. It is **not** a fifth primary navigation item, a wallet P&L terminal, an identity doxxing surface, or a speculative cross-chain clustering product.

This screen reuses the locked V1 app shell, typography, evidence language, identity/status semantics, Flight Recorder chronology vocabulary and Production Assets 2.2.

---

## 1. Locked product requirements

From `PRODUCT_SPEC_V1.md` and `V1_BUILD_PLAN.md`, Creator Intelligence V1 must show:

- wallet/entity identifier
- observed roles such as deployer, creator, mint authority, update authority, funder
- known projects/deployments
- historical project events/outcomes based on observed evidence
- relevant funding relationships
- risk/address labels with source attribution
- evidence chronology

Implementation additionally requires:

- creator/origin role resolution
- known project/deployment history
- funding/entity relationships
- source-attributed address/risk labels
- cross-project relationship queries

V1 must **not** perform speculative cross-chain identity merges. Cross-chain linking is allowed only when strong evidence supports it.

---

## 2. Research-informed design principles

### A. Entity context is useful, but attribution is not binary

Modern blockchain intelligence systems model both addresses and higher-level entities. Arkham explicitly describes its approach as entity-first and confidence-scored, noting that attribution can be probabilistic rather than a binary ownership claim.

PiChan implication:

- show the wallet/address first
- show any higher-level entity grouping only when evidence supports it
- relationship language must say `Observed`, `Verified`, `Declared`, `Provider-labelled`, or `Unknown`
- never silently turn a weak funding/behavioral correlation into identity ownership

### B. Labels are context, not truth by themselves

Nansen exposes multiple labels associated with an address and separates addresses from grouped entities. Etherscan similarly enriches raw addresses with nametags, labels and categories.

PiChan implication:

- source attribution sits beside provider-derived labels
- PiChan-observed roles are visually distinct from external labels
- external labels do not automatically become PiChan conclusions
- provider label age/freshness is accessible

### C. Relationships need a visual overview, but V1 should avoid graph hairballs

Graph visualization is useful because relationships are difficult to understand in tables alone. V1, however, explicitly excludes a full Bubblemaps-style interactive graph.

PiChan implication:

- use a **bounded partial relationship view**
- only show evidence-backed nodes relevant to the current creator
- cap the overview to the creator, relevant funders and known projects
- deeper relationships remain in structured lists/chronology

### D. Project history should stay factual

Creator Intelligence is not a trader-performance profile.

Do not show:

- creator win rate
- realized P&L
- average ROI
- `good/bad creator` score
- speculative reputation based on token price performance

Instead show factual project lifecycle/current state and evidence-backed historical events.

---

## 3. Chosen direction — Lineage Ledger

`Lineage Ledger` is the internal design pattern name. Public UI remains **Creator Intelligence**.

The signature composition is a bounded evidence-backed relationship chain:

```text
UPSTREAM / FUNDING        CREATOR / ORIGIN             KNOWN PROJECTS
0x31…92bf  ─funded→       0x7Ab2…9e31   ─deployer→    Signal Bird
                                                    ├─creator→     Nova Protocol
                                                    └─funder→      Blue Finch
```

Every visible edge has:

- relationship type
- evidence strength/source
- chain context
- evidence access

This is **not** a freeform graph. It is a structured lineage view.

---

## 4. Page hierarchy

1. Creator identity header
2. Creator summary / worth knowing
3. Lineage Ledger
4. Observed Roles
5. Known Projects
6. Funding Relationships
7. Labels & Attributions
8. Evidence Chronology
9. Cross-chain identity note when relevant

Desktop may move roles, labels, funding summary and identity evidence into a sticky context rail.

---

## 5. Creator identity header

Required:

- deterministic identicon unless stronger verified identity artwork exists
- full/truncated address with copy/reveal/explorer actions
- chain
- first observed timestamp/date
- observed role summary
- optional entity name only when evidence supports it

Example:

```text
[identicon] 0x7Ab2…9e31
            Robinhood Chain
            Observed roles: Deployer · Creator · Funder
            First observed: Sep 03, 2026
```

Do **not** invent a display name such as `Team Wallet` without source evidence.

---

## 6. Creator summary

A compact PiChan research summary can state factual, evidence-backed conclusions such as:

- `Observed across 3 supported projects.`
- `Direct deployer evidence exists for 2 projects.`
- `One upstream funding relationship was observed before deployment.`
- `Latest creator activity: new supported deployment 31m ago.`

Rules:

- no global creator grade in V1
- no safety judgment
- no personality/doxxing language
- every statement must be traceable to a relationship/evidence record

The summary uses PiChan's factual tone but should not duplicate the full Passport `PiChan Brief` treatment.

---

## 7. Signature object — Evidence Link

An **Evidence Link** represents one relationship between the creator and another entity/project.

Required:

- source node
- target node
- relationship type
- evidence class
- chain
- evidence action

Relationship types may include:

- Deployer of
- Creator/origin of
- Mint authority for
- Update authority for
- Funded by
- Funded
- Project wallet for

Evidence classes:

- `Direct onchain`
- `Authority verified`
- `Signed declaration`
- `Authoritative registry`
- `Provider labelled`
- `Observed correlation`

`Observed correlation` must never be styled as equivalent to direct/verified evidence.

---

## 8. Lineage Ledger — desktop

Use three conceptual columns:

1. **Upstream** — relevant direct funders / strong origin relationships
2. **Creator** — current wallet/entity
3. **Projects** — known supported projects/deployments

Rules:

- creator remains the visual anchor
- show at most 1–3 upstream nodes and 3–5 project nodes in the overview
- edges display role labels such as `funded`, `deployer`, `creator`
- strong/direct evidence uses a solid connector
- provider/observed relationship uses a quieter/dashed connector
- selecting an edge updates the relationship inspector/context rail
- `View all relationships` can expand into structured lists, not a giant graph

No physics simulation or draggable graph is required in V1.

---

## 9. Lineage Ledger — mobile

Do not squeeze a desktop graph onto mobile.

Convert relationships into **Evidence Paths**:

```text
FUNDED BY
0x31…92bf
   ↓ Direct onchain · Sep 03
0x7Ab2…9e31
   ↓ Deployer · Direct onchain
Signal Bird
```

Then list additional project relationships underneath.

The same evidence semantics are preserved without horizontal panning.

---

## 10. Observed Roles

Show roles as evidence-backed records, not decorative chips alone.

Example:

```text
Deployer
Signal Bird · Robinhood Chain
Direct onchain · deployment tx · View evidence

Funder
Blue Finch · Robinhood Chain
Onchain transfer · View evidence
```

Role summary chips may appear in the header, but the detailed section must provide relationship context and evidence.

---

## 11. Known Projects

This is the primary factual history table/list.

Required fields where available:

- project/token
- chain
- creator relationship / role
- first observed/deployment date
- current lifecycle state
- canonical/claim state where relevant
- 1–2 notable evidence-backed historical events
- Passport destination

Desktop uses a structured table/list hybrid.

Mobile uses stacked project records.

Do not rank projects by price performance.

Useful factual history examples:

- `Authority verified`
- `Liquidity decreased materially`
- `Project became inactive`
- `Lifecycle changed to Community-led`
- `Creator relationship first observed`

---

## 12. Project outcome language

`Outcome` in Creator Intelligence means observed project state/history, not investment return.

Allowed:

- Active / Inactive / Community-led / Disputed / Abandoned when supported
- material liquidity/control event
- identity/authority event
- holder concentration event

Avoid:

- winner / loser
- successful / failed solely from price
- rugger / scammer without explicit supported evidence and approved label source
- creator score derived from token returns

---

## 13. Funding Relationships

Show only relevant funding relationships with evidence.

Each relationship can display:

- counterparty wallet/entity
- direction (`Funded by` / `Funded`)
- chain
- first observed transfer
- amount/asset if useful and reliable
- proximity to deployment when meaningful
- evidence source

Important rule:

> funding is a relationship, not proof of common ownership.

The UI must not visually merge wallets simply because funds moved between them.

---

## 14. Labels & Attributions

Separate three categories:

### PiChan observed role

Examples:

- Deployer
- Mint authority
- Funder

Derived from PiChan evidence.

### Project-declared / signed context

Examples:

- Team wallet
- Treasury

Shown as `Declared by project` unless independently verified.

### External provider label

Examples:

- exchange / service / behavioural/risk label

Required:

- provider/source name
- label text
- freshness when available
- evidence/details access

PiChan does not restate provider labels as its own unsupported conclusion.

---

## 15. Cross-chain identity handling

Cross-chain entity linking is conservative.

Possible states:

### Not established

`No supported cross-chain identity link has been established.`

This is the default when evidence is insufficient.

### Strongly supported

Show linked wallet/entity only when evidence is strong, for example:

- cryptographic signed proof across wallets
- authoritative registry linking identities
- direct project declaration plus independent corroboration
- another Product HQ-approved strong-evidence method

Relationship inspector must expose why the cross-chain link exists.

Never merge because of:

- same ENS/name only
- similar timing
- similar funding patterns alone
- same token branding alone

---

## 16. Evidence Chronology

Creator Intelligence reuses Flight Recorder's chronology vocabulary but focuses on creator relationships.

Example events:

- creator wallet funded
- creator deployed Signal Bird
- creator became mint authority for Project B
- new project relationship discovered
- provider label added/changed
- project relationship corrected

Required:

- timestamp
- event/relationship type
- affected project/entity
- evidence footer
- correction relationship where applicable

Do not duplicate an entire project Flight Recorder. Link to the specific project history when deeper project events matter.

---

## 17. Desktop Relationship Inspector

Desktop context rail can become a sticky **Relationship Inspector** when a project/edge is selected.

It shows:

- relationship type
- source wallet/entity
- target project/entity
- chain
- first observed
- evidence class
- tx/signature/reference
- confidence wording where applicable
- `View evidence`
- `Open Passport` / related destination

This inspector explains **why PiChan connects the nodes**.

---

## 18. Mobile detail behavior

Tapping a relationship or label opens the locked bottom-sheet pattern.

Use for:

- full wallet address
- relationship evidence
- provider attribution
- funding transaction details
- cross-chain link evidence

No separate screen is needed for simple evidence disclosure.

---

## 19. States

Required:

- normal multi-project creator
- single known project
- no known projects beyond current relationship
- wallet with multiple roles
- provider-labelled wallet
- conflicting role/label evidence
- stale provider label
- funding relationship only
- cross-chain link not established
- strongly verified cross-chain entity
- corrected relationship
- loading
- partial provider outage
- error/retry

---

## 20. Accessibility

Requirements:

- relationship map has equivalent structured list semantics
- connector color/style never carries meaning alone
- relationship type is text
- evidence strength/source is text
- keyboard selection of an edge updates inspector with visible focus
- mobile Evidence Paths remain logical in reading order
- full addresses available to assistive technology/copy controls
- reduced motion removes animated relationship drawing/highlights

---

## 21. Mobile composition

Reference width: 390 px.

```text
Back to Passport/Search
[identicon] 0x7Ab2…9e31
            Robinhood Chain
            Deployer · Creator · Funder

Creator Intelligence
Observed across 3 supported projects.

CREATOR SUMMARY
• 2 direct deployer relationships
• 1 relevant upstream funder
• latest project observed 31m ago

LINEAGE
Funded by 0x31…92bf
      ↓ Direct onchain
0x7Ab2…9e31
      ↓ Deployer
Signal Bird

KNOWN PROJECTS
Signal Bird
Deployer · Active · Canonical
notable event…

Nova Protocol
Creator · Active · Unclaimed
notable event…

FUNDING RELATIONSHIPS
...

LABELS & ATTRIBUTION
...

EVIDENCE CHRONOLOGY
...
```

---

## 22. Desktop composition

Reference width: 1440 px.

Use standard app shell.

Recommended layout:

- main research column: ~780–830 px
- context/relationship inspector: ~300–340 px
- 24 px gap

Main column:

- creator identity + summary
- Lineage Ledger
- Known Projects
- Evidence Chronology

Sticky context rail:

- observed roles
- selected Relationship Inspector
- funding summary
- labels/attributions
- cross-chain identity state

---

## 23. First high-fidelity build

Build and review:

1. mobile multi-project creator
2. desktop Lineage Ledger + selected relationship inspector
3. relationship/evidence component board
4. QA board covering:
   - direct deployer relationship
   - funding-only relationship
   - provider label attribution
   - no cross-chain link
   - strong cross-chain link
   - corrected relationship
   - single-project creator
   - partial/stale provider state

---

## 24. Lock criteria

Creator Intelligence can be locked when:

1. the user can understand why each project is connected to the creator
2. direct evidence and weak/provider evidence are visually distinct
3. funding never looks like ownership by default
4. project history is factual rather than price-performance scoring
5. cross-chain identities are not merged without strong evidence
6. source attribution stays attached to external labels
7. mobile preserves relationship meaning without a squeezed graph
8. desktop Lineage Ledger is useful without becoming a full graph explorer
9. Creator chronology complements rather than duplicates project Flight Recorder
10. all relationship claims can expose evidence

**Current Design HQ decision:** proceed with the `Lineage Ledger` high-fidelity direction.
