---
story_id: story_6dd3333b074e46bd9b68610e65068483
authors:
  - vulpinecitrus.info via WinnerWind
date: 2026-11-11
generated_at: 2026-11-11T07:30:40.315Z
source: lobsters
section: programming
tags:
  - linux-kernel
  - signal-handling
  - sigkill
  - sigstop
  - posix-signals
  - kernel-patching
title: Linux kernel experiment makes SIGKILL and SIGSTOP handleable
url: https://vulpinecitrus.info/blog/what-if-you-could-handle-sigkill
why_read: The experiment exposes where Linux enforces signal semantics and the risks of changing those kernel-level guarantees.
status: experimental
source_published_at: 2026-11-11T06:14:34.000Z
source_external_id: https://lobste.rs/s/5wrucm
source_adapter: rss
discussion: https://lobste.rs/s/5wrucm/modding_linux_use_sigkill_on_every
discussions:
  - source: lobsters
    url: https://lobste.rs/s/5wrucm/modding_linux_use_sigkill_on_every
interest_score: 7
utility_score: 6
novelty_score: 8
depth_score: 8
impact_score: 3
---

A blog describes an experimental Linux kernel modification that allows user processes to mask and handle SIGKILL and SIGSTOP, signals normally excluded from those operations. The author reports booting the modified Linux 6.13.0 kernel and testing a process that resisted conventional termination signals.

The patch changes signal-mask and handler validation, removes several explicit exclusions in kernel signal code, adjusts timed signal waiting, and adds a KILL_STOP_HANDLING configuration option. The article traces these changes through rt_sigprocmask, rt_sigaction, signal retrieval, and related kernel paths.

The result is a systems-programming experiment, not a standard Linux capability. The author says the patches are incomplete, including unexamined ptrace, strace, and signalfd behavior, and the supplied evidence has no independent validation.
