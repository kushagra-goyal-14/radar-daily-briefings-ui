---
story_id: story_372fc2f07b074ec28a87d393d0ef5503
authors: []
date: 2026-11-13
generated_at: 2026-11-13T07:30:39.568Z
source: hugging-face-blog
section: ai
tags:
  - llmon
  - granite-models
  - prompt-injection-defense
  - structured-context
  - llm-tooling
  - indirect-prompt-injection
title: IBM releases experimental LLMON previews for Granite 4.1
url: https://huggingface.co/blog/ibm-granite/llmon-an-llm-native-markup-language-now-in-granite
why_read: Engineers can evaluate structured context and instruction-data separation for indirect prompt-injection resistance, while accounting for preview-only status.
status: released
source_published_at: 2026-11-12T19:07:35.000Z
source_external_id: https://huggingface.co/blog/ibm-granite/llmon-an-llm-native-markup-language-now-in-granite
source_adapter: rss
interest_score: 8
utility_score: 7
novelty_score: 8
depth_score: 8
impact_score: 6
---

IBM has released two experimental Granite 4.1 preview models—3B and 8B—trained to consume and generate LLMON, an LLM-native markup language. The release also provides a GitHub toolkit, converters, notebooks, and workflow examples.

LLMON represents instructions, data, requirements, and execution relationships with reserved special tokens, explicit tags, and addressable block identifiers. Its training uses serialized instruction data, decoy blocks, execution bindings, and additional post-training stages. IBM reports stronger resistance to static indirect prompt injections on the OPI benchmark while maintaining performance comparable to Granite 4.1 Instruct models.

The previews are ready for exploration, not production. Adaptive attacks remain an open focus, and the learned privilege rule is not an enforced guarantee.
