document.getElementById("simple_count_words_btn").addEventListener("click", function () {
    let raw_str = document.getElementById('simple_count_words').value;
    let count = 0;
    // keep at 0 on empty string
    if (!raw_str) {
        console.warn("No string provided.");
    } else {
        raw_str = raw_str.toLowerCase(); // turn lowercase
        const words_split = raw_str.split(' '); // split at newlines
        count = words_split.length;
    }
    document.getElementById("simple_word_count_output").textContent = count;
});


document.getElementById("uniq_words_btn").addEventListener("click", function () {
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
    document.getElementById("stat_unique").textContent = count_unique;
    document.getElementById("stat_total").textContent = count_total;
    document.getElementById("stat_ratio").textContent = count_ratio;
});
