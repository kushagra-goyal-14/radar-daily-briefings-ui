---
story_id: story_f0a0f6b52ad841e4ae68703c707b317f
authors:
  - reecoute.fr by motet-a
date: 2026-09-29
generated_at: 2026-09-29T07:30:48.824Z
source: lobsters
section: programming
tags:
  - end-to-end-testing
  - playwright
  - single-page-applications
  - test-isolation
  - browser-automation
  - continuous-integration
title: Réécoute details Playwright end-to-end testing for its SPA
url: https://reecoute.fr/tech_blog/2026-09-28_my-experience-writing-automated-tests-for-a-spa
why_read: The case study offers concrete tradeoffs for reliable browser-based testing of long-lived, interactive single-page applications.
status: unknown
source_published_at: 2026-09-29T06:00:10.000Z
source_external_id: https://lobste.rs/s/vlywx2
source_adapter: rss
discussion: https://lobste.rs/s/vlywx2/my_experience_writing_automated_tests
discussions:
  - source: lobsters
    url: https://lobste.rs/s/vlywx2/my_experience_writing_automated_tests
interest_score: 7
utility_score: 8
novelty_score: 5
depth_score: 7
impact_score: 5
---

A Réécoute engineering post describes a Playwright suite for testing its React single-page application in a real browser. The article is a personal case study rather than a released tool or standardized method.

The suite uses long user-journey tests, shared accumulated data, helper functions for creating records, and global mocks for services such as S3, Stripe, and Twilio. Playwright runs tests fully in parallel, targets Chromium by default, and captures standalone HTML reports with traces for CI failures.

The author reports a runtime of just over 20 seconds on an M3 MacBook Air. Coverage is not measured, the code is private, and CI still retries failures up to twice.
