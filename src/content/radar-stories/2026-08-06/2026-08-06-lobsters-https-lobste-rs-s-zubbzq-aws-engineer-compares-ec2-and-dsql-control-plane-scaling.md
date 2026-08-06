---
story_id: story_5ea1c21dadb546d8be8a52ffcfb6ef24
authors:
  - allthingsdistributed.com via typesanitizer
date: 2026-08-06
generated_at: 2026-08-06T06:50:30.873Z
source: lobsters
section: infrastructure
tags:
  - control-planes
  - distributed-systems
  - static-stability
  - database-scaling
  - amazon-dsql
  - ec2
title: AWS engineer compares EC2 and DSQL control-plane scaling
url: https://www.allthingsdistributed.com/2026/08/on-building-scalable-control-planes.html
why_read: The comparison highlights concrete tradeoffs in reconciliation, static stability, database scaling, and operational complexity for distributed services.
status: released
source_published_at: 2026-08-06T05:41:02.000Z
source_external_id: https://lobste.rs/s/zubbzq
source_adapter: rss
discussion: https://lobste.rs/s/zubbzq/on_building_scalable_control_planes
discussions:
  - source: lobsters
    url: https://lobste.rs/s/zubbzq/on_building_scalable_control_planes
interest_score: 8
utility_score: 7
novelty_score: 6
depth_score: 8
impact_score: 8
---

Zak van der Merwe presents a first-person comparison of control-plane engineering at Amazon EC2 and Amazon DSQL. The article describes control planes as systems that record desired state and continuously reconcile it with infrastructure reality.

EC2’s control plane evolved from a primary MySQL database to read replicas, availability-zone and cell sharding, and increased automation. The article says DSQL instead automatically adds read replicas, provides strongly consistent reads, and partitions workloads while preserving relational features.

Amazon DSQL launched generally available in 2025, but the article notes feature gaps such as foreign key constraints. It also says migrating EC2’s control plane would take years and provides no independent performance benchmarks.
