---
story_id: story_b397f283399b424184d556a30bf1ac06
authors:
  - Aaron Jorbin
date: 2026-11-05
generated_at: 2026-11-05T07:30:20.895Z
source: make-wordpress-core
section: wordpress
tags:
  - wordpress-7-2
  - random-content-redirects
  - rewrite-rules
  - wp-query
  - custom-post-types
  - pre-get-posts
title: WordPress 7.2 introduces random content redirect URLs
url: https://make.wordpress.org/core/2026/11/05/your-content-is-going-to-get-more-random
why_read: Site and plugin developers can evaluate eligibility rules, query customization hooks, and the filter that disables random redirects.
status: unknown
source_published_at: 2026-11-05T02:59:12.000Z
source_external_id: https://make.wordpress.org/core/?p=126950
source_adapter: rss
interest_score: 7
utility_score: 8
novelty_score: 7
depth_score: 8
impact_score: 6
---

A WordPress core post documents a default-on /random/ endpoint for WordPress 7.2. Requests can redirect visitors to randomly selected published posts, including content filtered by category, tag, author, or eligible custom post type.

Eligibility is controlled by the randomable argument to register_post_type(). WordPress runs the main query with temporary callbacks that restrict eligible posts, order by RAND(), and limit the result to one row. Existing pre_get_posts callbacks also apply, while wp_is_random_content_query() identifies random requests.

Developers can customize the permalink base and selection behavior or disable the feature with wp_enable_random_content_redirect. The supplied document does not establish final release timing or provide performance guidance.
