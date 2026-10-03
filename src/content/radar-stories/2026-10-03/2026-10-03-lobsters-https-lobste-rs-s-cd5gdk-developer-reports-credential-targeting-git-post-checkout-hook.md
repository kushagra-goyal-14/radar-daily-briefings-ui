---
story_id: story_f8dc7e21ffb34653811a3b79cdc43b72
authors:
  - frankwiles.com by frankwiles
date: 2026-10-03
generated_at: 2026-10-03T07:30:24.261Z
source: lobsters
section: security
tags:
  - credential-theft
  - git-hooks
  - post-checkout-hook
  - arbitrary-code-execution
  - command-and-control
  - social-engineering
title: Developer reports credential-targeting Git post-checkout hook
url: https://frankwiles.com/posts/i-got-targeted
why_read: The incident highlights how ordinary repository workflows can be abused to execute payloads and target developer credentials.
status: unknown
source_published_at: 2026-10-02T22:19:02.000Z
source_external_id: https://lobste.rs/s/cd5gdk
source_adapter: rss
discussion: https://lobste.rs/s/cd5gdk/i_got_targeted_trying_get_your
discussions:
  - source: lobsters
    url: https://lobste.rs/s/cd5gdk/i_got_targeted_trying_get_your
interest_score: 8
utility_score: 8
novelty_score: 7
depth_score: 5
impact_score: 7
---

Frank Wiles reports being targeted through a fake web-app project inquiry that led to a Dropbox folder containing Markdown files and a hidden .git directory. The package included a real post-checkout hook, while the other hooks were examples.

According to Wiles, the hook used a Vercel app for command and control, downloaded an operating-system-specific binary, made it executable, ran it, and deleted it. He suspected the goal was access to his GitHub or client-related credentials.

The incident shows why engineers should inspect untrusted repositories and Git metadata before using them. The report does not confirm payload execution, credential access, or compromise.
