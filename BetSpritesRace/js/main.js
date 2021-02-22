
function avvio()            // onload
{
    if(gioco.logged == true)
        {
            get_user_info();
            aggiorna_stats();
            classifica_utenti();
        }
    else {
        gioco.monete = 1;
        document.getElementById("monete").innerText = Math.round(gioco.monete*100)/100;
        document.getElementById("monetePopup").innerText = Math.round(gioco.monete*100)/100;
    }
    classifica_corridori();
    refresh();
    setInterval(updateMonete, 6000);  //60000 incrementa le monete
    setInterval(function(){gioco.tempo_gioco++}, 60000);    // un minuto
    if(gioco.logged == true)
        setInterval(aggiorna_stats, 60000);
}


// funzioni chiamate dall'utente

function refresh()       // onclick AGAIN
{
    if(gioco.logged == true && gioco.load == false)
        {
            gioco.logged++;
            SalvataggioDati();
        }
    gioco.load = false;
    gioco.START_premuto = false;
    gioco.DONEpremuto = false;
    gioco.garaFinita = true;
    gioco.ctx.clearRect(0,0,canvas.width, canvas.height);
    clearInterval(gioco.partiti);

    // azzera corsa
    gioco.posizione = 0;
    gioco.posizionamenti = [0, 0, 0, 0, 0, 0];
    gioco.primo = "";
    gioco.secondo = "";
    gioco.terzo = "";
    shuffle(gioco.immagini);

    for (var i = 0; i < gioco.immagini.length; i++) {
        var arr = speedArrGenerator();
        gioco.corridori[i] = new Corridore(83*i + 20, arr, gioco.immagini[i]);
    }

    if(gioco.logged == true)
    {
        azzera_scommesse_logged();
    }
    else
        azzera_scommesse();

};


function IniziaGara()    // onclick START
{

    if(gioco.START_premuto == false)
    {
        gioco.ctx.clearRect(0,0,canvas.width, canvas.height);
        gioco.garaFinita = false;
        gioco.partiti = setInterval(Gara, 100);
    }
}


// gestione popup scommesse
function apri_popup_scommesse()     // BET --> onclick
{
    if(gioco.garaFinita == true && gioco.DONEpremuto == false)
    {
        document.getElementById("popup-scommesse").classList.add("active");
        document.getElementById("overlay").classList.add("active");
    }
}
function chiudi_popup_scommesse()   // close-button --> onclick
{
    document.getElementById("popup-scommesse").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
}
