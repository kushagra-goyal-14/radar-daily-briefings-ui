---
story_id: story_ad2e99b5e5674fa9800fcbfb376cd03d
authors:
  - zhoutong
date: 2026-08-05
generated_at: 2026-08-05T05:23:22.824Z
source: hn
section: ai
tags:
  - deepseek-v4-flash
  - amd-mi300x
  - vllm-rocm
  - fp8-inference
  - moe-routing
  - kv-cache-offloading
title: Repository documents DeepSeek V4 Flash on one AMD MI300X
url: https://github.com/ryanzhou/deepseek-v4-flash-mi300x
why_read: Engineers can assess whether this hardware-specific stack meets their throughput, correctness, memory, and operational requirements.
status: released
source_published_at: 2026-08-04T10:00:55.000Z
hn_id: "49166386"
comments: https://news.ycombinator.com/item?id=49166386
interest_score: 8
utility_score: 9
novelty_score: 8
depth_score: 9
impact_score: 7
---

The repository documents a production configuration for running DeepSeek-V4-Flash-0731 on one AMD MI300X. It includes digest-pinned ROCm/vLLM components, read-only overlays, tuning tables, deployment instructions, and validation checks.

Its patches address MI300X FNUZ FP8 representation, MXFP4 MoE routing, ROCm attention paths, speculative verification, and CPU-to-GPU KV-cache synchronization. The configuration keeps weights in HBM and combines a 20 GB GPU KV pool with a 96 GiB CPU tier.

Reported results include 168.6 tok/s median single-stream decode and 830.2 tok/s aggregate at 64 streams. These measurements apply to the exact pinned stack, while prompt dependence and approximately 204.5 GB peak HBM use constrain portability.
