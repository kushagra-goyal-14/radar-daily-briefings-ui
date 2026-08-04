---
story_id: story_a725ec69e5df4627aa4955cd8ea7801e
authors:
  - Joe Dolson
date: 2026-08-04
generated_at: 2026-08-04T05:23:45.604Z
source: make-wordpress-core
section: wordpress
tags:
  - wordpress-7-1
  - list-table-markup
  - accessibility
  - screen-readers
  - css-selectors
  - javascript-compatibility
title: WordPress 7.1 changes post list table row headers
url: https://make.wordpress.org/core/2026/08/03/post-list-tables-row-headers-changed
why_read: WordPress extenders must update selectors and preserve compatibility across pre-7.1 and 7.1 list-table markup.
status: released
source_published_at: 2026-08-03T15:27:57.000Z
source_external_id: https://make.wordpress.org/core/?p=124832
source_adapter: rss
interest_score: 7
utility_score: 8
novelty_score: 6
depth_score: 7
impact_score: 6
---

WordPress has moved the post list table row header from the first column, which contains the selection checkbox, to the second column containing the post title and row actions. The checkbox column is now a td, while the title column uses a th with scope="row" and an aria-label containing the post title.

The change is intended to improve screen-reader identification of rows by naming the relevant post. It also updates responsive collapsed-cell CSS to use flex layout.

Extensions may need to revise CSS selectors and JavaScript event targets for checkbox, title, and row-action elements. Retaining both td and th selectors supports compatibility with WordPress versions before 7.1.
