---
story_id: story_7bb65f123ad843bdbf20dfe701e3baae
authors:
  - Aaron Jorbin
date: 2026-07-31
source: make-wordpress-core
section: wordpress
tags:
  - jquery-ui
  - wordpress-7-1
  - browser-support
  - library-update
  - backward-compatibility
title: jQuery UI updated to 1.14.2 in WordPress 7.1
url: https://make.wordpress.org/core/2026/07/29/jquery-ui-updated-to-1-14-2-in-wordpress-7-1
why_read: WordPress developers must audit plugins and themes for use of the four removed jQuery UI functions and update code to avoid compatibility breakage in WordPress 7.1.
status: released
source_external_id: https://make.wordpress.org/core/?p=124739
source_adapter: rss
interest_score: 5
utility_score: 6
novelty_score: 3
depth_score: 4
impact_score: 5
generated_at: 2026-07-31T06:15:12.609Z
source_published_at: 2026-07-29T18:57:23.000Z
---

WordPress 7.1 includes jQuery UI 1.14.2, updated from 1.13.3 and representing the latest stable version. The update removes support for Internet Explorer and Edge Legacy, consistent with the WordPress Browser Support Policy.

The update removes four deprecated functions: $.fn._form, $.ui.ie, $.ui.safeActiveElement, and $.ui.safeBlur. To maintain compatibility with existing code written for the jQuery 1.11 API, jQuery.uiBackCompat is set to true. WordPress core does not use any of the removed functions.

Plugin and theme authors should audit their code for use of $.fn._form, $.ui.ie, $.ui.safeActiveElement, and $.ui.safeBlur and update accordingly before or during WordPress 7.1 adoption. The backward-compatibility setting mitigates some risk, but removing direct dependencies on these functions is necessary for long-term compatibility.
