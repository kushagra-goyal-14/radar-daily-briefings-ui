---
story_id: story_7cf651dc7ab5412db21f39cd7e9cb2e7
authors:
  - hedgerow-dev
date: 2026-11-08
generated_at: 2026-11-08T07:30:22.123Z
source: hn
section: security
tags:
  - coldframe
  - honeypot
  - industrial-control-systems
  - refrigeration-controllers
  - exploit-detection
  - modbus-tcp
title: Coldframe releases honeypot for supermarket refrigeration controllers
url: https://github.com/hedgerow-dev/coldframe
why_read: Security engineers can deploy realistic refrigeration-controller decoys to capture exploit attempts without exposing real industrial-control functions.
status: released
source_published_at: 2026-11-07T17:27:30.000Z
hn_id: "50406292"
comments: https://news.ycombinator.com/item?id=50406292
interest_score: 8
utility_score: 8
novelty_score: 8
depth_score: 9
impact_score: 6
---

Coldframe is a released, single-file Python honeypot for supermarket refrigeration controllers. It emulates Danfoss AK-SM 800A and Copeland/Dixell XWEB EVO personas, exposing fake web interfaces and logging attacker activity.

The project records credentials, sessions, control actions, XML commands, Modbus activity, and matches for named public exploits. It says payloads are logged and dropped; the decoy does not execute commands, read files, or forward traffic. Optional Modbus support is disabled by default.

Deployment guidance includes read-only containers, dropped capabilities, resource limits, user namespaces, and outbound-network restrictions. Coldframe has shallow interaction, uses plausible values where real details are unavailable, and can be fingerprinted from its public code.
