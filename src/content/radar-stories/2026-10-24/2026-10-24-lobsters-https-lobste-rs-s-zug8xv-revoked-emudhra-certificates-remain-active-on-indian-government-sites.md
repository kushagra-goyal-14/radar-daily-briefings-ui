---
story_id: story_e07b4db402e94d07b0f6ba7b1238023b
authors:
  - captnemo.in via adityaathalye
date: 2026-10-24
generated_at: 2026-10-24T07:30:27.054Z
source: lobsters
section: security
tags:
  - certificate-revocation
  - certificate-authority
  - tls-certificates
  - public-key-infrastructure
  - government-websites
  - browser-security
title: Revoked eMudhra certificates remain active on Indian government sites
url: https://captnemo.in/blog/2026/10/23/emsign-revoked-gov-in
why_read: Engineers can use the reported host inventory and browser differences to prioritize certificate rotation and revocation-validation checks.
status: in_progress
source_published_at: 2026-10-24T04:06:06.000Z
source_external_id: https://lobste.rs/s/zug8xv
source_adapter: rss
discussion: https://lobste.rs/s/zug8xv/indian_government_sites_are_serving
discussions:
  - source: lobsters
    url: https://lobste.rs/s/zug8xv/indian_government_sites_are_serving
interest_score: 9
utility_score: 9
novelty_score: 7
depth_score: 8
impact_score: 8
---

A report published October 23 says 156 hosts in India’s government website directory were still serving certificates revoked by eMudhra on October 19. The report also identifies four MeitY-related bodies among affected sites and says certificate rotations had not yet occurred for the listed hosts.

The reported revocations are recorded in eMudhra certificate revocation lists. Browser handling differs: Firefox’s CRLite blocks the certificates, while Chrome, Edge, Android, and most Safari clients load them because their revocation coverage differs.

The report says Mozilla and Chrome distrust the emSign ECC Root CA - G3, with eMudhra estimating that about 30,000 certificates require migration. Its observations are time-specific and independently uncorroborated in the supplied evidence.
