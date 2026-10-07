---
story_id: story_3030a6bc0d2341a59d6a03504005d3f7
authors:
  - Edouard
date: 2026-10-07
generated_at: 2026-10-07T07:30:36.281Z
source: patchstack
section: security
tags:
  - wordpress-xss
  - stored-cross-site-scripting
  - post-exploitation
  - persistence-implant
  - malicious-plugin
  - incident-response
title: Patchstack reports active WordPress XSS persistence campaign
url: https://patchstack.com/articles/four-ways-back-in-the-wordpress-xss-campaign-that-hides-its-own-admin-account
why_read: WordPress operators can use the documented indicators, database checks, and cleanup guidance to investigate potentially compromised administrator sessions.
status: unknown
source_published_at: 2026-10-06T08:59:43.000Z
source_external_id: https://patchstack.com/articles/four-ways-back-in-the-wordpress-xss-campaign-that-hides-its-own-admin-account/
source_adapter: rss
interest_score: 9
utility_score: 9
novelty_score: 8
depth_score: 9
impact_score: 8
---

Patchstack reports active exploitation of two unauthenticated stored XSS vulnerabilities in WordPress plugins. The campaign uses one shared JavaScript payload delivered through WPC Product Bundles for WooCommerce and Ninja Forms.

The payload runs in a logged-in administrator’s browser, reusing the authenticated wp-admin session and scraping CSRF nonces to invoke administrative actions. It installs a malicious plugin, creates visible and hidden administrator accounts, adds a magic login URL, and deploys an unauthenticated file manager.

The advisory provides indicators and checks for users, must-use plugins, options, logs, and direct PHP requests. It recommends updating both vulnerable plugins, removing persistence, rotating privileged credentials and authentication salts, and reviewing affected systems; the observed campaign scope may be incomplete.
