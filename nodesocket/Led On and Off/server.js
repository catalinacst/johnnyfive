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




// var http = require('http');
// var express = require('express');
// var app = express();
// var server = http.createServer(app);
// var io = require('socket.io')(server);
//
// var messages = [{
//   id: 1,
//   text: "Hola soy un mensaje",
//   author: "Carlos Azaustre"
// }];
//
// app.use(express.static('web'));
//
// app.get('/', function(req, res) {
// 	res.sendFile(__dirname + '/web/index.html');
// });
//
// io.on('connection', function(socket) {
//   console.log('Alguien se ha conectado con Sockets');
//   socket.emit('messages', messages);
//
//   socket.on('new-message', function(data) {
//     messages.push(data);
//
//     io.sockets.emit('messages', messages);
//   });
// });
//
// server.listen(8080, function() {
//   console.log("Servidor corriendo en http://localhost:8080");
// });

/*

function peticionServidor(req, resp){

	console.log("Usuario Conectado");
	resp.writeHead(200,{"Content-Type" : "text/html"});
	resp.write("<h1> Hola Mundo </h1>");
	resp.end();
}

http.createServer(peticionServidor).listen(8888);

*/
