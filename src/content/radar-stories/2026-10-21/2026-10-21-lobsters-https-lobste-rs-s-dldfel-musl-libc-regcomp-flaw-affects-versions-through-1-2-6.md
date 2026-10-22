---
story_id: story_41c74aa96c6041578406741107432008
authors:
  - openwall.com via dzwdz
date: 2026-10-21
generated_at: 2026-10-22T12:19:31.017Z
source: lobsters
section: security
tags:
  - musl-libc
  - regular-expressions
  - integer-overflow
  - out-of-bounds-write
  - cve-2026-107891
  - security-patch
title: musl libc regcomp flaw affects versions through 1.2.6
url: https://www.openwall.com/lists/oss-security/2026/10/21/18
why_read: Musl-based applications processing untrusted regular expressions should assess exposure and apply the patch or restrict that processing.
status: fixed
source_published_at: 2026-10-21T17:40:17.000Z
source_external_id: https://lobste.rs/s/dldfel
source_adapter: rss
discussion: https://lobste.rs/s/dldfel/cve_2026_107891_musl_libc_multiple
discussions:
  - source: lobsters
    url: https://lobste.rs/s/dldfel/cve_2026_107891_musl_libc_multiple
interest_score: 8
utility_score: 9
novelty_score: 8
depth_score: 7
impact_score: 8
---

A musl libc advisory identifies multiple integer overflows in regcomp, affecting code present from version 0.5.0 through 1.2.6. The issue is relevant when applications compile regular expressions from untrusted sources.

According to the advisory, overflow conditions depend on the size and complexity of the regular expression, not the data matched. They can produce incorrectly sized allocations and possibly out-of-bounds heap writes, with predictable crashes possible and arbitrary code execution depending on application behavior.

The notice provides a patch and recommends upgrading to 1.2.7 once available. Systems that cannot be patched should prevent processing regular expressions from untrusted sources.
