---
story_id: story_c7f31da9ddc24ff8b5d915a025e6c447
authors:
  - Joe Dolson
date: 2026-08-04
generated_at: 2026-08-04T05:23:45.604Z
source: make-wordpress-core
section: wordpress
tags:
  - wordpress-7-1
  - accessibility
  - tooltips
  - toggletips
  - admin-interface
  - wp-html-tag-processor
title: WordPress 7.1 releases tooltip and toggletip helpers
url: https://make.wordpress.org/core/2026/08/03/introducing-name-and-informational-tool-tips-in-wordpress-7-1
why_read: Engineers can use the new helper contracts and markup to improve accessibility in constrained WordPress interfaces.
status: released
source_published_at: 2026-08-03T15:28:48.000Z
source_external_id: https://make.wordpress.org/core/?p=125207
source_adapter: rss
interest_score: 7
utility_score: 8
novelty_score: 7
depth_score: 8
impact_score: 6
---

WordPress 7.1 includes two core functions for rendering tooltips and informational help: wp_get_tooltip() and wp_get_toggletip(). The release implements them on selected post meta box controls and the main login screen.

wp_get_tooltip() exposes accessible names for icon-only buttons or links. wp_get_toggletip() adds a button that reveals extended information. Both support configurable IDs, buttons, labels, icons, and classes, and can process existing markup with WP_HTML_Tag_Processor.

Tooltip CSS is loaded globally, while JavaScript is loaded where post meta boxes or the login screen are used by default. The article emphasizes that persistent visible labels remain the preferred accessibility pattern.
