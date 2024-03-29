// GLOBAL VARIABLES
let COMBO_COUNT = 1; // how many times the same element was copied
let LAST_TAG_OBJ = null; // which element was copied last time
const VERTICAL_OFFSET = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? 110 : 76; // offset for "COPIED!" popup based on mobile/desktop


/**
 * Show alert (as text) at the top of the webpage.
 *
 * @param {string} content Text to display.
 */
export function show_top_alert(content) {
    const div = document.getElementById("top_alert");
    div.textContent = content;
    // remove animation, trigger reflow, add animation
    div.classList.remove("class_AnimAlert");
    void div.offsetWidth;
    div.classList.add("class_AnimAlert");
}


/**
 * Helper function, called by copy_to_clipboard().
 * Show popup under the div passed using "this".
 *
 * Uses global `VERTICAL_OFFSET` to modify vertical offset for mobile devices.
 * This is because the div is moved down on mobile for some reason (tested on iOS Safari).
 *
 * If clicked same tag multiple times, do not re-calculate position & count how many times clicked.
 *
 * @param {Object} tag The div that called the function, provided as `this`.
 */
function _show_copy_popup(tag) {
    // get copy popup element that will be shown on click
    const copy_element = document.getElementById("copy_popup");
    // remove animation
    copy_element.classList.remove("class_AnimCopy");
    // if same tag as previous, enable combo & keep previous position (do not re-calculate)
    if (tag === LAST_TAG_OBJ) {
        COMBO_COUNT++;
        let append_text;
        // Unreal Tournament 2004
        switch (true) {
            case (COMBO_COUNT < 5):
                append_text = "COMBO";
                break;
            case (COMBO_COUNT < 10):
                append_text = "COMBO SPREE";
                break;
            case (COMBO_COUNT < 15):
                append_text = "RAMPAGE";
                break;
            case (COMBO_COUNT < 20):
                append_text = "DOMINATING";
                break;
            case (COMBO_COUNT < 25):
                append_text = "UNSTOPPABLE";
                break;
            case (COMBO_COUNT < 30):
                append_text = "GODLIKE";
                break;
            case (COMBO_COUNT < 40):
                append_text = "WICKED SICK";
                break;
            default:
                append_text = "Please call a therapist";
                break;
        }
        copy_element.textContent = `${append_text} ${COMBO_COUNT}!`;
    }
    // if different tag, reset combo & get new position (re-calculate)
    else {
        // set global values that will be used to check if clicked same tag
        LAST_TAG_OBJ = tag;
        COMBO_COUNT = 1;
        copy_element.textContent = "COPIED!";
        // get body & tag position
        const body_rect = document.body.getBoundingClientRect();
        const tag_rect = tag.getBoundingClientRect();
        // calculate relative postion (otherwise breaks on scroll)
        const top = tag_rect.bottom - body_rect.top;
        const left = tag_rect.left - body_rect.left;
        // set popup tag to relative position
        copy_element.style.top = (top + VERTICAL_OFFSET) + "px";
        copy_element.style.left = left + "px";
    }
    // trigger reflow, add animation
    void copy_element.offsetWidth;
    copy_element.classList.add("class_AnimCopy");
}


/**
 * Copy content provided to clipboard.
 *
 * @param {Object} tag The div that called the function, provided as `this`.
 * @param {string} to_copy Text to copy.
 */
export function copy_to_clipboard(tag, to_copy) {
    // copy text to clipboard
    navigator.clipboard.writeText(to_copy);
    // show popup under element clicked
    _show_copy_popup(tag);
}
