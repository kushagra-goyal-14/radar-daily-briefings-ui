---
story_id: story_d9f7e7e1b202430aab8e072b65ca42d6
authors: []
date: 2026-11-10
generated_at: 2026-11-10T07:30:07.356Z
source: simon-willison
section: ai
tags:
  - anthropic-models
  - llm-cli
  - claude-api
  - model-pricing
  - reasoning-levels
  - model-integration
title: llm-anthropic 0.31 adds Anthropic Fable and Mythos 5.2
url: https://simonwillison.net/2026/Nov/9/llm-anthropic
why_read: Engineers evaluating Anthropic access can compare integration steps, pricing, model identifiers, and observed token-limit behavior.
status: released
source_published_at: 2026-11-09T23:58:46.000Z
source_external_id: https://simonwillison.net/2026/Nov/9/llm-anthropic/
source_adapter: atom
interest_score: 7
utility_score: 7
novelty_score: 6
depth_score: 5
impact_score: 6
---

Simon Willison reports the release of llm-anthropic 0.31, adding Anthropic’s Fable 5.2 and Mythos 5.2 models. The article includes commands for installing llm and llm-anthropic, configuring an Anthropic key, and running a Fable prompt.

The reported pricing for Fable 5.2 is $8 per million input tokens and $40 per million output tokens. Willison tested low through maximum reasoning levels while generating an SVG, and reports that maximum effort consumed 128,000 thinking tokens without returning an image.

The release gives engineers a practical integration path and budgeting reference. The testing is anecdotal, with no systematic benchmark methodology or independent corroboration supplied.
