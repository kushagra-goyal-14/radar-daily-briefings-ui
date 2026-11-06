---
story_id: story_b76e1b46773f4a3588b4c6546241ffbc
authors:
  - Ashar Fuadi
date: 2026-11-06
generated_at: 2026-11-06T07:30:10.088Z
source: make-wordpress-core
section: wordpress
tags:
  - wordpress-7-2
  - inline-svg
  - admin-bar
  - admin-menu
  - plugin-compatibility
  - css-migration
title: WordPress 7.2 beta replaces admin icons with inline SVG
url: https://make.wordpress.org/core/2026/11/05/svg-icons-in-the-admin-bar-and-menu-in-wordpress-7-2
why_read: Plugin and theme developers can identify affected selectors, PHP node markup, and compatibility patterns before testing WordPress 7.2.
status: experimental
source_published_at: 2026-11-05T11:15:41.000Z
source_external_id: https://make.wordpress.org/core/?p=126703
source_adapter: rss
interest_score: 7
utility_score: 9
novelty_score: 7
depth_score: 8
impact_score: 6
---

WordPress 7.2 beta replaces core admin-bar and menu Dashicons with inline SVGs from @wordpress/icons. The project says most plugins and themes need no changes, while custom admin color schemes and icon modifications may require updates.

The new markup moves icons into SVG-containing elements, changing how CSS selectors, hiding rules, replacement images, and admin-bar node titles work. Registered namespaced icons can now be supplied through menu-page, post-type, and admin-bar APIs, with `wp_is_valid_icon_name()` available for validation of name format.

Developers should review selectors targeting `::before`, empty `.ab-icon` spans, or Dashicon classes. The document provides compatibility patterns for earlier WordPress versions, but the supplied evidence covers beta behavior rather than a final release.
