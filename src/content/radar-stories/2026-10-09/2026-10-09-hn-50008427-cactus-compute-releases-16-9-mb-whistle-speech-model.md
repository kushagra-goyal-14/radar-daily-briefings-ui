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
  - word-timestamps
  - beam-search
  - cactus-needle
title: Cactus-Compute releases Whistle, a 16.9 MB on-device speech model
url: https://cactuscompute.com/blog/whistle
why_read: Engineers can evaluate a compact local speech stack with configurable decoding, multilingual input, embeddings, and documented deployment targets.
status: released
source_published_at: 2026-10-08T16:59:39.000Z
hn_id: "50008427"
comments: https://news.ycombinator.com/item?id=50008427
interest_score: 9
utility_score: 9
novelty_score: 8
depth_score: 10
impact_score: 8
---

Cactus-Compute has released Whistle, a 16.9 MB speech recognition model designed for local CPU inference. It supports English, German, French, Spanish, Italian, Dutch, and Polish transcription, plus word timestamps and speech embeddings.

The model processes 16 kHz mono audio through an eight-block encoder and a configurable-depth decoder. Gated cross-attention connects the decoder to encoded audio, while five-beam decoding and keyword biasing support transcript generation. Whistle loads in the same C++ engine as Needle.

Cactus-Compute reports comparisons with Whisper base and Moonshine tiny v2 for size, latency, decoding speed, and word error rates. The supplied comparison notes missing benchmarks and differing AMI subsets.
