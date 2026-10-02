---
story_id: story_b8c8442cdc3b4989983d908f953c4e43
authors:
  - jasondavies
date: 2026-10-02
generated_at: 2026-10-02T07:30:17.931Z
source: hn
section: ai
tags:
  - decision-models
  - open-weights
  - reinforcement-learning
  - model-fine-tuning
  - workers-ai
  - agentic-workflows
title: Cloudflare releases open-weight Clef decision models and RL service
url: https://blog.cloudflare.com/clef-decision-models
why_read: Engineers can evaluate typed, latency-focused decision models and assess Cloudflare’s hosted and fine-tuning deployment path.
status: released
source_published_at: 2026-10-01T16:18:57.000Z
hn_id: "49923692"
comments: https://news.ycombinator.com/item?id=49923692
interest_score: 8
utility_score: 8
novelty_score: 7
depth_score: 8
impact_score: 7
---

Cloudflare has released Clef and Clef-flash, decision models hosted on Workers AI and open-sourced on Hugging Face under Apache 2.0. It also introduced a hands-on reinforcement-learning service for fine-tuning Clef, while describing a self-serve platform as a later goal.

The models produce typed probability outputs rather than intermediate generated text. Cloudflare says Clef performs a Qwen-based prefill, then scores valid schema choices in parallel using specialized attention routing; Clef also supports image inputs and a 64k context window.

Cloudflare reports lower latency than several comparison models in its evaluations and cites a 2.2-second internal website-classification workflow. Those results are company-reported, and the supplied evidence includes no independent validation.
