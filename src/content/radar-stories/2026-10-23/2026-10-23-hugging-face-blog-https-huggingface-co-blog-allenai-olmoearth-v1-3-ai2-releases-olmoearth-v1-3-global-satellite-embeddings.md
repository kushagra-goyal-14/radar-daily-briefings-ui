---
story_id: story_950facb115cb4d28aa974a040bed6da8
authors: []
date: 2026-10-23
generated_at: 2026-10-23T07:30:31.040Z
source: hugging-face-blog
section: ai
tags:
  - satellite-embeddings
  - remote-sensing
  - geospatial-ai
  - foundation-models
  - change-detection
  - open-models
title: Ai2 releases OlmoEarth v1.3 global satellite embeddings
url: https://huggingface.co/blog/allenai/olmoearth-v1-3
why_read: Geospatial ML engineers can test remote-sensing workflows without first downloading imagery or provisioning GPUs for every exploratory task.
status: released
source_published_at: 2026-10-22T16:11:31.000Z
source_external_id: https://huggingface.co/blog/allenai/olmoearth-v1-3
source_adapter: rss
interest_score: 8
utility_score: 8
novelty_score: 8
depth_score: 8
impact_score: 8
---

Ai2 has released OlmoEarth v1.3, a satellite embedding model, alongside precomputed planetary embeddings, the OlmoEarth Embeddings Explorer, and open model, data, and pretraining code resources.

The model reads Sentinel-1, Sentinel-2, and Landsat time series and produces 128-dimensional vectors for each 10-meter pixel; the first 64 dimensions form a smaller embedding. The Explorer supports historical comparisons, similarity search, local classifier training, and GeoTIFF export.

Ai2 reports leading results across 27 evaluations and describes lower training compute than earlier versions. Coverage is global for 2023–2025 but selective for 2017–2022, and the supplied evidence contains no independent validation.
