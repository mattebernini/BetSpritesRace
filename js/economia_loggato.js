function azzera_scommesse_logged()
{
    gioco.scommesseW = [0, 0, 0, 0, 0, 0];
    gioco.scommesseA = [0, 0, 0, 0];
    gioco.vincita = 0;
    generate_quote();   // solo vincitore, accoppiate casuali
    for (var i = 0; i < 6; i++) {
        document.getElementById("quota" + (i+1)).innerText = gioco.corridori[i].name + ": " + gioco.quoteW[i];
        if(i > 1)
        {
            gioco.quoteA[i] = Math.round((Math.random()*13 + 1)*100)/100;
            document.getElementById("quota" + (i+1) + "_a").innerText = gioco.corridori[i].name + "-" + gioco.corridori[i-2].name + ": " + gioco.quoteA[i];
        }
    }
}
