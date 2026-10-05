---
story_id: story_705165514df64f478d5f2758f58556bf
authors:
  - kmeh
date: 2026-10-05
generated_at: 2026-10-05T07:30:42.101Z
source: hn
section: ai
tags:
  - agent-memory
  - retrieval-augmented-generation
  - documentation-driven-development
  - markdown-knowledge-base
  - vector-databases
  - open-source-plugin
title: Operator Memory promotes documentation over RAG-based agent memory
url: https://liao.gg/blog/agents-dont-need-memory
why_read: It offers a concrete, inspectable workflow for managing agent context without vector databases or black-box retrieval.
status: released
source_published_at: 2026-10-03T17:03:37.000Z
hn_id: "49945933"
comments: https://news.ycombinator.com/item?id=49945933
interest_score: 8
utility_score: 7
novelty_score: 7
depth_score: 6
impact_score: 6
---

The article argues that common agent-memory plugins rely on retrieval-augmented generation: they extract snippets from transcripts, store them in a vector database, and inject similar results into prompts. The author says this approach loses context, may preserve stale information, and is difficult to audit.

As an alternative, the article proposes document-based memory: agents consult a structured Markdown workspace containing instructions, specifications, decisions, research, and indexes, then update those documents after work.

The article describes Operator Memory as an open-source implementation of this workflow. It reports no comparative measurements, so the broader claims remain an opinionated design position rather than independently demonstrated results.
