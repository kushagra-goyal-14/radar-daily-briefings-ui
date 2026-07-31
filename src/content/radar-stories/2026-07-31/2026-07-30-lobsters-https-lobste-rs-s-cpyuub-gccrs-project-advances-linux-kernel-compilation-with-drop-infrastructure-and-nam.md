---
story_id: story_7f571baff5e640fbb89875ed4f383117
authors:
  - lwn.net via fanf
date: 2026-07-31
generated_at: 2026-07-31T05:46:48.707Z
source: lobsters
section: programming
tags:
  - gccrs
  - rust-compiler
  - linux-kernel
  - drop-infrastructure
  - name-resolution
  - compiler-frontend
title: gccrs advances toward compiling Linux kernel Rust code
url: https://lwn.net/SubscriberLink/1083202/f1ba926cd57ac5c5
why_read: The technical findings identify compiler implementation areas that matter for Rust kernel compatibility and GCC-based toolchain planning.
status: in_progress
source_published_at: 2026-07-30T18:06:16.000Z
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
---

The gccrs project is making progress toward compiling the Linux kernel's Rust components, but full kernel compilation remains a work in progress. The effort has used kernel crates to expose compiler defects and guide implementation.

Recent work includes Drop infrastructure for Rust destructor semantics, namespace-resolution changes, attribute processing, metadata generation, compiler builtins, and support for no_core programs. The project is also implementing alloc support for the Rust for Linux milestone.

For compiler and kernel engineers, these changes clarify the compatibility work required for a GCC-based Rust toolchain. gccrs still cannot fully handle the kernel's complex Rust abstractions, and upstream GCC integration remains a coordination challenge.
