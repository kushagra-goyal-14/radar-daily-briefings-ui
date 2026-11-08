---
story_id: story_3f8f46335fbf4d85a85b9f84e0ec2830
authors: []
date: 2026-11-08
generated_at: 2026-11-08T07:30:22.123Z
source: hugging-face-blog
section: ai
tags:
  - palette
  - small-language-models
  - slide-generation
  - synthetic-data
  - lora-fine-tuning
  - output-verification
title: Palette tests a 20B model for design-language slide generation
url: https://huggingface.co/blog/ibm-research/palette-deck-building
why_read: The staged designer-coder architecture and verification loop offer a practical pattern for self-hosted, structurally checkable generation.
status: experimental
source_published_at: 2026-11-03T16:35:36.000Z
source_external_id: https://huggingface.co/blog/ibm-research/palette-deck-building
source_adapter: rss
interest_score: 8
utility_score: 8
novelty_score: 8
depth_score: 9
impact_score: 6
---

An IBM Research article presents Palette, a 20B open-weight model for generating slide decks in a specified design language. The article describes the system as an experimental approach based on synthetic training data and LoRA fine-tuning.

Palette divides generation into a designer that creates a structured slide brief and a coder that writes pptxgenjs for individual slides. A harness renders slides, checks for overlaps, clipping, overflow, and malformed colors, then keeps repairs only when checks show improvement.

The article reports second place on PresentBench’s three-domain mean and a 3.5-point average harness gain across 131 decks. PresentBench does not evaluate design-language adherence, and the reported results use a separate frontier model for planning.
