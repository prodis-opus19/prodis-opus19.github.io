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
        "wav/i2.wav": ["Kamila kupiła róże w supermarkecie.", "Kamila kupiła tulipany w supermarkecie, a nie róże."],
        "wav/i3.wav": ["Kamila kupiła wycieraczki w supermarkecie.", "Kamila kupiła katalizator w supermarkecie, a nie wycieraczki."],
        "wav/i4.wav": ["Kamila kupiła aspirynę w supermarkecie w supermarkecie.", "Kamila kupiła witaminy w supermarkecie, a nie aspirynę."],
        "wav/i5.wav": ["Kamila kupiła paluszki w supermarkecie.", "Kamila kupiła makaroniki w supermarkecie, a nie paluszki."],
        "wav/i6.wav": ["Kamila kupiła ogrzewanie w supermarkecie.", "Kamila kupiła kopaliny w supermarkecie, a nie ogrzewanie."],
        "wav/i7.wav": ["Kamila kupiła cygara w supermarkecie.", "Kamila kupiła papierosy w supermarkecie, a nie cygara."],
        "wav/i8.wav": ["Kamila kupiła bandaże w supermarkecie.", "Kamila kupiła laparoskopy w supermarkecie, a nie bandaże."],
        "wav/i9.wav": ["Kamila kupiła paprocie w supermarkecie.", "Kamila kupiła tulipanowce w supermarkecie, a nie paprocie."],
        "wav/i10.wav": ["Kamila kupiła zwolnienie w supermarkecie.", "Kamila kupiła partycypację w supermarkecie, a nie zwolnienie."],
        "wav/i11.wav": ["Kamila kupiła minerały w supermarkecie.", "Kamila kupiła paracetamol w supermarkecie, a nie minerały."],
    },
    // real experiment
    real: {
        // audio to be played to participant : transcription of audio shown to participant : text to be read by participant
        "wav/i12.wav": ["Kamila kupiła wiskozę w supermarkecie.", "Kamila kupiła trykotaże w supermarkecie, a nie wiskozę."],
        "wav/i13.wav": ["Kamila kupiła ogumienie w supermarkecie.", "Kamila kupiła tapicerki w supermarkecie, a nie ogumienie."],
        "wav/i14.wav": ["Kamila kupiła komody w supermarkecie.", "Kamila kupiła sekretarzyki w supermarkecie, a nie komody."],
        "wav/i15.wav": ["Kamila kupiła niedźwiadki w supermarkecie.", "Kamila kupiła hipopotamy w supermarkecie, a nie niedźwiadki."],
        "wav/i16.wav": ["Kamila kupiła faktury w supermarkecie.", "Kamila kupiła taryfikator w supermarkecie, a nie faktury."],
        "wav/i17.wav": ["Kamila kupiła kalosze w supermarkecie.", "Kamila kupiła mokasyny w supermarkecie, a nie kalosze."],
        "wav/i18.wav": ["Kamila kupiła magazyny w supermarkecie.", "Kamila kupiła publikacje w supermarkecie, a nie magazyny."],
        "wav/i19.wav": ["Kamila kupiła marchewki w supermarkecie.", "Kamila kupiła kalarepy w supermarkecie, a nie marchewki."],
        "wav/i20.wav": ["Kamila kupiła warzywa w supermarkecie.", "Kamila kupiła delikatesy w supermarkecie, a nie warzywa."],
        "wav/i21.wav": ["Kamila kupiła dyplomy w supermarkecie.", "Kamila kupiła certyfikaty w supermarkecie, a nie dyplomy."],
        "wav/i22.wav": ["Kamila kupiła ocieplenie w supermarkecie.", "Kamila kupiła kanalizacje w supermarkecie, a nie ocieplenie."],
        "wav/i23.wav": ["Kamila kupiła róże w supermarkecie.", "Kamila kupiła tulipany, a nie róże."],
        "wav/i24.wav": ["Kamila kupiła wycieraczki w supermarkecie.", "Kamila kupiła katalizator, a nie wycieraczki."],
        "wav/i25.wav": ["Kamila kupiła aspirynę w supermarkecie.", "Kamila kupiła witaminy, a nie aspirynę."],
        "wav/i26.wav": ["Kamila kupiła paluszki w supermarkecie.", "Kamila kupiła makaroniki, a nie paluszki."],
        "wav/i27.wav": ["Kamila kupiła ogrzewanie w supermarkecie.", "Kamila kupiła kopaliny, a nie ogrzewanie."],
        "wav/i28.wav": ["Kamila kupiła cygara w supermarkecie.", "Kamila kupiła papierosy, a nie cygara."],
        "wav/i29.wav": ["Kamila kupiła bandaże w supermarkecie.", "Kamila kupiła laparoskopy, a nie bandaże."],
        "wav/i30.wav": ["Kamila kupiła paprocie w supermarkecie.", "Kamila kupiła tulipanowce, a nie paprocie."],
        "wav/i31.wav": ["Kamila kupiła zwolnienie w supermarkecie.", "Kamila kupiła partycypację, a nie zwolnienie."],
        "wav/i32.wav": ["Kamila kupiła minerały w supermarkecie.", "Kamila kupiła paracetamol, a nie minerały."],
        "wav/i33.wav": ["Kamila kupiła wiskozę w supermarkecie.", "Kamila kupiła trykotaże, a nie wiskozę."],
        "wav/i34.wav": ["Kamila kupiła ogumienie w supermarkecie.", "Kamila kupiła tapicerki, a nie ogumienie."],
        "wav/i35.wav": ["Kamila kupiła komody w supermarkecie.", "Kamila kupiła sekretarzyki, a nie komody."],
        "wav/i36.wav": ["Kamila kupiła niedźwiadki w supermarkecie.", "Kamila kupiła hipopotamy, a nie niedźwiadki."],
        "wav/i37.wav": ["Kamila kupiła faktury w supermarkecie.", "Kamila kupiła taryfikator, a nie faktury."],
        "wav/i38.wav": ["Kamila kupiła kalosze w supermarkecie.", "Kamila kupiła mokasyny, a nie kalosze."],
        "wav/i39.wav": ["Kamila kupiła magazyny w supermarkecie.", "Kamila kupiła publikacje, a nie magazyny."],
        "wav/i40.wav": ["Kamila kupiła marchewki w supermarkecie.", "Kamila kupiła kalarepy, a nie marchewki."],
        "wav/i41.wav": ["Kamila kupiła warzywa w supermarkecie.", "Kamila kupiła delikatesy, a nie warzywa."],
        "wav/i42.wav": ["Kamila kupiła dyplomy w supermarkecie.", "Kamila kupiła certyfikaty, a nie dyplomy."],
        "wav/i43.wav": ["Kamila kupiła ocieplenie w supermarkecie.", "Kamila kupiła kanalizacje, a nie ocieplenie."],
        "wav/i44.wav": ["Czy to Małgosia kupiła tulipany w supermarkecie?", "Nie, to Kamila kupiła tulipany w supermarkecie, a nie Małgosia."],
        "wav/i45.wav": ["Czy to Małgosia kupiła katalizator w supermarkecie?", "Nie, to Kamila kupiła katalizator w supermarkecie, a nie Małgosia."],
        "wav/i46.wav": ["Czy to Małgosia kupiła witaminy w supermarkecie?", "Nie, to Kamila kupiła witaminy w supermarkecie, a nie Małgosia."],
        "wav/i47.wav": ["Czy to Małgosia kupiła makaroniki w supermarkecie?", "Nie, to Kamila kupiła makaroniki w supermarkecie, a nie Małgosia."],
        "wav/i48.wav": ["Czy to Małgosia kupiła kopaliny w supermarkecie?", "Nie, to Kamila kupiła kopaliny w supermarkecie, a nie Małgosia."],
        "wav/i49.wav": ["Czy to Małgosia kupiła papierosy w supermarkecie?", "Nie, to Kamila kupiła papierosy w supermarkecie, a nie Małgosia."],
        "wav/i50.wav": ["Czy to Małgosia kupiła laparoskopy w supermarkecie?", "Nie, to Kamila kupiła laparoskopy w supermarkecie, a nie Małgosia."],
        "wav/i51.wav": ["Czy to Małgosia kupiła tulipanowce w supermarkecie?", "Nie, to Kamila kupiła tulipanowce w supermarkecie, a nie Małgosia."],
        "wav/i52.wav": ["Czy to Małgosia kupiła partycypację w supermarkecie?", "Nie, to Kamila kupiła partycypację w supermarkecie, a nie Małgosia."],
        "wav/i53.wav": ["Czy to Małgosia kupiła paracetamol w supermarkecie?", "Nie, to Kamila kupiła paracetamol w supermarkecie, a nie Małgosia."],
        "wav/i54.wav": ["Czy to Małgosia kupiła trykotaże w supermarkecie?", "Nie, to Kamila kupiła trykotaże w supermarkecie, a nie Małgosia."],
        "wav/i55.wav": ["Czy to Małgosia kupiła tapicerki w supermarkecie?", "Nie, to Kamila kupiła tapicerki w supermarkecie, a nie Małgosia."],
        "wav/i56.wav": ["Czy to Małgosia kupiła sekretarzyki w supermarkecie?", "Nie, to Kamila kupiła sekretarzyki w supermarkecie, a nie Małgosia."],
        "wav/i57.wav": ["Czy to Małgosia kupiła hipopotamy w supermarkecie?", "Nie, to Kamila kupiła hipopotamy w supermarkecie, a nie Małgosia."],
        "wav/i58.wav": ["Czy to Małgosia kupiła taryfikator w supermarkecie?", "Nie, to Kamila kupiła taryfikator w supermarkecie, a nie Małgosia."],
        "wav/i59.wav": ["Czy to Małgosia kupiła mokasyny w supermarkecie?", "Nie, to Kamila kupiła mokasyny w supermarkecie, a nie Małgosia."],
        "wav/i60.wav": ["Czy to Małgosia kupiła publikacje w supermarkecie?", "Nie, to Kamila kupiła publikacje w supermarkecie, a nie Małgosia."],
        "wav/i61.wav": ["Czy to Małgosia kupiła kalarepy w supermarkecie?", "Nie, to Kamila kupiła kalarepy w supermarkecie, a nie Małgosia."],
        "wav/i62.wav": ["Czy to Małgosia kupiła delikatesy w supermarkecie?", "Nie, to Kamila kupiła delikatesy w supermarkecie, a nie Małgosia."],
        "wav/i63.wav": ["Czy to Małgosia kupiła certyfikaty w supermarkecie?", "Nie, to Kamila kupiła certyfikaty w supermarkecie, a nie Małgosia."],
        "wav/i64.wav": ["Czy to Małgosia kupiła kanalizacje w supermarkecie?", "Nie, to Kamila kupiła kanalizacje w supermarkecie, a nie Małgosia."],
        "wav/i65.wav": ["Czy to Małgosia kupiła tulipany w supermarkecie?", "Nie, to Kamila kupiła tulipany, a nie Małgosia."],
        "wav/i66.wav": ["Czy to Małgosia kupiła katalizator w supermarkecie?", "Nie, to Kamila kupiła katalizator, a nie Małgosia."],
        "wav/i67.wav": ["Czy to Małgosia kupiła witaminy w supermarkecie?", "Nie, to Kamila kupiła witaminy, a nie Małgosia."],
        "wav/i68.wav": ["Czy to Małgosia kupiła makaroniki w supermarkecie?", "Nie, to Kamila kupiła makaroniki, a nie Małgosia."],
        "wav/i69.wav": ["Czy to Małgosia kupiła kopaliny w supermarkecie?", "Nie, to Kamila kupiła kopaliny, a nie Małgosia."],
        "wav/i70.wav": ["Czy to Małgosia kupiła papierosy w supermarkecie?", "Nie, to Kamila kupiła papierosy, a nie Małgosia."],
        "wav/i71.wav": ["Czy to Małgosia kupiła laparoskopy w supermarkecie?", "Nie, to Kamila kupiła laparoskopy, a nie Małgosia."],
        "wav/i72.wav": ["Czy to Małgosia kupiła tulipanowce w supermarkecie?", "Nie, to Kamila kupiła tulipanowce, a nie Małgosia."],
        "wav/i73.wav": ["Czy to Małgosia kupiła partycypację w supermarkecie?", "Nie, to Kamila kupiła partycypację, a nie Małgosia."],
        "wav/i74.wav": ["Czy to Małgosia kupiła paracetamol w supermarkecie?", "Nie, to Kamila kupiła paracetamol, a nie Małgosia."],
        "wav/i75.wav": ["Czy to Małgosia kupiła trykotaże w supermarkecie?", "Nie, to Kamila kupiła trykotaże, a nie Małgosia."],
        "wav/i76.wav": ["Czy to Małgosia kupiła tapicerki w supermarkecie?", "Nie, to Kamila kupiła tapicerki, a nie Małgosia."],
        "wav/i77.wav": ["Czy to Małgosia kupiła sekretarzyki w supermarkecie?", "Nie, to Kamila kupiła sekretarzyki, a nie Małgosia."],
        "wav/i78.wav": ["Czy to Małgosia kupiła hipopotamy w supermarkecie?", "Nie, to Kamila kupiła hipopotamy, a nie Małgosia."],
        "wav/i79.wav": ["Czy to Małgosia kupiła taryfikator w supermarkecie?", "Nie, to Kamila kupiła taryfikator, a nie Małgosia."],
        "wav/i80.wav": ["Czy to Małgosia kupiła mokasyny w supermarkecie?", "Nie, to Kamila kupiła mokasyny, a nie Małgosia."],
        "wav/i81.wav": ["Czy to Małgosia kupiła publikacje w supermarkecie?", "Nie, to Kamila kupiła publikacje, a nie Małgosia."],
        "wav/i82.wav": ["Czy to Małgosia kupiła kalarepy w supermarkecie?", "Nie, to Kamila kupiła kalarepy, a nie Małgosia."],
        "wav/i83.wav": ["Czy to Małgosia kupiła delikatesy w supermarkecie?", "Nie, to Kamila kupiła delikatesy, a nie Małgosia."],
        "wav/i84.wav": ["Czy to Małgosia kupiła certyfikaty w supermarkecie?", "Nie, to Kamila kupiła certyfikaty, a nie Małgosia."],
        "wav/i85.wav": ["Czy to Małgosia kupiła kanalizacje w supermarkecie?", "Nie, to Kamila kupiła kanalizacje, a nie Małgosia."],
    }
}

// take a break every X pairs were displayed
export const TAKE_BREAK_INTERVAL = 10;

export const DISPLAY_STRING_DATA = {
    // HTML text that is displayed when the webpage is first loaded (inner HTML)
    start: `<b>Czytanie odpowiedzi</b><br><br>Najpierw usłyszysz nagranie audio, które jest częścią dialogu (symbol słuchawek).<br><br>Po odsłuchaniu nagrania, przeczytasz odpowiedź na głos, która ma być Twoją reakcją na wcześniejsze nagranie audio. Odpowiedź/reakcję przeczytaj właściwie do kontekstu, ale tak jak najnaturalniej potrafisz.<br><br><b>UWAGA:</b> po każdym nagraniu/tekście musisz nacisnąć spację, aby przejść do kolejnej odpowiedzi. Aby odtworzyć nagranie audio ponownie, wciśnij "R" na klawiaturze.<br><br>Pierwsze ${Object.keys(VOCAB_DATA["practice"]).length} odpowiedzi to ćwiczenie/tutorial.<br><br>Wciśnij Spację, aby rozpocząć tutorial.`,
    // HTML text displayed when we begin the real experiment (inner HTML)
    start_real: `<b>Koniec tutorialu</b><br><br>Teraz rozpocznie się właściwy eksperyment, w którym co ${TAKE_BREAK_INTERVAL} odpowiedzi będzie czas na krótką przerwę.<br><br>Proszę przeczytaj na głos \"rozpoczynam eksperyment\".<br><br>Następnie wciśnij Spację, aby rozpocząć właściwy eksperyment.`,
    // HTML text displayed when reaches TAKE_BREAK_INTERVAL
    take_break: "<b>Czas na krótką przerwę</b><br><br>Możesz teraz odpocząć, lub od razu kontynuuować eksperyment.<br><br>Wciśnij Spację, aby kontynuować.",
    // HTML end text that is displayed when the experiment is over (inner HTML)
    end: "<b>To koniec tej części eksperymentu.</b><br><br>Proszę czekać na dalsze instrukcje.",
};
