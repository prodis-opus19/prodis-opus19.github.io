# Meeting 20.07.2022

## Notes
- Add: "What is machine learning?" - definition, usage in action
- Add: "Types of machine learning systems" - types of training
## Python - Virtual environments
- Create: separate environment for OPUS, with access to system packages - python3 -m venv . --upgrade-deps
## Python - Machine Learning
- Titanic Disaster Model

# Meeting 29.07.2022

## Git
- gh alias - switching between GitHub accounts
- dotfiles repository
## Website
- Make images unelectable during text selection
## Python - Machine Learning
- Language Model - nursery rhymes

# Meeting 05.08.2022
## Website
- Add myself to Team tab
-- Wrote short description
-- Created logo for personal website
- Make parent DIVs of images unselectable as well (blacklist all by default, whitelist paragraphs only)
- Prevent dragging of Ukrainian flag img
- Change normal HTML tags to semantic tags to improve readability, and accessibility (for screen readers)
## Python - OOP notes
- Instance methods vs. class methods
- Decorators: class, static
## Python - Wikipedia corpus (from PoLitBert)
- Find most frequently occurring words 13,053,550 lines (1.54 GB).

# Meeting 10.08.2022

## Rekrutacja - plakat
- Apple Pages - wstępny projekt.
## Rekrutacja - pytania
## Rekrutacja - gdzie zamieścić ogłoszenie?
-- Facebook:
-- Oficjalna strona WA oraz strona UAM (lub post opublikowany przez stronę WA, a następnie udostępniony (przycisk Share) przez UAM).
-- Poznańskie grupy dzielnicowe (e.g., Jeżyce, Wilda), Spotted Poznań.
-- Grupy związane z badaniami (e.g., PŁATNE badania naukowe), nagrodami za badania, naukowe, dla pasjonatów.
## Rekrutacja - taktyka:
-- Ładna, prosta grafika, zamiast tekstu.
-- Podkreślić nagrody (karta empik 50 zł) na samym początku.
-- W grupach na FB, post powinien opublikować Wydział Anglistyki (lub UAM), zamiast osoby fizycznej.
-- W grupach na FB, jeżeli administrator nie wyrazi zgody na post to po prostu go nie opublikuje.
## Rekrutacja - struktura demograficzna nagranych.
-- Studenci (nie tylko WA!).
-- Osoby dorosłe z Poznania i spoza Poznania.
## Rejestracja - najpierw ankieta Google Forms / Microsoft Forms.
-- (+) Bezpieczeństwo - "zabawni" uczestnicy nie mogą zepsuć / usunąć kalendarza.
-- (+) Prostota - uczestnicy nie muszą zastanawiać się gdzie, i w jaki sposób się zarejestrować - ankieta prowadzi ich krok-po-kroku.
-- (+) Asynchroniczność - uczestnicy mogą wypełnić ankietę o dowolnej godzinie, a dopisać możemy ich jako grupa następnego dnia.
-- (+) Zebranie danych - przy rejestracji, możemy zebrać wszystkie potrzebne dane demograficzne (wiek, miasto, etc).
-- (+) Statystyka - wypełnione ankiety można wyeksportować do tabelki (e.g., Excel) i przeprowadzić statystykę (e.g., za pomocą Pandas).
-- (-) Kontakt - e-mail będzie mimo wszystko wymagany, mi.in. przy rezygnacji - tutaj potrzebna jest szybka reakcja z naszej strony.
-- (-) Dodatkowa praca - wpisywanie uczestników do kalendarza stoi po naszej stronie; ankieta gwarantuje ustandaryzowane dane, więc nie będzie to zbyt trudne.

# Meeting 24.08.2022

## Website - all
- Create history entries, and move between full page tabs using Back/Forward button via pushState.
- Change tab title when switching full page tabs.
- Set global tab & language using JavaScript URL parameters (e.g., tab=contact&lang=pl), useful for linking specific tab in Polish from a different page.
- Do not append "?tab=default" when opening the page for the first time (aesthetics).
- Simplify JavaScript full page tab logic - tab can be opened from within anywhere, e.g., onclick=open_tab("team").
- Add line-break opportunities () for better scaling on mobile.
- On mobile: add "Menu" text under hamburger icon, and turn Hamburger menu button's background color to gray when clicked.
- On JavaScript disabled: display warning message at the top (I thought I added that already?).
- Prevent old browsers from displaying mobile (iOS) UI via "screen only" media query.
- Simplify full page tab padding - always 600px width in the center, unless mobile, then match screen width.
- On mobile, reduce contact tab table's font size & spacing so everything fits on screen.
- Display alert with animation on top of the page during certain actions.
- On navbar link (Project, Team, Contact) right click, copy link & show alert.
- On OPUS project ID left click, copy & show alert
- Simplify link coloring - universal text color & on-hover.
- Desktop navbar redesign - always show at the top.
- Fix duplicate history entry on first load, this time for good.
- Show "COPIED!" popup on copy to clipboard, count combo clicks.
- Add vertical splitters between links, and tabs in navbar.
## Website - main page
- Improve Polish translation - as literal as possible, with accurate Polish equivalents of linguistic terms.
- Replace two buttons (English, Polish) with a single "Language" button toggle that displays country flag of currently selected language (USA, Poland).
- If redirected from recruitment page to project's main page, set default language to Polish (using JavaScript URLSearchParams).
- Add horizontal splitter between tabs & language switcher (aesthetics).
- Add link to Recruitment page.
- On language change, show alert.
## Website - recruitment
- Created subpage: rekrutacja
- Added placeholder description & images.
- Removed unnecessary duplicates by pointing by pointing to images in root directory.
- On e-mail left click, copy contact e-mail & show alert.
- Swap  links with  (+ JavaScript onclick) so right click copy link works
- Change prodis@protonmail.com from  to  mailto: so it can be copied on mobile with long press.
## Survey
- Created survey on Microsoft Forms.
## Poster
- Added QR code.
## Overleaf document
- Added link to Recruitment page.
## Printables
- Paper sheet on the door asking the participants to wait to be asked in - "recording in progress".

## Questions to answer
- Czy dyskwalifikujemy osoby, które zaznaczą płeć inną niż kobieta/mężczyzna?
-> Nie dyskwalifikujemy.
- Czy dyskwalifikujemy osoby na podstawie regionu pochodzenia? Jeżeli tak, to jakie regiony? Np. Śląsk.
-> Wg definicji standard to Poznań i Kraków, musielibyśmy zdyskwalifikowac resztę; jestem za nieodrzucaniem nikogo.
- Czy dyskwalifikujemy każdą osobę, która żyła w innych krajach przez dłużej niż 3 miesiące? Np. możemy poprosić o podanie długości pobytu - Niemcy (2 miesiące), Irlandia (3 lata).
-> Odpowiedź: trzeba spytać, w jakim wieku w tym kraju zamieszkała.
- W jaki sposób informujemy o obecnym stanie ankiety? Tj. nie potrzebujemy więcej kobiet lub mężczyzn.
-> Zamykamy wybór płci jak mamy 35 kobiet, w ankiecie zaznaczyć mogą tylko mężczyżni a info by, dała na samej górze.

# Meeting 29.08.2022

## Website
- Change subpage's name from "Rekrutacja" to "Nagrania" everywhere.
- Optimize copy function - do not re-calculate clicked div's position if clicked the same element; check if mobile only once to append Y-axis offset.
- Simplify copy animation to prevent stuttering on mobile - opacity only, no X-axis movement.
- Revert force select to normal select because elements with this parameter cannot be selected at all on iOS Safari.
- Reduce margin between article  tags; reduce tab's top & bottom padding; on mobile, make e-mail fit in one line.
- Added footer on each tab tab.
- Added placeholder text element to inform participants when we have enough people (or men, women, etc) - div & class notice_participants.
-- Not an embedded popup window because a good chunk of people would close it right away without reading what's written inside.
- Added placeholder plan of Collegium Heliodori with arrows showing where to go to Location tab.
- Updated poster with new QR code to information to Information tab (& tested if it works with a QR Scanner).
## Survey
- Added question: 3rd language's proficiency.
- Added answer to "what is your education": none (extremely unlikely, but I prefer to always give the participants an option)
- Quit survey if Polish not 1st language, suffers from disabilities or has dental braces, otherwise ask to click submit.
## Overleaf
- Created a placeholder of the step-by-step studio scenario; its contents are to be discussed further.

# Meeting 07.09.2022

- Ptasie radio - 12:00 (kawiarnio-restauracja; ul. Ptasie Radio, Kościuszki 74.3).
- Studio - 14:00 - Collegium Heliodori (w. Krynicki; take photos of studio for the webpage).
- Kolacja - 19:00 - spontanicznie.

## Website
- On desktop, reduce tab per person buttons size, but keep old size on mobile.
## Survey
- Fix minor typos, change asterisks into bulletpoints.
- Add notice under known foreign languages question: "Pamiętaj: to tylko dane statystyczne, nie będziemy wymagać od Ciebie ich znajomości podczas badania"
## Python
- Created class that extracts data from survey's excel file into a JSON file.
- Created script that creates Participant ID object with survey, and saves it as a JSON.
## Overleaf
- Add description of database in point 3.3.

## Database example / notes
- ID001_k_30_A
- k - plec
- 001 - kolejny numer osoby ktora przychodzi na sesje
- 30 - podzial wiekowy
- A - symbol warunku eksperymentalnego
- ID001_kobieta_sredniwiek_dialog
- ID001_kobieta_sredniwiek_czytanie
- ID001_dialog
- ID001_dialog.wav
- identyfikator osoby: ID000
- identyfikator sesji eksperymentalnej: _A

# Meeting 16.09.2022

## Database
- Fixed missing survey entires for second, and third foreign language.
- Added creation of unique participant IDs for all participants, with gender "X", and age "00" for participants who haven't completed the survey.
- Added calculation of the time it took to complete the survey in "H:M:S" format.
- Changed from string "null" to literal null.
- Used type checking to find mistakes in type hints (e.g., def foo(x: int) -> dict).
- Add fallback for ages below 10 when calculating age group by removing 2nd digit, and multiplying by 10.
## Website - appearance
- Upgraded navbar:
-- 1) on desktop - logo on the left, on the right - constant button width (based on total buttons width)
-- 2) on narrow (tablet?) - logo hidden, in the center - full screen width for buttons (take as much space as possible).
-- 3) on mobile: show logo, hamburger menu on the right - on click, use full width for buttons, with constant width padding.
- Changed navbar buttons from  to  so they can be right-click copied or opened in a new tab.
- Made links underlined, so they're easier to spot.
- Added small brightening when hovering over an already active button.
- Moved top_alert from on top to below the mobile header.
- Reduced desktop navbar size because it might take too much space on 16:9 devices.
- Added new country flags & adjust their CSS.
-- Source (public domain): https://github.com/hampusborgos/country-flags
## Website - code
- On JavaScript disabled: show all tabs that are available at once, instead of displaying nothing.
- On navbar title (text on the right - PRODIS, NAGRANIA), go to main tab (Project, Informacja, respectively).
- Set global constants for default tab, title, and other vars in JS of better readability.
- Added appending of background color to selected button using .active class (e.g., btn.active) instead of HEX code in javascript.
## Website - content
- Set custom CSS properties for colors to reduce redundancy (e.g., --tab_shadow: #0d0d0d).
- Added real-life images of Collegium Heliodori.
- Added new Google Maps screenshot (+ streetview), and a direct link to Google Maps.
- Added screenshot of the database JSON file as an example of participant IDs in the "Harmonogram" tab (fake made-up data).
- Moved poster from "Information" tab to newly created "Ulotka" tab.
- Moved the info regarding speech impediments, claustrophobia, etc. from the "Survey" tab to the actual survey on Microsoft Forms.
- Added big links leading to survey, and the "Location" tab.

# Meeting 19.09.2022

Discussed the status of the official letter required to order adapters, and external power source for the microphones.

# Meeting 23.09.2022

## Python . website
- Learn how to setup local HTTP server.
-- This is because JavaScript imports trigger a CORS (Cross-Origin Resource Sharing) error, which prevents JS modules at "file://" from being loaded for security reasons.
## Website - appearance
- Keep navbar at the top on mobile landscape to save vertical space (works on iOS Safari).
- Fix top_alert not being kept at the bottom on mobile landscape (position: fixed -> absolute).
- Remove hover color for active tab because it gets stuck on mobile, and a media query with color: inherit causes weird flashes (?).
## Website - code
- Add new modular (import.export) design to reduce redundancy & file size.
- Many other redundancies removed (e.g., passing event.state directly to open_full_page_tab() instead of checking if null).
- Use first  tag within  as first tab to open instead of including it manually as a variable.
- Use  tag as first part of title to which current tab is appended (e.g., PRODIS - Contact) instead of including it manually as a variable.
## Website - content
- Move CSS, and IMG to root directory (e.g., css.nagrania.css, img.nagrania) for easier management (better than 5000 sub directories).
- Move no javascript fallback  inside each HTML to a single file at "css.no_js.css" to reduce redundancy & file size.

# Meeting 30.09.2022

## Website - appearance
- Updated "ulotka" poster to new link, and room number.
- Turned "navbar_per_person" into a responsive flex, which becomes 90% of device's width on mobile.
- Turned list of image-links (Google Scholar, Research Gate, etc) into a responsive centered flex, which stays centered even if device's width is narrow.
- Added custom mail icon (created in Apple Pages) next to links (Google Scholar, Research Gate) that opens the Contact tab.
## Website - code
- Fixed a bug where right-clicking the back.forward history button, and choosing an entry would open a different tab than expected (e.g., clicking on "about" would open "team").
- Fixed a bug where going back to the tab that was opened with URL parameter (1st history entry), would open the default tab (null state fallback) instead of the tab passed in URL.
- If unknown tab provided (e.g., website.com?tab=test123), default tab will be opened (first link on navbar) instead of throwing an error.
- The "Changed language to Polish" notification will no longer be shown when opening main project's page from nagrania's page (sets "?lang=pl" url parameter); it will only appear when the user manually changes language.
- Removed redundant newlines, classes, and comments (e.g., .disable_select).
- Re-enabled dragging of images, and links everywhere except header because it might be used for sharing on mobile (e.g., dragging image to another app on iPadOS).
- Improved initial load performance by choosing first item from BUTTON_LINKS instead of querying for "nav a".
- Modernized open_tab() addition.removal of classes - now using classList property, and its methods instead of className, and strings.
- Improve fallback text for images to ensure accessibility, e.g., alt="Official map of the WA building's ground floor".
## Webpage - structure
- Moved README.md to docs folder, inline with Github's guidelines.
- Renamed & placed all files inline with Mozilla's guidelines.
## Python
- Upgraded all docstrings to Google docstrings to improve readability.
- Added creation of directories for each participant (if "is_survey_completed" is True), e.g., ID001_M_20.["conversation", "dialogue", "list_of_words", "text"].
- Added more type hints to improve readability.
- Refactor - sort imports into three categories: standard library, downloaded library, user-defined library.

# Meeting 07.10.2022

Topic: omówienie zadań eksperymentalnych, will take 1.5h.

## Website - code:
- Move history API listener from individual main.js to shared tab.js - remove redundancy.
## Website - structure
- Move majority of CSS code from individual css files into a shared base.css file.
- Within individual css:
-- Fetch base.css using @Import url.
-- Fetch responsive CSS using media queries, and @import url.
-- E.g., , @import "/styles/responsive/mobile_navbar.css" screen, and (max-width: 730px);.
-- Overwrite variables for accent color if required.
## Website - appearance
- Dynamically expand the mobile navbar's height based on the amount of links instead of hardcoding a static navbar height for each page.
- Fit more content on mobile landscape navbar.
- Reduce sizing of some elements on desktop.

# Meeting 14.10.2022

## Website
- CSS: Add animation on navbar, and link on hover (200ms for color, and background-color).
- CSS: Remove redundant CSS (e.g., #ulotka is replaced with generic class .img_example_last).
- JavaScript: Combine add_history, and scroll_up into one boolean because they're always used in the same context.
- JavaScript: Reflow copy animation after recalculating parent div position instead of before calculation.
- JavaScript: Use first button from navbar_per_person as default instead of manually providing a string in JS.
- JavaScript: Reduce vertical offset for copy popup on desktop.
- CSS: Adjust scaling of contact table on desktop, and mobile (fit more content).
- CSS: Reduce mobile navbar's container padding to match margin between individual buttons.
- CSS: Reduce image border radius on mobile from 25 to 15px.
- HTML: add word break () opportunities to the Location tab.
- Image: remove "420" graffiti from Google Street view screenshot of Collegium Heliodori.

# Meeting 08.11.2022

## R language
- Created notes based on the "Introduction to R" assignment on DataCamp.
## Website
- Reduce button's transition delay from 200 to 100ms.
- Fix open_person_desc()'s docstring - if null category, then it doesn't raise but uses first button's category as fallback.
- Changed relative paths to absolute paths in JavaScript, and HTML.
## Python
- Completed on DataCamp:
-- Introduction to Python; 2D Numpy Arrays, plus other ML essentials.
-- Intermediate Python; DataFrames, plots, control flow.
-- Python Data Science Toolbox Part 1; scope, variable argument length, lambda+map, error handling.
- ML, Data Science:
-- Created two plots using extracted sample vowel data.
-- Setup Polbert & Created basic notes about BERT.

# Meeting 15.11.2022

Prodis historia spotkan agendy (Google Docs).

## Website
- Improve URL appearance by not appending ".index.html" to subpages.
- Remove redundancy by combining "mobile_navbar.css" and "mobile_all.css".
- Turn relative paths to absolute paths (styles, images).
- Remove switching lang by URL parameter, because it requires redundant functions that extract the "lang" parameter from URL (language toggle button is still available).
- Prevent content shift by explicitly setting img sizes before css loads.
## Python
- Completed on DataCamp:
-- Python Data Science Toolbox Part 2.
-- Introduction to Shell.
-- Github Concepts.
- ML:
-- Tried setting up other pipelines.
-- Answered what "score" means.
-- Cleaned up output.

# Meeting 22.11.2022

---> create a webpage that uses json or markdown files to create notes

## Website
- Always force HTTPS using meta tag "Content-Security-Policy".
## Python
- Generate static HTML notes website from pseudo-markdown.
