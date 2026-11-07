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
title: Claude Code issue reports email disclosure in web requests
url: https://github.com/anthropics/claude-code/issues/107757
why_read: Engineers can assess potential email exposure, affected request paths, and the reported limits of Claude Code’s built-in mitigation.
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

An open Claude Code issue reports that a signed-in account email address appeared in User-Agent request headers while the tool conducted web searches. The report identifies macOS and version 2.1.318, but does not establish the issue’s full scope.

An Anthropic contributor says versions 2.1.317 and later include an enabled-by-default `cc-plugin-privacy` mod that prompts before certain web-tool or curl-style calls containing the email. A follow-up says tested desktop and terminal cases still ran.

Engineers should treat the issue as unresolved evidence about privacy enforcement, not a confirmed advisory. The supplied material lacks independent network validation and notes that the quoted future-release statement may not be from an authorized employee.
