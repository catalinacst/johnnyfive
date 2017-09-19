/*
NodeBot Workshop
Servo Wave (Exercise 2 of 9)
  Make a servo wave at you for 3 seconds, stop, and return to center.

   » Create a new Servo instance attached to pin 9
   » Use servo.sweep to rotate between 0˚ and 180˚
   » Use board.wait to schedule a 'reset' callback after 3 seconds
   » The 'reset' callback should stop and center the servo
   » Check the docs to see how to bring it back into line
*/

var five = require("johnny-five");
var board = new five.Board();

board.on('ready', function () {
  // instance of the servo is created
  var servo = new five.Servo({ // builder
    pin: 9,
    range: [0, 180], // degrees (esta configuración viene por default)
    center: true, // default
  });
  servo.sweep(); // rotate
})
