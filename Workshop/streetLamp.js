/*
NodeBot Workshop
Street Lamp (Exercise 5 of 9)

 Build a street lamp that turns on as it gets dark.

  » Use photoresistor and an LED
  » Connect the photoresistor to A0 and the LED to 9
  » Make the LED turn on when the photoresistor's value is greater than 600
*/

var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Create a new `photoresistor` hardware instance.
  photoresistor = new five.Sensor({
		pin: "A0",
		freq: 250
  });
  var led = new five.Led(9);
  photoresistor.on("data", function() {
    if (this.value > 600){
      led.on();
    }else {
      led.off();
    }
  });
});
