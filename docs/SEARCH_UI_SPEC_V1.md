# PiChan V1 — Search UI Spec

**Status:** DESIGN HQ — LOCKED  
**Product version:** V1.0  
**Design revision:** 1.0  
**Date:** 2026-09-13  
**Owner:** PiChan Design HQ

Search answers one question:

> **Which exact project, deployment or creator am I looking for?**

Search is an **identity resolver**, not a crypto discovery leaderboard. Public UI says **Search**; `Identity Resolver` is only the internal design-pattern name.

This spec is locked against the V1 Product Spec, Core UI State Matrix, component system, Production Assets 2.2, Passport and Radar reference screens.

---

## 1. Locked product inputs

V1 Search accepts:

- Robinhood Chain contract address
- Solana mint/address
- project/token name
- ticker
- creator/deployer wallet address

Identity rules:

- canonical deployment identity is `chain_id + address`
- address alone is never treated as globally unique
- Solana-format identifiers may directly scope lookup to Solana
- EVM-format identifiers retain chain context and must support future multi-chain ambiguity
- exact identifiers are stronger resolver inputs than fuzzy names/tickers
- same-name/ticker collisions remain visible
- creator/wallet matches are a distinct result type
- `Canonical`, `Claimed`, `Authority Verified`, `Unclaimed` and `Disputed` are identity states, never safety labels
- payment, popularity, price and market cap never alter Search identity ordering

---

## 2. Locked design direction — Identity Resolver

Core principle:

> **Resolve first. Investigate second.**

Search identifies the correct entity; Passport or Creator Intelligence performs the investigation.

Visual character:

- calm and precise
- one strong search input
- exact match separated from fuzzy/name matches
- grouped result types
- chain + address/mint visible at ambiguous choice points
- identity states visible but secondary to the entity itself
- no market-first ranking
- no trending-token or top-gainer content

---

## 3. Screen structure

### Mobile

1. compact PiChan app/brand strip
2. title + short descriptor
3. primary Search field
4. query-type helper when useful
5. exact-match or ambiguity context
6. `Projects & Tokens`
7. `Creators / Wallets`
8. precision helper where useful
9. bottom navigation with Search active

### Desktop

Use the locked desktop shell:

- Search active in left rail
- global Search/command field is the same Search component
- page title and query summary
- main resolver results column
- compact query-specific context rail only when it adds value

Do not create a second unrelated desktop Search component.

---

## 4. Search field

Placeholder:

`Search project, ticker, address or creator wallet…`

Helpful neutral query states may say:

- `Searching name / ticker`
- `Detected: Solana address`
- `Detected: EVM address`

These are parser/context helpers, not confidence scores.

Desktop may use `⌘ K` / `Ctrl K` to focus Search.

---

## 5. Autocomplete / quick resolver

Autocomplete is compact and grouped. Aim for roughly 6–8 visible suggestions before `View all results`.

Groups:

1. `Exact match` when applicable
2. `Projects & Tokens`
3. `Creators / Wallets`

Rules:

- matched primary identity is visually strongest
- chain/result type is secondary
- exact identifier match has explicit `Exact address` / `Exact mint` treatment
- keyboard active row uses locked selected/focus treatment
- no price, market cap, gain/loss or paid ranking
- Escape closes without clearing query

Desktop keyboard behavior:

- Down/Up Arrow: move active suggestion
- Enter: open active result
- Escape: close suggestions, preserve query

---

## 6. Exact identifier state

Exact identifier is the strongest Search state.

Known deployment shows:

- icon/artwork
- name + ticker
- chain
- address/mint
- `Exact address` / `Exact mint`
- applicable identity states
- `Open Passport`

If the same EVM-format address resolves in more than one supported chain context, list each chain explicitly and do not auto-route from the hex address alone.

Solana-format identifiers can scope directly to Solana because the format is chain-specific.

---

## 7. Same-name/ticker ambiguity — signature Search state

When several deployments share a name/ticker, show the ambiguity before candidate rows.

Locked pattern:

**IDENTITY AMBIGUITY**  
`3 deployments share “BIRD”.`  
`Confirm chain + address before opening a Passport.`

Every candidate exposes:

- project/token name
- ticker
- chain
- deployment/mint address
- applicable identity state
- destination

A Canonical candidate may lead visually, but all valid alternatives remain visible. Search never silently selects the most popular or highest-value token.

---

## 8. Project/token result row

### Mobile

Compact open row with:

- icon
- name
- ticker + chain
- truncated address/mint + copy
- identity badges
- short identity context
- `Open Passport →`

Target compact row height: approximately 120–145 px depending wrapped states.

### Desktop

Use a denser resolver/table hybrid:

- Project / Token
- Address / Mint
- Identity
- Destination

Open separators are preferred over card-per-result.

Whole row may be clickable, but explicit destination text remains visible.

---

## 9. Creator / wallet result

Creator/wallet matches are visually separated from project/token rows.

Show:

- identicon / known entity mark
- address/entity label
- chain
- `Creator / deployer wallet`
- observed role/project-count summary when available
- `View Creator Intelligence →`

Never route a creator result to Passport by default.

---

## 10. Result ordering

Locked visual ordering:

1. exact identifier match(es)
2. strongest project/name matches
3. other project/token matches
4. creator/wallet matches

Within ambiguous name/ticker results, identity evidence may inform hierarchy but must not hide alternatives.

Never use:

- price
- market cap
- paid placement
- popularity/search volume

as identity-ordering signals in V1.

---

## 11. Idle state

Idle Search stays useful but quiet.

Use guidance such as:

`Search by project name, ticker, deployment address or creator wallet.`

May show supported input categories:

- Project / token
- Ticker
- Address / mint
- Creator wallet

Do not add trending tokens or promotional discovery content.

---

## 12. Valid but unindexed address

A valid supported identifier with no current Passport is different from a generic no-result query.

Show:

`No PiChan Passport is indexed for this address yet.`

Then expose the real supported next action:

- Solana identifier → `Scan on Solana`
- V1 EVM identifier → `Scan on Robinhood Chain`

If the scan/index process is asynchronous, show the real pending/result state rather than implying instant availability.

---

## 13. Generic no result

Show:

`No indexed match for “…”`

Rules:

- preserve the query
- remind users of supported identifier types
- do not insert unrelated popular tokens
- offer a direct next path only when the input supports one

---

## 14. Malformed / unsupported input

When an address-like query does not match a supported format:

- explain the supported formats briefly
- keep the field editable
- do not route or guess
- do not erase the query

Unsupported future-chain addresses are not silently treated as Robinhood Chain.

---

## 15. Loading / error

### Loading

- preserve query
- Search remains visible
- skeletons preserve result geometry
- do not flash stale unrelated results as current

### Error

- preserve query
- show inline error near results
- offer `Retry`
- keep app shell/navigation usable

---

## 16. Mobile final composition

Reference width: 390 px.

Final mobile principles:

- Search input appears early
- ambiguity notice is compact, not a large warning card
- project rows remain readable but dense
- chain + address stay visible
- identity badges may wrap when needed
- creator results remain visually distinct
- no horizontal scrolling
- Search remains active in bottom navigation

Final reference: `PiChan_Search_Hifi_Mobile_v03_LOCKED.png`.

---

## 17. Desktop final composition

Reference width: 1440 px.

Final desktop principles:

- standard PiChan left rail
- global Search field contains current query
- main results column uses dense resolver/table hybrid
- compact query-specific context rail
- no general market widgets
- no large empty onboarding/explainer panel

Useful context rail content:

- query type
- project candidate count
- creator match count
- represented chain count
- precision helper
- compact reminder that identity state is not safety

Final reference: `PiChan_Search_Hifi_Desktop_v03_LOCKED.png`.

---

## 18. Required QA states

Search implementation must cover:

- Idle
- Typing
- Autocomplete open/closed
- Keyboard active suggestion
- Loading
- Exact address/mint
- EVM same-address multi-chain ambiguity
- Multiple same-name/ticker candidates
- Creator/wallet match
- Valid supported but unindexed address
- Generic no result
- Malformed/unsupported identifier
- Copy-address success
- Error / Retry

These extend the locked Core UI State Matrix; they do not create new V1 product scope.

---

## 19. Accessibility

Use an accessible combobox pattern on web:

- accessible input name
- semantic result groups
- visible focus
- active suggestion exposed to assistive technology
- Arrow navigation
- Enter selection
- Escape dismissal without query loss
- icon-only clear/copy controls have accessible names
- identity/result states never rely on color alone

Mobile uses normal platform text-editing and touch behavior.

---

## 20. Final lock criteria

Search is locked because:

1. exact identifiers are visibly the strongest resolver input
2. same-name/ticker candidates are never silently collapsed
3. chain + address/mint are visible at ambiguous choice points
4. identity verification states cannot be mistaken for safety
5. creator wallets are visibly a separate result type
6. valid unindexed identifiers receive a productive scan/index path
7. generic no-results never fill with unrelated discovery content
8. mobile and desktop share one semantic resolver model
9. autocomplete has a defined accessible keyboard contract
10. Search contains no market, paid or popularity ranking logic
11. the transition to Passport / Creator Intelligence is obvious
12. the visual system reuses the locked PiChan V1 components and brand assets without forking the product language

**Final Design HQ decision:** `Identity Resolver` is the locked V1 Search architecture. Do not redesign Search during implementation; implementation should consume the locked Search semantics, components and states.