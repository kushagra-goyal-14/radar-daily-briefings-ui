---
story_id: story_31b72f962efb44b289580d631aad512e
authors:
  - Joe Fusco
date: 2026-10-03
generated_at: 2026-10-03T07:30:24.261Z
source: make-wordpress-core
section: wordpress
tags:
  - presence-api
  - real-time-collaboration
  - post-locks
  - multisite
  - privacy-controls
  - ai-agents
title: Presence API 0.14.0 expands WordPress collaboration features
url: https://make.wordpress.org/core/2026/10/02/presence-api-whats-new
why_read: WordPress engineers can assess the new collaboration model, storage behavior, privacy controls, and integration points for agents and multisite.
status: released
source_published_at: 2026-10-02T17:11:11.000Z
source_external_id: https://make.wordpress.org/core/?p=125529
source_adapter: rss
interest_score: 8
utility_score: 9
novelty_score: 7
depth_score: 9
impact_score: 7
---

The official WordPress update presents Presence API 0.14.0 as the current feature-plugin version. It expands presence across post types, multisite administration, privacy controls, accessibility behavior, and AI-agent editing workflows.

Post locks now live in the presence table rather than post meta, so refreshing a lock no longer invalidates every cached post query on sites with persistent object caching. Recording can be disabled per site or network while locks continue working.

REST- or MCP-based agents can receive expiring presence rows and an Agent badge when agent detection is configured. The update also describes shared Heartbeat results, reduced presence reads, new PHP APIs, and SQLite write support. It requires WordPress 7.0 and PHP 7.4.
