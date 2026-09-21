---
story_id: story_d3b54bf30db64351b120665fc934ad7b
authors:
  - nandakishor_ml
date: 2026-09-20
generated_at: 2026-09-20T07:30:43.471Z
source: hn
section: ai
tags:
  - non-autoregressive-models
  - reinforcement-learning
  - structured-decisions
  - probability-calibration
  - multilingual-routing
  - open-weights
title: Laya releases open multilingual models for structured decisions
url: https://laya.convaiinnovations.com/
why_read: Engineers can evaluate an open, schema-oriented inference approach while accounting for routing, calibration, option-count, and fine-tuning constraints.
status: released
source_published_at: 2026-09-19T10:46:58.000Z
hn_id: "49765348"
comments: https://news.ycombinator.com/item?id=49765348
interest_score: 8
utility_score: 8
novelty_score: 7
depth_score: 8
impact_score: 7
---

The Laya project reports released non-autoregressive models for structured decisions. Its three checkpoints cover English, multilingual, and typed-decision workloads, with Apache 2.0 weights and a Python package.

Laya defines choice, ordinal-score, and boolean primitives that return distributions or probabilities in one forward pass. A Unicode- and stopword-based router selects checkpoints before inference, supporting multilingual inputs and avoiding language-script failures reported for the English model.

The article reports low-millisecond latency and benchmark gains over TypeSafe Jev, but these figures are project-authored. Engineers should note that key results require fine-tuning, calibration needs domain fitting, and performance drops sharply for large choice sets.
