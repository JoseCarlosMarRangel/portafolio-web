

<?php

    var_dump($_GET);

    if (isset($_GET['altura']) && isset($_GET['peso'])) {
        $altura = $_GET['altura'];
        $peso = $_GET['peso'];
    }

    $imc = round($peso / ($altura * $altura));

    if ($imc < 20)
    {
        echo "<label> Peso bajo, </label>" . "<label>Tu imc es: </label>" . $imc;
    }
    if ($imc >= 20 || $imc <= 25 && $imc >= 20) {
        echo " <label>Peso normal, </label>" . "<label>Tu imc es: </label>" . $imc;
    }
    if ($imc > 25 || $imc <= 30 && $imc > 25) {
        echo "<label>Exceso de peso, </label>" . "<label>Tu imc es: </label>" . $imc;
    }
    if ($imc > 30) {
        echo "<label>Obesidad, </label>" . "<label>Tu imc es: </label>" . $imc;
    }

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora de IMC en PHP</title>
</head>
<body>

    <form action="" method="ghet">
        <label for="Altura">Altura</label>
        <input type="text" name="altura" id="altura" required>
        <br>
        <label for="Peso">Peso</label>
        <input type="text" name="peso" id="peso" required>
        <br>
        <input type="submit" value="Enviar" id="procesar">
    </form>
    
</body>
</html>