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


function switch_language(target, show_alert = true) {
    /*
    Switch between Polish or English.
    If no argument is provided, then automatically toggle between two languages.
    If "en" is provided, then switch to English.
    If "pl" is provided, then switch to Polish.
    If "show_alert" is false, then do not show top alert "Switched language to XYZ".
    */
    // close mobile floating menu that appears after clicking the hamburger icon
    document.getElementById("mobile_menu_toggle").checked = false;
    function set_english() {
        // show top alert, unless first page load
        if (show_alert) {
            show_top_alert("Changed language to English.")
        }
        document.body.className = "hide_polish"; // hide tags with lang="pl" ID
        document.getElementById("lang_flag").src = "images/root/flag/us.png"; // set american flag src
    }
    function set_polish() {
        // show top alert, unless first page load
        if (show_alert) {
            show_top_alert("Changed language to Polish.")
        }
        document.body.className = "hide_english"; // hide tags with lang="en" ID
        document.getElementById("lang_flag").src = "images/root/flag/pl.png"; // set polish flag src
    }
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
    switch (target) {
        case "en":
            set_english();
            break;
        case "pl":
            set_polish();
            break;
        default:
            // if polish is hidden, then current language must be english
            if (document.body.className === "hide_polish") {
                set_polish();
            }
            else {
                set_english();
            }
    }
}


// open tab based on URL parameters
function get_url_parameters() {
    /*
    Set tab and language using URL parameters.
    If no tab parameters are provided, then use first <a> inside <nav>.
    I no lang parameters are provided, then use English.
    */
    const url_parameters = new URLSearchParams(window.location.search);
    // tab parameter (about, projects), e.g., website.com/index.html?tab=about
    const param_tab = url_parameters.get("tab");
    // if null, use first tab in <nav>
    open_tab(param_tab, false);
    // fixes history bug - when opened with parameter, then going to first history entry, it opens default tab instead BECAUSE the state is null
    window.history.replaceState(param_tab, "");
    // language parameter (en, pl), e.g., website.com/index.html?lang=pl
    const param_lang = url_parameters.get("lang");
    if (param_lang !== null) { // we can't pass null directly, because that toggles between languages (en -> pl, pl -> en)
        switch_language(param_lang, false);
    }
}


get_url_parameters()
open_person_desc();


// allow global access within HTML
window.open_tab = open_tab;
window.show_top_alert = show_top_alert;
window.copy_to_clipboard = copy_to_clipboard;
window.switch_language = switch_language;
window.open_person_desc = open_person_desc;
