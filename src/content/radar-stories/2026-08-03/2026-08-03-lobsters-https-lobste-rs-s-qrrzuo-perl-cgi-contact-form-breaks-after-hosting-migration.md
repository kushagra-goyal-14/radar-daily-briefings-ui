---
story_id: story_c342ede4d4794f67a0be1a0056acb9aa
authors:
  - perlhacks.com via domm
date: 2026-08-03
generated_at: 2026-08-03T14:13:27.144Z
source: lobsters
section: programming
tags:
  - legacy-software
  - perl-cgi
  - hosting-migrations
  - software-maintenance
  - technology-adoption
title: Perl CGI contact form breaks after hosting migration
url: https://perlhacks.com/2026/08/the-future-isnt-evenly-distributed
why_read: It highlights why engineers should inspect hosting assumptions and business value before treating legacy software as a modernization priority.
status: unknown
source_published_at: 2026-08-03T13:40:01.000Z
source_external_id: https://lobste.rs/s/qrrzuo
source_adapter: rss
discussion: https://lobste.rs/s/qrrzuo/future_isn_t_evenly_distributed
discussions:
  - source: lobsters
    url: https://lobste.rs/s/qrrzuo/future_isn_t_evenly_distributed
interest_score: 6
utility_score: 6
novelty_score: 5
depth_score: 4
impact_score: 5
---

An article describes a Perl CGI contact form that stopped working after its small-business website was migrated to a new hosting environment. The browser displayed the Perl source instead of executing the script, and the author says the hosting company confirmed that Perl CGI was no longer enabled.

The incident illustrates ecosystem-driven failure: the application had not changed, but its hosting assumptions no longer held. The article also notes that the site had migrated to the NMS project in 2023, despite that software originating around 2000.

For engineers, the case emphasizes checking runtime and hosting dependencies before replacing stable software. The broader discussion is opinion based and supplies no independent measurements of hosting-market trends.
