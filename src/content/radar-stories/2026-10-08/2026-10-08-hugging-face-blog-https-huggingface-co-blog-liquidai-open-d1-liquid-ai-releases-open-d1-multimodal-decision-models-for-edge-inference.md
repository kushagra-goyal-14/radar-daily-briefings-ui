---
story_id: story_c5dae1023e074bd99c20885dbfe02267
authors: []
date: 2026-10-08
generated_at: 2026-10-08T07:30:44.053Z
source: hugging-face-blog
section: ai
tags:
  - multimodal-models
  - edge-inference
  - decision-models
  - open-weights
  - model-benchmarks
  - transformers
title: Liquid AI releases open d1 multimodal decision models for edge inference
url: https://huggingface.co/blog/LiquidAI/open-d1
why_read: Engineers can evaluate single-pass multimodal decisions against documented benchmarks, modalities, hardware timings, and deployment examples.
status: released
source_published_at: 2026-10-07T16:54:33.000Z
source_external_id: https://huggingface.co/blog/LiquidAI/open-d1
source_adapter: rss
interest_score: 8
utility_score: 8
novelty_score: 8
depth_score: 8
impact_score: 7
---

Liquid AI has released two open-weight decision models: d1-3B and d1-omni-600M. The latter is marked experimental, while both are available on Hugging Face.

The models produce structured decisions in a single forward pass rather than generating tokens. d1-3B accepts text and images; d1-omni-600M accepts text and images or text and audio. Liquid AI reports d1-3B’s 82.9 mean score across seven public datasets and sub-50-millisecond edge latency on measured Jetson devices.

The release includes Transformers installation instructions, batching examples, and model APIs. Vision and audio benchmark results are not reported, and d1-omni-600M has no speed figures because it remains an early research release.
