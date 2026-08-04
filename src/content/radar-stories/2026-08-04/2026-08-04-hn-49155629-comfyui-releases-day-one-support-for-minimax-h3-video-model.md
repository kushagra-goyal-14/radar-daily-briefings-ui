---
story_id: story_79de3054b08a46e8bb34d14ebf3dbedb
authors:
  - vblanco
date: 2026-08-04
generated_at: 2026-08-04T05:23:45.604Z
source: hn
section: ai
tags:
  - minimax-h3
  - comfyui
  - open-weights
  - video-generation
  - native-audio
  - int8-quantization
title: ComfyUI releases day-one support for MiniMax H3 video model
url: https://blog.comfy.org/p/minimax-h3-day-0-support-in-comfyui
why_read: Engineers can evaluate the provided workflows and optimization techniques for running audiovisual generation locally on constrained GPU hardware.
status: released
source_published_at: 2026-08-03T13:34:43.000Z
hn_id: "49155629"
comments: https://news.ycombinator.com/item?id=49155629
interest_score: 8
utility_score: 8
novelty_score: 8
depth_score: 7
impact_score: 7
---

ComfyUI has day-one support for MiniMax H3, an open-weights multimodal video model. The source reports generation of up to 2K, 15-second clips with native stereo audio from text, image, video, or audio inputs.

The article describes pruning roughly 40% of the model’s modulation weights into a lookup table, int8 convrot quantization, custom kernels, and dynamic VRAM offloading. It reports reducing memory from 123.6 GB in full precision to 42.5 GB for the smallest variants.

Engineers can update to ComfyUI 0.30.0 or use Comfy Cloud and download supplied workflows. The performance and hardware claims are not independently verified in the supplied evidence.
