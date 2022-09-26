import { show_top_alert, copy_to_clipboard } from "../scripts/alert.js";
import { open_tab } from "../scripts/tab.js";


window.addEventListener("popstate", (event) => {
    open_tab(event.state, false, false);
});


// open tab based on URL parameters
function get_url_parameters() {
    /*
    Set tab and language using URL parameters.
    If no tab parameters are provided, then use first <a> inside <nav>.
    I no lang parameters are provided, then use Englsh
    */
    // tab parameter (about, projects), e.g., website.com/index.html?tab=about
    const param_tab = new URLSearchParams(window.location.search).get("tab");
    // if null, use first tab in <nav>
    open_tab(param_tab, false, false);
    // fixes history bug - when opened with parameter, then going to first history entry, it opens default tab instead BECAUSE the state is null
    window.history.replaceState(param_tab, "");
}


get_url_parameters()


// allow global access within HTML
window.open_tab = open_tab;
window.show_top_alert = show_top_alert;
window.copy_to_clipboard = copy_to_clipboard;
