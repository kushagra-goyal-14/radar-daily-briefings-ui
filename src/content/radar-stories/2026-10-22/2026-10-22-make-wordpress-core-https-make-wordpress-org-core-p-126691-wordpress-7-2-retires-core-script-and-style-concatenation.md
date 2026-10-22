---
story_id: story_71e84c01cadd415daae9f56b667f2a9e
authors:
  - Aditya Dhade
date: 2026-10-22
generated_at: 2026-10-22T12:04:35.882Z
source: make-wordpress-core
section: wordpress
tags:
  - wordpress-7-2
  - script-concatenation
  - asset-loading
  - prefetching
  - http-1-1
title: WordPress 7.2 retires core script and style concatenation
url: https://make.wordpress.org/core/2026/10/20/performance-chat-summary-20-october-2026
why_read: WordPress engineers should review administration asset delivery, retired endpoints, and the replacement prefetching behavior before upgrading.
status: released
source_published_at: 2026-10-20T17:04:01.000Z
source_external_id: https://make.wordpress.org/core/?p=126691
source_adapter: rss
interest_score: 7
utility_score: 7
novelty_score: 7
depth_score: 6
impact_score: 7
---

WordPress has landed the removal of core script/style concatenation in revision r64585, and the change is included in the 7.2-beta1 release. It retires the load-scripts.php and load-styles.php endpoints and closed more than 10 Trac tickets.

The summary says concatenation was used for WordPress core assets in login and administration screens, particularly for HTTP/1.1. WordPress 7.2 instead uses a newer approach that prefetches blocking scripts and styles known to be needed on the next screen.

Engineers maintaining WordPress administration environments should review asset delivery and endpoint assumptions. The supplied evidence does not include compatibility guidance or performance measurements.
