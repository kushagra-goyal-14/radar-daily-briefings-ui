---
story_id: story_6aa9b4fa2dd4429dab0b7732be0cd3f4
authors:
  - Isabel Brison
date: 2026-08-09
generated_at: 2026-08-09T19:20:32.562Z
source: make-wordpress-core
section: wordpress
tags:
  - wordpress-7-1
  - responsive-block-styles
  - configurable-breakpoints
  - global-styles
  - theme-json
  - block-editor
title: WordPress 7.1 releases responsive block styles and viewports
url: https://make.wordpress.org/core/2026/08/05/responsive-block-styles-and-configurable-viewports-in-wordpress-7-1
why_read: Engineers can implement responsive block styling, configure breakpoints, and understand rendering and editor opt-out behavior.
status: released
source_published_at: 2026-08-05T06:50:06.000Z
source_external_id: https://make.wordpress.org/core/?p=124535
source_adapter: rss
interest_score: 8
utility_score: 9
novelty_score: 7
depth_score: 9
impact_score: 7
---

WordPress 7.1 introduces responsive style states for blocks through Global Styles and individual block instances. The default style remains the base style, while Tablet and Mobile overrides apply within their configured ranges.

Themes can define viewport widths in the top-level `settings.viewport` object using non-negative px, em, or rem lengths. WordPress uses these values for responsive styles, block visibility, and device previews, then generates media-query-scoped CSS and stable block classes.

The `responsiveEditingEnabled` editor setting can remove viewport-editing controls without deleting saved responsive styles or their frontend CSS. There is no desktop-specific key; the default style provides desktop and fallback behavior.
