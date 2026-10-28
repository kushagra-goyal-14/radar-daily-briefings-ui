---
story_id: story_5f3028b95b3749f58422ad5e08713598
authors:
  - tailscale.com via ahobson
date: 2026-10-28
generated_at: 2026-10-28T07:30:13.004Z
source: lobsters
section: security
tags:
  - tailscale-ssh
  - privilege-escalation
  - ssh-forwarding
  - access-policies
  - security-remediation
  - patched-client
title: Tailscale investigates SSH privilege-escalation vulnerabilities
url: https://tailscale.com/ssh-investigation-update
why_read: Infrastructure teams can apply documented access restrictions and disable SSH forwarding while awaiting the patched client release.
status: in_progress
source_published_at: 2026-10-28T01:31:44.000Z
source_external_id: https://lobste.rs/s/qmvxuh
source_adapter: rss
discussion: https://lobste.rs/s/qmvxuh/tailscale_ssh_investigation
discussions:
  - source: lobsters
    url: https://lobste.rs/s/qmvxuh/tailscale_ssh_investigation
interest_score: 8
utility_score: 8
novelty_score: 6
depth_score: 5
impact_score: 7
---

Tailscale is investigating security vulnerabilities affecting Tailscale SSH, with most identified issues involving possible privilege escalation. The company says fixes for most findings are implemented, while testing and verification continue.

According to Tailscale, an authorized SSH user may in some circumstances act beyond the permissions of the configured local user, potentially gaining elevated privileges. Exploitation depends on access permissions, system configuration, and other conditions.

Customers are advised to review SSH access policies, restrict sensitive-system access, disable forwarding when unnecessary with `TS_SSH_DISABLE_FORWARDING=1`, and prepare to update. The full scope, affected configurations, and patched release remain unconfirmed in this update.
