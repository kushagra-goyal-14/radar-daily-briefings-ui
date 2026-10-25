---
story_id: story_34767234007d4c719cfceb9a6a9e3fe6
authors: []
date: 2026-10-25
generated_at: 2026-10-25T07:30:13.564Z
source: hugging-face-blog
section: ai
tags:
  - swift-ai-sdk
  - local-inference
  - model-provider-abstraction
  - tool-calling
  - guided-generation
  - apple-platforms
title: AnyLanguageModel 1.0 releases unified Swift model API
url: https://huggingface.co/blog/anylanguagemodel-1-0
why_read: Swift developers can evaluate one integration path for provider switching, local inference, hosted APIs, authentication, and Linux deployment.
status: released
source_published_at: 2026-10-20T00:00:00.000Z
source_external_id: https://huggingface.co/blog/anylanguagemodel-1-0
source_adapter: rss
interest_score: 8
utility_score: 8
novelty_score: 7
depth_score: 7
impact_score: 7
---

Hugging Face has released AnyLanguageModel 1.0, alongside swift-huggingface 1.0 and swift-xet 1.0. AnyLanguageModel is presented as a drop-in replacement for Apple’s Foundation Models framework, allowing applications to choose among system, local, and hosted models.

The API supports providers including llama.cpp, MLX, Core ML, OpenAI-compatible endpoints, Anthropic, Google Gemini, Ollama, Private Cloud Compute, and Hugging Face Inference Providers. Hugging Face reports shared support for tool calling, guided generation, image prompts, reasoning transcripts, and token-usage reporting.

The library also runs on Linux and supports closure-based API-key retrieval. The article provides no independent performance or adoption evidence, while local model resource requirements vary.
