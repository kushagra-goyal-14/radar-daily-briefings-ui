---
story_id: story_c8587b4c949f4024b98f943f6dc41e90
authors:
  - blogs.kde.org via cesarandreu
date: 2026-11-01
generated_at: 2026-11-01T07:30:28.638Z
source: lobsters
section: programming
tags:
  - kde-terminal
  - terminal-emulator
  - gpu-rendering
  - qt-quick
  - libghostty-vt
  - accessibility
title: KDE introduces Kwi, an experimental GPU-accelerated terminal
url: https://blogs.kde.org/2026/11/01/introducing-kwi
why_read: Terminal and KDE developers can evaluate Kwi’s Qt Quick embedding model, rendering architecture, and current readiness constraints.
status: proposed
source_published_at: 2026-11-01T02:56:29.000Z
source_external_id: https://lobste.rs/s/lt44rt
source_adapter: rss
discussion: https://lobste.rs/s/lt44rt/introducing_kwi_new_kde_terminal
discussions:
  - source: lobsters
    url: https://lobste.rs/s/lt44rt/introducing_kwi_new_kde_terminal
interest_score: 7
utility_score: 6
novelty_score: 8
depth_score: 8
impact_score: 5
---

KDE developer Eike Hein has introduced Kwi, a new terminal emulator for KDE Plasma and other free desktops. The project is well underway but remains an experiment and proposal, with limited testing and no tagged v0.1.0 release.

Kwi combines libghostty-vt with KDE Frameworks, Qt Quick, Kirigami, and a Vulkan- or OpenGL-accelerated Qt Scene Graph renderer. It also provides a public Qt Quick/QML module for embedding terminal functionality in other KDE applications.

Hein reports benchmark results from 3x to 35x faster than Konsole, depending on the test. Users should expect bugs, dependency problems, and incomplete compatibility while the architecture develops.
