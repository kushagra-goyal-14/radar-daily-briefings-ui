---
story_id: story_1f2f0e4528364b0cb7810d887c876a1b
authors:
  - mfiguiere
date: 2026-08-01
generated_at: 2026-08-01T00:03:51.221Z
source: hn
section: programming
tags:
  - java
  - value-objects
  - jvm
  - strict-field-initialization
  - openjdk
  - project-valhalla
title: OpenJDK integrates first preview implementation of JEP 401
url: https://github.com/openjdk/jdk/pull/31120
why_read: Java compiler, runtime, and library engineers can assess the integrated preview implementation and its cross-component review context.
status: merged
source_published_at: 2026-07-31T04:38:19.000Z
hn_id: "49119063"
comments: https://news.ycombinator.com/item?id=49119063
interest_score: 9
utility_score: 7
novelty_score: 8
depth_score: 9
impact_score: 9
---

OpenJDK integrated the first preview implementation of JEP 401, Value Objects, on July 31, 2026, closing the pull request after pushing commit cc278db. The same integration includes JEP 539, Strict Field Initialization in the JVM.

The change spans Java language, JVM, and standard-library implementations. The pull request explains that JEP 401 depends on strict field initialization, so the components were developed in the same code base and reviewed through linked sub-reviews.

This gives compiler, runtime, and library engineers an integrated implementation to examine. Both efforts remain preview features, and the supplied evidence does not establish compatibility outcomes or adoption guidance.
