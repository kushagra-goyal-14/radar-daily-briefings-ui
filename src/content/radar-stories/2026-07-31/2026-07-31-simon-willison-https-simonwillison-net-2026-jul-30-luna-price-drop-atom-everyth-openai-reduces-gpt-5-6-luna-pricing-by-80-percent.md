---
story_id: story_e2c4c53a1abc4f7d8edd92447e0d28cd
authors: []
date: 2026-07-31
generated_at: 2026-07-31T07:57:22.292Z
source: simon-willison
section: ai
tags:
  - llm-pricing
  - model-optimization
  - inference-efficiency
  - gpu-kernels
  - cost-reduction
title: OpenAI cuts GPT-5.6 Luna pricing by 80%
url: https://simonwillison.net/2026/Jul/30/luna-price-drop
why_read: Engineers evaluating inference platforms can assess the pricing change alongside OpenAI’s reported kernel and serving-cost optimizations.
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

Simon Willison reports that OpenAI reduced GPT-5.6 Terra pricing by 20% and GPT-5.6 Luna pricing by 80%. The models are presented as released offerings.

OpenAI says GPT-5.6 Sol optimized load balancing and the model’s forward pass by identifying work that could be precomputed, avoided, or parallelized. With Codex, it also rewrote and optimized production kernels in Triton and Gluon. OpenAI reports a 20% reduction in end-to-end serving costs.

The pricing change may affect inference-platform decisions; Willison says he moved agent.datasette.io to Luna. The supplied evidence lacks methodology and reproducible benchmarks, and one price comparison contains an apparent numerical inconsistency.
