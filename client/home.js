var Ractive = require('ractive')
var template = require('fs').readFileSync('client/home.html', { encoding: 'utf8' })
var socket = require('./socket')
var router = require('./router')

module.exports = function() {
	var ractive = new Ractive({
		el: 'body',
		template: template
	})

	ractive.on('createList', function() {
		socket.emit('newList', function(err, list) {
			console.log(err, list)
			if (err) {
				ractive.set('error', err.message)
			} else {
				router.go('/list/' + list.id + '/' + list.editKey)
			}
		})
	})
}
