---
story_id: story_e9f71bfdacf9411f8d8002519a9efa98
authors:
  - a.l3x.in by Al3xFor
date: 2026-09-22
generated_at: 2026-09-22T07:30:15.145Z
source: lobsters
section: infrastructure
tags:
  - wireguard
  - aws-ec2
  - opentofu
  - cloud-init
  - iptables
  - vpn-server
title: Tutorial shows on-demand WireGuard VPNs with AWS EC2 and OpenTofu
url: https://a.l3x.in/blog/throwaway-vpn
why_read: Engineers can evaluate a practical ephemeral VPN pattern and its operational tradeoffs before adapting the supplied infrastructure blueprint.
status: unknown
source_published_at: 2026-09-22T06:56:57.000Z
source_external_id: https://lobste.rs/s/npjb02
source_adapter: rss
discussion: https://lobste.rs/s/npjb02/cheap_easy_throwaway_vpn_server
discussions:
  - source: lobsters
    url: https://lobste.rs/s/npjb02/cheap_easy_throwaway_vpn_server
interest_score: 7
utility_score: 8
novelty_score: 6
depth_score: 7
impact_score: 5
---

The tutorial describes an on-demand WireGuard VPN deployed on AWS EC2 with OpenTofu. It uses `just apply` to create the resources and `just destroy` to remove them after use.

The described module creates an EC2 security group, launches an arm64 Amazon Linux 2023 t4g.nano instance, and uses cloud-init to install WireGuard and configure iptables. It outputs a client configuration for full-tunnel traffic and can optionally create a DNS record.

The author estimates roughly five minutes for provisioning and about $0.0042 per hour, depending on region. These figures and the operational pattern are presented as a personal blueprint, without independent validation.
