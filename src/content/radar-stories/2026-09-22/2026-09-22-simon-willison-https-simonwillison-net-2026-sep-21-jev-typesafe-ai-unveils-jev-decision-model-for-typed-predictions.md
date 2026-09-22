---
story_id: story_7d30d66ea5894fc6a3287142b1baac90
authors: []
date: 2026-09-22
generated_at: 2026-09-22T07:30:15.145Z
source: simon-willison
section: ai
tags:
  - decision-models
  - structured-prediction
  - probabilistic-classification
  - search-reranking
  - model-evaluation
  - llm-bias
title: TypeSafe AI unveils Jev decision model for typed predictions
url: https://simonwillison.net/2026/Sep/21/jev
why_read: Engineers can assess whether typed probabilistic outputs fit classification or reranking pipelines while accounting for opacity, bias, and evaluation needs.
status: released
source_published_at: 2026-09-21T23:09:20.000Z
source_external_id: https://simonwillison.net/2026/Sep/21/jev/
source_adapter: atom
interest_score: 8
utility_score: 7
novelty_score: 4
depth_score: 6
impact_score: 6
---

TypeSafe AI has unveiled Jev, a model that returns typed probabilistic decisions instead of generated text. The article describes it as released and presents it through the “System One” or decision-model framing.

Jev accepts a string, string array, or name-value state and supports yes/no, choice, and score questions. It returns confidence values or probability distributions, evaluates multiple questions in parallel, and charges for input tokens while output is free.

Potential uses include classification and search reranking. However, the article notes that Jev offers little interpretability and could conceal bias, making structured evaluations important. Benchmark methodology and production reliability remain unspecified.
