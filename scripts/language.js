import { BUTTON_LINKS } from "/scripts/tab.js";
import { show_top_alert } from "/scripts/alert.js";


// bool check for ancient browsers
const local_storage_available = (typeof (Storage) !== "undefined");


/**
 * Translate buttons to Polish or English.
 * This is pretty ugly, but I can't think of a better way while using IDs for buttons; I designed them with a single language in mind.
 *
 * @param {boolean} translate_to_polish Whether to translate buttons to Polish or English (default=false).
 */
function set_nav_btns(translate_to_polish = false) {
    // Keep names function, because it's rarely used (how often do you switch languages? only once, if at all, since we do auto-detection on page load)
    const btn_names = {
        // HTML element ID : English string : Polish string
        "news_button": ["News", "Aktualności"],
        "goals_button": ["Goals", "Cele"],
        "team_button": ["Team", "Skład"],
        "contact_button": ["Contact", "Kontakt"],
        "recordings_button": ["Recordings", "Nagrania"],
        "lang_button": ["Language", "Język"],
    };
    for (const btn of BUTTON_LINKS) {
        if (!btn.id) { // no ID tag; this always happens for vertical splitters, so not a bug
            continue;
        }
        const actual_text = btn.children[1]; // get 2nd item (<span>)
        if (!actual_text) { // if undefined, someone broke the html
            console.error(`Skipping button with empty text: '${actual_text}'. The HTML is probably broken.`);
            continue;
        }
        actual_text.textContent = translate_to_polish ? btn_names[btn.id][1] : btn_names[btn.id][0];
    }
}


/**
 * Set English language by:
 * - a) Unhiding HTML elements with lang attribute set to `en` and hiding `pl`.
 * - b) Setting the flag inside navbar to United States.
 * - c) Setting navbar buttons to English by ID.
 * - d) Setting global HTML language tag to `en` (used by Chrome's autotranslate, among other things).
 * - e) Setting localStorage `lang` to `en` so it's saved between reloads.
 *
 * @param {boolean} show_alert Show alert at the top of the page (default=true).
 */
function _set_english(show_alert = true) {
    if (show_alert) {
        show_top_alert("Changed language to English.");
    }
    document.body.className = "hide_polish"; // hide tags with lang="pl" ID
    document.getElementById("lang_flag").src = "images/root/flag/us.png"; // set american flag src
    set_nav_btns(false); // set displayed strings to english
    document.documentElement.setAttribute("lang", "en"); //
    if (local_storage_available) { // store language in local storage (5MB)
        window.localStorage.setItem("lang", "en");
    }
}


/**
 * Set Polish language by:
 * - a) Unhiding HTML elements with lang attribute set to `pl` and hiding `en`.
 * - b) Setting the flag inside navbar to Poland.
 * - c) Setting navbar buttons to Polish by ID.
 * - d) Setting global HTML language tag to `pl` (used by Chrome's autotranslate, among other things).
 * - e) Setting localStorage `lang` to `pl` so it's saved between reloads.
 *
 * @param {boolean} show_alert Show alert at the top of the page (default=true).
 */
function _set_polish(show_alert = true) {
    if (show_alert) {
        show_top_alert("Zmieniono język na Polski.");
    }
    document.body.className = "hide_english"; // hide tags with lang="en" ID
    document.getElementById("lang_flag").src = "images/root/flag/pl.png"; // set polish flag src
    set_nav_btns(true);// set displayed strings to polish
    document.documentElement.setAttribute("lang", "pl"); // html lang tag
    if (local_storage_available) { // store language in local storage (5MB)
        window.localStorage.setItem("lang", "pl");
    }
}


/**
 * Toggle between Polish or English.
 */
export function toggle_language() {
    // close mobile floating menu that appears after clicking the hamburger icon
    document.getElementById("mobile_menu_toggle").checked = false;
    // if polish is hidden, then set polish
    (document.body.className === "hide_polish") ? _set_polish() : _set_english();
}


/**
 * Set Polish based on local storage and browser's language, but prioritize local storage.
 */
function set_language_on_page_load() {
    // ignore ancient browsers, keep everything in english
    if (!local_storage_available) {
        return;
    }
    // if user changed to english, ignore everything
    if (window.localStorage.getItem("lang") === "en") {
        return;
    }
    // if user changed to polish or browser's language is polish, set polish
    if (window.localStorage.getItem("lang") === "pl" || navigator.language.slice(0, 2) === "pl") {
        _set_polish(false);
    }
    // otherwise, leave everything in english as-is
}


// on page load
set_language_on_page_load();
