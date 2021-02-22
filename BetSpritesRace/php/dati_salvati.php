
<?php
    session_start();
    include 'db_info.php';
    
    $nomeUtente = $_SESSION['name'];
    $monete_saved = $_POST['monete_saved'];
    $tempo_gioco_saved = $_POST['tempo_gioco_saved'];

    $query = "UPDATE utente
            SET monete ='{$monete_saved}', tempoGioco = ('{$tempo_gioco_saved}' + tempoGioco)
            WHERE username = '{$nomeUtente}'";

    if ($result = $con->query($query)) {
      echo $tempo_gioco_saved."  ".$monete_saved ;
    } else {
      echo "Error: " . $sql . "<br>" . mysqli_error($con);
    }
?>
