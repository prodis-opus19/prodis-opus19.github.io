/*
Vocab data of audio-text pairs that are loaded by the experiment script.
Any order of pairs is okay (they're picked randomly), as long as you provide a valid pair.
Any amount of pairs is okay, they will be picked randomly till no pairs are left.
NOTE: this variable will be modified during runtime by the experiment script.
NOTE: the "./audio" directory path is always prepended to the key by main.js.
*/

export const VOCAB_DATA = {
    // audio to be played to participant : text to be read by participant
    "audio1.mp3": "What did Kamila buy?",
    "audio2.mp3": "Who bought a folder?",
    "audio3.mp3": "Who bought an upholestering?",
    "audio4.mp3": "Did Malgosia buy the medallions?",
};


// take a break every X pairs were displayed
export const TAKE_BREAK_INTERVAL = 2;


// take a break every X pairs were displayed
export const DISPLAY_TAKE_BREAK_HTML = "<b>Czas na krótką przerwę</b><br><br>Po odpoczęciu, wciśnij Spację, aby kontynuować.";


// initial text that is displayed when the webpage is first loaded (inner HTML)
export const DISPLAY_WELCOME_HTML = "<b>Czytanie odpowiedzi</b><br><br>Najpierw usłyszysz nagranie audio.<br>Następnie przeczytasz odpowiedź na głos.<br>Wciśnij spację, aby potwierdzić.";


// HTML end text that is displayed when the experiment is over (inner HTML)
export const DISPLAY_END_HTML = "<b>To koniec tej części eksperymentu.</b><br><br>Proszę czekać na dalsze instrukcje.";
