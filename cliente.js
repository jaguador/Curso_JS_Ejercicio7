var rest = require('restler');
var url = 'http://127.0.0.1:8080/';
var temporizador;
var resultado;

process.argv.forEach(function (val, index, array) {
	if ( index == 2 ) {
		rest.put( url + 'jugador/' + val ).on('complete', function( data ) {
			console.log( data );
			//do {
			//	temporizador = setTimeout(function(){
			//} while(resultado == "pendiente") 
		});
		rest.get( url + 'resultado/' + val ).on('complete', function(data) {
			console.log(data);
			//			resultado = data;
			//		},2000);
		});

	}
});