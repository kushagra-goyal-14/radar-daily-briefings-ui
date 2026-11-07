---
story_id: story_30795e162240457297cdf091a0b8825c
authors: []
date: 2026-11-07
generated_at: 2026-11-07T07:30:24.652Z
source: hugging-face-blog
section: ai
tags:
  - toyblocks
  - robot-learning
  - robotics-simulation
  - synthetic-data
  - reinforcement-learning
  - motion-planning
title: Ai2 releases ToyBlocks robotics simulation and evaluation framework
url: https://huggingface.co/blog/allenai/toyblocks
why_read: ToyBlocks gives robotics researchers a controlled environment for varying training data, testing generalization, and diagnosing planning or execution failures.
status: released
source_published_at: 2026-11-06T14:00:48.000Z
source_external_id: https://huggingface.co/blog/allenai/toyblocks
source_adapter: rss
interest_score: 8
utility_score: 8
novelty_score: 7
depth_score: 9
impact_score: 7
---

Ai2 has released ToyBlocks, an open simulation framework for robot learning and evaluation in a controlled tabletop-block environment. The package includes simulation assets, task and demonstration generators, automatically generated demonstrations, two trained models, training and evaluation code, and validation sets.

ToyBlocks combines reinforcement learning, motion planning, and task-and-motion planning to generate short-horizon skills and sequence them into demonstrations. Researchers can vary training mixtures, test unseen tasks, and measure success, speed, forces, and task progress. The article reports parallel generation of hundreds of plans at up to 24 times real time on one GPU.

The initial release contains 85,336 long-horizon demonstrations, but the domain remains limited to tabletop blocks. Larger data, more skills, and integrated RL training are future targets.
