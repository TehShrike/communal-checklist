var socketio = require('socket.io-client')

module.exports = socketio(window.location.host)
