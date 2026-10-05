---
story_id: story_494e518b5d0b40f19cb56915d4dfa04d
authors:
  - nishantjosh.dev by nishantjosh
date: 2026-10-05
generated_at: 2026-10-05T07:30:42.101Z
source: lobsters
section: programming
tags:
  - client-side-computing
  - server-client-architecture
  - local-inference
  - webassembly
  - cloud-compute
  - coding-agents
title: Essay argues software should default to local computation
url: https://nishantjosh.dev/blogs/youre-leaving-compute-on-the-table
why_read: The state-versus-computation split offers engineers a practical lens for evaluating latency, cloud cost, offline behavior, and execution placement.
status: unknown
source_published_at: 2026-10-05T05:56:11.000Z
source_external_id: https://lobste.rs/s/1gxpk2
source_adapter: rss
discussion: https://lobste.rs/s/1gxpk2/you_re_leaving_compute_on_table
discussions:
  - source: lobsters
    url: https://lobste.rs/s/1gxpk2/you_re_leaving_compute_on_table
interest_score: 8
utility_score: 7
novelty_score: 6
depth_score: 6
impact_score: 7
---

An opinion essay argues that software should default to local computation when the required data and context already exist on the customer’s device. It recommends treating server placement as a decision that requires justification rather than as the default architecture.

The proposed split assigns computation to the client and coordination, authority, persistence, shared state, and oversized workloads to servers. The essay uses games, Figma’s WebAssembly renderer, and coding-agent tooling as examples of this model.

Local execution still carries testing, update, device-capability, synchronization, trust, persistence, and isolation costs. The source presents a design heuristic, not a measured study or implemented change.
