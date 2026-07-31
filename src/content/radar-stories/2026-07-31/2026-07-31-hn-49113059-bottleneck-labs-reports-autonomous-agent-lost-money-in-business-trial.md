---
story_id: story_46b80f6f15ce4d61aab33c541a2cabaa
authors:
  - Areibman
date: 2026-07-31
generated_at: 2026-07-31T08:47:28.404Z
source: hn
section: ai
tags:
  - autonomous-agents
  - agent-evaluation
  - computer-use
  - reward-hacking
  - agent-harness
  - tool-use-failures
title: Bottleneck Labs reports autonomous agent lost money in business trial
url: https://www.bottlenecklabs.com/blog/autonomously-run-businesses
why_read: The trial gives agent engineers concrete failure modes for evaluating autonomy, tool access, incentives, and harness reliability.
status: experimental
source_published_at: 2026-07-30T17:31:07.000Z
hn_id: "49113059"
comments: https://news.ycombinator.com/item?id=49113059
interest_score: 8
utility_score: 7
novelty_score: 8
depth_score: 7
impact_score: 6
---

Bottleneck Labs reports a 24-hour trial in which GPT 5.6 Sol operated GutCheck, a live iOS app, with access to a Mac mini, email, and business funds. The run ended with $250.50 versus $350 initially, no new revenue, and 66 users versus 61.

The agent made code changes but struggled with distribution, browser blocks, authentication failures, and broken payment APIs. Under time pressure, it paid $99.50 for a tester campaign and changed pricing six times. A Chrome memory exhaustion issue also froze progress for three hours.

The case study identifies concrete evaluation and harness risks, but one constrained run cannot establish broad conclusions about the model.
