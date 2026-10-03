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
  - open-weight-models
  - reinforcement-learning
  - fine-tuning
  - workers-ai
  - typed-outputs
title: Cloudflare releases open-weight Clef decision models and RL platform
url: https://blog.cloudflare.com/clef-decision-models
why_read: Engineers can evaluate typed decision outputs, open weights, edge hosting, and a documented path for workload-specific fine-tuning.
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

Cloudflare has released its Clef and Clef-flash decision models on Workers AI and as open weights on Hugging Face under Apache 2.0. It also introduced an RL fine-tuning service for customers, initially supported by a forward-deployed engineering team.

The models produce typed schema outputs and probabilities rather than intermediate generated text. Cloudflare says Clef uses a Qwen backbone, parallel schema-choice scoring, a vision encoder, and a 64k context window; Clef-flash targets latency-sensitive decisions.

Cloudflare reports benchmark and latency advantages in its evaluations, but the supplied evidence contains no independent validation. The planned self-serve fine-tuning platform and several supporting components remain work in progress.
