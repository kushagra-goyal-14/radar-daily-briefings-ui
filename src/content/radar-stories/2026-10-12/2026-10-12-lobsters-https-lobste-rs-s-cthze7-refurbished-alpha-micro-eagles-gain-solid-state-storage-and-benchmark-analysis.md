---
story_id: story_eaccb5ee3b91421485aa0fc01d5ffaf0
authors:
  - oldvcr.blogspot.com by classichasclass
date: 2026-10-12
generated_at: 2026-10-12T07:30:15.389Z
source: lobsters
section: infrastructure
tags:
  - retrocomputing
  - alpha-micro
  - amos-operating-system
  - zuluscsi
  - scsi-storage
  - benchmarking
title: Refurbished Alpha Micro Eagles gain solid-state storage and benchmark analysis
url: http://oldvcr.blogspot.com/2026/10/refurb-weekend-ii-alpha-micro-eagle-300.html
why_read: Legacy-system operators can learn refurbishment techniques and recognize when cached disk benchmarks produce misleading comparisons.
status: unknown
source_published_at: 2026-10-12T01:49:50.000Z
source_external_id: https://lobste.rs/s/cthze7
source_adapter: rss
discussion: https://lobste.rs/s/cthze7/refurb_weekend_ii_alpha_micro_eagle_300
discussions:
  - source: lobsters
    url: https://lobste.rs/s/cthze7/refurb_weekend_ii_alpha_micro_eagle_300
interest_score: 6
utility_score: 5
novelty_score: 8
depth_score: 8
impact_score: 3
---

A restoration report documents the revival of an Alpha Micro Eagle 300 and solid-state storage conversions across several legacy Alpha Micro systems. The Eagle 300 runs AMOS and continues serving network traffic through AlphaTCP and onboard Ethernet.

The author replaces aging hard disks with ZuluSCSI devices in the Eagle 300, Eagle 450, and other systems. The report compares 68K and ColdFire hardware and examines SI.LIT disk tests, finding that repeated runs can become dramatically faster when AMOS disk caching serves requests.

Disabling the cache produces lower but consistent scores, making cache state a material qualification for comparisons. The observations are specific to the tested systems and do not fully explain the Eagle 450's behavior.
