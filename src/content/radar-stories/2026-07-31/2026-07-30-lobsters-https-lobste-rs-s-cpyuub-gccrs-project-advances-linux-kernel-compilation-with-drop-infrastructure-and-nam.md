---
story_id: story_7f571baff5e640fbb89875ed4f383117
authors:
  - lwn.net via fanf
date: 2026-07-31
source: lobsters
section: programming
tags:
  - gccrs
  - rust-compiler
  - linux-kernel
  - gcc-frontend
  - drop-infrastructure
  - name-resolution
title: GCC Rust frontend makes progress compiling Linux kernel components
url: https://lwn.net/SubscriberLink/1083202/f1ba926cd57ac5c5
why_read: Rust-in-Linux developers and toolchain maintainers can assess gccrs capability gaps and the technical challenges blocking GCC-based Rust compilation of production kernel code.
status: in_progress
source_external_id: https://lobste.rs/s/cpyuub
source_adapter: rss
discussion: https://lobste.rs/s/cpyuub/progress_toward_compiling_linux_with
discussions:
  - source: lobsters
    url: https://lobste.rs/s/cpyuub/progress_toward_compiling_linux_with
interest_score: 7
utility_score: 5
novelty_score: 6
depth_score: 7
impact_score: 6
generated_at: 2026-07-31T05:46:48.707Z
source_published_at: 2026-07-30T18:06:16.000Z
---

The gccrs project is pursuing a Rust frontend for the GCC compiler, with emphasis since early 2026 on compiling Linux kernel code. This work is needed because the kernel currently requires the LLVM-based rustc compiler, but a GCC-based alternative would support architectures not targeted by LLVM and integrate with GCC's plugin ecosystem.

In March 2026, gccrs shifted from version-based planning to three capability milestones: embedded Rust (no_std, core crate only), Rust for Linux (adding alloc and kernel-specific crates), and general-purpose. The first milestone is nearly complete. Work on the second is underway, with the team adding compiler_builtins support and addressing kernel-specific crates. Interns joined the project in May to fix kernel-encountered bugs and implement missing allocator support.

Real-world kernel testing…
