<?php
    session_start();
    session_destroy();  // logout
    // Redirect to the login page:
    header('Location: ../html/accedi.html');
?>
