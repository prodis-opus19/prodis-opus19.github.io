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
    window.open(url, "_blank");
}


function open_full_page_tab(category) {
    /*
    Unhide full page tab and highlight its corresponding button.
    * Tab = "category_tab"
    * Button = "category_button"
    If invalid category is provided, ignore.
    */
    // check if target tab exists
    const target_full_page_tab = document.getElementById(`${category}_tab`);
    if (target_full_page_tab == null) {
        console.log(`warning: unknown open_full_page_tab() target '${category}', ignoring`);
        return;
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
    // close mobile hamburger menu
    close_hamburger_menu();
    // scroll to top
    document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
    document.body.scrollTop = 0; // for Safari
    // set webpage's title
    const new_title = category[0].toUpperCase() + category.slice(1);
    document.title = `PRODIS - ${new_title}`;
    // create new history entry for current tab
    window.history.pushState(category, "");
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
    function set_english() {
        document.body.className = "hide_polish"; // hide tags with lang="pl" ID
        document.getElementById("lang_flag").src = "img/flag_us.png"; // set american flag src
    }
    function set_polish() {
        document.body.className = "hide_english"; // hide tags with lang="en" ID
        document.getElementById("lang_flag").src = "img/flag_poland.png"; // set polish flag src
    }
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
    switch (target) {
        case "en":
            console.log("ok: switching to english")
            set_english();
            break;
        case "pl":
            console.log("ok: switching to polish")
            set_polish();
            break;
        default:
            console.log("ok: toggling language")
            // if polish is hidden, then current language must be english
            if (document.body.className === "hide_polish") {
                set_polish();
            }
            else {
                set_english();
            }
    }
    // close mobile hamburger menu
    close_hamburger_menu();
}


window.addEventListener("popstate", (event) => {
    console.log(`ok: opening tab based on history: ${event.state}`);
    open_full_page_tab(event.state);
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
        console.log(`ok: received tab parameter to open '${param_tab}'`);
        open_full_page_tab(param_tab);
    }
    else {
        console.log("info: no tab parameter available");
        open_full_page_tab("project");
    }
    // language parameter (en, pl), e.g., prodis-opus19.github.io/index.html?lang=pl
    const param_lang = url_parameters.get("lang");
    if (param_lang !== null) {
        console.log(`ok: received lang parameter to set '${param_lang}'`);
        switch_language(param_lang);
    }
    else {
        console.log("info: no lang parameter available");
    }

}

// on script load, open tabs & set language
get_url_parameters()
open_person_desc("m_kul");
