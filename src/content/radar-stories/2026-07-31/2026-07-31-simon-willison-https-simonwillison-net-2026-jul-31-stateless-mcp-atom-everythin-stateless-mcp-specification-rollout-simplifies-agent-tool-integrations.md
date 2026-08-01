---
story_id: story_e9bb55aa90f44a59989a61e4384e723e
authors: []
date: 2026-07-31
generated_at: 2026-07-31T23:35:24.629Z
source: simon-willison
section: ai
tags:
  - model-context-protocol
  - stateless-protocol
  - agent-tooling
  - python-cli
  - datasette-plugin
  - sql-tools
title: Stateless MCP specification rollout simplifies agent tool integrations
url: https://simonwillison.net/2026/Jul/31/stateless-mcp
why_read: Engineers can assess how stateless MCP changes session handling, scalability concerns, tool inspection, and Datasette-based SQL access.
status: released
source_published_at: 2026-07-31T23:13:22.000Z
source_external_id: https://simonwillison.net/2026/Jul/31/stateless-mcp/#atom-everything
source_adapter: atom
interest_score: 8
utility_score: 8
novelty_score: 8
depth_score: 8
impact_score: 7
---

The 2026-07-28 Model Context Protocol specification rolled out a stateless request pattern for MCP tool calls. Simon Willison reports that the change renewed his interest in MCP and supported releases of several related tools.

Legacy MCP required an initialization request to obtain a session ID before calling a tool. The stateless pattern places protocol, method, tool name, and client metadata in a single HTTP request, avoiding server-side session tracking and same-backend routing requirements.

Willison’s mcp-explorer provides CLI-based tool discovery and invocation, while datasette-mcp exposes database and read-only SQL tools through Datasette. The supplied evidence provides no independent performance measurements, and llm-mcp-client remains alpha.
