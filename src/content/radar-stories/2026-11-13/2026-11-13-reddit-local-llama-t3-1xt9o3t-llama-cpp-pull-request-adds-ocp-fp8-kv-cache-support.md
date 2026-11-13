---
story_id: story_b3a41aee6aef4b04b361b2f753613f95
authors:
  - /u/Kahvana
date: 2026-11-13
generated_at: 2026-11-13T07:30:39.568Z
source: reddit-local-llama
section: programming
tags:
  - llama-cpp
  - fp8
  - kv-cache
  - quantization
  - attention
  - e4m3
title: llama.cpp pull request adds OCP-FP8 KV-cache support
url: https://github.com/ggml-org/llama.cpp/pull/28392
why_read: Engineers evaluating llama.cpp inference changes can assess FP8 cache scaling, test coverage, and documented backend and device constraints.
status: in_progress
source_published_at: 2026-11-11T05:36:19.000Z
source_external_id: t3_1xt9o3t
source_adapter: reddit_rss
discussion: https://www.reddit.com/r/LocalLLaMA/comments/1xt9o3t/llamacpp_add_fp8_kvcache/
discussions:
  - source: reddit-local-llama
    url: https://www.reddit.com/r/LocalLLaMA/comments/1xt9o3t/llamacpp_add_fp8_kvcache/
interest_score: 7
utility_score: 7
novelty_score: 7
depth_score: 8
impact_score: 6
---

A llama.cpp pull request is adding OCP-FP8-based KV-cache support and remains in progress. It supports optional runtime or static per-tensor scales and has received approvals, but the supplied evidence does not show a merge or release.

The implementation applies scaling and multiplication at the graph level rather than modifying `ggml_flash_attn_ext`, aligning FP8 handling with existing ownership patterns. The change adds tests for conversion, loading, context shifts, and scaled-cache correctness.

Engineers should review the implementation alongside its documented constraints, including disabled FP8 multi-GPU configurations and OpenVINO test exclusions. The supplied material reports no independent performance or memory measurements.
