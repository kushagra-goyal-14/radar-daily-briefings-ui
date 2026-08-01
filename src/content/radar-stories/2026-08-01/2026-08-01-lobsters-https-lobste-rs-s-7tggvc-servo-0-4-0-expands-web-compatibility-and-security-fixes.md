---
story_id: story_6506833d569141be8da88f2c7f807877
authors:
  - servo.org via FedericoSchonborn
date: 2026-08-01
generated_at: 2026-08-01T00:03:51.221Z
source: lobsters
section: web-development
tags:
  - servo-browser
  - web-platform-compatibility
  - media-queries
  - sharedworker
  - security-fixes
  - browser-embedding
title: Servo 0.4.0 expands web compatibility and security fixes
url: https://servo.org/blog/2026/07/31/june-in-servo
why_read: Browser engineers can assess newly supported web-platform features, security remediation, experimental capabilities, and embedding changes in Servo 0.4.0.
status: released
source_published_at: 2026-07-31T17:32:20.000Z
source_external_id: https://lobste.rs/s/7tggvc
source_adapter: rss
discussion: https://lobste.rs/s/7tggvc/june_servo_real_world_compat_media
discussions:
  - source: lobsters
    url: https://lobste.rs/s/7tggvc/june_servo_real_world_compat_media
interest_score: 8
utility_score: 7
novelty_score: 6
depth_score: 8
impact_score: 6
---

Servo 0.4.0 packages the project’s June 2026 changes, including new CSS media queries, SharedWorker, additional DOM APIs, compatibility fixes, and security remediation.

The release updates SpiderMonkey, adds constant-time steps for selected cryptographic operations, fixes an HTML injection bug in file-directory listings, and improves rendering on sites including lichess.org, Zulip, and Speedtest. It also advances WebGPU, accessibility, garbage-collection safety, performance, and a proposed stable-C embedding path.

Several capabilities remain experimental or under development behind preferences. The project reports remaining interactivity issues on Google Maps and OpenStreetMap, and says the exact CVEs for one SpiderMonkey update are not yet known.
