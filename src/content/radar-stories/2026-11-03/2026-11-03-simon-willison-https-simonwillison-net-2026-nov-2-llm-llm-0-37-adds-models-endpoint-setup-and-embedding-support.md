---
story_id: story_1d1c2514bc9e4db796ded0de1c34a370
authors: []
date: 2026-11-03
generated_at: 2026-11-03T07:30:08.067Z
source: simon-willison
section: ai
tags:
  - llm-cli
  - python-library
  - model-endpoints
  - embeddings
  - openai-compatible-api
  - ai-assisted-development
title: LLM 0.37 adds models, endpoint setup, and embedding support
url: https://simonwillison.net/2026/Nov/2/llm
why_read: Engineers can assess new model configuration, default-model cost changes, and multimodal embedding compatibility in the released CLI and Python library.
status: released
source_published_at: 2026-11-02T23:49:30.000Z
source_external_id: https://simonwillison.net/2026/Nov/2/llm/
source_adapter: atom
interest_score: 8
utility_score: 8
novelty_score: 6
depth_score: 6
impact_score: 6
---

LLM 0.37 has been released as an update to Simon Willison’s command-line LLM tool and Python library. The release adds gpt-6.1-sol and gpt-6.1-terra, along with an `llm openai endpoint add` command for additional OpenAI-compatible endpoints.

When no custom default is configured, the tool now uses gpt-6-luna instead of gpt-5.6-luna. Embedding support also accepts differing binary content types, which the release describes as necessary for models such as Gemini Embedding 2, capable of embedding text, audio, images, and video.

The release includes fixes from 12 contributors. The supplied evidence does not include independent benchmarks or a complete compatibility matrix.
