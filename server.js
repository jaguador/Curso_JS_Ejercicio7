var express=require('express');
var app = express();

var jugadores = new Array();
var numJugadores = 2;
var contJugadores = 0;
var puerto=process.argv[2]?process.argv[2]:8080;

app.get('/', function (req, res) {   
	res.send('Portada');
});

// Recibe nuevo jugador y tira los datos
app.put('/jugador/:nombre', function( req,res ) {
	var tirada1 = 0, tirada2 =0;
	tirada1 = Math.floor((Math.random()*6)+1);
	tirada2 = Math.floor((Math.random()*6)+1);
    jugadores[req.params.nombre] = {dado1: tirada1, dado2: tirada2};
	contJugadores++;
    res.send( jugadores[req.params.nombre] );
});

app.get('/resultado/:nombre', function (req, res) {   
	if (contJugadores == numJugadores) 
		res.send( "terminado:"+req.params.nombre  );
//	else
//		res.send( "pendiente");
});

app.post('/contador/:id', function (req, res) {   
    contadores[req.params.id]++;
    res.send( "{ "+req.params.id+": "+ contadores[req.params.id] + "}"  );
});

app.listen(puerto);
console.log('Servidor ejecutandose en http://127.0.0.1:'+puerto+'/');



