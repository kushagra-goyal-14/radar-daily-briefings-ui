---
story_id: story_df39da554b89471ba32e6ab5b1c52843
authors:
  - well-typed.com via abhin4v
date: 2026-09-25
generated_at: 2026-09-25T07:30:16.710Z
source: lobsters
section: programming
tags:
  - haskell
  - eventlog-telemetry
  - opentelemetry
  - performance-profiling
  - heap-profiling
  - observability
title: Well-Typed releases Eventlog Live for Haskell telemetry
url: https://www.well-typed.com/blog/2026/09/real-time-telemetry-with-eventlog-live
why_read: Haskell engineers can connect runtime profiling signals to existing OpenTelemetry observability workflows with minimal application instrumentation.
status: released
source_published_at: 2026-09-25T06:34:27.000Z
source_external_id: https://lobste.rs/s/3bgvbn
source_adapter: rss
discussion: https://lobste.rs/s/3bgvbn/real_time_telemetry_with_eventlog_live
discussions:
  - source: lobsters
    url: https://lobste.rs/s/3bgvbn/real_time_telemetry_with_eventlog_live
interest_score: 7
utility_score: 8
novelty_score: 7
depth_score: 8
impact_score: 5
---

Well-Typed has released Eventlog Live 0.10.0.0, a program for streaming real-time telemetry from Haskell applications. It analyzes GHC eventlogs and exports data through the OpenTelemetry protocol to platforms such as Grafana Cloud and Prometheus, or to local viewers.

The release supports heap profiles, memory metrics, cost-centre stack profiles, logs, productivity, and thread and capability traces. It runs alongside an application and requires the `-threaded` and `-rtsopts` build options; telemetry aggregation and export intervals are configurable.

Eventlog Live has no published built-in viewer yet, and some heap-profile breakdowns need additional support. Its control protocol and REST API are disabled by default behind `+control`.
