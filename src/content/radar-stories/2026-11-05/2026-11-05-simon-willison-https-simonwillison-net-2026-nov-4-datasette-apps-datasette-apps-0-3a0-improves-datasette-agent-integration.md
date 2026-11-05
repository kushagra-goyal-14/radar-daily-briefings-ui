---
story_id: story_6e003e5bf45d467a9ae4e24c7690cb3f
authors: []
date: 2026-11-05
generated_at: 2026-11-05T07:30:20.895Z
source: simon-willison
section: ai
tags:
  - datasette-apps
  - datasette-agent
  - stored-queries
  - llm-integration
  - permission-controls
title: datasette-apps 0.3a0 improves Datasette Agent integration
url: https://simonwillison.net/2026/Nov/4/datasette-apps
why_read: The release gives engineers concrete controls for connecting LLM-assisted HTML apps to stored queries and write operations.
status: released
source_published_at: 2026-11-04T00:29:36.000Z
source_external_id: https://simonwillison.net/2026/Nov/4/datasette-apps/
source_adapter: atom
interest_score: 7
utility_score: 8
novelty_score: 6
depth_score: 7
impact_score: 5
---

datasette-apps 0.3a0 is a released update that improves integration between Datasette Apps and Datasette Agent. The release adds app tagging in chat and changes how agent-linked apps open in the interface.

New app_add_stored_queries() and app_remove_stored_queries() tools let the agent manage which stored queries an app may call. app_create() verifies that requested queries exist and that the user can view them, while write queries require user approval before app creation.

These checks give engineers explicit permission and approval controls for LLM-assisted HTML applications. The supplied evidence covers the release notes but does not include independent implementation details or related documents.
