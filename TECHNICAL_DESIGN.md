# Technical Design — SpeakXR

## 1. Goal
Help students and early-career speakers practise public speaking with guided rehearsal, understandable feedback, and a path toward immersive Mixed Reality practice.

## 2. Current prototype architecture
```text
Learner
  |
  v
Browser UI (index.html + styles.css)
  |
  +--> Typed speech / optional browser SpeechRecognition
  |
  v
Client-side JavaScript (app.js)
  |
  +--> Word, sentence, and filler-word counts
  +--> Basic non-AI practice suggestion
  |
  v
Results shown locally in the browser
```

## 3. Current technology
- HTML5 and CSS3 for the interface.
- Vanilla JavaScript for interaction and basic text statistics.
- Optional Web Speech API for speech-to-text in compatible browsers.
- No backend, database, trained ML model, or MR device integration is currently included.

## 4. Proposed future architecture
```text
Learner
  |
  v
Web / MR client
  |---- microphone audio --> speech-to-text service
  |---- consented camera frames --> optional pose / expression model
  |
  v
Application API + session manager
  |
  +--> speech analysis: pace, pauses, clarity proxies
  +--> NLP: transcript structure and filler-word patterns
  +--> optional vision: gesture/posture cues
  +--> feedback and progress dashboard
  |
  v
Personalised practice feedback
  |
  v
Future MR scene: virtual audience + spatial coaching cues
```

## 5. Proposed evaluation
- Task completion rate for starting and reviewing a rehearsal.
- Transcript usability and user-rated ease of use.
- Agreement between automated text metrics and manually checked examples.
- Before/after self-reported confidence, using an appropriate consent process.
- Accessibility, browser compatibility, latency, and privacy review.

## 6. Privacy and safety principles
- Obtain explicit consent before recording audio/video.
- Prefer local processing where practical; minimise collection and retention.
- Clearly label automated feedback as an estimate, not a definitive judgement of a person's ability or emotion.
- Provide a non-microphone text-entry alternative.
- Do not infer sensitive traits or make high-stakes decisions from face or voice.

## 7. Known limitations
The current prototype does not assess actual vocal tone, volume, pronunciation accuracy, gestures, facial expression, audience engagement, or MR performance. The text-based counters are simple heuristics and can miscount words used in other contexts.
