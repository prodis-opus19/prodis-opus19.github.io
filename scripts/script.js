// GLOBAL VARIABLES
const DEFAULT_TAB = "project"; // full page tab to open on page load
const DEFAULT_PERSON_TAB = "m_kul"; // person description opened in team tab
const APPENDED_TITLE = "PRODIS"; // appended before tab in <title>, e.g., PRODIS - Contact
let COMBO_COUNT = 1; // how many times the same element was copied
let LAST_TAG_OBJ = null; // which element was copied last time
const VERTICAL_OFFSET = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? 110 : 90; // offset for "COPIED!" popup based on mobile/desktop


function close_hamburger_menu() {
    /*
    Close floating menu that appears after clicking the hamburger menu icon on mobile.
    */
    document.getElementById("checkbox_toggle").checked = false;
}


function open_full_page_tab(category, create_entry = true, scroll_up = true) {
    /*
    Unhide full page tab and highlight its corresponding button.
    * Tab = "category_tab"
    * Button = "category_button"
    If "category" is invalid, ignore.
    If "create_entry" is False, then no history entry will be created.
    This is a hack for when the listener aims to re-open full page from history.
    If "scroll_up" is False, then page will not be scrolled to the top.
    This is useful when opening a page from pseudo-history, as it will stay at previous scroll position.
    */
    close_hamburger_menu();
    // check if target tab exists, set default if doesn't
    const target_full_page_tab = document.getElementById(`${category}_tab`);
    if (target_full_page_tab == null) {
        category = DEFAULT_TAB;
    }
    // hide all elements with class="full_page_tab" by default
    const full_page_tab = document.getElementsByClassName("full_page_tab");
    for (let i = 0; i < full_page_tab.length; i++) {
        full_page_tab[i].style.display = "none";
    }
    // remove the background color of all tab_links/buttons
    const tab_links = document.getElementsByClassName("tab_link");
    for (let i = 0; i < tab_links.length; i++) {
        tab_links[i].className = tab_links[i].className.replace(" active", "");
    }
    // show the specific tab content
    document.getElementById(`${category}_tab`).style.display = "block";
    // set active tab's button color to red
    document.getElementById(`${category}_button`).className += " active";
    // set webpage's title
    const new_title = category[0].toUpperCase() + category.slice(1);
    document.title = `${APPENDED_TITLE} - ${new_title}`;
    // create new history entry for current tab
    // prevents duplicates when function called from listener to open tab from history
    if (create_entry) {
        window.history.pushState(category, "", `?tab=${category}`);
    }
    // scroll up, unless first run
    if (scroll_up) {
        // scroll to top
        window.scrollTo(0, 0);
    }
}


function open_person_desc(category) {
    /*
    Unhide per-person description and highlight its corresponding button.
    * Tab = "category_tab"
    * Button = "category_button"
    If invalid category is provided, raise.
    */
    // get all elements with class="tab_per_person_content" and hide them
    const tab_per_person_content = document.getElementsByClassName("tab_per_person_content");
    for (let i = 0; i < tab_per_person_content.length; i++) {
        tab_per_person_content[i].style.display = "none";
    }
    // get all elements with class="tab_per_person_link" and remove the class "active"
    const tab_per_person_link = document.getElementsByClassName("tab_per_person_link");
    for (let i = 0; i < tab_per_person_link.length; i++) {
        tab_per_person_link[i].className = tab_per_person_link[i].className.replace(" active", "");
    }
    // show the current tab
    document.getElementById(`${category}_tab`).style.display = "block";
    // add an "active" class to the button that opened the tab
    document.getElementById(`${category}_button`).className += " active";
}


function switch_language(target) {
    /*
    Switch between Polish or English.
    If no argument is provided, then automatically toggle between two languages.
    If "en" is provided, then switch to English.
    If "pl" is provided, then switch to Polish.
    */
    // close mobile hamburger menu
    close_hamburger_menu();
    function set_english() {
        show_top_alert("Changed language to English.")
        document.body.className = "hide_polish"; // hide tags with lang="pl" ID
        document.getElementById("lang_flag").src = "img/flag_us.png"; // set american flag src
    }
    function set_polish() {
        show_top_alert("Changed language to Polish.")
        document.body.className = "hide_english"; // hide tags with lang="en" ID
        document.getElementById("lang_flag").src = "img/flag_poland.png"; // set polish flag src
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


function show_top_alert(content) {
    /*
    Show alert at the top.
    If no argument is provided, then show placeholder message.
    */
    const div = document.getElementById("top_alert");
    // change text content to sth like "Copied link"
    if (content == null) {
        console.log("warning: show_top_alert() was not given a text to display, using placeholder");
        content = "default message";
    }
    div.textContent = content;
    // remove animation, trigger reflow, add animation
    div.classList.remove("class_AnimAlert");
    void div.offsetWidth;
    div.classList.add("class_AnimAlert");
}


function show_copy_popup(tag) {
    /*
    Show popup under the div passed using "this".
    If "isMobile" is True, then reduce Y offset from 130 to 10.
    This is because the div is moved down on mobile for some reason (tested on iOS Safari).
    If clicked same tag multiple times, do not re-calculate position & count how many times clicked.
    */
    // get copy popup element that will be shown on click
    const copy_element = document.getElementById("copy_popup");
    // remove animation, trigger reflow
    copy_element.classList.remove("class_AnimCopy");
    void copy_element.offsetWidth;
    // if same tag as previous, enable combo & keep previous position (do not re-calculate)
    if (tag === LAST_TAG_OBJ) {
        COMBO_COUNT += 1;
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
                append_text = "マジで";
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
    // add animation
    copy_element.classList.add("class_AnimCopy");
}


function copy_to_clipboard(tag, to_copy) {
    /*
    Copy content provided to clipboard.
    */
    // copy text to clipboard
    navigator.clipboard.writeText(to_copy);
    // show popup under element clicked
    show_copy_popup(tag);
    // console.log("link copied: " + to_copy);
    return false;
}


window.addEventListener("popstate", (event) => {
    // console.log(`ok: opening tab based on history: ${event.state}`);
    open_full_page_tab(event.state, create_entry = false, scroll_up = false);
});


function get_url_parameters() {
    /*
    Set tab and language using URL parameters.
    If no parameters are provided, then use default - Home tab, English language.
    */
    const url_parameters = new URLSearchParams(window.location.search);
    // tab parameter (team, contact), e.g., prodis-opus19.github.io/index.html?tab=team
    const param_tab = url_parameters.get("tab");
    if (param_tab !== null) {
        // console.log(`ok: received tab parameter to open '${param_tab}'`);
        open_full_page_tab(param_tab, create_entry = false, scroll_up = false);
    }
    else {
        // console.log("info: no tab parameter available");
        open_full_page_tab(DEFAULT_TAB, create_entry = false, scroll_up = false);
    }
    // language parameter (en, pl), e.g., prodis-opus19.github.io/index.html?lang=pl
    const param_lang = url_parameters.get("lang");
    if (param_lang !== null) {
        // console.log(`ok: received lang parameter to set '${param_lang}'`);
        switch_language(param_lang);
    }
}


// on script load, open tabs & set language
get_url_parameters()
open_person_desc(DEFAULT_PERSON_TAB);
