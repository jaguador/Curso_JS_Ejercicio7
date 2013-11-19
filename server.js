// Julio Aguado Robles
// Alumno: al10788

var express=require('express');
var app = express();
var puerto=process.argv[2]?process.argv[2]:8080;

// Array de jugadores. Cada uno con la propiedad 'Estados': jugando, plantado, pasado, y otro Array con las cartas de su jugada
var jugadores = new Array();
var numJugadoresTotal = 0;		// Numero de jugadores total de la partida
var numJugadoresActual = 0;		// Numero de jugadores actualmente en la partida
// Objetos de la baraja de cartas con su puntuación
var baraja = new Array({carta: '1', puntuacion: 1}, {carta: '2', puntuacion: 2}, {carta: '3', puntuacion: 3}, {carta: '4', puntuacion: 4}, {carta: '5', puntuacion: 5}, {carta: '6', puntuacion: 6}, {carta: '7', puntuacion: 7}, {carta: 'Sota', puntuacion: .5}, {carta: 'Caballo', puntuacion: .5}, {carta: 'Rey', puntuacion: .5});


// PUT NUMEROJUGADORES: Toma el número de jugadores total de la partida
app.put('/numjugadores/:numero', function( req,res ) {
	numJugadoresTotal = req.params.numero;
    res.send('Comienza la partida para '+numJugadoresTotal+' jugadores');
});


// PUT NOMBRES: Toma los nombres de cada jugador
app.put('/jugador/:nombre', function( req,res ) {
	// Ya se alcanzo el maximo de jugadores
	if (numJugadoresTotal == numJugadoresActual)
		res.send('Ya se alcanzo el tope de jugadores');
	else {
		// No se permite añadir 2 jugadores con el mismo nombre
		if (jugadores[req.params.nombre] != undefined)
			res.send('Ya existe un jugador llamado \''+req.params.nombre+'\'. No puede entrar a la partida');
		else {
			numJugadoresActual++;	// Aumenta numero de jugadores actual
			jugadores[req.params.nombre] = new Array();		// Array del jugador
			jugadores[req.params.nombre]['estado'] = 'jugando';		// Estado actual 'jugando'
			jugadores[req.params.nombre]['cartas'] = new Array();	// Array para las cartas
			res.send('Entra jugador \''+req.params.nombre+'\' a la partida');
		}
	}
});


// GET CARTA: Devuelve una carta nueva para el jugador indicado
app.get('/carta/:nombre', function (req, res) {  
	var salida = "";
	// Aun no han entrado todos los jugadores a la partida
	if (numJugadoresActual < numJugadoresTotal)
		salida = 'Aun no han entrado todos los jugadores a la partida ('+numJugadoresTotal+')';
	// Se comprueba que exista el jugador para el que se pide carta
	else if (jugadores[req.params.nombre] == undefined)
		salida = 'No se ha encontrado el jugador \''+req.params.nombre+'\' en la partida';
	// El jugador no puede pedir cartas si ya se ha plantado o pasado
	else if (jugadores[req.params.nombre]['estado'] == 'plantado' || jugadores[req.params.nombre]['estado'] == 'pasado')
			salida = 'El jugador '+req.params.nombre+' ya se ha '+jugadores[req.params.nombre]['estado']+' y no puede pedir mas cartas';	
	else {
		// Tomar nueva carta aleatoria
		var carta = pedirCarta(req.params.nombre);
		// Se guarda en las cartas del jugador
		jugadores[req.params.nombre]['cartas'][jugadores[req.params.nombre]['cartas'].length] = carta;
		// Se indica la nueva carta tomada
		salida = 'Carta: '+carta.carta+' para el jugador \''+req.params.nombre+'\'';	
		// Contar la puntuacion del jugador actualizada
		var puntuacion = contarPuntuacion(req.params.nombre);
		// Si se ha pasado de 7 y media se indica y se actualiza su estado
		if (puntuacion > 7.5) {
			salida += '\n El jugador \''+req.params.nombre+'\' tiene una puntuacion de '+puntuacion+' y por tanto se ha pasado';	
			jugadores[req.params.nombre]['estado'] = 'pasado';
		}
		// Se comprueba si se ha terminado la partida porque no quede ningun jugador 'jugando'
		if (comprobarFinPartida()) {
			salida += '\n'+imprimirResultado();	// Muestra el resultado final de la partida
			borrarPartidaAntigua();
		}
	}
	res.send(salida);
});


// PUT PLANTARSE: Se planta el jugador que se indica con las cartas actuales
app.put('/plantarse/:nombre', function (req, res) {  
	var salida = "";
	// Aun no han entrado todos los jugadores a la partida
	if (numJugadoresActual < numJugadoresTotal)
		salida = 'Aun no han entrado todos los jugadores a la partida ('+numJugadoresTotal+')';
	// Se comprueba que exista el jugador que se planta
	else if (jugadores[req.params.nombre] == undefined)
		salida = 'No se ha encontrado el jugador \''+req.params.nombre+'\' en la partida';
	else
	{
		// Se comprueba que el jugador no estuviera ya previamente plantado o pasado
		if (jugadores[req.params.nombre]['estado'] == 'plantado' || jugadores[req.params.nombre]['estado'] == 'pasado')
			salida = 'El jugador '+req.params.nombre+' ya se ha '+jugadores[req.params.nombre]['estado']+' y no puede plantarse';	
		// Se indica que el jugador se ha plantado actualizando su estado
		else { 
			jugadores[req.params.nombre]['estado'] = "plantado";
			salida = 'El jugador \''+req.params.nombre+'\' se ha plantado con '+contarPuntuacion(req.params.nombre)+' puntos';			
		}
		// Se comprueba si se ha terminado la partida porque no quede ningun jugador 'jugando'		
		if (comprobarFinPartida()) {
			salida += '\n'+imprimirResultado();    // Muestra el resultado final de la partida
			borrarPartidaAntigua();
		}
	}
	res.send(salida);
});
app.listen(puerto);
console.log('Servidor ejecutandose en http://127.0.0.1:'+puerto+'/');


// .......... FUNCIONES AUXILIARES .............. //

// Limpia la partida antigua para prepararse para empezar nueva partida
function borrarPartidaAntigua() {
	numJugadoresTotal = 0;		
	numJugadoresActual = 0;		
	jugadores = new Array();
	jugadores.length = 0;
}



// Devuelve texto con el resultado final de la partida
function imprimirResultado() {
	var resultado = "\n\nFIN DE LA PARTIDA, RESULTADO:";
	var iganador = "";
	var puntuacionMayor = 0;
	// Recorrer todos los jugadores
	for (var i in jugadores) {
		// Si el jugador se ha pasado
		if (jugadores[i]['estado'] == 'pasado')		
			resultado += '\n'+i+': Se ha pasado';
		// Si el jugador se ha plantado con puntuacion valida
		else if (jugadores[i]['estado'] == 'plantado') {
			var puntos = contarPuntuacion(i);
			resultado += '\n'+i+': Plantado con '+puntos+' puntos';
			if (puntos >= puntuacionMayor) {
				iganador = i;
				puntuacionMayor = puntos;
			}
		}
	}
	// Si no se encuentra ninguno ganador (todos se han pasado) gana la banca
	if (iganador == "")
		resultado += "\nTodos los jugadores se han pasado. HA GANADO LA BANCA!!";
	// Si hay ganador se indica el jugador con la puntuacion mas alta
	else
		resultado += "\nHA GANADO EL JUGADOR \'"+iganador+"\'"; 
	return resultado;
}

// Comprueba si queda algun jugador con estado 'jugando'
function comprobarFinPartida() {
	for (var i in jugadores) {
		if (jugadores[i]['estado'] == 'jugando') {
			return false;
			}
	}
	return true;
}

// Cuenta la puntuacion de un jugador
function contarPuntuacion(jugador) {
	var suma = 0;
	// Recorrer todas las cartas del jugador
	for (var i in jugadores[jugador]['cartas']) {
		suma += jugadores[jugador]['cartas'][i].puntuacion;	// Sumar la puntuacion de la carta
	}
	return suma;
}

// Toma una nueva carta (objeto) aleatoria de la baraja
function pedirCarta() {
	var indice = Math.floor(Math.random()*10);
	return baraja[indice];
}
