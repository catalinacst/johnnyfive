/*
NodeBot Workshop
Light Switch (Exercise 4 of 9)

 Write a program that acts like a light switch to turn an LED on and off.

  » Attach a button to pin 5 and an LED to pin 9
  » Use the Button class to detect press events and toggle your LED on/off
*/

var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function(){
  var led = new five.Led(9);
  var button = new five.Button(5);
  // down, press The button has been pressed.
  button.on('press', function(){
    // toggle() Toggle the current state, if on then turn off, if off then turn on.
    led.toggle();
	});
});
