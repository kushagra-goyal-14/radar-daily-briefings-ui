---
story_id: story_72731c0a324942d1a693258bb6bd3e28
authors:
  - riadsila
date: 2026-08-05
generated_at: 2026-08-05T05:23:22.824Z
source: hn
section: ai
tags:
  - shieldstral
  - multimodal-moderation
  - safety-classifier
  - policy-adaptation
  - open-weights
  - model-calibration
title: Mistral releases Shieldstral 3B multimodal moderation model
url: https://mistral.ai/news/shieldstral
why_read: Engineers can assess a deployable moderation model that combines policy adaptation, multimodal inputs, and single-GPU operation.
status: released
source_published_at: 2026-08-04T16:36:05.000Z
hn_id: "49171268"
comments: https://news.ycombinator.com/item?id=49171268
interest_score: 8
utility_score: 8
novelty_score: 8
depth_score: 8
impact_score: 7
---

Mistral has released Shieldstral, a 3B open-weights multimodal safety classifier under Apache 2.0. It evaluates text, images, and text-image inputs using natural-language policy questions supplied at inference time.

The model formats each request as an instruction, a yes-or-no query, and a document to judge. It reads only the yes and no logits, then softmax-normalizes them into a continuous safety score. Mistral says the model supports moderation, refusal detection, and policy adaptation without retraining.

Mistral also says Shieldstral runs on a single 16GB NVIDIA GPU and matches or outperforms larger open guard models. The supplied release does not include detailed benchmark results or independent corroboration.
