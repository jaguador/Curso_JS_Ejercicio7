Curso_JS_Ejercicio7
===================
<h1>Curso "Programación cliente-servidor en Javascript"</h1>
<h2>Ejercicio 7: Creación de cliente-servidor en node</h2>
<hr>
<p>Se ha simulado el juego de cartas "las 7 y media". Se compone de un servidor (server.js) que organiza la partida y un cliente (cliente.js) que envía y recibe la información del servidor</p>
<p>Su funcionamiento es el siguiente: En primer lugar deberá lanzarse el servidor y mantenerlo a la escucha. A continuación se ejecutarán diferentes llamadas del cliente según el momento de la partida en este orden:<br/>
<ol>
<li>Se crea una nueva partida indicando el número de jugadores mediante el parámetro 'numjugadores'. Ejemplo<br/><b>node cliente.js numjugadores 2</b> (crea una partida para 2 jugadores)</li>
<li>Se añaden los jugadores a la partida 1 por 1 mediante el parámetro 'jugador'. Ejemplo<br/><b>node cliente.js jugador Julio</b> (añade al jugador Julio a la partida, se repetirá esto por cada jugador)</li>
<li>Se solicitan cartas al servidor para cada jugador con el parámetros 'carta'. Ejmplo<br/><b>node cliente.js carta Julio</b> (se pide una carta para el jugador Julio, se podrá repetir las veces que se desee hasta pasarse o plantarse)</li>
<li>El usuario en cualquier momento puede plantarse con las cartes que tiene con el parámetro 'plantarse'. Ejemplo<br/><b>node cliente.js plantarse Julio (se indica que el jugador Julio se planta)</li>
</ol>

<b>node ejercicio6.js ES/Granada</b> <br/><i>(predicción de la ciudad de Granada en España)</i></p>	
<p>- Si no se indica ningún parámetro tomará por defecto la ciudad de Granada.
<br/>- Si se indica un parámetro de ciudad sin País: En el caso que sólo se encuentre 1 coincidencia se muestra el tiempo actual de esa ciudad, en caso contrario se muestran todas las ciudades encontradas con su código de país correspondiente para resolver la ambiguedad
<br/><br/>- <u>Ejemplo 1</u>: Ciudad sin pais con múltiples posibilidades:<br/>
<i><b>node ejercicio6.js Granada</b><br/>
Esperando respuesta de api.wunderground.com para la localizacion: "Granada"<br/>
Atención!!! Hay ambiguedad con la localización indicada. Vuelva a realizar la llamada con la localizacion exacta de entre las siguientes:<br/>
Ciudad: "Granada", Pais: "Colombia", Parametro a usar: "CO/Granada"<br/>
Ciudad: "Granada", Pais: "Estados Unidos de América", Parametro a usar: "US/Granada"<br/>
Ciudad: "Granada", Pais: "Estados Unidos de América", Parametro a usar: "US/Granada"<br/>
Ciudad: "Granada", Pais: "Nicaragua", Parametro a usar: "NI/Granada"<br/>
Ciudad: "Granada", Pais: "Filipinas", Parametro a usar: "PH/Granada"<br/>
Ciudad: "Granada", Pais: "España", Parametro a usar: "ES/Granada"<br/>
Gracias por utilizar nuestros servicios. Que pase un buen dia!	</i><br/>
<br/>- <u>Ejemplo 2</u>: Ciudad con pais:<br/>
<i><b>node ejercicio6.js ES/Granada</b><br/>
Esperando respuesta de api.wunderground.com para la localizacion: "ES/Granada"<br/>
El tiempo registrado en "Granada, España" observado a las "Wed, 13 Nov 2013 20:30:00 +0100" es:<br/>
Cielo: Muy nublado<br/>
Temperatura: 13º<br/>
Sensación térmica: 13º<br/>
Humedad relativa: 100%<br/>
Viento: From the Variable at 2 MPH<br/>
Gracias por utilizar nuestros servicios. Que pase un buen dia!</i><br/>		
</p>
</br>
<hr>
<p><b>Julio Aguado Robles<br/>
Usuario GitHub: jaguador</br> Alumno: al10788</b></p>
