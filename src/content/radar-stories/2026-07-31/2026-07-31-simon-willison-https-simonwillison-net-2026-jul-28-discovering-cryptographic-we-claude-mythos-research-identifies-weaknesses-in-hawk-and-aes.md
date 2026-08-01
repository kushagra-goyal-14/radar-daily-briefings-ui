---
story_id: story_6b6ca88668704acebcd384c96a16b73b
authors: []
date: 2026-07-31
generated_at: 2026-07-31T23:35:24.629Z
source: simon-willison
section: ai
tags:
  - cryptanalysis
  - cryptographic-weaknesses
  - claude-mythos
  - cryptanalysisbench
  - prompt-engineering
title: Claude Mythos research identifies weaknesses in HAWK and AES
url: https://simonwillison.net/2026/Jul/28/discovering-cryptographic-weaknesses-with-claude
why_read: The report provides concrete evidence about prompting, human intervention, runtime, cost, and evaluation design for LLM-assisted cryptanalysis.
status: unknown
source_published_at: 2026-07-28T22:45:37.000Z
source_external_id: https://simonwillison.net/2026/Jul/28/discovering-cryptographic-weaknesses-with-claude/#atom-everything
source_adapter: atom
interest_score: 8
utility_score: 6
novelty_score: 8
depth_score: 7
impact_score: 6
---

Simon Willison reports that Anthropic researchers used Claude Mythos to identify mathematical flaws in HAWK and a weaker version of AES. The reported findings do not practically affect today’s computer systems.

The system reportedly ran for about 60 hours at an estimated API cost of $100,000. Human researchers mainly encouraged it to persist, while shared prompts show repeated efforts to steer it toward difficult, publishable cryptanalysis rather than easier results.

The work also produced CryptanalysisBench, an LLM cryptanalysis evaluation developed with ETH Zurich, Tel Aviv University, and the University of Haifa. The supplied evidence is a link post rather than the underlying paper or repository.
