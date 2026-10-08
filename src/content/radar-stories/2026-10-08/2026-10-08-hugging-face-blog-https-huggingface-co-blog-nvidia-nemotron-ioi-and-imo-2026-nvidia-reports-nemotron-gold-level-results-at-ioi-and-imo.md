---
story_id: story_fcc4c0718d3146729dac879756a96bb0
authors: []
date: 2026-10-08
generated_at: 2026-10-08T07:30:44.053Z
source: hugging-face-blog
section: ai
tags:
  - foundation-models
  - fine-tuning
  - reinforcement-learning
  - test-time-compute
  - competitive-programming
  - olympiad-mathematics
title: NVIDIA reports Nemotron gold-level results at IOI and IMO
url: https://huggingface.co/blog/nvidia/nemotron-ioi-and-imo-2026
why_read: The results show how domain-specific post-training and test-time inference can be combined across programming and mathematical reasoning tasks.
status: released
source_published_at: 2026-10-07T12:45:31.000Z
source_external_id: https://huggingface.co/blog/nvidia/nemotron-ioi-and-imo-2026
source_adapter: rss
interest_score: 9
utility_score: 8
novelty_score: 8
depth_score: 9
impact_score: 8
---

NVIDIA reports that Nemotron-based systems reached gold-medal level at both IOI 2026 and IMO 2026. The IOI system scored 535.4/600, while the IMO system scored 30/42, exceeding the respective gold thresholds.

The approach combined domain-specific supervised fine-tuning and, where useful, reinforcement learning with generate-verify-refine inference. IOI used GenCorrect to iteratively generate and evaluate code; IMO combined complementary checkpoints to generate, critique, and revise natural-language proofs.

NVIDIA says the artifacts include checkpoints, datasets, a benchmark, papers, prompts, and inference pipelines. The IOI result was unofficial and excluded from official ranking, and the supplied evidence contains no independent replication.
