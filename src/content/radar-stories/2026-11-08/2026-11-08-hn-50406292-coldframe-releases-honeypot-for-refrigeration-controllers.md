---
story_id: story_7cf651dc7ab5412db21f39cd7e9cb2e7
authors:
  - hedgerow-dev
date: 2026-11-08
generated_at: 2026-11-08T07:30:22.123Z
source: hn
section: security
tags:
  - honeypot
  - industrial-control-systems
  - refrigeration-controllers
  - exploit-detection
  - container-hardening
  - modbus-tcp
title: Coldframe releases honeypot for refrigeration controllers
url: https://github.com/hedgerow-dev/coldframe
why_read: Industrial-security engineers can deploy realistic controller decoys to collect exploit telemetry with documented container-hardening controls.
status: released
source_published_at: 2026-11-07T17:27:30.000Z
hn_id: "50406292"
comments: https://news.ycombinator.com/item?id=50406292
interest_score: 8
utility_score: 8
novelty_score: 7
depth_score: 8
impact_score: 6
---

Coldframe is a released one-file Python honeypot for supermarket refrigeration controllers. It emulates Danfoss AK-SM 800A and Copeland/Dixell XWEB personas, recording connection, login, control, exploit, and optional Modbus activity.

The project matches selected web fingerprints, authentication flows, paths, headers, and certificate characteristics. Requests matching listed vulnerabilities receive exploit labels, while payloads are logged and dropped. Its container deployment uses a read-only filesystem, a non-root user, dropped capabilities, and a separate user namespace.

Engineers can use it for defensive telemetry around exposed industrial devices. The interaction is intentionally shallow, public responses are fingerprintable, and several real-device behaviors remain unconfirmed.
