---
story_id: story_3b06a73bf64d45ad82732c60512adfed
authors:
  - github-actions[bot]
date: 2026-11-10
generated_at: 2026-11-10T07:30:07.356Z
source: wordpress-playground-releases
section: wordpress
tags:
  - wordpress-playground
  - php-webassembly
  - browser-networking
  - blueprints
  - javascript-client
  - remote-access
title: WordPress Playground v3.1.63 adds PHP and browser improvements
url: https://github.com/WordPress/wordpress-playground/releases/tag/v3.1.63
why_read: Playground integrators can review concrete changes affecting Blueprint defaults, PHP WebAssembly networking, documentation, and remote access.
status: released
source_published_at: 2026-11-09T09:43:56.000Z
source_external_id: tag:github.com,2008:Repository/529027653/v3.1.63
source_adapter: atom
interest_score: 7
utility_score: 7
novelty_score: 5
depth_score: 6
impact_score: 6
---

WordPress Playground v3.1.63 was released on 9 November 2026. The release includes updates across Blueprints, PHP WebAssembly, documentation, the website, and remote access, with a matching @wp-playground/client 3.1.63 npm package.

The release defaults v1 Blueprints to PHP 8.3 and adds browser language selection. PHP WebAssembly changes stop forwarding PHP’s User-Agent to fetch(), reject browser clients in the outbound networking proxy, and remove a polling timeout affecting blocking reads on slow pipes.

It also updates self-hosted documentation, adds Dock Query API options, and supports WebMCP tools in Personal WP remote access. The supplied notes provide no performance, compatibility, adoption, or user-impact measurements.
