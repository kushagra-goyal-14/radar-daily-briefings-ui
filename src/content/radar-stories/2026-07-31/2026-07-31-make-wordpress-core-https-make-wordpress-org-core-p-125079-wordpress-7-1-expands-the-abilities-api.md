---
story_id: story_c9d51dd68ccd4b629fecedd8c5b70ca3
authors:
  - Milana Cap
date: 2026-07-31
generated_at: 2026-07-31T23:35:24.629Z
source: make-wordpress-core
section: wordpress
tags:
  - wordpress-7-1
  - abilities-api
  - validation-hooks
  - invocation-observability
  - rest-api
  - typed-input
title: WordPress 7.1 expands the Abilities API
url: https://make.wordpress.org/core/2026/07/31/abilities-api-improvements-in-wordpress-7-1
why_read: Plugin authors and programmatic clients can adopt new validation, telemetry, schema-discovery, and typed-input integration points.
status: released
source_published_at: 2026-07-31T19:07:43.000Z
source_external_id: https://make.wordpress.org/core/?p=125079
source_adapter: rss
interest_score: 8
utility_score: 9
novelty_score: 7
depth_score: 9
impact_score: 7
---

WordPress 7.1 expands the Abilities API with custom validation hooks, invocation lifecycle observability, richer user information, selective responses, consistent schemas, and typed REST inputs.

Plugins can extend JSON Schema validation through wp_ability_validate_input and wp_ability_validate_output. The wp_ability_invoked action fires at the beginning of execution, before normalization, validation, permission checks, short-circuiting, caching, approval, or the execution callback.

Core user, site, and environment abilities now expose more consistent schemas. REST ability runs coerce accepted query inputs to declared types before permission and execution callbacks receive them. The invocation action receives raw input, so indiscriminate logging may expose sensitive data.
