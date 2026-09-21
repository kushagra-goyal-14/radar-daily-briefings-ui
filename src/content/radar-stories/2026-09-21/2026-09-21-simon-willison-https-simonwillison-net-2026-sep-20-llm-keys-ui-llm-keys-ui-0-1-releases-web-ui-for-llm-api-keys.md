---
story_id: story_a9492d7dd45c4bea81ed01ced2f11d92
authors: []
date: 2026-09-21
generated_at: 2026-09-21T07:30:28.060Z
source: simon-willison
section: ai
tags:
  - llm-web-ui
  - api-key-management
  - coding-agents
  - codex-remote
  - tailscale
  - secret-handling
title: llm-keys-ui 0.1 releases web UI for LLM API keys
url: https://simonwillison.net/2026/Sep/20/llm-keys-ui
why_read: Engineers using remote coding agents can configure provider keys through a dedicated interface instead of pasting them into agent sessions.
status: released
source_published_at: 2026-09-20T19:22:19.000Z
source_external_id: https://simonwillison.net/2026/Sep/20/llm-keys-ui/
source_adapter: atom
interest_score: 6
utility_score: 7
novelty_score: 6
depth_score: 5
impact_score: 4
---

Simon Willison has released llm-keys-ui 0.1, a focused web interface for configuring LLM API keys on machines used by coding agents.

The documented workflow runs `uvx --with llm-keys-ui llm keys-ui --all`, after which the agent reports a URL for an interface reachable through local-network or Tailscale device IPs. Keys can later be retrieved in shell commands with `llm keys get anthropic` or similar commands.

The tool targets users controlling remote coding agents from a phone and avoids pasting keys into agent sessions. The supplied release description does not provide architecture, threat-model details, or security guarantees.
