---
story_id: story_eee9e9073b6d4685bab4e0fd65d77743
authors:
  - movq.de via jaypatelani
date: 2026-09-26
generated_at: 2026-09-26T07:30:07.955Z
source: lobsters
section: infrastructure
tags:
  - netbsd
  - disklabels
  - disk-partitions
  - filesystem-metadata
  - hex-editing
  - checksums
title: NetBSD disklabel exploration maps metadata, partitions, and checksums
url: https://movq.de/blog/postings/2026-09-25/0/POSTING-en.html
why_read: The walkthrough gives systems engineers concrete offsets, commands, and checksum steps for inspecting NetBSD disklabel structures.
status: unknown
source_published_at: 2026-09-26T02:14:59.000Z
source_external_id: https://lobste.rs/s/qknavp
source_adapter: rss
discussion: https://lobste.rs/s/qknavp/netbsd_playing_with_disklabels
discussions:
  - source: lobsters
    url: https://lobste.rs/s/qknavp/netbsd_playing_with_disklabels
interest_score: 6
utility_score: 7
novelty_score: 6
depth_score: 8
impact_score: 4
---

A hands-on article explores NetBSD 11 disklabels on x86_64 using a virtual machine. It identifies the label at sector 1 and compares raw bytes with disklabel output and the NetBSD header definition.

The walkthrough maps metadata such as geometry and sector counts, then explains partition entries containing size, offset, and filesystem type. It also demonstrates the little-endian encoding of fields and verifies the label checksum by XORing its data while excluding the checksum field.

The author edits a ninth partition entry for a 1234-sector ZFS partition at sector 5678, recalculates the checksum, and confirms the result with disklabel. Some field meanings remain uncertain, and the example creates an overlap warning.
