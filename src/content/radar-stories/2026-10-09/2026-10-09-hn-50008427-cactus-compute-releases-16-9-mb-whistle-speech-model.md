---
story_id: story_72f3681c43f64e8d94f1dd6bf9361e1f
authors:
  - gmays
date: 2026-10-09
generated_at: 2026-10-09T07:30:28.954Z
source: hn
section: ai
tags:
  - speech-recognition
  - on-device-inference
  - speech-embeddings
  - keyword-biasing
  - edge-ai
  - multilingual-transcription
title: Cactus Compute releases 16.9 MB Whistle speech model
url: https://cactuscompute.com/blog/whistle
why_read: Engineers can evaluate a compact multilingual speech stack with documented CPU performance, deployment targets, APIs, and integrated embeddings.
status: released
source_published_at: 2026-10-08T16:59:39.000Z
hn_id: "50008427"
comments: https://news.ycombinator.com/item?id=50008427
interest_score: 9
utility_score: 9
novelty_score: 8
depth_score: 9
impact_score: 8
---

Cactus Compute has released Whistle, a 16.9 MB multilingual speech model designed for CPU inference on mobiles, wearables, robots, automotive systems, browsers, and microcontrollers. It loads in the Needle C++ engine without dependencies.

Whistle transcribes up to 30 seconds of audio in seven languages, detects language, returns word timestamps, and exposes speech embeddings. Its encoder uses eight attention blocks; a selectable-depth decoder adds gated cross-attention, five-beam decoding, keyword biasing, and silence handling.

Cactus Compute reports 11.1 ms time to first token and 1,319 decoded tokens per second on an Apple M4 Pro CPU. The comparisons use heterogeneous published baselines and are not independently replicated in the supplied evidence.
