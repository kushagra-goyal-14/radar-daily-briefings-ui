---
story_id: story_91f1b9a400a84dc48105dcec6adc9db5
authors:
  - blainsmith.com via ggpsv
date: 2026-08-01
generated_at: 2026-08-01T00:03:51.221Z
source: lobsters
section: programming
tags:
  - reinvented-infrastructure
  - managed-services
  - deployment-strategies
  - authentication
  - background-jobs
  - standards-based-design
title: Essay argues engineers should stop rebuilding solved infrastructure
url: https://blainsmith.com/articles/reinventing-the-wheel
why_read: It offers a practical framework for deciding when infrastructure should be adopted, self-hosted, or custom-built.
status: unknown
source_published_at: 2026-07-31T17:48:22.000Z
source_external_id: https://lobste.rs/s/nw7rzu
source_adapter: rss
discussion: https://lobste.rs/s/nw7rzu/wheels_we_keep_reinventing
discussions:
  - source: lobsters
    url: https://lobste.rs/s/nw7rzu/wheels_we_keep_reinventing
interest_score: 8
utility_score: 7
novelty_score: 4
depth_score: 5
impact_score: 7
---

An opinion essay argues that software teams repeatedly rebuild solved infrastructure, including authentication, deployment workflows, background jobs, rate limiting, caching, and workflow systems. It frames this as a recurring source of maintenance work and operational risk rather than product differentiation.

The essay recommends evaluating established providers or self-hosted software before writing bespoke implementations. It also emphasizes standards-based interfaces, such as OIDC, and documented patterns such as idempotency keys, to preserve extensibility while retaining operational control.

The central guidance is to measure infrastructure effort against product-specific work. The document offers no benchmarks or case study, and acknowledges that custom builds can be justified when existing solutions do not fit.
