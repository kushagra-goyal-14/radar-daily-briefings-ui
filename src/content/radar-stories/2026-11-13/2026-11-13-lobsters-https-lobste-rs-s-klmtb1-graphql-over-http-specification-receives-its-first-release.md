---
story_id: story_29432be2991a4dce8f01bc96bcb07a84
authors:
  - graphql.org via sp6370
date: 2026-11-13
generated_at: 2026-11-13T07:30:39.568Z
source: lobsters
section: programming
tags:
  - graphql
  - http-standardization
  - api-interoperability
  - media-types
  - http-status-codes
  - observability
title: GraphQL over HTTP specification receives its first release
url: https://graphql.org/blog/2026-11-12-announcing-the-graphql-over-http-spec
why_read: GraphQL implementers can align servers, clients, proxies, and monitoring tools with standardized HTTP response semantics.
status: released
source_published_at: 2026-11-13T01:16:15.000Z
source_external_id: https://lobste.rs/s/klmtb1
source_adapter: rss
discussion: https://lobste.rs/s/klmtb1/announcing_graphql_over_http
discussions:
  - source: lobsters
    url: https://lobste.rs/s/klmtb1/announcing_graphql_over_http
interest_score: 8
utility_score: 8
novelty_score: 8
depth_score: 7
impact_score: 8
---

The GraphQL TSC has released the first GraphQL over HTTP specification. It supplements GraphQL’s transport-agnostic core with guidance for HTTP-based implementations.

The specification defines the `application/graphql-response+json` media type and response semantics: use 2xx status codes when data is returned, and 4xx or 5xx codes when responses contain only errors. It also introduces 294 Partial Success for responses containing both data and errors.

The guidance targets GraphQL servers, clients, proxies, and other services. QUERY support, persisted-document standardization, and request batching remain future work, while the article provides no independent assessment of existing framework support.
