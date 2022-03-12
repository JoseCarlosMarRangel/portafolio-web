<?php
include '../login/conexion.php';

$datos = retornar_datos_usuario($_SESSION['usuario'], $conexion);

//var_dump($datos);
?>

<header>
  <div class="branding"> <img src="../images/ralogo_monogram.png" alt="Logo">
    <p>Roux Academy<br>
      Art • Media • Design</p>
  </div>
  <div class="description">
    <h1>Roux Academy 2016 Art Conference</h1>
    <p>Join over 500 hundred of the most creative and brilliant minds of art colleges all around the world for five days of lectures by world-renowned art scholars and artists, and seven days and nights of gallery exhibits featuring the best in contemporary art, including painting, sculpture, and more, in the beautiful halls of Hotel Contempo in the heart of Seattle.</p>
    <div class="social">
      <?php

      if (isset($_SESSION['usuario'])) {
        echo '<a href="login/cerrar_session.php">cerrar_session</a> ';
        echo "<p> usuario: " . $_SESSION['usuario'] . "</p>";
      }
      ?>

    </div>
  </div>
  </div>
  <nav>
    <ol>
      <li><a href="../index.php">HOME</a></li>
      <li><a href="../artists.php">ARTISTS</a></li>
      <li><a href="../schedule/index.php">SCHEDULE</a></li>
      <li><a href="../venue.php">VENUE/TRAVEL</a></li>
      <li><a href="index.php">REGISTER</a></li>
      <li><?php
          if ($datos === 'administrador') {
            //echo '<a href=" asistentes.php">ASISTENTES</>';
            echo '<a href="../asistentes.php">ASITENTES</a>';
          }; ?></li>
    </ol>
  </nav>
</header>