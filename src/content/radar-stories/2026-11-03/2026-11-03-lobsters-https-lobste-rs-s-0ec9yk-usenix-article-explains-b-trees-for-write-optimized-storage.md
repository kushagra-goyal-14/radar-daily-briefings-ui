---
story_id: story_97d21cd4977b4ccdb54d08cea7a6fdb2
authors:
  - usenix.org via manuel
date: 2026-11-03
generated_at: 2026-11-03T07:30:08.067Z
source: lobsters
section: databases
tags:
  - b-e-trees
  - write-optimization
  - on-disk-storage
  - key-value-api
  - range-queries
  - lsm-trees
title: USENIX article explains Bε-trees for write-optimized storage
url: https://www.usenix.org/publications/login/oct15/bender
why_read: Database and systems engineers can compare storage structures and assess workload-specific application design around write optimization.
status: released
source_published_at: 2026-11-02T20:26:38.000Z
source_external_id: https://lobste.rs/s/0ec9yk
source_adapter: rss
discussion: https://lobste.rs/s/0ec9yk/introduction_b_trees_write_optimization
discussions:
  - source: lobsters
    url: https://lobste.rs/s/0ec9yk/introduction_b_trees_write_optimization
interest_score: 7
utility_score: 7
novelty_score: 5
depth_score: 8
impact_score: 6
---

The USENIX article “An Introduction to Bε-trees and Write-Optimization” presents Bε-trees as write-optimized data structures for organizing on-disk storage in databases and file systems. The article is an established technical publication rather than a newly announced implementation.

It describes a key-value API similar to a B-tree API and compares Bε-trees with B-trees and Log-Structured Merge trees. The discussion covers asymptotic performance and real-world measurements, particularly for inserts, range queries, and key-value updates.

The material can inform storage-engine and application-design decisions, but the supplied text does not include numerical results, measurement methodology, or workload constraints.
