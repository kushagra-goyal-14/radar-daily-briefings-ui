---
story_id: story_5ffde4543df5477f91ebd2706be188bf
authors: []
date: 2026-10-02
generated_at: 2026-10-02T07:30:17.931Z
source: simon-willison
section: web-development
tags:
  - http-vary
  - cache-behavior
  - content-negotiation
  - cloudflare-caching
title: Cloudflare reportedly ships support for HTTP Vary caching
url: https://simonwillison.net/2026/Sep/23/hn-49823961
why_read: Web engineers can assess whether Vary-aware edge caching changes the risks of serving multiple representations from one URL.
status: released
source_published_at: 2026-09-23T23:14:57.000Z
source_external_id: https://simonwillison.net/2026/Sep/23/hn-49823961/
source_adapter: atom
interest_score: 7
utility_score: 7
novelty_score: 7
depth_score: 3
impact_score: 7
---

Simon Willison reports that Cloudflare has shipped support for the HTTP Vary header beyond image responses. The reported capability addresses edge caching for applications that negotiate representations such as HTML and JSON.

The post describes a prior failure mode: when clients sent different Accept headers, Cloudflare could ignore Vary and cache one representation for users expecting another. Vary-aware caching is presented as the change that addresses this scenario.

The supplied evidence does not include configuration instructions, benchmarks, or compatibility details, and it is not an official Cloudflare announcement. Willison says he still prefers predictable URL suffixes for JSON responses.
