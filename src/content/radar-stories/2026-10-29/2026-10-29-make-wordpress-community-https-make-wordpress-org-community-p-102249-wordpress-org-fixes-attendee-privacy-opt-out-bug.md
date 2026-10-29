---
story_id: story_12c290d8d6af452481313893d9ec29de
authors:
  - Boro Sitnikovski
date: 2026-10-29
generated_at: 2026-10-29T07:30:07.515Z
source: make-wordpress-community
section: wordpress
tags:
  - attendee-privacy
  - wordpress-events
  - data-exposure
  - opt-out-bug
  - incident-remediation
title: WordPress.org fixes attendee privacy opt-out bug
url: https://make.wordpress.org/community/2026/10/28/attendee-privacy-issue-on-ticket-pages-what-happened-and-what-we-did
why_read: Organizers and attendees can understand the exposure scope, defensive hiding, notification plan, and steps to restore public listing.
status: fixed
source_published_at: 2026-10-28T19:55:31.000Z
source_external_id: https://make.wordpress.org/community/?p=102249
source_adapter: rss
interest_score: 7
utility_score: 8
novelty_score: 7
depth_score: 6
impact_score: 7
---

WordPress.org reports that a ticket-page bug publicly listed some attendees who had opted out of appearing on event Attendees pages. The issue affected an estimated 1,280 tickets across 168 events between May 20, 2025, and October 28, 2026, and was fixed on October 28.

The ticket Edit page could show “Yes” despite a prior “No”; saving the page then changed the setting. Public pages could display names and Gravatars, plus some attendee-provided links, company names, or job titles. WordPress.org says its review found that contact, mailing, dietary, and accessibility details were not shown.

Because prior choices were unavailable, WordPress.org hid about 8,580 potentially affected tickets and plans email notifications. Attendees can restore listing through their ticket email.
