---
story_id: story_c563592e00a740d49d300f096fcb3b52
authors: []
date: 2026-09-25
generated_at: 2026-09-25T07:30:16.710Z
source: simon-willison
section: open-source
tags:
  - datasette
  - opentelemetry
  - web-components
  - plugin-integration
  - data-publishing
title: Datasette 1.0a41 adds OpenTelemetry and shared modal Web Component
url: https://simonwillison.net/2026/Sep/24/datasette
why_read: Datasette operators and plugin developers can assess the release’s observability addition and shared interface for modal integration.
status: released
source_published_at: 2026-09-24T19:15:23.000Z
source_external_id: https://simonwillison.net/2026/Sep/24/datasette/
source_adapter: atom
interest_score: 6
utility_score: 6
novelty_score: 6
depth_score: 4
impact_score: 5
---

Datasette 1.0a41 is presented as a release adding OpenTelemetry support. The update also refactors Datasette’s modal dialogs into a single Web Component.

The release note says this component is documented for other plugins to use, making the modal implementation a shared integration surface for the Datasette plugin ecosystem.

The supplied material does not explain OpenTelemetry configuration, the component’s API, compatibility with existing plugins, or migration requirements. Engineers should consult the project’s detailed documentation before adopting either change.
