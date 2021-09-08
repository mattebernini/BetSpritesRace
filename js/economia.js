
function azzera_scommesse()
{
    gioco.scommesseW = [0, 0, 0, 0, 0, 0];
    gioco.scommesseA = [0, 0, 0, 0];
    gioco.vincita = 0;
    for (var i = 0; i < 6; i++) {
        document.getElementById("bet"+(i+1)).value = "";
        if(i > 1)
            document.getElementById("bet"+(i+1) + "_a").value = "";
        // assegno le quote casuali
        gioco.quoteW[i] = Math.round((Math.random()*3 + 1)*100)/100;
        document.getElementById("quota" + (i+1)).innerText = gioco.corridori[i].name + ": " + gioco.quoteW[i];
        if(i > 1)
        {
            gioco.quoteA[i] = Math.round((Math.random()*13 + 1)*100)/100;
            document.getElementById("quota" + (i+1) + "_a").innerText = gioco.corridori[i].name + "-" + gioco.corridori[i-2].name + ": " + gioco.quoteA[i];
        }
    }
};

function risquoti()
{
    for (var i = 0; i < gioco.posizionamenti.length; i++) {
      if(gioco.posizionamenti[i] == 1 & gioco.scommesseW[i] > 0)
      {
            gioco.vincita = gioco.scommesseW[i]*gioco.quoteW[i];
            gioco.monete += gioco.vincita;

            if(gioco.vincita > 0)
                {
                    window.alert("hai vinto\n" + gioco.vincita + " monete!!");
                    console.log("hai vinto\n" + gioco.vincita + " monete!!");
                }
            gioco.vincita = 0;
            if(i > 1)
            {
                if(gioco.posizionamenti[i-2] == 2)
                {
                    gioco.vincita = gioco.scommesseA[i-2]*gioco.quoteA[i];
                    gioco.monete += gioco.vincita;
                    console.log( gioco.scommesseA[i-2] + '*' + gioco.quoteA[i]);
                }
            }
            if(gioco.vincita > 0)
            {
                window.alert("hai vinto\n" + gioco.vincita + " monete!!");
                console.log("hai vinto\n" + gioco.vincita + " monete!!");
            }

            document.getElementById("monete").innerText = Math.round(gioco.monete*100)/100;
            document.getElementById("monetePopup").innerText = Math.round(gioco.monete*100)/100;
      }
    }
}

function updateMonete()
{
    ++gioco.monete;
    if(gioco.monete < 10)
        ++gioco.monete;
    document.getElementById("monete").innerText = Math.round(gioco.monete*100)/100;
    document.getElementById("monetePopup").innerText = Math.round(gioco.monete*100)/100;
    // metto il valore delle monete come tetto massimo di scommessa
    for (var i = 0; i < 6; i++) {
        document.getElementById("bet" + (i+1)).max = gioco.monete;
        if(i > 1)
            document.getElementById("bet" + (i+1) + "_a").max = gioco.monete;
    }
};


function salvaScommesse()      // okBet --> onclick
{
    gioco.DONEpremuto = true;
    var totScommesse = 0;
    var sA = 0;
    for (var i = 0; i < 6; i++) {
        if(i > 1)   // prendo le scommesse dell'accoppiata
        {
            sA = document.getElementById("bet"+(i+1) + "_a").value;
            gioco.scommesseA[i-2] = Number(sA);
            totScommesse += gioco.scommesseA[i-2];
        }
        var s = document.getElementById("bet"+(i+1)).value; // scommesse vincitore
        gioco.scommesseW[i] = Number(s);
        totScommesse += gioco.scommesseW[i];
    }
    if(totScommesse > gioco.monete)
        window.alert("Scommessa non valida...\nNon sei così ricco!!");
    else
    {
        gioco.monete -= Number(totScommesse);
        document.getElementById("monete").innerText = "";
        document.getElementById("monete").innerText = gioco.monete;
        chiudi_popup_scommesse();
    }
    if(gioco.logged == true)
        SalvataggioDati();
}
