var http = require('http');
var express = require('express');
var five = require('johnny-five'); // <---- nuevo
var app = express();
var server = http.createServer(app);
var board = new five.Board(); // <---- nuevo

app.use(express.static(__dirname + '/web'));

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/web/index.html');
});

server.listen(8080);

var io = require('socket.io').listen(server);

board.on("ready", function() { // <---- nuevo
	
	// create an Led on pin 13
	var led = new five.Led(13);

	io.on('connection', function(socket){
		console.log("Persona conectada");
		socket.emit('titulo', "Empieza a interactuar");

		socket.on('mensajeON', function(dato){
			console.log(dato);
			led.on();
			io.sockets.emit('titulo', dato);
		});

		socket.on('mensajeOFF', function(dato){
			console.log(dato);
			led.off();
			io.sockets.emit('titulo', dato);
		});
	});
});
