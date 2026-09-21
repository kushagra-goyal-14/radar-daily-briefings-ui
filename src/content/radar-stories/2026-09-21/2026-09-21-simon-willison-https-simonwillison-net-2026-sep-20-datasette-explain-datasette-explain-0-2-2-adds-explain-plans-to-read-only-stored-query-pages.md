---
story_id: story_283050e7536f4b1b885743a9b5bbeffa
authors: []
date: 2026-09-21
generated_at: 2026-09-21T07:30:28.060Z
source: simon-willison
section: databases
tags:
  - datasette
  - sql-explain-plans
  - query-validation
  - stored-queries
title: datasette-explain 0.2.2 adds explain plans to read-only stored-query pages
url: https://simonwillison.net/2026/Sep/20/datasette-explain
why_read: Datasette users can identify the new query-explanation scope available for read-only stored-query pages.
status: released
source_published_at: 2026-09-20T00:22:04.000Z
source_external_id: https://simonwillison.net/2026/Sep/20/datasette-explain/
source_adapter: atom
interest_score: 6
utility_score: 7
novelty_score: 5
depth_score: 4
impact_score: 4
---

Simon Willison’s release post announces datasette-explain 0.2.2, a new version of the Datasette plugin. The documented change is that explain plans now work on read-only stored-query pages.

The plugin is described as explaining and validating SQL queries while they are typed into Datasette. The release followed an upgrade of datasette.simonwillison.net to Datasette 1.0a40, which the post says inspired the update.

The change is relevant to engineers inspecting queries in Datasette’s stored-query interface. The supplied material does not provide implementation details, benchmarks, compatibility constraints, or broader database-system effects.
