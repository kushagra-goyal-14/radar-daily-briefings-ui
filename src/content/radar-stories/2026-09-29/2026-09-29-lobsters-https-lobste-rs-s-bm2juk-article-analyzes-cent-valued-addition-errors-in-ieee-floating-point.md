---
story_id: story_99a9a6a6ff70483894e13cd494868139
authors:
  - blog.vero.site via abhin4v
date: 2026-09-29
generated_at: 2026-09-29T07:30:48.824Z
source: lobsters
section: programming
tags:
  - floating-point-arithmetic
  - rounding-errors
  - ieee-754
  - ulp-analysis
  - error-free-transformations
  - python
title: Article analyzes cent-valued addition errors in IEEE floating point
url: https://blog.vero.site/post/float
why_read: It gives engineers a rigorous way to reason about rounding behavior and inspect floating-point errors in precision-sensitive calculations.
status: unknown
source_published_at: 2026-09-29T03:07:39.000Z
source_external_id: https://lobste.rs/s/bm2juk
source_adapter: rss
discussion: https://lobste.rs/s/bm2juk/adding_floating_point_decimals_for_fun
discussions:
  - source: lobsters
    url: https://lobste.rs/s/bm2juk/adding_floating_point_decimals_for_fun
interest_score: 7
utility_score: 7
novelty_score: 7
depth_score: 9
impact_score: 6
---

The article examines why adding decimal quantities such as cents with binary floating-point numbers can produce rounding errors, including the familiar result that 0.1 + 0.2 is not exactly 0.3. It analyzes the resulting patterns for cent-valued additions.

Using IEEE double-precision structure, ulps, rounding-to-nearest behavior, and significand parity, the article derives bounds for comparing a floating-point sum with the floating representation of the exact decimal sum. Under its stated assumptions, the difference is at most one ulp.

The appendix presents 2Sum, Veltkamp splitting, and Dekker product techniques for error analysis. The treatment omits several floating-point cases and other precisions.
