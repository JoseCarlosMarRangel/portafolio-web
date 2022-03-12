<!--Para PHP necesitas un interprete-->

<?php 

    //comentarios en php una linea
    /* Comentarios multiples 
        Hola como estas
    */

    //variables

    $nombre = "Juan";//cadena
    $edad = 20;//entero
    $estatura = 1.80;//flotante
    $trabaja = true; //booleano
    $inicial = 'J'; //caracter

    //constante
    define("Pi", 3.14);

    echo 'Hola mundo';
    
    echo '<br>';

    echo 'Mi nombre es: ' . $nombre . " y mi edad es: " . $edad . " estatura: " . $estatura;

    echo '<br>';
    $pasatiempos = ['leer', 'dormir', 'comer']; //array

    var_dump($pasatiempos); //imprime el tipo de dato y el valor

    echo '<br>';
    print_r($pasatiempos); //menos datos de un array

    $persona = [
        'nombre' => 'Juan',
        'edad' => 20,
        'estatura' => 1.80,
        'trabaja' => true,
        'inicial' => 'J',
        'pasatiempos' => ['leer', 'dormir', 'comer']
    ];

    echo '<br>';

    if($trabaja)
    {
        echo 'Trabaja';
    }
    else
    {
        echo 'No trabaja';
    };

    echo '<br>';

    echo $persona['nombre'];
    echo '<br>';
    echo $persona['estatura'];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Primera practica con PHP</title>
</head>
<body>
    <h1>Iniciando php</h1>

    <?php
        for($i = 0; $i < 10; $i++)
        {
         
    ?>
        <h2>Hola mundo</h2>
    <?php
        };
    ?>
</body>
</html>