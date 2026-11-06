---
story_id: story_031aceb180fe487ebefe884ef404d08d
authors: []
date: 2026-11-06
generated_at: 2026-11-06T07:30:10.088Z
source: hugging-face-blog
section: ai
tags:
  - world-models
  - robotics-simulation
  - autonomous-driving
  - open-weights
  - synthetic-data
  - model-distillation
title: NVIDIA releases four Cosmos 3 open-weight simulation models
url: https://huggingface.co/blog/nvidia/cosmos-interactive-world-simulation
why_read: Engineers can compare distinct simulation workflows, control interfaces, adaptation paths, and deployment constraints for robotics and driving research.
status: released
source_published_at: 2026-11-05T19:35:16.000Z
source_external_id: https://huggingface.co/blog/nvidia/cosmos-interactive-world-simulation
source_adapter: rss
interest_score: 8
utility_score: 8
novelty_score: 8
depth_score: 9
impact_score: 8
---

NVIDIA has released four open-weight Cosmos 3 Nano checkpoints for interactive world simulation. They target robotics and autonomous-driving workflows, including synthetic driving data, streaming sensor generation, simulator-to-video transfer, and bimanual action-conditioned video.

Transfer-Auto generates synchronized camera views and joint RGB–LiDAR data using World Scenario Map and text controls. Sim-Auto produces successive sensor chunks from driving controls and generated history. Sim-Transfer renders RGB from simulator spatial controls, while Sim-Bimanual predicts observations from robot or camera actions.

The article documents post-training, distillation, self-forcing, and deployment paths. Closed-loop use requires simulation infrastructure, and policy-learning fidelity remains an open evaluation question.
