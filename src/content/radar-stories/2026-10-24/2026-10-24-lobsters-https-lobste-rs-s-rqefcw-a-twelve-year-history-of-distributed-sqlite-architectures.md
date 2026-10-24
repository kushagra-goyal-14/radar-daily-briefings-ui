---
story_id: story_a242f2aa3f664c2a8971ec76da6a56c0
authors:
  - philipotoole.com via tomas
date: 2026-10-24
generated_at: 2026-10-24T07:30:27.054Z
source: lobsters
section: databases
tags:
  - distributed-sqlite
  - raft-replication
  - consensus-databases
  - eventual-consistency
  - crdt-databases
  - sqlite-wal
title: A twelve-year history of distributed SQLite architectures
url: https://philipotoole.com/twelve-years-of-distributed-sqlite
why_read: The article helps engineers match SQLite replication architecture to requirements for consistency, recovery, deployment, and operational control.
status: unknown
source_published_at: 2026-10-24T06:41:52.000Z
source_external_id: https://lobste.rs/s/rqefcw
source_adapter: rss
discussion: https://lobste.rs/s/rqefcw/twelve_years_distributed_sqlite
discussions:
  - source: lobsters
    url: https://lobste.rs/s/rqefcw/twelve_years_distributed_sqlite
interest_score: 8
utility_score: 7
novelty_score: 8
depth_score: 8
impact_score: 7
---

A first-person retrospective follows distributed SQLite from rqlite’s 2014 design through a broader ecosystem of projects and services. The article describes rqlite as placing a Raft log before SQLite and replicating writes across a cluster.

It distinguishes three approaches: consensus for leader-based strong consistency, WAL streaming for single-node disaster recovery, and CRDT-based merging for multiple writers with eventual consistency. It also contrasts embedded libraries and self-hosted servers with managed platforms.

The comparison is useful for selecting an architecture based on consistency, recovery, and deployment needs. Its historical and market conclusions are the author’s account, not independently verified evidence.
