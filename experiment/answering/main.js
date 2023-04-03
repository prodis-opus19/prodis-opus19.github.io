const vocab_data = {
    // audio to be played to participant : text to be read by participant
    // any order is okay, as long as you provide an audio and a text
    "audio1.mp3": "What did Kamila buy?",
    "audio2.mp3": "Who bought a folder?",
    "audio3.mp3": "Who bought an upholestering?",
    "audio4.mp3": "Did Malgosia buy the medallions?",
};


const MAX_VOCAB_LEN = Object.keys(vocab_data).length;
const TEXT_EXPERIMENT_DISPLAY = document.getElementById("experiment_display_text");
const AUDIO_EXPERIMENT_PLAYER = document.getElementById("experiment_audio_player");
const AUDIO_EXPERIMENT_ICON = document.getElementById("experiment_audio_icon");
const AUDIO_EXPERIMENT_STATUS = document.getElementById("experiment_display_status");


function get_random_pair() {
    const len = Object.keys(vocab_data).length;
    // pick random key, otherwise undefined
    const random_key = Object.keys(vocab_data)[Math.floor(Math.random() * len)];
    if (!random_key) {
        throw new RangeError("Could not pick a random key from vocab_data, because object is empty; you have requested more pairs than available.");
    }
    // create copy, before we delete
    const random_value = vocab_data[random_key];
    // delete to prevent indexes from repeating
    delete vocab_data[random_key];
    // set for display
    AUDIO_EXPERIMENT_STATUS.textContent = `${(MAX_VOCAB_LEN - len) + 1}/${MAX_VOCAB_LEN}`;
    // return as object
    return {
        "audio": random_key,
        "text": random_value,
    };
}


function stop_and_hide_audio() {
    // AUDIO_EXPERIMENT_PLAYER.style.display = "none";
    AUDIO_EXPERIMENT_ICON.style.display = "none";
    // stop and reset previous
    AUDIO_EXPERIMENT_PLAYER.pause();
    AUDIO_EXPERIMENT_PLAYER.currentTime = 0;
    // AUDIO_EXPERIMENT_PLAYER.src = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAVFYAAFRWAAABAAgAZGF0YQAAAAA=';
}


function play_audio(audio_file) {
    // unhide audio
    // AUDIO_EXPERIMENT_PLAYER.style.display = "block";
    AUDIO_EXPERIMENT_ICON.style.display = "block";
    // play audio
    AUDIO_EXPERIMENT_PLAYER.src = "/audio/" + audio_file;
    AUDIO_EXPERIMENT_PLAYER.play();
}


function display_text(text) {
    // unhide text
    TEXT_EXPERIMENT_DISPLAY.style.display = "block";
    // hide audio
    stop_and_hide_audio();
    // set text
    TEXT_EXPERIMENT_DISPLAY.textContent = text;
}


function app() {
    // console.log("App launched.");
    TEXT_EXPERIMENT_DISPLAY.innerHTML = "Vocabulary experiment.<br>First, you will hear an audio recording.<br>Then, you will read a text out loud.<br><br>Press space to confirm.";
    let pairs_displayed = 0;
    let random_pair;
    let show_text_on_next_space_press = false;
    // main event loop
    document.addEventListener("keydown", function (event) {
        if (event.key === " ") {
            // console.log("Vocab data current:", vocab_data);
            event.preventDefault();
            // console.log(show_text_on_next_space_press);
            //
            if (show_text_on_next_space_press) {
                // console.log("Showing text, because show_text is true. Now it will be set to false");
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
                    // console.log("Playing audio and waiting for it to end", random_pair.audio);
                    play_audio(random_pair.audio);
                    TEXT_EXPERIMENT_DISPLAY.textContent = "";
                    show_text_on_next_space_press = true;
                    // console.log("Setting show_text to true");
                }
                // otherwise, the experiment is over
                else {
                    TEXT_EXPERIMENT_DISPLAY.textContent = "Experiment is over. Thank you.";
                    console.log("Vocab data end:", vocab_data);
                }
            }
        }
    });
}


// set default values
AUDIO_EXPERIMENT_STATUS.textContent = `1/${MAX_VOCAB_LEN}`;
AUDIO_EXPERIMENT_PLAYER.volume = 1.0;

// set focus on page load
{
    const MAIN_APP = document.getElementById("main_app");
    MAIN_APP.focus({ focusVisible: false });
    MAIN_APP.scrollIntoView({ block: "center" });
}


// start app on page load
app();
