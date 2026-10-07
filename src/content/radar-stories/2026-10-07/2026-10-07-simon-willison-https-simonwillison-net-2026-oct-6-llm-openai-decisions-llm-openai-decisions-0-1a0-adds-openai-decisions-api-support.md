---
story_id: story_0d173e8000a84af091523572cd9616e3
authors: []
date: 2026-10-07
generated_at: 2026-10-07T07:30:36.281Z
source: simon-willison
section: ai
tags:
  - openai-decisions-api
  - llm-plugin
  - structured-output
  - image-input
  - command-line-tool
title: llm-openai-decisions 0.1a0 adds OpenAI Decisions API support
url: https://simonwillison.net/2026/Oct/6/llm-openai-decisions
why_read: Engineers can experiment with OpenAI’s decision-oriented API through an existing LLM command-line workflow and image-query interface.
status: released
source_published_at: 2026-10-06T23:04:13.000Z
source_external_id: https://simonwillison.net/2026/Oct/6/llm-openai-decisions/
source_adapter: atom
interest_score: 7
utility_score: 7
novelty_score: 6
depth_score: 4
impact_score: 5
---

Simon Willison has released llm-openai-decisions 0.1a0, an installable plugin for OpenAI’s Decisions API. The release exposes the API through the llm command-line workflow.

The article says OpenAI’s gpt-6-luna decision model accepts image input as well as text. The API supports three question types—yes-or-no, choices, and scores—and returns structured decision output such as a predicate with a probability.

Engineers can install the plugin with llm install llm-openai-decisions and try image queries immediately. The supplied evidence includes examples and API-shape comparisons but little implementation or evaluation detail.
