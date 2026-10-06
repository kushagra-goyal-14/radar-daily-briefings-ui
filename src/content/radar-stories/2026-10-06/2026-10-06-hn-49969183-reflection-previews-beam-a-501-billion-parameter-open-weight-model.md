---
story_id: story_29822f8e0c734e91ac4833156856efc7
authors:
  - Philpax
date: 2026-10-06
generated_at: 2026-10-06T07:30:22.786Z
source: hn
section: ai
tags:
  - beam
  - open-weight-model
  - mixture-of-experts
  - reinforcement-learning
  - agentic-coding
  - inference-efficiency
title: Reflection previews Beam, a 501-billion-parameter open-weight model
url: https://reflection.ai/blog/introducing-beam
why_read: Engineers can assess Beam’s reported inference-efficiency design and large-scale asynchronous reinforcement-learning approach before its planned release.
status: experimental
source_published_at: 2026-10-05T19:16:35.000Z
hn_id: "49969183"
comments: https://news.ycombinator.com/item?id=49969183
interest_score: 9
utility_score: 6
novelty_score: 8
depth_score: 9
impact_score: 8
---

Reflection has previewed Beam, its first open-weight model, as a 501-billion-parameter sparse Mixture-of-Experts system with 23 billion active parameters. It is focused on coding, reasoning, and agentic workloads, but remains in final red-teaming and evaluation.

Reflection reports pretraining on 23.8 trillion tokens and more than 100 million reinforcement-learning rollouts across 10.5K NVIDIA GB300 GPUs. Beam uses asynchronous policy gradients and is designed to remain stable despite substantial policy staleness.

The company reports competitive benchmark performance with lower estimated inference compute than larger models. Those estimates exclude several serving costs, and weights and developer artifacts remain pending under the planned Apache 2.0 release.
