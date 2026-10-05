---
story_id: story_3215061151a5459e881285df0170205e
authors:
  - sec-consult.com via ni5arga
date: 2026-10-05
generated_at: 2026-10-05T07:30:42.101Z
source: lobsters
section: security
tags:
  - email-spoofing
  - smtp-smuggling
  - header-smuggling
  - icloud
  - smtp-parsing
  - authentication-bypass
title: Apple iCloud fixes two email spoofing vulnerabilities
url: https://sec-consult.com/blog/detail/from-anyoneicloudcom-spoofing-arbitrary-apple-icloud-identities
why_read: Mail-security engineers can study how parser discrepancies bypassed From-header authentication and why conventional sender checks were insufficient.
status: fixed
source_published_at: 2026-10-05T06:50:55.000Z
source_external_id: https://lobste.rs/s/jpwrmk
source_adapter: rss
discussion: https://lobste.rs/s/jpwrmk/from_anyone_icloud_com_spoofing
discussions:
  - source: lobsters
    url: https://lobste.rs/s/jpwrmk/from_anyone_icloud_com_spoofing
interest_score: 8
utility_score: 8
novelty_score: 7
depth_score: 9
impact_score: 7
---

SEC Consult reports two email-spoofing vulnerabilities in Apple iCloud’s SMTP services. The issues allowed attackers to send messages appearing to originate from arbitrary icloud.com addresses, and the disclosure timeline records Apple’s deployed fixes as remediating the original issue.

The techniques exploited interpretation differences between iCloud’s SMTP parsing stages. Line-break handling could create duplicate From headers, while dot-stuffing behavior enabled another authentication bypass. SEC Consult reports that resulting messages could pass SPF, DKIM, and DMARC checks.

The case study is relevant to mail-security engineers reviewing sender authentication. It notes detectable traces such as Return-Path metadata, and the supplied evidence does not provide a CVE or detailed independent verification of remediation.
