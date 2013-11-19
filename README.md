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
<li>Se solicitan cartas al servidor para cada jugador con el parámetros 'carta'. Ejemplo<br/><b>node cliente.js carta Julio</b> (se pide una carta para el jugador Julio, se podrá repetir las veces que se desee hasta pasarse o plantarse)</li>
<li>El usuario en cualquier momento puede plantarse con las cartes que tiene con el parámetro 'plantarse'. Ejemplo<br/><b>node cliente.js plantarse Julio</b> (se indica que el jugador Julio se planta)</li>
</ol>
<p>La partida finalizará automáticamente cuando no quede ningún jugador activo, o sea todos se hayan plantado o pasado de 7 y media. En ese momento se mostrará el ganador de la partida.
</br>
<hr>
<p><b>Julio Aguado Robles<br/>
Usuario GitHub: jaguador</br> Alumno: al10788</b></p>
