---
story_id: story_55ddebaea97842af964603192631b780
authors: []
date: 2026-09-18
generated_at: 2026-09-18T12:59:01.124Z
source: hugging-face-blog
section: ai
tags:
  - agent-reliability
  - consistency-gap
  - agent-evaluation
  - trajectory-analysis
  - consistency-analyzer
  - guideline-generation
title: ALTK-Evolve adds consistency analysis for agent reliability
url: https://huggingface.co/blog/ibm-research/altk-evolve-consistency
why_read: Engineers can evaluate repeatability with Pass^k and diagnose unstable trajectory decisions without replaying tasks end to end.
status: released
source_published_at: 2026-09-15T16:00:44.000Z
source_external_id: https://huggingface.co/blog/ibm-research/altk-evolve-consistency
source_adapter: rss
interest_score: 8
utility_score: 8
novelty_score: 8
depth_score: 8
impact_score: 7
---

An IBM Research article introduces Consistency Analyzer and consistency guidelines for ALTK-Evolve, with the goal of measuring and reducing variability across repeated agent runs. The associated open-source repository is reported to include the implementation used in the experiments.

The analyzer replays decision points from one recorded trajectory and requests multiple completions, identifying steps where small output changes may alter the path. It requires no ground truth, model internals, new tool calls, or end-to-end environment replay.

On 168 AppWorld test_normal tasks using GPT-4.1, the article reports that guidelines reduced the consistency gap from 24.4 to 12.0 percentage points while increasing Pass^5 from 53.0% to 69.0%. These results are benchmark-specific and supplied without independent validation.
