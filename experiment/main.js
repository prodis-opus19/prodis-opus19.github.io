// GLOBAL VARIABLES
const CONTAINER_GROUPS = document.getElementsByClassName("container_group");
const SELECTED_GROUP_INDICATOR = document.getElementById("group_select_indicator");


function open_group(name) {
    // set indicator to last letter (e.g., "group3" -> "3")
    SELECTED_GROUP_INDICATOR.textContent = name.slice(-1);
    // hide all groups
    for (const div of CONTAINER_GROUPS) {
        div.style.display = "none";
    }
    // show the specific group content
    document.getElementById(`article_${name}`).style.display = "block";
}

// select first group by default
open_group("group1");

// allow global access within HTML
window.open_group = open_group;
