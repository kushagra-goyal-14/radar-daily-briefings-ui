---
story_id: story_4515b18a94134e458d0c889bffe393b2
authors:
  - Jonathan Bossenger
date: 2026-07-31
generated_at: 2026-07-31T06:15:12.609Z
source: wordpress-developer-blog
section: wordpress
tags:
  - wordpress-ai
  - abilities-api
  - plugin-development
  - ai-integration
  - rest-api
  - mcp
title: WordPress tutorial builds an AI-powered Photo to Post plugin
url: https://developer.wordpress.org/news/2026/07/build-your-first-ai-powered-wordpress-plugin
why_read: It gives plugin developers a concrete pattern for composing provider-agnostic AI abilities across PHP, JavaScript, REST, and MCP.
status: released
source_published_at: 2026-07-30T17:39:44.000Z
source_external_id: https://developer.wordpress.org/news/?p=6323
source_adapter: rss
interest_score: 7
utility_score: 8
novelty_score: 6
depth_score: 7
impact_score: 6
---

WordPress has published a tutorial for building Photo to Post, a plugin that accepts an image URL, generates an AI description, creates post title and content, and saves a draft with the original image as its featured image.

The implementation uses three composable Abilities: one for vision-based image description, one for text generation, and one that orchestrates both. The WordPress AI Client supplies a provider-agnostic PHP interface, while schemas and permission callbacks describe each ability.

The tutorial shows the same ability being used through authenticated REST endpoints, a dashboard interface, and an MCP-connected AI agent. It requires WordPress 7.0+, PHP 8.1+, build tooling, credentials, and a vision-capable model.
