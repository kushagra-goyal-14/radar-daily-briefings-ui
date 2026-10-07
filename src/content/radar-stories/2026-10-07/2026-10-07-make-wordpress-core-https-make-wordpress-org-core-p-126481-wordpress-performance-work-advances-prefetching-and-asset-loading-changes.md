---
story_id: story_3dbde44664be4bed8f7674eaa89963c2
authors:
  - Aditya Dhade
date: 2026-10-07
generated_at: 2026-10-07T07:30:36.281Z
source: make-wordpress-core
section: wordpress
tags:
  - wordpress-performance
  - script-prefetching
  - asset-concatenation
  - core-performance
  - phpstan
  - performance-chat
title: WordPress performance work advances prefetching and asset-loading changes
url: https://make.wordpress.org/core/2026/10/06/performance-chat-summary-6-october-2026
why_read: The update identifies concrete asset-loading changes and a reported PHPStan speedup relevant to WordPress platform and hosting engineers.
status: in_progress
source_published_at: 2026-10-06T16:28:42.000Z
source_external_id: https://make.wordpress.org/core/?p=126481
source_adapter: rss
interest_score: 7
utility_score: 7
novelty_score: 6
depth_score: 5
impact_score: 7
---

The WordPress Performance team reports that prefetching has been committed in changeset 64120. It plans next to disable script and style concatenation outside development environments through PR #13090, followed by removal of load-scripts.php and load-styles.php and their related logic.

The summary also records Weston Ruter’s report that a full uncached analysis of WordPress core took 8 seconds with PHPStan 2.3.0, compared with 60 seconds previously.

The asset-loading work remains in progress, so deployment effects are not established. The PHPStan comparison lacks methodology in the supplied material.
