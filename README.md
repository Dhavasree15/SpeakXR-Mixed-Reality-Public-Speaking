# SpeakXR: AI-Powered Mixed Reality Public Speaking Platform

## Project Overview

SpeakXR is an AI-powered Mixed Reality (MR) public speaking platform designed to help students and aspiring professionals improve their communication skills, overcome stage fear, and develop confidence through interactive speech practice and personalized feedback.

The project aims to combine Artificial Intelligence (AI), Machine Learning (ML), Natural Language Processing (NLP), Computer Vision, and Mixed Reality technologies to create an engaging public speaking practice environment.

## Problem Statement

Many students and aspiring professionals experience stage fear, low confidence, poor speech delivery, and ineffective body language during presentations. Traditional practice methods often lack personalized feedback and realistic audience interaction. SpeakXR aims to address these challenges through accessible, interactive, and repeatable public speaking practice.

## Objectives

- Improve public speaking confidence and communication skills.
- Support speech practice through text input and optional speech recognition.
- Identify basic speech-text patterns, including word counts and common filler words.
- Provide suggestions to improve speech structure and delivery preparation.
- Explore future integration of AI-based speech analysis and Mixed Reality audience simulations.

## Key Features

### Current Prototype Features

- Responsive and user-friendly web interface.
- Public speaking rehearsal space.
- Speech topic and text input.
- Optional browser-based speech-to-text in supported browsers.
- Basic word count, sentence count, and filler-word analysis.
- Simple practice suggestions.
- Mobile-friendly layout.

### Planned Features

- AI-based speech clarity, fluency, tone, pace, and pronunciation analysis.
- Gesture and facial-expression analysis using Computer Vision.
- Personalized feedback and performance tracking.
- Virtual audience simulations using Mixed Reality.
- Interactive coaching cues to support confident presentations.

Note: Planned features are not yet implemented in the current starter prototype.

## Technologies Used

- HTML5 – webpage structure.
- CSS3 – styling and responsive design.
- JavaScript – interactive functionality and text analysis.
- Web Speech API – optional speech recognition in supported browsers.
- Artificial Intelligence, Machine Learning, NLP, Computer Vision, and Mixed Reality – planned technologies for future development.

## System Architecture

Current Prototype:

User
  |
  v
Web Interface (HTML and CSS)
  |
  v
JavaScript Processing
  |
  +--> Text input
  +--> Optional speech-to-text
  +--> Word and sentence counting
  +--> Filler-word detection
  |
  v
Basic Practice Feedback

Future Architecture:

User
  |
  v
Web or Mixed Reality Interface
  |
  v
Speech Recognition and NLP
  |
  v
AI-Based Speech Analysis
  |
  v
Personalized Feedback and Progress Tracking
  |
  v
Mixed Reality Audience Simulation

## Installation and Setup

### Requirements

- A modern web browser such as Google Chrome or Microsoft Edge.
- A computer or mobile device.
- Microphone access for optional speech recognition.

### Steps to Run the Project

1. Download or clone the repository.
2. Extract the project files if downloaded as a ZIP archive.
3. Open the project folder.
4. Open index.html in your browser.
5. Enter a topic and type your speech in the practice area.
6. Click "Review my speech" to view basic feedback.
7. If supported, allow microphone access to try speech recognition.

No backend server or additional package installation is required for the current prototype.

##  Project Structure

SpeakXR-Mixed-Reality-Public-Speaking/
│
├── index.html
│
├── styles.css
│
├── app.js
│
├── README.md
│
├── LICENSE
│
├── sample_data.json
│
├── docs/
│   ├── TECHNICAL_DESIGN.md
│   └── DEMO_SCRIPT.md
│
└── tests/
    └── TEST_CASES.md

## Testing

The current prototype can be manually tested for:

- Text input and speech review.
- Word and sentence counting.
- Common filler-word detection.
- Resetting a practice session.
- Responsive layout on different screen sizes.
- Microphone availability and permission handling.
- Keyboard navigation and basic usability.

Refer to tests/TEST_CASES.md for the detailed test plan.

## Expected Outcomes

- An accessible platform for practising public speaking.
- Greater awareness of speech structure and common filler words.
- Opportunities for repeated rehearsal and self-improvement.
- A foundation for future AI-assisted communication training.
- Potential integration of immersive Mixed Reality practice environments.

## Social Impact and UN Sustainable Development Goals

SDG 4 – Quality Education: Supports interactive learning and communication skill development.

SDG 9 – Industry, Innovation and Infrastructure: Explores emerging technologies to create innovative learning experiences.

The project aims to make public speaking practice more engaging, repeatable, and accessible to learners.

## Privacy and Limitations

The current prototype does not connect to a project backend or store practice sessions in a database. Browser-based speech recognition may use the browser's speech service, depending on its implementation and settings.

The current version does not perform trained AI analysis, facial-expression recognition, gesture tracking, or Mixed Reality headset integration. These remain planned development goals.

## Future Enhancements

- Integrate reliable speech-processing and NLP models.
- Evaluate speech delivery metrics using suitable datasets and test cases.
- Develop personalized performance analytics.
- Introduce consent-based Computer Vision features.
- Build Mixed Reality audience environments.
- Improve accessibility, multilingual support, and usability.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Author

Developed as a student project exploring Artificial Intelligence, Mixed Reality, and public speaking skill development.

## Acknowledgement

This project explores how emerging technologies can support education, communication, and confidence-building through interactive learning experiences.
