/*
NodeBot Workshop
Robot Arm (Exercise 7 of 9)

 Make a remote control robot arm

 Use a rotary potentiometer (pot) to control the position of a servo.

  » Attach a potentiometer to pin A2
  » Attach a servo to pin 9
  » Have the servo rotate as the potentiometer is turned
*/

var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Create a new `potentiometer` hardware instance.
  var potentiometer = new five.Sensor({
    pin: "A2",
    freq: 250
  });
  var servo = new five.Servo({ // builder
    pin: 9,
    range: [0, 180], // degrees (esta configuración viene por default)
  });
  // "data" get the current reading from the potentiometer
  potentiometer.on("data", function() {
	   servo.to(potentiometer.scaleTo(0,179));
  });
});
