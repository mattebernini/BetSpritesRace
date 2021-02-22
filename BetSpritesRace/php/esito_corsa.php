<?php
    session_start();
    include 'db_info.php';

    $primo = $_POST['primoPosto'];
    $secondo = $_POST['secondoPosto'];
    $terzo = $_POST['terzoPosto'];
// primo posto 3 punti, secondo 2, terzo 1

    $query = "UPDATE corridore
            SET vittorie = vittorie + 1, punteggio = punteggio + 3
            WHERE nome = '{$primo}'";

    if ($result = $con->query($query)) {
      echo $primo." primo";
    } else {
      echo "Error: " . $sql . "<br>" . mysqli_error($con);
    }

    $query = "UPDATE corridore
            SET 2posto = 2posto + 1, punteggio = punteggio + 2
            WHERE nome = '{$secondo}'";

    if ($result = $con->query($query)) {
      echo $primo." primo";
    } else {
      echo "Error: " . $sql . "<br>" . mysqli_error($con);
    }

    $query = "UPDATE corridore
            SET 3posto = 3posto + 1, punteggio = punteggio + 1
            WHERE nome = '{$terzo}'";

    if ($result = $con->query($query)) {
      echo $primo." primo";
    } else {
      echo "Error: " . $sql . "<br>" . mysqli_error($con);
    }

?>
