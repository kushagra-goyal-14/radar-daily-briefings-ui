---
story_id: story_aaacad7c65fa4fad8e9151073c1d3d77
authors:
  - pydantic.dev via typesanitizer
date: 2026-10-11
generated_at: 2026-10-11T07:30:32.006Z
source: lobsters
section: databases
tags:
  - dynamic-shredding
  - parquet
  - columnar-storage
  - zone-map-pruning
  - datafusion
  - json-optimization
title: Pydantic details Logfire’s dynamic shredding query optimization
url: https://pydantic.dev/articles/dynamic-shredding-2026-01-26
why_read: The design shows how adaptive column extraction and predicate pushdown can accelerate semi-structured observability queries without changing their logical JSON interface.
status: in_progress
source_published_at: 2026-10-11T06:16:26.000Z
source_external_id: https://lobste.rs/s/6vjx1k
source_adapter: rss
discussion: https://lobste.rs/s/6vjx1k/how_shredding_json_is_giving_logfire
discussions:
  - source: lobsters
    url: https://lobste.rs/s/6vjx1k/how_shredding_json_is_giving_logfire
interest_score: 8
utility_score: 8
novelty_score: 7
depth_score: 9
impact_score: 6
---

Pydantic describes dynamic shredding, an in-progress Logfire optimization that extracts frequently accessed JSON attributes into typed Parquet columns during ingestion and compaction. The project says rollout to all customers is planned.

The layout keeps a logical JSON interface while physically separating selected attributes. Parquet column pruning, zone maps, compression, and predicate pushdown can then avoid downloading and parsing irrelevant JSON data. Attribute types widen from integer to float to JSON when observed values require it.

Pydantic reports some queries improving from 30-second timeouts to under one second, but the supplied evidence provides no independent benchmark methodology. Rare, unshredded attributes retain JSON parsing costs, and additional indexing work remains planned.
