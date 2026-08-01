---
story_id: story_89ddc6ea6cbc484db4b751ded492082b
authors:
  - github.blog via robinhundt
date: 2026-07-31
generated_at: 2026-07-31T23:35:24.629Z
source: lobsters
section: programming
tags:
  - stacked-pull-requests
  - code-review
  - merge-queue
  - github-cli
  - branch-management
  - public-preview
title: GitHub brings stacked pull requests to public preview
url: https://github.blog/changelog/2026-07-30-stacked-pull-requests-are-now-in-public-preview
why_read: Engineers can evaluate a native workflow for parallel, layered reviews while accounting for preview rollout and merge queue availability.
status: experimental
source_published_at: 2026-07-30T16:52:25.000Z
source_external_id: https://lobste.rs/s/pzl6f0
source_adapter: rss
discussion: https://lobste.rs/s/pzl6f0/stacked_pull_requests_are_now_public
discussions:
  - source: lobsters
    url: https://lobste.rs/s/pzl6f0/stacked_pull_requests_are_now_public
  - source: hacker-news
    url: https://news.ycombinator.com/item?id=49112232
interest_score: 8
utility_score: 8
novelty_score: 7
depth_score: 6
impact_score: 7
---

GitHub is rolling out stacked pull requests in public preview to all repositories over the coming days. Merge queue support is expected to roll out progressively over the following weeks.

Stacked pull requests organize a large change into dependency-ordered layers. GitHub says each layer can be reviewed and checked independently, while pull requests above a partially merged layer automatically rebase and retarget. Teams can merge individual layers or land an entire stack in one operation.

The workflow is available through github.com, the GitHub CLI, the mobile app, and a coding-agent skill. Existing checks, reviews, merge requirements, and branch protections continue to govern changes, but preview rollout limits certainty about availability.
