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
  - security-backports
  - upgrade-process
title: WordPress 7.1.4 fixes 22 vulnerabilities across supported branches
url: https://patchstack.com/articles/wordpress-7-1-4-security-release
why_read: Operators can identify affected upgrade paths, apply 7.1.4 or backports, and restrict web access to the upgrade directory.
status: released
source_published_at: 2026-10-28T18:34:56.000Z
source_external_id: https://patchstack.com/articles/wordpress-7-1-4-security-release/
source_adapter: rss
interest_score: 9
utility_score: 9
novelty_score: 8
depth_score: 9
impact_score: 8
---

WordPress 7.1.4 was released on October 28, 2026, fixing 22 vulnerabilities across 17 advisories. The release includes security backports for supported branches down to 4.7.39.

The most serious issue is a race condition in the core upgrade process. During an update, a predictable and browsable extraction path could expose setup-config.php; 7.1.4 randomizes the directory name, restores index.php, and excludes wp-config.php from copied files. The release also addresses seven Interactivity API advisories and several Customizer, block, parsing, and permissions issues.

Operators should update promptly and verify that wp-content/upgrade/ is not web-browsable. WordPress 4.6 and older receive no listed backport.
