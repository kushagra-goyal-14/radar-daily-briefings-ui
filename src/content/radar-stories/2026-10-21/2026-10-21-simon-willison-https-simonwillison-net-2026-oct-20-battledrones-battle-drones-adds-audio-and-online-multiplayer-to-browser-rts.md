---
story_id: story_8f2f4a6e3b7c48329ee60f83a1ee4d6e
authors: []
date: 2026-10-21
generated_at: 2026-10-22T12:19:31.017Z
source: simon-willison
section: ai
tags:
  - vibe-coding
  - coding-agents
  - browser-game
  - audio-multiplayer
  - websockets
  - typescript
title: Battle Drones adds audio and online multiplayer to browser RTS
url: https://simonwillison.net/2026/Oct/20/battledrones
why_read: The project offers concrete patterns for agent-built games, deterministic simulation, audio synchronization, and low-state multiplayer infrastructure.
status: released
source_published_at: 2026-10-20T19:34:19.000Z
source_external_id: https://simonwillison.net/2026/Oct/20/battledrones/
source_adapter: atom
interest_score: 7
utility_score: 6
novelty_score: 7
depth_score: 7
impact_score: 4
---

Simon Willison has published Battle Drones, a browser-based real-time strategy game built through 12 major iterations and 321 commits by coding agents, mainly Claude Code. The released project runs on mobile and desktop and includes multiple modes, maps, AI opponents, and agent-versus-agent battles.

Its local multiplayer mode synchronizes two nearby devices through audio messages. After high-pitched modem sounds caused a headache, Willison added online multiplayer using a simple stateless WebSockets relay; players connect through a shared room URL or QR code.

The project illustrates agent-assisted game development, deterministic simulation for replay consistency, and server-light multiplayer design. Willison says he reviewed almost none of the code, and the audio feature initially had limited testing.
