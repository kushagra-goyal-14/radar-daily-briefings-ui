---
story_id: story_cc69ad25f05c400986637a3bd3784b52
authors:
  - Chazz Wolcott
date: 2026-10-07
generated_at: 2026-10-07T07:30:36.281Z
source: patchstack
section: security
tags:
  - wordpress
  - security-release
  - cross-site-scripting
  - sql-injection
  - denial-of-service
  - oembed-security
title: WordPress 7.1.3 fixes seven security issues
url: https://patchstack.com/articles/wordpress-7-1-3-security-release
why_read: Operators can identify the fixed version, affected privilege paths, and residual cached-oEmbed content requiring cache clearing.
status: fixed
source_published_at: 2026-10-06T19:34:42.000Z
source_external_id: https://patchstack.com/articles/wordpress-7-1-3-security-release/
source_adapter: rss
interest_score: 8
utility_score: 9
novelty_score: 7
depth_score: 9
impact_score: 8
---

WordPress 7.1.3 was released on 6 October 2026 as a maintenance and security update containing seven security fixes and four bug fixes. The official release recommends updating sites immediately.

The fixes cover stored XSS in the Comments administration page, a denial-of-service loop in `WP_Http::make_absolute_url()`, second-order SQL injection in WXR export, Author sticky-post permissions, private-comment disclosure, Imgur embed XSS, and hook-name collisions. They address unauthenticated, Contributor, Author, administrator, and plugin-dependent paths.

Patchstack says existing cached malicious oEmbed content can continue rendering after the update, so site caches should also be cleared. The primary document reports backports through at least 6.6, with older branches not yet patched at publication.
