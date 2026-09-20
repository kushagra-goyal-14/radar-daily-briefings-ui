---
story_id: story_9a23af8b8e7545b4ba7fba8616446507
authors:
  - mrncciew.com via juliethefoxcoon
date: 2026-09-20
generated_at: 2026-09-20T07:30:43.471Z
source: lobsters
section: infrastructure
tags:
  - wifi-packet-capture
  - pcap
  - macos-wireless-diagnostics
  - airtool2
  - remote-packet-capture
  - 6-ghz-wifi
title: Mac-based Wi-Fi PCAP workflow details capture tools and limits
url: https://mrncciew.com/2025/11/06/wi-fi-pcap-with-mac-os
why_read: Wi-Fi engineers can follow a practical capture workflow while accounting for Mac adapter, 6 GHz, USB, and remote-capture limitations.
status: unknown
source_published_at: 2026-09-20T06:51:58.000Z
source_external_id: https://lobste.rs/s/h7a5gb
source_adapter: rss
discussion: https://lobste.rs/s/h7a5gb/wi_fi_pcap_with_mac_os_2025
discussions:
  - source: lobsters
    url: https://lobste.rs/s/h7a5gb/wi_fi_pcap_with_mac_os_2025
interest_score: 6
utility_score: 7
novelty_score: 3
depth_score: 4
impact_score: 4
---

The article presents a Mac-based workflow for capturing Wi-Fi PCAP files through macOS Wireless Diagnostics or AirTool 2. It covers selecting the channel and width, capturing traffic from a connected client, and locating Wireless Diagnostics output in `/private/var/tmp`.

AirTool 2 offers a simpler interface for 5 and 6 GHz capture, using the Mac’s built-in Wi-Fi adapter. The article says external USB adapters cannot be added for Mac PCAP capture, and recommends an M2-series or higher Mac for 6 GHz support.

The workflow also includes WLANPi-based remote capture and multi-channel capability. AirTool 2 is described as costing approximately USD 30, while Wi-Fi 7 Mac availability is identified as a late-2025 limitation.
