---
story_id: story_9da610d88143453195fa9c07aef76a59
authors:
  - /u/Chemical_Hawk_6307
date: 2026-11-11
generated_at: 2026-11-11T07:30:40.315Z
source: reddit-local-llama
section: ai
tags:
  - ai-agent-backdoor
  - model-weight-integrity
  - model-provenance
  - dormant-neurons
  - weight-scanning
  - cryptographic-model-signing
title: Microsoft Research reports Lazarus backdoor using dormant neurons
url: https://www.microsoft.com/en-us/research/blog/lazare-veni-foras-reprogramming-dormant-neurons-to-backdoor-ai-agents
why_read: The report highlights concrete provenance, model-integrity, detection, and access-control decisions for systems that give AI agents tool privileges.
status: released
source_published_at: 2026-11-11T04:09:44.000Z
source_external_id: t3_1xt82mz
source_adapter: reddit_rss
discussion: https://www.reddit.com/r/LocalLLaMA/comments/1xt82mz/microsoft_research_backdoored_an_ai_agent_by/
discussions:
  - source: reddit-local-llama
    url: https://www.reddit.com/r/LocalLLaMA/comments/1xt82mz/microsoft_research_backdoored_an_ai_agent_by/
interest_score: 9
utility_score: 8
novelty_score: 8
depth_score: 8
impact_score: 8
---

Microsoft Research has released an account of Lazarus, a backdoor technique that reprograms fewer than 10 dormant neurons in an LLM without retraining. The resulting agent can behave normally until a hidden trigger appears.

According to Microsoft, reprogrammed neurons can detect triggers and inject tokens into the model’s residual stream; chained neurons can produce terminal payloads. The attack requires write access to model weights, while agent impact depends on granted privileges.

Microsoft Foundry uses publisher-linked provenance controls and scans surrounding software. Microsoft is also developing weight scanning, red-teaming, and cryptographic signing. The report cautions that audits cannot guarantee safe behavior.
