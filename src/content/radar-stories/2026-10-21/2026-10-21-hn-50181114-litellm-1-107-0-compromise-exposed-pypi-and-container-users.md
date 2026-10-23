---
story_id: story_17cee98fcf9440a1b7f54123c4a2c50e
authors:
  - abhisek
date: 2026-10-21
generated_at: 2026-10-22T12:19:31.017Z
source: hn
section: security
tags:
  - pypi-malware
  - supply-chain-attack
  - credential-stealing
  - python-packages
  - backdoor
  - incident-response
title: Compromised LiteLLM 1.107.0 package installs credential stealer and backdoor
url: https://safedep.io/litellm-pypi-compromise-credential-stealer-backdoor
why_read: Operators can identify affected artifacts, inspect indicators of compromise, and prioritize credential rotation and incident response.
status: fixed
source_published_at: 2026-10-21T14:00:26.000Z
hn_id: "50181114"
comments: https://news.ycombinator.com/item?id=50181114
interest_score: 10
utility_score: 10
novelty_score: 8
depth_score: 10
impact_score: 9
---

SafeDep reports that LiteLLM 1.107.0 was compromised on PyPI. Its seven wheels installed a credential stealer and remote-code-execution backdoor, and matching Docker images were published. PyPI removed the release, while affected container tags were removed or repointed to clean images.

The implant used a .pth file to run during Python startup and collected credentials from developer hosts, CI systems, cloud environments, browsers, and LiteLLM databases. A sitecustomize.py daemon periodically fetched and executed code from an attacker-controlled domain.

Operators should investigate the listed files, hashes, network indicators, and container digest, then follow LiteLLM's remediation guidance. The report does not establish whether stolen data or second-stage code was used.
