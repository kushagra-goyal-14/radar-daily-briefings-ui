---
story_id: story_5da5cfbe54b2416097d17db6b3fc1d71
authors: []
date: 2026-09-30
generated_at: 2026-09-30T07:30:23.076Z
source: hugging-face-blog
section: ai
tags:
  - tabular-foundation-model
  - in-context-learning
  - tabular-prediction
  - transformer-architecture
  - synthetic-data-generation
  - open-model
title: NVIDIA releases Kumo Tabular foundation model for tabular prediction
url: https://huggingface.co/blog/nvidia/kumo-tabular
why_read: Engineers can evaluate an open, commercially licensed tabular model using in-context inference, while accounting for documented validation and scaling limits.
status: released
source_published_at: 2026-09-29T15:30:38.000Z
source_external_id: https://huggingface.co/blog/nvidia/kumo-tabular
source_adapter: rss
interest_score: 8
utility_score: 8
novelty_score: 7
depth_score: 9
impact_score: 7
---

NVIDIA has released Kumo Tabular, an open foundation model for tabular classification and regression. It predicts labels for query rows from labeled context rows in a single forward pass, without task-specific training, tuning, or feature engineering.

The model is a Transformer using cell, column, row, and in-context attention. NVIDIA pretrained separate classification and regression models entirely on procedurally generated artificial tables, including missingness, categorical variation, and heavy-tailed targets. The released library provides preprocessing, ensembling, and many-class handling.

NVIDIA reports first-place results across four benchmarks. The model accepts numerical and categorical columns, and the company warns that accuracy may degrade beyond training ranges or under distribution shift; validation on held-out data remains necessary.
