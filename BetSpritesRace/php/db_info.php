
<?php
        // connessione al db
		$con = new mysqli("localhost", "root", "", "betspritesrace");

		if (mysqli_connect_errno()) {
		    printf("Connect failed: %s\n", mysqli_connect_error());
		    exit();
		}


?>
