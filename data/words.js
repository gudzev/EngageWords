class Word
{
    static currentWordId = 0;

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
        let wordIndex = this.generateWord();
        let wrongWordIndex1;
        let wrongWordIndex2;
        let wrongWordIndex3;

        do
        {
            wrongWordIndex1 = this.generateWord();
            wrongWordIndex2 = this.generateWord();
            wrongWordIndex3 = this.generateWord();
        }
        while
            (wrongWordIndex1 === wordIndex ||
             wrongWordIndex2 === wordIndex ||
             wrongWordIndex3 === wordIndex ||
             wrongWordIndex1 === wrongWordIndex2 ||
             wrongWordIndex1 === wrongWordIndex3 ||
             wrongWordIndex2 === wrongWordIndex3
            )

        let indexArray = this.shuffle([wordIndex, wrongWordIndex1, wrongWordIndex2, wrongWordIndex3]);

        return `

            <div class="game">

                <h1 class="english-word">${words[wordIndex].englishWord}</h1>
    
                <a class="word-meaning red">${words[indexArray[0]].serbianMeaning}</a>
    
                <a class="word-meaning blue">${words[indexArray[1]].serbianMeaning}</a>
    
                <a class="word-meaning yellow">${words[indexArray[2]].serbianMeaning}</a>
    
                <a class="word-meaning green">${words[indexArray[3]].serbianMeaning}</a>
    
            </div>

            <div class="score">

                <div class="score-container">

                </div>

                <div class="score-container">

                </div>

            </div>
        `;
    }

    generateWord()
    {
        let wordsLength = words.length;
        let wordIndex = Math.floor(Math.random() * wordsLength);
        return wordIndex;
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

export const words = 
[
    new Word("contemporary", ["savremen"], ""),
    new Word("notion", ["ideja", "shvatanje"], ""),
    new Word("dread", ["strah"], ""),
    new Word("insular", ["izolovano"], ""),
    new Word("unhinged", ["poremećen"], ""),
    new Word("mundane", ["prizeman", "svakodnevni"], ""),
    new Word("insufferable", ["nepodnošljiv"], ""),
    new Word("vermin", ["štetočina"], ""),
    new Word("deputy", ["pomoćnik"], ""),
    new Word("venture", ["poduhvat"], ""),
    new Word("transpire", ["ispariti"], ""),
    new Word("fumble", ["petljati"], ""),
    new Word("alleged", ["navodno"], ""),
    new Word("sober", ["trezan"], ""),
    new Word("nuisance", ["smetnja"], ""),
    new Word("dubious", ["sumnjiv"], ""),
    new Word("wacky", ["otkačen"], ""),
    new Word("secluded", ["povučeno (mesto)"], ""),
    new Word("reconnaissance", ["izviđanje"], ""),
    new Word("suspense", ["neizvesnost"], ""),
    new Word("yokel", ["seljačina"], ""),
    new Word("grease", ["mast"], ""),
    new Word("benevolent", ["dobroćudan"], ""),
    new Word("mood", ["ćud"], ""),
    new Word("pilgrim", ["hodočasnik"], ""),
    new Word("kindling", ["potpala"], ""),
    new Word("contemplating", ["misliti", "promisliti"], ""),
    new Word("relentless", ["nemilosrdni"], ""),
    new Word("impose", ["metnuti"], ""),
    new Word("depravity", ["izopačenost"], ""),
    new Word("perpetual", ["većito"], ""),
    new Word("impudence", ["bezobrazluk"], ""),
    new Word("vile", ["odvratan"], ""),
    new Word("futile", ["uzaludan"], ""),
    new Word("offspring", ["potomak"], ""),
    new Word("grudge", ["zlovolja", "inat prema nekome"], ""),
    new Word("snare", ["zamka"], ""),
    new Word("threshold", ["prag"], ""),
    new Word("convey", ["preneti"], ""),
    new Word("cherish", ["negovati"], ""),
    new Word("perish", ["propasti"], ""),
    new Word("joist", ["greda"], ""),
    new Word("errand", ["posao", "zadatak", "narudžbina"], ""),
    new Word("courteous", ["ljubazan", "učtiv"], ""),
    new Word("plough", ["orati"], ""),
    new Word("nuance", ["suptilne promene"], ""),
    new Word("jeopardy", ["rizik", "opasnost"], ""),
    new Word("curated", ["pažljivo odabrano"], ""),
    new Word("soothe", ["smiriti"], ""),
    new Word("flatlined", ["spljošten"], ""),
    new Word("buckle up", ["zakopčati se"], ""),
    new Word("fasten the belt", ["vezati pojas"], ""),
    new Word("commodity", ["roba"], ""),
    new Word("slab", ["ploča"], ""),
    new Word("sacrilege", ["svetogrđe"], ""),
    new Word("ample", ["obilno"], ""),
    new Word("thrilled", ["uzbuđen"], ""),
    new Word("rendezvous", ["sastanak (randevu)"], ""),
    new Word("preem", ["savršeno"], ""),
    new Word("flattery", ["laskanje"], ""),
    new Word("suite", ["apartman"], ""),
    new Word("tarnish", ["ocrniti"], ""),
    new Word("barf", ["povraćati"], ""),
    new Word("uncharted", ["nemapirano", "neistraženo"], ""),
    new Word("tingling", ["peckanje"], ""),
    new Word("haze you", ["izigrati i poniziti"], ""),
    new Word("ought", ["trebalo bi"], ""),
    new Word("subsequent", ["sledeći"], ""),
    new Word("enigma", ["zagonetka"], ""),
    new Word("slyness", ["lukavstvo"], ""),
    new Word("feasible", ["izvodljivo"], ""),
    new Word("precinct", ["policijska stanica", "okrug"], ""),
    new Word("detest", ["mrzeti"], ""),
    new Word("specimen", ["uzorak"], ""),
    new Word("alleviate", ["ublažiti"], ""),
    new Word("undermine", ["potkopati"], ""),
    new Word("diminish", ["smanjiti"], ""),
    new Word("scapegoat", ["žrtveno jagnje"], ""),
    new Word("peculiar", ["jedinstven"], ""),
    new Word("scour", ["ribati", "očistiti"], ""),
    new Word("juvenile", ["maloletnik"], ""),
    new Word("wind down", ["opustiti se"], ""),
    new Word("sway", ["ljuljati se"], ""),
    new Word("frothing", ["penušanje"], ""),
    new Word("gawking", ["blenuti"], ""),
    new Word("pavement", ["trotoar"], ""),
    new Word("fluttering", ["lepršajući"], ""),
    new Word("tritest", ["banalan"], ""),
    new Word("unobtrusive", ["povučen"], ""),
    new Word("heaps", ["gomile"], ""),
    new Word("vulture", ["lešinar"], ""),
    new Word("unfettered", ["oslobođen okova"], ""),
    new Word("resemble", ["ličiti na"], ""),
    new Word("divulge", ["otkriti"], ""),
    new Word("merit", ["zasluga"], ""),
    new Word("abyss", ["ambis", "bezdan"], ""),
    new Word("memento", ["uspomena"], ""),
    new Word("niche", ["pozicija koja odgovara nekome"], ""),
    new Word("bum a cig", ["pitati za cigaru"], ""),
    new Word("reminiscing", ["prisećati se"], ""),
    new Word("utter", ["izgovoriti", "izjaviti", "potpuno"], ""),
    new Word("renowned", ["čuven"], ""),
    new Word("miniscule", ["vrlo malo"], ""),
    new Word("daffodil", ["narcis"], ""),
    new Word("weasel", ["lasica", "licemer"], ""),
    new Word("remorse", ["kajanje", "griza savesti"], ""),
    new Word("lunge", ["baciti se", "napad mačem"], ""),
    new Word("lenient", ["popustljiv"], ""),
    new Word("riddance", ["oslobađanje"], ""),
    new Word("mock", ["rugati se"], ""),
    new Word("surmise", ["pretpostaviti"], ""),
    new Word("grin", ["osmeh"], ""),
    new Word("ignorance", ["neznanje"], ""),
    new Word("delightful", ["divan"], ""),
    new Word("freight", ["teretni"], ""),
    new Word("consolidate", ["učvrstiti", "utvrditi"], ""),
    new Word("inept", ["nesposoban"], ""),
    new Word("bust", ["neuspeh"], ""),
    new Word("fond", ["drag", "sklon"], ""),
    new Word("bozo", ["glup čovek"], ""),
    new Word("shackle", ["okovati"], ""),
    new Word("wreak", ["sejati"], ""),
    new Word("reverence", ["poštovanje"], ""),
    new Word("persuade", ["nagovoriti"], ""),
    new Word("havoc", ["haos", "pustoš"], ""),
    new Word("saturation", ["zasićenje"], ""),
    new Word("corny", ["banalno"], ""),
    new Word("omen", ["znak"], ""),
    new Word("ominous", ["zlokobno"], ""),
    new Word("ribbon", ["traka"], ""),
    new Word("curb", ["obuzdati"], ""),
    new Word("slump", ["srozati"], ""),
    new Word("hangover", ["mamurluk"], ""),
    new Word("candor", ["iskrenost"], ""),
    new Word("groin", ["prepone"], ""),
    new Word("framed", ["optužen"], ""),
    new Word("reap", ["pokositi"], ""),
    new Word("apprehension", ["privođenje"], ""),
    new Word("hermit", ["pustinjak"], ""),
    new Word("vacant", ["prazan"], ""),
    new Word("surreal", ["nadrealno"], ""),
    new Word("solemn", ["svečani"], ""),
    new Word("prominent", ["istaknut"], "")
];
