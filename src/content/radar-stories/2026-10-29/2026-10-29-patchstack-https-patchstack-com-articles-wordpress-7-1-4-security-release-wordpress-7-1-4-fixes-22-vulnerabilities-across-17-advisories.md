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
title: WordPress 7.1.4 fixes 22 vulnerabilities across 17 advisories
url: https://patchstack.com/articles/wordpress-7-1-4-security-release
why_read: Operators can identify the fixed versions, address upgrade-directory exposure, and review contributor permissions affecting several vulnerabilities.
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

WordPress 7.1.4 was released on October 28, 2026, with fixes for 22 vulnerabilities across 17 advisories. The official WordPress announcement says the release is available through WordPress.org, the dashboard, and automatic background updates, with backports for supported branches.

Patchstack reports that the most severe issue is a race condition in the upgrade process that can enable unauthenticated remote code execution while an update is running. The release randomizes the extraction directory, restores index.php, and avoids copying wp-config.php into the working directory.

The update also addresses seven Interactivity API advisories, stored XSS issues, Customizer flaws, block-processing bugs, and a notes-permission problem. Operators should verify their version, restrict access to wp-content/upgrade/, and review affected contributor capabilities.
