---
story_id: story_93cc91d099534f469a2f72d9392e55d7
authors:
  - kttnr.net via classichasclass
date: 2026-07-31
source: lobsters
section: programming
tags:
  - cpp-undefined-behavior
  - float-to-int-conversion
  - type-safety
  - c-plus-plus
  - guidelines-support-library
title: C++ float-to-int conversion can be undefined behavior without bounds checking
url: https://kttnr.net/blog/cpp-float-to-int-conversion-undefined-behavior
why_read: C++ developers can learn to avoid a common undefined-behavior pitfall in type conversions and understand how to detect it with sanitizer tools.
status: unknown
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
generated_at: 2026-07-31T05:46:48.707Z
source_published_at: 2026-07-30T03:47:26.000Z
---

Converting a float to an integer in C++ is undefined behavior when the truncated value does not fit into the destination type. The C++ standard specifies this behavior, yet compilers accept such conversions silently even with strict warning flags.

The article demonstrates that implicit casts, C-style casts, and static_cast all perform the conversion without compiler warnings under -Wall and -Wextra. Critically, Microsoft's Guidelines Support Library provides gsl::narrow as a named cast for narrowing conversions, but the author shows that gsl::narrow does not guard against out-of-range float values and thus remains undefined behavior for some inputs.

Different processor architectures handle out-of-range conversions differently. x86's CVTTSS2SI instruction maps unrepresentable inputs to INT_MIN; AArch64's FCVTZS saturates the result.
