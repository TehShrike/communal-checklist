var http = require('http')
var ecstatic = require('ecstatic')
var socketio = require('socket.io')

function makeServer() {
	var server = http.createServer(
		ecstatic({
			root: __dirname + '/static',
			cache: 0
		})
	)

	var io = socketio(server)

	return server
}

module.exports = makeServer

makeServer().listen(8080)
