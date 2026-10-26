---
story_id: story_8d620bc7c9a94096bb41a91570c2faf8
authors:
  - bsandro.tech by bsandro
date: 2026-10-26
generated_at: 2026-10-26T07:30:33.144Z
source: lobsters
section: infrastructure
tags:
  - netbsd
  - bozohttpd
  - https-setup
  - letsencrypt
  - acme-client
  - static-web-server
title: NetBSD 11 guide configures bozohttpd with Let’s Encrypt HTTPS
url: https://bsandro.tech/posts/simple-netbsd-webserver
why_read: The guide provides concrete rc.conf, ACME, certificate-path, and renewal examples for minimal NetBSD deployments.
status: unknown
source_published_at: 2026-10-25T23:13:40.000Z
source_external_id: https://lobste.rs/s/hzrmwz
source_adapter: rss
discussion: https://lobste.rs/s/hzrmwz/simple_netbsd_webserver
discussions:
  - source: lobsters
    url: https://lobste.rs/s/hzrmwz/simple_netbsd_webserver
interest_score: 5
utility_score: 7
novelty_score: 6
depth_score: 6
impact_score: 3
---

The author presents a practical route for running a NetBSD 11 web server with bozohttpd. The documented setup uses bozohttpd as a daemon, configured through /etc/rc.conf, to serve static files from a selected directory.

For HTTPS, the guide installs acme-client through pkgin and configures Let’s Encrypt ACME challenges, certificate paths, and bozohttpd’s TLS flags. It then schedules a cron job to renew certificates and restart httpd.

The approach is aimed at small-scale hosting, including homebrew projects and small communities. The author says it may not suit heavy traffic, and the supplied material provides no independent performance or security assessment.
