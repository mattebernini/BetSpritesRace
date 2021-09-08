<?php
    include 'db_info.php';
    session_start();

    $quote = array();
    $totpunti = 0;

    $pattern = "/[,]/";
    $corridori = preg_split($pattern, $_POST['ordine']);

    $query = "SELECT sum(punteggio) as somma FROM corridore";
	$result = $con->query($query);

    while($row = $result->fetch_array())
    {
        $totpunti = $row['somma'];
    }

    $rank = 0;
    for ($i=0; $i < 6; $i++) {
        ++$rank;
        $query = "SELECT punteggio FROM corridore WHERE nome = '{$corridori[$i]}' order by punteggio";
    	$result = $con->query($query);

        while($row = $result->fetch_array())
        {
            $punteggio = $row['punteggio'];
        }

        $quote[$i] = ($totpunti/($punteggio*2)) + ( ($rank <= 3)? rand(-1, 0) : rand(2, 5) );
    }

    print json_encode($quote);

?>
