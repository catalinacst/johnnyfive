var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var anode = new five.Led.RGB({
    pins: {
      red: 6,
      green: 5,
      blue: 3
    },
    isAnode: true
  });

  // Add led to REPL (optional)
  this.repl.inject({
    anode: anode
  });
  // // Turn it on and set the initial color
  // anode.on();
  // anode.color("#00FF00");
  //
  // anode.blink(1000);

  var index = 0;
  var rainbow = ["FF0000", "FF7F00", "FFFF00", "00FF00", "0000FF", "4B0082", "8F00FF"];
              // rojo, amarillo, verde clarito, verde oscuro,  azul, morado, mas morado
  board.loop(1000, function() {
    anode.color(rainbow[index++]);
    if (index === rainbow.length) {
      index = 0;
    }
  });

});
