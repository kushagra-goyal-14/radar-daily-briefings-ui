---
story_id: story_f9d441cf2bfc4e3e8c0dfb74d4f83197
authors:
  - nnethercote.github.io via asb
date: 2026-07-31
generated_at: 2026-07-31T07:57:22.292Z
source: lobsters
section: programming
tags:
  - rust-compiler-performance
  - compiler-optimization
  - rustdoc-performance
  - clippy
  - incremental-compilation
  - trait-solver
title: Rust compiler performance improves across rustdoc, Clippy, and rustc
url: https://nnethercote.github.io/2026/07/31/how-to-speed-up-the-rust-compiler-in-july-2026.html
why_read: The article connects measurable compiler gains to profiling, data-layout, dispatch, PGO, and benchmark-driven optimization techniques.
status: in_progress
source_published_at: 2026-07-31T05:46:14.000Z
source_external_id: https://lobste.rs/s/ycsivx
source_adapter: rss
discussion: https://lobste.rs/s/ycsivx/how_speed_up_rust_compiler_july_2026
discussions:
  - source: lobsters
    url: https://lobste.rs/s/ycsivx/how_speed_up_rust_compiler_july_2026
interest_score: 8
utility_score: 7
novelty_score: 6
depth_score: 8
impact_score: 7
---

Nicholas Nethercote reports measurable Rust compiler performance progress from December 2025 through July 2026, including a 5.59% mean wall-time reduction. The work includes merged improvements to rustdoc, Clippy, incremental compilation, and AST representation.

The article attributes gains to several techniques: adding rustdoc benchmarks to PGO training, reducing unnecessary virtual dispatch in Clippy, shrinking AST nodes for cache locality, and using Cachegrind and DHAT to identify costly memcpy operations. It also describes substantial new trait-solver benchmark progress.

The results are benchmark-based and vary by workload. Clippy is not currently measured by rustc-perf on CI, while new trait-solver work remains underway.
