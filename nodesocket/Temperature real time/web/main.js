var socket = io.connect('http://localhost:8080', { 'forceNew': true });

function render (celsius, fahrenheit) {
  document.getElementById('celsius').innerHTML = celsius;
  document.getElementById('fahrenheit').innerHTML = fahrenheit;
}

function conocerTemperatura() {
  socket.emit('temperaturaServer');
  return false;
}

socket.on('mostrarTemperatura', function(celsius, fahrenheit){
  console.log(celsius);
  render(celsius, fahrenheit);
});
