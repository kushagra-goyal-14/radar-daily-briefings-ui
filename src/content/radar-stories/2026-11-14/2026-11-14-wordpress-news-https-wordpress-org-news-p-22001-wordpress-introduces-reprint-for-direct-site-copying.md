---
story_id: story_21d002c9ba7344ccbf2746648c87b142
authors:
  - Adam Zieliński
date: 2026-11-14
generated_at: 2026-11-14T07:30:26.913Z
source: wordpress-news
section: wordpress
tags:
  - wordpress-migration
  - site-copying
  - database-transfer
  - incremental-backup
  - link-rewriting
  - wordpress-playground
title: WordPress introduces Reprint for direct site copying
url: https://wordpress.org/news/2026/11/reprint-your-site
why_read: Engineers can evaluate Reprint’s transfer, database-rewriting, and incremental-copy behavior for migration and local testing workflows.
status: released
source_published_at: 2026-11-13T12:00:00.000Z
source_external_id: https://wordpress.org/news/?p=22001
source_adapter: rss
interest_score: 8
utility_score: 9
novelty_score: 6
depth_score: 8
impact_score: 7
---

WordPress presents Reprint, a free, open-source PHP tool for copying a site’s files and database. It is available through the WordPress.org Plugin Directory and as a command-line client, supporting migration to another host or creation of a local testing copy.

Reprint transfers data directly to a chosen computer or server, piece by piece, and can resume after a dropped connection. It can rewrite links for a new site address, including links in settings, blocks, shortcodes, serialized data, and custom fields. Repeated copies transfer only changed files.

The document positions Reprint for migrations, testing, and WordPress Playground workflows. The browser-based Playground option is experimental, and no independent performance or compatibility results are supplied.
