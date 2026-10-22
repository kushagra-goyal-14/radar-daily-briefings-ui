---
story_id: story_17cee98fcf9440a1b7f54123c4a2c50e
authors:
  - abhisek
date: 2026-10-21
generated_at: 2026-10-22T12:19:31.017Z
source: hn
section: security
tags:
  - supply-chain-compromise
  - credential-stealer
  - backdoor
  - pypi-malware
  - python-startup-hooks
  - container-images
title: LiteLLM 1.107.0 compromise exposed PyPI and container users
url: https://safedep.io/litellm-pypi-compromise-credential-stealer-backdoor
why_read: Engineers can identify affected artifacts, startup-hook indicators, stolen credential classes, and containment priorities for potentially infected hosts.
status: fixed
source_published_at: 2026-10-21T14:00:26.000Z
hn_id: "50181114"
comments: https://news.ycombinator.com/item?id=50181114
interest_score: 10
utility_score: 10
novelty_score: 9
depth_score: 10
impact_score: 9
---

SafeDep reports that LiteLLM 1.107.0 was compromised and that its PyPI wheels installed a credential stealer and remote-code-execution backdoor. LiteLLM confirmed the incident, and PyPI removed the release; affected Docker tags were later removed or repointed.

The malicious release added Python startup hooks: cook.pth imported a stealer in every Python process, while sitecustomize.py launched a detached daemon that periodically fetched and executed code. The stealer targeted SSH, cloud, CI/CD, browser, AI-tool, and LiteLLM proxy credentials.

Operators should investigate the listed files, hashes, network indicators, and affected image digest. Clean versions identified in the evidence include 1.106.2 and the 1.107.0 release candidates; the supplied material does not quantify affected installations.
