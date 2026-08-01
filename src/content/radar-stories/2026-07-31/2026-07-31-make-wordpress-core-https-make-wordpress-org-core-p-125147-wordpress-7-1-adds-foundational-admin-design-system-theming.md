---
story_id: story_7de1aefb221043d1ad6238a656ee0243
authors:
  - Andrew Duthie
date: 2026-07-31
generated_at: 2026-07-31T23:35:24.629Z
source: make-wordpress-core
section: wordpress
tags:
  - wordpress-7-1
  - design-tokens
  - theme-provider
  - admin-theming
  - css-custom-properties
  - plugin-integration
title: WordPress 7.1 adds foundational admin design-system theming
url: https://make.wordpress.org/core/2026/07/31/design-system-theming-in-wordpress-7-1
why_read: Plugin authors can evaluate the new shared theming primitives and their constraints before integrating them into admin interfaces.
status: in_progress
source_published_at: 2026-07-31T12:51:45.000Z
source_external_id: https://make.wordpress.org/core/?p=125147
source_adapter: rss
interest_score: 7
utility_score: 8
novelty_score: 7
depth_score: 8
impact_score: 7
---

WordPress 7.1 will include foundational design-system theming support for admin and super-admin interface components. The documented work is in progress and covers color, roundness, and cursor behavior.

A default `wp-theme` stylesheet will expose semantic design tokens as CSS custom properties, while the `wp-theme` script will provide a React `ThemeProvider`. Plugins can use these dependencies to theme page areas with inherited or overridden settings, including seed colors, cursor styles, corner-radius presets, and root-document application.

The color algorithm aims for accessible contrast but cannot guarantee it for every combination, so developers must verify generated output. Broader admin coverage is planned for subsequent releases.
