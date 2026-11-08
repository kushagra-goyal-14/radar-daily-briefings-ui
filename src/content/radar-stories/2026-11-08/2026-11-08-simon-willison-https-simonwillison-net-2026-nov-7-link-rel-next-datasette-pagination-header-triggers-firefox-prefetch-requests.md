---
story_id: story_f98c29733a914226bfe6e221a485b73d
authors: []
date: 2026-11-08
generated_at: 2026-11-08T07:30:22.123Z
source: simon-willison
section: web-development
tags:
  - datasette
  - firefox-prefetching
  - http-link-header
  - pagination
  - html-pages
title: Datasette pagination header triggers Firefox prefetch requests
url: https://simonwillison.net/2026/Nov/7/link-rel-next
why_read: Engineers serving paginated HTML can assess whether rel="next" headers create avoidable work for Firefox visitors.
status: unknown
source_published_at: 2026-11-07T23:57:46.000Z
source_external_id: https://simonwillison.net/2026/Nov/7/link-rel-next/
source_adapter: atom
interest_score: 5
utility_score: 5
novelty_score: 6
depth_score: 4
impact_score: 4
---

Simon Willison reports that Firefox prefetches the next page of rows from Datasette HTML table pages. The behavior occurs when the response includes an HTTP Link header with rel="next".

The example header points to the next paginated table URL. In the reported observation, Firefox requests that URL before the visitor clicks the next link, causing Datasette to render data that may be discarded.

This matters for engineers serving paginated HTML because the header can create avoidable browser and server work. The post links the behavior to a long-standing Firefox issue, but supplies no fix or remediation.
