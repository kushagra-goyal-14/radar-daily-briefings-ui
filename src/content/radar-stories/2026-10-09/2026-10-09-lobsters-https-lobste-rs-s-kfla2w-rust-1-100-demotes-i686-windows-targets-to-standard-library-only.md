---
story_id: story_3aafa3a8e4d94bbeb7ffcf4d004434e9
authors:
  - blog.rust-lang.org via madsmtm
date: 2026-10-09
generated_at: 2026-10-09T07:30:28.954Z
source: lobsters
section: programming
tags:
  - rust
  - i686-windows
  - cross-compilation
  - host-tools
  - target-tier-demotion
  - standard-library
title: Rust 1.100 demotes i686 Windows targets to standard-library only
url: https://blog.rust-lang.org/2026/10/02/demoting-i686-windows-targets-to-std-only
why_read: Rust maintainers must update build workflows because 32-bit Windows host toolchains will no longer be installable after Rust 1.100.
status: proposed
source_published_at: 2026-10-08T21:39:50.000Z
source_external_id: https://lobste.rs/s/kfla2w
source_adapter: rss
discussion: https://lobste.rs/s/kfla2w/demoting_i686_windows_targets_std_only
discussions:
  - source: lobsters
    url: https://lobste.rs/s/kfla2w/demoting_i686_windows_targets_std_only
interest_score: 7
utility_score: 8
novelty_score: 7
depth_score: 7
impact_score: 6
---

The Rust project plans to demote i686-pc-windows-msvc and i686-pc-windows-gnu with Rust 1.100. The MSVC target will move from Tier 1 with host tools to Tier 1 without them, while the GNU target will move from Tier 2 with host tools to Tier 2 without them.

Standard-library builds will continue to be distributed, and i686-pc-windows-msvc will remain covered by CI testing. However, toolchains will no longer be installable on 32-bit Windows hosts.

Rust recommends cross-compiling from a supported host, such as a 64-bit Windows toolchain. The announcement says other 32-bit platforms are unaffected.
