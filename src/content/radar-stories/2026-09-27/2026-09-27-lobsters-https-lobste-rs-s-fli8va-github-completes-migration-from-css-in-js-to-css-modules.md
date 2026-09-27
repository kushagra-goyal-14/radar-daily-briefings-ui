---
story_id: story_1afc79082f4149299e514c5352d002d8
authors:
  - github.blog via dimonomid
date: 2026-09-27
generated_at: 2026-09-27T07:30:08.345Z
source: lobsters
section: web-development
tags:
  - css-modules
  - css-in-js
  - design-systems
  - performance-engineering
  - feature-flags
  - codemods
title: GitHub completes migration from CSS-in-JS to CSS Modules
url: https://github.blog/engineering/architecture-optimization/improving-site-performance-by-shipping-more-css
why_read: The case study offers reusable migration techniques for reducing frontend runtime costs while managing large-scale compatibility and rollout risk.
status: released
source_published_at: 2026-09-27T07:15:30.000Z
source_external_id: https://lobste.rs/s/fli8va
source_adapter: rss
discussion: https://lobste.rs/s/fli8va/improving_site_performance_by_shipping
discussions:
  - source: lobsters
    url: https://lobste.rs/s/fli8va/improving_site_performance_by_shipping
interest_score: 8
utility_score: 9
novelty_score: 7
depth_score: 9
impact_score: 7
---

GitHub reports completing its migration from CSS-in-JS to CSS Modules across dotcom by June 2026. The work removed sx, styled-components, and styled-system without breaking the product.

CSS Modules colocated styles with components, kept class names local by default, and moved output into stylesheets delivered with page HTML. GitHub used compatibility wrappers, feature flags, visual regression tests, gradual rollouts, and codemods to migrate incrementally.

The Primer migration reportedly reduced server-side rendering time by 55% and component initialization time by 25%. These figures come from GitHub's case study, whose supplied evidence does not include independent validation or detailed benchmark methodology.
