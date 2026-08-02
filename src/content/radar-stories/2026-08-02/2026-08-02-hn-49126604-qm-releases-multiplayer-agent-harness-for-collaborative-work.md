---
story_id: story_78d38281800e44a1b019619dd5323978
authors:
  - tosh
date: 2026-08-02
generated_at: 2026-08-02T04:43:44.972Z
source: hn
section: ai
tags:
  - multi-agent-harness
  - scoped-memory
  - sandboxed-execution
  - slack-integration
  - agent-security
  - typescript
title: QM releases multiplayer agent harness for collaborative work
url: https://github.com/yc-software/qm
why_read: Engineers can evaluate QM’s workspace isolation, deployment boundaries, security postures, and vendor-independent harness interfaces.
status: released
source_published_at: 2026-07-31T18:04:58.000Z
hn_id: "49126604"
comments: https://news.ycombinator.com/item?id=49126604
interest_score: 8
utility_score: 8
novelty_score: 7
depth_score: 9
impact_score: 7
---

QM is an open-source multiplayer agent harness for startup work, supporting isolated employee and room workspaces across Slack and the web. It provides collaboration through channels, group messages, projects, and shared organizational controls.

Each scope has its own memory, files, permissions, keychain view, scheduled jobs, web apps, and durable sandbox. A TypeScript core on Node uses Fastify, Postgres persistence, and interchangeable harness interfaces, including Pi, OpenCode, Codex, and Claude Code.

QM offers Strict, Auto, and Dangerous security postures, with command policies applying in all modes. Deployments run in the operator’s cloud account, while adoption, scale, and performance are not evidenced.
