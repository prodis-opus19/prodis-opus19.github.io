// Used by the experiment page (/experiment/main.js).

export function get_next_letter(letter) {
    /*
    Get letter that comes after alphabetically till "D", then loop back to "A".
    Ugly, but simple and error-proof.
    */
    switch (letter) {
        case "A":
            return "B";
        case "B":
            return "C";
        case "C":
            return "D";
        case "D":
            return "A";
        default:
            console.error(`Letter provided ${letter} is not 'A', 'B', 'C' or 'D', using 'A' as fallback.`)
            return "A";
    }
}

export function get_previous_letter(letter) {
    /*
    Get letter that comes before alphabetically till "A", then loop back to "D".
    Ugly, but simple and error-proof.
    */
    switch (letter) {
        case "D":
            return "C";
        case "C":
            return "B";
        case "B":
            return "A";
        case "A":
            return "D";
        default:
            console.error(`Letter provided ${letter} is not 'A', 'B', 'C' or 'D', using 'A' as fallback.`)
            return "A";
    }
}
