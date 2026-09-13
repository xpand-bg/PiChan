# PiChan

**See what others miss.**

PiChan is an onchain intelligence and market discovery product.

## Product source of truth

PiChan V1 launches on **Robinhood Chain + Solana** and is **multi-chain by design**.

Implementation authority for V1:

1. [`docs/PRODUCT_SPEC_V1.md`](./docs/PRODUCT_SPEC_V1.md) — locked V1 features, screens, user flows, launch boundaries and acceptance criteria
2. [`docs/INTELLIGENCE_MODEL_V1.md`](./docs/INTELLIGENCE_MODEL_V1.md) — locked Reputation, Risk Signals, Data Confidence, evidence and event semantics
3. [`docs/MONETIZATION_V1.md`](./docs/MONETIZATION_V1.md) — locked business model, claimed-project monetization and crypto-only payment rule
4. [`docs/ADR-001-MULTICHAIN-FOUNDATION.md`](./docs/ADR-001-MULTICHAIN-FOUNDATION.md) — locked multi-chain/domain architecture decision
5. [`docs/PRODUCT_ARCHITECTURE.md`](./docs/PRODUCT_ARCHITECTURE.md) — high-level product/system architecture
6. [`docs/V1_BUILD_PLAN.md`](./docs/V1_BUILD_PLAN.md) — implementation sequence for Developer HQ

### V1 product pillars

- **Radar** — what should I investigate?
- **Project Passport** — what is this and what matters?
- **Flight Recorder** — what happened?
- **Watch** — what changes next?

Supporting drill-down: **Creator Intelligence**.

### V1 launch scope

- Robinhood Chain ERC-20 fungible assets
- Solana SPL Token
- Solana Token-2022
- identity/canonical checks
- Reputation Grade / Unrated
- Risk Signals
- Data Confidence
- PiChan Brief
- Market Pulse
- supply/holder intelligence
- liquidity intelligence
- Creator Intelligence
- Flight Recorder
- Watch + in-app/Telegram alerts
- Radar
- project claims/authority verification
- official links/wallet declarations
- Telegram scan
- share cards
- report/dispute + admin review

### V1 monetization

- research users: free core intelligence
- automatic Passport: free
- project claim and authority verification: free
- official links/wallet declarations and factual corrections: free
- Passport Pro: paid recurring project tools
- Priority Review: paid faster review workflow, never guaranteed approval
- Launch Pack: paid one-time project setup/bundle
- Sponsored Sighting: paid visibility, always separated from organic Radar
- all paid PiChan products: **crypto-only settlement**
- exact prices and accepted crypto assets/networks: **TBD**

Payment can never directly improve Reputation, suppress Risk Signals, increase Data Confidence, alter Flight Recorder history, buy a transparency designation or change organic Radar ranking.

### Locked network direction

1. Robinhood Chain + Solana — V1 launch
2. Base — planned V2 expansion
3. BNB Chain — planned V2 expansion
4. Ethereum — planned V2 expansion
5. Additional chains based on demand and data quality

Core PiChan systems must remain chain-agnostic. Network/provider-specific behavior belongs in adapters and evidence modules.

New product ideas discovered during implementation go to V1.1/V2 unless required for correctness, security or a locked V1 acceptance criterion.

## Brand source of truth

The locked **PiChan Brand Guidelines v1.1** and **Logo Master v2.0** live under [`brand/`](./brand/). The implementation reference is [`docs/BRAND_SYSTEM.md`](./docs/BRAND_SYSTEM.md).

### Core brand

- Primary tagline: **See what others miss.**
- Positioning: **Onchain intelligence & market discovery.**
- Personality line: **PiChan is watching.**
- Community: **PiChan | The Flock**
- Primary typeface: **Plus Jakarta Sans**
- Data / mono typeface: **JetBrains Mono**

### Core colors

- Deep Navy `#041F5F`
- Cyan Blue `#12B6F6`
- Royal Blue `#153FE9`
- White `#FFFFFF`

### Identity lock

The final PiChan bird is the approved **Curious PiChan / Concept B** refinement: observant, intelligent, confident and distinctive — never angry, childish or overly cute.

Only the bird geometry changed during the final refinement. The approved wordmark construction and colors, typography, palette, gradient, messaging and system rules remain unchanged.

Do not redraw, reshape, recolor, rotate, add effects to, or recreate the PiChan bird. All approved logo variants derive from the locked master geometry at `brand/vector/PiChan_Icon_Master.svg`.

---

PiChan Product V1.0 · Brand Guidelines v1.1 · Logo Master v2.0 · September 2026
