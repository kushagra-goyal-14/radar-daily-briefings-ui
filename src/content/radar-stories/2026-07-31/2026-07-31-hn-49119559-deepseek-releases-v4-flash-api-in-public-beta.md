---
story_id: story_64db943182e04f16a4acfed136f6f1d2
authors:
  - dnhkng
date: 2026-07-31
generated_at: 2026-07-31T08:47:28.404Z
source: hn
section: ai
tags:
  - deepseek-v4-flash
  - api-release
  - agent-capabilities
  - responses-api
  - public-beta
title: DeepSeek releases V4-Flash API in public beta
url: https://api-docs.deepseek.com/updates
why_read: Engineers can evaluate the beta using the unchanged model parameter while accounting for limited benchmark methodology and internal test sets.
status: released
source_published_at: 2026-07-31T06:08:36.000Z
hn_id: "49119559"
comments: https://news.ycombinator.com/item?id=49119559
interest_score: 8
utility_score: 7
novelty_score: 7
depth_score: 6
impact_score: 7
---

DeepSeek has released the DeepSeek-V4-Flash API in public beta. Existing API calling remains unchanged: users select the model with the name deepseek-v4-flash.

The release natively supports the Responses API format and is adapted for Codex. DeepSeek-V4-Flash-0731 keeps the same architecture and size as V4-Flash-Preview and was post-trained. DeepSeek reports results across agent and coding benchmarks, including Terminal Bench 2.1 at 82.7 and NL2Repo at 54.2.

Engineers can evaluate the model without changing the calling method, but should treat the release as beta. The supplied evidence offers testing configuration but limited methodology, and two listed benchmarks are internal test sets.
