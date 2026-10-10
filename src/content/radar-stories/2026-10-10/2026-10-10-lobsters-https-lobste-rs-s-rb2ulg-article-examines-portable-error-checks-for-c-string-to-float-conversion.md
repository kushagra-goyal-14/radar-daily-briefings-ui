---
story_id: story_50c5bcb8223d4e6493237768fdfcc689
authors:
  - sebsite.pw by seb
date: 2026-10-10
generated_at: 2026-10-10T07:30:29.338Z
source: lobsters
section: programming
tags:
  - standard-c
  - string-conversion
  - floating-point-errors
  - errno
  - math-error-handling
  - posix-portability
title: Article examines portable error checks for C string-to-float conversion
url: https://sebsite.pw/w/20261009-strtod.html
why_read: C developers can avoid nonportable errno assumptions when validating floating-point parsing across standard C, POSIX, glibc, and musl.
status: unknown
source_published_at: 2026-10-10T05:37:18.000Z
source_external_id: https://lobste.rs/s/rb2ulg
source_adapter: rss
discussion: https://lobste.rs/s/rb2ulg/oh_apparently_it_s_not_possible_portably
discussions:
  - source: lobsters
    url: https://lobste.rs/s/rb2ulg/oh_apparently_it_s_not_possible_portably
interest_score: 6
utility_score: 8
novelty_score: 7
depth_score: 9
impact_score: 5
---

A technical article examines why string-to-floating-point conversion errors are difficult to detect portably in standard C. It focuses on strtod-family functions and does not report a release, fix, or other lifecycle event.

The article explains that ISO C connects overflow and underflow reporting to math_errhandling, while POSIX requires errno == ERANGE for both conditions. It also contrasts glibc, which reportedly leaves errno unchanged for invalid input, with musl, which sets EINVAL.

For invalid input, the article recommends checking the end pointer rather than relying on errno. It presents implementation- and standards-specific checking patterns, while noting that standard C may not guarantee underflow detection.
