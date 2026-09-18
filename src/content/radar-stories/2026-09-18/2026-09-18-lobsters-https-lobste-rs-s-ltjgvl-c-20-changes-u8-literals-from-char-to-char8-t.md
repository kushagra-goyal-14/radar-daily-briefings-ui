---
story_id: story_50103fca19ac4445a40bcd03f9a1ca84
authors:
  - giodicanio.com via raymii
date: 2026-09-18
generated_at: 2026-09-18T12:59:01.124Z
source: lobsters
section: programming
tags:
  - cpp20
  - char8-t
  - backward-compatibility
  - utf8-string-literals
  - migration-guidance
title: C++20 changes u8 literals from char to char8_t
url: https://giodicanio.com/2026/09/11/the-c-plus-plus-20-s-u8-char8_t-fiasco
why_read: Engineers migrating C++ code can identify this type incompatibility and assess affected UTF-8 string-literal call sites.
status: unknown
source_published_at: 2026-09-18T09:21:24.000Z
source_external_id: https://lobste.rs/s/ltjgvl
source_adapter: rss
discussion: https://lobste.rs/s/ltjgvl/c_20_s_u8_char8_t_backward_compatibility
discussions:
  - source: lobsters
    url: https://lobste.rs/s/ltjgvl/c_20_s_u8_char8_t_backward_compatibility
interest_score: 7
utility_score: 8
novelty_score: 4
depth_score: 6
impact_score: 6
---

C++20 changes u8 string literals from const char arrays to const char8_t arrays. As a result, code that passed a u8 literal to a function accepting const char* can compile in C++17 mode but fail after switching to C++20.

The article illustrates the issue with a compiler diagnostic from Microsoft Visual C++, which rejects conversion from const char8_t* to const char*. The incompatibility arises from the literal’s changed type, while its encoding remains UTF-8.

For migration work, engineers should inspect u8 literal call sites and related APIs. The article cites Google’s guidance to avoid the u8 prefix when possible and notes that its semantics will change again in C++23.
