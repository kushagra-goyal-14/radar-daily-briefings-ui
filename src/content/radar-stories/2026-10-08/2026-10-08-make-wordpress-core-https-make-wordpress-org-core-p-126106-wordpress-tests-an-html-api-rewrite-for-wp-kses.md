---
story_id: story_358d805f38ee448dbbaf57e9b05531d9
authors:
  - Dennis Snell
date: 2026-10-08
generated_at: 2026-10-08T07:30:44.053Z
source: make-wordpress-core
section: wordpress
tags:
  - wp-kses
  - html-sanitization
  - html-api
  - html-parsing
  - backward-compatibility
title: WordPress tests an HTML API rewrite for wp_kses()
url: https://make.wordpress.org/core/2026/10/07/progress-report-wp_kses
why_read: Plugin, theme, and core developers should test content-sensitive behavior before the replacement reaches a WordPress release.
status: experimental
source_published_at: 2026-10-07T19:57:21.000Z
source_external_id: https://make.wordpress.org/core/?p=126106
source_adapter: rss
interest_score: 8
utility_score: 8
novelty_score: 7
depth_score: 8
impact_score: 8
---

WordPress is testing a replacement for wp_kses() based on the HTML API. The report says the change is intended as an in-place upgrade without interface changes, while acknowledging that input behavior may change.

The new implementation structurally parses and reserializes HTML rather than applying the legacy chain of string processing and regular expressions. It normalizes syntax, removes disallowed contents of special elements such as SCRIPT and STYLE, and conservatively handles incomplete or complicated SVG and MathML input.

The wp_kses_force_legacy_parser filter provides an opt-out during testing. The report expects the change in WordPress 7.2 or 7.3, depending on feedback and test results.
