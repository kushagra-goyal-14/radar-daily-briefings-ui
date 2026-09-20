---
story_id: story_e501ccbd4bdd449ab89ce54d6fe59921
authors:
  - fex-emu.com via videah
date: 2026-09-19
generated_at: 2026-09-19T07:30:27.260Z
source: lobsters
section: infrastructure
tags:
  - x86-emulation
  - arm-memory-model
  - x86-tso
  - fex-emu
  - lrcpc-extensions
  - uncached-memory
title: FEX details x86-TSO emulation constraints on ARM
url: https://fex-emu.com/Scourge-of-emulation
why_read: The article identifies hardware features, performance cliffs, and workarounds relevant to ARM emulator and systems-performance decisions.
status: unknown
source_published_at: 2026-09-19T05:01:05.000Z
source_external_id: https://lobste.rs/s/iq6w6l
source_adapter: rss
discussion: https://lobste.rs/s/iq6w6l/scourge_x86_emulation
discussions:
  - source: lobsters
    url: https://lobste.rs/s/iq6w6l/scourge_x86_emulation
interest_score: 8
utility_score: 7
novelty_score: 8
depth_score: 9
impact_score: 6
---

FEX’s article examines the ongoing difficulty of emulating x86-TSO on ARM. It describes memory-ordering, alignment, atomic-access, and uncached-memory cases that affect x86 applications running through emulation.

On ARMv8.0-A, FEX uses load-acquire and store-release instructions to approximate x86 semantics. The article reports that LRCPC extensions can bring some loads near regular-load performance, while Apple Silicon provides a hardware TSO mode. FEX also uses fault handling and patching for unaligned accesses.

The most severe reported limitation involves uncached write-combine stores for PCIe GPUs, with benchmark results showing up to an 816-fold bandwidth gap. These are project-reported measurements, and the supplied text does not provide independent validation or complete hardware coverage.
