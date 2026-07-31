---
story_id: story_2b2c5bb0404d47a78ae035390b46b099
authors:
  - Lance Willett
date: 2026-07-31
source: make-wordpress-core
section: wordpress
tags:
  - phpunit
  - ci-optimization
  - test-matrix
  - github-actions
  - wordpress-core
  - devops
title: WordPress Core trims PHPUnit matrix and caches Gutenberg builds for 7.1
url: https://make.wordpress.org/core/2026/07/30/leaner-steadier-phpunit-runs-for-upcoming-releases
why_read: Core contributors and infrastructure teams can learn the specific optimization techniques—matrix boundary trimming and build caching—that reduced CI load while maintaining quality coverage.
status: released
source_external_id: https://make.wordpress.org/core/?p=125103
source_adapter: rss
interest_score: 6
utility_score: 6
novelty_score: 4
depth_score: 6
impact_score: 5
generated_at: 2026-07-31T06:15:12.609Z
source_published_at: 2026-07-30T01:12:10.000Z
---

WordPress Core has released CI optimizations ahead of version 7.1 to reduce GitHub Actions load while maintaining test coverage. The work trims the PHPUnit test matrix and caches the Gutenberg build artifact.

The PHPUnit matrix now runs only boundary PHP versions rather than the full coverage matrix, with redundant database combinations dropped. Gutenberg builds are fetched once per run and cached, replacing the previous per-job fetch pattern. Docker image pulls are also bounded with retries to reduce transient failures.

Across comparable GitHub Actions runs before and after the changes, job count fell by approximately 52%, job-minutes by 54%, and reruns needed to reach green status dropped from roughly 68% to 36%.
