---
story_id: story_46c209969c59414ba199f9244c372fee
authors:
  - Aaron Robertshaw
date: 2026-07-31
generated_at: 2026-07-31T06:15:12.609Z
source: make-wordpress-core
section: wordpress
tags:
  - wordpress-7-1
  - background-gradient
  - block-supports
  - css-styling
  - block-inspector
title: WordPress 7.1 adds background gradients that layer over images
url: https://make.wordpress.org/core/2026/07/26/new-block-support-in-wordpress-7-1-background-gradient-background-gradient
why_read: Block and theme developers can adopt layered gradient backgrounds without the CSS shorthand conflict affecting existing color.gradient support.
status: released
source_published_at: 2026-07-26T12:18:44.000Z
source_external_id: https://make.wordpress.org/core/?p=124676
source_adapter: rss
interest_score: 6
utility_score: 7
novelty_score: 5
depth_score: 7
impact_score: 5
---

WordPress 7.1 introduces background.gradient, a new block support that lets gradients render together with background images. The change is additive, and existing color.gradient behavior remains unchanged.

The new value is stored at style.background.gradient and rendered through the CSS background-image longhand property. The style engine combines the gradient and image as comma-separated values, while safecss_filter_attr() now permits mixed gradient and url() values.

Developers can opt in through block.json and configure defaults or values through theme.json. The document says five core blocks adopt the support in 7.1; migration from color.gradient is deferred.
