import { _get_next_letter } from "/scripts/letter.js";

document.getElementById("btn_uniq_words").addEventListener("click", function () {
    let raw_str = document.getElementById('uniq_words').value;
    let count_unique = 0, count_total = 0, count_ratio = 0;
    // keep at 0 on empty string
    if (!raw_str) {
        console.warn("No string provided.");
    } else {
        raw_str = raw_str.toLowerCase(); // turn lowercase
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
    // this is garbage but i'm only gonna use this like 3 times
    const amount = document.getElementById("read_order_amount_number").value; // get amount
    console.log(amount);
    let last_string = str; // place as first item
    let s = `1) ${str}<br>`; // place as first item
    for (let i = 0; i < amount - 1; ++i) { // get next letter, e.g., "A" -> "B", "B" -> "C"
        last_string = _get_following_letters(last_string); // overwrite based on previous letter
        s += `${i + 2}) ${last_string}<br>`;
    }
    return s;
}


document.getElementById("btn_read_order").addEventListener("click", function () {
    let raw_str = document.getElementById('read_order').value;
    const output = document.getElementById("output_next_group");
    if (!raw_str) {
        console.warn("No string provided.");
    } else if (raw_str.length != 5) {
        output.textContent = "Not 5 characters long; try '1ABCD'";

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
