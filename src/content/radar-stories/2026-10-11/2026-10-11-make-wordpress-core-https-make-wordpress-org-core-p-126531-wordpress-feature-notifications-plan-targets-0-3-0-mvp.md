---
story_id: story_2bba2408b1354e2db409e4bc9260ae39
authors:
  - Jonathan Bossenger
date: 2026-10-11
generated_at: 2026-10-11T07:30:32.006Z
source: make-wordpress-core
section: wordpress
tags:
  - wordpress-notifications
  - rest-api
  - notification-persistence
  - wp-cli
  - internationalization
  - release-planning
title: WordPress Feature Notifications plan targets 0.3.0 MVP
url: https://make.wordpress.org/core/2026/10/10/feature-notifications-status-update-and-plan-for-0-3-0
why_read: The plan identifies concrete implementation and release gaps engineers must resolve before testing or shipping the notification system.
status: proposed
source_published_at: 2026-10-10T15:46:13.000Z
source_external_id: https://make.wordpress.org/core/?p=126531
source_adapter: rss
interest_score: 7
utility_score: 8
novelty_score: 6
depth_score: 7
impact_score: 6
---

A WordPress update describes the plan for Feature Notifications 0.3.0, intended to be the project’s first functional MVP. The project remains incomplete, and the post targets 1 December 2026 for release alongside the WordPress 7.2 release candidate.

The foundations, including data models, factories, channel registry, database schema, and administration UI, have unit tests. End-to-end wiring is unfinished: persistence is stubbed, REST endpoints return empty responses, dismissals are not saved, and REST controller tests are skipped.

Planned work covers repositories, capability-aware REST endpoints, client-side storage, polling, persistent dismissal, security corrections, internationalization, and release tooling. The date and implementation remain proposed rather than delivered.
