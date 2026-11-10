---
story_id: story_1304b0a9615e4f7a83d0424d3169838e
authors:
  - alexsci.com by robalex
date: 2026-11-10
generated_at: 2026-11-10T07:30:07.356Z
source: lobsters
section: security
tags:
  - email-security
  - dnssec
  - mta-sts
  - smtp-dane
  - certificate-validation
  - well-known-uris
title: Article compares DNSSEC and HTTPS approaches to email security
url: https://alexsci.com/blog/the-race-to-secure-record-like-information-for-domains
why_read: Engineers can assess the tradeoffs between DNSSEC-based and HTTPS-based mechanisms for authenticated MTA-to-MTA encryption.
status: unknown
source_published_at: 2026-11-09T23:25:03.000Z
source_external_id: https://lobste.rs/s/vqtg9b
source_adapter: rss
discussion: https://lobste.rs/s/vqtg9b/race_secure_record_like_information_for
discussions:
  - source: lobsters
    url: https://lobste.rs/s/vqtg9b/race_secure_record_like_information_for
interest_score: 8
utility_score: 7
novelty_score: 7
depth_score: 8
impact_score: 8
---

The article compares SMTP DANE and MTA-STS as ways to authenticate email transport when an MX record points to a different domain than the recipient address. It frames both as responses to the hostname mismatch that otherwise leaves MTAs using opportunistic encryption.

SMTP DANE uses DNSSEC-signed TLSA records to pin a receiving server's certificate key. MTA-STS retrieves an HTTPS well-known policy that lists permitted MX hosts and requires trusted-CA certificates, with caching providing partial protection against intermittent blocking.

The article reports low adoption for both mechanisms and says MTA-STS leads among top-ranked domains. It also highlights DNSSEC coverage, certificate renewal, and policy-server blocking as deployment constraints.
