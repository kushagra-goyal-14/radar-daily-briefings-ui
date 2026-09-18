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
  - editor-inspector
  - quick-edit
  - plugin-compatibility
title: WordPress calls for testing DataForm editor inspector experiment
url: https://make.wordpress.org/core/2026/09/17/call-for-testing-dataform-editor-inspector
why_read: Plugin developers can identify compatibility gaps and migration work before the DataForm-based inspector is stabilized.
status: experimental
source_published_at: 2026-09-17T14:26:49.000Z
source_external_id: https://make.wordpress.org/core/?p=126122
source_adapter: rss
interest_score: 7
utility_score: 8
novelty_score: 6
depth_score: 7
impact_score: 7
---

WordPress is asking developers and site owners to test a Gutenberg experiment that rebuilds the post editor’s Post or Page settings sidebar with DataForm. The experiment is intended to support stabilization for WordPress 7.2.

With “Editor Inspector: Use DataForm” enabled, classic summary panels such as featured image, excerpt, status, date, author, and template are replaced by a DataForm. The same form definition is used for Quick Edit in the Site Editor, with settings following each post type’s supported features.

Several compatibility gaps remain. Plugin panels continue to work, but PluginPostExcerpt is not ported, editor.MediaUpload does not yet affect the featured image picker, and design questions remain open. Engineers should test against the documented Gutenberg versions and report plugin-specific behavior.
