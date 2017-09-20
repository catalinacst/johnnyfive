var http = require('http');
var express = require('express');
var five = require('johnny-five');
var app = express();
var server = http.createServer(app);
var board = new five.Board();

app.use(express.static(__dirname + '/web'));

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/web/index.html');
});

server.listen(8080);

var io = require('socket.io').listen(server);

board.on("ready", function() {

	/*
	Este socket maneja la conexión cliente-servidor y nos ofrece las dos
	propiedades con las que vamos a trabajar, on (escucha eventos)
	y emit (emite eventos)
	*/
	io.on('connection', function(socket){
		console.log("Persona conectada");
		socket.emit('titulo', "Empieza a interactuar");

		var sensor = new five.Thermometer({
			controller: "TMP36",
			pin: "A0"
		});
		var temperatura;
		socket.on('temperaturaServer', function(){
			sensor.on("change", function() {
		    console.log(this.celsius + "°C", this.fahrenheit + "°F");
				io.sockets.emit('mostrarTemperatura', this.celsius, this.fahrenheit);
		  });
		});
	});
});
