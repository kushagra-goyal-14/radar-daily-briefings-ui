---
story_id: story_9ff7e6f211ba4169b1ce9f886548a688
authors: []
date: 2026-10-29
generated_at: 2026-10-29T07:30:07.515Z
source: hugging-face-blog
section: ai
tags:
  - multilingual-transcription
  - speaker-diarization
  - audio-question-answering
  - open-weight-model
  - speech-fine-tuning
  - granary-v2
title: NVIDIA releases Nemotron 3.5 Transcribe and Granary v2
url: https://huggingface.co/blog/nvidia/nemotron-transcribe-granary
why_read: Speech engineers can evaluate a downloadable model and adaptation workflow spanning multilingual ASR, diarization, prompting, data curation, and fine-tuning.
status: released
source_published_at: 2026-10-28T14:58:17.000Z
source_external_id: https://huggingface.co/blog/nvidia/nemotron-transcribe-granary
source_adapter: rss
interest_score: 8
utility_score: 8
novelty_score: 7
depth_score: 8
impact_score: 7
---

NVIDIA has released Nemotron 3.5 Transcribe, an open-weight model for multilingual transcription, speaker attribution, translation, and audio question answering. The release also includes Granary v2 manifests and a reusable data-curation pipeline.

The model supports 40 transcription languages, 31 translation languages to or from English, and speaker attribution in 13 languages. NVIDIA describes prompt-based output control, word-level timestamps, and adaptation through NeMo Speech fine-tuning. Its medical case study reports a 45.8% relative held-out-speaker WER reduction after fine-tuning.

Engineers can serve the checkpoint with vLLM, while quantized versions and NeMo-Speech.cpp support are forthcoming. The model is intended for recorded audio, not live streaming, and task-specific language support varies.
