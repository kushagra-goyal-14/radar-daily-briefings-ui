---
story_id: story_c7704a667f404bf58ecd986ba5f42d0d
authors: []
date: 2026-10-26
generated_at: 2026-10-26T07:30:33.144Z
source: hugging-face-blog
section: ai
tags:
  - pytorch
  - mps-backend
  - apple-silicon
  - metal-kernels
  - llm-inference
  - fp8
title: Hugging Face details PyTorch 2.15 MPS improvements
url: https://huggingface.co/blog/mps-pytorch-2-15
why_read: Engineers targeting Apple silicon can assess new MPS capabilities, measured workload changes, and compatibility requirements before testing the release candidate.
status: experimental
source_published_at: 2026-10-20T00:00:00.000Z
source_external_id: https://huggingface.co/blog/mps-pytorch-2-15
source_adapter: rss
interest_score: 8
utility_score: 8
novelty_score: 7
depth_score: 9
impact_score: 7
---

Hugging Face’s PyTorch team describes MPS improvements planned for PyTorch 2.15 and invites readers to try the release candidate. The update adds FP8 tensors on MPS, expands GPU-backed operations, and requires macOS 15 or later with Python 3.11 or later.

The article attributes faster decoding to specialized linear, grouped-matrix-multiplication, softmax, and other Metal kernels. It reports 5–6.5× faster MoE decoding in selected tests and a reduction in Wan2.2 video VAE driver-memory peaks from about 270 GiB to 8 GiB.

These results are workload-specific and come from the project’s own measurements. PyTorch 2.16 items described in the post remain ongoing work rather than current 2.15 capabilities.
