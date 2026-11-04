---
story_id: story_c5350b2ed6ed4910acdfd50d7b327ee3
authors: []
date: 2026-11-04
generated_at: 2026-11-04T07:30:14.470Z
source: simon-willison
section: ai
tags:
  - weight-space-programming
  - model-interpretability
  - local-llms
  - qwen
  - reinforcement-learning
  - llm-evaluation
title: Qwen 3.8 27B interprets neural-network weights locally
url: https://simonwillison.net/2026/Nov/3/qwen-can-interpret-model-weights
why_read: The experiments provide reproducible local-model evidence for weight interpretation while highlighting narrow tasks, long runtimes, and inconsistent accuracy.
status: unknown
source_published_at: 2026-11-03T16:29:48.000Z
source_external_id: https://simonwillison.net/2026/Nov/3/qwen-can-interpret-model-weights/
source_adapter: atom
interest_score: 8
utility_score: 6
novelty_score: 3
depth_score: 6
impact_score: 5
---

Simon Willison reports that Qwen 3.8 27B running on his laptop inferred the behavior of three toy reinforcement-learning policy networks from their raw weights. It identified Pac-Man, Pong, and Breakout, but failed on Freeway.

The prompts supplied floating-point weights and prohibited tools, code execution, and calculators. Qwen ran with a long context window; the reported attempts took roughly 46 minutes to more than an hour and produced reasoning traces alongside its guesses.

The results are an individual replication on simplified game networks, not a controlled capability evaluation. Willison also cautions that they do not support claims that source code is becoming obsolete.
