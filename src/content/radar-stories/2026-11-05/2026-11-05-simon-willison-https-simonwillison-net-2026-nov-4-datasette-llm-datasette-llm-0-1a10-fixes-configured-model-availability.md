---
story_id: story_728fafbc363e428193672c895b01a4cb
authors: []
date: 2026-11-05
generated_at: 2026-11-05T07:30:20.895Z
source: simon-willison
section: ai
tags:
  - datasette-llm
  - llm-integration
  - model-configuration
  - plugin-development
title: datasette-llm 0.1a10 fixes configured model availability
url: https://simonwillison.net/2026/Nov/4/datasette-llm
why_read: Datasette plugin developers can verify that model availability now follows the configured set in this release.
status: released
source_published_at: 2026-11-04T15:26:02.000Z
source_external_id: https://simonwillison.net/2026/Nov/4/datasette-llm/
source_adapter: atom
interest_score: 5
utility_score: 6
novelty_score: 4
depth_score: 3
impact_score: 3
---

datasette-llm 0.1a10 has been released as an LLM integration plugin for other plugins to depend on. The release fixes a model-availability bug observed on the agent.datasette.io demo site.

The affected behavior did not correctly restrict the set of available LLM models to those specified in configuration. The release note identifies the configuration mismatch but does not describe the implementation of the fix.

Developers maintaining Datasette-based agent applications should review this release if their deployments rely on configured model availability. The supplied evidence includes no testing details or broader impact assessment.
