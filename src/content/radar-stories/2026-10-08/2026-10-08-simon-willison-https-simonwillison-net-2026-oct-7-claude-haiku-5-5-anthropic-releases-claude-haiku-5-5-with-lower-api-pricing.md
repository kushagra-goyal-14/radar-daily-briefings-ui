---
story_id: story_d9e2963d03dc4adc9878832cd18e9b5a
authors: []
date: 2026-10-08
generated_at: 2026-10-08T07:30:44.053Z
source: simon-willison
section: ai
tags:
  - claude-haiku
  - llm-pricing
  - tokenization
  - reasoning-effort
  - api-credits
  - anthropic
title: Anthropic releases Claude Haiku 5.5 with lower API pricing
url: https://simonwillison.net/2026/Oct/7/claude-haiku-5-5
why_read: Engineers evaluating LLM workloads should account for tokenization, context-length pricing, reasoning effort, and subscription API credits.
status: released
source_published_at: 2026-10-07T20:56:21.000Z
source_external_id: https://simonwillison.net/2026/Oct/7/claude-haiku-5-5/
source_adapter: atom
discussions:
  - source: hacker-news
    url: https://news.ycombinator.com/item?id=49996437
interest_score: 8
utility_score: 8
novelty_score: 6
depth_score: 6
impact_score: 7
---

Anthropic has released Claude Haiku 5.5 as a fast, lower-cost model for high-volume and cost-sensitive workloads. Anthropic says it costs around 75% less to run than Haiku 4.5 on average.

The supplied testing reports API prices of $0.10 per million input tokens and $0.50 per million output tokens up to 100,000 tokens, with fivefold higher rates beyond that point. It also observed roughly 1.25 times as many tokens for the same long prompt and default medium reasoning effort.

Anthropic is adding monthly API credits for Max and Team subscribers, but credits do not roll over. Comparative measurements have limited methodology.
