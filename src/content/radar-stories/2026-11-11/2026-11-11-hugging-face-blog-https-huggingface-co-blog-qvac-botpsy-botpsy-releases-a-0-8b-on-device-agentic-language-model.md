---
story_id: story_edfe9af495d94eeaae3973cdb4e31178
authors: []
date: 2026-11-11
generated_at: 2026-11-11T07:30:40.315Z
source: hugging-face-blog
section: ai
tags:
  - on-device-ai
  - agentic-language-model
  - tool-use
  - function-calling
  - small-language-models
  - open-weights
title: BotPsy releases a 0.8B on-device agentic language model
url: https://huggingface.co/blog/qvac/botpsy
why_read: Engineers can evaluate a small local model for function-calling workflows while accounting for benchmark scope, language gaps, and safety limitations.
status: released
source_published_at: 2026-11-11T05:01:16.000Z
source_external_id: https://huggingface.co/blog/qvac/botpsy
source_adapter: rss
interest_score: 8
utility_score: 7
novelty_score: 7
depth_score: 8
impact_score: 6
---

Tether AI Research introduces BotPsy, a 0.8B-parameter model for function calling and on-device agentic workflows. The article presents it as an open-weight model available in bf16, Q8, and Q4 formats through Hugging Face safetensors and GGUF files.

BotPsy is based on Qwen3.5-0.8B and was trained through supervised fine-tuning, multi-teacher on-policy distillation, and two reinforcement-learning stages using tool-calling and verifiable-task rewards. The project reports leading results against tested models in its parameter range on most tool-use benchmarks.

The model is aimed at research, education, and low- to medium-difficulty tasks. Reported weaknesses include open-ended retrieval, lower-resource languages, and high-stakes use; the benchmark evidence is supplied by the project.
