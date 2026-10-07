---
story_id: story_e4463c5ab4a34d46a5d65972bb57d12f
authors:
  - fsbonetto
date: 2026-10-07
generated_at: 2026-10-07T07:30:36.281Z
source: hn
section: ai
tags:
  - ai-accelerator
  - fpga-inference
  - systemverilog
  - hardware-software-co-design
  - model-quantization
  - mixture-of-experts
title: OpenTPU releases open-source FPGA accelerator for language models
url: https://github.com/FeSens/openTPU
why_read: Engineers can inspect a complete accelerator stack and evaluate its measured memory, quantization, timing, and host-offload tradeoffs.
status: released
source_published_at: 2026-10-06T16:23:25.000Z
hn_id: "49980715"
comments: https://news.ycombinator.com/item?id=49980715
interest_score: 9
utility_score: 9
novelty_score: 8
depth_score: 10
impact_score: 7
---

openTPU presents an open-source AI accelerator whose stack covers SystemVerilog RTL, an instruction set, a bit-exact simulator, a kernel compiler, and host software. The project reports production-image inference for ten language-model configurations on an Inspur YPCB-00338 Xilinx Kintex-7 card.

Its sequencer explicitly issues data-movement instructions to DMA, matrix, vector, and quantization units. The project reports bit-for-bit agreement between card and simulator outputs, 4-bit weight support, and mixture-of-experts offloading from host storage.

Measurements are tied to this FPGA and DDR3 platform. Decode is DRAM-bound, while timing closes only narrowly at 133.33 MHz; current work targets memory efficiency, timing margin, area, and prefill.
