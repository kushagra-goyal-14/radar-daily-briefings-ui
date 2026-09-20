---
story_id: story_7cd2325a70634d86a3d8e148c32ba355
authors: []
date: 2026-09-20
generated_at: 2026-09-20T07:30:43.471Z
source: simon-willison
section: programming
tags:
  - datasette
  - github-authentication
  - session-cookies
  - max-age
  - plugin-release
title: datasette-auth-github 1.0 fixes session cookie expiry
url: https://simonwillison.net/2026/Sep/19/datasette-auth-github
why_read: Datasette operators can assess whether the release addresses unexpectedly short-lived authenticated sessions in their deployments.
status: released
source_published_at: 2026-09-19T19:52:02.000Z
source_external_id: https://simonwillison.net/2026/Sep/19/datasette-auth-github/
source_adapter: atom
interest_score: 5
utility_score: 6
novelty_score: 5
depth_score: 4
impact_score: 4
---

datasette-auth-github 1.0 has been released as a stable version of the Datasette plugin that authenticates users against GitHub. The release follows a session-persistence fix in pull request #80.

The plugin had been setting authentication cookies without a Max-Age parameter. As a result, sessions expired when the browser session ended; the release adds the missing cookie lifetime configuration.

The plugin is tested against Datasette 0.65.x and Datasette 1.0ax. Operators using GitHub authentication with this plugin should review the release if their sessions have been unexpectedly short-lived, while noting that the supplied document gives limited implementation and compatibility detail.
