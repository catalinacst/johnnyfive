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

	io.on('connection', function(socket){
		console.log("Persona conectada");
		var photoresistor;
	  // Create a new `photoresistor` hardware instance.
	  photoresistor = new five.Sensor({
	    pin: "A0",
	    freq: 250
	  });
	  board.repl.inject({
	    pot: photoresistor
	  });
		socket.on('resistencia', function(){
		  photoresistor.on("data", function() {
		    console.log(this.value);
				io.sockets.emit('mostrarResistencia', this.value);
		  });
		});
	});
});

// // ver los valores del photoresistor
// var five = require("johnny-five"),
//   board, photoresistor;
//
// board = new five.Board();
//
// board.on("ready", function() {
//
//   // Create a new `photoresistor` hardware instance.
//   photoresistor = new five.Sensor({
//     pin: "A2",
//     freq: 250
//   });
//
//   // Inject the `sensor` hardware into
//   // the Repl instance's context;
//   // allows direct command line access
//   board.repl.inject({
//     pot: photoresistor
//   });
//
//   // "data" get the current reading from the photoresistor
//   photoresistor.on("data", function() {
//     console.log(this.value);
//   });
// });
