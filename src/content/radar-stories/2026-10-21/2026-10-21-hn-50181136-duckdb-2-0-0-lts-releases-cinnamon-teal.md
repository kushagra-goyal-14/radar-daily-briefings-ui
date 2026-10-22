---
story_id: story_11385d6ae6d04d9e945d8a108a815a8e
authors:
  - nnx
date: 2026-10-21
generated_at: 2026-10-22T12:19:31.017Z
source: hn
section: databases
tags:
  - duckdb
  - database-server
  - asynchronous-io
  - variant-type
  - sql-parser
  - breaking-changes
title: DuckDB 2.0.0 LTS releases Cinnamon Teal
url: https://duckdb.org/2026/10/21/announcing-duckdb-200.html
why_read: Engineers can assess new server, SQL, extension, performance, and compatibility capabilities before upgrading production deployments.
status: released
source_published_at: 2026-10-21T14:01:22.000Z
hn_id: "50181136"
comments: https://news.ycombinator.com/item?id=50181136
interest_score: 9
utility_score: 9
novelty_score: 8
depth_score: 8
impact_score: 8
---

The DuckDB team has released DuckDB 2.0.0 LTS, codenamed “Cinnamon Teal,” with support planned until at least October 2027. The feature release adds server operation through Quack, asynchronous I/O, first-class VARIANT data, agent mode, triggers, and an extensible PEG-based SQL parser.

DuckDB 2.0 can connect to remote databases and push down queries for supported PostgreSQL and MySQL connections. Asynchronous I/O applies to Parquet, CSV, and native storage reads, while agent mode changes CLI output and query-cost reporting.

Migration requires care: pre-2.0 versions cannot read databases created by 2.0. The project recommends shadow-system testing and notes that some clients and extensions may lag the core release.
