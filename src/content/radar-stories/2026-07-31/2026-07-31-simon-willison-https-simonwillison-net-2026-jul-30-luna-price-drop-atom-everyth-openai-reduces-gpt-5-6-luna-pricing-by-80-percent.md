---
story_id: story_e2c4c53a1abc4f7d8edd92447e0d28cd
authors: []
date: 2026-07-31
generated_at: 2026-07-31T07:57:22.292Z
source: simon-willison
section: ai
tags:
  - gpt-5-6
  - llm-pricing
  - inference-optimization
  - kernel-optimization
  - cost-reduction
title: OpenAI reduces GPT-5.6 Luna pricing by 80 percent
url: https://simonwillison.net/2026/Jul/30/luna-price-drop
why_read: Engineers evaluating inference platforms can assess Luna's new competitive pricing against Gemini and Claude models for cost-sensitive deployments.
status: released
source_published_at: 2026-07-30T23:58:42.000Z
source_external_id: https://simonwillison.net/2026/Jul/30/luna-price-drop/#atom-everything
source_adapter: atom
interest_score: 8
utility_score: 7
novelty_score: 6
depth_score: 5
impact_score: 8
---

OpenAI has reduced GPT-5.6 Luna pricing by 80 percent, bringing input costs to $0.20 per million tokens and output to $1.20 per million tokens. The company attributes the reduction to kernel optimizations performed by GPT-5.6 Sol, which OpenAI says autonomously rewrote production inference code and reduced end-to-end serving costs by 20 percent.

OpenAI reports that GPT-5.6 Sol optimized load balancing and the model's forward pass, identifying opportunities to precompute, avoid, or parallelize work within GPU kernels. The tool rewrote code in Triton and Gluon, open-source GPU programming languages, to reduce memory movement and synchronization overhead.

Luna's new pricing undercuts competing models: it is cheaper than Google's Gemini 3. 1 Flash-Lite and one-fifth the input cost of Anthropic's Claude Haiku 4.
