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

	  // Create a new ledRGB hardware instance.
		var anode = new five.Led.RGB({
			pins: {
	      red: 6,
	      green: 5,
	      blue: 3
	    },
	    isAnode: true
  	});

		socket.on('darColor', function(colorHexa, colorNombre){
			anode.color(colorHexa);
			io.sockets.emit('mostrarColor', colorNombre);
		});

		var index = 0;
		var rainbow = ["FF0000", "FF7F00", "FFFF00", "00FF00", "0000FF", "4B0082", "8F00FF"];

		socket.on('strobe', function(){
			board.loop(500, function() {
		    anode.color(rainbow[index++]);
		    if (index === rainbow.length) {
		      index = 0;
		    }
		  });
			io.sockets.emit('mostrarColor', "PARTY!!");
		});
	});
});
