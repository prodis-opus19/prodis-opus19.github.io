// GLOBAL VARIABLES
// get first <a> from <nav>, then remove "_button" at the end to get raw category
const DEFAULT_TAB = document.querySelectorAll("nav a")[0].id.slice(0, -7);
const DEFAULT_TITLE = document.title; // get content between <title> tag
const FULL_PAGE_TABS = document.getElementsByClassName("full_page_tab");
const BUTTON_LINKS = document.getElementsByClassName("tab_link");


export function open_tab(category, create_entry = true, scroll_up = true) {
    /*
    Unhide full page tab and highlight its corresponding button.
    * category = "project"
    If "category" is invalid, use default category (first <a> tag inside <nav>).
    If "create_entry" is False, then no history entry will be created for the previous tab.
    This is a hack for when the listener aims to re-open full page from history.
    If "scroll_up" is False, then page will not be scrolled to the top.
    This is useful when opening a page from pseudo-history, as it will stay at previous scroll position.
    // */
    // console.log(category);
    // close mobile floating menu that appears after clicking the hamburger icon
    document.getElementById("mobile_menu_toggle").checked = false;
    // set default tab using first <a> tag from within <nav>
    if (category === null) {
        category = DEFAULT_TAB;
    }
    // hide all elements with class="full_page_tab" by default
    for (let i = 0; i < FULL_PAGE_TABS.length; i++) {
        FULL_PAGE_TABS[i].style.display = "none";
    }
    // remove the background color of all buttons in navbar with class="tab_link"
    for (let i = 0; i < BUTTON_LINKS.length; i++) {
        BUTTON_LINKS[i].className = BUTTON_LINKS[i].className.replace(" active", "");
    }
    // show the specific tab content
    document.getElementById(`${category}_tab`).style.display = "block";
    // set active tab's button color to red
    document.getElementById(`${category}_button`).className += " active";
    // create new history entry for current tab
    // prevents duplicates when function called from listener to open tab from history
    if (create_entry) {
        window.history.pushState(category, "", `?tab=${category}`);
    }
    // scroll to the top, unless first run
    if (scroll_up) {
        window.scrollTo(0, 0);
    }
    // append category to webpage's title
    const category_upper = category[0].toUpperCase() + category.slice(1);
    document.title = `${DEFAULT_TITLE} - ${category_upper}`;
}
