import { VOCAB_DATA, DISPLAY_WELCOME_TEXT, DISPLAY_END_TEXT } from "./audio/VOCAB_DATA.js";
/*
NOTE: the list of answers and audio files is read from "./audio/VOCAB_DATA.js".
If you want to add new audio tracks or modify the texts, edit that file instead.
This script should then automatically handle them.
*/

// GLOBAL VARIABLES
const MAX_VOCAB_LEN = Object.keys(VOCAB_DATA).length;
const TEXT_EXPERIMENT_DISPLAY = document.getElementById("experiment_display_text");
const AUDIO_EXPERIMENT_PLAYER = document.getElementById("experiment_audio_player");
const AUDIO_EXPERIMENT_ICON = document.getElementById("experiment_audio_icon");
const AUDIO_EXPERIMENT_STATUS = document.getElementById("experiment_display_status");


function get_random_pair() {
    /*
    * Get a random audio+text pair, then delete it from the global variable,
    *     so it doesn't appear again.
    */
    const len = Object.keys(VOCAB_DATA).length;
    // pick random key, otherwise undefined
    const random_key = Object.keys(VOCAB_DATA)[Math.floor(Math.random() * len)];
    if (!random_key) {
        throw new RangeError("Could not pick a random key from VOCAB_DATA, because object is empty; you have requested more pairs than available.");
    }
    // create copy, before we delete
    const random_value = VOCAB_DATA[random_key];
    // delete to prevent indexes from repeating
    delete VOCAB_DATA[random_key];
    // set for display
    AUDIO_EXPERIMENT_STATUS.textContent = `${(MAX_VOCAB_LEN - len) + 1}/${MAX_VOCAB_LEN}`;
    // return as object
    return {
        "audio": random_key,
        "text": random_value,
    };
}


function _reset_audio() {
    /*
    * Helper function: stop audio playback and set its timer to 0.
    */
    AUDIO_EXPERIMENT_PLAYER.pause();
    AUDIO_EXPERIMENT_PLAYER.currentTime = 0;
}


function play_audio(audio_file) {
    /*
    * Unhide audio div and start playing the audio file provided as argument.
    */
    _reset_audio(); // stop audio playback and set its timer to 0
    AUDIO_EXPERIMENT_ICON.style.display = "block";
    AUDIO_EXPERIMENT_PLAYER.src = "audio/" + audio_file; // must be in relative "audio" dir
    // alternatively, we cna use this: /experiment/answering/audio
    AUDIO_EXPERIMENT_PLAYER.play();
}


function display_text(text) {
    /*
    * Unhide text div and display text provided as argument.
    */
    _reset_audio(); // stop audio playback and set its timer to 0
    AUDIO_EXPERIMENT_ICON.style.display = "none";
    TEXT_EXPERIMENT_DISPLAY.textContent = text;
    TEXT_EXPERIMENT_DISPLAY.style.display = "block";
}


function app() {
    /*
    * Main event loop.
    *
    * Plays audio and displays texts still there is nothing left in the global "VOCAB_DATA" variable.
    */
    TEXT_EXPERIMENT_DISPLAY.innerHTML = DISPLAY_WELCOME_TEXT; // taken from "VOCAB_DATA.js"
    let pairs_displayed = 0;
    let random_pair;
    let show_text_on_next_space_press = false;
    // main event loop
    document.addEventListener("keydown", function (event) {
        if (event.key === " ") {
            event.preventDefault();
            if (show_text_on_next_space_press) {
                display_text(random_pair.text);
                show_text_on_next_space_press = false;
            }
            else {
                // while we still have pairs yet to be displayed
                if (pairs_displayed < MAX_VOCAB_LEN) {
                    ++pairs_displayed;
                    // get random text-audio pair
                    random_pair = get_random_pair();
                    // play audio, not text
                    play_audio(random_pair.audio);
                    TEXT_EXPERIMENT_DISPLAY.textContent = "";
                    show_text_on_next_space_press = true;
                }
                // otherwise, the experiment is over
                else {
                    TEXT_EXPERIMENT_DISPLAY.innerHTML = DISPLAY_END_TEXT; // taken from "VOCAB_DATA.js"
                }
            }
        }
    });
}


// set default values
AUDIO_EXPERIMENT_STATUS.textContent = `1/${MAX_VOCAB_LEN}`;
AUDIO_EXPERIMENT_PLAYER.volume = 1.0;

// set focus to main_app div on page load (otherwise, space to begin doesn't work sometimes)
{
    const MAIN_APP = document.getElementById("main_app");
    MAIN_APP.focus({ focusVisible: false });
    MAIN_APP.scrollIntoView({ block: "center" });
}


// start app on page load
app();
