---
story_id: story_057f3408b10947e686f4cc0658a9d499
authors: []
date: 2026-11-12
generated_at: 2026-11-12T07:30:31.469Z
source: simon-willison
section: ai
tags:
  - gemini-decisions-api
  - decision-models
  - multimodal-ai
  - video-understanding
  - model-pricing
  - probabilistic-classification
title: Google’s Gemini Decision 1 adds multimodal decision-model API
url: https://simonwillison.net/2026/Nov/11/gemini-decisions-api
why_read: Engineers evaluating decision-model APIs can compare modality coverage, pricing, question types, and probabilistic output behavior.
status: unknown
source_published_at: 2026-11-11T22:03:25.000Z
source_external_id: https://simonwillison.net/2026/Nov/11/gemini-decisions-api/
source_adapter: atom
interest_score: 7
utility_score: 6
novelty_score: 7
depth_score: 5
impact_score: 6
---

Simon Willison reports that Google’s Gemini Decision 1 is a new decision-model API supporting yes/no, choice, and rubric-scoring questions. The post describes inputs spanning text, images, audio, video, and PDFs.

The API reportedly costs $0.10 per million input tokens, with output free. In a small video test, Gemini returned probability values rather than binary yes/no results for questions about the video’s contents and setting.

The example gives engineers concrete modality, pricing, and output-format details for prototyping comparisons. However, the evidence comes from a specialist blog post and includes no systematic benchmark or confirmation of production availability.
