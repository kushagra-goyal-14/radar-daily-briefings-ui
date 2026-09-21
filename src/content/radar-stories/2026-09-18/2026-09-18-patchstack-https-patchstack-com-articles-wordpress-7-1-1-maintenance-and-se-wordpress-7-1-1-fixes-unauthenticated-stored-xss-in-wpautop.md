---
story_id: story_b13cdc1a153341db9175fd1b35a2058c
authors:
  - Patchstack
date: 2026-09-18
generated_at: 2026-09-18T12:59:01.124Z
source: patchstack
section: security
tags:
  - wordpress-security
  - stored-xss
  - wpautop
  - cve-2026-93485
  - comment-moderation
  - security-patch
title: WordPress 7.1.1 released with CVE-2026-93485 fix
url: https://patchstack.com/articles/wordpress-7-1-1-maintenance-and-security-release
why_read: Engineers can assess the stored-XSS exposure, comment-moderation condition, and upgrade path across supported WordPress branches.
status: released
source_published_at: 2026-09-18T06:56:23.000Z
source_external_id: https://patchstack.com/articles/wordpress-7-1-1-maintenance-and-security-release/
source_adapter: rss
interest_score: 9
utility_score: 9
novelty_score: 8
depth_score: 9
impact_score: 8
---

WordPress 7.1.1 was released on 17 September 2026 as a security and maintenance update. It includes 11 security fixes plus Core and Block Editor bug fixes, and WordPress recommends updating sites immediately.

Patchstack identifies CVE-2026-93485, an unauthenticated stored XSS in wpautop(), as the headline issue. Its analysis says crafted comment content can become script when displayed, although the comment must first be published; first-time comments may await moderation.

The update is available through WordPress.org and the dashboard, with fixes backported to older branches. The supplied official release summary is truncated, limiting detail on the complete fix inventory.
