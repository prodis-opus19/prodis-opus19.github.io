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
        // audio to be played to participant : transcription of audio shown to participant : text to be read by participant
        "placeholder/audio1.mp3": ["(Tutorial) Kamila has bought tulips, not roses.", "(Tutorial) What did Kamila buy?"],
        "placeholder/audio2.mp3": ["(Tutorial) No, it was Kamila who bought a folder in the supermarket, not Malgosia", "(Tutorial) Who bought a folder?"],
        "placeholder/audio3.mp3": ["(Tutorial) Kamila has bought an upholstering in the supermarket, not tires.", "(Tutorial) Who bought an upholestering?"],
    },
    // real experiment
    real: {
        // audio to be played to participant : transcription of audio shown to participant : text to be read by participant
        "placeholder/audio1.mp3": ["Kamila has bought tulips, not roses.", "What did Kamila buy?"],
        "placeholder/audio2.mp3": ["No, it was Kamila who bought a folder in the supermarket, not Malgosia", "Who bought a folder?"],
        "placeholder/audio3.mp3": ["Kamila has bought an upholstering in the supermarket, not tires.", "Who bought an upholestering?"],
        "placeholder/audio4.mp3": ["No, it was Kamila who bought the medalions, not Malgosia.", "Did Malgosia buy the medallions?"],
    }
}

// take a break every X pairs were displayed
export const TAKE_BREAK_INTERVAL = 3;

export const DISPLAY_STRING_DATA = {
    // HTML text that is displayed when the webpage is first loaded (inner HTML)
    start: `<b>Czytanie odpowiedzi</b><br><br>Najpierw usłyszysz nagranie audio, które jest częścią dialogu (symbol słuchawek).<br><br>Po odsłuchaniu nagrania, przeczytasz odpowiedź na głos (symbol mikrofonu), która ma być Twoją reakcją na wcześniejsze nagranie audio.<br><br>Odpowiedź przeczytaj właściwie do kontekstu, ale tak jak najnaturalniej potrafisz.<br><br><b>UWAGA:</b> po każdym nagraniu/tekście musisz nacisnąć spację, aby przejść do kolejnej odpowiedzi.<br>Pierwsze ${Object.keys(VOCAB_DATA["practice"]).length} odpowiedzi to ćwiczenie/tutorial.<br><br>Wciśnij Spację, aby rozpocząć tutorial.`,
    // HTML text displayed when we begin the real experiment (inner HTML)
    start_real: `<b>Koniec tutorialu</b><br><br>Teraz rozpocznie się właściwy eksperyment, w którym co ${TAKE_BREAK_INTERVAL} odpowiedzi będzie czas na krótką przerwę.<br><br>Proszę przeczytaj na głos \"rozpoczynam eksperyment\".<br><br>Następnie wciśnij Spację, aby rozpocząć właściwy eksperyment.`,
    // HTML text displayed when reaches TAKE_BREAK_INTERVAL
    take_break: "<b>Czas na krótką przerwę</b><br><br>Możesz teraz odpocząć, lub od razu kontynuuować eksperyment.<br><br>Wciśnij Spację, aby kontynuować.",
    // HTML end text that is displayed when the experiment is over (inner HTML)
    end: "<b>To koniec tej części eksperymentu.</b><br><br>Proszę czekać na dalsze instrukcje.",
};
