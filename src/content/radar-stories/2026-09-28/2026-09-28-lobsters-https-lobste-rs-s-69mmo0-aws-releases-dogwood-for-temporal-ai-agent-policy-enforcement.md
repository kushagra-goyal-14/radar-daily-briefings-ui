---
story_id: story_4415afbb31eb44d98d52fce69af23eb2
authors:
  - aws.amazon.com via agnishom
date: 2026-09-28
generated_at: 2026-09-28T07:30:40.837Z
source: lobsters
section: ai
tags:
  - agent-safety
  - runtime-verification
  - temporal-logic
  - policy-language
  - tool-call-governance
  - cedar
title: AWS releases Dogwood for temporal AI-agent policy enforcement
url: https://aws.amazon.com/blogs/opensource/introducing-dogwood-runtime-verification-for-ai-agents
why_read: Engineers can evaluate sequence-aware authorization rules while accounting for stateful evaluation and the loss of Cedar’s automated reasoning tools.
status: released
source_published_at: 2026-09-28T04:36:20.000Z
source_external_id: https://lobste.rs/s/69mmo0
source_adapter: rss
discussion: https://lobste.rs/s/69mmo0/dogwood_monitoring_policies_using_first
discussions:
  - source: lobsters
    url: https://lobste.rs/s/69mmo0/dogwood_monitoring_policies_using_first
interest_score: 8
utility_score: 8
novelty_score: 8
depth_score: 8
impact_score: 7
---

AWS has released Dogwood, an Apache 2.0 open-source language for governing AI-agent tool use. Dogwood policy support is also available inside Amazon Bedrock AgentCore Policy.

Dogwood extends Cedar with temporal conditions over prior tool-call requests and responses. Its operators and standard-library macros can enforce prerequisites, ordering, sliding-window rate limits, distinct-value limits, and aggregate thresholds. Policies can use event schemas generated from Model Context Protocol tools.

Existing Cedar policies remain valid and reusable without migration. However, temporal evaluation requires stateful event tracking, may depend on event-log length, and does not currently provide Cedar’s automated reasoning analysis tools. Absolute-time windows, liveness, and multi-agent features are future directions.
