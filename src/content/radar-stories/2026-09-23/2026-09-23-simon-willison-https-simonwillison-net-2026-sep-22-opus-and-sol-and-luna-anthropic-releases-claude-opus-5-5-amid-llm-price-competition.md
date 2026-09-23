---
story_id: story_fcbef8c22d2c4ca693a4a3182164acbe
authors: []
date: 2026-09-23
generated_at: 2026-09-23T07:30:30.323Z
source: simon-willison
section: ai
tags:
  - claude-opus-5-5
  - large-language-models
  - llm-pricing
  - reasoning-effort
  - agentic-workflows
title: Anthropic releases Claude Opus 5.5 amid LLM price competition
url: https://simonwillison.net/2026/Sep/22/opus-and-sol-and-luna
why_read: Engineers evaluating model deployments can compare documented pricing changes with observed reasoning-effort behavior and output limits.
status: released
source_published_at: 2026-09-22T23:46:41.000Z
source_external_id: https://simonwillison.net/2026/Sep/22/opus-and-sol-and-luna/
source_adapter: atom
discussions:
  - source: hacker-news
    url: https://news.ycombinator.com/item?id=49803892
interest_score: 8
utility_score: 7
novelty_score: 8
depth_score: 6
impact_score: 8
---

Anthropic has released Claude Opus 5.5 as the first model in its Claude 5.5 family. Anthropic says it performs at the level of Claude Fable 5.1 on most work and costs 40% less to run than Opus 5.

Simon Willison reports pricing of $4 per million input tokens and $20 per million output tokens, with cache reads at $0.20 per million tokens. He also reports that maximum thinking reached Opus 5.5's 128,000-token output limit twice during an SVG-generation test without returning a response.

The release matters for model-selection and cost planning, especially for agentic workloads using cached context. The behavioral result is anecdotal, based on two runs of one prompt, while Anthropic's performance claims are company-reported.
