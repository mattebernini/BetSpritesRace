
function Gioco()
{
    this.canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext("2d");

    this.tempo_gioco = 0;   // in minuti

    this.logged = false;

    this.corridori = new Array();
    for (var i = 0; i < this.corridori.length; i++) {
        this.corridori[i] = new Corridore();
    }

    this.immagini = [   "./img/Papera Spia.png",
                        "./img/Jonny.png",
                        "./img/Jack Uncino.png",
                        "./img/Villan Default.png",
                        "./img/Mago Ernesto.png",
                        "./img/Avatar Punk.png"  ];

    this.nomi = [   "Papera Spia",
                    "Jonny",
                    "Jack Uncino",
                    "Villan Default",
                    "Mago Ernesto",
                    "Avatar Punk"  ];
                    
    // gara                 gara.js
    this.posizione = 0;
    this.posizionamenti = [0,0,0,0,0,0];
    this.primo;
    this.secondo;
    this.terzo;

    // controllo
    this.partiti = false;
    this.garaFinita = true;
    this.START_premuto = false;
    this.DONEpremuto = false;
    this.intro;
    this.load = true;   //non sfa il salvataggio dati all'avvio


    // economia
    this.monete;
    document.getElementById("monete").innerText = 1;
    document.getElementById("monetePopup").innerText = 1;
    this.quoteW = new Array();
    this.scommesseW = [0,0,0,0,0,0];
    this.quoteA = new Array();
    this.scommesseA = [0,0,0,0];
    this.vincita = 0;

}

var gioco = new Gioco();
