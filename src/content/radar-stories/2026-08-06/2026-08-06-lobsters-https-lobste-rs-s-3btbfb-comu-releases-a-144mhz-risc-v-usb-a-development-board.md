---
story_id: story_641ec5f540d444c2a1334038cb993ea7
authors:
  - linuxgizmos.com via raymii
date: 2026-08-06
generated_at: 2026-08-06T06:50:30.873Z
source: lobsters
section: programming
tags:
  - risc-v-microcontroller
  - usb-hid
  - bare-metal-development
  - capacitive-touch
  - usb-bootloader
  - open-hardware
title: Comu releases a 144MHz RISC-V USB-A development board
url: https://linuxgizmos.com/comu-fits-a-144mhz-ch32v203-risc-v-board-inside-a-usb-a-port
why_read: Engineers can evaluate a low-cost board for programmable USB controls, bare-metal development, and compact hardware experiments.
status: released
source_published_at: 2026-08-06T04:42:01.000Z
source_external_id: https://lobste.rs/s/3btbfb
source_adapter: rss
discussion: https://lobste.rs/s/3btbfb/comu_fits_144mhz_ch32v203_risc_v_board
discussions:
  - source: lobsters
    url: https://lobste.rs/s/3btbfb/comu_fits_144mhz_ch32v203_risc_v_board
interest_score: 6
utility_score: 7
novelty_score: 7
depth_score: 7
impact_score: 4
---

Comu is a compact development board built around WCH’s CH32V203 RISC-V microcontroller, which operates at up to 144MHz. Measuring 13 × 9.4mm, it fits inside a USB-A port and is listed for sale through Tindie.

The board combines four capacitive-touch inputs, two LEDs, six GPIO test-pad signals, and a full-speed USB peripheral. A factory-installed 2KB bootloader stays active for five seconds after connection, while programs are flashed at address 0x800. Examples cover USB HID, USB TTY, mass storage, touch input, and LED control.

Development options include ch32fun, Rust, Arduino, and TinyUSB. The supplied evidence does not include independent performance testing.
