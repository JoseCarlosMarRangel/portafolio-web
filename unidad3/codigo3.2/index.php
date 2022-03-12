<?php

var_dump($_GET);
var_dump($_POST);

if ( isset($_GET['repeticiones'])) {
    $repeticiones = $_GET['repeticiones'];
}



?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Funciones Get y post</title>
</head>
<body>
    <h1>Hola</h1>
    <!-- si el action esta vacio envia lo del get a la misma pagina-->
    <form action="" method="ghet">
        <label for="repeticiones">Repeticiones</label>
        <input type="number" name="repeticiones" id="repeticiones" required>
        <input type="submit" value="Enviar" id="procesar">
    </form>

    <?php
        for ($i=0; $i < $repeticiones; $i++) { 
            echo "<h2>Iteracion "  . ($i + 1) . " </h2>";
        }
    ?>
</body>
</html>