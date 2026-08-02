---
story_id: story_da79b1b0d05841cab4ccdf48c860c05a
authors:
  - marcobambini
date: 2026-08-02
generated_at: 2026-08-02T04:43:44.972Z
source: hn
section: ai
tags:
  - kimi-k3
  - llm-inference
  - mixture-of-experts
  - disk-streaming
  - expert-caching
  - c11-inference-engine
title: WASTE runs open-weights Kimi K3 on a 64 GB laptop
url: https://github.com/sqliteai/waste
why_read: Engineers can evaluate the storage, memory, throughput, and model-specific constraints of local trillion-parameter inference.
status: released
source_published_at: 2026-07-31T14:12:38.000Z
hn_id: "49123386"
comments: https://news.ycombinator.com/item?id=49123386
interest_score: 9
utility_score: 9
novelty_score: 9
depth_score: 10
impact_score: 7
---

WASTE reports running the open-weights Kimi K3 model, with 2.78 trillion parameters, on a 64 GB MacBook Pro. Its converted container is 982 GiB, and measured decode speed is 0.45–0.62 tokens per second.

The C11 engine keeps the model trunk resident, streams selected mixture-of-experts weights from disk, and uses remaining RAM for a bounded expert cache. Read-ahead overlaps I/O with computation, while lookahead fetches likely experts for the next layer.

The result is local inference without a network connection, but storage and memory requirements are substantial. K3 support is model-specific, the API is not frozen, and several platform paths have not been validated on real target hardware.
