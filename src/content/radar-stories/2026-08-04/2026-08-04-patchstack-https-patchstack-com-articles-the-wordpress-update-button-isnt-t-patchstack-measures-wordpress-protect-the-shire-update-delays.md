---
story_id: story_b3ef69941a944117b63987b40dc0690b
authors:
  - Lana Rafaela
date: 2026-08-04
generated_at: 2026-08-04T05:23:45.604Z
source: patchstack
section: wordpress
tags:
  - wordpress-update-delay
  - plugin-security
  - supply-chain-attacks
  - vulnerability-patching
  - update-check-api
  - managed-wordpress-hosting
title: Patchstack measures WordPress Protect The Shire update delays
url: https://patchstack.com/articles/the-wordpress-update-button-isnt-telling-the-truth-anymore
why_read: The measurements expose a remediation blind spot for WordPress administrators, agencies, and hosts relying on the update-check API.
status: unknown
source_published_at: 2026-07-30T09:15:18.000Z
source_external_id: https://patchstack.com/articles/the-wordpress-update-button-isnt-telling-the-truth-anymore/
source_adapter: rss
interest_score: 8
utility_score: 8
novelty_score: 7
depth_score: 8
impact_score: 8
---

Patchstack reports that WordPress.org’s Protect The Shire initiative delayed plugin and theme releases by a median of about 24.4 hours before July 16, 2026, then about 6.8 hours afterward. The article presents this as an analysis, not an official WordPress.org release.

Patchstack measured 114 resolved releases and found disclosed vulnerability fixes moving through the same gate as routine updates. It cites cases where plugin pages showed fixed versions while the update-check API still served vulnerable versions, and says fresh reinstalls bypassed the delay.

The analysis argues the policy may help contain malicious releases but slow remediation. Its install totals are not confirmed vulnerable-site counts, and it reports no observed exploitation during the measured windows.
