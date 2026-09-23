---
story_id: story_73566dc9e6b64364993ae511169a7350
authors: []
date: 2026-09-23
generated_at: 2026-09-23T07:30:30.323Z
source: hugging-face-blog
section: ai
tags:
  - evaluation-reproducibility
  - benchmark-reporting
  - evaluation-cards
  - every-eval-ever
  - inference-compute
  - evaluation-infrastructure
title: UK AISI adopts EvalEval infrastructure for reproducible benchmarks
url: https://huggingface.co/blog/evaleval-aisi
why_read: Engineers can inspect evaluation setup and configuration details when comparing benchmark results produced under different protocols and inference-compute budgets.
status: released
source_published_at: 2026-09-22T00:00:00.000Z
source_external_id: https://huggingface.co/blog/evaleval-aisi
source_adapter: rss
interest_score: 8
utility_score: 8
novelty_score: 7
depth_score: 6
impact_score: 7
---

The UK AI Security Institute is using EvalEval’s infrastructure to publish evaluation methods, findings, configuration information, and verified results through Evaluation Cards. The release covers five benchmarks and six frontier models, plus two related cyber evaluations.

The shared Every Eval Ever schema organizes benchmark metadata, evaluation-run data, model metadata, and contextual information. The article says this structure supports transcript-level transparency and comparison across different evaluation setups. It also reports that Humanity’s Last Exam performance varies with evaluation protocol and inference-time compute.

The release gives engineers more context for interpreting benchmark claims and examining individual studies. However, the supplied article offers limited implementation detail, and the cyber results use a different, partially overlapping model set.
