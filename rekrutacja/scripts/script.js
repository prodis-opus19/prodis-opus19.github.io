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


// on script load, open default tabs
open_tab("information");

