// function capitalize_first_letter(string) {
//     return string[0].toUpperCase() + string.slice(1);
// }


function close_hamburger_menu() {
    document.getElementById("checkbox_toggle").checked = false;
}


function open_tab(category) {
    // close mobile hamburger menu on tab select
    close_hamburger_menu();
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
    // document.title = `PRODIS - ${capitalize_first_letter(category)}`;
    // scroll to top
    document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
    document.body.scrollTop = 0; // for Safari
}


function open_person_desc(category) {
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

function switch_language() {
    // Toggle between Polish and English
    if (document.body.className === "hide_polish") {
        document.body.className = "hide_english"; // hide tags with "en" ID
        document.getElementById('lang_flag').src = "img/flag_poland.png"; // set polish flag
    }
    else {
        document.body.className = "hide_polish"; // hide tags with "pl" ID
        document.getElementById('lang_flag').src = "img/flag_us.png"; // set american flag
    }
}

// if set language parameter (en, pl) passed, set language
// file:///Users/hikari/Work/prodis-opus19.github.io/index.html?lang=pl
const param_lang = new URLSearchParams(location.search).get("lang");
if (param_lang === "pl") {
    document.body.className = "hide_english"; // hide tags with "en" ID
    document.getElementById('lang_flag').src = "img/flag_poland.png"; // set polish flag
}
else if (param_lang === "en") {
    document.body.className = "hide_polish"; // hide tags with "pl" ID
    document.getElementById('lang_flag').src = "img/flag_us.png"; // set american flag
}

// on script load, open default tabs
open_tab("project");
open_person_desc("m_kul");
