---
story_id: story_7bb65f123ad843bdbf20dfe701e3baae
authors:
  - Aaron Jorbin
date: 2026-07-31
generated_at: 2026-07-31T06:15:12.609Z
source: make-wordpress-core
section: wordpress
tags:
  - jquery-ui
  - wordpress-7-1
  - browser-support
  - library-update
title: WordPress 7.1 updates jQuery UI to 1.14.2
url: https://make.wordpress.org/core/2026/07/29/jquery-ui-updated-to-1-14-2-in-wordpress-7-1
why_read: Plugin and theme developers should audit removed jQuery UI functions and verify compatibility with the updated library and browser-support policy.
status: released
source_published_at: 2026-07-29T18:57:23.000Z
source_external_id: https://make.wordpress.org/core/?p=124739
source_adapter: rss
interest_score: 5
utility_score: 6
novelty_score: 3
depth_score: 4
impact_score: 5
---

WordPress 7.1 includes jQuery UI 1.14.2, updated from version 1.13.3. The official WordPress post says the release drops support for Internet Explorer and Edge Legacy in accordance with the WordPress Browser Support Policy.

The update sets `jQuery.uiBackCompat` to `true` so code written for the jQuery 1.11 API continues to function as expected. It removes `$.fn._form`, `$.ui.ie`, `$.ui.safeActiveElement`, and `$.ui.safeBlur`.

WordPress core does not use these functions, but plugin and theme developers should audit their code. The supplied document does not include migration examples or detailed replacement guidance.
