/*
Vocab data of audio-text pairs that are loaded by the experiment script.
Any order of pairs is okay (they're picked randomly), as long as you provide a valid pair.
Any amount of pairs is okay, they will be picked randomly till no pairs are left.
NOTE: this variable will be modified during runtime by the experiment script.
NOTE: the "./audio" directory path is always prepended to the key by main.js.
*/

export const VOCAB_DATA = {
    // practice for participant before moving to the real experiment
    practice: {
        // audio to be played to participant : text to be read by participant
        "audio1.mp3": "(Tutorial) What did Kamila buy?",
        "audio2.mp3": "(Tutorial) Who bought a folder?",
        "audio3.mp3": "(Tutorial) Who bought an upholestering?",
    },
    // real experiment
    real: {
        // audio to be played to participant : text to be read by participant
        "audio1.mp3": "What did Kamila buy?",
        "audio2.mp3": "Who bought a folder?",
        "audio3.mp3": "Who bought an upholestering?",
        "audio4.mp3": "Did Malgosia buy the medallions?",
    }
}

// take a break every X pairs were displayed
export const TAKE_BREAK_INTERVAL = 3;

export const DISPLAY_STRING_DATA = {
    // displayed on load
    take_break: "<b>Czas na krótką przerwę</b><br><br>Możesz teraz odpocząć, lub od razu kontynuuować eksperyment.<br><br>Wciśnij Spację, aby kontynuować.",
    // initial text that is displayed when the webpage is first loaded (inner HTML)
    start: `<b>Czytanie odpowiedzi</b><br><br>Najpierw usłyszysz nagranie audio (głośnik), a następnie przeczytasz podaną odpowiedź na głos.<br><br><b>UWAGA:</b> po każdym nagraniu/tekście musisz nacisnąć spację.<br>Pierwsze ${Object.keys(VOCAB_DATA["practice"]).length} odpowiedzi to ćwiczenie/tutorial.<br><br>Wciśnij spację, aby rozpocząć tutorial.`,
    // text displayed when we begin the real experiment
    start_real: `<b>Koniec tutorialu</b><br><br>Teraz rozpocznie się właściwy eksperyment, w którym co ${TAKE_BREAK_INTERVAL} odpowiedzi otrzymasz czas na krótką przerwę.<br><br>Proszę przeczytaj na głos \"rozpoczynam eksperyment\".<br><br>Wciśnij spację, aby rozpocząć eksperyment.`,
    // HTML end text that is displayed when the experiment is over (inner HTML)
    end: "<b>To koniec tej części eksperymentu.</b><br><br>Proszę czekać na dalsze instrukcje.",
};