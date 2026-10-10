---
story_id: story_4783d42dc50746538dc497c18bec745c
authors:
  - karansaini.com via rrampage
date: 2026-10-10
generated_at: 2026-10-10T07:30:29.338Z
source: lobsters
section: security
tags:
  - android
  - mmi-execution
  - ussd
  - deeplink-abuse
  - dialer-security
  - call-forwarding
title: Android dialer deeplinks enable one-click MMI call forwarding
url: https://karansaini.com/mmi-android
why_read: Mobile-security engineers can assess the exploit prerequisites, carrier-side impact, and remediation status across dialer and platform boundaries.
status: in_progress
source_published_at: 2026-10-10T07:20:53.000Z
source_external_id: https://lobste.rs/s/txa6dj
source_adapter: rss
discussion: https://lobste.rs/s/txa6dj/1_click_mmi_execution_android
discussions:
  - source: lobsters
    url: https://lobste.rs/s/txa6dj/1_click_mmi_execution_android
interest_score: 8
utility_score: 8
novelty_score: 8
depth_score: 8
impact_score: 7
---

The article reports a one-click Android attack path in which browser-triggered deeplinks cause certain dialer applications to execute MMI or USSD codes. Demonstrated consequences include registering unconditional call forwarding through a live carrier network.

The described ACR Phone path combines CALL_PHONE permission, a browsable `tel:` deeplink, Chrome intent handling, and an auto-dial activity. A single tap reportedly sent an MMI code, and forwarding persisted in carrier records rather than the handset.

The author says Google closed the Android report without a direct fix. Android 17 behavior was confirmed only on an emulator, while ACR’s developer reportedly committed a fix whose release was pending review.
