function close_hamburger_menu() {
    document.getElementById("checkbox_toggle").checked = false;
}


function open_tab(page_name, html_tag) {
    // close mobile hamburger menu on tab select
    close_hamburger_menu();
    // hide all elements with class="full_page_tab" by default
    var i, full_page_tab, navbar_links;
    full_page_tab = document.getElementsByClassName("full_page_tab");
    for (i = 0; i < full_page_tab.length; i++) {
        full_page_tab[i].style.display = "none";
    }
    // remove the background color of all navbar_links/buttons
    navbar_links = document.getElementsByClassName("navbar_link");
    for (i = 0; i < navbar_links.length; i++) {
        navbar_links[i].style.backgroundColor = "";
    }
    // show the specific tab content
    document.getElementById(page_name).style.display = "block";
    // set active tab color to red
    html_tag.style.backgroundColor = "#bb4b4b";
    // scroll to top
    document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
    document.body.scrollTop = 0; // for Safari
}


// on script load...
// get the element with id="default_full_page_tab_open" and click on it
document.getElementById("default_full_page_tab_open").click();
