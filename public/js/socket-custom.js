var socket = io()

// Escuchar información
socket.on('connect', function() {
  console.log('Conectado al servidor')
})

socket.on('disconnect', function() {
  console.log('Perdimos conexion con el servidor')
})

socket.on('enviarMensaje', function(mensaje) {
  console.log(mensaje)
})

// Enviar información
socket.emit('enviarMensaje', {
  usuario: 'Fernando',
  mensaje: 'Hola Mundo'
}, function(resp) {
  console.log('Respuesta del server:', resp)
})