---
story_id: story_8ec8dc531c6545ffb5e34d3de5575c56
authors:
  - hkc
date: 2026-10-23
generated_at: 2026-10-23T07:30:31.040Z
source: hn
section: security
tags:
  - certificate-authority
  - weak-private-keys
  - elliptic-curve-cryptography
  - certificate-revocation
  - trust-stores
  - tls-interception
title: eMudhra CA keys exposed through single-byte P-384 values
url: https://scotthelme.co.uk/eight-bits-of-trust-emudhras-ca-keys-cracked-in-milliseconds
why_read: Engineers need to identify stale trust stores and unupdatable devices that may not honor browser-oriented revocation or Certificate Transparency controls.
status: fixed
source_published_at: 2026-10-21T09:08:08.000Z
hn_id: "50177916"
comments: https://news.ycombinator.com/item?id=50177916
interest_score: 9
utility_score: 9
novelty_score: 2
depth_score: 8
impact_score: 9
---

A report says eight eMudhra intermediate CA certificates used P-384 private keys represented by single-byte values. The keys could be recovered from public certificates in milliseconds, compromising the trust placed in those intermediates.

The report explains that recovering each key required testing at most 255 possible curve values. The affected certificates covered TLS and code-signing use, and Chrome and Mozilla blocked them through certificate or root-store changes.

Browser protections do not cover every client. curl, language runtimes, build systems, APIs, and embedded devices may rely on local CA bundles without default revocation or Certificate Transparency checks. Engineers should update those bundles and rebuild affected images; unupdatable devices remain a stated caveat.
