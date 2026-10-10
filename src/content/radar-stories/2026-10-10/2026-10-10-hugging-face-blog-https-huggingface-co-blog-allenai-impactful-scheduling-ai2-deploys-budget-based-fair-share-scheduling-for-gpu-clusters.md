---
story_id: story_fd57461b8dbd4422bc25f26f70039a40
authors: []
date: 2026-10-10
generated_at: 2026-10-10T07:30:29.338Z
source: hugging-face-blog
section: infrastructure
tags:
  - gpu-scheduling
  - fair-share-allocation
  - resource-budgets
  - time-slicing
  - distributed-training
  - preemption
title: Ai2 deploys budget-based fair-share scheduling for GPU clusters
url: https://huggingface.co/blog/allenai/impactful-scheduling
why_read: The case study offers concrete scheduler mechanisms, operational results, and tradeoffs for scarce GPU capacity.
status: released
source_published_at: 2026-10-09T15:20:29.000Z
source_external_id: https://huggingface.co/blog/allenai/impactful-scheduling
source_adapter: rss
interest_score: 8
utility_score: 8
novelty_score: 7
depth_score: 8
impact_score: 7
---

Ai2 replaced its priority-based GPU scheduler with GPU time budgets, hierarchical fair-share allocation, and time-slicing contracts. The system was rolled out cluster by cluster and evaluated over a 30-day test period.

Workloads receive allocated or unallocated occupancy, submit a minimum runtime, and may be preempted and requeued after that protected window. A seven-day lookback compares actual occupancy with allocated time, while unallocated work keeps GPUs busy without consuming budget.

Ai2 reports 98% occupancy and delivery of 98% of owed GPU hours, alongside a 74% reduction in repair work requiring human intervention. Capacity fragmentation and interactive-session recovery remain open issues.
