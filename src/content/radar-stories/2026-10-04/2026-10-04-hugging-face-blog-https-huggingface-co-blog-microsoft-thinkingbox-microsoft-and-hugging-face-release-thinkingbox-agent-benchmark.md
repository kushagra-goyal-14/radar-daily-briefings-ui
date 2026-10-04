---
story_id: story_6fd8f7f95da640df89d5497d2918cd7a
authors: []
date: 2026-10-04
generated_at: 2026-10-04T07:30:13.447Z
source: hugging-face-blog
section: ai
tags:
  - agent-evaluation
  - stateful-workflows
  - openenv
  - mcp-tools
  - reliability-metrics
  - database-side-effects
title: Microsoft and Hugging Face release ThinkingBox agent benchmark
url: https://huggingface.co/blog/microsoft/thinkingbox
why_read: Engineers can evaluate persistent state correctness, repeated-run consistency, tool failures, and reproducibility instead of relying on agent responses alone.
status: released
source_published_at: 2026-10-03T22:56:48.000Z
source_external_id: https://huggingface.co/blog/microsoft/thinkingbox
source_adapter: rss
interest_score: 9
utility_score: 9
novelty_score: 8
depth_score: 9
impact_score: 8
---

Microsoft and Hugging Face have released ThinkingBox and ThinkingBox-Bench, an environment and dataset for evaluating AI agents by the backend state and side effects they leave behind. The benchmark covers 507 stateful business workflows and runs each task 20 times from an isolated starting state.

Each task defines available MCP tools, policies, and executable checks over terminal state. Deterministic judges reject wrong, missing, or extra effects; 477 tasks are graded on state alone, while 30 also use response rubrics.

The benchmark is available through OpenEnv, with pinned framework and data artifacts for reproducibility. Its workflows are synthetic reconstructions, so results do not establish production performance.
