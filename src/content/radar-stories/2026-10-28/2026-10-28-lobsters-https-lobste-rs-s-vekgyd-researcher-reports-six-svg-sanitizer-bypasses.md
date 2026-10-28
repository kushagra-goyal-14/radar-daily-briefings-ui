---
story_id: story_42835ce984e741d68cbfa46920abaaea
authors:
  - portswigger.net via buherator
date: 2026-10-28
generated_at: 2026-10-28T07:30:13.004Z
source: lobsters
section: security
tags:
  - svg-sanitization
  - cross-site-scripting
  - browser-security
  - xslt-injection
  - xml-namespaces
  - svg-upload-security
title: Researcher reports six SVG sanitizer bypasses
url: https://portswigger.net/research/scalable-vector-grief
why_read: Engineers handling SVG uploads can use the affected-library and browser behaviors to test sanitizer assumptions and review execution boundaries.
status: unknown
source_published_at: 2026-10-28T07:26:03.000Z
source_external_id: https://lobste.rs/s/vekgyd
source_adapter: rss
discussion: https://lobste.rs/s/vekgyd/scalable_vector_grief
discussions:
  - source: lobsters
    url: https://lobste.rs/s/vekgyd/scalable_vector_grief
interest_score: 8
utility_score: 8
novelty_score: 8
depth_score: 9
impact_score: 7
---

Gareth Heyes reports bypassing six of eight tested SVG sanitizers in research published by PortSwigger. The article describes JavaScript execution techniques involving SVG uploads and browser parsing behavior.

Reported methods include XML namespace confusion, animation into JavaScript URLs, self-contained XSLT stylesheets, and a Firefox response-header technique. The research also describes Safari importing image files as SVG through the use element, affecting several named libraries.

The findings give engineers concrete cases for testing SVG handling and browser-specific assumptions. The supplied evidence does not establish a confirmed CVE or advisory, and the article says DOMPurify and darylldoyle/svg-sanitizer resisted the described techniques.
