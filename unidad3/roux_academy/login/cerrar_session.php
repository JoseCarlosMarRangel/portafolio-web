<?php 
    
    require 'abrir_session.php';
    $_SESSION = array();
    session_destroy();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>

        <h1>Session Cerrada, hasta la proxima</h1>
        <a href="login.php">acceder</a>

    </p>
</body>
</html>