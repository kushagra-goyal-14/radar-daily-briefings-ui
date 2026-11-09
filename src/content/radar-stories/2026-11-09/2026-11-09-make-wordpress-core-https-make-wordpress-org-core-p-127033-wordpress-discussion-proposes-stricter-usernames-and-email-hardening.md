---
story_id: story_ee003cf328b94f38981a2c681e0dca6c
authors:
  - Matt Mullenweg
date: 2026-11-09
generated_at: 2026-11-09T07:30:11.369Z
source: make-wordpress-core
section: wordpress
tags:
  - username-sanitization
  - user-registration
  - spam-prevention
  - comment-notifications
  - backward-compatibility
title: WordPress discussion proposes stricter usernames and email hardening
url: https://make.wordpress.org/core/2026/11/08/conservative-in-what-we-accept
why_read: WordPress maintainers can evaluate validation and notification changes while accounting for backward compatibility and migration impact.
status: proposed
source_published_at: 2026-11-08T20:33:27.000Z
source_external_id: https://make.wordpress.org/core/?p=127033
source_adapter: rss
interest_score: 7
utility_score: 6
novelty_score: 5
depth_score: 3
impact_score: 6
---

A WordPress discussion proposes tightening username validation for new registrations and reviewing comment-notification email contents. The ideas remain proposals, with no implementation described in the supplied material.

The discussion says the conservative `sanitize_username` approach does not apply to registrations outside multisite mode. It suggests stricter rules for new usernames while preserving backward compatibility, and asks whether notification emails should link to moderation pages without including comment content by default.

These are potential hardening areas for WordPress maintainers, but the discussion supplies no code, measurements, threat model, or migration plan. The effects on existing registrations and notification workflows therefore remain unspecified.
