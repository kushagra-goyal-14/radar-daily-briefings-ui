---
story_id: story_8df2a6f3f4664819b426480258b7c78a
authors:
  - George Mamadashvili
date: 2026-11-12
generated_at: 2026-11-12T07:30:31.469Z
source: make-wordpress-core
section: wordpress
tags:
  - wordpress-7-2
  - editor-menus
  - menu-component
  - plugin-migration
  - deprecated-as-prop
  - end-to-end-testing
title: WordPress 7.2 moves editor menus to the new Menu component
url: https://make.wordpress.org/core/2026/11/11/editor-the-options-and-view-menus-now-use-the-new-menu-component
why_read: Plugin developers must update menu integrations, styling assumptions, and end-to-end selectors for WordPress 7.2.
status: released
source_published_at: 2026-11-11T14:52:27.000Z
source_external_id: https://make.wordpress.org/core/?p=126932
source_adapter: rss
interest_score: 7
utility_score: 9
novelty_score: 6
depth_score: 8
impact_score: 6
---

WordPress 7.2 updates the Options and View menus in both the post and site editors to use the new Menu component. The change provides improved keyboard navigation, checkbox and link items, and Design System styling.

Plugin menu items remain supported through `PluginMoreMenuItem`, `PluginSidebarMoreMenuItem`, and `PluginPreviewMoreMenuItem`, but Options items now appear under a Panels submenu. The undocumented `as` prop is deprecated, ignored, and replaced by documented props such as `icon`, `onClick`, `href`, and `disabled`.

Plugins and end-to-end tests must account for changed markup and role-based selectors. Direct `ActionItem` users retain a compatibility path, provided custom components forward props and refs.
