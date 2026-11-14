---
story_id: story_66f40ef0d7a94a36ae66a5e1bcc8cd74
authors:
  - rros
date: 2026-11-14
generated_at: 2026-11-14T07:30:26.913Z
source: hn
section: security
tags:
  - remote-code-execution
  - embedded-systems
  - industrial-control-systems
  - buffer-overflow
  - firmware-analysis
  - network-exposure
title: Midnight Blue reports six pre-authentication RCEs in Danfoss AK-SM800A
url: https://www.midnightblue.nl/blog/multiple-rce-danfoss-aksm800a
why_read: Engineers can assess the reported attack surface, firmware-analysis evidence, and exposure-reduction guidance for deployed refrigeration controllers.
status: unknown
source_published_at: 2026-11-11T16:08:14.000Z
hn_id: "50455031"
comments: https://news.ycombinator.com/item?id=50455031
interest_score: 9
utility_score: 9
novelty_score: 8
depth_score: 8
impact_score: 8
---

Midnight Blue reports six pre-authentication remote-code-execution vulnerabilities in Danfoss AK-SM800A firmware through version 5.3.2. The article says the findings were discovered during coordinated vulnerability disclosure, with CVE identifiers pending.

According to the researchers, the issues are stack-based buffer overflows in web-facing components. Their investigation used firmware extraction, ARM userland emulation, and manual inspection of the monolithic application and session-control components. The article says the affected application lacks stack canaries and PIE.

Midnight Blue recommends reducing network exposure through VPNs, private APNs, or restrictive IP allowlists. Technical details, vendor response, and remediation status are not supplied.
