---
story_id: story_a217906d9d494d9c8ecf2640c806e8b7
authors: []
date: 2026-09-25
generated_at: 2026-09-25T07:30:16.710Z
source: hugging-face-blog
section: infrastructure
tags:
  - robotics-simulation
  - gpu-acceleration
  - nvidia-warp
  - mujoco-warp
  - cuda-kernels
  - reinforcement-learning
title: NVIDIA article details MJWarp GPU scaling for robotics simulation
url: https://huggingface.co/blog/nvidia/how-to-use-nvidia-warp-and-mjwarp
why_read: Engineers can evaluate GPU simulation migration, parity checks, memory sizing, and measurement practices for large-scale robotics workloads.
status: released
source_published_at: 2026-09-23T18:41:40.000Z
source_external_id: https://huggingface.co/blog/nvidia/how-to-use-nvidia-warp-and-mjwarp
source_adapter: rss
interest_score: 8
utility_score: 8
novelty_score: 6
depth_score: 8
impact_score: 7
---

NVIDIA’s published article presents a workflow for moving a compatible MuJoCo scene to MuJoCo Warp (MJWarp), using NVIDIA Warp to run batched physics on NVIDIA GPUs. The example scales an SO-101 pick-and-place environment to as many as 2,048 parallel worlds.

The migration preserves MJCF models while replacing CPU stepping with device-resident batched state and `mjw.step`. The article covers one-world parity validation, contact and constraint capacity sizing, CUDA Graph capture, warm-up, synchronization, and throughput measurement.

The workflow targets aggregate simulation throughput for reinforcement-learning and sampling workloads, not single-world latency. It does not train a policy, and measurements remain dependent on hardware, scene settings, and batch size.
