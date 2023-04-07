import { VOCAB_DATA_PRACTICE, VOCAB_DATA_REAL, TAKE_BREAK_INTERVAL, DISPLAY_TAKE_BREAK_HTML, DISPLAY_WELCOME_HTML, DISPLAY_END_HTML, DISPLAY_BEGIN_REAL_EXPERIMENT } from "./audio/vocab_data.js";
/*
NOTE: the list of answers and audio files is read from "./audio/VOCAB_DATA_REAL.js".
If you want to add new audio tracks or modify the texts, edit that file instead.
This script should then automatically handle them.
*/

// GLOBAL VARIABLES
const MAX_VOCAB_REAL_LEN = Object.keys(VOCAB_DATA_REAL).length;
const MAX_VOCAB_PRACTICE_LEN = Object.keys(VOCAB_DATA_PRACTICE).length;
const TEXT_EXPERIMENT_DISPLAY = document.getElementById("experiment_display_text");
const AUDIO_EXPERIMENT_PLAYER = document.getElementById("experiment_audio_player");
const AUDIO_EXPERIMENT_ICON = document.getElementById("experiment_audio_icon");
const AUDIO_EXPERIMENT_STATUS = document.getElementById("experiment_display_status");
let IS_REAL_VOCAB_TIME = false;


function get_random_pair() {
    /*
    * Get a random audio+text pair, then delete it from the global variable,
    *     so it doesn't appear again.
    */
    let len;
    let random_key;
    let random_value;
    if (IS_REAL_VOCAB_TIME) { // if real vocab
        len = Object.keys(VOCAB_DATA_REAL).length;
        // pick random key, otherwise undefined
        random_key = Object.keys(VOCAB_DATA_REAL)[Math.floor(Math.random() * len)];
        if (!random_key) {
            throw new RangeError("Could not pick a random key from VOCAB_DATA_REAL, because object is empty; you have requested more pairs than available.");
        }
        // create copy, before we delete
        random_value = VOCAB_DATA_REAL[random_key];
        delete VOCAB_DATA_REAL[random_key];
        // set for status display in top right corner
        AUDIO_EXPERIMENT_STATUS.textContent = `Eksperyment: ${(MAX_VOCAB_REAL_LEN - len) + 1}/${MAX_VOCAB_REAL_LEN}`;
    }
    else { // if practice vocab
        len = Object.keys(VOCAB_DATA_PRACTICE).length;
        // pick random key, otherwise undefined
        random_key = Object.keys(VOCAB_DATA_PRACTICE)[Math.floor(Math.random() * len)];
        if (!random_key) {
            throw new RangeError("Could not pick a random key from VOCAB_DATA_PRACTICE, because object is empty; you have requested more pairs than available.");
        }
        // create copy, before we delete
        random_value = VOCAB_DATA_PRACTICE[random_key];
        delete VOCAB_DATA_PRACTICE[random_key];
        // set for status display in top right corner
        AUDIO_EXPERIMENT_STATUS.textContent = `Tutorial: ${(MAX_VOCAB_PRACTICE_LEN - len) + 1}/${MAX_VOCAB_PRACTICE_LEN}`;
    }
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
    *
    * NOTE: "audio/" is prepended at the beginning.
    */
    _reset_audio(); // stop audio playback and set its timer to 0
    AUDIO_EXPERIMENT_ICON.style.display = "block";
    AUDIO_EXPERIMENT_PLAYER.src = "audio/" + audio_file; // must be in relative "audio" dir
    // alternatively, we cna use this: /experiment/answering/audio
    AUDIO_EXPERIMENT_PLAYER.play();
}


function display_text(text) {
    /*
    * Unhide text div and set its content to text provided as argument.
    */
    _reset_audio(); // stop audio playback and set its timer to 0
    AUDIO_EXPERIMENT_ICON.style.display = "none";
    TEXT_EXPERIMENT_DISPLAY.textContent = text;
    TEXT_EXPERIMENT_DISPLAY.style.display = "block";
}


function display_html(html) {
    /*
    * Unhide text div and set its content to HTML provided as argument.
    */
    _reset_audio(); // stop audio playback and set its timer to 0
    AUDIO_EXPERIMENT_ICON.style.display = "none";
    TEXT_EXPERIMENT_DISPLAY.innerHTML = html;
    TEXT_EXPERIMENT_DISPLAY.style.display = "block";
}


function app() {
    /*
    * Main event loop.
    *
    * Plays audio and displays texts still there is nothing left in the global "VOCAB_DATA_REAL" variable.
    */
    display_html(DISPLAY_WELCOME_HTML); // taken from "VOCAB_DATA_REAL.js"
    let pairs_displayed = 0;
    let TAKE_BREAK_COUNTER = 0;
    let random_pair;
    let show_text_on_next_space_press = false;
    // main event loop
    document.addEventListener("keydown", function (event) {
        if (event.key === " ") {
            event.preventDefault();
            // ORDER: we play audio first
            if (!show_text_on_next_space_press) {
                // while we still have pairs yet to be displayed
                if (pairs_displayed < (IS_REAL_VOCAB_TIME ? MAX_VOCAB_REAL_LEN : MAX_VOCAB_PRACTICE_LEN)) {
                    // ORDER injection: if we reached take break interval from "VOCAB_DATA_REAL.js", wait for confirmation
                    if (TAKE_BREAK_COUNTER >= TAKE_BREAK_INTERVAL) {
                        display_html(DISPLAY_TAKE_BREAK_HTML);
                        TAKE_BREAK_COUNTER = 0;
                    }
                    else {
                        ++pairs_displayed;
                        ++TAKE_BREAK_COUNTER;
                        // get random text-audio pair
                        random_pair = get_random_pair();
                        // play audio, not text
                        play_audio(random_pair.audio);
                        TEXT_EXPERIMENT_DISPLAY.textContent = "";
                        show_text_on_next_space_press = true;
                    }
                }
                // otherwise, either the practice is over or the experiment is over
                else {
                    // if practice is over, start real experiment
                    if (!IS_REAL_VOCAB_TIME) {
                        IS_REAL_VOCAB_TIME = true;
                        display_html(DISPLAY_BEGIN_REAL_EXPERIMENT); // taken from "VOCAB_DATA_REAL.js"
                        show_text_on_next_space_press = false; // idk but if true it breaks
                        pairs_displayed = 0;
                        TAKE_BREAK_COUNTER = 0;
                    }
                    // if real experiment is over, we're over
                    else {
                        display_html(DISPLAY_END_HTML); // taken from "VOCAB_DATA_REAL.js"
                    }
                }
            }
            // ORDER: we show text second
            else {
                display_text(random_pair.text);
                show_text_on_next_space_press = false;

            }
        }
    });
}


// set default values
AUDIO_EXPERIMENT_STATUS.textContent = "Tutorial: 1/" + MAX_VOCAB_PRACTICE_LEN;
AUDIO_EXPERIMENT_PLAYER.volume = 1.0;


// set focus to main_app div on page load (otherwise, space to begin doesn't work sometimes)
{
    const MAIN_APP = document.getElementById("main_app");
    MAIN_APP.focus({ focusVisible: false }); // do not display outline on element
    MAIN_APP.scrollIntoView({ block: "center" });
}


// start app on page load
app();
