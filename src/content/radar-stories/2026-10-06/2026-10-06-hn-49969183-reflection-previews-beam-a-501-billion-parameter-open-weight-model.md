---
story_id: story_29822f8e0c734e91ac4833156856efc7
authors:
  - Philpax
date: 2026-10-06
generated_at: 2026-10-06T07:30:22.786Z
source: hn
section: ai
tags:
  - open-weight-model
  - mixture-of-experts
  - reinforcement-learning
  - agentic-coding
  - inference-efficiency
  - model-evaluation
title: Reflection previews Beam, a 501B-parameter open-weight model
url: https://reflection.ai/blog/introducing-beam
why_read: Engineers can assess Beam’s proposed architecture, large-scale reinforcement-learning approach, and reported inference-efficiency tradeoffs before release.
status: proposed
source_published_at: 2026-10-05T19:16:35.000Z
hn_id: "49969183"
comments: https://news.ycombinator.com/item?id=49969183
interest_score: 9
utility_score: 6
novelty_score: 8
depth_score: 9
impact_score: 7
---

Reflection has introduced Beam, its first open-weight model, as a sparse Mixture-of-Experts system with 501 billion total parameters and 23 billion active. It targets coding, reasoning, and agentic workloads but remains in final red-teaming and evaluation.

Reflection says Beam was pretrained on 23.8 trillion tokens and trained through more than 100 million reinforcement-learning rollouts on 10.5K NVIDIA GB300 GPUs. Its training used asynchronous policy gradients, controllable reasoning length, and infrastructure for large-scale concurrent rollouts.

The company reports competitive benchmark performance and lower estimated inference compute than some larger models. Weights and supporting artifacts are planned under Apache 2.0, but are not yet broadly available in the supplied evidence.
