---
story_id: story_815ec52cbb154faa9267286cac4245b5
authors:
  - jaypatelani
date: 2026-08-02
generated_at: 2026-08-02T04:43:44.972Z
source: hn
section: infrastructure
tags:
  - netbsd-release
  - operating-system
  - release-engineering
  - arm-boot-images
  - open-security-issues
  - stable-branch
title: NetBSD 11.0 released with three pending security fixes
url: https://blog.netbsd.org/tnf/entry/netbsd_11_0_released
why_read: Infrastructure engineers can assess deployment readiness alongside documented workarounds and unresolved security fixes affecting selected subsystems.
status: released
source_published_at: 2026-08-01T17:56:41.000Z
hn_id: "49136736"
comments: https://news.ycombinator.com/item?id=49136736
interest_score: 7
utility_score: 7
novelty_score: 6
depth_score: 6
impact_score: 6
---

The NetBSD Project has released NetBSD 11.0, with architecture-specific installation guidance and downloadable images. ARM users can obtain images preconfigured with U-Boot.

The announcement transparently documents three open security-related pull requests: an hdaudio ioctl access-check issue, a remotely triggerable IPFilter null-pointer dereference, and a PF fragment-reassembly use-after-free. It lists a local workaround for hdaudio and notes that IPFilter and PF are not enabled in released kernels by default.

The project says the fixes will enter the stable branch after release and target NetBSD 11.1, which it aims to publish within two months. Operators should review the release caveats before deployment.
