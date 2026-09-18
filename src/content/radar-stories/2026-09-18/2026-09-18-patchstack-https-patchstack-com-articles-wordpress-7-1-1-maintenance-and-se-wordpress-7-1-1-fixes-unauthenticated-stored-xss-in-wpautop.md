---
story_id: story_b13cdc1a153341db9175fd1b35a2058c
authors:
  - Patchstack
date: 2026-09-18
generated_at: 2026-09-18T12:59:01.124Z
source: patchstack
section: security
tags:
  - wordpress
  - stored-xss
  - cve-2026-93485
  - wpautop
  - comment-moderation
  - security-update
title: WordPress 7.1.1 fixes unauthenticated stored XSS in wpautop()
url: https://patchstack.com/articles/wordpress-7-1-1-maintenance-and-security-release
why_read: Site operators can prioritize upgrading comment-enabled installations and assess the vulnerability’s publication and moderation requirements.
status: released
source_published_at: 2026-09-18T06:56:23.000Z
source_external_id: https://patchstack.com/articles/wordpress-7-1-1-maintenance-and-security-release/
source_adapter: rss
interest_score: 9
utility_score: 9
novelty_score: 7
depth_score: 9
impact_score: 8
---

WordPress 7.1.1 is a released security and maintenance update with 11 security fixes, 17 Core bug fixes, and 19 Block Editor fixes. It includes CVE-2026-93485, an unauthenticated stored XSS issue in wpautop(), affecting WordPress Core through 7.1.

Patchstack explains that an anonymous visitor can submit crafted comment content. A newline placeholder inside a quoted attribute can become a misleading tag boundary during wpautop() processing, while the fix makes the expression aware of quoted values.

The comment must be published before visitors are affected, so moderation limits immediate exposure but is not a security control. Operators should update, especially on sites accepting public comments.
