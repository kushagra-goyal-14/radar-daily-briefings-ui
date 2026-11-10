---
story_id: story_6b43f5a754934136ad5d1f69a907d4f4
authors:
  - Deepak Kumar
date: 2026-11-10
generated_at: 2026-11-10T07:30:07.356Z
source: make-wordpress-test
section: wordpress
tags:
  - wordpress
  - presence-api
  - real-time-collaboration
  - post-locking
  - feature-plugin
  - wordpress-playground
title: WordPress calls for testing the Presence API feature plugin
url: https://make.wordpress.org/test/2026/11/09/call-for-testing-presence-api
why_read: WordPress engineers can validate presence interfaces, post locking, accessibility, responsiveness, and simulated multi-user workflows before a merge proposal.
status: proposed
source_published_at: 2026-11-09T18:16:31.000Z
source_external_id: https://make.wordpress.org/test/?p=12904
source_adapter: rss
interest_score: 7
utility_score: 8
novelty_score: 6
depth_score: 7
impact_score: 6
---

WordPress is calling for community testing of the Presence API feature plugin, which is being prepared for a proposal to merge into WordPress Core. The supplied call does not document a merged implementation.

The feature adds live presence indicators across the admin toolbar, posts list, and user screens. Modernized post locks are intended to behave like standard WordPress locking while moving storage from the `_edit_lock` post field into the dedicated `wp_presence` table. WordPress Playground provides simulated collaborators and demo data for guided workflows.

Testers are asked to evaluate keyboard accessibility, responsive layouts, usability, stale-screen notifications, and takeover behavior. Feedback is open through November 23, 2026, and the test build is based on the latest preview-main build.
