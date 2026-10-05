---
story_id: story_06bb7796071e4e589aba78e6b9823a49
authors:
  - bastitx
date: 2026-10-04
generated_at: 2026-10-04T07:30:13.447Z
source: hn
section: ai
tags:
  - open-weight-model
  - mixture-of-experts
  - german-language-model
  - long-context-inference
  - vllm-plugin
  - sovereign-ai
title: Aleph Alpha releases Kolibri open-weight bilingual model
url: https://aleph-alpha.com/en/blog/kolibri-has-landed-a-sovereign-open-weight-model
why_read: Engineers can evaluate a locally deployable German-English model with sparse inference, controllable reasoning effort, and documented serving requirements.
status: released
source_published_at: 2026-10-03T09:36:04.000Z
hn_id: "49942706"
comments: https://news.ycombinator.com/item?id=49942706
interest_score: 9
utility_score: 8
novelty_score: 7
depth_score: 8
impact_score: 8
---

Aleph Alpha has released Kolibri, an English-German mixture-of-experts model with 78B total parameters and roughly 3B active parameters. Its full weights are available on Hugging Face under Apache 2.0 terms.

The model uses 384 experts, activates a small subset per token, and supports controllable reasoning effort, tool calling, and long-context inference. Aleph Alpha provides a vLLM plugin and commands for serving it locally; contexts beyond 262,144 tokens require a documented 1M-token override.

The release targets regulated and sovereign deployments, including government, industrial, and aerospace use cases. Reported benchmark and internal customer-proxy results come from Aleph Alpha and are not independently validated in the supplied evidence.
