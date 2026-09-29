---
story_id: story_4663261781014245b1463e044d40bcdb
authors:
  - github-actions[bot]
date: 2026-09-29
generated_at: 2026-09-29T07:30:48.824Z
source: wordpress-playground-releases
section: wordpress
tags:
  - wordpress-playground
  - cors-proxy
  - sqlite-storage
  - playwright-migration
  - range-requests
  - npm-package
title: WordPress Playground v3.1.56 adds browser and storage improvements
url: https://github.com/WordPress/wordpress-playground/releases/tag/v3.1.56
why_read: The release affects browser networking, persistence, testing workflows, and package integration for WordPress Playground developers.
status: released
source_published_at: 2026-09-28T09:53:48.000Z
source_external_id: tag:github.com,2008:Repository/529027653/v3.1.56
source_adapter: atom
interest_score: 7
utility_score: 7
novelty_score: 6
depth_score: 6
impact_score: 6
---

WordPress Playground v3.1.56 was released on September 28, 2026. The release includes updates to the CORS proxy, randomized SQLite database storage, Playwright test migration, and Git-based plugin and theme mounting in the Files browser.

The CORS proxy no longer relays server-control response headers and adds HEAD support, Content-Length forwarding for non-chunked responses, and browser range requests. The Website also supports randomized SQLite storage, while remaining Cypress tests move to Playwright.

The release is available through npm as @wp-playground/client@3.1.56. The supplied notes do not provide architecture details, performance measurements, or compatibility guidance for these changes.
