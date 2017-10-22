var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);

server.listen(8080);

// directorio estatico
app.use(express.static(__dirname + '/web'));

// controlador
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/web/index.html');
});

var io = require('socket.io').listen(server);

io.on('connection', function(socket){
	console.log("Persona conectada");

	// emito un mensaje
	socket.emit('titulo', "Empieza a interactuar");

	// recibo un mensaje
	socket.on('mensajeON', function(dato){
		io.sockets.emit('titulo', "Mensaje ON");
		console.log(dato);
	});

	socket.on('mensajeOFF', function(dato){
		io.sockets.emit('titulo', "Mensaje OFF");
		console.log(dato);
	});
});
