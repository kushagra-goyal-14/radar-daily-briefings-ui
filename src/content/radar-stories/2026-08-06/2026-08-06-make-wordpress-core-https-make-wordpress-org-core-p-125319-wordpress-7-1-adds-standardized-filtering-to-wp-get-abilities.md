---
story_id: story_ed7a4c2ff4584dd282f0478f034919e8
authors:
  - Milana Cap
date: 2026-08-06
generated_at: 2026-08-06T06:50:30.873Z
source: make-wordpress-core
section: wordpress
tags:
  - wordpress-7-1
  - abilities-api
  - ability-filtering
  - rest-api
  - metadata-filtering
  - callback-hooks
title: WordPress 7.1 adds standardized filtering to wp_get_abilities()
url: https://make.wordpress.org/core/2026/08/05/filtering-registered-abilities-with-wp_get_abilities-in-wordpress-7-1
why_read: Plugin developers can replace duplicated filtering code while preserving strict matching semantics and the distinction between discovery and authorization.
status: released
source_published_at: 2026-08-05T11:55:27.000Z
source_external_id: https://make.wordpress.org/core/?p=125319
source_adapter: rss
interest_score: 8
utility_score: 9
novelty_score: 7
depth_score: 9
impact_score: 7
---

WordPress 7.1 extends wp_get_abilities() with standardized filtering for registered abilities. The change was introduced in changeset 62420 for Trac ticket #64990 and is documented in an official WordPress developer post.

Callers can filter by category, namespace, and metadata, combine those conditions with AND logic, and add per-item or final-result callbacks. Two global filters provide site-wide inclusion and result processing. The REST abilities controller now delegates to this pipeline and exposes matching query parameters.

The change consolidates duplicated filtering code, but strict metadata comparisons require correctly typed REST parameters. Filtering controls discovery, not authorization; execution must still pass permission_callback.
