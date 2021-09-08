
function generate_quote()
{
    // invio l'ordine dei corridori
    $.ajax({
        type: 'POST',
        url: '../php/calcolo_quote.php',
        data: {
            ordine: gioco.corridori[0].name + "," +
                    gioco.corridori[1].name + "," +
                    gioco.corridori[2].name + "," +
                    gioco.corridori[3].name + "," +
                    gioco.corridori[4].name + "," +
                    gioco.corridori[5].name
        },
        dataType: 'json'
    })
    .done( function( data ) {
    console.log('done');
    console.log(data);
    for (var i = 0; i < data.length; i++) {
        gioco.quoteW[i] =  Math.round(data[i]*100)/100;
        document.getElementById("quota" + (i+1)).innerText = gioco.corridori[i].name + ": " + gioco.quoteW[i];
    }
    })
    .fail( function( data ) {
        console.log('fail');
        console.log(data);
    });
}
