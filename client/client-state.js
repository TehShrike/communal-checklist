var levelup = require('levelup')
var storage = require('localstorage-down')
var socketio = require('socket.io-client')

var db = levelup('communal-checklist', {
	db: storage
})

var socket = socketio(window.location.host)

module.exports = {
	db: db,
	socket: socket
}
