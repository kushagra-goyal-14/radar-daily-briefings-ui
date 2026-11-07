---
story_id: story_6d05ce684d9c40e09f78f7eb1e0e79b9
authors:
  - lkoskela.fi via cameron
date: 2026-11-07
generated_at: 2026-11-07T07:30:24.652Z
source: lobsters
section: security
tags:
  - forwarded-header
  - header-spoofing
  - trusted-proxies
  - reverse-proxy
  - rfc-7239
title: Article finds Forwarded header trust mismatches in web stacks
url: https://www.lkoskela.fi/blog/2026-11-05-forwarded-without-question
why_read: It gives engineers concrete configuration guidance for reducing proxy-header spoofing across application and reverse-proxy stacks.
status: unknown
source_published_at: 2026-11-07T06:18:48.000Z
source_external_id: https://lobste.rs/s/m5kism
source_adapter: rss
discussion: https://lobste.rs/s/m5kism/forwarded_without_question_how_web
discussions:
  - source: lobsters
    url: https://lobste.rs/s/m5kism/forwarded_without_question_how_web
interest_score: 8
utility_score: 8
novelty_score: 7
depth_score: 8
impact_score: 7
---

Lauri Koskela’s article examines how web frameworks and reverse proxies handle RFC 7239’s Forwarded header. It reports that several frameworks, including Rails, Spring, and Jetty, can prioritize Forwarded values, while many proxies pass client-supplied values through unchanged.

That mismatch can let attackers spoof client IP addresses, host names, or protocols when applications trust the forwarded metadata. The article describes testing documentation, source code, local applications, and conflicting header combinations across selected stacks.

It recommends aligning proxy and application configurations, dropping or overwriting untrusted headers, and disabling Forwarded support when it is unnecessary. The sample is non-exhaustive, and newer releases may differ.
