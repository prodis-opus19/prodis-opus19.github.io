// GLOBAL VARIABLES
const DEFAULT_TITLE = document.title; // get content between <title> tag
const FULL_PAGE_TABS = document.getElementsByClassName("full_page_tab");
const BUTTON_LINKS = document.getElementsByClassName("tab_link");
// get first <a> from <nav>, then remove "_button" at the end to get raw category
const DEFAULT_TAB = BUTTON_LINKS[0].id.slice(0, -7);


export function open_tab(category, add_history = true, scroll_up = true) {
    /*
    Unhide full page tab and highlight its corresponding button.
    If "category" is invalid, use default category (first <a> tag inside <nav>).
    If "add_history" is False, then no history entry will be created for the previous tab.
    This is a hack for when the listener aims to re-open full page from history.
    If "scroll_up" is False, then page will not be scrolled to the top.
    This is useful when opening a page from pseudo-history, as it will stay at previous scroll position.
    */
    // close mobile floating menu that appears after clicking the hamburger icon
    document.getElementById("mobile_menu_toggle").checked = false;
    // scroll to the top, unless first run or opened from history
    if (scroll_up) {
        window.scrollTo(0, 0);
    }
    // hide all elements with class="full_page_tab" by default
    for (let i = 0; i < FULL_PAGE_TABS.length; i++) {
        FULL_PAGE_TABS[i].style.display = "none";
    }
    // remove the background color of all buttons in navbar with class="tab_link"
    for (let i = 0; i < BUTTON_LINKS.length; i++) {
        BUTTON_LINKS[i].classList.remove("active");
    }
    // set default tab using first <a> tag from within <nav>
    if (category === null) {
        category = DEFAULT_TAB;
    }
    try {
        // show the specific tab content and set active tab's button color
        document.getElementById(`${category}_tab`).style.display = "block";
        document.getElementById(`${category}_button`).classList.add("active");
    }
    catch (TypeError) {
        document.getElementById(`${DEFAULT_TAB}_tab`).style.display = "block";
        document.getElementById(`${DEFAULT_TAB}_button`).classList.add("active");
        // console.log(`unknown tab provided '${category}', opening default '${DEFAULT_TAB}'`);
    }
    // create new history entry for current tab; prevents duplicates when called from popstate listener
    if (add_history) {
        window.history.pushState(category, "", `?tab=${category}`);
    }
    // append category to webpage's title
    const category_upper = category[0].toUpperCase() + category.slice(1);
    document.title = `${DEFAULT_TITLE} - ${category_upper}`;
}
