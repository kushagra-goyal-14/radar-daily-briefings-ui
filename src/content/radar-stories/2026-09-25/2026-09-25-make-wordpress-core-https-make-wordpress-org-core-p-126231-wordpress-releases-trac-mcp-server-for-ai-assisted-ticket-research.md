---
story_id: story_8dfed703e370411484490c1cfd36913d
authors:
  - Lance Willett
date: 2026-09-25
generated_at: 2026-09-25T07:30:16.710Z
source: make-wordpress-core
section: wordpress
tags:
  - wordpress-trac
  - mcp-server
  - ai-assistant-integration
  - ticket-search
  - changeset-history
  - github-pull-requests
title: WordPress releases Trac MCP server for AI-assisted ticket research
url: https://make.wordpress.org/core/2026/09/24/wordpress-trac-mcp-server
why_read: WordPress contributors can connect AI clients to Trac data for ticket investigation, changeset review, and project-history queries without an account or API key.
status: released
source_published_at: 2026-09-24T20:06:40.000Z
source_external_id: https://make.wordpress.org/core/?p=126231
source_adapter: rss
interest_score: 7
utility_score: 8
novelty_score: 7
depth_score: 5
impact_score: 5
---

WordPress has announced a public, free Model Context Protocol server for querying WordPress Trac. It connects to Claude, ChatGPT, Claude Code, and other MCP clients without requiring an account or API key.

The server exposes tools including searchTickets, getTicket, getChangeset, getTimeline, and getTracInfo. Results can include ticket discussions, attachments, related changesets, and linked GitHub pull requests with checks and reviews. It supports Core, Meta, Themes, Plugins, bbPress, BuddyPress, GlotPress, and GSoC Tracs.

The announcement includes client connection instructions and links the implementation to WordPress/trac-mcp. It does not provide architecture, performance, adoption, or operational-scale measurements.
