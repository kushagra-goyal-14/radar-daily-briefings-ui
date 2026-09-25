---
story_id: story_af75eec1e7704b3d9930dce9ee8645ad
authors:
  - Chris Zarate
date: 2026-09-19
generated_at: 2026-09-19T07:30:27.260Z
source: make-wordpress-core
section: wordpress
tags:
  - wordpress
  - real-time-collaboration
  - server-aware-collaboration
  - conflict-resolution
  - crdt
  - gutenberg-sync-engines
title: WordPress explores server-aware real-time collaboration
url: https://make.wordpress.org/core/2026/09/18/moving-to-a-server-aware-approach-for-collaboration
why_read: The proposal defines candidate synchronization engines and highlights performance, hosting, authorization, and conflict-resolution trade-offs.
status: proposed
source_published_at: 2026-09-18T14:40:19.000Z
source_external_id: https://make.wordpress.org/core/?p=126116
source_adapter: rss
interest_score: 8
utility_score: 7
novelty_score: 7
depth_score: 8
impact_score: 7
---

A WordPress proposal explores changing real-time collaboration from browser-only peer synchronization to a server-aware model. The work is in early exploration and is not ready for inclusion in WordPress Core.

Under the proposed design, collaborators send updates to WordPress. The server records authorship, checks authorization, merges changes, stores the result, and can surface conflicts when an update cannot be merged cleanly. Three candidate engines are being developed: Yjs, Distributed Editing, and an intent log.

The implementations are available through an exploratory plugin. The proposal says server load, transport choices, and performance costs still require testing before a preferred approach is packaged for wider use.
