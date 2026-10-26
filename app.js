const speech = document.querySelector("#speech");
const results = document.querySelector("#results");
const micStatus = document.querySelector("#micStatus");
const fillerWords = ["um", "uh", "like", "basically", "actually", "you know"];
document.querySelector("#analyzeBtn").addEventListener("click", () => {
  const text = speech.value.trim();
  if (!text) { speech.focus(); micStatus.textContent = "Add your speech first, then select Review my speech."; return; }
  const words = text.match(/\b[\w'-]+\b/g) || [];
  const sentences = text.split(/[.!?]+/).filter(s => s.trim()).length;
  const lower = text.toLowerCase();
  const fillers = fillerWords.reduce((total, word) => total + (lower.match(new RegExp(`\\b${word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "g")) || []).length, 0);
  document.querySelector("#wordCount").textContent = words.length;
  document.querySelector("#sentenceCount").textContent = sentences;
  document.querySelector("#fillerCount").textContent = fillers;
  const pace = words.length < 80 ? "Try expanding your main point with one example." : "Review your structure and practise delivering it at a comfortable pace.";
  document.querySelector("#feedback").textContent = `${pace} Read aloud once, pause between key ideas, and finish with a clear takeaway. This starter review counts text patterns only; it does not measure voice, emotion, gestures, or audience engagement.`;
  results.classList.remove("hidden");
  results.scrollIntoView({behavior:"smooth", block:"nearest"});
});
document.querySelector("#resetBtn").addEventListener("click", () => { speech.value=""; document.querySelector("#topic").value=""; results.classList.add("hidden"); micStatus.textContent="Ready for another practice session."; });
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition;
document.querySelector("#micBtn").addEventListener("click", () => {
  if (!SpeechRecognition) { micStatus.textContent = "Speech recognition is not supported in this browser. Please type your speech instead."; return; }
  if (recognition) { recognition.stop(); recognition = null; return; }
  recognition = new SpeechRecognition();
  recognition.lang = "en-IN";
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.onstart = () => micStatus.textContent = "Listening… speak clearly. Select the microphone button again to stop.";
  recognition.onresult = (event) => {
    let finalText = "";
    for (let i = 0; i < event.results.length; i++) finalText += event.results[i][0].transcript + (event.results[i].isFinal ? " " : "");
    speech.value = finalText;
  };
  recognition.onerror = (event) => micStatus.textContent = `Microphone issue: ${event.error}. You can type your speech instead.`;
  recognition.onend = () => { micStatus.textContent = "Microphone stopped. Review your transcript before analysing."; recognition = null; };
  recognition.start();
});
