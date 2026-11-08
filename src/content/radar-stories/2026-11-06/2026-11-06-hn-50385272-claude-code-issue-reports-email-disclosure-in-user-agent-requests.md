---
story_id: story_36fbd7a43e954d288415818bfe5abaf3
authors:
  - motoroco
date: 2026-11-06
generated_at: 2026-11-06T07:30:10.088Z
source: hn
section: security
tags:
  - claude-code
  - email-disclosure
  - user-agent
  - privacy-mod
  - macos
  - web-search
title: Claude Code issue alleges email disclosure through User-Agent headers
url: https://github.com/anthropics/claude-code/issues/107757
why_read: Engineers can assess the reported disclosure path, mitigation coverage, and unresolved gap between documented protections and observed behavior.
status: unknown
source_published_at: 2026-11-05T22:17:15.000Z
hn_id: "50385272"
comments: https://news.ycombinator.com/item?id=50385272
interest_score: 8
utility_score: 7
novelty_score: 7
depth_score: 6
impact_score: 7
---

An open Claude Code issue alleges that the tool can place a signed-in user’s email address in a User-Agent header while conducting web searches or running curl-style commands. The report concerns macOS and version 2.1.318.

A contributor says versions 2.1.317 and later include the built-in cc-plugin-privacy mod, enabled by default and configurable through `/plugins`. However, another user reports that documented test inputs were not refused in desktop and terminal runs, despite the mod appearing enabled.

A comment attributed to an Anthropic employee says the email will be removed from the model context in a forthcoming release. The supplied evidence does not establish release status, broader scope, or independent reproduction.
