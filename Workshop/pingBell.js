/*
NodeBot Workshop
Ping Bell (Exercise 6 of 9)

 Create a UDP server that plays a sound when a message is received.

  » Attach a piezo to pin 8
  » Use the dgram node module to create a udp4 socket
  » Bind your server to port 1337 and listen for messages
  » When a message is received, have the piezo play a tune
*/

var five = require("johnny-five");
var dgram = require('dgram') 
var board = new five.Board();

board.on("ready", function() {
  var server = dgram.createSocket('udp4');
  var piezo = new five.Piezo(8);
  server.bind(1337);
  server.on("message", function (msg, rinfo) {
    piezo.play({
      tempo: 150, // Beats per minute, default 150
      song: [ // An array of notes that comprise the tune
        [ "c4", 1 ], // Each element is an array in which
      ]
    });
  });
});
