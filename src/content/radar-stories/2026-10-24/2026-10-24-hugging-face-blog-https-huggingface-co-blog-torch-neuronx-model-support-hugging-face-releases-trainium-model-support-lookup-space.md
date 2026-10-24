---
story_id: story_9242d582f75942c4a67f2af106e5726f
authors: []
date: 2026-10-24
generated_at: 2026-10-24T07:30:27.054Z
source: hugging-face-blog
section: ai
tags:
  - aws-trainium
  - torch-neuronx
  - model-compatibility
  - pytorch-inference
  - neuron-compiler
  - hugging-face-space
title: Hugging Face releases Trainium model-support lookup Space
url: https://huggingface.co/blog/torch-neuronx-model-support
why_read: Engineers evaluating Trainium deployments can check model compatibility, reproduce tests, and inspect the exact tested Neuron and Transformers stack.
status: released
source_published_at: 2026-10-23T00:00:00.000Z
source_external_id: https://huggingface.co/blog/torch-neuronx-model-support
source_adapter: rss
interest_score: 8
utility_score: 9
novelty_score: 8
depth_score: 8
impact_score: 7
---

Hugging Face has published the torch-neuronx model support Space, which reports whether selected Transformers Hub models run unmodified on AWS Trainium. It also exposes a public dataset containing results, failures, tested stack versions, and run scripts.

Each test runs a model on Trainium2, using tensor or expert parallelism when needed, then generates 32 tokens and checks the output. The Space records core count, wall time including compilation, peak device memory, and the relevant Neuron compiler and Transformers versions.

Coverage currently includes only selected text-generation and image-text-to-text models that fit on four Trainium2 devices. A PASS does not establish throughput or longer-generation performance.
