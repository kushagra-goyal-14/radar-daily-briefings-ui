---
story_id: story_cdef4dcc81884737bf5accf2ce562e7d
authors: []
date: 2026-10-21
generated_at: 2026-10-22T12:19:31.017Z
source: simon-willison
section: security
tags:
  - certificate-authority
  - private-key-compromise
  - ca-bundles
  - trust-stores
  - supply-chain-security
title: eMudhra intermediate CA key compromise prompts trust-store updates
url: https://simonwillison.net/2026/Oct/20/emudhra-certificates
why_read: Engineers can identify affected trust-store dependencies and remediation versions for Python tooling and Linux distributions.
status: unknown
source_published_at: 2026-10-20T23:50:25.000Z
source_external_id: https://simonwillison.net/2026/Oct/20/emudhra-certificates/
source_adapter: atom
interest_score: 9
utility_score: 9
novelty_score: 2
depth_score: 5
impact_score: 9
---

Simon Willison reports that private keys for eight eMudhra intermediate CA certificates were compromised. The certificates chain to roots trusted by Mozilla, Microsoft, Apple, and Chrome root programs, as well as many downstream trust stores.

The post says software that bundles trusted certificate lists needs updates. It specifically notes that Linux distributions should update their ca-certificates packages, while uv 0.13.4, pip 26.2.2, and certifi 2026.10.19 include upgraded certificate lists.

Engineers should inventory bundled trust stores and verify remediation versions. The supplied evidence does not establish revocation details or that the compromise itself has been fully resolved.
