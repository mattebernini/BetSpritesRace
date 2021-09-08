<?php
    include 'db_info.php';
    session_start();

    $classifica = array();

    $query = "SELECT nome, punteggio FROM corridore ORDER BY punteggio DESC";
	$result = $con->query($query);

    $i = 0;

    while($row = $result->fetch_array())
    {
        $utente = array();
        $classifica[$i] = $row['nome'];
        $i++;
        $classifica[$i] = round($row['punteggio']);
        $i++;
    }

    // '{}'

    print json_encode($classifica);
 ?>
