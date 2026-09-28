---
story_id: story_9bf315d934194c8d91d056e4196f50f7
authors:
  - jandeboevrie
date: 2026-09-28
generated_at: 2026-09-28T07:30:40.837Z
source: hn
section: programming
tags:
  - vim
  - neovim
  - persistent-undo
  - data-loss
  - backward-compatibility
  - humane-interface
title: Account reports NeoVim deleted Vim persistent-undo files
url: https://unsung.aresluna.org/they-had-no-concept-of-a-duty-of-care-to-their-users
why_read: The account highlights data-preservation and backward-compatibility risks when editors change persistent file formats.
status: unknown
source_published_at: 2026-09-27T14:45:07.000Z
hn_id: "49867067"
comments: https://news.ycombinator.com/item?id=49867067
interest_score: 6
utility_score: 5
novelty_score: 5
depth_score: 4
impact_score: 4
---

An article recounts developer David Chisnall's report that NeoVim changed Vim's persistent-undo format and deleted an existing undo file, replacing it with one Vim could not read. The account led Chisnall to stop using NeoVim.

According to the account, the change neither upgraded nor renamed the older undo file. Chisnall says he was told the format was unstable and that users should not rely on persistent data being preserved.

The episode illustrates why editor migrations need careful handling of durable user data and format compatibility. The supplied evidence is an opinion article without version details, reproduction steps, an official response, or independent confirmation.
