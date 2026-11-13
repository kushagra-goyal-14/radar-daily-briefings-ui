---
story_id: story_a70d5bc62cda42628ad922d4bccbf324
authors:
  - Courtney Robertson
date: 2026-11-13
generated_at: 2026-11-13T07:30:39.568Z
source: make-wordpress-hosting
section: wordpress
tags:
  - wordpress-7-2
  - secrets-api
  - hosting-platforms
  - upgrade-testing
  - wp-cli
  - rewrite-rules
title: WordPress 7.2 hosting tests target Secrets API and upgrades
url: https://make.wordpress.org/hosting/2026/11/12/call-to-test-wordpress-7-2-secrets-api
why_read: Hosting engineers can use the checklist to validate provisioning, upgrades, routing, caching, and credential handling on staging fleets.
status: proposed
source_published_at: 2026-11-12T16:40:17.000Z
source_external_id: https://make.wordpress.org/hosting/?p=207859
source_adapter: rss
interest_score: 8
utility_score: 9
novelty_score: 5
depth_score: 9
impact_score: 8
---

The WordPress Hosting Team has published a call for hosting providers to test WordPress 7.2 before RC1 on November 17. The post covers Secrets API provisioning, upgrade paths, `/random/`, caching, and multisite behavior.

The Secrets API is disabled without `WP_SECRETS_KEY`; upgraded sites and sites created by external provisioning tools do not receive one automatically. Dashboard and WP-CLI upgrades also leave different files during the beta period. The new `/random/` route may require rewrite flushing and cache purging after upgrades.

The supplied results came from one managed platform and local test fleets. Providers are asked to validate their own staging environments and report findings before release.
