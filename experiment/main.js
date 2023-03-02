import { get_previous_letter, get_next_letter } from "/scripts/letter_loop.js";

// GLOBAL VARIABLES
const GROUP_DROPDOWN = document.getElementById("group_dropdown");
const GROUP_CONTAINERS = document.getElementsByClassName("group_container");

const TEXT_DROPDOWN = document.getElementById("text_dropdown");
const TEXT_CONTAINERS = document.getElementsByClassName("text_container");

const SELECTION_INDICATOR_TOP = document.getElementById("selection_indicator_top");
const SELECTION_INDICATOR_BOTTOM = document.getElementById("selection_indicator_bottom");

const HELP_MODAL = document.getElementById("help_modal");

// default values
let CURRENT_GROUP_NUMBER = "1"; // changed using open_group();
let CURRENT_TEXT_LETTER = "A"; // changed using open_text();


function scroll_up_to_text() {
    /*
    Scroll to the beginning of the text.
    Called when switching between different texts.
    */
    document.getElementById(`${CURRENT_GROUP_NUMBER}${CURRENT_TEXT_LETTER}`).scrollIntoView({ behavior: "smooth" });
}

function scroll_to_top() {
    /*
    Scroll to the top of the page.
    */
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


function set_indicator() {
    /*
    Set indicator at the bottom to group number and letter, e.g., 1A, 2D, 3C.
    */
    const text = CURRENT_GROUP_NUMBER + CURRENT_TEXT_LETTER;
    SELECTION_INDICATOR_TOP.textContent = text;
    SELECTION_INDICATOR_BOTTOM.textContent = text;
}


function open_group(number = CURRENT_GROUP_NUMBER) {
    console.log(number);
    // // use global if not provided
    // if (number === null) {
    //     number = CURRENT_GROUP_NUMBER;
    // }
    console.log(CURRENT_GROUP_NUMBER);
    console.log(number);
    // close dropdown menu (if doesn't exist, no error)
    GROUP_DROPDOWN.removeAttribute("open");
    // hide all groups (1, 2, 3)
    for (const div of GROUP_CONTAINERS) {
        div.style.display = "none";
    }
    // show the specific group content
    document.getElementById(`container_group${number}`).style.display = "block";
    // set global variable
    CURRENT_GROUP_NUMBER = number;
    // open text using global variable (see: the top of the script)
    open_text();
}

function open_text(letter = CURRENT_TEXT_LETTER) {
    // use global if not provided
    // if (letter === null) {
    //     letter = CURRENT_TEXT_LETTER;
    // }
    // close dropdown menu (if doesn't exist, no error)
    TEXT_DROPDOWN.removeAttribute("open");
    // hide all texts (1A, 1B, 1C, ..., 2B, 2C, 2D, ..., 3B, 3D, etc.)
    for (const text of TEXT_CONTAINERS) {
        text.style.display = "none";
    }
    // show the specific article content
    document.getElementById(`${CURRENT_GROUP_NUMBER}${letter}`).style.display = "block";
    // set global variable
    CURRENT_TEXT_LETTER = letter;
    // set indicator at the bottom to current group & text
    set_indicator();
}

function previous_text() {
    /*
    Open previous text in order, e.g., B -> A.
    Loop back from D back to A.
    */
    const previous_letter = get_previous_letter(CURRENT_TEXT_LETTER);
    open_text(previous_letter);
    scroll_up_to_text();
}

function next_text() {
    /*
    Open next text in order, e.g., A -> B.
    Loop back from A back to D.
    */
    const next_letter = get_next_letter(CURRENT_TEXT_LETTER);
    open_text(next_letter);
    scroll_up_to_text();
}

document.addEventListener('keydown', function (event) {
    switch (event.key) {
        case "ArrowLeft":
            previous_text();
            break;
        case "ArrowRight":
            next_text();
            break;
        case "1":
            open_group("1");
            break;
        case "2":
            open_group("2");
            break;
        case "3":
            open_group("3");
            break;
    }
});

// open using global variable (see: the top of the script)
open_group();
open_text();

// allow global access within HTML
window.open_group = open_group;
window.open_text = open_text;
window.previous_text = previous_text;
window.next_text = next_text;
window.scroll_to_top = scroll_to_top;
window.open_help_modal = function () { HELP_MODAL.setAttribute('open', true); }
window.close_help_modal = function () { HELP_MODAL.removeAttribute('open'); }
