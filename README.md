# SpeakXR — AI-Powered Mixed Reality Public Speaking (Starter Prototype)

SpeakXR is a student project concept for helping learners rehearse public speaking, reflect on their speech, and build communication confidence.

## Current status — read this first
This repository contains an **early browser-based starter prototype**, not a finished AI/Mixed Reality system. It currently offers:
- A responsive public-speaking practice interface.
- Typed rehearsal notes and optional browser speech-to-text where supported.
- Basic text statistics (word count, sentence count, common filler-word count).
- Simple practice suggestions.

It does **not yet** perform AI emotion detection, voice-tone/prosody scoring, facial or gesture recognition, live audience simulation, or an MR headset experience. Those are future development goals.

## Run locally
1. Download or clone this repository.
2. Open `index.html` in a modern browser. For microphone speech recognition, use a browser that supports the Web Speech API and allow microphone access; support varies.
3. Type a speech or try the microphone, then choose **Review my speech**.

No package installation or backend is required for the starter prototype.

## Project structure
- `index.html` — interface structure
- `styles.css` — responsive visual design
- `app.js` — text review and optional speech recognition
- `docs/TECHNICAL_DESIGN.md` — architecture and roadmap
- `docs/DEMO_SCRIPT.md` — suggested 3–5 minute demo narration
- `sample_data.json` — illustrative test input
- `tests/TEST_CASES.md` — manual test plan
- `LICENSE` — MIT licence

## Roadmap
1. Improve speech transcript handling and session history.
2. Add a backend API for securely storing opt-in practice sessions.
3. Evaluate speech delivery metrics with suitable speech-processing models and transparent limitations.
4. Add computer-vision analysis only with clear consent and privacy controls.
5. Explore an MR audience rehearsal scene and spatial coaching cues on supported hardware.

## Privacy
The starter page does not send typed speech to a project backend. Browser-based speech recognition may be processed by the browser's speech service depending on the browser and configuration. Avoid entering sensitive personal information.

## Contribution
This is an early prototype. Contributions, usability feedback, and accessibility suggestions are welcome.
