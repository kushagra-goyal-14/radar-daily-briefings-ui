---
story_id: story_eeb41eb0dd5745b4a143a43bfe896c38
authors:
  - Justin Tadlock
date: 2026-08-04
generated_at: 2026-08-04T05:23:45.604Z
source: wordpress-developer-blog
section: wordpress
tags:
  - wordpress-hooks
  - event-dispatching
  - psr-14
  - typed-events
  - php-plugins
  - object-oriented-design
title: WordPress article proposes typed event objects for do_action() hooks
url: https://developer.wordpress.org/news/2026/08/rethinking-do_action-events-as-objects-hooks-as-class-names
why_read: Plugin developers can evaluate a practical hook convention and its tradeoffs against formal event systems such as PSR-14.
status: unknown
source_published_at: 2026-08-03T21:00:34.000Z
source_external_id: https://developer.wordpress.org/news/?p=6338
source_adapter: rss
interest_score: 7
utility_score: 8
novelty_score: 6
depth_score: 8
impact_score: 6
---

Justin Tadlock’s WordPress article proposes using typed event objects with existing do_action() hooks. The convention passes one object as the payload and uses either its class name or a fixed string as the hook tag.

The example defines readonly context properties and a mutable decision property, allowing listeners to observe or modify the object before the dispatcher reads it back. Type-hinted callbacks improve editor support and reduce positional-argument handling.

The approach remains a convention rather than a WordPress core change. It does not provide formal PSR-14 features such as propagation control, listener providers, subscriber objects, or a swappable dispatcher.
