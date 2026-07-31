---
story_id: story_2b2c5bb0404d47a78ae035390b46b099
authors:
  - Lance Willett
date: 2026-07-31
generated_at: 2026-07-31T06:15:12.609Z
source: make-wordpress-core
section: wordpress
tags:
  - phpunit
  - ci-optimization
  - wordpress-core
  - github-actions
  - test-matrix
  - performance-improvements
title: WordPress trims PHPUnit CI matrix ahead of 7.1
url: https://make.wordpress.org/core/2026/07/30/leaner-steadier-phpunit-runs-for-upcoming-releases
why_read: Core contributors can use the measured matrix and build-fetch changes as concrete inputs for CI capacity and reliability work.
status: merged
source_published_at: 2026-07-30T01:12:10.000Z
source_external_id: https://make.wordpress.org/core/?p=125103
source_adapter: rss
interest_score: 6
utility_score: 6
novelty_score: 4
depth_score: 6
impact_score: 5
---

WordPress Core has landed CI changes ahead of version 7.1 to reduce load during large pull-request and release workloads. The work trims the PHPUnit matrix while retaining full PHP coverage.

The project reports that redundant database combinations were dropped, reducing jobs by about 52% and job-minutes by about 54% per run. Gutenberg is fetched once per run instead of once per job, with bounded Docker image-pull retries; reruns needed for green builds fell from roughly 68% to 36%.

The measurements came from comparable GitHub Actions runs. The changes reduce job count, not test duration, and further matrix and runner work is planned.
