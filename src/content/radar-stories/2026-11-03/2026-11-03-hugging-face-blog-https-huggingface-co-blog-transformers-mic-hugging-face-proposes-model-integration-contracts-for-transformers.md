---
story_id: story_9bddb139541144abab67ae440f350912
authors: []
date: 2026-11-03
generated_at: 2026-11-03T07:30:08.067Z
source: hugging-face-blog
section: ai
tags:
  - transformers
  - model-integration-testing
  - integration-contracts
  - cpu-ci-testing
  - model-fixtures
  - regression-detection
title: Hugging Face proposes Model Integration Contracts for Transformers
url: https://huggingface.co/blog/transformers-mic
why_read: Engineers can assess a reproducible CPU testing workflow that preserves architecture-specific paths while exposing its current coverage and validation gaps.
status: proposed
source_published_at: 2026-11-03T00:00:00.000Z
source_external_id: https://huggingface.co/blog/transformers-mic
source_adapter: rss
interest_score: 8
utility_score: 8
novelty_score: 8
depth_score: 9
impact_score: 7
---

Hugging Face proposes Model Integration Contracts for Transformers. Each contract packages a reduced fixture derived from a real checkpoint, a runnable usage path, and reviewed output baselines. As of November 1, 2026, the CI job reports failures without blocking pull requests.

The fixture preserves architecture-specific layer types and preprocessing while shrinking dimensions and weights. Contracts pin fixture revisions, package versions, and expected outputs, then run quickly on CPUs. Replayed MICs detected an SDPA-related UMT5 regression from its introduction through its fix.

The workflow remains experimental in practice: coverage is partial, real pull-request detection rates are unknown, and some bugs appear only with original weights. Synthetic Whisper tests also produced differing results for random and overfit fixtures.
