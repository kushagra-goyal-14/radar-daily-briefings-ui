---
story_id: story_2f497a929d1f45feaba8c0729f3d36d8
authors:
  - seangoedecke.com via wezm
date: 2026-09-24
generated_at: 2026-09-24T07:30:15.502Z
source: lobsters
section: ai
tags:
  - ai-text-detection
  - local-inference
  - browser-extension
  - native-messaging
  - model-benchmarking
  - privacy-preserving-ai
title: Deckard brings local AI-text detection to Chrome
url: https://www.seangoedecke.com/deckard
why_read: Engineers can assess a privacy-oriented browser architecture, model trade-offs, resource usage, and the risks of false positives.
status: released
source_published_at: 2026-09-24T01:38:45.000Z
source_external_id: https://lobste.rs/s/wvb8wg
source_adapter: rss
discussion: https://lobste.rs/s/wvb8wg/automatically_detecting_ai_text_my
discussions:
  - source: lobsters
    url: https://lobste.rs/s/wvb8wg/automatically_detecting_ai_text_my
interest_score: 8
utility_score: 7
novelty_score: 7
depth_score: 7
impact_score: 5
---

The author describes Deckard, a Chrome extension for automatically checking website text for AI generation. It runs locally on a Mac and is presented as usable, though substantially less accurate than Pangram.

The extension starts the model as needed and communicates through Chrome native messaging, avoiding a separate web server. In the author's benchmark, small models caught 19.35%–56.06% of AI-involved text and falsely flagged 1.595%–3.008% of human text.

Deckard uses about 400MB–1.2GB of memory while active and disables itself after five idle minutes. The author emphasizes that detections are signals rather than proof, especially given an approximately 2% false-positive rate.
