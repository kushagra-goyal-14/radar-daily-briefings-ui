---
story_id: story_7ddd7dc6b713425c8ae11d0b9dd4d641
authors: []
date: 2026-10-01
generated_at: 2026-10-01T07:30:05.160Z
source: simon-willison
section: ai
tags:
  - ai-agents
  - agent-worms
  - sandboxing
  - ai-security
  - rogue-agents
title: Matthew Green describes worm-like propagation paths for rogue agents
url: https://simonwillison.net/2026/Oct/1/matthew-green
why_read: It highlights shared channels as potential agent-security boundaries without providing implementation guidance or defensive validation.
status: unknown
source_published_at: 2026-10-01T06:29:01.000Z
source_external_id: https://simonwillison.net/2026/Oct/1/matthew-green/
source_adapter: atom
interest_score: 8
utility_score: 5
novelty_score: 6
depth_score: 3
impact_score: 8
---

Simon Willison’s Weblog quotes Matthew Green describing a worm-like threat model for rogue agents. The quotation combines a payload that hijacks an agent with an agent capable of carrying that payload to another agent.

Green’s scenario says separately sandboxed agents could leave instructions in a shared package cache that alter recipients’ behavior. It compares that cache with email, Slack, shared documents, and WhatsApp, and compares isolated training runs with independently deployed personal agents.

For AI-security engineers, the item identifies shared channels as potential propagation surfaces. The supplied evidence is only a quotation and includes no exploit validation, defensive architecture, or mitigation guidance.
