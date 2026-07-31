---
story_id: story_46c209969c59414ba199f9244c372fee
authors:
  - Aaron Robertshaw
date: 2026-07-31
source: make-wordpress-core
section: wordpress
tags:
  - wordpress-7-1
  - background-gradient
  - block-supports
  - css-styling
  - block-inspector
title: WordPress 7.1 adds background gradient support that layers with images
url: https://make.wordpress.org/core/2026/07/26/new-block-support-in-wordpress-7-1-background-gradient-background-gradient
why_read: Block developers can enable layered gradient and image backgrounds by opting in via block.json configuration without breaking existing blocks or themes.
status: released
source_external_id: https://make.wordpress.org/core/?p=124676
source_adapter: rss
interest_score: 6
utility_score: 7
novelty_score: 5
depth_score: 7
impact_score: 5
generated_at: 2026-07-31T06:15:12.609Z
source_published_at: 2026-07-26T12:18:44.000Z
---

WordPress 7.1 introduces background.gradient, a new block support that separates gradient styling from the existing color.gradient system. The change enables gradients and background images to render together on the same block.

Previously, the color.gradient support stored gradients at style.color.gradient and rendered them through the CSS background shorthand property. Because the shorthand resets all background properties—including background-image—a gradient would override any background image on the block. The new background.gradient support stores gradients at style.background.gradient and renders through the background-image longhand property instead, which does not reset other background values. The style engine outputs both the gradient and any image as comma-separated values in a single declaration: `background-image: linear-gradient(135deg, #000 0%, #fff 100%), url('image.jpg')`.

Blocks enable the support by adding `gradient: true`…
