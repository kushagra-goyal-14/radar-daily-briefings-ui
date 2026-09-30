---
story_id: story_6bc8e88f49074c33b9138d02e2932325
authors:
  - Amy Kamala
date: 2026-09-30
generated_at: 2026-09-30T07:30:23.076Z
source: make-wordpress-hosting
section: wordpress
tags:
  - wordpress-hosting
  - branch-protection
  - pull-request-review
  - repository-security
  - github-rulesets
  - ci-tests
title: WordPress Hosting tightens repository branch protection rules
url: https://make.wordpress.org/hosting/2026/09/30/increased-security-on-hosting-team-repositories
why_read: Hosting contributors and maintainers need the updated merge requirements, testing gates, and documented repository-specific bypass scopes.
status: released
source_published_at: 2026-09-30T00:02:59.000Z
source_external_id: https://make.wordpress.org/hosting/?p=197039
source_adapter: rss
interest_score: 6
utility_score: 8
novelty_score: 6
depth_score: 5
impact_score: 6
---

The WordPress Hosting team has tightened branch protection across all Hosting team repositories after increased spammy pull requests, premature merges, and other undesirable activity. The new rules are being enforced.

A pull request needs two approvals, resolved change requests, and review and approval of any newly pushed code. All unit tests must pass, and newly created GitHub accounts have a 24-hour grace period before interacting with the repositories.

The notice documents bypasses for organization and team administrators, selected maintainers, and certain Hosting Team members on handbook repositories. It provides limited detail about the underlying GitHub rulesets.
