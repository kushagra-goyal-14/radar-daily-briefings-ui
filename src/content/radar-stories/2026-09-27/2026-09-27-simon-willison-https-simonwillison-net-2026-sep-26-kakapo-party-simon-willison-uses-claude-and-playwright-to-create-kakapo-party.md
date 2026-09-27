---
story_id: story_8c3a563b5c8d47edb968e45626af7da9
authors: []
date: 2026-09-27
generated_at: 2026-09-27T07:30:08.345Z
source: simon-willison
section: ai
tags:
  - generative-ai
  - pixel-art-animation
  - html5-canvas
  - browser-automation
  - playwright
  - claude-code
title: Simon Willison uses Claude and Playwright to create Kākāpō Party
url: https://simonwillison.net/2026/Sep/26/kakapo-party
why_read: The workflow shows how generated interactive browser content can be turned into a presentation-ready video with lightweight automation.
status: released
source_published_at: 2026-09-26T23:39:06.000Z
source_external_id: https://simonwillison.net/2026/Sep/26/kakapo-party/
source_adapter: atom
interest_score: 7
utility_score: 7
novelty_score: 6
depth_score: 6
impact_score: 3
---

Simon Willison describes creating “Kākāpō Party,” an HTML5 Canvas pixel-art animation generated with Claude Opus 5.5. He used photos as visual references and requested at least 20 kākāpō parrots jumping with confetti.

To embed the result in a Keynote presentation, he used a local Claude Code session with Playwright. The script launches Chromium, loads the local HTML file, performs timed clicks across a 1280-by-720 canvas, and records a 15-second video.

The case study provides a compact pattern for converting interactive generated content into presentation media. It is a single reported workflow, with no independent assessment of output quality or reproducibility.
