---
story_id: story_a43a84539eea40a3b0e0e69a42b06fb7
authors:
  - Nik Tsekouras
date: 2026-09-18
generated_at: 2026-09-18T12:59:01.124Z
source: make-wordpress-core
section: wordpress
tags:
  - wordpress-editor
  - gutenberg
  - dataform
  - plugin-compatibility
  - editor-inspector
  - quick-edit
title: WordPress tests DataForm-based editor inspector experiment
url: https://make.wordpress.org/core/2026/09/17/call-for-testing-dataform-editor-inspector
why_read: Plugin developers can identify compatibility gaps and migration needs before the planned WordPress 7.2 stabilization target.
status: experimental
source_published_at: 2026-09-17T14:26:49.000Z
source_external_id: https://make.wordpress.org/core/?p=126122
source_adapter: rss
interest_score: 8
utility_score: 9
novelty_score: 6
depth_score: 8
impact_score: 7
---

WordPress is asking contributors to test a Gutenberg experiment that rebuilds the post editor’s Settings sidebar with DataForm. The experiment is intended to consolidate the post inspector and Site Editor Quick Edit, with stabilization targeted for WordPress 7.2.

When enabled, DataForm replaces classic post-inspector summary panels for block-editor post types. Developers can continue using several plugin panel APIs, while the fields API is intended to expose fields across both screens.

Compatibility work remains necessary. PluginPostExcerpt is not ported, editor.PostFeaturedImage does not work yet, and the editor.MediaUpload path is still exploratory. The document also leaves several design questions open.
