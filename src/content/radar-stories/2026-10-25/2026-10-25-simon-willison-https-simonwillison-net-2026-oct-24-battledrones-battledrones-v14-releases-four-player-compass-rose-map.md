---
story_id: story_1d180101ddfe4a618c44e319601e1ba3
authors: []
date: 2026-10-25
generated_at: 2026-10-25T07:30:13.564Z
source: simon-willison
section: programming
tags:
  - real-time-multiplayer
  - websockets
  - mobile-web-game
  - four-player-mode
  - ai-assisted-development
  - map-design
title: Battledrones v14 releases four-player Compass Rose map
url: https://simonwillison.net/2026/Oct/24/battledrones
why_read: Engineers can examine a concrete WebSocket multiplayer expansion combining human slots, AI fill-ins, and shareable joining mechanisms.
status: released
source_published_at: 2026-10-24T03:59:57.000Z
source_external_id: https://simonwillison.net/2026/Oct/24/battledrones/
source_adapter: atom
interest_score: 5
utility_score: 4
novelty_score: 6
depth_score: 5
impact_score: 3
---

Simon Willison has released Battledrones v14, adding Compass Rose, a four-player map for the mobile web RTS. Earlier maps were limited to two players.

The map uses four-way rotational symmetry and supports up to four AI players. The release also modifies the WebSocket multiplayer code so up to four humans can join through share links or QR codes; unused slots are filled by AI.

The update adds purple and green robot teams alongside the existing blue and red designs. The supplied article describes this change in one project and provides limited implementation detail beyond the multiplayer behavior.
