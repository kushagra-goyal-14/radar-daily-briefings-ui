---
story_id: story_e1809fec6334424497a7d0b4b0746e01
authors:
  - gitpusher42
date: 2026-07-31
generated_at: 2026-07-31T08:47:28.404Z
source: hn
section: ai
tags:
  - on-device-inference
  - mixture-of-experts
  - apple-silicon
  - metal-runtime
  - expert-streaming
  - swift
title: TurboFieldfare releases Gemma 4 inference runtime for 8 GB Macs
url: https://github.com/drumih/turbo-fieldfare
why_read: Engineers can evaluate a model-specific approach to memory-constrained local inference and its hardware, storage, and platform limits.
status: released
source_published_at: 2026-07-29T15:05:43.000Z
hn_id: "49098510"
comments: https://news.ycombinator.com/item?id=49098510
interest_score: 8
utility_score: 8
novelty_score: 8
depth_score: 9
impact_score: 6
---

TurboFieldfare provides a Swift and Metal runtime for running the instruction-tuned Gemma 4 26B-A4B model on Apple Silicon Macs with at least 8 GB of RAM. The project reports about 2 GB of weights and KV-cache memory during inference.

The runtime keeps a shared 1.35 GB core and FP16 KV cache resident, while the CPU uses router-selected expert IDs to stream routed experts from SSD into Metal-visible buffers. Chunked prefill and a bounded expert cache support the memory constraint.

The project also includes a native Mac app, CLI, installer, and loopback OpenAI-compatible server. Its scope is limited to one pinned, text-only model checkpoint and requires macOS 26, Metal 4, and substantial disk storage.
