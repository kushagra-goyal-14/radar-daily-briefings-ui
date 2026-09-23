---
story_id: story_92a7100ff4534d6c9140d337d35a51a5
authors:
  - blog.verygoodsoftwarenotvirus.dev via abhin4v
date: 2026-09-23
generated_at: 2026-09-23T07:30:30.323Z
source: lobsters
section: infrastructure
tags:
  - redis-cluster
  - hash-tags
  - h3-geospatial-indexing
  - cache-key-design
  - multi-key-commands
  - observability
title: Redis caching case study details clustered batching failures
url: https://blog.verygoodsoftwarenotvirus.dev/posts/2026/09/22/redis-is-not-a-map-you-talk-to-over-tcp
why_read: It explains how Redis cluster mechanics affect cache-key design, batching, concurrency, expiry, serialization, and observability at high request volumes.
status: unknown
source_published_at: 2026-09-23T05:00:36.000Z
source_external_id: https://lobste.rs/s/sfhrrp
source_adapter: rss
discussion: https://lobste.rs/s/sfhrrp/redis_is_not_map_you_talk_over_tcp
discussions:
  - source: lobsters
    url: https://lobste.rs/s/sfhrrp/redis_is_not_map_you_talk_over_tcp
interest_score: 8
utility_score: 9
novelty_score: 7
depth_score: 9
impact_score: 6
---

A production case study describes a route-estimate cache whose initial Redis batching approach failed in a cluster. Keys derived from H3 origin and destination cells landed across many hash slots, so client-side MGET and MSET operations became numerous per-node requests or produced CROSSSLOT errors.

The author uses Redis hash tags to control slot placement, selecting tag integers by walking CRC16 results until configured capacity is distributed across primaries. Keys are grouped by slot before fan-out, and a Lua EVAL script supplies atomic bulk writes with expiry because MSET lacks TTL arguments. Cached JSON values are replaced with compact CSV.

The account is workload-specific and supplies no independent benchmark or comparative evaluation.
