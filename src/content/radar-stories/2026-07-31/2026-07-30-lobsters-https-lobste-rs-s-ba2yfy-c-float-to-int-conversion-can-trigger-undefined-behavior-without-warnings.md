---
story_id: story_93cc91d099534f469a2f72d9392e55d7
authors:
  - kttnr.net via classichasclass
date: 2026-07-31
generated_at: 2026-07-31T05:46:48.707Z
source: lobsters
section: programming
tags:
  - cpp-undefined-behavior
  - float-to-int-conversion
  - type-safety
  - c-plus-plus
  - gsl-narrow
  - ubsan
title: C++ float-to-int casts can trigger undefined behavior
url: https://kttnr.net/blog/cpp-float-to-int-conversion-undefined-behavior
why_read: C++ developers can identify a subtle casting hazard and apply bounds checks or sanitizer coverage before relying on conversion behavior.
status: unknown
source_published_at: 2026-07-30T03:47:26.000Z
source_external_id: https://lobste.rs/s/ba2yfy
source_adapter: rss
discussion: https://lobste.rs/s/ba2yfy/c_float_int_conversion_can_be_undefined
discussions:
  - source: lobsters
    url: https://lobste.rs/s/ba2yfy/c_float_int_conversion_can_be_undefined
interest_score: 6
utility_score: 6
novelty_score: 5
depth_score: 7
impact_score: 5
---

A technical article warns that C++ float-to-int conversions have undefined behavior when the truncated value cannot fit the destination integer type. It reports that this affects implicit conversions, C-style casts, and static_cast.

The article further claims that Microsoft's Guidelines Support Library function gsl::narrow does not prevent this case, despite its documented purpose. It notes that x86 and AArch64 instructions may produce different results for unrepresentable inputs, making apparently benign behavior unreliable.

The recommended mitigation is to bounds-check before casting and use Clang or GCC UBSan with float-cast-overflow detection. The article states that the GSL problem has not been fixed; no independent confirmation is supplied.
