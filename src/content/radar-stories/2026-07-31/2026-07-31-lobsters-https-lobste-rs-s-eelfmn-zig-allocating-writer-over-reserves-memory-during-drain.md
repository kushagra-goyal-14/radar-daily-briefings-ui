---
story_id: story_cfcd737cb20e4d57ac784fe16a1599e9
authors:
  - openmymind.net via vpol
date: 2026-07-31
generated_at: 2026-07-31T08:47:28.404Z
source: lobsters
section: programming
tags:
  - zig
  - memory-allocation
  - writer-api
  - vectored-io
  - stdlib-bug
  - arraylist
title: Zig Allocating writer over-reserves memory during drain
url: https://www.openmymind.net/std-io-writer-allocating-ate-my-memory
why_read: Zig engineers can diagnose unexpected buffer growth and decide when ArrayList is a simpler alternative for byte appends.
status: unknown
source_published_at: 2026-07-30T19:19:14.000Z
source_external_id: https://lobste.rs/s/eelfmn
source_adapter: rss
discussion: https://lobste.rs/s/eelfmn/std_io_writer_allocating_ate_all_my_memory
discussions:
  - source: lobsters
    url: https://lobste.rs/s/eelfmn/std_io_writer_allocating_ate_all_my_memory
interest_score: 7
utility_score: 8
novelty_score: 7
depth_score: 8
impact_score: 5
---

A technical article reports surprising memory growth in Zig’s std.Io.Writer.Allocating. Writing 1025 bytes at once produces a buffer length of 3204, while splitting the write produces 1668.

The article traces the behavior to the writer’s drain implementation. It says drain calculates splat capacity from the final pattern, then adds that capacity for every value in the vectored data list, effectively reserving the pattern twice when data contains one value and splat is one.

The finding matters for Zig code that relies on allocating writers for buffering or compression-related writes. The supplied evidence identifies no upstream fix or affected version range; ArrayList is suggested for simple byte appends.
