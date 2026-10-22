---
story_id: story_6fcc0fd3a77f43f584a343d01b53d979
authors:
  - arxiv.org via juliethefoxcoon
date: 2026-10-22
generated_at: 2026-10-22T12:04:35.882Z
source: lobsters
section: research
tags:
  - llm-decompilation
  - behavioral-equivalence
  - fuzzing
  - vulnerability-detection
  - decompiler-evaluation
title: Decompile-Diverge tests behavioral divergence in LLM decompilers
url: https://arxiv.org/abs/2609.05370
why_read: Engineers evaluating LLM decompilers can measure behavioral agreement instead of treating successful recompilation as sufficient evidence.
status: experimental
source_published_at: 2026-10-12T02:44:55.000Z
source_external_id: https://lobste.rs/s/uzfa4k
source_adapter: rss
discussion: https://lobste.rs/s/uzfa4k/when_llm_decompilers_recompile_more
discussions:
  - source: lobsters
    url: https://lobste.rs/s/uzfa4k/when_llm_decompilers_recompile_more
interest_score: 8
utility_score: 8
novelty_score: 8
depth_score: 8
impact_score: 7
---

The paper proposes Decompile-Diverge, a behavioral comparison oracle for evaluating LLM-generated decompilations. It targets a gap left by recompilability and shipped input/output tests, which may miss behavior changes on other legitimate inputs.

The workflow synthesizes a driver for each function, grows a fuzzing corpus from the reference implementation, and runs the decompiled code on the same inputs. Across eight systems and nine configurations, the paper reports 4.9% overall divergence among candidates passing shipped tests, reaching 13% for one system.

The results indicate that higher build rates can coincide with lower behavioral agreement, while some disclosed vulnerability crashes disappear in output. The findings are limited to the supplied corpora and evaluated functions.
