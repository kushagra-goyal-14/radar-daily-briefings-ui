---
story_id: story_8d98721aa28d4ded93c98c0d75bbdcb1
authors: []
date: 2026-09-25
generated_at: 2026-09-25T07:30:16.710Z
source: hugging-face-blog
section: ai
tags:
  - vision-language-models
  - speculative-decoding
  - inference-acceleration
  - edge-inference
  - llama-cpp
  - sglang
title: Liquid AI releases experimental LFM2.5-VL-DSpark drafter
url: https://huggingface.co/blog/LiquidAI/lfm2-5-vl-dspark
why_read: Engineers can evaluate a released speculative-decoding path while accounting for memory overhead, runtime requirements, and prefill-related limits.
status: released
source_published_at: 2026-09-24T14:08:57.000Z
source_external_id: https://huggingface.co/blog/LiquidAI/lfm2-5-vl-dspark
source_adapter: rss
interest_score: 8
utility_score: 8
novelty_score: 7
depth_score: 8
impact_score: 7
---

Liquid AI has released LFM2.5-VL-DSpark, an experimental DSpark draft model for LFM2.5-VL-3B. It adds a speculative decoding path intended to improve vision-language inference without changing verified output quality.

The drafter uses tapped hidden states from the target model to propose blocks of candidate tokens. It contains approximately 280 million parameters, or 8.9% of the target, and is supported by llama.cpp, MLX-VLM, and SGLang.

Liquid AI reports decoding speedups up to 3.13x on an M5 Max and 2.66x on an H100. Because speculation does not accelerate vision encoding or prefill, end-to-end gains depend on workload and hardware.
