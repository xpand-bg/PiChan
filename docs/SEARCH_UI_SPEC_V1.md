# PiChan V1 — Search UI Spec

**Status:** DESIGN HQ — HIGH-FIDELITY DRAFT  
**Product version:** V1.0  
**Design system:** locked V1 foundation  
**Date:** 2026-09-13  
**Owner:** PiChan Design HQ

Search answers one question:

> **Which exact project, deployment or creator am I looking for?**

Search is an **identity resolver**, not a discovery leaderboard. It must help users reach the correct Passport/Creator without silently choosing the wrong same-name asset.

This spec reuses the locked V1 app shell, typography, status semantics, evidence language, result components, accessibility rules and Production Assets 2.2. It does not add product scope.

---

## 1. Product constraints from the locked V1

Search accepts:

- Robinhood Chain contract address
- Solana mint address
- project/token name
- ticker
- creator/deployer wallet address

Locked identity rules:

- canonical deployment identity is `chain_id + address`
- address alone is never globally unique
- Solana-format addresses can route directly to Solana lookup
- EVM addresses must not assume a chain when ambiguity exists
- name/ticker results must surface same-name/copy ambiguity
- `Verified` means identity/control evidence, never safety
- exact address/mint results receive priority
- creator/wallet matches must be labelled as a different result type

---

## 2. Research-informed principles

The design adapts proven search patterns to PiChan's higher-stakes identity problem.

### A. Exact identifiers are the strongest search input

Blockchain explorers commonly let users paste addresses directly. Etherscan supports address search and type-aware suggestions; CoinGecko explicitly notes that contract address is the most precise way to identify a specific token variant across chains.

PiChan implication:

- exact identifier matches lead the result set
- chain remains visible
- no name/ticker result is visually allowed to masquerade as an exact identifier match

### B. Result types should be visibly grouped

Solscan groups result types, helping users distinguish tokens, programs and labelled accounts. PiChan has fewer V1 result families, so the interface should be even clearer.

PiChan groups:

1. `Exact match` when applicable
2. `Projects & tokens`
3. `Creators / wallets`

Do not mix these as visually identical rows.

### C. Autocomplete should remain manageable and scannable

Search UX research supports keeping autocomplete lists limited, visually distinguishing scopes/types and enabling keyboard navigation.

PiChan implication:

- compact suggestion list
- result type/chain styled separately from primary matched text
- no huge scrolling command palette
- keyboard active-row state on desktop

### D. Failed search should not become a dead end

When no indexed match exists, users should receive a productive next path rather than generic search tips.

PiChan implication:

- valid supported address with no Passport: offer explicit scan/index path
- generic no-match: preserve query and suggest supported input types
- never invent sample results

### E. Accessibility is part of search behavior

The search input/suggestions follow the WAI-ARIA combobox interaction model: arrow navigation, Enter selection and Escape dismissal on desktop/web, with normal text-editing behavior preserved.

---

## 3. Chosen direction — Identity Resolver

`Identity Resolver` is the internal design pattern name. Public UI says **Search**.

The screen should feel calm and precise:

- one strong search input
- visible query-type detection where helpful
- exact match separated from fuzzy/name results
- ambiguity explained rather than hidden
- chain + address always available at the point of choice
- identity evidence states visible
- no market-price ranking
- no trending/search-popularity UI

The visual idea is:

> **Resolve first. Investigate second.**

Search identifies the correct entity; Passport performs the investigation.

---

## 4. Screen anatomy

### Mobile

1. compact brand/app bar
2. page title `Search`
3. primary search field
4. optional detected-query helper
5. ambiguity/exact-match context if needed
6. grouped results
7. bottom navigation with Search active

### Desktop

Use the standard desktop shell.

The global search/command field is the **same search component** used by Search. Do not create a visually unrelated second search system.

On `/search`:

- top global field contains/focuses the query
- page content renders the resolved result set
- ambiguity context appears above candidate rows
- an optional small contextual rail may explain the current identity resolution, not general product onboarding

---

## 5. Search input

Placeholder:

`Search project, ticker, address or creator wallet…`

Supported behavior:

- project name
- ticker
- Robinhood Chain/EVM address
- Solana address/mint
- creator/deployer wallet

### Desktop shortcut

`⌘ K` / `Ctrl K` may focus the global search field.

### Query helper

Only when useful, show a small neutral helper below the field:

- `Detected: Solana address`
- `Detected: EVM address`
- `Searching name / ticker`

This helper is descriptive, not a confidence score.

---

## 6. Autocomplete / quick results

Autocomplete is a compact overlay/panel, not the full results page.

Recommended maximum visible suggestions before `View all results`: ~6–8.

Suggested grouping:

```text
Exact match
  Signal Bird   $BIRD       Robinhood Chain
  0x90b4…e887

Projects & tokens
  Bird          $BIRD       Solana
  Blue Bird     $BIRD       Robinhood Chain

Creators / wallets
  0x7Ab2…9e31               Creator · Solana
```

Rules:

- matched primary text receives stronger emphasis
- result type and chain are secondary
- exact address match is visually distinct
- keyboard active row uses the locked selected surface + non-color focus treatment
- Enter opens selected result
- Escape dismisses the overlay without deleting the query
- no price/market-cap columns in autocomplete

---

## 7. Exact address / mint result

Exact match is the strongest Search state.

### Known indexed deployment

Show a dedicated `Exact match` row/surface with:

- token/project icon
- project name + ticker
- chain
- full/truncated deployment address with copy/reveal
- `Exact address` label
- Canonical / Claimed / Authority Verified / Disputed states when applicable
- destination: `Open Passport`

Do not show an investment-like score as the reason to choose the result.

### Multiple exact address matches across chains

Future-safe rule:

- list each deployment by chain
- do not auto-route from address alone
- explain: `This address exists in more than one supported chain context.`

### Solana-format address

The parser may directly scope lookup to Solana because the format is chain-specific.

### EVM-format address

Do not encode a permanent assumption that every EVM address means Robinhood Chain. If only one supported indexed match exists, that result can lead; otherwise show chain choices/candidates.

---

## 8. Name / ticker ambiguity — signature Search state

This is the most important visual problem Search must solve.

When multiple deployments share a name/ticker, show an **Identity ambiguity notice** before results:

`Multiple deployments share “BIRD”. Confirm the chain and address before opening a Passport.`

Candidate rows must expose:

- project/token name
- ticker
- chain
- deployment/mint address
- identity state: Canonical / Claimed / Authority Verified / Unclaimed / Disputed
- result type
- destination

### Canonical candidate

A canonical candidate may receive slightly stronger hierarchy and the `Canonical` label.

It must **not** hide the other candidates or auto-route the user.

### Visual semantics

- Canonical = strong identity evidence
- Authority Verified = relevant control evidence
- Claimed = representative claim accepted
- Unclaimed = no accepted claim
- Disputed = unresolved identity/claim issue

None mean `safe`.

---

## 9. Creator / deployer wallet result

Wallet matches use a distinct result component.

Required:

- address / entity label when known
- chain
- result type: `Creator / deployer wallet`
- observed role summary
- known project count where available
- evidence-backed relationship summary
- destination: `View Creator Intelligence`

Do not style creator results as token/project candidates.

---

## 10. Result row anatomy

### Project / token row

```text
[token icon] Signal Bird      $BIRD
             Robinhood Chain  [Canonical] [Claimed]
             0x90b4…e887
                                         Open Passport →
```

### Creator row

```text
[identicon] 0x7Ab2…9e31
            Creator / deployer wallet · Solana
            Observed across 3 projects
                                View Creator Intelligence →
```

Rules:

- project artwork fallback follows locked deterministic rules
- PiChan bird is never used as token artwork
- long addresses truncate predictably + copy/reveal
- whole row can be clickable, but explicit destination text remains visible
- no card-soup; use open rows + separators by default

---

## 11. Result ordering

This spec does not redefine backend ranking logic, but visual ordering must respect identity certainty.

Preferred UI order:

1. exact identifier match(es)
2. strong project/name matches
3. other project/token matches
4. creator/wallet matches

Within ambiguous name/ticker results, canonical/identity state may inform hierarchy but may not suppress other valid candidates.

No paid placement can alter Search identity ordering in V1.

---

## 12. Idle state

Search should not show fake trending tokens or promotional discovery content.

Use calm guidance:

`Search by project name, ticker, deployment address or creator wallet.`

Supported-input hints may be shown as non-interactive examples/categories:

- Project / token
- Ticker
- Address / mint
- Creator wallet

Do not add Recent Searches as a V1 requirement unless separately approved.

---

## 13. No indexed match

### Valid supported address

This is not the same as a generic no-result state.

Show:

`No PiChan Passport is indexed for this address yet.`

Then provide the supported next action:

- Solana-format address → `Scan on Solana`
- EVM-format address → explicit chain context, with `Scan on Robinhood Chain` in V1

If indexing/scanning is asynchronous, show the actual resulting state rather than implying instant availability.

### Generic text query no match

Show:

`No indexed match for “…”`

Then:

- preserve the query
- remind the user of supported identifiers
- provide `Search address instead` guidance only when meaningful
- do not fill the page with unrelated popular tokens

---

## 14. Loading / error

### Loading

- search field remains interactive where safe
- preserve query
- skeleton rows preserve expected result geometry

### Error

- inline message below/near result region
- preserve query
- `Retry`
- app shell remains usable

Do not clear the query because the backend failed.

---

## 15. Mobile composition

Reference width: 390 px.

Primary design target is same-name ambiguity because it is the hardest state.

```text
┌────────────────────────────────────┐
│ PiChan                             │
│ Search                             │
│ [ bird______________________ × ]   │
│ Searching name / ticker            │
│                                    │
│ IDENTITY AMBIGUITY                 │
│ 3 deployments share “BIRD”.       │
│ Confirm chain + address.           │
│                                    │
│ PROJECTS & TOKENS                  │
│ [icon] Bird $BIRD                  │
│        Robinhood Chain             │
│        Canonical · Claimed         │
│        0x90b4…e887                 │
│        Open Passport →             │
│ ────────────────────────────────── │
│ [icon] Bird $BIRD                  │
│        Solana · Unclaimed          │
│        8xG…Ab2                     │
│        Open Passport →             │
│                                    │
│ CREATORS / WALLETS                 │
│ 0x7A…9E31 · Creator · RH Chain     │
│ View Creator Intelligence →        │
│                                    │
│ Radar   Search   Watch   Me        │
└────────────────────────────────────┘
```

Rules:

- input appears immediately
- no horizontal scroll
- identity badges may wrap beneath chain
- destination stays obvious
- result rows target practical ~72–92 px minimum depending metadata

---

## 16. Desktop composition

Reference width: 1440 px.

Use standard left rail + top global search.

Main results column target: ~780–860 px.

Optional context rail: ~280–320 px only when it adds query-specific value.

For ambiguity, context rail can show:

- `Query type: Name / ticker`
- number of candidate deployments
- chains represented
- short identity reminder: `Canonical identifies the deployment, not investment safety.`
- helper: `For the most precise lookup, paste the deployment address.`

Do not use the rail for trending assets or market statistics.

---

## 17. Search states to design/QA

Required states from the locked state matrix:

- Idle
- Typing
- Loading
- Exact address/mint
- Multiple same-name/ticker
- Creator/wallet match
- Valid address with no indexed Passport / scan path
- Generic no result
- Error / retry

Additional interaction states:

- autocomplete closed/open
- keyboard active suggestion
- selected result
- copy address success
- unsupported/malformed address helper

---

## 18. Accessibility

Use the accessible combobox model:

- visible input label or accessible name
- `Down Arrow` enters suggestions
- `Up Arrow` navigates suggestions
- `Enter` accepts/opens active result
- `Escape` dismisses autocomplete
- active suggestion is exposed to assistive technology
- search result groups have semantic headings
- icon-only clear/copy controls have accessible names
- focus remains visible
- result type/status never relies on color only

Mobile uses normal platform text editing and touch behavior.

---

## 19. Visual uniqueness

Search should feel like PiChan because it resolves **identity evidence**, not because it adds decoration.

Distinctive PiChan elements:

- dark observatory shell
- precise, calm search input
- exact-match hierarchy
- chain + address always visible for ambiguous assets
- identity state labels
- dedicated ambiguity notice
- no market-first ranking
- clear transition from Search → Passport / Creator Intelligence

Avoid:

- giant glowing search hero
- trending-token carousel
- top gainers in empty state
- paid search ranking
- green `verified = safe` semantics
- anonymous result rows without chain/address context

---

## 20. First high-fidelity build

Build and review:

1. mobile same-name ambiguity state
2. desktop same-name ambiguity state
3. state board covering:
   - idle
   - exact address
   - creator wallet
   - valid unindexed address / scan path
   - no result
   - loading/error

If the ambiguity state works, normal single-result search is a simpler variant.

---

## 21. Lock criteria

Search can be locked when:

1. exact address is visibly the strongest identifier
2. same-name/ticker candidates are never silently collapsed into one asset
3. chain + address are visible at the point of ambiguous choice
4. Canonical/Claimed/Authority states cannot be confused with safety
5. creator wallets are visibly a different result type
6. no-result states provide a productive next path
7. mobile + desktop use the same search semantics
8. autocomplete is keyboard accessible on web
9. the page contains no market/trending ranking logic
10. Search feels like the entry to Passport investigation, not a competing analytics page

**Current Design HQ decision:** proceed with the `Identity Resolver` high-fidelity direction.