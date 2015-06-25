var http = require('http')
var ecstatic = require('ecstatic')
var socketio = require('socket.io')
var socketHandler = require('server/socket-server')

function makeServer() {
	var server = http.createServer(
		ecstatic({
			root: __dirname + '/static',
			cache: 0
		})
	)

	var io = socketio(server)

	io.on('connection', socketHandler)

	return server
}

module.exports = makeServer

makeServer().listen(8080)
