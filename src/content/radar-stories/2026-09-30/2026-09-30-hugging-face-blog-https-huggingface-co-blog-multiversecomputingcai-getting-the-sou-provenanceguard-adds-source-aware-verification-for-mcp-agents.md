---
story_id: story_b541d1fd8283497595c4f0b31c4c596e
authors: []
date: 2026-09-30
generated_at: 2026-09-30T07:30:23.076Z
source: hugging-face-blog
section: research
tags:
  - source-aware-verification
  - mcp-agents
  - provenance-tracking
  - claim-attribution
  - factuality-evaluation
title: ProvenanceGuard adds source-aware verification for MCP agents
url: https://huggingface.co/blog/MultiverseComputingCAI/getting-the-source-right-not-just-the-fact-source
why_read: It gives engineers a concrete design and evaluation framework for detecting cross-source attribution errors in multi-tool agents.
status: released
source_published_at: 2026-09-29T13:07:00.000Z
source_external_id: https://huggingface.co/blog/MultiverseComputingCAI/getting-the-source-right-not-just-the-fact-source
source_adapter: rss
interest_score: 8
utility_score: 8
novelty_score: 8
depth_score: 8
impact_score: 7
---

Multiverse Computing presents ProvenanceGuard, a released post-generation verification layer for MCP-based agents. It targets cross-source conflation: a claim supported somewhere in pooled tool outputs but attributed to the wrong source.

The system preserves tool outputs and source IDs through claim decomposition, source routing, support checking, attribution comparison, and allow-or-block decisions. It can send blocked answers through RARR-style repair and re-verify them.

In a held-out medical-agent evaluation, it caught 138 of 139 claims experts said should be blocked and selected the correct source about 86% of the time when identifiable. With similar sources, exact-source identification fell to 50.3%, so deployment requires calibration and review.
