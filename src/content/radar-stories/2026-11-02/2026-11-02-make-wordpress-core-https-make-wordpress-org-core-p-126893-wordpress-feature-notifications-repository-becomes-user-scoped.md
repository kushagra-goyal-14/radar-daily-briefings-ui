---
story_id: story_d17c8b25beaf416893f6da0abb5a295b
authors:
  - Jonathan Bossenger
date: 2026-11-02
generated_at: 2026-11-02T07:30:09.558Z
source: make-wordpress-core
section: wordpress
tags:
  - wordpress
  - feature-notifications
  - notification-repository
  - rest-api
  - user-scoping
  - phpunit
title: WordPress Feature Notifications repository becomes user-scoped
url: https://make.wordpress.org/core/2026/11/01/wp-feature-notifications-weekly-update-2026-10-30
why_read: WordPress contributors can assess the merged repository contract and its implications for notification isolation and REST API integration.
status: merged
source_published_at: 2026-11-01T09:31:56.000Z
source_external_id: https://make.wordpress.org/core/?p=126893
source_adapter: rss
interest_score: 7
utility_score: 8
novelty_score: 6
depth_score: 8
impact_score: 6
---

The WordPress Feature Notifications repository has been made user-scoped through merged pull request #626. The weekly update reports that notification lookups now require a user ID, with the wpdb implementation and PHPUnit coverage updated accordingly.

The revised interface adds find_by_user() and count_by_user() methods, supporting filters for status, channel, context, time ranges, expiry, polling, and pagination. find_by_id() now identifies a message for a specific user, while the legacy interface-notification.php file was removed.

The change prepares the repository for REST-layer listing and X-WP-Total results. The update does not establish that a REST API implementation is complete; other feature and tooling changes remain open.
