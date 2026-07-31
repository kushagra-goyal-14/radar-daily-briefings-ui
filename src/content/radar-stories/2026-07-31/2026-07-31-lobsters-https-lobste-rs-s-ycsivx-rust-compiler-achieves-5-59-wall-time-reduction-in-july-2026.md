---
story_id: story_f9d441cf2bfc4e3e8c0dfb74d4f83197
authors:
  - nnethercote.github.io via asb
date: 2026-07-31
generated_at: 2026-07-31T07:57:22.292Z
source: lobsters
section: programming
tags:
  - rust-compiler
  - performance-optimization
  - rustdoc
  - clippy
  - incremental-compilation
  - ast-optimization
title: Rust compiler achieves 5.59% wall-time reduction in July 2026
url: https://nnethercote.github.io/2026/07/31/how-to-speed-up-the-rust-compiler-in-july-2026.html
why_read: Rust engineers can understand recent compiler performance improvements and the optimization techniques—from AST node sizing to dependency-graph deduplication—that reduce build times across the ecosystem.
status: released
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

Nicholas Nethercote reports a 5.59% mean wall-time reduction in the Rust compiler over seven months through December 2025 to July 2026. Excluding a major rustdoc overhaul (37.92% reduction), the underlying compiler saw a 2.90% improvement.

Key optimizations included reducing rustdoc impl-processing overhead, integrating rustdoc into PGO training, and improving impl-sorting representation. Clippy saw 10–30% runtime reductions by eliminating no-op virtual-dispatch calls across hundreds of lints. The new trait solver showed dramatic progress, with one benchmark dropping from 27 seconds to under one second. AST expression nodes shrank from 72 to 64 bytes, improving cache locality by up to 29% on memory-heavy workloads.

Contributions from xmakro, Jakub Beránek, and newcomer Arya Dradjica (now supported to work on both Krabby and rustc)…
