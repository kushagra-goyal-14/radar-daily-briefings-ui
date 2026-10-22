---
story_id: story_cfbd55fe0239400bbd80f6b73d759fdb
authors:
  - Dave Jong
date: 2026-10-22
generated_at: 2026-10-22T12:04:35.882Z
source: patchstack
section: security
tags:
  - wordpress
  - updraftcentral
  - key-compromise
  - backdoor
  - incident-response
  - indicators-of-compromise
title: Stolen UpdraftCentral keys enable active WordPress backdoor campaign
url: https://patchstack.com/articles/updraftcentral-key-compromise-wordpress-backdoors
why_read: Engineers can identify the key-compromise mechanism, detect persistence, and prioritize containment while the campaign remains active.
status: in_progress
source_published_at: 2026-10-19T08:19:35.000Z
source_external_id: https://patchstack.com/articles/updraftcentral-key-compromise-wordpress-backdoors/
source_adapter: rss
interest_score: 10
utility_score: 10
novelty_score: 9
depth_score: 9
impact_score: 9
---

Patchstack reports an active campaign in which attackers use stolen UpdraftCentral dashboard keys to install backdoor plugins on connected WordPress sites. The report says the campaign ran from October 18 into October 19, 2026, and no vendor fix existed at publication.

The commands are signed with genuine dashboard private keys, so UpdraftPlus accepts them as legitimate. The delivered plugins can create an Editor-labeled account with additional capabilities, bypassing normal login protections, and leave that account behind after plugin removal.

Administrators should check for site-held UpdraftCentral keys, delete them, and investigate plugins, accounts, and logs. The report says affected sites require full compromise response, while the underlying key-leak cause remained unexplained.
