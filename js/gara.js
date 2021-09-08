function Gara()     // funzione che gestisce la gara
{
    gioco.START_premuto = true;
    clearInterval(gioco.intro);

    for (var i = 0; i < gioco.corridori.length; i++) {
        if(gioco.corridori[i].arrived == true)
        {
            if(gioco.posizionamenti[i] == 0){
                ++gioco.posizione;
                gioco.posizionamenti[i] = gioco.posizione;
                // context .fillText ( text, x, y, maxWidth );
                if(gioco.posizione <= 3)
                {
                    switch (gioco.posizione) {
                        case 1:
                            gioco.primo = gioco.corridori[i].name;
                            break;
                        case 2:
                            gioco.secondo = gioco.corridori[i].name;
                            break;
                        case 3:
                            gioco.terzo = gioco.corridori[i].name;
                            break;
                    }
                    gioco.ctx.font = "20px Georgia";
                    gioco.ctx.fillText(gioco.posizione, gioco.corridori[i].x - 30, gioco.corridori[i].y + 25);
                    gioco.ctx.fillText(gioco.corridori[i].name, gioco.corridori[i].x - 200, gioco.corridori[i].y + 25);
                }
            }
        }
        else
            if(gioco.garaFinita==false)
                gioco.corridori[i].update();
    }


    var arrivati = 0;
    for (var i = 0; i < gioco.corridori.length; i++)
    {
        if(gioco.corridori[i].arrived == true)
            ++arrivati;
    }
    if(arrivati == 6)
    {
        if(gioco.garaFinita==false)
            {
                risquoti();
                if(gioco.logged == true)
                    esito_corsa(gioco.primo, gioco.secondo, gioco.terzo);
            }
        gioco.garaFinita = true;
        return;
    }
}
