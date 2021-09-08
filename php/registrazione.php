<?php   // non funge

    include 'db_info.php';

    if (isset($_POST['register'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];
        $ripeti_password = $_POST['ripeti-password'];
        $email_ck = $_POST['email'];
        if($email_ck === '')
            $email_ck = NULL;
        // controllo caratteri username
        $isUsernameValid = filter_var(
            $username,
            FILTER_VALIDATE_REGEXP, [
                "options" => [
                    "regexp" => "/^[a-z\d_]{3,20}$/i"
                ]
            ]
        );
        $pwdLenght = mb_strlen($password);

        // serie di errori
        if (empty($username) || empty($password)) {
            $msg = 'Compila tutti i campi %s';
        } elseif (false === $isUsernameValid) {
            $msg = 'Lo username non è valido. Sono ammessi solamente caratteri
                    alfanumerici e l\'underscore. Lunghezza minina 3 caratteri.
                    Lunghezza massima 20 caratteri';
        }/* elseif ($pwdLenght < 8 || $pwdLenght > 20) {
            $msg = 'Lunghezza minima password 8 caratteri.
                    Lunghezza massima 20 caratteri';
        }*/ elseif ($password != $ripeti_password) {
            $msg = 'Forse non sei così sicuro della tua password...
                    Le due password devono essere uguali!!';
        }

        else {        // se tutto ok
            $password_hash = password_hash($password, PASSWORD_BCRYPT); // cripto la pw

            // controllo se username esiste già
            if ($stmt = $con->prepare('SELECT username FROM utente WHERE username = ?'))
            {
            	$stmt->bind_param('s', $_POST['username']);
            	$stmt->execute();
            	$stmt->store_result();
                if ($stmt->num_rows > 0)
                {
                    $msg = 'Username già in uso %s';
                }
                else // inserisco i dati
                {
                    $sql = 'INSERT INTO utente (username, password, email, monete)
                    VALUES ("'.$username.'", "'.$password_hash.'", "'.$email_ck.'", 10);';

                    $result = $con->query($sql);

                    if ($result) {
                      header('Location: ../html/accedi.html');
                    } else {
                      $msg = "Error: " . $sql . "<br>" . mysqli_error($con);
                    }
                }
            }
        }
        printf($msg, '<a href="../html/iscriviti.html">torna indietro</a>');
    }

 ?>
