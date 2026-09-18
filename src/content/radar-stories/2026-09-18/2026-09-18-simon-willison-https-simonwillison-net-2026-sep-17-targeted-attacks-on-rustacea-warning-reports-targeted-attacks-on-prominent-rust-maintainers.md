---
story_id: story_87ff6b5e65a64287a5af016ecee3e771
authors: []
date: 2026-09-18
generated_at: 2026-09-18T12:59:01.124Z
source: simon-willison
section: security
tags:
  - rust
  - supply-chain-attack
  - social-engineering
  - malware-publishing
  - dependency-cooldowns
  - crate-security
title: Warning reports targeted attacks on prominent Rust maintainers
url: https://simonwillison.net/2026/Sep/17/targeted-attacks-on-rustaceans
why_read: Rust users and maintainers can recognize reported attack vectors and evaluate dependency cooldowns as a supply-chain defense.
status: unknown
source_published_at: 2026-09-17T23:59:19.000Z
source_external_id: https://simonwillison.net/2026/Sep/17/targeted-attacks-on-rustaceans/
source_adapter: atom
interest_score: 8
utility_score: 7
novelty_score: 7
depth_score: 3
impact_score: 8
---

Simon Willison relays a warning from Adam Harvey and the crates security team about an ongoing campaign targeting Rust maintainers and owners of popular crates. The reported objective is to compromise devices or accounts and publish malware.

The described social-engineering vector begins with a seemingly positive video call, such as a job or project discussion. Attackers may then persuade targets to install purported software or execute a command, including one placed on the clipboard. The warning says this approach was used successfully against the array ref crate and others the previous month.

The post suggests dependency cooldowns as a possible defense. The supplied evidence contains no technical indicators, independent confirmation, or established scope.
