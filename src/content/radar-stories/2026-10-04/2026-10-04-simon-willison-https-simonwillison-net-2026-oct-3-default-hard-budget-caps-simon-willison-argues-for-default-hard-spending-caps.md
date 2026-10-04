---
story_id: story_ab671f948e8b4e7a9606d2916cc44259
authors: []
date: 2026-10-04
generated_at: 2026-10-04T07:30:13.447Z
source: simon-willison
section: business
tags:
  - budget-caps
  - cloud-spending
  - coding-agents
  - usage-based-billing
  - aws
  - google-cloud
title: Simon Willison argues for default hard spending caps
url: https://simonwillison.net/2026/Oct/3/default-hard-budget-caps
why_read: It frames hard spending limits as a deployment-control decision for developers using coding agents and metered infrastructure.
status: unknown
source_published_at: 2026-10-03T23:34:02.000Z
source_external_id: https://simonwillison.net/2026/Oct/3/default-hard-budget-caps/
source_adapter: atom
interest_score: 8
utility_score: 7
novelty_score: 7
depth_score: 4
impact_score: 8
---

Simon Willison argues that usage-based APIs and cloud services should default to hard monthly spending caps. These limits would stop usage and return errors, rather than merely warning customers after a threshold is reached.

The article says AWS can pause a project for the month when its spend limit is reached, while AWS documentation described the experience as available to a limited number of customers. It also says Google Cloud launched Spend Caps for selected services within a project.

The proposal matters to developers deploying coding agents and other metered workloads, where runaway usage can create unexpected charges. The piece is opinionated and supplies no measurements or independent operational evaluation.
