const clue1 = {
  introduction:
    'Den här utmaningen består av det klassiska "Wikipedia-spelet" som går ut på att klicka sig fram genom olika Wikipedia-artiklar för att nå ett visst slutmål. Följ stegen nedan och sista artikeln du hamnar på bör ge dig en hint om det förnamn som söks.',
  steps: [
    'Gå till Wikipedia-artikeln <a target="_blank" href="https://sv.wikipedia.org/wiki/Tyskland">Tyskland</a>',
    'Klicka på staden som har ett invånarantal närmast 1 miljon',
    'Klicka på förbundslandet som var nyskapat efter kriget',
    'Klicka på en länk i närheten av vad som hände 21 januari 1947',
    'Du är nu framme och har hittat smeknamnet på person nummer 1, grattis! Du ska svara personens förnamn.',
  ],
};

const clue2 = {
  introduction:
    'I den här utmaningen gäller det att hitta koordinater som sedan ska användas för att hamna rätt på Google Maps. Det eftersöks fem olika värden (A, B, C, D och E). Hitta dessa fem värden från ledtrådarna nedan.',
  steps: [
    '<strong>A</strong>: (Max antal tänder hos en vuxen person) + 4',
    '<strong>B</strong>: DCCCXLVII',
    '<strong>C</strong>: (Summan av år, månad och dag i mitt personnummer) - 3',
    '<strong>D</strong>: Numret i titeln på en film om ett fordon av bröderna Flamholc',
    '<strong>E</strong>: Så många är alla goda ting',
    'Gå till <a target="_blank" href="https://www.google.com/maps">Google Maps</a>',
    'Sök efter koordinaterna på formen <br><span class="large">A<strong>.</strong>B, <strong>-</strong>C<strong>.</strong>DE</span> (obs. minus C)',
    'Titta efter ett förnamn som är skrivet på en byggnad i närheten på North Palm Avenue, använd gärna Street View',
  ],
};

const clue3 = {
  introduction:
    'Här gäller det att titta runt efter en person med speciell outfit.',
  steps: [
    'Gå till följande <a target="_blank" href="https://ligaspel.se/pdlosd/pdl-ligan/division/2/">sida</a>',
    'Studera noggrannt personerna på sidan',
    'Har du hittat personen med basker, så har du hittat förnamnet för denna ledtråd, grattis!',
  ],
};

const clue4 = {
  introduction:
    'Här söks en gatuadress i Uppsala. Adressen består av två ord följt av en siffra, det andra ordet består av två ledtrådar. Alltså <span class="large">A BC N</span>',
  steps: [
    '<strong>A</strong>: I denna stadsdel spelar Almtuna sina hemmamatcher',
    '<strong>B</strong>: Fiat, Renault och Mercedes är märken av en sådan',
    '<strong>C</strong>: På en sådan kan en prostituerad arbeta',
    '<strong>N</strong>: (Antalet kantoner i Schweiz) - 2',
    'Gå till <a target="_blank" href="https://hitta.se">Hitta.se</a>',
    'Sök på adressen du fått fram',
    'Hittar du förnamnet på en god vän till Nicklas här så har du hittat rätt, grattis!',
  ],
};

export const clues = [clue1, clue2, clue3, clue4];
