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
  - reasoning-levels
  - agentic-workflows
title: Anthropic releases Claude Opus 5.5 amid LLM price competition
url: https://simonwillison.net/2026/Sep/22/opus-and-sol-and-luna
why_read: Engineers evaluating model cost and reliability should weigh Opus 5.5’s lower pricing against observed maximum-reasoning failures.
status: released
source_published_at: 2026-09-22T23:46:41.000Z
source_external_id: https://simonwillison.net/2026/Sep/22/opus-and-sol-and-luna/
source_adapter: atom
discussions:
  - source: hacker-news
    url: https://news.ycombinator.com/item?id=49803892
interest_score: 8
utility_score: 7
novelty_score: 6
depth_score: 6
impact_score: 7
---

Anthropic has released Claude Opus 5.5, the first model in its Claude 5.5 family. Anthropic says it matches Claude Fable 5.1 on most work and costs 40% less to run than Opus 5.

The primary article lists pricing of $4 per million input tokens and $20 per million output tokens, with cache reads reduced from the prior Opus pricing. Simon Willison also reports that maximum reasoning twice exhausted Opus 5.5’s 128,000-token output limit during an SVG-generation test.

The release is relevant to model and cost selection, but the failure evidence is narrow and the broader performance claims rely on company testing and informal observations.
