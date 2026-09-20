---
story_id: story_b3c15681c7de4cd2ad1ab6ada15678c7
authors:
  - jcbhmr
date: 2026-09-20
generated_at: 2026-09-20T07:30:43.471Z
source: hn
section: infrastructure
tags:
  - quick-tunnels
  - outbound-tunneling
  - local-development
  - webhooks
  - coding-agents
  - structured-output
title: Cloudflare releases Quick Tunnels for ephemeral public URLs
url: https://try.cloudflare.com/
why_read: Engineers can quickly share local services, webhooks, and evaluation harnesses while keeping tunnel lifecycle tied to the process.
status: released
source_published_at: 2026-09-18T14:18:41.000Z
hn_id: "49754785"
comments: https://news.ycombinator.com/item?id=49754785
interest_score: 7
utility_score: 8
novelty_score: 6
depth_score: 4
impact_score: 6
---

Cloudflare's Quick Tunnels provide a released workflow for exposing a local web server through a public HTTPS URL. The page says setup requires one cloudflared command and no account, DNS configuration, or inbound port.

Cloudflare says cloudflared opens an outbound-only connection to its edge, forwarding traffic back to the local machine. The page also describes structured JSON output for hostname, edge, and health, plus webhook-ready and ephemeral workflows for coding agents.

This can simplify sharing local services, screenshots, webhooks, and evaluation harnesses. However, the supplied material is promotional and gives limited architectural, performance, and operational detail.
