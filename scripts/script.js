function close_hamburger_menu() {
    document.getElementById("checkbox_toggle").checked = false;
}

function open_tab(pageName, elmnt) {
    // close mobile hamburger menu on tab select
    close_hamburger_menu();
    // hide all elements with class="full_page_tab" by default */
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
    document.getElementById(pageName).style.display = "block";

    // set active tab color to red
    elmnt.style.backgroundColor = "#bb4b4b";

    // scroll to top
    document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
    document.body.scrollTop = 0; // for Safari
}



function open_person_desc(evt, person_name) {
    var i, tab_per_person_content, tab_per_person_link;
    // get all elements with class="tab_per_person_content" and hide them
    tab_per_person_content = document.getElementsByClassName("tab_per_person_content");
    for (i = 0; i < tab_per_person_content.length; i++) {
        tab_per_person_content[i].style.display = "none";
    }
    // get all elements with class="tab_per_person_link" and remove the class "active"
    tab_per_person_link = document.getElementsByClassName("tab_per_person_link");
    for (i = 0; i < tab_per_person_link.length; i++) {
        tab_per_person_link[i].className = tab_per_person_link[i].className.replace(" active", "");
    }
    // show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(person_name).style.display = "block";
    evt.currentTarget.className += " active";
}

// on script load...
// get the element with id="default_full_page_tab_open" and click on it
document.getElementById("default_full_page_tab_open").click();
// get the element with id="default_per_person_tab_open" and click on it
document.getElementById("default_per_person_tab_open").click();


