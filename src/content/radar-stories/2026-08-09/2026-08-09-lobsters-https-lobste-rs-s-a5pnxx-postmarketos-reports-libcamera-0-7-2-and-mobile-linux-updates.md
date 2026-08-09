---
story_id: story_10990969773246febc5c6452695191b2
authors:
  - postmarketos.org via funderscore
date: 2026-08-09
generated_at: 2026-08-09T19:20:32.562Z
source: lobsters
section: infrastructure
tags:
  - postmarketos
  - libcamera
  - mobile-linux
  - camera-support
  - linux-kernels
  - device-ports
title: postmarketOS reports libcamera 0.7.2 and mobile Linux updates
url: https://postmarketos.org/blog/2026/08/06/pmOS-update-2026-07
why_read: Mobile Linux engineers can identify camera, kernel, suspend, and device-support changes affecting deployment and debugging.
status: released
source_published_at: 2026-08-09T16:16:53.000Z
source_external_id: https://lobste.rs/s/a5pnxx
source_adapter: rss
discussion: https://lobste.rs/s/a5pnxx/postmarketos_2026_07_libcamera_0_7_2
discussions:
  - source: lobsters
    url: https://lobste.rs/s/a5pnxx/postmarketos_2026_07_libcamera_0_7_2
interest_score: 7
utility_score: 7
novelty_score: 5
depth_score: 7
impact_score: 6
---

The postmarketOS July 2026 roundup reports the libcamera 0.7.2 release and related merged changes. Robert M. upgraded the postmarketOS edge package, dropping 11 patches that had been upstreamed.

The update adds support for color correction matrices in tuning files, including current iterations for Pixel 3a and Fairphone 5 camera sensors. GPU-ISP performance also improved when the dmabuf direct-import path is available. Camera selection fixes in mobile-config-firefox should enable video calls out of the box on devices with working cameras.

The roundup also records kernel and suspend fixes, update notifications, and device-category changes. Some sites may still experience WebRTC camera freezing, and device-port maintenance remains an open need.
