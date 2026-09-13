# PiChan

**See what others miss.**

PiChan is an onchain intelligence and market discovery product.

## Product source of truth

PiChan launches **RH-first** but is **multi-chain by design**.

- [`docs/PRODUCT_ARCHITECTURE.md`](./docs/PRODUCT_ARCHITECTURE.md) — product system, V1 scope and development rules
- [`docs/ADR-001-MULTICHAIN-FOUNDATION.md`](./docs/ADR-001-MULTICHAIN-FOUNDATION.md) — locked multi-chain architecture decision

### Locked network direction

1. RH — launch network
2. Solana — second network / first non-EVM adapter
3. Base — planned EVM expansion
4. BNB Chain
5. Ethereum
6. Additional chains based on demand and data quality

Core PiChan systems must remain chain-agnostic. Network-specific behavior belongs in chain adapters and chain-specific evidence modules.

## Brand source of truth

The locked **PiChan Brand Guidelines v1.0** and production logo masters live under [`brand/`](./brand/).

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

### Brand rule

Do not redraw, reshape, recolor, rotate, or recreate the PiChan bird. All approved logo variants derive from the same locked master geometry in `brand/vector/`.

---

PiChan Brand Guidelines v1.0 — September 2026
