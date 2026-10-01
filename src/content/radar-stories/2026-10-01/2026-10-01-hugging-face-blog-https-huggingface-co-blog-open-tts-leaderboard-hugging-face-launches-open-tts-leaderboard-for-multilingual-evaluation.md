---
story_id: story_0de0bc69c2b54ec1ae2253094bc466ac
authors: []
date: 2026-10-01
generated_at: 2026-10-01T07:30:05.160Z
source: hugging-face-blog
section: ai
tags:
  - text-to-speech
  - voice-cloning
  - multilingual-evaluation
  - tts-benchmarking
  - objective-metrics
  - open-source-models
title: Hugging Face launches Open TTS Leaderboard for multilingual evaluation
url: https://huggingface.co/blog/open-tts-leaderboard
why_read: Engineers can compare TTS models using reproducible metrics, hardware conditions, multilingual results, voice-cloning support, and streaming latency.
status: released
source_published_at: 2026-09-30T00:00:00.000Z
source_external_id: https://huggingface.co/blog/open-tts-leaderboard
source_adapter: rss
interest_score: 8
utility_score: 8
novelty_score: 7
depth_score: 7
impact_score: 7
---

Hugging Face has introduced the Open TTS Leaderboard, a released evaluation resource focused on open-source and multilingual text-to-speech models. It provides objective comparisons across intelligibility, speed, speaker similarity, voice cloning, and streaming behavior.

The leaderboard uses WER and CER from TTS evaluation datasets, RTFx and TTFA under specified H200 GPU or CPU conditions, and cosine similarity between WavLM speaker embeddings. It also offers listening and community feedback views.

The project says objective evaluation can reduce turnaround from weeks to hours, but these metrics complement rather than replace human preference. The article says evaluation scripts will be open-sourced later.
