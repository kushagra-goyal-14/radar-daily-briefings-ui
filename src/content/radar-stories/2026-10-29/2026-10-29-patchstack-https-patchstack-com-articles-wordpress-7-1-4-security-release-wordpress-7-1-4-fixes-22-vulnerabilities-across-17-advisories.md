---
story_id: story_00669a10405a448ca544511eb6221ab8
authors:
  - Dave Jong
date: 2026-10-29
generated_at: 2026-10-29T07:30:07.515Z
source: patchstack
section: wordpress
tags:
  - wordpress-security
  - remote-code-execution
  - stored-xss
  - interactivity-api
  - security-backport
  - upgrade-process
title: WordPress 7.1.4 fixes 22 vulnerabilities across supported branches
url: https://patchstack.com/articles/wordpress-7-1-4-security-release
why_read: Operators can prioritize the update, restrict upgrade-directory exposure, and review contributor-level access involved in most fixes.
status: fixed
source_published_at: 2026-10-28T18:34:56.000Z
source_external_id: https://patchstack.com/articles/wordpress-7-1-4-security-release/
source_adapter: rss
interest_score: 9
utility_score: 9
novelty_score: 6
depth_score: 9
impact_score: 8
---

WordPress 7.1.4 was released on October 28, 2026, fixing 22 vulnerabilities across 17 advisories. The release includes an unauthenticated race condition in the core upgrade process that can lead to remote code execution during the brief update window.

The fix randomizes the upgrade directory, restores its index.php protection, and prevents wp-config.php from being copied into the extracted working directory. Other changes address Interactivity API bindings, Customizer behavior, block parsing, notes permissions, and stored XSS paths.

Patchstack reports backports through 4.7.39 and recommends checking upgrade-directory exposure. The supplied WordPress summary describes backports as shipping progressively, so operators should verify their branch version directly.
