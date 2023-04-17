import { VOCAB_DATA, TAKE_BREAK_INTERVAL, DISPLAY_STRING_DATA } from "./audio/experiment_data.js";
/*
NOTE: the list of answers and audio files is read from "./audio/VOCAB_DATA["real"].js".
If you want to add new audio tracks or modify the texts, edit that file instead.
This script should then automatically handle them.
*/

// GLOBAL VARIABLES
const MAX_VOCAB_REAL_LEN = Object.keys(VOCAB_DATA["real"]).length;
const MAX_VOCAB_PRACTICE_LEN = Object.keys(VOCAB_DATA["practice"]).length;
const WIDGET_EXPERIMENT_STATUS = document.getElementById("display_status_widget");
// containers
const DIV_AUDIO_CONTAINER = document.getElementById("audio_container");
// spans, audio players
const P_BIG_INFO_TEXT = document.getElementById("big_info_text");
const TAG_AUDIO_PLAYER = document.getElementById("audio_player");
const SPAN_AUDIO_TEXT = document.getElementById("audio_text");
const P_ANSWER_TEXT = document.getElementById("answer_text");
// changed during runtime
let IS_REAL_VOCAB_TIME = false; // if false, we run practice with no breaks


function get_random_pair() {
    /*
    * Get a random audio+text pair, then delete it from the global variable,
    *     so it doesn't appear again.
    */
    let len;
    let random_key;
    let random_value;
    // ternary operators would be shorter but unreadable, and we only need a single bool check
    if (IS_REAL_VOCAB_TIME) { // if real vocab
        len = Object.keys(VOCAB_DATA["real"]).length;
        // pick random key, otherwise undefined
        random_key = Object.keys(VOCAB_DATA["real"])[Math.floor(Math.random() * len)];
        if (!random_key) {
            throw new RangeError("Could not pick a random key from real VOCAB_DATA, because object is empty; you have requested more pairs than available.");
        }
        // create copy, before we delete
        random_value = VOCAB_DATA["real"][random_key];
        delete VOCAB_DATA["real"][random_key];
        // set for status display in top right corner
        WIDGET_EXPERIMENT_STATUS.textContent = `Eksperyment: ${(MAX_VOCAB_REAL_LEN - len) + 1}/${MAX_VOCAB_REAL_LEN}`;
    }
    else { // if practice vocab
        len = Object.keys(VOCAB_DATA["practice"]).length;
        // pick random key, otherwise undefined
        random_key = Object.keys(VOCAB_DATA["practice"])[Math.floor(Math.random() * len)];
        if (!random_key) {
            throw new RangeError("Could not pick a random key from practice VOCAB_DATA, because object is empty; you have requested more pairs than available.");
        }
        // create copy, before we delete
        random_value = VOCAB_DATA["practice"][random_key];
        delete VOCAB_DATA["practice"][random_key];
        // set for status display in top right corner
        WIDGET_EXPERIMENT_STATUS.textContent = `Tutorial: ${(MAX_VOCAB_PRACTICE_LEN - len) + 1}/${MAX_VOCAB_PRACTICE_LEN}`;
    }
    // return as object
    return {
        "audio": random_key, // audio as a sound file
        "audio_transcription": random_value[0], // audio as a text transcription
        "answer_to_be_read": random_value[1], // followup question for audio as a text
    };
}


function _reset_audio() {
    /*
    * Helper function: stop audio playback and set its timer to 0.
    */
    TAG_AUDIO_PLAYER.pause();
    TAG_AUDIO_PLAYER.currentTime = 0;
}


function display_info(html) {
    /*
    * Unhide info p-tag and set its content to HTML provided as argument.
    */
    // hide other elements
    _reset_audio();
    DIV_AUDIO_CONTAINER.style.display = "none";
    P_ANSWER_TEXT.style.display = "none";
    // setup
    P_BIG_INFO_TEXT.innerHTML = html; // set text
    // show
    P_BIG_INFO_TEXT.style.display = "block";
}


function display_audio(audio_filename, html) {
    /*
    * Unhide audio div, set its text and audio player, then start playing the audio.
    *
    * NOTE: "audio/" is prepended at the beginning.
    */
    // hide other elements
    _reset_audio();
    P_BIG_INFO_TEXT.style.display = "none";
    P_ANSWER_TEXT.style.display = "none";
    // setup
    TAG_AUDIO_PLAYER.src = "audio/" + audio_filename; // must be in relative "audio" dir
    SPAN_AUDIO_TEXT.innerHTML = html; // set text
    // show
    DIV_AUDIO_CONTAINER.style.display = "block";
    TAG_AUDIO_PLAYER.play();
}


function restart_audio_if_visible() {
    /*
    * Play audio again if the audio container is visible.
    */
    if (DIV_AUDIO_CONTAINER.style.display === "block") {
        TAG_AUDIO_PLAYER.pause();
        TAG_AUDIO_PLAYER.currentTime = 0;
        TAG_AUDIO_PLAYER.play();
    }
}


function display_answer(html) {
    /*
    * Unhide answer p-tag and set its text to HTML provided as argument.
    */
    // hide other elements
    _reset_audio();
    DIV_AUDIO_CONTAINER.style.display = "none";
    P_BIG_INFO_TEXT.style.display = "none";
    // setup
    P_ANSWER_TEXT.innerHTML = html; // set text
    // show
    P_ANSWER_TEXT.style.display = "block";
}


function app() {
    /*
    * Main event loop.
    *
    * Plays audio and displays texts still there is nothing left in the global "VOCAB_DATA["real"]" variable.
    */
    display_info(DISPLAY_STRING_DATA["start"]); // taken from DISPLAY_STRING_DATA
    let pairs_displayed = 0;
    let TAKE_BREAK_COUNTER = 0;
    let random_pair;
    let show_text_on_next_space_press = false;
    // main event loop
    document.addEventListener("keydown", function (event) {
        if (event.key === "r") {
            restart_audio_if_visible();
            return false;
        }
        if (event.key === " ") {
            event.preventDefault();
            // ORDER: we play audio first
            if (!show_text_on_next_space_press) {
                // while we still have pairs yet to be displayed
                if (pairs_displayed < (IS_REAL_VOCAB_TIME ? MAX_VOCAB_REAL_LEN : MAX_VOCAB_PRACTICE_LEN)) {
                    // ORDER injection: if we reached take break interval from "VOCAB_DATA["real"].js"
                    // but if it's practice, we do not create breaks; breaks are disabled during practice
                    if (IS_REAL_VOCAB_TIME && TAKE_BREAK_COUNTER >= TAKE_BREAK_INTERVAL) {
                        display_info(DISPLAY_STRING_DATA["take_break"]);
                        TAKE_BREAK_COUNTER = 0;
                    }
                    else {
                        ++pairs_displayed;
                        ++TAKE_BREAK_COUNTER;
                        // get random text-audio pair
                        random_pair = get_random_pair();
                        console.log(`pairs_displayed=${pairs_displayed};IS_REAL_VOCAB_TIME=${IS_REAL_VOCAB_TIME};TAKE_BREAK_COUNTER=${TAKE_BREAK_COUNTER};random_pair=`, random_pair);
                        // play audio, not text
                        display_audio(random_pair.audio, random_pair.audio_transcription);
                        show_text_on_next_space_press = true;
                    }
                }
                // otherwise, either the practice is over or the experiment is over
                else {
                    // if practice is over, start real experiment
                    if (!IS_REAL_VOCAB_TIME) {
                        IS_REAL_VOCAB_TIME = true;
                        display_info(DISPLAY_STRING_DATA["start_real"]); // taken from DISPLAY_STRING_DATA
                        show_text_on_next_space_press = false; // idk but if true it breaks
                        pairs_displayed = 0;
                        TAKE_BREAK_COUNTER = 0;
                    }
                    // if real experiment is over, we're over
                    else {
                        display_info(DISPLAY_STRING_DATA["end"]); // taken from DISPLAY_STRING_DATA
                    }
                }
            }
            // ORDER: we show text second
            else {
                display_answer(random_pair.answer_to_be_read);
                show_text_on_next_space_press = false;

            }
        }
    });
}


// set default values
WIDGET_EXPERIMENT_STATUS.textContent = "Tutorial: 1/" + MAX_VOCAB_PRACTICE_LEN;
TAG_AUDIO_PLAYER.volume = 1.0;


// set focus to main_app div on page load (otherwise, space to begin doesn't work sometimes)
{
    const MAIN_APP = document.getElementById("main_app");
    MAIN_APP.focus({ focusVisible: false }); // do not display outline on element
    MAIN_APP.scrollIntoView({ block: "center" });
}


// start app on page load
app();
