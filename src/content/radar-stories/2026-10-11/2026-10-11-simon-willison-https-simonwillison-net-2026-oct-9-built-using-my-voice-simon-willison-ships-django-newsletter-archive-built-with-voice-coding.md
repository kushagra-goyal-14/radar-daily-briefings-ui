---
story_id: story_01cfad1ee3fa495281de99801c492810
authors: []
date: 2026-10-11
generated_at: 2026-10-11T07:30:32.006Z
source: simon-willison
section: ai
tags:
  - voice-coding
  - coding-agents
  - django
  - newsletter-archive
  - github-api
  - site-search
title: Simon Willison ships Django newsletter archive built with voice coding
url: https://simonwillison.net/2026/Oct/9/built-using-my-voice
why_read: The case study shows where voice-driven coding agents accelerate feature work and where typed review remains necessary.
status: released
source_published_at: 2026-10-09T12:54:06.000Z
source_external_id: https://simonwillison.net/2026/Oct/9/built-using-my-voice/
source_adapter: atom
interest_score: 8
utility_score: 7
novelty_score: 7
depth_score: 7
impact_score: 5
---

Simon Willison reports that he shipped a new Django newsletter archive after building most of it through voice conversations with ChatGPT desktop Codex. The completed feature includes public archive pages and production deployment through a landed pull request.

The implementation added a Django model and migration, importers for Substack and GitHub sources, date-based archive integration, and site-search support. Codex generated the initial implementation while Willison reviewed a local visual preview and later replaced a Git subprocess with an API-based private-repository import.

Willison presents voice interaction as useful for multitasking, especially while cooking. He says typing remained more efficient for detailed corrections, pasted examples, error messages, and directly targeted code changes.
