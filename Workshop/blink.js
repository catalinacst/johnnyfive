/*
NodeBot Workshop
Blink Blink (Exercise 1 of 9)
Write a program that blinks an LED attached to pin 13 once every second.

 » When the board is ready, create a new Led instance.
 » Pass a number to the Led constructor to tell it which pin to attach to.
 » Led has a strobe method; it takes an interval in milliseconds.

*/

var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // create an Led on pin 13
  var led = new five.Led(13);
  // blink every half second
  //led.blink(1000);
  led.strobe(500);
});
