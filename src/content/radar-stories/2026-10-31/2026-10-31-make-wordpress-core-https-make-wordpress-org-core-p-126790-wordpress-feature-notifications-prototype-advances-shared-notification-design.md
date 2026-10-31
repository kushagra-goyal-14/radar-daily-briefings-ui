---
story_id: story_beee0b69de5148a38385e0b33583041e
authors:
  - poligilad
date: 2026-10-31
generated_at: 2026-10-31T07:30:13.451Z
source: make-wordpress-core
section: wordpress
tags:
  - wordpress
  - feature-notifications
  - plugin-integration
  - notification-system
  - accessibility
  - wordpress-core
title: WordPress Feature Notifications prototype advances shared notification design
url: https://make.wordpress.org/core/2026/10/29/exploring-a-design-for-feature-notifications
why_read: Plugin developers can evaluate the proposed notification contract, unresolved design questions, and constraints around future adoption.
status: proposed
source_published_at: 2026-10-29T13:21:17.000Z
source_external_id: https://make.wordpress.org/core/?p=126790
source_adapter: rss
interest_score: 7
utility_score: 7
novelty_score: 8
depth_score: 8
impact_score: 7
---

The Feature Notifications project presents a second prototype for a shared WordPress notification tray. It is collecting feedback and testing the model against plugins; version 0.3.0 is planned as a feature plugin before any possible core integration.

Plugins would send data rather than layout, choosing Standard, Object, Conversation, or Group presentations. Separate dimensions cover type, severity, intent, read state, and sender status. Critical items remain prominent, repeated messages can replace one another, and users can control density and unread views.

The design remains a proposal. Questions about badges, metadata, channel delivery, settings, and accessibility are unresolved, while plugin migration would occur at each plugin’s pace.
