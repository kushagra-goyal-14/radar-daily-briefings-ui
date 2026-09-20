---
story_id: story_dfcf285a1fc94a979acf73b7f898cf98
authors:
  - openloco.io via raymii
date: 2026-09-19
generated_at: 2026-09-19T07:30:27.260Z
source: lobsters
section: open-source
tags:
  - openloco
  - open-graphics
  - linux-support
  - appimage
  - zig-build
  - toolbar-refactoring
title: OpenLoco 26.09 releases North American assets and Linux improvements
url: https://openloco.io/news/2026/09/openloco-v26.09.html
why_read: The release gives maintainers concrete examples of asset expansion, Linux packaging changes, tooling feedback, and engine cleanup.
status: released
source_published_at: 2026-09-19T04:22:19.000Z
source_external_id: https://lobste.rs/s/c0ei1a
source_adapter: rss
discussion: https://lobste.rs/s/c0ei1a/openloco_version_26_09
discussions:
  - source: lobsters
    url: https://lobste.rs/s/c0ei1a/openloco_version_26_09
interest_score: 5
utility_score: 6
novelty_score: 6
depth_score: 6
impact_score: 4
---

OpenLoco version 26.09 has been released with a large addition of Open Graphics content for the North American Expansion. The release also includes gameplay, tooling, Linux-support, refactoring, and bug-fix changes.

New drag-dimension tooltips show the dimensions of dragged tools, helping users plan stations and tracks. Linux data-directory discovery now checks /usr/share/openloco and a path relative to the binary, while an AppImage build uses Zig to target an older glibc version.

The notes acknowledge that tooltip behavior is imperfect for some tools. Engineers should consult the full changelog for details beyond the summarized fixes and refactorings.
