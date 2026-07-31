---
story_id: story_f02bdf1906494dce8b9a15623cf8e2d9
authors: []
date: 2026-07-31
generated_at: 2026-07-31T08:47:28.404Z
source: simon-willison
section: security
tags:
  - prompt-injection
  - ai-worm
  - microsoft-word
  - copilot
  - self-replication
  - document-security
title: Self-replicating prompt injection targets Copilot for Word workflows
url: https://simonwillison.net/2026/Jul/29/ai-worming-through-word
why_read: The propagation mechanism highlights document-carrier risks for enterprise Copilot workflows and the limits of current mitigations.
status: unknown
source_published_at: 2026-07-29T18:43:03.000Z
source_external_id: https://simonwillison.net/2026/Jul/29/ai-worming-through-word/#atom-everything
source_adapter: atom
interest_score: 8
utility_score: 6
novelty_score: 8
depth_score: 5
impact_score: 7
---

Simon Willison describes a prompt-injection variant targeting Microsoft Word documents used with Copilot for Word. Hidden instructions can be interpreted as part of a user request and influence document editing.

The described attack copies those instructions into the resulting document, turning it into a new carrier. If that document enters another Copilot-assisted workflow, the instructions may trigger again and propagate further, even without the original attacker-controlled document.

The issue was responsibly disclosed to Microsoft. Willison reports that no mitigation covers the full class of attack, while the supplied article provides no reproduction, prevalence estimate, or independent assessment.
