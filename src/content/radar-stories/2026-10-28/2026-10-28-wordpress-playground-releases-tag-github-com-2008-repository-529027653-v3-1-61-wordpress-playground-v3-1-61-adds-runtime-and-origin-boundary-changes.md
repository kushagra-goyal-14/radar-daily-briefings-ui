---
story_id: story_406e41562c2c4e939c5a8707f779765d
authors:
  - github-actions[bot]
date: 2026-10-28
generated_at: 2026-10-28T07:30:13.004Z
source: wordpress-playground-releases
section: wordpress
tags:
  - wordpress-playground
  - php-webassembly
  - sharedworker-runtime
  - cross-origin-isolation
  - sandbox-security
  - vite-development
title: WordPress Playground v3.1.61 adds runtime and origin-boundary changes
url: https://github.com/WordPress/wordpress-playground/releases/tag/v3.1.61
why_read: Playground users can evaluate the release’s browser isolation, origin-boundary, runtime, and local-development changes before upgrading.
status: released
source_published_at: 2026-10-26T09:57:05.000Z
source_external_id: tag:github.com,2008:Repository/529027653/v3.1.61
source_adapter: atom
interest_score: 7
utility_score: 7
novelty_score: 4
depth_score: 7
impact_score: 6
---

WordPress Playground v3.1.61 was released on 26 October 2026. The release includes changes spanning browser runtime behavior, origin boundaries, sandbox activation, local development, and testing.

The notes describe SharedWorker runtime use for Personal WP, API calls restricted to the connected window, cross-origin frame messaging, separate internal origins for WordPress frames, and local-folder access checks against the PHP host. The release also enables the WordPress sandbox only with the `?reprint` parameter.

The `@wp-playground/client` package is available at version 3.1.61 through npm. The supplied notes do not include performance data or detailed compatibility guidance.
