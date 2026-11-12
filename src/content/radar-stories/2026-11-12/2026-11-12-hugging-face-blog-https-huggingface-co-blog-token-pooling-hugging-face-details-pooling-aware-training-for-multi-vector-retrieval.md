---
story_id: story_bb674c6d08f246c5b2ddf46395309221
authors: []
date: 2026-11-12
generated_at: 2026-11-12T07:30:31.469Z
source: hugging-face-blog
section: ai
tags:
  - multi-vector-embeddings
  - token-pooling
  - retrieval-compression
  - sentence-transformers
  - colbert-retrieval
  - vector-storage
title: Hugging Face details pooling-aware training for multi-vector retrieval
url: https://huggingface.co/blog/token-pooling
why_read: The technique offers a reproducible way to trade vector-index storage against retrieval quality using Sentence Transformers.
status: unknown
source_published_at: 2026-11-11T00:00:00.000Z
source_external_id: https://huggingface.co/blog/token-pooling
source_adapter: rss
interest_score: 8
utility_score: 8
novelty_score: 7
depth_score: 8
impact_score: 6
---

Hugging Face describes pooling-aware training for multi-vector embedding models, a technique intended to preserve retrieval quality when document token vectors are compressed. The article presents the method and example checkpoints, but the supplied evidence does not establish a separate release status.

HierarchicalTokenPooling groups similar document embeddings with Ward clustering, replaces each group with a normalized mean, and leaves query embeddings unchanged by default. Training averages losses from unpooled and pooled representations, using a straight-through estimator for clustering decisions.

In the reported NanoBEIR experiments, factor-four pooling improved nDCG@10 from 49.03 to 51.23 while reducing document vectors by 74.8%. Results used one training run without hyperparameter search, so engineers should validate the tradeoff on their own corpus.
