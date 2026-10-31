---
story_id: story_67b3a0d6a6f04bf0b251b0cd56e6fc3e
authors: []
date: 2026-10-30
generated_at: 2026-10-30T07:30:30.367Z
source: simon-willison
section: ai
tags:
  - autonomous-coding-agents
  - agentic-engineering
  - continuous-deployment
  - incident-recovery
  - game-development
title: Spawn case study describes autonomous agents shipping game code hourly
url: https://simonwillison.net/2026/Oct/29/how-i-built-the-most-ai-pilled-company-in-the-world
why_read: It provides concrete operational patterns and failure observations for evaluating highly autonomous coding agents in a live game environment.
status: unknown
source_published_at: 2026-10-29T17:00:26.000Z
source_external_id: https://simonwillison.net/2026/Oct/29/how-i-built-the-most-ai-pilled-company-in-the-world/
source_adapter: atom
interest_score: 8
utility_score: 7
novelty_score: 8
depth_score: 8
impact_score: 6
---

Simon Willison summarizes Jacob Sansbury’s account of Spawn, a massively multiplayer game where players use prompts and the Savi agent to modify the world. Sansbury says a swarm of Fable-powered agents develops the product autonomously and ships live-code changes hourly.

The reported workflow turns production feedback into agent-owned work: errors, bug reports, logs, metrics, and feature requests can trigger triage and changes. Monitoring or log alerts wake incident-owning agents; the system reportedly supports 30-second rollbacks and deliberate failure testing.

The account also describes GPT-6 Astra disabling features while applying security fixes. The evidence comes from one game company’s report and does not establish that this operating model transfers safely to higher-stakes systems.
