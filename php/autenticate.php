<?php
    session_start();
    include 'db_info.php';

    // controllo se l'utente ha inserito username e pw
    if ( !isset($_POST['username'], $_POST['password']) ) {
    	exit('Hai dimenticato di inserire la password o l\'username. Riprova...');
    }

    // Prepare our SQL, preparing the SQL statement will prevent SQL injection.
    if ($stmt = $con->prepare('SELECT password FROM utente WHERE username = ?')) {
    	// Bind parameters (s = string, i = int, b = blob, etc), in our case the username is a string so we use "s"
    	$stmt->bind_param('s', $_POST['username']);
    	$stmt->execute();
    	// Store the result so we can check if the account exists in the database.
    	$stmt->store_result();

        if ($stmt->num_rows > 0)    // esiste l'username?
        {
        	$stmt->bind_result($password);
        	$stmt->fetch();
        	// Account exists, now we verify the password.
        	// Note: remember to use password_hash in your registration file to store the hashed passwords.
            if (password_verify($_POST['password'], $password)) {  // verifica password
        		// Verification success! User has loggedin!
        		// Create sessions so we know the user is logged in, they basically act like cookies but remember the data on the server.
        		session_regenerate_id();
        		$_SESSION['loggedin'] = TRUE;
        		$_SESSION['name'] = $_POST['username'];
        		header('Location: gioco.php');    // apre la pagina del gioco da loggati
        	} else {
        		// Incorrect password
        		echo 'Password e/o Username errati...'.'<a href="../html/accedi.html">RIPROVACI</a>';
        	}
        } else {
        	// Incorrect username
        	echo 'Password e/o Username errati...'.'<a href="../html/accedi.html">RIPROVACI</a>';
        }



    	$stmt->close();
    }
?>
