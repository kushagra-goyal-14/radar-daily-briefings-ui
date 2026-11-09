---
story_id: story_d048fe9ecac449fbbe982a505cc0104a
authors: []
date: 2026-11-09
generated_at: 2026-11-09T07:30:11.369Z
source: simon-willison
section: databases
tags:
  - sqlite-extension
  - c-vs-rust
  - numeric-parsing
  - performance-benchmarking
  - fuzz-testing
  - floating-point-accuracy
title: SQLite parse_number extension comparison finds optimized C fastest
url: https://simonwillison.net/2026/Nov/8/sqlite-parse-number-c-vs-rust
why_read: The comparison informs SQLite extension language choices, binary-size tradeoffs, numeric parsing design, and optimization priorities.
status: unknown
source_published_at: 2026-11-08T22:26:00.000Z
source_external_id: https://simonwillison.net/2026/Nov/8/sqlite-parse-number-c-vs-rust/
source_adapter: atom
interest_score: 7
utility_score: 7
novelty_score: 7
depth_score: 8
impact_score: 5
---

Simon Willison compares four SQLite extensions implementing the same parse_number() behavior in C and Rust. The article reports benchmarks, binary sizes, parsing tests, type-preservation checks, and 8 million fuzz checks.

The optimized C implementation measured 16–19 ns per row, roughly twice as fast as the Rust versions. Plain C was slower on decimals when using strtod(), while a compact fast path based on Clinger’s approach reduced that gap. The reported C binary was 14 KB, compared with 321 KB and 298 KB for two Rust variants.

These results help extension authors evaluate implementation language and optimization choices. The evidence is specific to the described function and workloads, with no independent reproduction supplied.
