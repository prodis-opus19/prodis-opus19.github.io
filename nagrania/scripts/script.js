// GLOBAL VARIABLES
const DEFAULT_TAB = "informacja"; // full page tab to open on page load
const APPENDED_TITLE = "NAGRANIA"; // appended before tab in <title>, e.g., NAGRANIA - Informacja


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
}


// on script load, open tabs
get_url_parameters()
