---
story_id: story_5612c0210c5c48c6a56f8b0d0824b351
authors: []
date: 2026-10-21
generated_at: 2026-10-22T12:19:31.017Z
source: hugging-face-blog
section: ai
tags:
  - trainium-profiling
  - pytorch-backend
  - torch-profiler
  - neuron-explorer
  - kernel-fusion
title: Hugging Face tutorial profiles TorchNeuron on AWS Trainium
url: https://huggingface.co/blog/amazon/profiling-torchneuron-part-1
why_read: Engineers can reproduce the profiling workflow and identify whether operator fusion reduces Trainium device time in their workloads.
status: released
source_published_at: 2026-10-21T16:04:43.000Z
source_external_id: https://huggingface.co/blog/amazon/profiling-torchneuron-part-1
source_adapter: rss
interest_score: 8
utility_score: 9
novelty_score: 6
depth_score: 8
impact_score: 6
---

Hugging Face has published a tutorial on system-level profiling for TorchNeuron workloads running on AWS Trainium. It shows how to configure `torch.profiler`, capture Neuron traces, and inspect them with Neuron Explorer.

The tutorial compares three RMSNorm implementations: separate PyTorch operations, `torch.rms_norm`, and naive code compiled with `torch.compile`. In the shown runs, the naive version uses 2,355 μs of Neuron time, compared with 403.3 μs and 375.5 μs for the fused paths.

The workflow helps engineers connect framework dispatch to runtime scheduling and hardware execution. The measurements are specific to the documented setup, while device-level profiling is reserved for Part 2.
