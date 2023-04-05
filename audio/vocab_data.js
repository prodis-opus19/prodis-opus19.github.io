// Vocab data of audio-text pairs that are loaded by the experiment script.
// Any order is okay (they're picked randomly), as long as you provide a valid pair.
// NOTE: this variable will be modified by the experiment script.

export const vocab_data = {
    // audio to be played to participant : text to be read by participant
    "audio1.mp3": "What did Kamila buy?",
    "audio2.mp3": "Who bought a folder?",
    "audio3.mp3": "Who bought an upholestering?",
    "audio4.mp3": "Did Malgosia buy the medallions?",
};

// initial text that is displayed when the webpage is first loaded
export const default_welcome_text = "<b>Czytanie odpowiedzi</b><br><br>Najpierw usłyszysz nagranie audio.<br>Następnie przeczytasz odpowiedź na głos.<br>Wciśnij spację, aby potwierdzić";
