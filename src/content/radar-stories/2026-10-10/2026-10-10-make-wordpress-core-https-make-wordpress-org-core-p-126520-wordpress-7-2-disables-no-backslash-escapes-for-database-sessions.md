---
story_id: story_36acfd0fc0ea49adb182d8bc722cf4c5
authors:
  - Marin Atanasov
date: 2026-10-10
generated_at: 2026-10-10T07:30:29.338Z
source: make-wordpress-core
section: wordpress
tags:
  - wordpress-7-2
  - no-backslash-escapes
  - mysql-sql-modes
  - database-compatibility
  - wpdb
  - db-drop-in
title: WordPress 7.2 disables NO_BACKSLASH_ESCAPES for database sessions
url: https://make.wordpress.org/core/2026/10/09/no_backslash_escapes-sql-mode-is-now-turned-off-by-default-in-wordpress-7-2
why_read: Database engineers can diagnose subtle query failures and understand the connection-level override required for sites that need this SQL mode.
status: unknown
source_published_at: 2026-10-09T18:13:41.000Z
source_external_id: https://make.wordpress.org/core/?p=126520
source_adapter: rss
interest_score: 7
utility_score: 8
novelty_score: 6
depth_score: 7
impact_score: 6
---

A WordPress Core post describes a WordPress 7.2 change that removes NO_BACKSLASH_ESCAPES from database-session SQL modes. The document does not explicitly identify the change as a released or merged code change.

WordPress uses backslashes to escape special characters in SQL queries, while MySQL treats backslashes as ordinary characters when this mode is enabled. The wpdb::set_sql_mode() change affects only the WordPress connection and leaves global server settings unchanged.

Sites that require the mode can use the existing incompatible_sql_modes filter in a db.php drop-in, which loads early enough. The post warns that WordPress Core may not work correctly with the mode enabled.
