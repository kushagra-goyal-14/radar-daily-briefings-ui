---
story_id: story_cc69ad25f05c400986637a3bd3784b52
authors:
  - Chazz Wolcott
date: 2026-10-07
generated_at: 2026-10-07T07:30:36.281Z
source: patchstack
section: wordpress
tags:
  - wordpress-security-release
  - stored-xss
  - sql-injection
  - denial-of-service
  - oembed-security
  - role-based-access
title: WordPress 7.1.3 releases seven security fixes and four bug fixes
url: https://patchstack.com/articles/wordpress-7-1-3-security-release
why_read: Administrators can identify affected workflows, required privileges, fixed code paths, and residual cached oEmbed content requiring cleanup.
status: released
source_published_at: 2026-10-06T19:34:42.000Z
source_external_id: https://patchstack.com/articles/wordpress-7-1-3-security-release/
source_adapter: rss
interest_score: 8
utility_score: 9
novelty_score: 6
depth_score: 9
impact_score: 8
---

WordPress 7.1.3 was released on October 6, 2026, as a maintenance and security update containing seven security fixes and four bug fixes. WordPress recommends updating sites immediately.

The release addresses stored XSS in the Comments administration page, denial of service in `WP_Http::make_absolute_url()`, second-order SQL injection in WXR export, Author sticky-post authorization, private-comment disclosure, Imgur oEmbed XSS, and hook-name collisions. Fixes include capability-check changes, loop termination, integer validation, query ordering, and removal of Imgur’s trusted-provider status.

Existing cached Imgur oEmbed content is not removed automatically and may require cache clearing. The fixes were backported through at least 6.6, while 4.7–6.5 remained unpatched at publication.
