---
story_id: story_25371af4473d48fdbbf1bbc7e44918a4
authors:
  - Joe Fusco
date: 2026-11-02
generated_at: 2026-11-02T07:30:09.558Z
source: make-wordpress-core
section: wordpress
tags:
  - wordpress-presence-api
  - real-time-collaboration
  - feature-plugin
  - push-transport
  - sync-engines
  - security-audit
title: WordPress Presence API 0.20.0 adds room-change integration hooks
url: https://make.wordpress.org/core/2026/11/01/presence-api-meeting-summary-october-26-2026
why_read: WordPress integrators can assess the shipped hooks, readiness gates, and remaining testing and security-review requirements before adopting the API.
status: released
source_published_at: 2026-11-01T14:02:57.000Z
source_external_id: https://make.wordpress.org/core/?p=126897
source_adapter: rss
interest_score: 7
utility_score: 8
novelty_score: 7
depth_score: 7
impact_score: 6
---

WordPress’s Presence API has shipped versions 0.18.3 through 0.20.0. Version 0.20.0 added `wp_presence_admin_state()` and updated `wp_presence_room_changed` to fire when an edited post’s title or status changes, completing issue #901.

Version 0.19.0 also introduced a `presence-api.keepalive` filter and `presence-api.roomChanged` action, allowing a push transport to retain a tab’s rows and refresh presence together. The summary says documentation is live and checked against the code.

The API remains on a readiness path rather than being documented as part of WordPress core. User testing, an external security review, outside-project usage, and performance measurements remain relevant gates.
