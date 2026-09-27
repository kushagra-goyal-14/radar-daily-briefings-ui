---
story_id: story_626f3a96288b48dd8717da5528da65e2
authors: []
date: 2026-09-27
generated_at: 2026-09-27T07:30:08.345Z
source: simon-willison
section: programming
tags:
  - commit-messages
  - git-branches
  - python-web-app
  - uvx
  - developer-tool
title: commit-rewriter 0.2 adds support for non-default branches
url: https://simonwillison.net/2026/Sep/24/commit-rewriter
why_read: Developers can target a specific Git branch when rewriting commit messages with the documented uvx command.
status: released
source_published_at: 2026-09-24T20:06:53.000Z
source_external_id: https://simonwillison.net/2026/Sep/24/commit-rewriter/
source_adapter: atom
interest_score: 5
utility_score: 6
novelty_score: 5
depth_score: 3
impact_score: 3
---

commit-rewriter 0.2 is a released Python web app designed to help rewrite Git commit messages. The release was posted on 24 September 2026.

Its documented change is support for branches other than the default branch. Users can run `uvx commit-rewriter --branch other` to target another branch, an option associated with issue #3 in the release note.

This version is relevant to developers maintaining repository history across multiple branches. The supplied announcement does not describe the app’s architecture, performance, or implementation constraints, so its engineering trade-offs cannot be assessed from this evidence alone.
