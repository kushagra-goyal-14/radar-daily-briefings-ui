---
story_id: story_b8486bef8d9b464e9d2c110d524759e1
authors: []
date: 2026-10-02
generated_at: 2026-10-02T07:30:17.931Z
source: hugging-face-blog
section: ai
tags:
  - agent-training
  - synthetic-data-generation
  - curriculum-learning
  - task-verification
  - supervised-fine-tuning
  - enterpriseops-gym
title: ServiceNow presents AutoSynthData for enterprise-agent training
url: https://huggingface.co/blog/ServiceNow-AI/autosynthdata
why_read: The pipeline offers concrete design patterns for capability-driven task generation, verifier validation, repair, and curriculum updates.
status: experimental
source_published_at: 2026-10-02T04:01:31.000Z
source_external_id: https://huggingface.co/blog/ServiceNow-AI/autosynthdata
source_adapter: rss
interest_score: 8
utility_score: 7
novelty_score: 7
depth_score: 8
impact_score: 6
---

ServiceNow presents AutoSynthData, an experimental pipeline for generating training data for enterprise agents. It uses target-model failures and stronger-teacher successes to identify capability gaps, then creates executable tasks tailored to a stateful environment.

Each task combines a system specification, user prompt, and verifier. Candidates undergo solver evaluation, execution, positive and negative verification, bounded repair, and batch-level coverage review before acceptance. Accepted tasks can be expanded into variants with different states, entities, workflows, and verifiers.

ServiceNow reports improved mean Pass@1 after supervised fine-tuning in EnterpriseOps Gym’s Hybrid and ITSM domains. The evidence is limited to these controlled experiments; reinforcement-learning use remains planned.
