---
story_id: story_c873acb09d9d429bb9ddf368f7f5d1ed
authors:
  - sidgarimella
date: 2026-11-04
generated_at: 2026-11-04T07:30:14.470Z
source: hn
section: security
tags:
  - postman
  - plugin-auto-installation
  - agent-integrations
  - hook-trust
  - mcp-configuration
  - consent-boundary
title: Open Postman issue reports automatic agent-plugin and CLI installation
url: https://github.com/postmanlabs/postman-app-support/issues/14370
why_read: Engineers can assess cross-application consent boundaries, agent hook trust, MCP configuration, and rollback requirements from the supplied evidence.
status: in_progress
source_published_at: 2026-11-03T17:22:37.000Z
hn_id: "50354960"
comments: https://news.ycombinator.com/item?id=50354960
interest_score: 9
utility_score: 8
novelty_score: 8
depth_score: 8
impact_score: 8
---

An open GitHub issue reports that Postman 12.33.4 automatically installed or enabled integrations for Codex, Claude Code, Cursor, and Postman CLI on macOS. The report treats the behavior as a consent and security-boundary concern.

Evidence includes Postman logs showing an `auto-existing-upgrade`, Codex marketplace and plugin entries, a Postman MCP endpoint, and startup instructions routing broad API work to a Postman skill. The report also describes installer code that attempts to approve a Postman hook.

The issue has not been reproduced on a clean Mac and does not establish data exfiltration. Agent behavior differs by host and version, so maintainers still need to confirm scope, consent flow, and rollback coverage.
