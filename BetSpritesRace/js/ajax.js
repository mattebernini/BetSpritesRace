
function SalvataggioDati()
{
    var salva_questi = {
        monete_saved: gioco.monete,
        tempo_gioco_saved: gioco.tempo_gioco
    }

    $.ajax({
        type: 'POST',
        url: '../php/dati_salvati.php',
        data: {
            monete_saved: gioco.monete,
            tempo_gioco_saved: gioco.tempo_gioco
        },
        dataType: 'json'
    })
    .done( function( data ) {
    console.log('done');
    console.log(data);
    })
    .fail( function( data ) {
        console.log('fail');
        console.log(data);
    });

    console.log(salva_questi);
    gioco.tempo_gioco = 0;  // lo azzero perchè questa variabile tiene il tempo tra un save ed un'altro
}

function aggiorna_stats()
{
    var rank_ricchezza_txt = document.getElementById("rank_ricchezza");
    var ricchezza_globale_txt = document.getElementById("ricchezza_globale");
    var tempoGioco_txt = document.getElementById("tempoGioco");
    var rank_tempo_txt = document.getElementById("rank_tempo");

    $.getJSON("../php/stats_profilo.php", function(stats){

        console.log(stats);

        rank_ricchezza_txt.innerText = "Ranking Ricchezza: "+stats.rank_ricchezza+"°";
        ricchezza_globale_txt.innerText = "Possiedi il "+stats.ricchezza_globale+"% della ricchezza globale";
        tempoGioco_txt.innerText = "Tempo di gioco totale: "+stats.tempo_tot+" minuti";
        rank_tempo_txt.innerText = "Sei il "+stats.rank_tempo+"° giocatore più assiduo";
    });
}

function esito_corsa(vincitore, secondo, terzo)
{
    $.ajax({
        type: 'POST',
        url: '../php/esito_corsa.php',
        data: {
            primoPosto: vincitore,
            secondoPosto: secondo,
            terzoPosto: terzo
        },
        dataType: 'json'
    })
    .done( function( data ) {
    console.log('done');
    console.log(data);
    })
    .fail( function( data ) {
        console.log('fail');
        console.log(data);
    });
}

function classifica_utenti()
{
    $.ajax({
        url: '../php/classifica_utenti.php',
    })
    .done( function( data ) {
    /*console.log('done');
    console.log(data);*/
    //data = string(data);
    data = data.replace("[", " ");
    data = data.replace("]", " ");
    data = data.replace('"', "");
    data = data.replace('"', "");
    data = data.split(",");
    //console.log(data[0]);

    var article = document.getElementById("Classifica");

    var titolo_elem = document.createElement("H2");
    var table_elem = document.createElement("TABLE");
    var posiz_elem = document.createElement("TH");
    var giocatore_elem = document.createElement("TH");
    var monete_elem = document.createElement("TH");
    var tempo_elem = document.createElement("TH");
    titolo_elem.appendChild(document.createTextNode("Classifica Utenti"));
    posiz_elem.appendChild(document.createTextNode("."));
    giocatore_elem.appendChild(document.createTextNode("Giocatore"));
    monete_elem.appendChild(document.createTextNode("monete"));
    tempo_elem.appendChild(document.createTextNode("tempo di gioco"));

    article.appendChild(titolo_elem);
    article.appendChild(table_elem);
    article.firstChild.nodeName = "table_classifica";
    var tabella = article.childNodes[2];
    tabella.appendChild(document.createElement("TR"));
    tabella.firstChild.appendChild(posiz_elem);
    tabella.firstChild.appendChild(giocatore_elem);
    tabella.firstChild.appendChild(monete_elem);
    tabella.firstChild.appendChild(tempo_elem);

    for (var i = 0, p = 1; i < data.length; i += 3, ++p) {
        var riga = document.createElement("TR");
        var pos = document.createElement("TD");
        var un = document.createElement("TD");
        var m = document.createElement("TD");
        var tg = document.createElement("TD");
        pos.appendChild(document.createTextNode(p));
        un.appendChild(document.createTextNode(data[i].replace('"', "").replace('"', "")));
        m.appendChild(document.createTextNode(data[i+1].replace('"', "").replace('"', "")));
        tg.appendChild(document.createTextNode(data[i+2].replace('"', "").replace('"', "")));

        riga.appendChild(pos);
        riga.appendChild(un);
        riga.appendChild(m);
        riga.appendChild(tg);

        tabella.appendChild(riga);
    }
    })
    .fail( function( data ) {
        console.log('fail');
        console.log(data);
    });
}

function classifica_corridori()
{
    var url_buono = (gioco.logged)? '../php/classifica_corridori.php' : './php/classifica_corridori.php';
    $.ajax({
        url: url_buono,
    })
    .done( function( data ) {
    console.log('done');
    console.log(data);
    data = data.replace("[", " ");
    data = data.replace("]", " ");
    data = data.replace('"', "");
    data = data.replace('"', "");
    data = data.split(",");

    var article = document.getElementById("Corridori");

    var titolo_elem = document.createElement("H2");
    var table_elem = document.createElement("TABLE");

    var posiz_elem = document.createElement("TH");
    var corridore_elem = document.createElement("TH");
    var punteggio_elem = document.createElement("TH");
    titolo_elem.appendChild(document.createTextNode("Classifica Corridori"));
    posiz_elem.appendChild(document.createTextNode("."));
    corridore_elem.appendChild(document.createTextNode("Corridore"));
    punteggio_elem.appendChild(document.createTextNode("Punteggio"));

    article.appendChild(titolo_elem);
    article.appendChild(table_elem);
    article.firstChild.nodeName = "table_classifica_corridori";
    var tabella = article.childNodes[2];
    tabella.appendChild(document.createElement("TR"));
    tabella.firstChild.appendChild(posiz_elem);
    tabella.firstChild.appendChild(corridore_elem);
    tabella.firstChild.appendChild(punteggio_elem);

    for (var i = 0, p = 1; i < data.length; i+=2, p++) {
        var riga = document.createElement("TR");
        var pos = document.createElement("TD");
        var corridore_td = document.createElement("TD");
        var punteggio_td = document.createElement("TD");
        pos.appendChild(document.createTextNode(p));
        corridore_td.appendChild(document.createTextNode(data[i].replace('"', "").replace('"', "")));
        punteggio_td.appendChild(document.createTextNode(data[i+1].replace('"', "").replace('"', "")));

        riga.appendChild(pos);
        riga.appendChild(corridore_td);
        riga.appendChild(punteggio_td);

        tabella.appendChild(riga);
    }

    })
    .fail( function( data ) {
        console.log('fail');
        console.log(data);
    });
}
