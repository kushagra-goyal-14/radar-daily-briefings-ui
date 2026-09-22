---
story_id: story_b2b8241c1310417eb43cf9fb27ca1a41
authors: []
date: 2026-09-22
generated_at: 2026-09-22T07:30:15.145Z
source: simon-willison
section: infrastructure
tags:
  - python-workers
  - webassembly
  - pyodide
  - workerd
  - serverless-runtime
  - local-development
title: Cloudflare makes Python Workers generally available
url: https://simonwillison.net/2026/Sep/21/cloudflare-python-worker
why_read: Engineers evaluating Python serverless runtimes can assess the WebAssembly execution model, local simulation tooling, and concurrency constraints.
status: released
source_published_at: 2026-09-21T22:25:44.000Z
source_external_id: https://simonwillison.net/2026/Sep/21/cloudflare-python-worker/
source_adapter: atom
interest_score: 8
utility_score: 8
novelty_score: 7
depth_score: 8
impact_score: 7
---

Cloudflare Python Workers are generally available after a two-year preview, according to the supplied report. The release makes Python a supported language on Cloudflare’s server-side Workers platform.

Python is compiled to WebAssembly through Pyodide and executed in the V8-based workerd runtime. The WebAssembly environment does not support multiprocessing or threading. For local development, pywrangler—packaged as workers-py on PyPI—runs a local simulation using a workerd binary and Pyodide.

The runtime model is relevant to engineers assessing Python serverless deployments, but concurrency limitations remain material. The supplied evidence is a specialist blog report and does not independently establish broader Python compatibility.
