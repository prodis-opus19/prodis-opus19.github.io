import { show_top_alert, copy_to_clipboard } from "/scripts/alert.js";
import { open_tab } from "/scripts/tab.js";


function open_person_desc(category = null) {
    /*
    Unhide per-person description and highlight its corresponding button.
    * Tab = "category_tab"
    * Button = "category_button"
    If invalid category is provided, use the category of the first button.
    */
    if (category === null) {
        category = document.getElementsByClassName("tab_per_person_link")[0].id.slice(0, -7);
    }
    // get all elements with class="tab_per_person_content" and hide them
    const tab_per_person_content = document.getElementsByClassName("tab_per_person_content");
    for (let i = 0; i < tab_per_person_content.length; i++) {
        tab_per_person_content[i].style.display = "none";
    }
    // get all elements with class="tab_per_person_link" and remove the class "active"
    const tab_per_person_link = document.getElementsByClassName("tab_per_person_link");
    for (let i = 0; i < tab_per_person_link.length; i++) {
        tab_per_person_link[i].classList.remove("active");
    }
    // show the current tab
    document.getElementById(`${category}_tab`).style.display = "block";
    // add an "active" class to the button that opened the tab
    document.getElementById(`${category}_button`).classList.add("active");
}


function toggle_language() {
    /*
    Toggle between Polish or English.
    */
    // close mobile floating menu that appears after clicking the hamburger icon
    document.getElementById("mobile_menu_toggle").checked = false;
    // if polish is hidden, then current language must be english
    if (document.body.className === "hide_polish") {
        // set polish
        show_top_alert("Changed language to Polish.")
        document.body.className = "hide_english"; // hide tags with lang="en" ID
        document.getElementById("lang_flag").src = "images/root/flag/pl.png"; // set polish flag src
    }
    else {
        // set english
        show_top_alert("Changed language to English.")
        document.body.className = "hide_polish"; // hide tags with lang="pl" ID
        document.getElementById("lang_flag").src = "images/root/flag/us.png"; // set american flag src
    }
}


open_person_desc();


// allow global access within HTML
window.open_tab = open_tab;
window.show_top_alert = show_top_alert;
window.copy_to_clipboard = copy_to_clipboard;
window.toggle_language = toggle_language;
window.open_person_desc = open_person_desc;
