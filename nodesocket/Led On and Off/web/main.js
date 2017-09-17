var socket = io.connect('http://localhost:8080', { 'forceNew': true });

function render (data) {
  document.getElementById('catalina').innerHTML = data;
}

function mensajeON(e) {
  var on = document.getElementById('on').value;
  console.log(on);

  socket.emit('mensajeON', on);
  return false;
}

function mensajeOFF(e) {
  var off = document.getElementById('off').value;
  console.log(off);

  socket.emit('mensajeOFF', off);
  return false;
}

socket.on('titulo', function(data){
  console.log(data);
  render(data);
});
