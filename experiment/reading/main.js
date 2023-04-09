// GLOBAL VARIABLES
const GROUP_DROPDOWN = document.getElementById("group_dropdown");
const GROUP_CONTAINERS = document.getElementsByClassName("group_container");

const TEXT_DROPDOWN = document.getElementById("text_dropdown");
const TEXT_CONTAINERS = document.getElementsByClassName("text_container");

const SELECTION_INDICATOR_TOP = document.getElementById("selection_indicator_top");
const SELECTION_INDICATOR_BOTTOM = document.getElementById("selection_indicator_bottom");

const AUTOSCROLL_CHECKBOX = document.getElementById("autoscroll_checkbox");
const FULLWIDTH_CHECKBOX = document.getElementById("fullwidth_checkbox");
const HELP_MODAL = document.getElementById("help_modal");
const SCROLL_TARGET = document.getElementById("scroll_target");


// bool check for ancient browsers
const local_storage_available = (typeof (Storage) !== "undefined");


// default values
let CURRENT_GROUP_NUMBER = "1"; // changed using open_group();
let CURRENT_TEXT_LETTER = "A"; // changed using open_text();


function get_next_letter(letter) {
    /*
    * Get letter that comes after alphabetically till "D", then loop back to "A".
    * Ugly, but simple and error-proof.
    */
    switch (letter) {
        case "A":
            return "B";
        case "B":
            return "C";
        case "C":
            return "D";
        case "D":
            return "A";
        default:
            console.error(`Letter provided ${letter} is not 'A', 'B', 'C' or 'D', using 'A' as fallback.`)
            return "A";
    }
}

function get_previous_letter(letter) {
    /*
    * Get letter that comes before alphabetically till "A", then loop back to "D".
    * Ugly, but simple and error-proof.
    */
    switch (letter) {
        case "D":
            return "C";
        case "C":
            return "B";
        case "B":
            return "A";
        case "A":
            return "D";
        default:
            console.error(`Letter provided ${letter} is not 'A', 'B', 'C' or 'D', using 'A' as fallback.`)
            return "A";
    }
}

function scroll_up_to_text() {
    /*
    * Scroll to the beginning of the text.
    * Called when switching between different texts.
    * If autoscroll checkbox is unchecked, do nothing.
    */
    if (AUTOSCROLL_CHECKBOX.checked) {
        // smooth, top of div vertically, center horizontally
        SCROLL_TARGET.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

function scroll_to_top() {
    /*
    * Scroll to the top of the page.
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
    /*
    * Open specific group (1, 2, 3) that contains texts.
    * If no argument provided, use global variable.
    */
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
    // store number in local storage (5MB)
    if (local_storage_available) {
        window.localStorage.setItem("number", number);
    }
}

function open_text(letter = CURRENT_TEXT_LETTER) {
    /*
    * Open specific text (A, B, C, D).
    * If no argument provided, use global variable.
    */
    // close dropdown menu (if doesn't exist, no error)
    TEXT_DROPDOWN.removeAttribute("open");
    // hide all texts (1A, 1B, 1C, ..., 2B, 2C, 2D, ..., 3B, 3D, etc.)
    for (const div of TEXT_CONTAINERS) {
        div.style.display = "none";
    }
    // show the specific article content
    document.getElementById(`${CURRENT_GROUP_NUMBER}${letter}`).style.display = "block";
    // set global variable
    CURRENT_TEXT_LETTER = letter;
    // set indicator at the bottom to current group & text
    set_indicator();
    // store letter in local storage (5MB)
    if (local_storage_available) {
        window.localStorage.setItem("letter", letter);
    }
}

function previous_text() {
    /*
    * Open previous text in order, e.g., B -> A.
    * Loop back from D back to A.
    */
    const previous_letter = get_previous_letter(CURRENT_TEXT_LETTER);
    open_text(previous_letter);
    // scroll to beginning of text
    scroll_up_to_text();
}

function next_text() {
    /*
    * Loop back from A back to D.
    * Open next text in order, e.g., A -> B.
    */
    const next_letter = get_next_letter(CURRENT_TEXT_LETTER);
    open_text(next_letter);
    // scroll to beginning of text
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

FULLWIDTH_CHECKBOX.addEventListener('change', (event) => {
    /*
    * Toggle article's width: narrow (default), wide.
    */
    const checked = event.currentTarget.checked;
    for (const div of GROUP_CONTAINERS) {
        if (checked) {
            div.classList.add("group_container_wide");
        }
        else {
            div.classList.remove("group_container_wide");
        }
    }
})

function set_global_variables_on_page_load() {
    /*
    * Set global number and letter based on local storage.
    */
    // ignore ancient browsers, keep everything as-is
    if (!local_storage_available) {
        return;
    }
    const local_number = window.localStorage.getItem("number");
    const local_letter = window.localStorage.getItem("letter");
    // if nothing saved in localStorage, keep everything as-is
    if (!local_number || !local_letter) {
        console.log("No data in localStorage.")
        return;
    }
    console.log(`Loaded from localStorage: number=${local_number}; letter=${local_letter}.`);
    // otherwise, overwrite global variables
    CURRENT_GROUP_NUMBER = local_number;
    CURRENT_TEXT_LETTER = local_letter;
}


// on page load, try to load global variables from localStorage
set_global_variables_on_page_load();
// open using global variable (see: the top of the script)
open_group();
AUTOSCROLL_CHECKBOX.checked = true; // reset on page reload
FULLWIDTH_CHECKBOX.checked = false; // reset on page reload

// allow global access within HTML
window.open_group = open_group;
window.open_text = open_text;
window.previous_text = previous_text;
window.next_text = next_text;
window.scroll_to_top = scroll_to_top;
window.open_help_modal = function () { HELP_MODAL.setAttribute('open', true); }
window.close_help_modal = function () { HELP_MODAL.removeAttribute('open'); }
