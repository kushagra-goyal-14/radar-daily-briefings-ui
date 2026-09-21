---
story_id: story_3e92f0445ed54efabadab36003b13db4
authors:
  - lmbbuchodi
date: 2026-09-21
generated_at: 2026-09-21T07:30:28.060Z
source: hn
section: ai
tags:
  - cross-site-tracking
  - adtech
  - privacy-consent
  - third-party-cookies
  - identity-linking
  - chatgpt
title: Report details ChatGPT-linked cross-site tracking via OpenAI ad collector
url: https://www.buchodi.com/chatgpt-now-knows-what-you-do-on-other-websites-via-ad-collector
why_read: The report provides concrete cookie attributes, endpoints, payload sources, consent behavior, and browser limitations for privacy and telemetry review.
status: unknown
source_published_at: 2026-09-20T15:18:44.000Z
hn_id: "49776729"
comments: https://news.ycombinator.com/item?id=49776729
interest_score: 9
utility_score: 7
novelty_score: 8
depth_score: 9
impact_score: 8
---

A technical article reports that OpenAI’s `__obi` cookie can connect identifiers created during ChatGPT use with requests from advertiser websites. The author says the mechanism was reproduced on Chrome for Android.

The report describes short-lived RS256 JWTs, a one-year `.openai.com` cookie with `SameSite=None`, and advertiser SDK requests carrying the identifier. It also reports collection of page paths, location fields, and hashed identity values from page and tag-manager sources.

The author observed identifiers appearing across multiple advertisers, but did not directly observe server-side account resolution. Browser coverage was limited, and OpenAI Support did not answer the author’s stated questions.
