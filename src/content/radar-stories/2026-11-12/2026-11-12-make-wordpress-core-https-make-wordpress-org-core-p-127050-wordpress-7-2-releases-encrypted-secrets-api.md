---
story_id: story_0048739f03084873bd4cea6a3780b06b
authors:
  - Eric Mann
date: 2026-11-12
generated_at: 2026-11-12T07:30:31.469Z
source: make-wordpress-core
section: wordpress
tags:
  - wordpress-7-2
  - secrets-api
  - credential-encryption
  - secret-rotation
  - key-management
  - multisite
title: WordPress 7.2 releases encrypted Secrets API
url: https://make.wordpress.org/core/2026/11/11/the-secrets-api-in-wordpress-7-2
why_read: WordPress developers must configure WP_SECRETS_KEY, handle distinct read errors, and update beta-era integrations before upgrading.
status: released
source_published_at: 2026-11-11T21:25:52.000Z
source_external_id: https://make.wordpress.org/core/?p=127050
source_adapter: rss
interest_score: 8
utility_score: 9
novelty_score: 8
depth_score: 9
impact_score: 7
---

WordPress 7.2 adds the Secrets API, which stores credentials such as API keys and OAuth client secrets encrypted and retains one previous version for rotation. Developers who tested earlier betas or created a secrets.php drop-in must review the documented breaking changes and migration steps.

The API uses libsodium XChaCha20-Poly1305 encryption. A random root key is encrypted with WP_SECRETS_KEY and stored through the options tables by default. Hosts can provide custom keyring, store, or provider implementations through a drop-in.

Developers must distinguish missing secrets from unreadable ones, configure authorization around API calls, and protect WP_SECRETS_KEY. Changing or removing that key makes stored secrets unreadable until the previous value is restored.
