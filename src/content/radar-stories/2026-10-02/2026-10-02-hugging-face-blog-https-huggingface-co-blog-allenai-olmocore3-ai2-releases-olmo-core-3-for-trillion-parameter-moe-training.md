---
story_id: story_ba2e5cd57a704011b498fef35c813b31
authors: []
date: 2026-10-02
generated_at: 2026-10-02T07:30:17.931Z
source: hugging-face-blog
section: ai
tags:
  - mixture-of-experts
  - distributed-training
  - expert-parallelism
  - pipeline-parallelism
  - mxfp8
  - gpu-optimization
title: Ai2 releases Olmo-core 3 for trillion-parameter MoE training
url: https://huggingface.co/blog/allenai/olmocore3
why_read: Engineers can evaluate the released architecture, parallelism strategies, precision trade-offs, and benchmark caveats when designing large-MoE training systems.
status: released
source_published_at: 2026-10-01T15:01:43.000Z
source_external_id: https://huggingface.co/blog/allenai/olmocore3
source_adapter: rss
interest_score: 9
utility_score: 9
novelty_score: 8
depth_score: 10
impact_score: 8
---

Ai2 has released Olmo-core 3, an open training framework redesigned for large mixture-of-experts models. The project presents it as infrastructure for scaling MoE training into the trillion-parameter range.

The stack replaces its earlier FSDP-based approach with distributed data parallelism that keeps experts resident on GPUs. It combines expert and pipeline parallelism, a distributed optimizer, GPU-resident routing, grouped GEMM, and MXFP8 support. Ai2 reports a 1.2-trillion-parameter benchmark across 512 NVIDIA B300 GPUs.

The evidence is systems-focused: the trillion-parameter tests used random routing rather than measuring model quality, while the 2.38-trillion-parameter result was only a short-capacity test. Reported performance figures come from Ai2 benchmarks.
