---
story_id: story_1735de7137fe4e0a871208822be94679
authors: []
date: 2026-10-03
generated_at: 2026-10-03T07:30:24.261Z
source: hugging-face-blog
section: ai
tags:
  - scientific-report-generation
  - open-weights
  - retrieval-augmented-generation
  - supervised-fine-tuning
  - direct-preference-optimization
  - citation-grounding
title: Ai2 open-sources AstaBrief 8B for cited scientific reports
url: https://huggingface.co/blog/allenai/astabrief
why_read: Engineers can examine the model, training approach, and one-pass pipeline for faster, locally deployable scientific report generation.
status: released
source_published_at: 2026-10-02T15:19:50.000Z
source_external_id: https://huggingface.co/blog/allenai/astabrief
source_adapter: rss
interest_score: 8
utility_score: 8
novelty_score: 7
depth_score: 8
impact_score: 7
---

Ai2 has open-sourced AstaBrief 8B, an open-weights model for generating cited scientific reports. It is already used as Fast mode in Asta alongside Claude-powered Thinking mode.

AstaBrief takes a research question and retrieved literature excerpts, then generates the complete report in one pass. Ai2 trained it from Qwen3-8B using supervised fine-tuning and direct preference optimization, with filtering focused especially on citation density. The release includes model weights, training data, and an example workflow for reports from PDFs.

Ai2 reports average Fast-mode generation time of 51.1 seconds versus 178.5 seconds for Thinking mode. Most evaluation work was completed in 2025, so comparisons with current frontier models remain unresolved.
