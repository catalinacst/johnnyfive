var socket = io.connect('http://localhost:8080', { 'forceNew': true });


function render (resistencia) {
  document.getElementById('resistencia').innerHTML = resistencia;
}

function conocerResistencia() {
  socket.emit('resistencia');
  return false;
}

function graficar(resistencia){
}

socket.on('mostrarResistencia', function(resistencia){
  console.log(resistencia);
  render(resistencia);
});
