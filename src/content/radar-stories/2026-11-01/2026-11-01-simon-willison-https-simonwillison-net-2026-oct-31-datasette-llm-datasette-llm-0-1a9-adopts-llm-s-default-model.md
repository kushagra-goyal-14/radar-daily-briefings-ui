---
story_id: story_420ade926a46478c8195f3822ab766c1
authors: []
date: 2026-11-01
generated_at: 2026-11-01T07:30:28.638Z
source: simon-willison
section: ai
tags:
  - datasette-llm
  - datasette-agent
  - default-model
  - llm-integration
  - plugin-development
title: datasette-llm 0.1a9 adopts LLM’s default model
url: https://simonwillison.net/2026/Oct/31/datasette-llm
why_read: Datasette Agent users can remove one configuration step when launching the plugin with Datasette.
status: released
source_published_at: 2026-10-31T22:10:01.000Z
source_external_id: https://simonwillison.net/2026/Oct/31/datasette-llm/
source_adapter: atom
interest_score: 6
utility_score: 7
novelty_score: 5
depth_score: 4
impact_score: 4
---

datasette-llm 0.1a9 has been released with a small configuration improvement for Datasette Agent. The plugin now picks up the default model used by LLM.

With the updated behavior, users can launch Datasette Agent using `uvx --with datasette-agent datasette content.db --internal internal.db` without explicitly setting `plugins.datasette-agent.default_model`. Previously, that model setting was required in the documented example.

The change reduces setup work for this plugin integration, but the supplied release description does not explain the implementation or describe behavior beyond the Datasette Agent use case.
