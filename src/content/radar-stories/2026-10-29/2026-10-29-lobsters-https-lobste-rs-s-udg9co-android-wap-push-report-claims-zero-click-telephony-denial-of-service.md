---
story_id: story_90dc291c2fae47d89295c26dd2f58386
authors:
  - smsofdeath.com via benjoffe
date: 2026-10-29
generated_at: 2026-10-29T07:30:07.515Z
source: lobsters
section: security
tags:
  - android-telephony
  - wap-push
  - remote-denial-of-service
  - zero-click
  - sms
  - sqlite-corruption
title: Android WAP Push report claims zero-click telephony denial of service
url: https://smsofdeath.com/
why_read: Engineers can assess the reported parsing flaw, emergency-call implications, recovery burden, and absence of a vendor fix.
status: unknown
source_published_at: 2026-10-29T07:22:37.000Z
source_external_id: https://lobste.rs/s/udg9co
source_adapter: rss
discussion: https://lobste.rs/s/udg9co/single_malformed_wap_push_sms_crashes_com
discussions:
  - source: lobsters
    url: https://lobste.rs/s/udg9co/single_malformed_wap_push_sms_crashes_com
interest_score: 9
utility_score: 7
novelty_score: 8
depth_score: 8
impact_score: 8
---

The smsofdeath.com report describes a malformed WAP Push SMS that allegedly crashes Android’s com.android.phone process without user interaction. It claims the failure can terminate active calls, including emergency calls, and that Google classified the issue as a non-security issue and declined to fix it.

The reported root cause is an unchecked conversion of a WSP header-length value from long to int before using it as a byte-array size. The report says a crafted five-byte value becomes a negative length and triggers NegativeArraySizeException on the telephony main thread.

The report further claims repeated delivery can corrupt the SQLite SMS store and cause crashes during boot.
