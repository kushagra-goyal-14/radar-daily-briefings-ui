---
story_id: story_06bb7796071e4e589aba78e6b9823a49
authors:
  - bastitx
date: 2026-10-04
generated_at: 2026-10-04T07:30:13.447Z
source: hn
section: ai
tags:
  - kolibri
  - mixture-of-experts
  - open-weight-model
  - long-context-inference
  - bilingual-model
  - model-serving
title: Aleph Alpha releases Kolibri open-weight bilingual MoE model
url: https://aleph-alpha.com/en/blog/kolibri-has-landed-a-sovereign-open-weight-model
why_read: Engineers can evaluate a sovereign, on-premise model with long-context serving, bilingual specialization, and documented vLLM deployment settings.
status: released
source_published_at: 2026-10-03T09:36:04.000Z
hn_id: "49942706"
comments: https://news.ycombinator.com/item?id=49942706
interest_score: 8
utility_score: 8
novelty_score: 6
depth_score: 8
impact_score: 7
---

Aleph Alpha has released Kolibri, an English-German mixture-of-experts Transformer with 78 billion total parameters, about 3 billion active parameters, and contexts up to 1 million tokens. The weights are available on Hugging Face under Apache 2.0 license terms.

The model uses 384 experts, activates roughly 3 billion parameters per token, and combines sliding-window attention with full attention in selected layers. Aleph Alpha describes specialized training for German, reasoning, mathematics, coding, grounding, and agentic behavior.

Kolibri can be served with Aleph Alpha's inference package and vLLM, including reasoning and tool-calling parsers. Benchmark results and sovereignty claims come from Aleph Alpha, with no independent validation supplied.
