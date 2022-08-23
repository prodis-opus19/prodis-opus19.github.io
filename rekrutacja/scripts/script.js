function close_hamburger_menu() {
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
        category = "informacja";
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
    document.getElementById(`${category}_button`).style.backgroundColor = "#437043";
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


let combo_count = 1;
let combo_last_tag = null;


function show_copy_popup(tag) {
    /*
    Show popup under the div passed using "this".
    If "isMobile" is True, then reduce Y offset from 150 to 20.
    This is because on mobile the div is moved down for some reason.
    If clicked same tag multiple times, count how many times clicked and show as "COMBO!".
    */
    // catch combos (clicked same element multiple times)
    const div = document.getElementById("copy_popup");
    // if same tag as previous, enable combo
    if (tag === combo_last_tag) {
        combo_count += 1;
        let append_text;
        // Unreal Tournament 2004 killstreaks because why not
        switch (true) {
            case (combo_count < 4):
                append_text = "COMBO";
                break;
            case (combo_count < 11):
                append_text = "KILLING SPREE";
                break;
            case (combo_count < 16):
                append_text = "RAMPAGE";
                break;
            case (combo_count < 21):
                append_text = "DOMINATING";
                break;
            case (combo_count < 26):
                append_text = "UNSTOPPABLE";
                break;
            case (combo_count < 31):
                append_text = "GODLIKE";
                break;
            default:
                append_text = "WICKED SICK";
                break;
        }
        div.textContent = `${append_text} ${combo_count}!`;
    }
    // if different tag, reset combo
    else {
        combo_last_tag = tag;
        combo_count = 1; // set to 2, because already clicked once when ran this
        div.textContent = "COPIED!";
    }
    // get body & tag position
    const body_rect = document.body.getBoundingClientRect();
    const tag_rect = tag.getBoundingClientRect();
    // const padding_bottom = parseFloat(document.defaultView.getComputedStyle(tag).paddingBottom);
    // calculate relative postion (otherwise breaks on scroll)
    const top = tag_rect.bottom - body_rect.top;
    const left = tag_rect.left - body_rect.left;
    // set popup tag to relative position
    var copy_element = document.getElementById("copy_popup");
    let add_vertical_value = 130;
    if (isMobile) {
        add_vertical_value = 10;
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
    Set tab using URL parameters.
    If no parameters are provided, then use default - Home tab.
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
        open_full_page_tab("informacja", create_entry = false, scroll_up = false);
    }
}


// on script load, check if mobile, open tabs
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
get_url_parameters()

