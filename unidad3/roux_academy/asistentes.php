<?php

$bd = 'id17625741_prueba';
$servidor = 'localhost';
$usuario = 'id17625741_root';
$contrasena = 'Minecrafteo123@';

$conexion = mysqli_connect($servidor, $usuario, $contrasena, $bd);

?>


<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Tabla de usuarios</title>
</head>
<body>
	<h1>Tabla de Usuarioss</h1>
	<br>
	<table border="1">
		<tr>
			<td>id</td>
			<td>usuario</td>
			<td>rol</td>
		</tr>
		<?php
		$sql = "select id, usuario,rol from usuarios";
		$result = mysqli_query($conexion, $sql);
		while ($mostrar = mysqli_fetch_array($result)) {
		?>
			<tr>
				<td><?php echo $mostrar['id'] ?></td>
				<td><?php echo $mostrar['usuario'] ?></td>
				<td><?php echo $mostrar['rol'] ?></td>
			</tr>
		<?php
		}
		?>
	</table>
	<br />
	<button onclick="location.href='index.php'">REGRESAR</button>
</body>
</html>