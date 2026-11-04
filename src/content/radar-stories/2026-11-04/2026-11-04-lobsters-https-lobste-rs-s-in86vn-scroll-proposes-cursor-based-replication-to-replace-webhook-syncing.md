---
story_id: story_1889267fb9a94f449eeb062eee9ce833
authors:
  - weli.dev via pushcx
date: 2026-11-04
generated_at: 2026-11-04T07:30:14.470Z
source: lobsters
section: programming
tags:
  - webhook-replacement
  - change-replication
  - event-log
  - cursor-based-sync
  - protocol-design
title: SCROLL proposes cursor-based replication to replace webhook syncing
url: https://weli.dev/blog/the-valley-of-webhooks
why_read: Engineers can evaluate a concrete alternative to webhook replication and its requirements for reliable SaaS data synchronization.
status: proposed
source_published_at: 2026-11-04T02:10:26.000Z
source_external_id: https://lobste.rs/s/in86vn
source_adapter: rss
discussion: https://lobste.rs/s/in86vn/valley_webhooks
discussions:
  - source: lobsters
    url: https://lobste.rs/s/in86vn/valley_webhooks
interest_score: 8
utility_score: 7
novelty_score: 8
depth_score: 8
impact_score: 7
---

The article proposes SCROLL, a draft-00 protocol for synchronizing SaaS data through ordered, cursor-addressed change logs instead of webhook notifications. It remains a proposal, and the article says almost nobody currently serves this model.

The proposed feed supports reading from the beginning for bootstrap, resuming with a cursor, streaming or polling, full-state upserts, and tombstones for deletes. Checkpoints could include counts and checksums to help verify replica state.

The design targets recurring webhook-replication work such as signature handling, deduplication, ordering buffers, bootstrap races, and reconciliation jobs. SCROLL is not reported as production-validated; a shim built from existing webhooks and list APIs is proposed as an experiment.
