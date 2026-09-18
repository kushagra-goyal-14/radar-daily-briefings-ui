---
story_id: story_1f13956f09194931a7f9aae835aa70c4
authors:
  - nicolas-siplis
date: 2026-09-18
generated_at: 2026-09-18T12:59:01.124Z
source: hn
section: programming
tags:
  - programming-language
  - formal-verification
  - dependent-types
  - parallel-computing
  - gpu-computing
  - ai-coding-agents
title: Bend presents proof-checked CPU and GPU programming
url: https://bend-lang.com/
why_read: Engineers can evaluate a unified CPU/GPU model and proof workflow while accounting for immature tooling and unverified performance claims.
status: released
source_published_at: 2026-09-17T20:36:13.000Z
hn_id: "49746163"
comments: https://news.ycombinator.com/item?id=49746163
interest_score: 7
utility_score: 5
novelty_score: 8
depth_score: 5
impact_score: 4
---

Bend presents a programming language that combines Python syntax, native compilation, proof checking, and parallel execution on CPUs and GPUs. The project provides installation instructions and describes the language as available for experimentation.

Bend uses LAWS.bend to declare properties and PROOF.bend to check them. The project says its runtime can distribute work across CPU cores or GPUs without requiring developers to write threads, locks, or kernels.

The approach is relevant to engineers evaluating AI-assisted development with formal constraints. However, the supplied page offers no reproducible benchmark methodology, and it warns that Bend is young, evolving, and best suited to back-end use on Linux and macOS.
