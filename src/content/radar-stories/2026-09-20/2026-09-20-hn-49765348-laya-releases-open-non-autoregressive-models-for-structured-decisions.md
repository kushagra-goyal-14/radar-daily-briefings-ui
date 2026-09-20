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
title: Laya releases open non-autoregressive models for structured decisions
url: https://laya.convaiinnovations.com/
why_read: Engineers can assess an open deployment option for high-volume classification while accounting for routing, calibration, and option-count constraints.
status: released
source_published_at: 2026-09-19T10:46:58.000Z
hn_id: "49765348"
comments: https://news.ycombinator.com/item?id=49765348
interest_score: 8
utility_score: 8
novelty_score: 7
depth_score: 8
impact_score: 6
---

The Laya project reports releasing an open family of non-autoregressive decision models for structured questions. Its checkpoints support choice selection, ordinal scoring, and boolean probabilities, with a Python package and Hugging Face repository.

The models use bidirectional encoders and a router that inspects Unicode scripts before selecting English or multilingual checkpoints. The article reports 32.8-millisecond single-question inference, 7.2-millisecond batched inference, and support for more than 100 languages.

Engineers should note that the evidence is project-reported. Performance depends on fine-tuning and calibration, while choice accuracy declines with more than 20 options; the supplied material does not independently validate the benchmarks or Jev comparison.
