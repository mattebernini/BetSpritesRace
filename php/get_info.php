<?php
    include 'db_info.php';
    session_start();

    $info = array();
    $info['username'] = $_SESSION['name'];
    $username = $info['username'];

    $query = "SELECT monete FROM utente WHERE username = '{$username}'";
	$result = $con->query($query);

    while($row = $result->fetch_array())
    {
        $info['monete'] = $row['monete'];
    }


    // '{}'

    print json_encode($info);
 ?>
