---
story_id: story_d3b54bf30db64351b120665fc934ad7b
authors:
  - nandakishor_ml
date: 2026-09-20
generated_at: 2026-09-20T07:30:43.471Z
source: hn
section: ai
tags:
  - decision-models
  - reinforcement-learning
  - structured-prediction
  - probability-calibration
  - multilingual-routing
  - open-weights
title: Laya releases open multilingual models for structured decisions
url: https://laya.convaiinnovations.com/
why_read: Engineers can assess Laya’s structured inference, routing design, calibration requirements, and stated limitations before evaluating deployment use cases.
status: released
source_published_at: 2026-09-19T10:46:58.000Z
hn_id: "49765348"
comments: https://news.ycombinator.com/item?id=49765348
interest_score: 8
utility_score: 8
novelty_score: 6
depth_score: 8
impact_score: 7
---

The Laya project reports releasing an open family of non-autoregressive decision models, packaged with three specialized checkpoints, a Python SDK, and a routing component. The stated status is released.

Laya evaluates typed choice, ordinal-score, and boolean questions in a forward pass, returning distributions and confidence-oriented values. Its router selects checkpoints using Unicode scripts and Latin-language signals, while the article reports sub-35-millisecond inference on a single GPU.

The source reports strong results across selected classification and calibration tests, but also documents weak performance with many-choice schemas and near-random base-model results without fine-tuning. These figures come from a promotional project article and lack independent corroboration in the supplied evidence.
