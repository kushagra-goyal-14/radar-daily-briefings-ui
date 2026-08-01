---
story_id: story_41bb513344374a8cb7b1577c452510be
authors: []
date: 2026-08-01
generated_at: 2026-08-01T00:03:51.221Z
source: simon-willison
section: ai
tags:
  - kimi-k3
  - large-language-model
  - open-weights
  - model-licensing
  - model-as-a-service
  - llm-pricing
title: Moonshot releases open weights for 2.8T-parameter Kimi K3
url: https://simonwillison.net/2026/Jul/27/kimi-k3
why_read: The release combines substantial infrastructure requirements with licensing terms that may affect commercial deployment and hosted-model businesses.
status: released
source_published_at: 2026-07-27T23:39:04.000Z
source_external_id: https://simonwillison.net/2026/Jul/27/kimi-k3/#atom-everything
source_adapter: atom
interest_score: 8
utility_score: 6
novelty_score: 7
depth_score: 4
impact_score: 7
---

Simon Willison reports that Moonshot released the weights for Kimi K3, a 2.8 trillion-parameter language model. The weights total 1.56 TB on Hugging Face, making this a released open-weight model rather than a merely announced project.

The K3 license adds a commercial condition for Model-as-a-Service businesses: qualifying licensees and affiliates must enter a separate agreement with Moonshot before commercial use. The article also reports access through seven OpenRouter providers, mostly priced at $3 per million input tokens and $15 per million output tokens.

Engineers evaluating deployment must account for storage, hosted inference pricing, and licensing. The supplied coverage includes no architecture, benchmark methodology, performance results, or independent confirmation of the license terms.
