---
story_id: story_53b04c36a41d42e9a472fa2529873e74
authors:
  - labs.watchtowr.com via buherator
date: 2026-11-06
generated_at: 2026-11-06T07:30:10.088Z
source: lobsters
section: security
tags:
  - barracuda-esg
  - cve-2026-116606
  - cve-2026-111560
  - command-injection
  - remote-code-execution
  - patch-diff-analysis
title: Barracuda ESG patches chained pre-authentication vulnerabilities
url: https://labs.watchtowr.com/barracuda-networks-is-your-new-best-friend-barracuda-email-security-gateway-pre-auth-remote-root-rce-cve-2026-116606-cve-2026-111560
why_read: The analysis identifies affected products, vulnerable restore paths, patch changes, and an available detection artifact for exposure validation.
status: fixed
source_published_at: 2026-11-06T07:29:25.000Z
source_external_id: https://lobste.rs/s/hhagfv
source_adapter: rss
discussion: https://lobste.rs/s/hhagfv/barracuda_networks_is_your_new_best
discussions:
  - source: lobsters
    url: https://lobste.rs/s/hhagfv/barracuda_networks_is_your_new_best
interest_score: 9
utility_score: 9
novelty_score: 8
depth_score: 9
impact_score: 8
---

watchTowr Labs analyzes two Barracuda appliance vulnerabilities: CVE-2026-116606, a pre-authentication authorization bypass, and CVE-2026-111560, an OS command injection. The article reports that Barracuda fixed both in version 9.4.0.029.

The research compares vulnerable ESG 9.4.0.027 with the fixed release. It traces a failed password-change flow, backup restoration, attacker-controlled timezone data, and shell-backed Perl commands; the repair script is invoked through sudo, enabling root-level execution according to the analysis.

The article also provides a detection artefact generator for susceptibility checks. The supplied evidence does not independently confirm exploitation or deployment prevalence.
