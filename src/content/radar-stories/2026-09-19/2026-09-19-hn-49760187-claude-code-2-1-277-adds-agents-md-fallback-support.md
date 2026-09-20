---
story_id: story_4c4cb8eeda7e451c9a80f3cd82ec1f3e
authors:
  - datadrivenangel
date: 2026-09-19
generated_at: 2026-09-19T07:30:27.260Z
source: hn
section: ai
tags:
  - claude-code
  - agents-md
  - developer-tools
  - gateway-proxy
  - plugin-management
title: Claude Code 2.1.277 adds AGENTS.md fallback support
url: https://code.claude.com/docs/en/changelog
why_read: Engineers can assess instruction-file compatibility and deployment-specific limitations while reviewing configuration, gateway, and session fixes.
status: released
source_published_at: 2026-09-18T21:00:32.000Z
hn_id: "49760187"
comments: https://news.ycombinator.com/item?id=49760187
interest_score: 8
utility_score: 8
novelty_score: 6
depth_score: 6
impact_score: 7
---

Claude Code 2.1.277 adds support for AGENTS.md when a project does not contain CLAUDE.md. The changelog also lists gateway proxy settings, static upstream headers, plugin-install fixes, and numerous reliability improvements.

The new instruction-file behavior is configurable under “Project instructions” in /config, but the changelog says it is not yet available on Bedrock, Vertex, or Foundry. Gateway deployments can pass outbound hostnames to a forward proxy instead of resolving them locally.

The release is available as part of Claude Code’s published changelog. Engineers should account for provider-specific limitations and note that the related server-side auto-mode classifier change appears in version 2.1.278.
