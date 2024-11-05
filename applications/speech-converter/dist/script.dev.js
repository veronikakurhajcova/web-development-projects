"use strict";

var speech = new SpeechSynthesisUtterance();
var voices = [];
var voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = function () {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];
  voices.forEach(function (voice, i) {
    return voiceSelect.options[i] = new Option(voice.name, i);
  });
};

document.querySelector("button").addEventListener("click", function () {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});
voiceSelect.addEventListener("change", function () {
  speech.voice = voices[voiceSelect.value];
});
//# sourceMappingURL=script.dev.js.map
