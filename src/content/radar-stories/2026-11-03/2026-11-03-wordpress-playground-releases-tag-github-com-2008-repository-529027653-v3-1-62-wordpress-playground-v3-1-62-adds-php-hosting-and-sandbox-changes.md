---
story_id: story_c3e125436f4942fe9f83717b375a04c7
authors:
  - github-actions[bot]
date: 2026-11-03
generated_at: 2026-11-03T07:30:08.067Z
source: wordpress-playground-releases
section: wordpress
tags:
  - wordpress-playground
  - php-webassembly
  - sandbox-deployment
  - opfs-mounts
  - service-worker
  - mcp-security
title: WordPress Playground v3.1.62 adds PHP, hosting, and sandbox changes
url: https://github.com/WordPress/wordpress-playground/releases/tag/v3.1.62
why_read: Engineers can identify concrete changes affecting Playground deployment, browser-based PHP, CLI configuration, filesystem mounts, and security handling.
status: released
source_published_at: 2026-11-02T09:55:10.000Z
source_external_id: tag:github.com,2008:Repository/529027653/v3.1.62
source_adapter: atom
interest_score: 7
utility_score: 8
novelty_score: 7
depth_score: 7
impact_score: 6
---

WordPress Playground v3.1.62 was released on 2 November 2026. The release includes changes across PHP WebAssembly, the website, sandbox deployment, Blueprints, documentation, and developer tooling.

Notable updates include a new `--php-ini` flag for the Playground CLI, persistence of symlink targets in OPFS mounts, rejection of selected OPFS mounts, service-worker activation and URL versioning, and routing WordPress through `wpsandbox.wordpress.net` on WP Cloud. The release also adds S3 hosting guidance for Blueprint resources and WebMCP security annotations with strict input schemas and `AbortSignal` support.

Bundled PHP versions were updated for CVE-2026-109618 and CVE-2026-109619. The supplied notes do not describe those vulnerabilities or provide compatibility and performance results.
