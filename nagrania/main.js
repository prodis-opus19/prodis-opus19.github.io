import { show_top_alert, copy_to_clipboard } from "/resources/scripts/alert.js";
import { open_tab } from "/resources/scripts/tab.js";


// allow global access within HTML
window.open_tab = open_tab;
window.show_top_alert = show_top_alert;
window.copy_to_clipboard = copy_to_clipboard;
