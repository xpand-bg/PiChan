# PiChan V1 — Project Passport State Matrix

**Status:** DESIGN HQ — STATE VALIDATION  
**Product version:** V1.0  
**Design system revision:** 0.4  
**Date:** 2026-09-13  
**Owner:** PiChan Design HQ

This document validates the Passport design against incomplete, conflicting and changing evidence. The UI must preserve PiChan intelligence semantics in every state; the normal happy path is not sufficient for design approval.

---

## 1. Core rule

The three public intelligence outputs remain separate in every state:

- **Reputation Grade** — observed identity/transparency/history
- **Risk Signals** — current technical/control/supply/liquidity findings
- **Data Confidence** — strength, freshness and consistency of evidence

A change in one output must not silently rewrite another.

Examples:

- a project can retain a historical Reputation Grade while a new Critical Risk Signal appears
- conflicting evidence lowers Data Confidence; it does not automatically turn Reputation into `F`
- missing evidence produces `Unknown` / `Unrated`; absence of negative evidence is never treated as positive

---

## 2. Reference state — normal / claimed / canonical

Identity:

- Claimed
- Canonical
- chain known

Decision Strip example:

- Reputation: `B+`
- Risk Signals: `2 Warning · 1 Unknown`
- Data Confidence: `Medium`

PiChan Brief should summarize the most important evidence-backed issues without sounding alarmist.

Primary actions:

- Watch
- Share
- external market destination
- Report incorrect information

Do not show Claim when already Claimed.

---

## 3. New / unknown asset

Identity may be discovered directly from chain data with little provider/project context.

Required presentation:

- Reputation: **Unrated**
- Risk Signals: explicit **Unknown** where required evidence is missing
- Data Confidence: **Low**
- project may be `Unclaimed`

PiChan Brief language:

> PiChan does not have enough reliable evidence yet to publish a Reputation Grade.

Do not show reassuring success language.

The UI should explain what evidence is missing where useful.

---

## 4. Authority Verified / strong evidence

Possible state:

- Authority Verified
- Canonical
- all/most reputation dimensions covered
- fresh direct + provider evidence

Decision Strip may show:

- Reputation: `A-` or applicable grade
- Risk Signals: findings remain independent, including Info/Warning if present
- Data Confidence: `High`

High confidence is not a safety badge. Use cyan/blue evidence coverage styling, never success green.

---

## 5. Disputed / conflicting evidence

Required behavior:

- preserve both material observations
- show `Disputed` / `Conflicting` states where applicable
- lower Data Confidence
- keep historical Reputation visible if still meaningful
- create explicit evidence disclosure

Example:

- Reputation: `B` historical
- Risk Signals: `1 Warning · 1 Unknown`
- Data Confidence: `Low`

Evidence footer example:

`Conflicting · Needs review · View evidence`

PiChan Brief should say sources disagree and that confidence has been reduced. Never silently pick the source that makes the project look better or worse.

---

## 6. Stale evidence

When material evidence exceeds freshness policy:

- label the affected evidence `Stale` / `Needs refresh`
- lower Data Confidence as defined by the intelligence model
- preserve historical observation timestamps
- do not convert stale evidence into a positive default

The affected finding remains understandable even if live confirmation is unavailable.

---

## 7. Provider partial outage

If one provider fails while direct/other evidence remains available:

- render the available evidence normally
- mark provider-dependent fields as unavailable/partial
- lower Data Confidence only as appropriate
- do not turn the whole Passport into a generic error page

Use a restrained inline service-state notice near affected modules.

---

## 8. Unsupported / insufficient chain module

If PiChan cannot evaluate a specific condition on an otherwise supported asset:

- show `Unknown` or `Unsupported` for that finding/module
- explain the limitation in evidence detail
- keep independently available Passport sections usable

Unsupported is not Safe.

---

## 9. Loading and skeleton

Skeletons must preserve the final layout shape to avoid layout shift.

Do not skeletonize status values into misleading colored placeholders.

Recommended:

- neutral surface blocks
- stable Decision Strip dimensions
- stable identity area
- module-level loading rather than blocking the entire Passport when possible

---

## 10. Error / retry

Differentiate:

- route/asset not found
- temporary provider failure
- data normalization failure
- user/network issue

Keep the error copy factual and provide a retry action where useful.

If partial evidence is still valid, prefer partial Passport rendering over a full-screen error.

---

## 11. Navigation state

Passport is a detail route, not a fifth primary tab.

Mobile:

- show Back when history exists
- preserve originating bottom-tab state when known
- do not hard-code Radar as active
- deep-link fallback may return to Radar

Static Design HQ reference uses Search as the originating tab only to demonstrate the pattern; production preserves actual origin.

---

## 12. Public-copy rule

Internal design/debug notes must never appear in production UI.

Examples of text that is **not** user-facing:

- `Decision Strip`
- `Claim hidden because this Passport is already claimed`
- component/state implementation notes

The UI simply renders the appropriate action/state.

---

## 13. State lock gate

Passport passes state validation only when:

1. `Unrated`, `Unknown`, stale and conflicting states are visually explicit
2. High Confidence cannot be misread as Safe
3. Reputation is not overwritten by Risk
4. missing evidence cannot look positive
5. partial outages preserve usable intelligence
6. claim actions match actual claim state
7. navigation context is not falsely implied
8. evidence provenance remains available in every important state

**Decision:** these state rules are mandatory for Passport, Radar-derived detail, Creator Intelligence and any future surface that reuses the Decision Strip or Evidence Footer.
