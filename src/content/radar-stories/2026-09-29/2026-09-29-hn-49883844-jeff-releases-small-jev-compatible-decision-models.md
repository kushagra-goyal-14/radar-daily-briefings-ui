---
story_id: story_c1ab01431bf640a081aae188ff52bab1
authors:
  - firelex
date: 2026-09-29
generated_at: 2026-09-29T07:30:48.824Z
source: hn
section: ai
tags:
  - decision-models
  - local-inference
  - zero-shot-classification
  - model-fine-tuning
  - model-calibration
  - mlx-serving
title: Jeff releases small Jev-compatible decision models
url: https://github.com/firelex/jeff
why_read: Engineers can evaluate locally served decision models for fast classification while accounting for benchmark, reasoning, and deployment constraints.
status: released
source_published_at: 2026-09-28T20:23:36.000Z
hn_id: "49883844"
comments: https://news.ycombinator.com/item?id=49883844
interest_score: 8
utility_score: 9
novelty_score: 8
depth_score: 9
impact_score: 7
---

The Jeff project has released small Jev-compatible decision models based on Qwen3.5 and Gemma 4. They perform zero-shot classification locally and return probabilities, chosen options, and confidence values from a single forward pass.

The project reports median latency of 22 ms on an RTX PRO 6000 and 28 ms on an Apple M4 Max for its 0.8B model. It also provides MLX serving, training scripts, synthetic-data tooling, and fine-tuning guidance.

Jeff is intended for fast option selection, not planning or multi-step reasoning. Prompts materially affect results, released models accept at most 26 options, and the project says expanded-option retraining remains in progress.
