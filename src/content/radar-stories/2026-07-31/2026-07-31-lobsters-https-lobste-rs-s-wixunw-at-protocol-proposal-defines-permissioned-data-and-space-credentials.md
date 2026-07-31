---
story_id: story_fa4f05c0533a48cd98a33f2ae2cbab03
authors:
  - github.com via himawari
date: 2026-07-31
generated_at: 2026-07-31T08:47:28.404Z
source: lobsters
section: infrastructure
tags:
  - atproto
  - permissioned-data
  - access-control
  - decentralized-social-networking
  - data-synchronization
  - space-credentials
title: AT Protocol proposal defines permissioned data and space credentials
url: https://github.com/bluesky-social/proposals/tree/main/0016-permissioned-data
why_read: Engineers can assess the proposed repository, authorization, synchronization, and confidentiality boundaries before implementing against an unstable design.
status: proposed
source_published_at: 2026-07-31T04:48:48.000Z
source_external_id: https://lobste.rs/s/wixunw
source_adapter: rss
discussion: https://lobste.rs/s/wixunw/private_data_atproto_permissioned_data
discussions:
  - source: lobsters
    url: https://lobste.rs/s/wixunw/private_data_atproto_permissioned_data
interest_score: 8
utility_score: 6
novelty_score: 8
depth_score: 8
impact_score: 7
---

The AT Protocol proposal introduces a permissioned-data protocol for personal data, gated content, private social records, and groups. It is explicitly a proposal, and the document says its details and behaviors are likely to change.

The design retains DID-based authority, per-user repositories, lexicon-typed records, and application-built views, but adds one permissioned repository per user and space. Spaces use scoped at:// addresses and credentials issued by a space authority; applications obtain them through delegation tokens and, where required, client attestations.

The protocol provides access control, not confidentiality: PDSes and authorized applications can read handled data, while end-to-end encryption remains out of scope. The implementation is still a work in progress.
