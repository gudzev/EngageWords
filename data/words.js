import { score } from "../scripts/score.js";
import { removeDuplicates } from "../scripts/functions.js";

export class Word
{
    static currentWordId = 0;
    static availableWords;

    englishWord;
    serbianMeaning;
    additionalMeaning;

    constructor(englishWord, serbianMeaning, additionalMeaning)
    {
        this.wordId = Word.currentWordId++;
        this.englishWord = englishWord;
        this.serbianMeaning = serbianMeaning;
        this.additionalMeaning = additionalMeaning;
    }

    generateQuestionHTML()
    {
        let correctWord = this.generateWord();
        let wrongWord1;
        let wrongWord2;
        let wrongWord3;

        do 
        {
            wrongWord1 = this.generateWord();
        } 
        while(wrongWord1[0] === correctWord[0]);
        
        do 
        {
            wrongWord2 = this.generateWord();
        } 
        while (wrongWord2[0] === correctWord[0] || wrongWord2[0] === wrongWord1[0]);
        
        do 
        {
            wrongWord3 = this.generateWord();
        } 
        while (wrongWord3[0] === correctWord[0] || wrongWord3[0] === wrongWord1[0] || wrongWord3[0] === wrongWord2[0]);
        

        let wordArray = this.shuffle([correctWord[0], wrongWord1[0], wrongWord2[0], wrongWord3[0]]);

        return `
            <div class="game">
                <h1 class="english-word">${correctWord[0].englishWord}</h1>
                <a class="word-meaning red">${wordArray[0].serbianMeaning}</a>
                <a class="word-meaning blue">${wordArray[1].serbianMeaning}</a>
                <a class="word-meaning yellow">${wordArray[2].serbianMeaning}</a>
                <a class="word-meaning green">${wordArray[3].serbianMeaning}</a>
            </div>
            <div class="score">
                <div class="score-container">
                    <h1>Broj pogođđenih za redom</h1>
                    <h2>Trenutno pogođenih reči za redom: <span class="orange score-current-winstreak"></span></h2>
                    <h2>Maksimalno pogođenih reči za redom: <span class="orange score-max-winstreak">${score.maxWinStreak}</span></h2>
                </div>
                <div class="score-container">
                    <h1>Statistika pogađanja</h1>
                    <h2>Tačnih reči: <span class="orange score-correct-choices">${score.correctChoices}</span></h2>
                    <h2>Netačnih reči: <span class="orange score-wrong-choices">${score.wrongChoices}</span></h2>
                </div>
                <div class="reset-container">
                    <a class="reset-btn orange"><i class="fa fa-refresh orange-icon-margin" aria-hidden="true"></i>Restartuj rezultat</a>
                </div>
            </div>
        `;
    }

    generateWord()
    {
        let wordIndex = Math.floor(Math.random() * Word.availableWords.length);
        let word = Word.availableWords[wordIndex];
        return [word, wordIndex];
    }

    // fisher-yates shuffle algorithm
    shuffle(array) 
    {
        for (let i = array.length - 1; i > 0; i--) 
        {
          let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      
          // swap elements array[i] and array[j]
          // we use "destructuring assignment" syntax to achieve that
          [array[i], array[j]] = [array[j], array[i]];
        }

        return array;
    }
}

export let words = 
[
    new Word("contemporary", "savremen", ""),
    new Word("notion", "ideja, shvatanje", ""),
    new Word("dread", "strah", ""),
    new Word("insular", "izolovano", ""),
    new Word("unhinged", "poremećen", ""),
    new Word("mundane", "prizeman, svakodnevni", ""),
    new Word("insufferable", "nepodnošljiv", ""),
    new Word("vermin", "štetočina", ""),
    new Word("deputy", "pomoćnik", ""),
    new Word("venture", "poduhvat", ""),
    new Word("transpire", "ispariti", ""),
    new Word("fumble", "petljati", ""),
    new Word("alleged", "navodno", ""),
    new Word("sober", "trezan", ""),
    new Word("nuisance", "smetnja", ""),
    new Word("dubious", "sumnjiv", ""),
    new Word("wacky", "otkačen", ""),
    new Word("secluded", "povučeno (mesto)", ""),
    new Word("reconnaissance", "izviđanje", ""),
    new Word("reconnaissance", "izviđanje", ""),
    new Word("suspense", "neizvesnost", ""),
    new Word("yokel", "seljačina", ""),
    new Word("grease", "mast", ""),
    new Word("benevolent", "dobroćudan", ""),
    new Word("mood", "ćud", ""),
    new Word("pilgrim", "hodočasnik", ""),
    new Word("kindling", "potpala", ""),
    new Word("contemplating", "misliti, promisliti", ""),
    new Word("relentless", "nemilosrdni", ""),
    new Word("impose", "metnuti", ""),
    new Word("depravity", "izopačenost", ""),
    new Word("perpetual", "večito", ""),
    new Word("impudence", "bezobrazluk", ""),
    new Word("vile", "odvratan", ""),
    new Word("futile", "uzaludan", ""),
    new Word("offspring", "potomak", ""),
    new Word("grudge", "zlovolja, inat prema nekome", ""),
    new Word("snare", "zamka", ""),
    new Word("threshold", "prag", ""),
    new Word("convey", "preneti", ""),
    new Word("cherish", "negovati", ""),
    new Word("perish", "propasti", ""),
    new Word("joist", "greda", ""),
    new Word("errand", "posao, zadatak, narudžbina", ""),
    new Word("courteous", "ljubazan, učtiv", ""),
    new Word("plough", "orati", ""),
    new Word("nuance", "suptilne promene", ""),
    new Word("jeopardy", "rizik, opasnost", ""),
    new Word("curated", "pažljivo odabrano", ""),
    new Word("soothe", "smiriti", ""),
    new Word("flatlined", "spljošten", ""),
    new Word("buckle up", "zakopčati se", ""),
    new Word("fasten the belt", "vezati pojas", ""),
    new Word("commodity", "roba", ""),
    new Word("slab", "ploča", ""),
    new Word("sacrilege", "svetogrđe", ""),
    new Word("ample", "obilno", ""),
    new Word("thrilled", "uzbuđen", ""),
    new Word("rendezvous", "sastanak (randevu)", ""),
    new Word("preem", "savršeno", ""),
    new Word("flattery", "laskanje", ""),
    new Word("suite", "apartman", ""),
    new Word("tarnish", "ocrniti", ""),
    new Word("barf", "povraćati", ""),
    new Word("uncharted", "nemapirano, neistraženo", ""),
    new Word("tingling", "peckanje", ""),
    new Word("haze you", "izigrati i poniziti", ""),
    new Word("ought", "trebalo bi", ""),
    new Word("subsequent", "sledeći", ""),
    new Word("enigma", "zagonetka", ""),
    new Word("slyness", "lukavstvo", ""),
    new Word("feasible", "izvodljivo", ""),
    new Word("precinct", "policijska stanica, okrug", ""),
    new Word("detest", "mrzeti", ""),
    new Word("specimen", "uzorak", ""),
    new Word("alleviate", "ublažiti", ""),
    new Word("undermine", "potkopati", ""),
    new Word("diminish", "smanjiti", ""),
    new Word("scapegoat", "žrtveno jagnje", ""),
    new Word("peculiar", "jedinstven", ""),
    new Word("scour", "ribati, očistiti", ""),
    new Word("juvenile", "maloletnik", ""),
    new Word("wind down", "opustiti se", ""),
    new Word("sway", "ljuljati se", ""),
    new Word("frothing", "penušanje", ""),
    new Word("gawking", "blenuti", ""),
    new Word("pavement", "trotoar", ""),
    new Word("fluttering", "lepršajući", ""),
    new Word("tritest", "banalan", ""),
    new Word("unobtrusive", "povučen", ""),
    new Word("heaps", "gomile", ""),
    new Word("vulture", "lešinar", ""),
    new Word("unfettered", "oslobođen okova", ""),
    new Word("resemble", "ličiti na", ""),
    new Word("divulge", "otkriti", ""),
    new Word("merit", "zasluga", ""),
    new Word("abyss", "ambis, bezdan", ""),
    new Word("memento", "uspomena", ""),
    new Word("niche", "pozicija koja odgovara nekome", ""),
    new Word("bum a cig", "pitati za cigaru", ""),
    new Word("reminiscing", "prisećati se", ""),
    new Word("utter", "izgovoriti, izjaviti, potpuno", ""),
    new Word("renowned", "čuven", ""),
    new Word("miniscule", "vrlo malo", ""),
    new Word("daffodil", "narcis", ""),
    new Word("weasel", "lasica, licemer", ""),
    new Word("remorse", "kajanje, griza savesti", ""),
    new Word("lunge", "baciti se, napad mačem", ""),
    new Word("lenient", "popustljiv", ""),
    new Word("riddance", "oslobađanje", ""),
    new Word("mock", "rugati se", ""),
    new Word("surmise", "pretpostaviti", ""),
    new Word("grin", "osmeh", ""),
    new Word("ignorance", "neznanje", ""),
    new Word("delightful", "divan", ""),
    new Word("freight", "teretni", ""),
    new Word("consolidate", "učvrstiti, utvrditi", ""),
    new Word("inept", "nesposoban", ""),
    new Word("bust", "neuspeh", ""),
    new Word("fond", "drag, sklon", ""),
    new Word("bozo", "glup čovek", ""),
    new Word("shackle", "okovati", ""),
    new Word("wreak", "sejati", ""),
    new Word("reverence", "poštovanje", ""),
    new Word("persuade", "nagovoriti", ""),
    new Word("havoc", "haos, pustoš", ""),
    new Word("saturation", "zasićenje", ""),
    new Word("corny", "banalno", ""),
    new Word("omen", "znak", ""),
    new Word("ominous", "zlokobno", ""),
    new Word("ribbon", "traka", ""),
    new Word("curb", "obuzdati", ""),
    new Word("slump", "srozati", ""),
    new Word("hangover", "mamurluk", ""),
    new Word("candor", "iskrenost", ""),
    new Word("groin", "prepone", ""),
    new Word("framed", "optužen", ""),
    new Word("reap", "pokositi", ""),
    new Word("apprehension", "privođenje", ""),
    new Word("hermit", "pustinjak", ""),
    new Word("vacant", "prazan", ""),
    new Word("surreal", "nadrealno", ""),
    new Word("solemn", "svečani", ""),
    new Word("prominent", "istaknut", ""),
    new Word("thumping", "lupanje", ""),
    new Word("convenience", "udobnost", ""),
    new Word("inconvenience", "neprijatnost, neugodnost", ""),
    new Word("loquacious", "pričljiv", ""),
    new Word("stumble", "zapeti", ""),
    new Word("crumple", "zgužvati", ""),
    new Word("sitch", "situacija", ""),
    new Word("interrogation", "ispitivanje", ""),
    new Word("distress", "nevolja", ""),
    new Word("derelict", "napušteno", ""),
    new Word("piston", "klip", ""),
    new Word("nab", "ukrasti", ""),
    new Word("fiddle", "pozabaviti se", ""),
    new Word("wane", "oslabiti", ""),
    new Word("gusty", "nagli", ""),
    new Word("fray", "sukob", ""),
    new Word("serenade", "zabaviti nekoga", ""),
    new Word("solely", "jedino, iskljucivo", ""),
    new Word("leverage", "poluga, moc", ""),
    new Word("cesspool", "septicka jama", ""),
    new Word("shindig", "proslava", ""),
    new Word("treacherous", "izdajnicki, opasan", ""),
    new Word("frank", "iskren", ""),
    new Word("lead", "olovo", ""),
    new Word("plethora", "obilje", ""),
    new Word("prickly", "bodljikav", ""),
    new Word("feign", "pretvarati", ""),
    new Word("latitude", "(geografska) sirina", ""),
    new Word("offspring", "potomstvo", ""),
    new Word("shrug", "slegnuti ramenima", ""),
    new Word("grudge", "zlopamcenje", ""),
    new Word("lament", "zaliti", ""),
    new Word("kin", "rodbina", ""),
    new Word("venture", "poduhvat", ""),
    new Word("snare", "zamka", ""),
    new Word("quarreled", "svadjati se", ""),
    new Word("strife", "sukob", ""),
    new Word("pitcher", "bokal", ""),
    new Word("cider", "jabukovaca", ""),
    new Word("pelvis", "karlica", ""),
    new Word("conceal", "sakriti", ""),
    new Word("stench", "smrad", ""),
    new Word("soaking", "natopljen", ""),
    new Word("threshold", "prag", ""),
    new Word("stiff", "krut", ""),
    new Word("tow", "vuci", ""),
    new Word("lassies", "devojke", ""),
    new Word("burrow", "rupa", ""),
    new Word("marrow", "mozdina", ""),
    new Word("vile", "podao", ""),
    new Word("platitudes", "fraze", ""),
    new Word("dwell", "stanovati", ""),
    new Word("splendid", "velicanstven", ""),
    new Word("stowed", "uskladisten", ""),
    new Word("pale", "bled", ""),
    new Word("visage", "lice", ""),
    new Word("scourges", "bic", ""),
    new Word("abduct", "oteti", ""),
    new Word("rut", "kolotrazi", ""),
    new Word("ploughing", "oranje", ""),
    new Word("astray", "zalutao", ""),
    new Word("errant", "lutajuci", ""),
    new Word("jest", "sala", ""),
    new Word("dumplings", "knedle", ""),
    new Word("bolster", "podupreti", ""),
    new Word("moth", "moljac", ""),
    new Word("reticent", "cutljiv", ""),
    new Word("consumptive", "tuberkulozan", ""),
    new Word("abashed", "posramljen", ""),
    new Word("demise", "smrt", ""),
    new Word("mould", "budj", ""),
    new Word("tender", "nezan", ""),
    new Word("scent", "miris", ""),
    new Word("entwisted", "upleten", ""),
    new Word("glistening", "svetlucav", ""),
    new Word("meticulous", "pedantan", ""),
    new Word("celibacy", "celibat, neženstvo", ""),
    new Word("cordially", "srdacno", ""),
    new Word("scribe", "pisar", ""),
    new Word("inconvenience", "neugodnost", ""),
    new Word("poultry", "živina", ""),
    new Word("preclude", "spreciti", ""),
    new Word("augmented", "povecan", ""),
    new Word("clung", "priljubio se", ""),
    new Word("incantations", "završne čarolije", ""),
    new Word("splinters", "trunje", ""),
    new Word("bowel", "crevo", ""),
    new Word("mince", "sitno seckati", ""),
    new Word("nooks", "kutci", ""),
    new Word("valiant", "hrabar", ""),
    new Word("putrid", "gnjio", ""),
    new Word("impetuous", "nagl", ""),
    new Word("woven", "tkan", ""),
];

words = removeDuplicates(words);
Word.availableWords = Array.from(words);