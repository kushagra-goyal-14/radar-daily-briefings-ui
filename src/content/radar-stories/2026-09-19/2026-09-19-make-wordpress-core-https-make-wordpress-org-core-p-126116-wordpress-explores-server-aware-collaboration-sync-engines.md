---
story_id: story_af75eec1e7704b3d9930dce9ee8645ad
authors:
  - Chris Zarate
date: 2026-09-19
generated_at: 2026-09-19T07:30:27.260Z
source: make-wordpress-core
section: wordpress
tags:
  - real-time-collaboration
  - server-aware-sync
  - conflict-resolution
  - crdt
  - operational-transform
  - gutenberg
title: WordPress explores server-aware collaboration sync engines
url: https://make.wordpress.org/core/2026/09/18/moving-to-a-server-aware-approach-for-collaboration
why_read: Engineers can assess how server-mediated attribution, authorization, merging, and conflict handling would change WordPress collaboration.
status: experimental
source_published_at: 2026-09-18T14:40:19.000Z
source_external_id: https://make.wordpress.org/core/?p=126116
source_adapter: rss
interest_score: 8
utility_score: 7
novelty_score: 8
depth_score: 8
impact_score: 8
---

A WordPress proposal explores moving real-time collaboration synchronization from browsers into WordPress servers. The work is in an early exploratory stage and is not ready for Core inclusion.

Under the proposed model, WordPress records who made each update, checks authorization, merges changes, stores the result, and returns missing peer changes. Conflicts caused by scripts or other peers can be surfaced for review. Three candidate engines are being tested: a server-side Yjs implementation, Distributed Editing’s three-way merge, and an intent log based on operational transform.

The approach could address attribution, server participation, and stale-update problems, but its performance costs and preferred implementation remain unresolved.
