---
story_id: story_9a91b43b3ddc4c39b89bd6d138d9f0ee
authors: []
date: 2026-10-09
generated_at: 2026-10-09T07:30:28.954Z
source: simon-willison
section: ai
tags:
  - token-counting
  - text-truncation
  - gpt-tokenizer
  - llm-tooling
  - python-cli
title: ttok 1.0 updates token-counting defaults for GPT models
url: https://simonwillison.net/2026/Oct/9/ttok
why_read: Engineers using token-aware LLM workflows can evaluate ttok’s updated defaults while accounting for unresolved GPT-6 tokenizer compatibility.
status: released
source_published_at: 2026-10-09T00:34:43.000Z
source_external_id: https://simonwillison.net/2026/Oct/9/ttok/
source_adapter: atom
interest_score: 6
utility_score: 7
novelty_score: 6
depth_score: 4
impact_score: 5
---

Simon Willison released ttok 1.0, a command-line tool that counts and truncates text based on tokens. The release followed a change to its default tokenizer from GPT-4 to GPT-5.

The article says OpenAI has not confirmed whether GPT-6 uses the GPT-5 tokenizer. It cites an experiment by William Liu in which seven GPT models produced identical counts across all 31 tested fixtures.

Engineers can use ttok for token-aware text workflows, but should treat GPT-6 compatibility as unresolved. The supplied material gives limited methodology for the experiment, so its result may not generalize beyond the tested fixtures.
