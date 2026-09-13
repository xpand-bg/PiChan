# PiChan V1 — Core UI State Matrix

**Status:** DESIGN HQ — LOCKED FOUNDATION  
**Product version:** V1.0  
**Design system revision:** 1.0  
**Date:** 2026-09-13  
**Owner:** PiChan Design HQ

This matrix extends `PASSPORT_STATE_MATRIX_V1.md` across the rest of the locked V1 product. It exists so Developer HQ cannot implement only happy-path states.

---

## 1. Global data-bearing component states

Every applicable data-bearing component supports:

- loading
- complete
- no data yet
- Unknown / unsupported
- stale
- conflicting
- provider partial outage
- error / retry
- login/connect required where relevant
- permission/role restricted where relevant

Rules:

- Unknown is explicit and neutral
- missing data is never rendered as positive
- stale/conflicting/provider-outage state remains visible near the conclusion it affects
- skeletons preserve layout dimensions
- retry/error state keeps enough context to explain what failed

---

## 2. Search

| State | Required behavior |
|---|---|
| Idle | Search prompt supports project, token, address/mint and creator/deployer wallet. |
| Typing | Preserve query; no premature canonical assumption. |
| Loading | Stable results layout/skeleton. |
| Exact address/mint | Prioritize exact deployment result with chain visible. |
| Multiple same-name/ticker | Show ambiguity list; do not auto-route. |
| Creator/wallet match | Label result type clearly. |
| No result | Explain no indexed match and allow valid address scan/index path where product supports it. |
| Error | Inline retry; preserve query. |

---

## 3. Radar

| State | Required behavior |
|---|---|
| Organic normal | Show reason + `Why on Radar`. |
| New | Show freshness/age context; avoid implying verification. |
| Verified | Verification/canonical state visible without looking sponsored. |
| Material event | Event/reason leads; link to Passport/history. |
| Stale source | Freshness warning remains visible. |
| Provider outage | Partial-data treatment; do not fabricate reason. |
| Sponsored | Separate Sponsored Sighting component, explicitly labelled. |
| Loading/empty/error | Clear state; never fill production with demo/sample items. |

---

## 4. Watch

| State | Required behavior |
|---|---|
| Watch available | Clear action. |
| Adding | Pending/loading state; prevent duplicate action. |
| Watching | Persistent selected state. |
| Removing | Pending/loading. |
| Login/connect required | Explain requirement without losing context. |
| Error | Inline retry/feedback. |
| Alert preferences unavailable | Preserve Watch; show preferences issue separately. |

---

## 5. Alerts

| State | Required behavior |
|---|---|
| Unread | Non-color unread indicator + timestamp. |
| Read | Lower emphasis, same content. |
| Delivery pending | Operational state where surfaced. |
| Delivered | Optional channel status. |
| Supporting evidence stale | Mark freshness on the alert/detail. |
| Deduplicated/cooldown | May appear operationally; never create duplicate user alerts. |
| Error | Preserve event context and retry where applicable. |

No price-target alert states exist in V1.

---

## 6. Claim / authority verification

| State | Required behavior |
|---|---|
| Unclaimed/eligible | Show `Claim this Passport`. |
| Wallet disconnected | Connect/signature explanation. |
| Signature requested | Show exact address and purpose. |
| User rejected signature | Return to retryable state. |
| Claim submitted | Pending review state; no false verification. |
| More evidence requested | Explain next action. |
| Claimed | Remove claim CTA. |
| Authority Verified | Show stronger verified authority state. |
| Rejected | Reason/status where appropriate; allow permitted next step. |
| Disputed/re-review | Preserve prior history and explain current state. |

Claim/verification state never rewrites Reputation/Risk/Confidence automatically.

---

## 7. Report / dispute

| State | Required behavior |
|---|---|
| Draft | Preserve target finding/project context. |
| Validation error | Inline field feedback. |
| Submitting | Disable duplicate submission. |
| Submitted | Confirmation + reference/status. |
| Under review | Visible workflow status. |
| More information requested | Clear requested action. |
| Resolved | Outcome/history accessible. |
| Rejected/closed | Show reason/state where appropriate. |

Corrections do not silently erase historical evidence.

---

## 8. Project Inbox

| State | Required behavior |
|---|---|
| New | Unread/priority indication. |
| Open | Current owner/next action clear. |
| Awaiting project | Project action visible. |
| Awaiting PiChan/admin | No misleading action CTA. |
| Resolved | Resolution summary/history. |
| Closed | Archived/closed status. |
| Error/partial | Preserve item context. |

Free factual response/correction actions remain available without Passport Pro.

---

## 9. Passport Pro / entitlement

| State | Required behavior |
|---|---|
| Free | Free capabilities remain visible; paid capabilities may explain Pro. |
| Active | Active-until date + paid capabilities. |
| Expiring soon | Renewal CTA without panic styling. |
| Renewal invoice pending | Billing state shown separately. |
| Confirming renewal | Entitlement remains based on actual current expiry until confirmation logic activates extension. |
| Renewed | New expiry visible. |
| Expired | Disable paid capabilities only; preserve claim/public truth features. |
| Billing error | Does not affect public intelligence. |

---

## 10. Crypto invoice / payment

| State | Required behavior |
|---|---|
| Invoice ready | Show product, project, quoted price, settlement asset/network, exact amount, destination and expiry. |
| Awaiting payment | Copy actions enabled; timer/expiry explicit. |
| Payment detected | Show transaction detection without claiming final confirmation. |
| Confirming | Confirmation state/progress. |
| Confirmed | Transaction reference + next result. |
| Entitlement/campaign activated | Show resulting paid state separately from PiChan intelligence. |
| Expired | Disable payable appearance; regenerate/requote action. |
| Wrong/unsupported settlement context | Explicit network/asset mismatch. |
| Verification error | Preserve invoice context + retry/support path. |

Network and settlement asset must never be ambiguous.

---

## 11. Priority Review

| State | Required behavior |
|---|---|
| Not requested | Normal review path remains available where applicable. |
| Invoice pending | Payment status only. |
| Paid / queued | Explicitly say faster queue/service priority, not guaranteed approval. |
| Under review | Evidence/review status. |
| More evidence requested | Project action. |
| Completed approved outcome | Outcome based on evidence/policy. |
| Completed rejected outcome | Payment does not change outcome. |

---

## 12. Sponsored Sighting

| State | Required behavior |
|---|---|
| Draft/project-side | Not visible in organic Radar. |
| Pending review | No campaign-live implication. |
| Approved/scheduled | Campaign timing/status. |
| Active | Explicit Sponsored treatment in dedicated surface. |
| Rejected | Reason/status where appropriate. |
| Ended | No active placement. |
| Payment issue | Commercial state only; organic Radar unaffected. |

---

## 13. Telegram connection

| State | Required behavior |
|---|---|
| Not connected | Connect action. |
| Connecting | Pending state. |
| Connected | Account/channel state + settings. |
| Delivery disabled | Connection preserved, delivery state explicit. |
| Delivery error | Retry/reconnect guidance. |
| Disconnected/expired | Reconnect path. |

Web and Telegram use the same intelligence vocabulary.

---

## 14. Managed Projects / Project Control Center

| State | Required behavior |
|---|---|
| No managed projects | Clear claim/manage entry path. |
| Managed free | Truth-management, Inbox and public-state tools available. |
| Pro active | Paid operational modules visible. |
| Pro expired | Paid modules disabled/locked; free management preserved. |
| Review pending | Claim/verification workflow state visible. |
| Disputed | Evidence/review status visible. |
| Partial provider outage | Public intelligence status remains source-aware. |

No project control surface may provide direct editing of PiChan-generated scores/findings/history.

---

## 15. Admin review

| State | Required behavior |
|---|---|
| New queue item | Type, subject, evidence/status and priority visible. |
| Assigned/in review | Reviewer/workflow state. |
| Awaiting external evidence | Explicit blocked state. |
| Approved/resolved | Auditable outcome. |
| Rejected/closed | Auditable outcome/reason where appropriate. |
| Priority Review | Priority state visible but does not pre-decide result. |
| Sponsored review | Commercial campaign state separate from intelligence. |
| Payment inspection | Operational context only. |

Admin actions must be auditable and must not create hidden history rewrites.

---

## 16. Accessibility / interaction states

Every interactive component must also define:

- keyboard focus
- hover where relevant
- pressed/active
- disabled
- loading/pending
- error
- reduced-motion equivalent

Status and selection cannot rely on color alone.

---

## 17. State QA lock rule

A V1 screen is not implementation-ready until it maps its feature-specific content onto this matrix plus any screen-specific state spec.

`PASSPORT_STATE_MATRIX_V1.md` remains the detailed Passport intelligence-state source. This file is the cross-feature state contract for the rest of V1.