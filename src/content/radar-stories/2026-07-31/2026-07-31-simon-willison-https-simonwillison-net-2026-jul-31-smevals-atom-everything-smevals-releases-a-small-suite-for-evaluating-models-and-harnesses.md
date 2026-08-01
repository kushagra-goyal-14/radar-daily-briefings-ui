---
story_id: story_3ca82bb08d1a42ba8b0c03c6e5f7e55b
authors: []
date: 2026-07-31
generated_at: 2026-07-31T23:35:24.629Z
source: simon-willison
section: ai
tags:
  - model-evaluation
  - prompt-evaluation
  - agent-harnesses
  - eval-suites
  - yaml-configuration
  - static-html-reports
title: smevals releases a small suite for evaluating models and harnesses
url: https://simonwillison.net/2026/Jul/31/smevals
why_read: Engineers can compare models, prompts, parameters, and agent harnesses through a repeatable command-line evaluation workflow.
status: released
source_published_at: 2026-07-31T21:15:23.000Z
source_external_id: https://simonwillison.net/2026/Jul/31/smevals/#atom-everything
source_adapter: atom
interest_score: 8
utility_score: 8
novelty_score: 7
depth_score: 7
impact_score: 6
---

Simon Willison describes smevals as a new tool for running small evaluation suites across different model configurations and grading the results. The tool is available through commands such as `uvx smevals run` and `uvx smevals grade`.

An eval is a directory of YAML files containing challenges and tasks. Configurations can vary models, system prompts, model parameters, or agent harnesses. Runs are recorded separately from grading, which applies checks ranging from string or XML validation to custom checker scripts, including checks that use other models.

Engineers can inspect results through a localhost server or build static HTML reports. The supplied material does not establish performance, adoption, or scalability beyond the described workflow.
