<?php
    session_start();
    include 'db_info.php';

    // se l'utente non è loggato torna alla pagina accedi
    if (!isset($_SESSION['loggedin'])) {    // variabile definita in autenticate.php
    	header('Location: accedi.html');
    	exit;
    }
?>


<!DOCTYPE html>
<html lang="it" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>BetSpritesRace</title>
        <link rel="icon" href="../img/logo.ico" />
        <link rel="stylesheet" href="../css/index.css">
        <link rel="stylesheet" href="../css/popup.css">
        <link rel="stylesheet" href="../css/gioco.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    </head>
    <body onload="avvio()">
        <h1>BetSpritesRace</h1>
        <header>
            <ul>
                <li><a href="#MioProfilo">Mio Profilo</a></li>
                <li><a href="#Corridori">Corridori</a></li>
                <li><a href="#Classifica">Classifica</a></li>
            </ul>
            <?php echo '<p id="benvenuto">Benvenuto '.$_SESSION['name'].'!!</p>' ?>
            <a id="accedi" href="logout.php">LOGOUT</a>
        </header>

        <canvas id="canvas" width="1000" height="500"></canvas>

        <div class="comandi">
            <button type="button" id="START" onclick="IniziaGara()">START</button> <br>
            <button type="button" id="BET" onclick="apri_popup_scommesse()">BET</button>
            <p id="monete">0000</p>
            <button type="button" id="AGAIN" onclick="refresh()">AGAIN</button>
            <button type="button" id="SAVE" onclick="SalvataggioDati()">SAVE</button>
        </div>

        <div id="popup-scommesse">
            <button id="close-button" onclick="chiudi_popup_scommesse()">&times;</button>
            <table>
                <tr>
                    <th colspan="2">Vincitori</th>
                    <th colspan="2">Accoppiate</th>
                </tr>
                <tr>
                    <td id="quota1"></td>
                    <td> <input type="number" min="1" max="999" id="bet1"> </td>
                </tr>
                <tr>
                    <td id="quota2"></td>
                    <td> <input type="number" min="1" max="999" id="bet2"> </td>
                </tr>
                <tr>
                    <td id="quota3"></td>
                    <td> <input type="number" min="1" max="999" id="bet3"> </td>
                    <td id="quota3_a"></td>
                    <td> <input type="number" min="1" max="999" id="bet3_a"> </td>
                </tr>
                <tr>
                    <td id="quota4"></td>
                    <td> <input type="number" min="1" max="999" id="bet4"> </td>
                    <td id="quota4_a"></td>
                    <td> <input type="number" min="1" max="999" id="bet4_a"> </td>
                </tr>
                <tr>
                    <td id="quota5"></td>
                    <td> <input type="number" min="1" max="999" id="bet5"> </td>
                    <td id="quota5_a"></td>
                    <td> <input type="number" min="1" max="999" id="bet5_a"> </td>
                </tr>
                <tr>
                    <td id="quota6"></td>
                    <td> <input type="number" min="1" max="999" id="bet6"> </td>
                    <td id="quota6_a"></td>
                    <td> <input type="number" min="1" max="999" id="bet6_a"> </td>
                </tr>
            </table>
            <button type="button" id="okBet" onclick="salvaScommesse()">DONE!</button>
            <p id="md">Monete disponibili:</p> <p id="monetePopup"></p>
        </div>
        <div id="overlay"></div>

        <div class="info">
            <article id="MioProfilo">
                <h2>Il tuo profilo</h2>
                    <div id="rank_ricchezza"></div>
                    <div id="ricchezza_globale"></div>
                    <div id="tempoGioco"></div>
                    <div id="rank_tempo"></div>
            </article>

            <article id="Corridori">
            </article>

            <article id="Classifica">
            </article>


        </div>

        <script src="../js/funzioni_utilita.js"></script>
        <script src="../js/corridore.js"></script>
        <script src="../js/gioco.js"></script>
        <script src="../js/get_info.js"></script>
        <script src="../js/get_quote.js"></script>
        <script src="../js/economia_loggato.js"></script>
        <script src="../js/economia.js"></script>
        <script src="../js/gara.js"></script>
        <script src="../js/ajax.js"></script>
        <script src="../js/main.js"></script>
    </body>
</html>
