<!DOCTYPE html>
<html>
<head>
	<title>Simulacro SENA</title>
	<link rel="stylesheet" type="text/css" href="CSSSimulacro.css">
	<link rel="stylesheet" type="text/css" href="normalize.css">
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet">
	<meta charset="utf-8">
</head>
<body>

	<form method="post" class="contenedor-modal">
		  
		<div class="contenedor-contenido">
			<div class="texto-modal">
			Ingrese su número de celular
			</div>
			<input type="text" name="numero-de-telefono" id="numero-de-telefono" placeholder="3154463991">
			
			<input class="button-acceso" type="submit" type="button" value="Ingresar al Simulacro">
		</div>

	</form>

	<div class="headerEvaluacion"><h2>Evaluación</h2></div>

	<div class="testContainer" hidden="hidden">

		<br>

		<br>
		<br>

		<h3 class="bienvenido">BIENVENIDO A LA SELECCIÓN DE ASPIRANTES SENA</h3>

		<br>

		<h3>SEÑOR ASPIRANTE TENGA EN CUENTA QUE SOLO TIENE ESTA OPORTUNIDAD PARA PRESENTAR LA PRUEBA</h3>

		<p>A continuación usted encontrará 20 preguntas o situaciones hipotéticas, y dispone de 25 minutos para responderlas. Una vez finalice haga clic en <b>Terminar</b></p>
		<br>

		<small>La prueba cuenta con un cronómetro regresivo de 25 minutos. Una vez cumplido el tiempo de responder las preguntas, el sistema se cerrará y grabará automáticamente las respuestas registradas hasta ese momento.</small><br><br>

		<small>Las situaciones hipotéticas que se presentan a continuación buscan identificar sus intereses, actitudes y aptitudes</small><br><br>

		<small>Conteste con sinceridad de acuerdo a sus intereses y manera de actuar.</small><br><br>

		<u><b>Los tipos de pregunta que se incluyen en esta prueba son:</b></u><br><br>

		<ul class="con-puntos">
			<li><b>De Selección múltiple con única respuesta</b>, en este tipo de preguntas encuentra un enunciado para el cual debe seleccionar una (1) de las opciones propuestas</li><br>

			<li><b>De ordenamiento,</b> consta de un (1) enunciado, situación hipotética o pregunta y cinco (5) opciones de respuesta. Seleccione según su preferencia <b>de 1 a 5. Donde (1) es la que más le gusta o con la que más se identifica y cinco (5) la que menos le gusta o con la que menos se identifica</b></li>
		</ul> <br><br>

		<table class="tabla">
			<tr>
				<th class="amplitud-tabla"><b>Orden</b></th>
				<th><b>Significado</b></th>
			</tr>

			<tr>
				<th>1</th>
				<th>Me gusta mucho - Con lo que más me identifico</th>
			</tr>

			<tr>
				<th>2</th>
				<th>Me gusta algo o en parte</th>
			</tr>

			<tr>
				<th>3</th>
				<th>Me es indiferente, ni me gusta ni me disgusta</th>
			</tr>

			<tr>
				<th>4</th>
				<th>Me desagrada algo o en parte</th>
			</tr>

			<tr>
				<th>5</th>
				<th>Me desagrada mucho o totalmente - con la que menos me identifico</th>
			</tr>
		</table>

		<br>
		<br>

		<div class="little-border">
			<br>
			<h3>A CONTINUACIÓN ENCONTRARA PREGUNTAS DE ORDENAMIENTO</h3>
			<h3>Consta de un enunciado, situación hipotética o pregunta y cinco opciones de respuesta, usted debe seleccionar la preferencia de 1 a 5. Donde 1 es la que más le gusta o con la que más se identifica y 5 la que menos le gusta o con la que menos se identifica</h3>
			<br>
		</div>
		<br>


	<form action="pruebaFinalizada.php" method="post" class="test" id="pruebasena" hidden="hidden">
	    
	    <input type="text" name="numeroDeTelefono" value="" hidden>
	    
	    <input type="text" name="caja_valor" id="caja_valor" value="" hidden>
	



		
	</form>
	
	<?php
	
	    if (isset($_POST['submit'])){
            require("pruebaFinalizada.php");
	    }
	?>

	</div>


<div class="forCountdown" hidden="hidden">

	<br>
	
	<div class="countdown"><div></div></div>

	<p class="texto-dentro-countdown">Tiempo restante de la prueba</p>

	<p class="texto-dentro-countdown">__________________________</p><br>

	<p class="texto-dentro-countdown"><p class="question-number"></p></p><br>

	<p class="texto-dentro-countdown">Preguntas respondidas</p><br>




</div>

	<script type="text/javascript" src="codeSimulacro101.js"></script>
	
	<script type="text/javascript" src="quote.js"></script>
	
	<script type="text/javascript" src="download.js"></script>

	<script type='text/javascript'>

		document.oncontextmenu = function(){return false}
	
	</script>
	
	<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>

</body>
</html>