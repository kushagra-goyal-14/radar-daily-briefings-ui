---
story_id: story_5d2bb230517144beb5ab8157f2ea6a88
authors: []
date: 2026-08-05
generated_at: 2026-08-05T05:23:22.824Z
source: simon-willison
section: ai
tags:
  - llm-cli
  - reasoning-traces
  - server-side-tools
  - streaming-events
  - openai-responses-api
  - content-addressable-logging
title: LLM 0.32 releases reasoning traces, tools, and streaming events
url: https://simonwillison.net/2026/Aug/4/new-release-of-llm
why_read: Engineers can assess new interfaces for tool-using workflows, compatible endpoints, plugin upgrades, and more efficient conversation logging.
status: released
source_published_at: 2026-08-04T23:58:24.000Z
source_external_id: https://simonwillison.net/2026/Aug/4/new-release-of-llm/#atom-everything
source_adapter: atom
interest_score: 8
utility_score: 9
novelty_score: 8
depth_score: 8
impact_score: 7
---

Simon Willison has released LLM 0.32, a major update to the LLM CLI and Python library. It adds visible reasoning traces, server-side provider tools, OpenAI Responses API features, new models, and structured streaming events.

The Python API now accepts complete message histories through model.prompt(messages=[]), while stream_events() exposes reasoning, text, tool, and other event types. A content-addressable message store reduces duplicated conversation logging, and the llm openai endpoint command targets compatible APIs without logging those requests.

Tool chains can pause for human approval and resume from stored history. Plugins providing extra models need updates for full streaming-events support.
