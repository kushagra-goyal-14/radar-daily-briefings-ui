---
story_id: story_734c0cc0f2534ba798f0786f2ec39152
authors: []
date: 2026-08-05
generated_at: 2026-08-05T05:23:22.824Z
source: simon-willison
section: ai
tags:
  - minimax-h3
  - mlx
  - text-to-video
  - apple-silicon
  - multimodal-generation
title: PipeNetwork ports MiniMax-H3 to MLX for Apple Silicon
url: https://simonwillison.net/2026/Aug/4/minimax-h3-mlx
why_read: The report gives engineers concrete local-inference requirements, runtime expectations, and an observed audio-quality caveat.
status: unknown
source_published_at: 2026-08-04T19:10:09.000Z
source_external_id: https://simonwillison.net/2026/Aug/4/minimax-h3-mlx/#atom-everything
source_adapter: atom
interest_score: 8
utility_score: 7
novelty_score: 4
depth_score: 6
impact_score: 6
---

PipeNetwork’s minimax-h3-mlx package ports MiniMax-H3 to MLX for running on Apple Silicon. Simon Willison tested it on an M5 Max MacBook Pro and generated a video from a text prompt.

MiniMax-H3 accepts text, images, audio, and video, and can generate video clips with audio. The experiment downloaded about 115 GB of model files, while video generation took just under 45 minutes.

The result demonstrates a demanding local multimodal workflow rather than lightweight inference. Willison reports that the audio was speech-like garbage because the prompt did not specify audio guidance; the supplied document does not establish broader performance or package lifecycle status.
