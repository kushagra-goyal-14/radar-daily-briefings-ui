---
story_id: story_99debbdcafbc4b70b3cea12841b1ad16
authors: []
date: 2026-11-09
generated_at: 2026-11-09T07:30:11.369Z
source: hugging-face-blog
section: ai
tags:
  - cybersecurity-benchmark
  - code-agents
  - vulnerability-repair
  - cwe-coverage
  - deterministic-verification
  - held-out-evaluation
title: CWE-bench v2 releases 100-task security repair benchmark
url: https://huggingface.co/blog/cwe-bench
why_read: Engineers can reproduce defensive coding-agent evaluations using open tasks, Dockerized environments, deterministic graders, and documented scoring.
status: released
source_published_at: 2026-11-03T00:00:00.000Z
source_external_id: https://huggingface.co/blog/cwe-bench
source_adapter: rss
interest_score: 8
utility_score: 8
novelty_score: 7
depth_score: 8
impact_score: 7
---

Collinear AI has published CWE-bench v2, a public benchmark containing 100 security-weakness repair tasks across 91 CWE categories. The release includes a deterministic grader, harness, and a held-out set for tracking performance on unseen tasks.

Each task is a self-contained Harbor environment with a Dockerized repository, an instruction, and a verifier. The article says tasks were reviewed for realistic instructions, behavior-based grading, preserved functionality, and resistance to memorized fixes. Harbor can run the dataset directly from Hugging Face.

The article reports pass-rate and rollout-cost comparisons for 11 models. Those results are supplied claims, and the evidence does not establish real-world effectiveness or adoption.
