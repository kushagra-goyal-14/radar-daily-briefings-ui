---
story_id: story_76286854d01949549cbc2776d51631f2
authors: []
date: 2026-11-10
generated_at: 2026-11-10T07:30:07.356Z
source: simon-willison
section: ai
tags:
  - language-models
  - reasoning-models
  - ai-agents
  - llm-pricing
  - long-context
  - model-efficiency
title: Meta AI launches Muse Ember for efficient reasoning workloads
url: https://simonwillison.net/2026/Nov/10/muse-ember
why_read: Engineers evaluating model routing can compare Muse Ember’s context pricing, reasoning controls, and reported task-efficiency position.
status: released
source_published_at: 2026-11-10T07:28:21.000Z
source_external_id: https://simonwillison.net/2026/Nov/10/muse-ember/
source_adapter: atom
interest_score: 8
utility_score: 7
novelty_score: 7
depth_score: 5
impact_score: 7
---

Simon Willison reports that Meta AI launched Muse Ember, a small model designed for complex reasoning execution and repeated workloads such as tool calls, coding subtasks, routing, extraction, and long-document parsing.

The model supports up to one million input tokens and uses tiered pricing: the article lists higher rates above 200,000 tokens. Muse Ember also offers six reasoning levels, from minimal through max.

The article places Ember on the Artificial Analysis efficiency frontier for the compared models. However, it provides no architecture or reproducible methodology, and a hands-on SVG test found one incomplete result and inconsistent visual quality across reasoning levels.
