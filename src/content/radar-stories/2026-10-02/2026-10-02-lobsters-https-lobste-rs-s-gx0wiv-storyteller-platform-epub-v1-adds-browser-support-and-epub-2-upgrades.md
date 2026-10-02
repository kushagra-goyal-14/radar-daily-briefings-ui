---
story_id: story_5ee4d36c757a4d4e96618cc8b553b618
authors:
  - storyteller-platform.dev by smoores
date: 2026-10-02
generated_at: 2026-10-02T07:30:17.931Z
source: lobsters
section: programming
tags:
  - epub-processing
  - browser-support
  - xml-namespaces
  - storage-adapters
  - jsx-runtime
  - epub-2-upgrade
title: "@storyteller-platform/epub v1 adds browser support and EPUB 2 upgrades"
url: https://storyteller-platform.dev/blog/20261001_epub_v1
why_read: Engineers integrating EPUB workflows can assess new browser, storage, XML, JSX, and migration APIs introduced in the release.
status: released
source_published_at: 2026-10-02T07:09:51.000Z
source_external_id: https://lobste.rs/s/gx0wiv
source_adapter: rss
discussion: https://lobste.rs/s/gx0wiv/storyteller_platform_epub_v1_0_0_release
discussions:
  - source: lobsters
    url: https://lobste.rs/s/gx0wiv/storyteller_platform_epub_v1_0_0_release
interest_score: 7
utility_score: 8
novelty_score: 7
depth_score: 8
impact_score: 5
---

Storyteller has released v1 of @storyteller-platform/epub, adding storage adapters, browser support, XML utilities, JSX authoring, and EPUB 2 upgrade tooling.

MemoryAdapter lazily unpacks EPUB files into memory and is read-only, while TmpFsAdapter eagerly unpacks into /tmp and permits writes. Browser use currently supports MemoryAdapter. The release also moves from fast-xml-parser to @xmldom/xmldom, providing DOM-style APIs and XML namespace support, plus hyperscript and jsx-runtime exports.

Epub.upgrade can upgrade EPUB 2 publications in place or to a new path, while the library otherwise supports EPUB 3. Safari lacks support for the demonstrated using syntax.
