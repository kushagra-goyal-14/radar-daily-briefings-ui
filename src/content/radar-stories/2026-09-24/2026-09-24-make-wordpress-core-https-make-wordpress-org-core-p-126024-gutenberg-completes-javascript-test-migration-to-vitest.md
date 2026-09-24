---
story_id: story_62e665d06eaa459ab0aa279875c6f6dc
authors:
  - Marco Ciampini
date: 2026-09-24
generated_at: 2026-09-24T07:30:15.502Z
source: make-wordpress-core
section: wordpress
tags:
  - gutenberg
  - vitest
  - jest-migration
  - browser-mode-testing
  - javascript-testing
  - wordpress-scripts
title: Gutenberg completes JavaScript test migration to Vitest
url: https://make.wordpress.org/core/2026/09/23/gutenbergs-javascript-unit-and-integration-tests-now-use-vitest
why_read: Engineers maintaining Gutenberg or WordPress test tooling must choose Vitest migration paths, explicit environments, or maintenance-only Jest support.
status: released
source_published_at: 2026-09-23T14:05:07.000Z
source_external_id: https://make.wordpress.org/core/?p=126024
source_adapter: rss
interest_score: 8
utility_score: 9
novelty_score: 7
depth_score: 9
impact_score: 8
---

Gutenberg has completed its migration from Jest to Vitest for JavaScript unit and integration tests. The published WordPress tooling also changes: @wordpress/scripts 36.0.0 makes Vitest the default for test-unit-js.

Tests explicitly select Node, jsdom, or Browser Mode through filename suffixes. Browser Mode enables focused tests of CSS, layout, scrolling, focus, keyboard interactions, and other real-browser behavior, while jsdom remains available for non-rendering DOM tests.

Projects can retain Jest with test-unit-jest, but that command is maintenance-only. The migration brings breaking configuration and dependency changes, and deprecated Jest packages remain available without receiving updates.
