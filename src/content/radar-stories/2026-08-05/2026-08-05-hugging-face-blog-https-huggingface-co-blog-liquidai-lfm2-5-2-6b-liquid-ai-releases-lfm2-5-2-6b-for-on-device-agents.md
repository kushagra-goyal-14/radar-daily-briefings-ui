---
story_id: story_80342009b2a74e03bc9f8971295e174d
authors: []
date: 2026-08-05
generated_at: 2026-08-05T05:23:22.824Z
source: hugging-face-blog
section: ai
tags:
  - on-device-agents
  - agentic-reinforcement-learning
  - tool-calling
  - edge-inference
  - local-inference
  - model-distillation
title: Liquid AI releases LFM2.5-2.6B for on-device agents
url: https://huggingface.co/blog/LiquidAI/lfm2-5-2-6b
why_read: Engineers can evaluate a released local-agent model against device constraints, tool-use requirements, and deployment-runtime support.
status: released
source_published_at: 2026-08-04T13:58:29.000Z
source_external_id: https://huggingface.co/blog/LiquidAI/lfm2-5-2-6b
source_adapter: rss
interest_score: 8
utility_score: 8
novelty_score: 8
depth_score: 9
impact_score: 7
---

Liquid AI has released LFM2.5-2.6B, a 2.6-billion-parameter model intended for on-device agents. The model and its base version are available on Hugging Face, with guidance for local-agent harnesses and a WebGPU demo.

The training pipeline combines supervised fine-tuning, specialist-teacher distillation, and agentic reinforcement learning in real harnesses. Liquid AI reports support for llama.cpp, MLX, vLLM, SGLang, and ONNX, plus measured CPU and GPU throughput.

The release is relevant for engineers evaluating local tool use, multi-step workflows, and memory-constrained inference. Reported benchmarks and hardware speeds come from Liquid AI, and the article says larger models remain stronger for coding.
