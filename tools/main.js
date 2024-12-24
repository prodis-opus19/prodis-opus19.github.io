import { _get_next_letter } from "/resources/scripts/letter.js";

document.getElementById("btn_uniq_words").addEventListener("click", function () {
    let raw_str = document.getElementById('uniq_words').value;
    let count_unique = 0, count_total = 0, count_ratio = 0;
    // keep at 0 on empty string
    if (!raw_str) {
        console.warn("No string provided.");
    } else {
        raw_str = raw_str.toLowerCase(); // turn lowercase
        raw_str = raw_str.replace(/[.,()"'`]/g, ''); // remove dots, commas, parentheses, quotation marks, and backticks
        const words_split = raw_str.split(' '); // split at newlines
        const words_split_unique = new Set(words_split);
        count_total = words_split.length;
        count_unique = words_split_unique.size;
        count_ratio = (count_unique / count_total) * 100;
        count_ratio = Math.round(count_ratio * 100) / 100; // round to two digits
    }
    document.getElementById("output_stat_unique").textContent = count_unique;
    document.getElementById("output_stat_total").textContent = count_total;
    document.getElementById("output_stat_ratio").textContent = count_ratio;
});


document.getElementById("btn_uniq_words_count").addEventListener("click", function () {
    let raw_str = document.getElementById('uniq_words_count').value;
    let count_unique = 0, count_total = 0, count_ratio = 0;
    let word_counts = new Map();
    // keep at 0 on empty string
    if (!raw_str) {
        console.warn("No string provided.");
        return;
    } else {
        raw_str = raw_str.toLowerCase(); // turn lowercase
        raw_str = raw_str.replace(/[.,()"'`]/g, ''); // remove dots, commas, parentheses, quotation marks, and backticks
        const words_split = raw_str.split(' '); // split at newlines
        const words_split_unique = new Set(words_split);
        count_total = words_split.length;
        count_unique = words_split_unique.size;
        count_ratio = (count_unique / count_total) * 100;
        count_ratio = Math.round(count_ratio * 100) / 100; // round to two digits

        // count word occurrences
        for (let word of words_split) {
            word_counts.set(word, (word_counts.get(word) || 0) + 1);
        }
        // convert to array and sort
        word_counts = Array.from(word_counts.entries()).sort((a, b) => b[1] - a[1]);
    }
    document.getElementById("output_stat_unique_count").textContent = count_unique;
    document.getElementById("output_stat_total_count").textContent = count_total;
    // format word_counts as a Python-like list
    document.getElementById("output_stat_common_list").textContent = '[' + word_counts.map(([word, count]) => `${count}: '${word}'`).join(', ') + ']';
});

/**
 * Get experiment that comes in order till `ACR`, then loop back to `RAC`.
 *
 * The offset is changed by using the last letter as the first letter in the next experiment, e.g., `CRA` -> `ACR`.
 *
 * Ugly, but simple and error-proof.
 *
 * @param {string} str_short Experiment number to check.
 */
export function _get_following_experiment_shortcut(str_short) {
    switch (str_short) {
        case "RAC":
            return "CRA"; // conversation, reading, answering
        case "CRA":
            return "ACR"; // answering, conversation, reading
        case "ACR":
            return "RAC"; // reading, answering, conversation
        default:
            console.error(`Experiment shortcut provided ${str_short} is not 'RAC', 'CRA', or 'ACR', using 'CRA' as fallback.`)
            return "CRA";
    }
}


// /**
//  * Convert experiment name to a shortcut that can be used by `_get_following_experiment_shortcut()`.
//  *
//  * The offset is not changed, it is simply translated from its full name to a shortcut, with the experiment that follow.
//  * E.g., `reading` is always followed by `answering` and `conversation`.
//  *
//  * @param {string} str_long Experiment name to check.
//  */
// export function _convert_full_experiment_name_to_shortcut(str_long) {
//     switch (str_long) {
//         case "reading":
//             return "RAC"; // reading, answering, conversation
//         case "answering":
//             return "ACR"; // answering, conversation, reading
//         case "conversation":
//             return "CRA"; // conversation, reading, answering
//         default:
//             console.error(`Experiment string provided ${str_long} is not 'reading', 'answering', or 'conversation', using 'RAC' as fallback.`)
//             return "RAC"; // reading, answering, conversation
//     }
// }


/**
 * Predict the next experiment orders.
 *
 * @param {string} str Experiment to predict onwards from for, e.g., for 'RAC', it will predict 'CRA', and so on.
 * @returns A `<br>` separated string of predicted text reading orders, e.g., `CRA, ACR`.
 */
function predict_experiment_order(str) {
    const amount = document.getElementById("experiment_order_amount_number").value; // get amount
    let s = `Participant 1) ${str}<br>`;
    for (let i = 0; i < amount - 1; ++i) {
        str = _get_following_experiment_shortcut(str); // overwrite based on previous shortcut
        s += `Participant ${i + 2}) ${str}<br>`;
    }
    return s;
}


document.getElementById("btn_experiment_order").addEventListener("click", function () {
    let raw_str = document.getElementById("experiment_order").value;
    raw_str = raw_str.toUpperCase(); // turn uppercase
    const output = document.getElementById("output_next_experiment");
    if (!raw_str) {
        console.warn("No string provided.");
    } else if (!["RAC", "CRA", "ACR"].includes(raw_str)) {
        output.textContent = "Not equal to 'RAC', 'CRA' or 'ACR'.";
    } else {
        // will prob throw on invalid input
        try {
            output.innerHTML = predict_experiment_order(raw_str);
        }
        catch (e) {
            output.innerHTML = e.message;
        }
    }
});


/**
 * Get group number that comes after numerically till `3`, then loop back to `1`.
 * Ugly, but simple and error-proof.
 *
 * @param {string} number Number to check.
 */
export function _get_next_group_number(number) {
    switch (number) {
        case "1":
            return "2";
        case "2":
            return "3";
        case "3":
            return "1";
        default:
            console.error(`Group number provided ${number} is not '1', '2', or '3', using '1' as fallback.`)
            return "1";
    }
}


/**
 * Get next group number and text, e.g., "1ABCD" -> "2BCDA" -> "3CDAB" -> "1DABC".
 * Ugly, but simple and error-proof.
 *
 * @param {string} str String to check.
 */
function _get_following_letters(str) {
    const temp = str.split("");
    const res = [];
    res.push(_get_next_group_number(temp[0])) // get next number, e.g., 1 -> 2, 2 -> 3
    for (let i = 1; i < temp.length; ++i) { // get next letter, e.g., "A" -> "B", "B" -> "C"
        res.push(_get_next_letter(temp[i]));
    }
    return res.join(""); // turn array into string
}


/**
 * Predict the next reading orders.
 *
 * @param {string} str Text reading order to predict onwards from for, e.g., for '1ABCD', it will predict '2BCDA', and so on.
 * @returns A `<br>` separated string of predicted text reading orders, e.g., `2BCDA, 3CDAB`.
 */
function predict_text_reading_order(str) {
    const amount = document.getElementById("read_order_amount_number").value; // get amount
    let last_string = str; // place as first item
    let s = `1) ${str}<br>`; // place as first item
    for (let i = 0; i < amount - 1; ++i) { // get next letter, e.g., "A" -> "B", "B" -> "C"
        last_string = _get_following_letters(last_string); // overwrite based on previous letter
        s += `${i + 2}) ${last_string}<br>`;
    }
    return s;
}


document.getElementById("btn_read_order").addEventListener("click", function () {
    let raw_str = document.getElementById("read_order").value;
    const output = document.getElementById("output_next_group");
    if (!raw_str) {
        console.warn("No string provided.");
    } else if (raw_str.length != 5) {
        output.textContent = "Not 5 characters long; try '1ABCD'.";
    } else if (!["1", "2", "3"].includes(raw_str.slice(0, 1))) {
        output.textContent = "Doesn't begin with 1, 2, or 3; try '1ABCD'.";
    } else {
        raw_str = raw_str.toUpperCase();
        // will prob throw on invalid input
        try {
            output.innerHTML = predict_text_reading_order(raw_str);
        }
        catch (e) {
            output.innerHTML = e.message;
        }
    }
});
