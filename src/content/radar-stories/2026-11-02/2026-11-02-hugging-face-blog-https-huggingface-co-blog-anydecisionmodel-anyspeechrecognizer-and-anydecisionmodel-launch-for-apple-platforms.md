---
story_id: story_8d312be5ec3a4ac6aa843c6f09f9b8d8
authors: []
date: 2026-11-02
generated_at: 2026-11-02T07:30:09.558Z
source: hugging-face-blog
section: ai
tags:
  - on-device-ai
  - speech-recognition
  - speaker-diarization
  - decision-models
  - core-ml
  - swift-packages
title: AnySpeechRecognizer and AnyDecisionModel launch for Apple platforms
url: https://huggingface.co/blog/anydecisionmodel
why_read: Apple-platform engineers can evaluate unified APIs, backend tradeoffs, model sizes, and compatibility constraints for local speech and decision workloads.
status: released
source_published_at: 2026-10-29T00:00:00.000Z
source_external_id: https://huggingface.co/blog/anydecisionmodel
source_adapter: rss
interest_score: 8
utility_score: 9
novelty_score: 8
depth_score: 9
impact_score: 7
---

Mattt introduces AnySpeechRecognizer and AnyDecisionModel, two Swift packages for Apple platforms. AnySpeechRecognizer provides a SpeechAnalyzer-compatible API with Apple, Parakeet, and Qwen3-ASR engines, while AnyDecisionModel exposes typed yes-or-no, choice, and rating results with probabilities.

The speech package adds Core ML speaker diarization through Streaming Sortformer. The decision package can derive answers from next-token probabilities or trained decision heads, using MLX, Core AI, llama.cpp, Jev, or Ollama backends.

Both packages support Hugging Face model downloads and on-device execution, but require recent OS and Swift versions. Reported benchmarks are limited to one Mac and selected datasets, and iPhone testing had not yet been performed.
