---
story_id: story_8ce811b56ee84a818ebe7bf4326c8126
authors: []
date: 2026-10-26
generated_at: 2026-10-26T07:30:33.144Z
source: hugging-face-blog
section: ai
tags:
  - torchtpu
  - tpu-backend
  - pytorch
  - hugging-face
  - distributed-training
  - tensor-parallelism
title: Hugging Face releases TorchTPU native PyTorch backend
url: https://huggingface.co/blog/hf-torchtpu
why_read: Engineers evaluating Google Cloud TPUs can assess a native PyTorch workflow and its current compatibility evidence.
status: released
source_published_at: 2026-10-20T00:00:00.000Z
source_external_id: https://huggingface.co/blog/hf-torchtpu
source_adapter: rss
interest_score: 8
utility_score: 8
novelty_score: 8
depth_score: 7
impact_score: 7
---

Hugging Face has released TorchTPU, a native PyTorch backend that treats TPU as a device. The company says Transformers, Diffusers, and Kernels can run on TPU without the former Optimum TPU layer.

TorchTPU supports regular PyTorch code, distributed training, tensor-parallel model loading, torch.compile, and Pallas-based TPU kernels. Examples use `device_map="tpu"` or `pipe.to("tpu")`, while compiled execution reuses graphs for matching image sizes.

Hugging Face reports 96.5% passing among TPU-running tests, 34 reported issues, and 19 fixes. Performance figures are company-reported and limited to the documented hardware, models, and configurations.
