function close_hamburger_menu() {
    document.getElementById("checkbox_toggle").checked = false;
}


function open_in_new_tab(url) {
    /*
    Open target URL in a new tab.
    */
    window.open(url, "_blank");
}


function open_full_page_tab(category, create_entry = true) {
    /*
    Unhide full page tab and highlight its corresponding button.
    * Tab = "category_tab"
    * Button = "category_button"
    If category is invalid, ignore.
    If create_entry is False, then no history entry will be created.
    This is a hack for when the listener aims to re-open full page from history.
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
    document.title = `REKRUTACJA - ${new_title}`;
    // create new history entry for current tab
    // prevent duplicates when function called from listener to open tab from history
    if (create_entry) {
        window.history.pushState(category, "");
        // console.log(`created entry - ${category}`);
    }
}


window.addEventListener("popstate", (event) => {
    // console.log(`ok: opening tab based on history: ${event.state}`);
    open_full_page_tab(event.state, false);
});


function get_url_parameters() {
    /*
    Set tab using URL parameters.
    If no parameters are provided, then use default - Home tab.
    */
    const url_parameters = new URLSearchParams(window.location.search);
    // tab parameter (team, contact), e.g., prodis-opus19.github.io/index.html?tab=team
    const param_tab = url_parameters.get("tab");
    if (param_tab !== null) {
        // console.log(`ok: received tab parameter to open '${param_tab}'`);
        open_full_page_tab(param_tab);
    }
    else {
        // console.log("info: no tab parameter available");
        open_full_page_tab("information");
    }
}

// on script load, open tabs
get_url_parameters()

