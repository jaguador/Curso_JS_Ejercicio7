// Julio Aguado Robles
// Alumno: al10788

var rest = require('restler');
var url = 'http://127.0.0.1:8080/';
var opcion = "";
var dato;

var help = "Juego de 7 y media. Instrucciones:";
help += "\n1) Para comenzar el juego llamar indicando el numero de jugadores con el parametro numjugadores: 'node cliente.js numjugadores X' siendo X un valor numerico";
help += "\n2) A continuacion introducir cada jugador a la partida indicando su nombre: 'node cliente.js jugador NOMBRE' siendo NOMBRE el nombre de un jugador";
help += "\n3) Despues de introducir TODOS los jugadores, pedir carta/s para cada jugador: 'node cliente.js carta NOMBRE' siendo NOMBRE el nombre de un jugador de la partida";
help += "\n4) Si un jugador se pasa de 7 y media ya no podra pedir mas cartas. Si decide plantarse puede hacerlo con: 'node cliente.js plantarse NOMBRE' siendo NOMBRE el nombre de un jugador de la partida";
help += "\n5) La partida permanecera abierta hasta que todos los jugadores se hayan plantado o pasado de 7 y media. En ese momento automaticamente se termina la partida y se muestra el ganador";

// Comprobar que se pasan los parametros de opcion y valor
if (process.argv.length != 4)
	console.log('Error en los parametros de llamada\n'+help);
else {
	process.argv.forEach(function (val, index, array) {
		if (index == 2)   	// Opcion: numjugadores, jugador, carta, plantarse
			opcion = val;
		if (index == 3)		// Valor: numero de jugadores o nombre del jugador
			dato = val;
	});
	
	// Segun la opcion
	switch (opcion) {
		// Se indica el numero de jugadores
		case 'numjugadores':
			rest.put( url + opcion + '/' + dato ).on('complete', function( data ) {
				console.log(data);
			});		
			break;
		// Se introduce un jugador en la partida por su nombre
		case 'jugador':
			rest.put( url + opcion + '/' + dato ).on('complete', function( data ) {
				console.log(data);
			});		
			break;
		// Se pide una carta para el jugador indicado
		case 'carta':
			rest.get( url + opcion + '/' + dato ).on('complete', function( data ) {
				console.log(data);
			});		
			break;
		// Se indica que un jugador se planta
		case 'plantarse':
			rest.put( url + opcion + '/' + dato ).on('complete', function( data ) {
				console.log(data);
			});		
			break;
		default:
			console.log('Error en los parametros.'+help);
			break;
	}
	
}
