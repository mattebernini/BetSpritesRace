<?php
    session_start();

    function ranking_ricchezza($username)
    {
        include 'db_info.php';

        $query =    "SELECT username
                     FROM utente
                     ORDER BY monete DESC";

        $result = $con->query($query);
        $conta = 1;

        while($row = $result->fetch_array())
        {
            if($row['username'] == $username)
            {
                return $conta;   // restituisco il rank associato all'utente
            }
            $conta++;
        }
    }


    function percentuale_ricchezza($username)
    {
        include 'db_info.php';

        $query = "SELECT monete FROM utente WHERE username = '{$username}'";
        $money = $con->query($query);

        while($row = $money->fetch_array())
        {
            $money = $row['monete'];
            break;
        }

        $query =    "SELECT sum(monete) as tot
                     FROM utente";

        $result = $con->query($query);

        while($row = $result->fetch_array())
        {
            return round(100*($money/$row['tot']));
        }
    }

    function tempo_gioco($username)
    {
        include 'db_info.php';

        $query =    "SELECT tempoGioco
                     FROM utente
                     WHERE username = '{$username}'";

        $result = $con->query($query);

        while($row = $result->fetch_array())
        {
            return $row['tempoGioco'];
        }
    }

    function ranking_tempo($username)
    {
        include 'db_info.php';

        $query =    "SELECT username
                     FROM utente
                     ORDER BY tempoGioco DESC";

        $result = $con->query($query);
        $conta = 1;

        while($row = $result->fetch_array())
        {
            if($row['username'] == $username)
            {
                return $conta;   // restituisco il rank associato all'utente
            }
            $conta++;
        }
    }

    $stats = array();

    $stats['rank_ricchezza'] = ranking_ricchezza($_SESSION['name']);
    $stats['ricchezza_globale'] = percentuale_ricchezza($_SESSION['name']);
    $stats['tempo_tot'] = tempo_gioco($_SESSION['name']);
    $stats['rank_tempo'] = ranking_tempo($_SESSION['name']);

    print json_encode($stats);
 ?>
