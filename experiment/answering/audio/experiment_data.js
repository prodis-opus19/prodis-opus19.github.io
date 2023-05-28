/*
Vocab data of audio-text pairs that are loaded by the experiment script.
Any order of pairs is okay (they're picked randomly), as long as you provide a valid pair.
Any amount of pairs is okay, they will be picked randomly till no pairs are left.
NOTE: this variable will be modified during runtime by the experiment script.
NOTE: the "./audio" directory path is always prepended to the key by main.js.
*/

export const VOCAB_DATA = {
    // practice for participant before moving to the real experiment
    practice: {
        // audio to be played to participant : transcription of audio shown to participant : text to be read by participant
        // the "<b>Przeczytaj zdanie na głos:</b><br><i>" & "</i>" will be removed inside `append_to_text_area()`
        "tutorial/1.wav": ["<b>Wysłuchaj:</b></br>Kamila kupiła cukierki w supermarkecie.", "<b>Przeczytaj zdanie na głos:</b><br><i>Kamila kupiła lizaki w supermarkecie, a nie cukierki.</i>"],
        "tutorial/2.wav": ["<b>Wysłuchaj:</b></br>Kamila kupiła chusteczki w supermarkecie.", "<b>Przeczytaj zdanie na głos:</b><br><i>Kamila kupiła obrusy w supermarkecie, a nie chusteczki.</i>"],
        "tutorial/3.wav": ["<b>Wysłuchaj:</b></br>Kamila kupiła szampony w supermarkecie.", "<b>Przeczytaj zdanie na głos:</b><br><i>Kamila kupiła mydełka w supermarkecie, a nie szampony.</i>"],
        "tutorial/4.wav": ["<b>Wysłuchaj:</b></br>Kamila kupiła brokuły w supermarkecie.", "<b>Przeczytaj zdanie na głos:</b><br><i>Kamila kupiła bakłażany w supermarkecie, a nie brokuły.</i>"],
        "tutorial/5.wav": ["<b>Wysłuchaj:</b></br>Kamila kupiła margarynę w supermarkecie.", "<b>Przeczytaj zdanie na głos:</b><br><i>Kamila kupiła masło w supermarkecie, a nie margarynę.</i>"],
        "tutorial/6.wav": ["<b>Wysłuchaj:</b></br>Kamila kupiła wołowinę w supermarkecie.", "<b>Przeczytaj zdanie na głos:</b><br><i>Kamila kupiła wieprzowinę w supermarkecie, a nie wołowinę.</i>"],
    },
    // real experiment
    real: {
        // audio to be played to participant : transcription of audio shown to participant : text to be read by participant
        "real/i2.wav": ["Kamila kupiła róże w supermarkecie.", "Kamila kupiła tulipany w supermarkecie, a nie róże."],
        "real/i3.wav": ["Kamila kupiła wycieraczki w supermarkecie.", "Kamila kupiła katalizator w supermarkecie, a nie wycieraczki."],
        "real/i4.wav": ["Kamila kupiła aspirynę w supermarkecie.", "Kamila kupiła witaminy w supermarkecie, a nie aspirynę."],
        "real/i5.wav": ["Kamila kupiła paluszki w supermarkecie.", "Kamila kupiła makaroniki w supermarkecie, a nie paluszki."],
        "real/i6.wav": ["Kamila kupiła ogrzewanie w supermarkecie.", "Kamila kupiła kopaliny w supermarkecie, a nie ogrzewanie."],
        "real/i7.wav": ["Kamila kupiła cygara w supermarkecie.", "Kamila kupiła papierosy w supermarkecie, a nie cygara."],
        "real/i8.wav": ["Kamila kupiła bandaże w supermarkecie.", "Kamila kupiła laparoskopy w supermarkecie, a nie bandaże."],
        "real/i9.wav": ["Kamila kupiła paprocie w supermarkecie.", "Kamila kupiła tulipanowce w supermarkecie, a nie paprocie."],
        "real/i10.wav": ["Kamila kupiła zwolnienie w supermarkecie.", "Kamila kupiła partycypację w supermarkecie, a nie zwolnienie."],
        "real/i11.wav": ["Kamila kupiła minerały w supermarkecie.", "Kamila kupiła paracetamol w supermarkecie, a nie minerały."],
        "real/i12.wav": ["Kamila kupiła wiskozę w supermarkecie.", "Kamila kupiła trykotaże w supermarkecie, a nie wiskozę."],
        "real/i13.wav": ["Kamila kupiła ogumienie w supermarkecie.", "Kamila kupiła tapicerki w supermarkecie, a nie ogumienie."],
        "real/i14.wav": ["Kamila kupiła komody w supermarkecie.", "Kamila kupiła sekretarzyki w supermarkecie, a nie komody."],
        "real/i15.wav": ["Kamila kupiła niedźwiadki w supermarkecie.", "Kamila kupiła hipopotamy w supermarkecie, a nie niedźwiadki."],
        "real/i16.wav": ["Kamila kupiła faktury w supermarkecie.", "Kamila kupiła taryfikator w supermarkecie, a nie faktury."],
        "real/i17.wav": ["Kamila kupiła kalosze w supermarkecie.", "Kamila kupiła mokasyny w supermarkecie, a nie kalosze."],
        "real/i18.wav": ["Kamila kupiła magazyny w supermarkecie.", "Kamila kupiła publikacje w supermarkecie, a nie magazyny."],
        "real/i19.wav": ["Kamila kupiła marchewki w supermarkecie.", "Kamila kupiła kalarepy w supermarkecie, a nie marchewki."],
        "real/i20.wav": ["Kamila kupiła warzywa w supermarkecie.", "Kamila kupiła delikatesy w supermarkecie, a nie warzywa."],
        "real/i21.wav": ["Kamila kupiła dyplomy w supermarkecie.", "Kamila kupiła certyfikaty w supermarkecie, a nie dyplomy."],
        "real/i22.wav": ["Kamila kupiła ocieplenie w supermarkecie.", "Kamila kupiła kanalizacje w supermarkecie, a nie ocieplenie."],
        "real/i23.wav": ["Kamila kupiła róże w supermarkecie.", "Kamila kupiła tulipany, a nie róże."],
        "real/i24.wav": ["Kamila kupiła wycieraczki w supermarkecie.", "Kamila kupiła katalizator, a nie wycieraczki."],
        "real/i25.wav": ["Kamila kupiła aspirynę w supermarkecie.", "Kamila kupiła witaminy, a nie aspirynę."],
        "real/i26.wav": ["Kamila kupiła paluszki w supermarkecie.", "Kamila kupiła makaroniki, a nie paluszki."],
        "real/i27.wav": ["Kamila kupiła ogrzewanie w supermarkecie.", "Kamila kupiła kopaliny, a nie ogrzewanie."],
        "real/i28.wav": ["Kamila kupiła cygara w supermarkecie.", "Kamila kupiła papierosy, a nie cygara."],
        "real/i29.wav": ["Kamila kupiła bandaże w supermarkecie.", "Kamila kupiła laparoskopy, a nie bandaże."],
        "real/i30.wav": ["Kamila kupiła paprocie w supermarkecie.", "Kamila kupiła tulipanowce, a nie paprocie."],
        "real/i31.wav": ["Kamila kupiła zwolnienie w supermarkecie.", "Kamila kupiła partycypację, a nie zwolnienie."],
        "real/i32.wav": ["Kamila kupiła minerały w supermarkecie.", "Kamila kupiła paracetamol, a nie minerały."],
        "real/i33.wav": ["Kamila kupiła wiskozę w supermarkecie.", "Kamila kupiła trykotaże, a nie wiskozę."],
        "real/i34.wav": ["Kamila kupiła ogumienie w supermarkecie.", "Kamila kupiła tapicerki, a nie ogumienie."],
        "real/i35.wav": ["Kamila kupiła komody w supermarkecie.", "Kamila kupiła sekretarzyki, a nie komody."],
        "real/i36.wav": ["Kamila kupiła niedźwiadki w supermarkecie.", "Kamila kupiła hipopotamy, a nie niedźwiadki."],
        "real/i37.wav": ["Kamila kupiła faktury w supermarkecie.", "Kamila kupiła taryfikator, a nie faktury."],
        "real/i38.wav": ["Kamila kupiła kalosze w supermarkecie.", "Kamila kupiła mokasyny, a nie kalosze."],
        "real/i39.wav": ["Kamila kupiła magazyny w supermarkecie.", "Kamila kupiła publikacje, a nie magazyny."],
        "real/i40.wav": ["Kamila kupiła marchewki w supermarkecie.", "Kamila kupiła kalarepy, a nie marchewki."],
        "real/i41.wav": ["Kamila kupiła warzywa w supermarkecie.", "Kamila kupiła delikatesy, a nie warzywa."],
        "real/i42.wav": ["Kamila kupiła dyplomy w supermarkecie.", "Kamila kupiła certyfikaty, a nie dyplomy."],
        "real/i43.wav": ["Kamila kupiła ocieplenie w supermarkecie.", "Kamila kupiła kanalizacje, a nie ocieplenie."],
        "real/i44.wav": ["Czy to Małgosia kupiła tulipany w supermarkecie?", "Nie, to Kamila kupiła tulipany w supermarkecie, a nie Małgosia."],
        "real/i45.wav": ["Czy to Małgosia kupiła katalizator w supermarkecie?", "Nie, to Kamila kupiła katalizator w supermarkecie, a nie Małgosia."],
        "real/i46.wav": ["Czy to Małgosia kupiła witaminy w supermarkecie?", "Nie, to Kamila kupiła witaminy w supermarkecie, a nie Małgosia."],
        "real/i47.wav": ["Czy to Małgosia kupiła makaroniki w supermarkecie?", "Nie, to Kamila kupiła makaroniki w supermarkecie, a nie Małgosia."],
        "real/i48.wav": ["Czy to Małgosia kupiła kopaliny w supermarkecie?", "Nie, to Kamila kupiła kopaliny w supermarkecie, a nie Małgosia."],
        "real/i49.wav": ["Czy to Małgosia kupiła papierosy w supermarkecie?", "Nie, to Kamila kupiła papierosy w supermarkecie, a nie Małgosia."],
        "real/i50.wav": ["Czy to Małgosia kupiła laparoskopy w supermarkecie?", "Nie, to Kamila kupiła laparoskopy w supermarkecie, a nie Małgosia."],
        "real/i51.wav": ["Czy to Małgosia kupiła tulipanowce w supermarkecie?", "Nie, to Kamila kupiła tulipanowce w supermarkecie, a nie Małgosia."],
        "real/i52.wav": ["Czy to Małgosia kupiła partycypację w supermarkecie?", "Nie, to Kamila kupiła partycypację w supermarkecie, a nie Małgosia."],
        "real/i53.wav": ["Czy to Małgosia kupiła paracetamol w supermarkecie?", "Nie, to Kamila kupiła paracetamol w supermarkecie, a nie Małgosia."],
        "real/i54.wav": ["Czy to Małgosia kupiła trykotaże w supermarkecie?", "Nie, to Kamila kupiła trykotaże w supermarkecie, a nie Małgosia."],
        "real/i55.wav": ["Czy to Małgosia kupiła tapicerki w supermarkecie?", "Nie, to Kamila kupiła tapicerki w supermarkecie, a nie Małgosia."],
        "real/i56.wav": ["Czy to Małgosia kupiła sekretarzyki w supermarkecie?", "Nie, to Kamila kupiła sekretarzyki w supermarkecie, a nie Małgosia."],
        "real/i57.wav": ["Czy to Małgosia kupiła hipopotamy w supermarkecie?", "Nie, to Kamila kupiła hipopotamy w supermarkecie, a nie Małgosia."],
        "real/i58.wav": ["Czy to Małgosia kupiła taryfikator w supermarkecie?", "Nie, to Kamila kupiła taryfikator w supermarkecie, a nie Małgosia."],
        "real/i59.wav": ["Czy to Małgosia kupiła mokasyny w supermarkecie?", "Nie, to Kamila kupiła mokasyny w supermarkecie, a nie Małgosia."],
        "real/i60.wav": ["Czy to Małgosia kupiła publikacje w supermarkecie?", "Nie, to Kamila kupiła publikacje w supermarkecie, a nie Małgosia."],
        "real/i61.wav": ["Czy to Małgosia kupiła kalarepy w supermarkecie?", "Nie, to Kamila kupiła kalarepy w supermarkecie, a nie Małgosia."],
        "real/i62.wav": ["Czy to Małgosia kupiła delikatesy w supermarkecie?", "Nie, to Kamila kupiła delikatesy w supermarkecie, a nie Małgosia."],
        "real/i63.wav": ["Czy to Małgosia kupiła certyfikaty w supermarkecie?", "Nie, to Kamila kupiła certyfikaty w supermarkecie, a nie Małgosia."],
        "real/i64.wav": ["Czy to Małgosia kupiła kanalizacje w supermarkecie?", "Nie, to Kamila kupiła kanalizacje w supermarkecie, a nie Małgosia."],
        "real/i65.wav": ["Czy to Małgosia kupiła tulipany w supermarkecie?", "Nie, to Kamila kupiła tulipany, a nie Małgosia."],
        "real/i66.wav": ["Czy to Małgosia kupiła katalizator w supermarkecie?", "Nie, to Kamila kupiła katalizator, a nie Małgosia."],
        "real/i67.wav": ["Czy to Małgosia kupiła witaminy w supermarkecie?", "Nie, to Kamila kupiła witaminy, a nie Małgosia."],
        "real/i68.wav": ["Czy to Małgosia kupiła makaroniki w supermarkecie?", "Nie, to Kamila kupiła makaroniki, a nie Małgosia."],
        "real/i69.wav": ["Czy to Małgosia kupiła kopaliny w supermarkecie?", "Nie, to Kamila kupiła kopaliny, a nie Małgosia."],
        "real/i70.wav": ["Czy to Małgosia kupiła papierosy w supermarkecie?", "Nie, to Kamila kupiła papierosy, a nie Małgosia."],
        "real/i71.wav": ["Czy to Małgosia kupiła laparoskopy w supermarkecie?", "Nie, to Kamila kupiła laparoskopy, a nie Małgosia."],
        "real/i72.wav": ["Czy to Małgosia kupiła tulipanowce w supermarkecie?", "Nie, to Kamila kupiła tulipanowce, a nie Małgosia."],
        "real/i73.wav": ["Czy to Małgosia kupiła partycypację w supermarkecie?", "Nie, to Kamila kupiła partycypację, a nie Małgosia."],
        "real/i74.wav": ["Czy to Małgosia kupiła paracetamol w supermarkecie?", "Nie, to Kamila kupiła paracetamol, a nie Małgosia."],
        "real/i75.wav": ["Czy to Małgosia kupiła trykotaże w supermarkecie?", "Nie, to Kamila kupiła trykotaże, a nie Małgosia."],
        "real/i76.wav": ["Czy to Małgosia kupiła tapicerki w supermarkecie?", "Nie, to Kamila kupiła tapicerki, a nie Małgosia."],
        "real/i77.wav": ["Czy to Małgosia kupiła sekretarzyki w supermarkecie?", "Nie, to Kamila kupiła sekretarzyki, a nie Małgosia."],
        "real/i78.wav": ["Czy to Małgosia kupiła hipopotamy w supermarkecie?", "Nie, to Kamila kupiła hipopotamy, a nie Małgosia."],
        "real/i79.wav": ["Czy to Małgosia kupiła taryfikator w supermarkecie?", "Nie, to Kamila kupiła taryfikator, a nie Małgosia."],
        "real/i80.wav": ["Czy to Małgosia kupiła mokasyny w supermarkecie?", "Nie, to Kamila kupiła mokasyny, a nie Małgosia."],
        "real/i81.wav": ["Czy to Małgosia kupiła publikacje w supermarkecie?", "Nie, to Kamila kupiła publikacje, a nie Małgosia."],
        "real/i82.wav": ["Czy to Małgosia kupiła kalarepy w supermarkecie?", "Nie, to Kamila kupiła kalarepy, a nie Małgosia."],
        "real/i83.wav": ["Czy to Małgosia kupiła delikatesy w supermarkecie?", "Nie, to Kamila kupiła delikatesy, a nie Małgosia."],
        "real/i84.wav": ["Czy to Małgosia kupiła certyfikaty w supermarkecie?", "Nie, to Kamila kupiła certyfikaty, a nie Małgosia."],
        "real/i85.wav": ["Czy to Małgosia kupiła kanalizacje w supermarkecie?", "Nie, to Kamila kupiła kanalizacje, a nie Małgosia."],
    }
}

// take a break every X pairs were displayed
export const TAKE_BREAK_INTERVAL = 10;

export const DISPLAY_STRING_DATA = {
    // HTML text that is displayed when the webpage is first loaded (inner HTML)
    start: `<b>Instrukcja</b><br><br>Najpierw usłyszysz nagranie krótkiego zdania, które jest częścią dialogu.<br><br>Po odsłuchaniu zdania, prosimy Cię o przeczytanie odpowiedzi, która pojawi się na ekranie. Odpowiedź jest reakcją na wcześniejsze zdanie.<br><br>Prosimy Cię o wymówienie odpowiedzi odpowiednio do kontekstu i w najbardziej naturalny sposób.<br><br><b>UWAGA:</b> po zdaniu/odpowiedzi naciśnij spację, aby przejść dalej. Aby odtworzyć zdanie ponownie, wciśnij "r" (restart) na klawiaturze.<br><br>Pierwsze ${Object.keys(VOCAB_DATA["practice"]).length} odpowiedzi to ćwiczenie/tutorial.<br><br>Wciśnij Spację, aby rozpocząć tutorial.`,
    // HTML text displayed when we begin the real experiment (inner HTML)
    start_real: `<b>Koniec tutorialu</b><br><br>Teraz rozpocznie się właściwy eksperyment, w którym co ${TAKE_BREAK_INTERVAL} odpowiedzi będzie czas na krótką przerwę.<br><br>Proszę powiedz na głos \"rozpoczynam eksperyment\".<br><br>Następnie wciśnij Spację, aby rozpocząć właściwy eksperyment.`,
    // HTML text displayed when reaches TAKE_BREAK_INTERVAL
    take_break: "<b>Czas na krótką przerwę</b><br><br>Możesz teraz odpocząć, lub od razu kontynuuować eksperyment.<br><br>Wciśnij Spację, aby kontynuować.",
    // HTML end text that is displayed when the experiment is over (inner HTML)
    end: "<b>To koniec tej części eksperymentu.</b><br><br>Proszę czekać na dalsze instrukcje.",
};
