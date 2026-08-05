---
story_id: story_14879e094c354c2bb43281c4cc2df57f
authors:
  - github.com via fanf
date: 2026-08-05
generated_at: 2026-08-05T05:23:22.824Z
source: lobsters
section: programming
tags:
  - macos-window-manager
  - tiling-window-manager
  - niri-layout
  - ipc-cli
  - toml-configuration
  - runtime-tracing
title: Nehir brings Niri-style scrolling columns to macOS
url: https://github.com/apphane-dev/nehir
why_read: Engineers can evaluate Nehir’s layout model, automation interfaces, configuration design, and debugging workflow before adopting it.
status: proposed
source_published_at: 2026-08-05T02:25:51.000Z
source_external_id: https://lobste.rs/s/6ohotl
source_adapter: rss
discussion: https://lobste.rs/s/6ohotl/nehir_tiling_window_manager_for_macos
discussions:
  - source: lobsters
    url: https://lobste.rs/s/6ohotl/nehir_tiling_window_manager_for_macos
interest_score: 7
utility_score: 8
novelty_score: 7
depth_score: 9
impact_score: 5
---

Nehir is a macOS tiling window manager built around Niri’s horizontally scrolling column layout. The supplied project documentation describes its capabilities and installation paths, but does not document a published release or released version.

Windows are arranged in columns that scroll horizontally, with overflow tabbing when stacked windows cannot fit at minimum heights. Nehir also provides workspaces, multi-monitor support, live-watched split TOML configuration, Unix-socket IPC through nehirctl, and application rules.

Developer Mode adds runtime dumps, state reset and restart actions, and trace capture through the command palette, shortcuts, or IPC. Users must grant Accessibility permissions, and force quits can leave parked windows at the screen edge.
