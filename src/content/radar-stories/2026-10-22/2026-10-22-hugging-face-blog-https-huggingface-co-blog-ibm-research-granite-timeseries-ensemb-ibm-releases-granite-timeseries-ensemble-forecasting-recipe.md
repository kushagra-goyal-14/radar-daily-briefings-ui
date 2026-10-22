---
story_id: story_ae766d9c3cf94092b48f0478bcdacb83
authors: []
date: 2026-10-22
generated_at: 2026-10-22T12:04:35.882Z
source: hugging-face-blog
section: ai
tags:
  - time-series-forecasting
  - forecast-ensembles
  - quantile-forecasting
  - granite-tsfm
  - gift-eval
  - hugging-face
title: IBM releases Granite Timeseries Ensemble forecasting recipe
url: https://huggingface.co/blog/ibm-research/granite-timeseries-ensemble-r1
why_read: Engineers can adopt a ready-made ensemble while evaluating its accuracy, calibration, licensing, latency, and memory costs for their workloads.
status: released
source_published_at: 2026-10-22T07:51:31.000Z
source_external_id: https://huggingface.co/blog/ibm-research/granite-timeseries-ensemble-r1
source_adapter: rss
interest_score: 8
utility_score: 8
novelty_score: 7
depth_score: 9
impact_score: 6
---

IBM Research has published Granite Timeseries Ensemble, a released recipe combining four pre-trained Granite architectures through one forecasting interface. It produces point and quantile forecasts without retraining or fitted ensemble weights.

The recommended Probabilistic Ensemble pools member forecasts with equal influence. An alternative IQR Ensemble varies weights by predicted forecast spread and applies isotonic regression to prevent crossing quantiles. The recipe stores configuration and downloads four checkpoints at runtime.

On 97 GIFT-Eval configurations, both ensembles achieved lower aggregate MASE than the individual members, but the reported gains are aggregate. Engineers should backtest representative data and measure calibration, latency, memory, preprocessing compatibility, and licensing before deployment.
