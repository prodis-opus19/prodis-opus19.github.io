function close_hamburger_menu() {
    /*
    Close floating menu that appears after clicking the hamburger menu icon on mobile.
    */
    document.getElementById("checkbox_toggle").checked = false;
}


function open_in_new_tab(url) {
    /*
    Open target URL in a new tab.
    */
    // close mobile hamburger menu
    close_hamburger_menu();
    window.open(url, "_blank");
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
    // close mobile hamburger menu
    close_hamburger_menu();
    // check if target tab exists
    const target_full_page_tab = document.getElementById(`${category}_tab`);
    if (target_full_page_tab == null) {
        // console.log(`unknown open_full_page_tab() target '${category}', using default 'project'`);
        category = "project";
    }
    // hide all elements with class="full_page_tab" by default
    const full_page_tab = document.getElementsByClassName("full_page_tab");
    for (let i = 0; i < full_page_tab.length; i++) {
        full_page_tab[i].style.display = "none";
    }
    // remove the background color of all navbar_links/buttons
    const navbar_links = document.getElementsByClassName("navbar_link");
    for (let i = 0; i < navbar_links.length; i++) {
        navbar_links[i].style.backgroundColor = "";
    }
    // show the specific tab content
    document.getElementById(`${category}_tab`).style.display = "block";
    // set active tab's button color to red
    document.getElementById(`${category}_button`).style.backgroundColor = "#bb4b4b";
    // set webpage's title
    const new_title = category[0].toUpperCase() + category.slice(1);
    document.title = `REKRUTACJA - ${new_title}`;
    // create new history entry for current tab
    // prevent duplicates when function called from listener to open tab from history
    if (create_entry) {
        window.history.pushState(category, "", `?tab=${category}`);
        // console.log(`created entry - ${category} (not first run)`);
    }
    // always scroll up, unless first run
    if (scroll_up) {
        // scroll to top
        window.scrollTo(0, 0);
        // console.log("scrolling to top!");
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
            // console.log("ok: switching to english")
            set_english();
            break;
        case "pl":
            // console.log("ok: switching to polish")
            set_polish();
            break;
        default:
            // console.log("ok: toggling language")
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
    If "isMobile" is True, then reduce Y offset from 150 to 20.
    This is because on mobile the div is moved down for some reason.
    */
    // get body & tag position
    const body_rect = document.body.getBoundingClientRect();
    const tag_rect = tag.getBoundingClientRect();
    // const padding_bottom = parseFloat(document.defaultView.getComputedStyle(tag).paddingBottom);
    // calculate relative postion (otherwise breaks on scroll)
    const top = tag_rect.top - body_rect.top;
    const left = tag_rect.left - body_rect.left;
    // set popup tag to relative position
    var copy_element = document.getElementById("copy_popup");
    let add_vertical_value = 150;
    if (isMobile) {
        add_vertical_value = 20;
    }
    copy_element.style.top = (top + add_vertical_value) + "px";
    copy_element.style.left = left + "px";
    // remove animation, trigger reflow, add animation
    copy_element.classList.remove("class_AnimCopy");
    void copy_element.offsetWidth;
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
    open_full_page_tab(event.state, create_entry = false);
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
        open_full_page_tab("project", create_entry = false, scroll_up = false);
    }
    // language parameter (en, pl), e.g., prodis-opus19.github.io/index.html?lang=pl
    const param_lang = url_parameters.get("lang");
    if (param_lang !== null) {
        // console.log(`ok: received lang parameter to set '${param_lang}'`);
        switch_language(param_lang);
    }
    // else {
    // console.log("info: no lang parameter available");
    // }

}


// on script load, check if mobile, open tabs & set language
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
get_url_parameters()
open_person_desc("m_kul");
