---
story_id: story_f70c2a35fd484d86aaccc1e9a5c33757
authors:
  - Milana Cap
date: 2026-08-05
generated_at: 2026-08-05T05:23:22.824Z
source: make-wordpress-core
section: wordpress
tags:
  - wordpress-7-1
  - abilities-api
  - public-metadata
  - rest-api
  - mcp-integration
  - permission-callbacks
title: WordPress 7.1 releases unified public flag for Abilities
url: https://make.wordpress.org/core/2026/08/04/a-unified-public-exposure-flag-for-abilities-in-wordpress-7-1
why_read: The change simplifies cross-client exposure policy while preserving channel overrides and requiring independent authorization checks.
status: released
source_published_at: 2026-08-04T12:49:37.000Z
source_external_id: https://make.wordpress.org/core/?p=125285
source_adapter: rss
interest_score: 8
utility_score: 9
novelty_score: 7
depth_score: 9
impact_score: 7
---

WordPress 7.1 introduces a unified meta.public flag for Abilities. It records whether an Ability is generally intended for external clients, including REST API consumers, MCP adapters, and AI agents.

For REST, show_in_rest takes precedence over public; otherwise public supplies the default, with absent values resolving to false. The resolved public property is always present in Ability metadata and is declared in the REST schema. Existing channel-specific registrations remain compatible.

The flag governs exposure and discoverability, not authorization. Permission callbacks remain mandatory, and developers should preserve explicit channel opt-outs. The WordPress MCP Adapter is slated to adopt the flag in its next release, while WP-CLI lists all registered Abilities.
