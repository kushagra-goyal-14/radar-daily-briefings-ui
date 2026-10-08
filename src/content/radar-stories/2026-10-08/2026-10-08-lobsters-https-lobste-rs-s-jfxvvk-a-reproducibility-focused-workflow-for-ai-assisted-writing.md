---
story_id: story_a6827fc8b3cb45cd8cd945baab7c0053
authors:
  - ninashamsi.com by nishnash
date: 2026-10-08
generated_at: 2026-10-08T07:30:44.053Z
source: lobsters
section: ai
tags:
  - ai-writing-assistants
  - prompt-engineering
  - llm-reproducibility
  - editorial-workflows
  - claim-ledgers
  - litellm
title: A reproducibility-focused workflow for AI-assisted writing
url: https://ninashamsi.com/writing/i-am-a-bad-writer.html
why_read: The workflow offers concrete artifacts and controls for managing evidence, revisions, model variability, and replay in AI-assisted technical writing.
status: experimental
source_published_at: 2026-10-08T03:07:41.000Z
source_external_id: https://lobste.rs/s/jfxvvk
source_adapter: rss
discussion: https://lobste.rs/s/jfxvvk/on_using_ai_as_writing_assistant
discussions:
  - source: lobsters
    url: https://lobste.rs/s/jfxvvk/on_using_ai_as_writing_assistant
interest_score: 7
utility_score: 7
novelty_score: 6
depth_score: 7
impact_score: 4
---

The author describes an experimental workflow for AI-assisted technical writing built from self-hosted tooling, agent support, and structured editorial artifacts. The process uses versioned briefs, frozen source packs, claim ledgers, outlines, critiques, diffs, and immutable document versions.

Its reproducibility model separates independent regeneration from exact replay. Ordered inputs, source snapshots, generation settings, dependency versions, tool results, and revisions support later comparison, while saved bytes and hashes allow retrieval of a chosen artifact. LiteLLM is used as an example for managing model parameters such as temperature, top_p, seed, token limits, and response formats.

The author says identical regeneration is not guaranteed, some parameter research was not personally tested, and the process remains under development.
