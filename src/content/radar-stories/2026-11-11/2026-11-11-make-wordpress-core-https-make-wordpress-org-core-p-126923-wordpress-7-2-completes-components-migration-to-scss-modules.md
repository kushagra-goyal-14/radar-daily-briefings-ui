---
story_id: story_c42cbd225a2543ad86ce995037c772d8
authors:
  - Lena Morita
date: 2026-11-11
generated_at: 2026-11-11T07:30:40.315Z
source: make-wordpress-core
section: wordpress
tags:
  - wordpress-7-2
  - scss-modules
  - emotion-migration
  - component-migration
  - cross-document-styling
  - deprecated-components
title: WordPress 7.2 completes components migration to SCSS Modules
url: https://make.wordpress.org/core/2026/11/10/editor-components-updates-in-wordpress-7-2
why_read: WordPress engineers can identify migration work, cross-document styling requirements, accessibility API changes, and component replacements before upgrading.
status: released
source_published_at: 2026-11-10T15:48:06.000Z
source_external_id: https://make.wordpress.org/core/?p=126923
source_adapter: rss
interest_score: 8
utility_score: 9
novelty_score: 6
depth_score: 8
impact_score: 7
---

WordPress 7.2 completes the @wordpress/components migration from Emotion to SCSS Modules. The accompanying update documents migration requirements, styling changes, new accessibility presentation options, and deprecations.

The legacy css prop on __experimentalView no longer has an effect. Consumers should use style or className, combine Emotion fragments when declaration order matters, declare imported Emotion packages directly, and provide destination-specific caches for iframes or other documents.

Color and gradient controls now accept presentation modes, while asButtons is deprecated. FontFamilyControl selectors changed, and several components are scheduled for removal in WordPress 7.4, requiring review of custom CSS and integrations.
