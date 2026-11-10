---
story_id: story_c8dc0150e69f45fea383caedce1e467e
authors: []
date: 2026-11-10
generated_at: 2026-11-10T07:30:07.356Z
source: simon-willison
section: ai
tags:
  - prompt-engineering
  - generative-ai
  - llm-coding
  - code-refactoring
  - claude-fable
title: Anthropic reports ownership prompting changes Claude Fable 5.2 refactoring
url: https://simonwillison.net/2026/Nov/10/prompting-claude-fable-52
why_read: The reported prompt wording offers a directly testable technique for encouraging structural code improvements, with limited evidence scope.
status: unknown
source_published_at: 2026-11-10T05:34:14.000Z
source_external_id: https://simonwillison.net/2026/Nov/10/prompting-claude-fable-52/
source_adapter: atom
interest_score: 7
utility_score: 7
novelty_score: 6
depth_score: 5
impact_score: 6
---

Simon Willison quotes Anthropic documentation describing how Claude Fable 5.2 responds to code-ownership framing. Anthropic reports that, in small coding tasks, the model tended to add to an existing structure when ownership was unspecified or assigned elsewhere.

The quoted prompt tells the model that the codebase is its own and that it controls how the code is built. Anthropic says the model merged repeated code in about half of trials with this instruction, compared with under a tenth without it.

The technique is directly testable in AI-assisted coding workflows, but the supplied evidence lacks sample size, task-selection details, and methodology.
