// ajax

gioco.logged = true;

function get_user_info()
{
    $.getJSON("../php/get_info.php", function(user_info){

        console.log(user_info);

        gioco.monete = user_info.monete;
        document.getElementById("monete").innerText = Math.round(gioco.monete*100)/100;

    });
}

gioco.immagini = [  "../img/Papera Spia.png",
                    "../img/Jonny.png",
                    "../img/Jack Uncino.png",
                    "../img/Villan Default.png",
                    "../img/Mago Ernesto.png",
                    "../img/Avatar Punk.png"  ];
