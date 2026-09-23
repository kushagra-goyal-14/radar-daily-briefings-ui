---
story_id: story_62b8d6a8facc408ca05d82f89072e79b
authors: []
date: 2026-09-23
generated_at: 2026-09-23T07:30:30.323Z
source: hugging-face-blog
section: ai
tags:
  - gguf
  - local-inference
  - model-quantization
  - transformers
  - apple-silicon
  - llama-cpp
title: Transformers adds GGUF support with llama.cpp kernels
url: https://huggingface.co/blog/transformers-llama-cpp-quants
why_read: Engineers can evaluate local quantized inference in Python while accounting for platform, architecture, and benchmark limitations.
status: in_progress
source_published_at: 2026-09-22T00:00:00.000Z
source_external_id: https://huggingface.co/blog/transformers-llama-cpp-quants
source_adapter: rss
interest_score: 8
utility_score: 9
novelty_score: 7
depth_score: 9
impact_score: 7
---

Hugging Face documents new GGUF support in Transformers, allowing users to load quantized checkpoints through familiar Python and PyTorch APIs. The initial work targets local inference on Apple Silicon and is available from the latest Transformers main branch.

The integration reuses ggml Metal kernels for quantized matrix operations, normalization, attention, and related model components. Changes to `generate` reduce unnecessary masking and defer stopping checks to limit CPU–GPU synchronization.

The packed path is MPS-only and currently covers Qwen3.5 and compatible Qwen3.8 architectures. Comparisons with llama.cpp are indicative rather than directly equivalent because the reported measurements use different throughput conditions.
