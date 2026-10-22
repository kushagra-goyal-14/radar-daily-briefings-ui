---
story_id: story_61f1604c78f04c3e9c5b5c92138f4230
authors: []
date: 2026-10-21
generated_at: 2026-10-22T12:19:31.017Z
source: hugging-face-blog
section: ai
tags:
  - kumo-relational
  - relational-foundation-model
  - in-context-learning
  - relational-databases
  - predictive-query-language
  - structured-data-models
title: NVIDIA releases Kumo Relational foundation model for databases
url: https://huggingface.co/blog/nvidia/kumo-relational
why_read: Engineers can evaluate database-native, in-context prediction without task-specific training or manual feature engineering, subject to documented constraints.
status: released
source_published_at: 2026-10-21T18:26:30.000Z
source_external_id: https://huggingface.co/blog/nvidia/kumo-relational
source_adapter: rss
interest_score: 9
utility_score: 7
novelty_score: 8
depth_score: 9
impact_score: 8
---

NVIDIA has released Kumo Relational, a pre-trained foundation model that predicts directly from relational databases without task-specific training or feature engineering. The model is available through NVIDIA’s structured-data-models library and as an NVIDIA NIM.

Kumo Relational uses Predictive Query Language to define tasks, replays historical database states for temporal queries, and gathers up to 10,000 context examples. Its architecture combines within-table attention with graph attention across primary-key and foreign-key relationships.

NVIDIA reports results across 41 benchmarks on 15 databases, including gains over supervised models. The article notes that task-specific models may still win on very large training sets and that useful signals must be reachable within limited relational hops.
