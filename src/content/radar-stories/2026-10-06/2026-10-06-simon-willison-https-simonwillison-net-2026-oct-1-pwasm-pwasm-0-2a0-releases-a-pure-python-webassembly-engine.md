---
story_id: story_fc342b690f3f43649258ba91fcda73aa
authors: []
date: 2026-10-06
generated_at: 2026-10-06T07:30:22.786Z
source: simon-willison
section: programming
tags:
  - webassembly
  - pure-python
  - wasm-runtime
  - micropython
  - quickjs
  - ai-assisted-development
title: pwasm 0.2a0 releases a pure-Python WebAssembly engine
url: https://simonwillison.net/2026/Oct/1/pwasm
why_read: Runtime engineers can evaluate an unusual pure-Python WASM engine and bundled language runtimes while accounting for its explicitly experimental reliability.
status: released
source_published_at: 2026-10-01T17:10:31.000Z
source_external_id: https://simonwillison.net/2026/Oct/1/pwasm/
source_adapter: atom
interest_score: 7
utility_score: 6
novelty_score: 8
depth_score: 6
impact_score: 5
---

pwasm 0.2a0 is a released alpha version of a WebAssembly engine written entirely in pure Python. Simon Willison describes it as a project improved through 42 commits after Claude Opus 5.5 was asked to evaluate and extend its earlier state.

The project now handles almost all of the WebAssembly specification, according to Willison. Its PyPI wheel bundles working WASM builds of MicroPython, QuickJS, and Micro QuickJS.

The release is useful for runtime experimentation and language-tooling work, but its alpha status is material: Willison explicitly says he would not trust it. The supplied evidence does not establish performance or production readiness.
