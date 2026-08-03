---
story_id: story_eed2c8c2b75b40d2a4d17b86b249df84
authors:
  - eighty-twenty.org by tonyg
date: 2026-08-03
generated_at: 2026-08-03T14:13:27.144Z
source: lobsters
section: programming
tags:
  - plt-redex
  - operational-semantics
  - lambda-calculus
  - racket
  - evaluation-contexts
  - formal-language-modeling
title: Modelling Actors with Redex begins with an ISWIM semantics model
url: https://eighty-twenty.org/2016/08/18/redex-iswim
why_read: Engineers can reuse the executable Redex techniques for specifying, testing, and debugging operational semantics.
status: released
source_published_at: 2026-08-03T13:41:57.000Z
source_external_id: https://lobste.rs/s/rsrjaq
source_adapter: rss
discussion: https://lobste.rs/s/rsrjaq/modelling_actors_with_redex_part_i
discussions:
  - source: lobsters
    url: https://lobste.rs/s/rsrjaq/modelling_actors_with_redex_part_i
interest_score: 7
utility_score: 8
novelty_score: 7
depth_score: 8
impact_score: 5
---

The first article in a three-part series builds a runnable model of an ISWIM-style functional programming language using PLT Redex. The source is presented as a literate Racket file that readers can download and run.

The model defines S-expression syntax, values, primitive operations, evaluation contexts, reduction rules, recursive unfolding, and binding declarations for lambda and rec. Evaluation contexts establish left-to-right reduction order, while Redex supplies substitution-related machinery from the declared binding structure.

Examples and unit tests exercise arithmetic, pairs, recursion, and conditionals. Actor-specific imperative actions are deferred to Part II, and the grammar currently permits stuck empty begin expressions.
