---
story_id: story_2b7ab36e88634795a3e90116ad0273e5
authors:
  - austinsnerdythings.com via juliethefoxcoon
date: 2026-11-09
generated_at: 2026-11-09T07:30:11.369Z
source: lobsters
section: infrastructure
tags:
  - raspberry-pi
  - gps-pps
  - ntp-server
  - chrony
  - microsecond-timing
  - linux-timekeeping
title: Raspberry Pi GPS PPS guide builds a microsecond NTP server
url: https://austinsnerdythings.com/2021/04/19/microsecond-accurate-ntp-with-a-raspberry-pi-and-pps-gps
why_read: Infrastructure engineers can reproduce the setup and understand its configuration requirements, diagnostics, and environmental limitations.
status: released
source_published_at: 2026-11-09T06:25:20.000Z
source_external_id: https://lobste.rs/s/jdsu1z
source_adapter: rss
discussion: https://lobste.rs/s/jdsu1z/microsecond_accurate_ntp_with_raspberry
discussions:
  - source: lobsters
    url: https://lobste.rs/s/jdsu1z/microsecond_accurate_ntp_with_raspberry
interest_score: 6
utility_score: 7
novelty_score: 3
depth_score: 7
impact_score: 4
---

Austin’s Nerdy Things presents a published guide for building a Stratum 1 NTP server with a Raspberry Pi, a PPS-capable GPS receiver, gpsd, and chrony. The guide provides wiring, package installation, configuration, diagnostics, and verification steps.

The setup exposes GPS PPS through the Raspberry Pi’s GPIO, combines it with GPS NMEA data, and configures chrony to select the PPS source. The author reports synchronization measurements within microsecond and, in one example, nanosecond ranges.

Performance depends on ambient temperature, processor load, and GPS reception. The guide is mainly relevant to specialized infrastructure, laboratory, and homelab deployments, and its 2025 update directs readers to newer PTP and configuration guidance.
