---
story_id: story_dbb872df8b334680b2fc11cc5025b467
authors:
  - Chazz Wolcott
date: 2026-08-09
generated_at: 2026-08-09T19:20:32.562Z
source: patchstack
section: wordpress
tags:
  - wordpress-7-0-3
  - vulnerability-fixes
  - cross-site-scripting
  - remote-code-execution
  - privilege-escalation
  - server-side-request-forgery
title: WordPress 7.0.3 released with 12 security fixes
url: https://patchstack.com/articles/wordpress-7-0-3-released-12-vulnerabilities-found-and-fixed
why_read: Site and hosting engineers can identify affected configurations and prioritize upgrading to the security release.
status: released
source_published_at: 2026-08-06T20:42:37.000Z
source_external_id: https://patchstack.com/articles/wordpress-7-0-3-released-12-vulnerabilities-found-and-fixed/
source_adapter: rss
interest_score: 9
utility_score: 9
novelty_score: 7
depth_score: 7
impact_score: 8
---

WordPress 7.0.3 was released on August 6, 2026, as a security update. The official WordPress announcement recommends that site owners update immediately, and Patchstack reports 12 fixed vulnerabilities.

The fixes cover pre-authenticated reflected XSS on the login screen with potential PHP code execution, stored XSS requiring Contributor-level access, Multisite privilege escalation, information disclosure, CSS injection, an email verification bypass, and SSRF. The reported reflected-XSS path requires an administrator to click a crafted link.

Operators should prioritize upgrading, especially for Multisite deployments, sites with Contributor access, and self-hosted environments. Some issues apply only under specific roles or configurations.
