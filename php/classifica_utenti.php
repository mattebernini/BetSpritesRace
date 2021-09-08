<?php
    include 'db_info.php';
    session_start();

    $classifica = array();

    $query = "SELECT username, monete, tempoGioco FROM utente ORDER BY monete DESC";
	$result = $con->query($query);

    $i = 0;

    while($row = $result->fetch_array())
    {
        $utente = array();
        $classifica[$i] = $row['username'];
        $i++;
        $classifica[$i] = round($row['monete']);
        $i++;
        $classifica[$i] = $row['tempoGioco'];
        $i++;
    }

    // '{}'

    print json_encode($classifica);
 ?>
