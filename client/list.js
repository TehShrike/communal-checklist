var Ractive = require('ractive')
var template = require('fs').readFileSync('client/list.html', { encoding: 'utf8' })
var socket = require('./socket')
var router = require('./router')


module.exports = function(listId, editKey) {
	var ractive = new Ractive({
		el: 'body',
		template: template
	})

	ractive.on('nameChange', function() {
		ractive.set('editingName', false)
		socket.emit('overwriteListMetadata', listId, editKey, ractive.get('list.other'), function(err, list) {
			console.log(err, list)
			if (err) {
				ractive.set('error', err)
			} else {
				handleList(list)
			}
		})
	})

	function editName() {
		ractive.set('editingName', true)
		ractive.find('input.listName').select()
	}

	ractive.on('editName', editName)

	function handleList(list) {
		ractive.set('list', list)
		if (!list.other.name) {
			editName()
		}
	}

	socket.emit('getList', listId, function(err, list) {
		if (err) {
			ractive.set('error', err)
			console.error(err)
		} else {
			console.log(list)
			handleList(list)
		}
	})
}
