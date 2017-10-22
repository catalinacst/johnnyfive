var socket = io.connect('http://localhost:8080', { 'forceNew': true });

function colorRojo(e) {
  var colorNombre = document.getElementById('Rojo').id;
  var colorHexa = document.getElementById('Rojo').value;
  socket.emit('darColor', colorHexa, colorNombre);
  return false;
}

function colorAmarillo(e) {
  var colorNombre = document.getElementById('Amarillo').id;
  var colorHexa = document.getElementById('Amarillo').value;
  socket.emit('darColor', colorHexa, colorNombre);
  return false;
}

function colorVerde(e) {
  var colorNombre = document.getElementById('Verde').id;
  var colorHexa = document.getElementById('Verde').value;
  socket.emit('darColor', colorHexa, colorNombre);
  return false;
}

function colorAzul(e) {
  var colorNombre = document.getElementById('Azul').id;
  var colorHexa = document.getElementById('Azul').value;
  socket.emit('darColor', colorHexa, colorNombre);
  return false;
}

function funcionStrobe(e) {
  socket.emit('strobe');
  return false;
}

socket.on('mostrarColor', function(colorNombre){
  console.log("8F00FF");
  document.getElementById('color').innerHTML = colorNombre;
});
