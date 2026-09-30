---
story_id: story_fd62f96cffba4e61889cc3c30a1d1a57
authors:
  - nnethercote.github.io via patchunwrap
date: 2026-09-30
generated_at: 2026-09-30T07:30:23.076Z
source: lobsters
section: programming
tags:
  - rust-compiler
  - compiler-optimization
  - compile-time-performance
  - profile-guided-optimization
  - borrow-checker
  - trait-solver
title: Rust compiler performance improves across major subsystems
url: https://nnethercote.github.io/2026/09/30/how-to-speed-up-the-rust-compiler-in-september-2026.html
why_read: The report identifies concrete compiler changes, measured gains, and remaining performance costs affecting Nightly features and selected workloads.
status: in_progress
source_published_at: 2026-09-30T02:08:22.000Z
source_external_id: https://lobste.rs/s/odrfgk
source_adapter: rss
discussion: https://lobste.rs/s/odrfgk/how_speed_up_rust_compiler_september_2026
discussions:
  - source: lobsters
    url: https://lobste.rs/s/odrfgk/how_speed_up_rust_compiler_september_2026
interest_score: 8
utility_score: 8
novelty_score: 7
depth_score: 9
impact_score: 7
---

A September 2026 report describes a broad wave of Rust compiler performance improvements. Across measurements from July 29 through September 28, the report records a 4.57% mean wall-time reduction across 629 benchmarks, with 555 improving and 74 regressing.

Changes include PGO for Clippy, an LLVM 23 upgrade, optimization of Polonius and the new trait solver, allocation reductions, and revised dataflow traversal. One Cranelift check build reportedly saw an approximately 30% wall-time reduction after fixpoint work fell from 1.5 million to 90,000 calls.

The work remains in progress. Polonius and the new trait solver are enabled on Nightly and remain slower in a minority of cases, so effects depend on workload and compiler configuration.
