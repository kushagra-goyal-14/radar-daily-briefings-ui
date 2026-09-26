---
story_id: story_231d5965fe8747d4a15aa7253d424ee2
authors:
  - JuanMa Garrido
date: 2026-09-26
generated_at: 2026-09-26T07:30:07.955Z
source: make-wordpress-core
section: wordpress
tags:
  - wordpress-contributor-toolkit
  - gutenberg
  - contribution-workflows
  - git-branches
  - github-pull-requests
  - wordpress-playground
title: WordPress Contributor Toolkit 1.2 adds Gutenberg contribution workflows
url: https://make.wordpress.org/core/2026/09/25/wordpress-contributor-toolkit-1-2-one-app-for-your-first-core-or-gutenberg-contribution
why_read: WordPress contributors can evaluate the new Gutenberg workflow, Git-based mechanics, authentication model, and migration constraint for older sites.
status: released
source_published_at: 2026-09-25T17:09:52.000Z
source_external_id: https://make.wordpress.org/core/?p=126258
source_adapter: rss
interest_score: 8
utility_score: 9
novelty_score: 7
depth_score: 9
impact_score: 7
---

WordPress Contributor Toolkit v1.2.0 has been released with a complete Gutenberg contribution workflow alongside its existing Core workflow. The app supports setup, issue linking, testing existing work, reviewing changes, and submitting a pull request.

A Gutenberg site clones the block editor repository, installs dependencies with bundled npm 11, builds the packages, and runs WordPress Playground with Gutenberg mounted as an activated plugin. Git branches represent issues and pull requests, while GitHub device-flow authentication enables forking and submission.

Sites created before version 1.1 cannot be written to by this release. Contributors must create a new site to continue contributing.
