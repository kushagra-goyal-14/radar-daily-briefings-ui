---
story_id: story_7ac5bdd700dd46118509f92823f3b6a0
authors:
  - Ardakilic
date: 2026-09-27
generated_at: 2026-09-27T07:30:08.345Z
source: hn
section: ai
tags:
  - local-inference
  - decision-models
  - typed-predictions
  - onnx-runtime
  - api-compatibility
  - open-weights
title: Ollaya releases local runtime for open-source decision models
url: https://ollaya.dev/
why_read: Engineers can evaluate private, typed local inference workloads against Ollaya’s model, compatibility, hardware, and latency constraints.
status: released
source_published_at: 2026-09-25T18:33:50.000Z
hn_id: "49848269"
comments: https://news.ycombinator.com/item?id=49848269
interest_score: 8
utility_score: 8
novelty_score: 7
depth_score: 8
impact_score: 6
---

Ollaya presents a released open-source runtime for running typed decision models locally. It accepts questions about text or JSON and returns calibrated answers without token-by-token generation.

The runtime uses ONNX Runtime and serves TypeSafe-compatible request and response shapes. Its model catalog includes Laya, decider, NLI, gliclass, qwen3guard, and other open-weight models. The project reports an 8–10 ms median five-question Laya request on an NVIDIA RTX 4090 and offers desktop, command-line, and Docker deployments.

Platform support and acceleration vary by model and operating system. Ollaya’s latency comparison uses different setups from TypeSafe Jev, so the figures are only an order-of-magnitude reference.
