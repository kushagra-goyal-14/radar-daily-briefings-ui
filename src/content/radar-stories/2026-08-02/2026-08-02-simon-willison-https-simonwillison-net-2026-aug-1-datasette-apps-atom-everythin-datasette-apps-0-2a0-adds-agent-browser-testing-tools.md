---
story_id: story_e7ffadde549a4c58a2e0bcf9870be659
authors: []
date: 2026-08-02
generated_at: 2026-08-02T04:43:44.972Z
source: simon-willison
section: ai
tags:
  - datasette-apps
  - agent-browser-testing
  - javascript-sandbox
  - iframe-automation
  - datasette-agent
title: datasette-apps 0.2a0 adds agent browser testing tools
url: https://simonwillison.net/2026/Aug/1/datasette-apps
why_read: Datasette developers can evaluate a release that adds agent-assisted app discovery, smoke testing, and rendered-dimension measurement.
status: released
source_published_at: 2026-08-01T21:23:56.000Z
source_external_id: https://simonwillison.net/2026/Aug/1/datasette-apps/#atom-everything
source_adapter: atom
interest_score: 7
utility_score: 7
novelty_score: 6
depth_score: 6
impact_score: 5
---

datasette-apps 0.2a0 adds tools intended to improve Datasette Apps when they are created and edited using Datasette Agent. The release introduces app_debug() for invisible testing and app_list() for listing apps the user can edit.

According to the release notes, app_debug() displays an app in an opaque iframe with pointer events disabled, then executes agent-provided JavaScript inside the iframe. This supports smoke testing and measuring rendered element dimensions. The mechanism uses context.browser_task() from datasette-agent 0.4a0.

The release is relevant to engineers exploring agent-assisted Datasette workflows. The supplied evidence does not include broader compatibility or performance results.
