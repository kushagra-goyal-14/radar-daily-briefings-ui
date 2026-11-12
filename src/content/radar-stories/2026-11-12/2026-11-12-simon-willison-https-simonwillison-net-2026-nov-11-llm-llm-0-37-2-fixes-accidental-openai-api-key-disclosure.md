---
story_id: story_6b87548bdc01424e9ebead19d2bfd18a
authors: []
date: 2026-11-12
generated_at: 2026-11-12T07:30:31.469Z
source: simon-willison
section: security
tags:
  - llm-cli
  - api-key-leakage
  - openai-compatible-apis
  - security-fix
  - model-endpoints
title: llm 0.37.2 fixes accidental OpenAI API key disclosure
url: https://simonwillison.net/2026/Nov/11/llm
why_read: Operators using compatible model endpoints can identify exposed configurations and update to the release containing the documented fix.
status: released
source_published_at: 2026-11-11T17:19:52.000Z
source_external_id: https://simonwillison.net/2026/Nov/11/llm/
source_adapter: atom
interest_score: 8
utility_score: 9
novelty_score: 6
depth_score: 6
impact_score: 7
---

llm 0.37.2 is a released update that fixes security issues reported in GHSA-v9h7-jj4g-f862 and GHSA-r639-rr7r-x72w. The release concerns configurations that use OpenAI-compatible API endpoints from other providers.

According to the release description, a configured OpenAI API key could be sent to one of those providers if the key named by api_key_name had never been stored. A second path involved running a responses: true model with -o chat_completions 1.

The update also introduces the llm openai endpoint add command for managing these endpoints. The supplied evidence does not include implementation or testing details, nor does it establish exploitation.
