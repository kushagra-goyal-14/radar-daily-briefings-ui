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
  - privacy-leak
  - email-disclosure
  - user-agent
  - macos
  - built-in-plugin
title: Claude Code issue reports email disclosure in User-Agent requests
url: https://github.com/anthropics/claude-code/issues/107757
why_read: Engineers can assess the reported privacy behavior, available mitigation, and unresolved enforcement gap before relying on Claude Code web tools.
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

A GitHub issue reports that Claude Code disclosed a signed-in account email address in User-Agent headers while conducting web searches. The issue identifies Claude Code 2.1.318 on macOS and remains open in the supplied evidence.

A contributor says versions 2.1.317 and later include the enabled-by-default cc-plugin-privacy mod, which can ask before certain web-tool or curl-style commands containing the email. A follow-up reports that the mod did not refuse a no-network test case on versions 2.1.317 and 2.1.318.

The supplied material does not independently verify network disclosure or confirm a subsequent fix. Engineers should treat the report and quoted future-release plan as unresolved evidence.
