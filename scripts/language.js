import { BUTTON_LINKS } from "/scripts/tab.js";
import { show_top_alert } from "/scripts/alert.js";


// bool check for ancient browsers
const local_storage_available = (typeof (Storage) !== "undefined");


function set_nav_btns(translate_to_polish = false) {
    /*
    Translate buttons to Polish or English.
    This is pretty ugly, but I can't think of a better way while using IDs for
        buttons; I designed them with a single language in mind.
    */
    const btn_names_en = new Map([
        ["project_button", "Project"],
        ["team_button", "Team"],
        ["contact_button", "Contact"],
        ["recordings_button", "Recordings"],
        ["lang_button", "Language"],
    ]);
    const btn_names_pl = new Map([
        ["project_button", "Projekt"],
        ["team_button", "Skład"],
        ["contact_button", "Kontakt"],
        ["recordings_button", "Nagrania"],
        ["lang_button", "Język"],
    ]);
    for (const btn of BUTTON_LINKS) {
        if (!btn.id) { // no ID tag
            continue;
        }
        const actual_text = btn.children[1]; // get 2nd item (<span>)
        if (!actual_text) { // if undefined, someone broke the html
            console.error(`Skipping button with empty text: '${actual_text}'. The HTML is probably broken.`);
            continue;
        }
        actual_text.textContent = translate_to_polish ? btn_names_pl.get(btn.id) : btn_names_en.get(btn.id);
    }
}


function set_english(show_alert = true) {
    if (show_alert) {
        show_top_alert("Changed language to English.");
    }
    document.body.className = "hide_polish"; // hide tags with lang="pl" ID
    document.getElementById("lang_flag").src = "images/root/flag/us.png"; // set american flag src
    set_nav_btns(false);
    document.documentElement.setAttribute("lang", "en"); //
    if (local_storage_available) { // store language in local storage (5MB)
        window.localStorage.setItem("lang", "en");
    }
}


function set_polish(show_alert = true) {
    if (show_alert) {
        show_top_alert("Zmieniono język na Polski.");
    }
    document.body.className = "hide_english"; // hide tags with lang="en" ID
    document.getElementById("lang_flag").src = "images/root/flag/pl.png"; // set polish flag src
    set_nav_btns(true);
    document.documentElement.setAttribute("lang", "pl"); // html lang tag
    if (local_storage_available) { // store language in local storage (5MB)
        window.localStorage.setItem("lang", "pl");
    }
}


export function toggle_language() {
    /*
    Toggle between Polish or English.
    */
    // close mobile floating menu that appears after clicking the hamburger icon
    document.getElementById("mobile_menu_toggle").checked = false;
    // if polish is hidden, then set polish
    (document.body.className === "hide_polish") ? set_polish() : set_english();
}


function set_language_on_page_load() {
    /*
    Set Polish based on local storage and browser's language, but prioritize local storage.
    */
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
        set_polish(false);
    }
    // otherwise, leave everything in english as-is
}


// on page load
set_language_on_page_load();
