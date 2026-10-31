---
story_id: story_a69bdb16bec949319e067496eb5322fa
authors: []
date: 2026-10-31
generated_at: 2026-10-31T07:30:13.451Z
source: simon-willison
section: ai
tags:
  - llm-emulation
  - nes-emulator
  - 6502-cpu
  - qwen3-5-4b
  - conformance-tests
  - model-weights
title: nesformer embeds a working NES 6502 emulator in Qwen3.5-4B
url: https://simonwillison.net/2026/Oct/30/nesformer
why_read: The project illustrates an unusual neural-emulation experiment while leaving performance, architecture, and practical applicability largely unmeasured.
status: unknown
source_published_at: 2026-10-30T21:59:22.000Z
source_external_id: https://simonwillison.net/2026/Oct/30/nesformer/
source_adapter: atom
interest_score: 7
utility_score: 4
novelty_score: 9
depth_score: 4
impact_score: 3
---

Simon Willison reports that Drew Breunig built a working Nintendo Entertainment System 6502 CPU emulator into the weights of Qwen3.5-4B. The resulting system can run NES ROMs, including Super Mario Bros., although it does so very slowly.

The project was inspired by qwenputer and reportedly used a collection of NES CPU conformance tests attributed to Christopher Pow. The supplied account does not explain the model architecture or how emulation state is represented.

For AI and emulator engineers, nesformer is a notable neural-emulation experiment rather than a measured replacement for conventional emulators. The evidence includes no clock-speed comparison, reproducibility details, or broader applicability assessment.
