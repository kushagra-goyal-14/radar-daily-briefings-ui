---
story_id: story_a400b8b1f50d4031aec5076479d00b32
authors: []
date: 2026-11-01
generated_at: 2026-11-01T07:30:28.638Z
source: hugging-face-blog
section: ai
tags:
  - mistral-large-4
  - mixture-of-experts
  - multimodal-model
  - open-weight-model
  - model-inference
  - cybersecurity-modeling
title: Mistral releases Large 4 open-weight multimodal model
url: https://huggingface.co/blog/mistral-large4
why_read: Engineers can evaluate deployment, fine-tuning, and inference options for a large open-weight model targeting coding and defensive cybersecurity workflows.
status: released
source_published_at: 2026-10-29T00:00:00.000Z
source_external_id: https://huggingface.co/blog/mistral-large4
source_adapter: rss
interest_score: 8
utility_score: 8
novelty_score: 6
depth_score: 8
impact_score: 7
---

Mistral has released Mistral Large 4, an open-weight multimodal and multilingual Mixture-of-Experts model. The article describes approximately 1T total parameters, 49B active parameters, a 1M-token context window, and official FP8 and NVFP4 variants.

Its architecture combines sparse expert routing with Multi-head Latent Attention, a DeepSeek Sparse Attention indexer, and a 1.6B Pixtral vision encoder. Hugging Face documents day-one support for Transformers, vLLM, llama.cpp, and TRL, alongside hosted deployment recipes.

The release targets coding agents, multimodal workloads, and defensive cybersecurity tasks. Reported benchmarks include 82% on a vulnerability reproduction-and-patching test and 93% on Cybench, but the supplied evidence provides no independent validation or production-adoption data.
