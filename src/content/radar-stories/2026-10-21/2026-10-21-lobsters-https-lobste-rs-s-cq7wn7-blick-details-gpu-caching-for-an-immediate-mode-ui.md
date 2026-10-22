---
story_id: story_187b28d8c49b4479ab9886a36f09b39f
authors:
  - blickeditor.com via asb
date: 2026-10-21
generated_at: 2026-10-22T12:19:31.017Z
source: lobsters
section: programming
tags:
  - immediate-mode-ui
  - rendering-cache
  - tile-based-rendering
  - compute-shaders
  - metal-backend
  - gpu-rendering
title: Blick details GPU caching for an immediate-mode UI
url: https://blickeditor.com/blog/caching-an-immediate-mode-ui
why_read: The design shows how tile binning, GPU command hashing, and renderer-side caching can reduce repaint work without changing the immediate-mode UI model.
status: unknown
source_published_at: 2026-10-21T17:16:47.000Z
source_external_id: https://lobste.rs/s/cq7wn7
source_adapter: rss
discussion: https://lobste.rs/s/cq7wn7/don_t_throw_it_all_away_caching_immediate
discussions:
  - source: lobsters
    url: https://lobste.rs/s/cq7wn7/don_t_throw_it_all_away_caching_immediate
interest_score: 7
utility_score: 7
novelty_score: 7
depth_score: 8
impact_score: 5
---

Blick describes a renderer-side cache for an immediate-mode UI. The UI can rebuild its description each frame while the renderer retains previously produced pixels and repaints only tiles whose rendering inputs changed.

The Metal backend converts drawing into a compact command stream, bins commands into tiles with compute shaders, and hashes each tile’s ordered commands and dependencies. Unchanged hashes preserve pixels; changed texture content, animation, effects, or explicit invalidation can trigger repainting. Shape groups and alpha barriers support combined outlines and subtree opacity.

In a short light-editing test, Blick reports about 20% lower CPU-plus-GPU power estimates, 94% fewer painted tiles, and 87% less painter GPU time.
