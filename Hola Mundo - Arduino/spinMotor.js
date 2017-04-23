/*
NodeBot Workshop
  Spin Motor Spin (Exercise 3 of 9)

 Attach a motor to pin 9 and start it spinning!

  » Spin the motor at 200 mph
  » Use board.wait to stop the motor spinning after 2 seconds
  » Start it spinning again after another second
  » Ensure this loop repeats infinitely

 Hint: You could use the motor start and stop events to stop/start the
 motor.
*/

var five = require("johnny-five");
var board = new five.Board();

board.on('ready', function () {
  // instance of the motor is created
  var motor = new five.Motor({
    pin: 9
  });
  motor.start(200)

  motor.on("start", function() {
    board.wait(2000, function() {  // board.wait
      motor.stop();
    });
  });

  motor.on("stop", function() {
    board.wait(1000, function() {  // board.wait (milliseconds)
      motor.start(200);
    });
  });
})
