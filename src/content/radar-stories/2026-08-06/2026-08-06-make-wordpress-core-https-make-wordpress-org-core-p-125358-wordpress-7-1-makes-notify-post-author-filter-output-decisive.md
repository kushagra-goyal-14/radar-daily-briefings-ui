---
story_id: story_dc8f3e1e95864d52b3f8b1ca2768c9b2
authors:
  - Adam Silverstein
date: 2026-08-06
generated_at: 2026-08-06T06:50:30.873Z
source: make-wordpress-core
section: wordpress
tags:
  - wordpress-7-1
  - comment-notifications
  - filter-hook
  - plugin-compatibility
  - moderation-status
  - wp-core
title: WordPress 7.1 makes notify_post_author filter output decisive
url: https://make.wordpress.org/core/2026/08/05/the-notify_post_author-filter-now-has-the-final-say-on-post-author-notifications
why_read: Plugin developers should review callbacks that force author notifications because moderation, spam, and trashed comments may now trigger emails.
status: released
source_published_at: 2026-08-05T12:22:02.000Z
source_external_id: https://make.wordpress.org/core/?p=125358
source_adapter: rss
interest_score: 6
utility_score: 8
novelty_score: 7
depth_score: 8
impact_score: 5
---

WordPress 7.1 changes how wp_new_comment_notify_postauthor() evaluates the notify_post_author filter. Approval status is checked first, so the filter receives an accurate default and its return value fully determines whether an author notification is sent.

The new default is false for unapproved, moderated, spam, or trashed comments, while approved comments continue to follow comments_notify. Returning true now forces notification even for unapproved comments. The filter input is also always a strict boolean, and invalid comment IDs return false without applying the filter.

Plugins using callbacks such as __return_true should check approval status if they must avoid notifying authors about unapproved comments.
