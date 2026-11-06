---
story_id: story_8f20115935cd46a0b828f5b365d09fee
authors: []
date: 2026-11-06
generated_at: 2026-11-06T07:30:10.088Z
source: hugging-face-blog
section: ai
tags:
  - text-to-speech
  - on-device-inference
  - voice-cloning
  - flow-matching
  - offline-ai
  - transformers
title: Gradium releases Phonon for multilingual on-device speech synthesis
url: https://huggingface.co/blog/phonon-tts
why_read: Engineers can evaluate offline speech synthesis with documented model sizes, licensing, integrations, voice controls, and device-oriented inference support.
status: released
source_published_at: 2026-11-05T00:00:00.000Z
source_external_id: https://huggingface.co/blog/phonon-tts
source_adapter: rss
interest_score: 9
utility_score: 9
novelty_score: 8
depth_score: 9
impact_score: 8
---

Gradium has released Phonon, a compact text-to-speech model intended to run fully offline on phones, laptops, single-board computers, and browser tabs. The two model sizes are approximately 65 MB and 75 MB and cover five languages.

Phonon uses flow matching and autoregressive audio latents, with voice representations supplied through a speaker-latent file. The release includes the ptts inference framework with CPU, GPU, WebAssembly, WebGPU, and NPU backends, plus a Transformers implementation for batched generation.

Phonon 31m uses Apache 2.0, while Phonon 40m is non-commercial. The authors report strong Open TTS Leaderboard results, but the supplied evidence does not independently verify those benchmarks.
