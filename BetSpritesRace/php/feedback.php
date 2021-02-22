<?php

    session_start();
    include 'db_info.php';

    $username = $_SESSION['name'];
    $testo = $_POST['feedback_text'];

    $query = "INSERT INTO feedback
            VALUES ('{$username}', '{$testo}')";

    $con->query($query);
    header('Location: gioco.php');


 ?>
