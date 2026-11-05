---
story_id: story_e3be9410b68d4b5596f38776da8d6225
authors: []
date: 2026-11-05
generated_at: 2026-11-05T07:30:20.895Z
source: hugging-face-blog
section: ai
tags:
  - structured-ocr
  - document-extraction
  - schema-directed-extraction
  - small-language-model
  - self-hosted-inference
title: Dharma-AI releases 2B-parameter Field Extractor for structured JSON
url: https://huggingface.co/blog/Dharma-AI/dharma-field-extractor
why_read: Engineers evaluating document pipelines can compare schema control, null handling, self-hosted deployment, and vendor-reported benchmark results.
status: released
source_published_at: 2026-11-04T17:50:10.000Z
source_external_id: https://huggingface.co/blog/Dharma-AI/dharma-field-extractor
source_adapter: rss
interest_score: 8
utility_score: 8
novelty_score: 7
depth_score: 8
impact_score: 7
---

Dharma-AI has released a 2-billion-parameter Field Extractor that converts document images into structured JSON. It supports open extraction, where the model identifies fields, and schema-directed extraction, where users specify keys, types, and nested shapes.

The model builds on DharmaOCR-LITE v1.1 and uses a LoRA adapter trained on 43,384 examples across multiple document domains and languages. The article says absent requested fields return null and table data is organized row by row.

Dharma-AI reports a benchmark score of 0.834, above its tested frontier configurations, with lower estimated self-hosted cost on one L40S. These comparisons are vendor-reported, and deployment cost depends on hardware, volume, and latency.
