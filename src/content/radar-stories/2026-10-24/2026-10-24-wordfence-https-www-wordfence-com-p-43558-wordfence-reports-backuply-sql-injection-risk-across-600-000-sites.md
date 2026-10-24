---
story_id: story_c05a77d5daca4151b41c7a16fe8fa015
authors:
  - István Márton
date: 2026-10-24
generated_at: 2026-10-24T07:30:27.054Z
source: wordfence
section: security
tags:
  - wordpress
  - backuply
  - sql-injection
  - second-order-injection
  - privilege-escalation
  - authenticated-attack
title: Wordfence reports Backuply SQL injection risk across 600,000 sites
url: https://www.wordfence.com/blog/2026/10/600000-wordpress-sites-affected-by-sql-injection-vulnerability-in-backuply-wordpress-plugin
why_read: WordPress operators should review Backuply exposure because the documented attack path can lead to administrator privilege escalation and site takeover.
status: unknown
source_published_at: 2026-10-15T15:16:04.000Z
source_external_id: https://www.wordfence.com/?p=43558
source_adapter: rss
interest_score: 8
utility_score: 8
novelty_score: 6
depth_score: 6
impact_score: 8
---

Wordfence reports a second-order SQL injection vulnerability in the Backuply WordPress plugin, which has more than 600,000 active installations. The supplied advisory does not identify a fixed release, so the lifecycle status remains unknown.

According to Wordfence, an authenticated attacker with subscriber-level access or higher can store a malicious SQL payload. That payload is executed when an administrator later restores a database backup, creating a path to administrator privilege escalation and site takeover.

Operators should assess Backuply deployments and the database-restore workflow against this documented attack path. The supplied material does not include a CVE, exploitation evidence, or remediation version.
