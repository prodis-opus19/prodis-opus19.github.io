import { show_top_alert, copy_to_clipboard } from "/resources/scripts/alert.js";
import { open_tab } from "/resources/scripts/tab.js";
import { toggle_language } from "/resources/scripts/language.js";


/**
 * Unhide per-person description and highlight its corresponding button.
 * The div ID inside HTML has to be named in the following manner:
 * -> Tab = "category_tab"
 * -> Button = "category_button"
 * E.g., "about_tab" and "about_button".
 *
 * If invalid category is provided, use the category of the first button.
 *
 * @param {string | null} category Person to open, e.g., `z_malisz`.
 */
function open_person_desc(category = null) {
    if (category === null) {
        category = document.getElementsByClassName("tab_per_person_link")[0].id.slice(0, -7);
    }
    // get all elements with class="tab_per_person_content" and hide them
    const tab_per_person_content = document.getElementsByClassName("tab_per_person_content");
    for (const content of tab_per_person_content) {
        content.style.display = "none";
    }
    // get all elements with class="tab_per_person_link" and remove the class "active"
    const tab_per_person_link = document.getElementsByClassName("tab_per_person_link");
    for (const link of tab_per_person_link) {
        link.classList.remove("active");
    }
    // show the current tab
    document.getElementById(`${category}_tab`).style.display = "block";
    // add an "active" class to the button that opened the tab
    document.getElementById(`${category}_button`).classList.add("active");
}


// on page load
open_person_desc();


// allow global access within HTML
window.open_tab = open_tab;
window.show_top_alert = show_top_alert;
window.copy_to_clipboard = copy_to_clipboard;
window.toggle_language = toggle_language;
window.open_person_desc = open_person_desc;
