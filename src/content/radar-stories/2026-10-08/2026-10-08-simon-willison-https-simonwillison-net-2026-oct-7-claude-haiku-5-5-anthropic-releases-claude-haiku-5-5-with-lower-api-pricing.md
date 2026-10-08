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
  - api-credits
  - reasoning-effort
  - tokenization
  - model-release
title: Anthropic releases Claude Haiku 5.5 with lower API pricing
url: https://simonwillison.net/2026/Oct/7/claude-haiku-5-5
why_read: Engineers can assess model-cost tradeoffs by combining published pricing with tokenization overhead, context-length tiers, and reasoning-effort behavior.
status: released
source_published_at: 2026-10-07T20:56:21.000Z
source_external_id: https://simonwillison.net/2026/Oct/7/claude-haiku-5-5/
source_adapter: atom
discussions:
  - source: hacker-news
    url: https://news.ycombinator.com/item?id=49996437
interest_score: 8
utility_score: 8
novelty_score: 7
depth_score: 6
impact_score: 7
---

Anthropic has released Claude Haiku 5.5 as a fast, lower-cost model for high-volume and cost-sensitive tasks. Anthropic says it costs around 75% less to run than Haiku 4.5 and is intended for workloads including summaries, classification, database queries, and agent sub tasks.

Simon Willison reports API pricing of $0.10/$0.50 per million input/output tokens up to 100,000 tokens, with five-times-higher rates beyond that threshold. He also observed roughly 1.25 times as many tokens for the same long prompt compared with Haiku 4.5.

Anthropic is also adding monthly API credits for Max and Team subscribers and reducing Sonnet 5.5 cache-read pricing. The supplied generation tests are informal and narrow.
