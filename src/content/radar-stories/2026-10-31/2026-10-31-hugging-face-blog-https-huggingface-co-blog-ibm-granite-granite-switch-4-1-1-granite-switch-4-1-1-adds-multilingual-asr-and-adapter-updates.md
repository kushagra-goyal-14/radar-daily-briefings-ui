---
story_id: story_bc040842ac234f9487494bc08ac49025
authors: []
date: 2026-10-31
generated_at: 2026-10-31T07:30:13.451Z
source: hugging-face-blog
section: ai
tags:
  - granite-switch
  - adapter-architecture
  - speech-recognition
  - multilingual-models
  - model-versioning
  - granitelib-core
title: Granite Switch 4.1.1 adds multilingual ASR and adapter updates
url: https://huggingface.co/blog/ibm-granite/granite-switch-4-1-1
why_read: The release demonstrates an adapter-focused model update path that limits recomputation and preserves compatibility with the previous version.
status: released
source_published_at: 2026-10-29T13:37:07.000Z
source_external_id: https://huggingface.co/blog/ibm-granite/granite-switch-4-1-1
source_adapter: rss
interest_score: 7
utility_score: 7
novelty_score: 6
depth_score: 6
impact_score: 6
---

IBM has released Granite Switch 4.1.1 as a patch release for Granite Switch 4.1. The article says it is fully backward compatible and requires no migration.

The update includes a Granite Speech ASR model for speech-to-text across 10 languages, with native punctuation and capitalization, plus an updated Decision adapter in granitelib-core. IBM says the base model remained untouched; only the new adapters were trained and composed for deployment.

The release illustrates an adapter-focused model update workflow. IBM says tutorials and an Adapter SDK for third-party adapter development are in progress, but the supplied evidence includes no detailed performance measurements or adoption data.
