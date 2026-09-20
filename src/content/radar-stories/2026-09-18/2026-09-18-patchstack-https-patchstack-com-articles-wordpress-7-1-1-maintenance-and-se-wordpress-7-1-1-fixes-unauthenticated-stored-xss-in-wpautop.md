---
story_id: story_b13cdc1a153341db9175fd1b35a2058c
authors:
  - Patchstack
date: 2026-09-18
generated_at: 2026-09-18T12:59:01.124Z
source: patchstack
section: wordpress
tags:
  - wordpress-7-1-1
  - stored-xss
  - wpautop
  - cve-2026-93485
  - security-patch
  - comment-moderation
title: WordPress 7.1.1 fixes unauthenticated stored XSS in wpautop()
url: https://patchstack.com/articles/wordpress-7-1-1-maintenance-and-security-release
why_read: Administrators can assess comment-related exposure and prioritize the released WordPress update across current and backported branches.
status: released
source_published_at: 2026-09-18T06:56:23.000Z
source_external_id: https://patchstack.com/articles/wordpress-7-1-1-maintenance-and-security-release/
source_adapter: rss
interest_score: 8
utility_score: 9
novelty_score: 7
depth_score: 9
impact_score: 8
---

WordPress 7.1.1 was released on 17 September 2026 as a security and maintenance update with 11 security fixes and 17 Core bug fixes. The primary advisory details CVE-2026-93485, an unauthenticated stored XSS vulnerability in wpautop() affecting WordPress through version 7.1.

The issue involves wpautop() using a regular expression that did not account for quoted attribute values. A newline placeholder could introduce a greater-than character inside an attribute, allowing later display processing to move attacker-controlled text into an executable context.

The payload must be published, but the advisory says moderation is not a security control. WordPress recommends updating, and the fixes were backported to older supported branches.
