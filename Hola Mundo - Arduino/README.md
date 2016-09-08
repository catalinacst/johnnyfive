# Johnny Five - Arduino
## ¡Hola Mundo! - ¡Hello World!

Como todos conocemos el paso más importante al enfrentarnos con un nuevo lenguaje, es poner en práctica nuestro "Hola Mundo" tr. "Hello World".

En este caso, la situación es distinta.
En Arduino el "Hola Mundo" es hacer parpadear un LED de forma sencilla. Esa es nuestra manera de decir "Hola Mundo" "Hola Arduino".

### Código
```
var five = require("johnny-five");
var board = new five.Board();
board.on("ready", function() {
    // Create an Led on pin 13
    var led = new five.Led(13);
    // Blink every half second
    led.blink(1000); 
});
```