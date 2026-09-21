---
story_id: story_7de8549a87f64f6eba9910afe16b8c8f
authors:
  - blog.janestreet.com via eatonphil
date: 2026-09-21
generated_at: 2026-09-21T07:30:28.060Z
source: lobsters
section: ai
tags:
  - sequence-weighting
  - scaling-laws
  - llm-training
  - data-mixing
  - model-scaling
title: Jane Street study finds non-monotonic sequence-weighting scaling
url: https://blog.janestreet.com/a-study-of-sequence-weighting-at-scale
why_read: The findings affect data-mix extrapolation, model-size selection, epoching, and evaluation strategy for large-language-model training.
status: released
source_published_at: 2026-09-21T01:18:47.000Z
source_external_id: https://lobste.rs/s/tamvz4
source_adapter: rss
discussion: https://lobste.rs/s/tamvz4/study_sequence_weighting_at_scale
discussions:
  - source: lobsters
    url: https://lobste.rs/s/tamvz4/study_sequence_weighting_at_scale
interest_score: 8
utility_score: 7
novelty_score: 8
depth_score: 8
impact_score: 7
---

Jane Street researchers report a study of sequence weighting across two in-house language-model families and the open-weight Qwen 2.5 family. The study finds a non-monotonic effective sequence-weight exponent: it often rises from small to medium scales and falls at larger scales.

The metric estimates how loss reduction on training sequences depends on their assigned weights. Models were trained with log-uniform sequence weights, evaluated after multiple epochs, and compared across model sizes. More epochs shifted the observed peak toward smaller models.

The results caution against extrapolating data-weighting behavior from small models to large ones. The experiments use an internal text benchmark, and a proposed weighting-compensation approach remains untested.
