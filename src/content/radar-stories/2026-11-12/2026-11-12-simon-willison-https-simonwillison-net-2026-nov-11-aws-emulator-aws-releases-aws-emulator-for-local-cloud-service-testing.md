---
story_id: story_1d554442a960435a963bc3bea94edbd3
authors: []
date: 2026-11-12
generated_at: 2026-11-12T07:30:31.469Z
source: simon-willison
section: infrastructure
tags:
  - aws-emulator
  - local-testing
  - docker
  - rust
  - cloud-services
  - test-infrastructure
title: AWS releases aws-emulator for local cloud-service testing
url: https://simonwillison.net/2026/Nov/11/aws-emulator
why_read: Engineers can evaluate a local AWS testing workflow while accounting for its current Docker and platform requirements.
status: released
source_published_at: 2026-11-11T21:18:30.000Z
source_external_id: https://simonwillison.net/2026/Nov/11/aws-emulator/
source_adapter: atom
interest_score: 8
utility_score: 8
novelty_score: 8
depth_score: 4
impact_score: 8
---

Simon Willison reports that AWS has released aws-emulator, an official emulator for testing against local clones of many AWS services without provisioning a paid API key.

The project is written in Rust and reportedly reached 29,684 commits in its first three weeks. Its current setup requires Docker on macOS or Windows, according to the supplied post.

This could give teams a local target for cloud-integrated test suites, but the evidence does not describe the emulator’s architecture, service coverage, compatibility, or performance. Engineers should validate the specific AWS services and environments their tests require.
