/*
Vocab data of audio-text pairs that are loaded by the experiment script.
Any order of pairs is okay (they're picked randomly), as long as you provide a valid pair.
Any amount of pairs is okay, they will be picked randomly till no pairs are left.
NOTE: this variable will be modified during runtime by the experiment script.
NOTE: the "./audio" directory path is always prepended to the key by main.js.
*/

// practice for participant before moving to the real experiment
export const VOCAB_DATA_PRACTICE = {
    // audio to be played to participant : text to be read by participant
    "audio1.mp3": "(Practice) What did Kamila buy?",
    "audio2.mp3": "(Practice) Who bought a folder?",
    "audio3.mp3": "(Practice) Who bought an upholestering?",
};


// real experiment
export const VOCAB_DATA_REAL = {
    // audio to be played to participant : text to be read by participant
    "audio1.mp3": "(Real) What did Kamila buy?",
    "audio2.mp3": "(Real) Who bought a folder?",
    "audio3.mp3": "(Real) Who bought an upholestering?",
    "audio4.mp3": "(Real) Did Malgosia buy the medallions?",
};


// take a break every X pairs were displayed
export const TAKE_BREAK_INTERVAL = 3;


// take a break every X pairs were displayed
export const DISPLAY_TAKE_BREAK_HTML = "<b>Czas na krótką przerwę</b><br><br>Po odpoczęciu, wciśnij Spację, aby kontynuować.";


// initial text that is displayed when the webpage is first loaded (inner HTML)
export const DISPLAY_WELCOME_HTML = `<b>Czytanie odpowiedzi</b><br><br>Najpierw usłyszysz nagranie audio (głośnik), a następnie przeczytasz podaną odpowiedź na głos.<br><br>Pierwsze ${Object.keys(VOCAB_DATA_PRACTICE).length} odpowiedzi to próby testowe/ćwiczenia.<br>Co ${TAKE_BREAK_INTERVAL} odpowiedzi otrzymasz czas na przerwę.<br>Wciśnij spację, aby rozpocząć.`;


// text displayed when we begin the real experiment
export const DISPLAY_BEGIN_REAL_EXPERIMENT = "<b>Ćwiczenia zakończone</b><br><br>Proszę przeczytaj na głos \"ćwiczenia zakończone\", a następnie wciśnij spację, aby rozpocząć eksperyment.";


// HTML end text that is displayed when the experiment is over (inner HTML)
export const DISPLAY_END_HTML = "<b>To koniec tej części eksperymentu.</b><br><br>Proszę czekać na dalsze instrukcje.";
