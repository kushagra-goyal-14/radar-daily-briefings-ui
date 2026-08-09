---
story_id: story_adf8934591854b018eb38491e9d982f4
authors:
  - Daniel Richards
date: 2026-08-09
generated_at: 2026-08-09T19:20:32.562Z
source: make-wordpress-core
section: wordpress
tags:
  - wordpress-7-1
  - block-states
  - theme-json
  - global-styles
  - block-editor
  - navigation-link-states
title: WordPress 7.1 adds pseudo and custom block style states
url: https://make.wordpress.org/core/2026/08/05/pseudo-and-custom-style-states-in-wordpress-7-1
why_read: Theme and block developers can implement interactive state styling and control whether users can edit those states.
status: released
source_published_at: 2026-08-05T06:49:35.000Z
source_external_id: https://make.wordpress.org/core/?p=125119
source_adapter: rss
interest_score: 7
utility_score: 8
novelty_score: 7
depth_score: 8
impact_score: 6
---

WordPress 7.1 documents expanded styling for block pseudo states. Users can style hover, focus, focus-visible, and active states on Button and Navigation Link blocks through the editor’s supported interfaces.

Theme authors can define these states in theme.json, while block instances can store equivalent properties in their style attributes. Navigation Link also supports an early custom -current state for the current menu item, with selectors declared in block.json.

Sites can set blockStatesEditingEnabled to false to hide state-editing controls. This leaves existing state styles intact and does not affect viewport-state editing, which is controlled separately.
