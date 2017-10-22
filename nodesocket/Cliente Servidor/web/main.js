var socket = io.connect('http://localhost:8080', { 'forceNew': true });

function mensajeON(e) {
  var on = document.getElementById('on').value;
  socket.emit('mensajeON', on);
  return false;
}

function mensajeOFF(e) {
  var off = document.getElementById('off').value;
  socket.emit('mensajeOFF', off);
  return false;
}

// obtiene el id correspondiente y cambia el valor
socket.on('titulo', function(data){
  document.getElementById('titulo').innerHTML = data;
});
