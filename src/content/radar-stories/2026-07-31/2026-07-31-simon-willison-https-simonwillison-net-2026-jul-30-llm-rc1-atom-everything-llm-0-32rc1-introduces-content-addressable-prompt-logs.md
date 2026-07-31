---
story_id: story_7628f1d760be413f9c2510bbf35c3c74
authors: []
date: 2026-07-31
generated_at: 2026-07-31T08:47:28.404Z
source: simon-willison
section: ai
tags:
  - llm-cli
  - release-candidate
  - schema-migration
  - content-addressable-storage
  - message-deduplication
  - conversation-trees
title: LLM 0.32rc1 introduces content-addressable prompt logs
url: https://simonwillison.net/2026/Jul/30/llm-rc1
why_read: Engineers maintaining LLM prompt logs can assess the schema migration, backup requirement, and new model support before upgrading.
status: experimental
source_published_at: 2026-07-30T15:30:20.000Z
source_external_id: https://simonwillison.net/2026/Jul/30/llm-rc1/#atom-everything
source_adapter: atom
interest_score: 6
utility_score: 7
novelty_score: 6
depth_score: 6
impact_score: 5
---

LLM 0.32rc1 is a release candidate for the command-line tool, completing schema work begun in LLM 0.32a0. It introduces a redesigned representation for prompts and model responses.

The key change is content-addressable hash IDs for stored messages. According to the release note, this enables database deduplication and allows LLM to represent forked conversations as message trees. The migration adds new tables, while the note says existing data should not be affected.

Users are advised to back up logs.db with `llm logs backup logs-backup.db` before upgrading. The release also adds support for three listed gpt-5.6 model variants.
