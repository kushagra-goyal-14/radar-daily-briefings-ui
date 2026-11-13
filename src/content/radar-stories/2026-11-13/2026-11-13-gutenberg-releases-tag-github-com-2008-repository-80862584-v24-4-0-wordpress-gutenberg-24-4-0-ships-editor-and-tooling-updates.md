---
story_id: story_860d2ea2c8d147f2b8c8bf938a5438d9
authors:
  - wp-printingpress[bot]
date: 2026-11-13
generated_at: 2026-11-13T07:30:39.568Z
source: gutenberg-releases
section: wordpress
tags:
  - wordpress-release
  - gutenberg
  - block-editor
  - wp-env
  - build-pipeline
  - accessibility
title: WordPress Gutenberg 24.4.0 ships editor and tooling updates
url: https://github.com/WordPress/gutenberg/releases/tag/v24.4.0
why_read: WordPress engineers can assess new editor capabilities, experimental tooling, migration requirements, and build-pipeline changes before upgrading.
status: released
source_published_at: 2026-11-12T20:35:29.000Z
source_external_id: tag:github.com,2008:Repository/80862584/v24.4.0
source_adapter: atom
interest_score: 8
utility_score: 8
novelty_score: 5
depth_score: 8
impact_score: 7
---

WordPress Gutenberg 24.4.0 was released on November 12, 2026. The release combines editor, block-library, accessibility, design-system, developer-tool, and testing changes across the project.

A notable feature is an experimental wp-env runtime using locally installed PHP and SQLite. The release also adds an npm run browse command, introduces PHPStan level-5 analysis, updates Storybook, Vite, and Vitest, and migrates the build pipeline from esbuild to Rolldown.

Engineers upgrading should review the documented compatibility changes: Widget Dashboard hosts may need a column-step map, and consumers of moved theme build and Stylelint plugins must update imports. The supplied material does not include independent upgrade testing results.
