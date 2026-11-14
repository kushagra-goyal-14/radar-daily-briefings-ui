---
story_id: story_5aacd175059f4795901115230259ae52
authors: []
date: 2026-11-14
generated_at: 2026-11-14T07:30:26.913Z
source: hugging-face-blog
section: infrastructure
tags:
  - robotics-simulation
  - isaac-sim
  - openusd
  - simready-assets
  - pick-and-place
  - agent-generated-code
title: NVIDIA walkthrough builds Isaac Sim pick-and-place scene with SimReady assets
url: https://huggingface.co/blog/nvidia/simready-assets-robot-pick-and-place
why_read: Engineers can reuse the validation and scene-composition workflow while understanding its narrow scripted assumptions and lack of hardware robustness evidence.
status: released
source_published_at: 2026-11-13T18:00:39.000Z
source_external_id: https://huggingface.co/blog/nvidia/simready-assets-robot-pick-and-place
source_adapter: rss
interest_score: 7
utility_score: 8
novelty_score: 6
depth_score: 7
impact_score: 5
---

A Hugging Face walkthrough demonstrates a pick-and-place simulation in Isaac Sim using SimReady assets: a UR17G arm, Robotiq 2F-140 gripper, and beverage can. The published example uses an agent to assist with assembly and task controls.

SimReady packages provide authored properties such as collisions, mass, joints, and joint drives. The workflow validates arm and gripper joint settings, assembles them into one articulation, and tests contact-based grasping, lifting, transfer, and release.

The example is useful for prototyping asset reuse and validation, but its results are limited to a fixed scripted setup. It uses no vision, limited collision checks, simplified can physics, and no replanning, so it does not establish real-hardware robustness.
