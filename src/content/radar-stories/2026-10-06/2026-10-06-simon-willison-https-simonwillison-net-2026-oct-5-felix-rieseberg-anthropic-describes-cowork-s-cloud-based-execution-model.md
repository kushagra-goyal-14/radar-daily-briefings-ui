---
story_id: story_47f19aa584ad44e184b0b7d2730d4561
authors: []
date: 2026-10-06
generated_at: 2026-10-06T07:30:22.786Z
source: simon-willison
section: ai
tags:
  - cowork
  - cloud-inference
  - agent-sandbox
  - session-isolation
  - file-access
title: Anthropic describes Cowork’s cloud-based execution model
url: https://simonwillison.net/2026/Oct/5/felix-rieseberg
why_read: The architecture changes persistence, battery use, session isolation, and the security boundary around device file access.
status: unknown
source_published_at: 2026-10-05T23:56:47.000Z
source_external_id: https://simonwillison.net/2026/Oct/5/felix-rieseberg/
source_adapter: atom
interest_score: 8
utility_score: 7
novelty_score: 6
depth_score: 5
impact_score: 7
---

Felix Rieseberg describes a new Cowork architecture in which model inference and the virtual machine run in the cloud. Each session receives its own sandbox without shared state between sessions.

When the cloud virtual machine needs a device resource, such as a file, the desktop app performs the corresponding file-access tool call. The older design instead ran the virtual machine locally while inference remained in the cloud.

Rieseberg says the change addresses local disk, battery, performance, and laptop-closure constraints, and could support use from phones. The supplied quotation does not establish availability, implementation details, measurements, or the file-access permission model.
