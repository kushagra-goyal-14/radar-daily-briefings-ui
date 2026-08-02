---
story_id: story_9703ce195f964589aceae7e382d19803
authors:
  - oldvcr.blogspot.com by classichasclass
date: 2026-08-02
generated_at: 2026-08-02T04:43:44.972Z
source: lobsters
section: infrastructure
tags:
  - mklinux
  - retrocomputing
  - apple-hardware
  - powerpc
  - dual-boot
  - hardware-restoration
title: MkLinux restoration completes on an Apple Workgroup Server 9150
url: http://oldvcr.blogspot.com/2026/08/mklinux-and-pimped-out-apple-workgroup.html
why_read: The project documents practical constraints when preserving and adapting rare PowerPC-era Macintosh server hardware for MkLinux experimentation.
status: unknown
source_published_at: 2026-08-02T02:56:14.000Z
source_external_id: https://lobste.rs/s/7ay8gq
source_adapter: rss
discussion: https://lobste.rs/s/7ay8gq/mklinux_pimped_out_apple_workgroup
discussions:
  - source: lobsters
    url: https://lobste.rs/s/7ay8gq/mklinux_pimped_out_apple_workgroup
interest_score: 6
utility_score: 4
novelty_score: 7
depth_score: 7
impact_score: 3
---

A Floodgap lab restoration rebuilds an Apple Workgroup Server 9150 and configures it to dual-boot classic Mac OS and MkLinux. The completed system combines expanded memory, a faster CPU, and NuBus video hardware.

The A/V card is detected by MkLinux but causes the system to halt before the pager and Linux tasks start. A 1MB HPV card instead boots the installer kernel, although the Mach kernel identifies it generically and supports only 8-bit color at 1024×768.

The project provides hands-on evidence about preserving and adapting rare PowerPC-era Macintosh server hardware. Further kernel experimentation is planned, so the restoration remains an exploratory preservation effort rather than a contemporary production platform.
