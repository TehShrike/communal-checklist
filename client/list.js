var Ractive = require('ractive')
var listTemplate = require('fs').readFileSync('client/list.html', { encoding: 'utf8' })
var socket = require('./socket')
var router = require('./router')
var copy = require('shallow-copy')
var levelup = require('levelup')
var storage = require('localstorage-down')

var db = levelup('communal-checklist', {
	db: storage
})

module.exports = function(listId, editKey) {
	var canEdit = !!editKey
	var ractive = new Ractive({
		el: 'body',
		template: listTemplate,
		data: {
			canEdit: canEdit,
			currentName: 'Anonymous'
		}
	})

	db.get('currentName', function(err, currentName) {
		if (!err) {
			ractive.set('currentName', currentName)
		} else if (!err.notFound) {
			throw err
		}
	})

	function editName() {
		if (canEdit) {
			ractive.set('editingName', true)
			ractive.find('input.listName').select()
		}
	}

	function handleList(list) {
		list.items.forEach(function(item) {
			item.itemId = item.id
		})
		ractive.set('list', list)
		if (!list.other.name) {
			editName()
		}
	}

	function handleErrorOrList(err, list) {
		if (err) {
			ractive.set('error', err)
		} else {
			handleList(list)
		}
	}

	ractive.on('changeUserName', function() {
		db.put('currentName', ractive.get('currentName'))
	})

	ractive.on('checkboxClicked', function(event) {
		var checkbox = event.context
		var checked = event.node.checked
		var itemId = event.node.dataset.itemId
		var name = ractive.get('currentName')

		socket.emit(checked ? 'check' : 'uncheck', listId, itemId, checkbox.id, name, handleErrorOrList)
	})

	ractive.on('nameChange', function() {
		ractive.set('editingName', false)
		socket.emit('overwriteListMetadata', listId, editKey, ractive.get('list.other'), handleErrorOrList)
	})

	ractive.on('nameKillFocus', function() {
		ractive.set('editingName', false)
	})

	ractive.on('newItem', function() {
		var name = ractive.get('newItemName')
		if (name) {
			ractive.set('newItemName', '')
			socket.emit('newItem', listId, editKey, name, handleErrorOrList)
		}
	})

	ractive.on('addCheckbox', function(event) {
		var itemId = event.node.dataset.itemId
		socket.emit('addCheckbox', listId, itemId, editKey, handleErrorOrList)
	})
	ractive.on('removeCheckbox', function(event) {
		var itemId = event.node.dataset.itemId
		socket.emit('removeCheckbox', listId, itemId, editKey, handleErrorOrList)
	})

	ractive.on('editItem', function(event) {
		ractive.set('editingItem', true)
	})

	ractive.on('saveItem', function(event) {
		var item = event.context
		socket.emit('editItem', listId, editKey, item.id, item)
		ractive.set('editingItem', false)
	})

	ractive.on('save', function() {
		var itemId = event.node.dataset.itemId
		if (itemId) {
			var item = ractive.get('list').items.find(function(item) {
				return item.id === itemId
			})
			if (item) {
				socket.emit('editItem', listId, editKey, item)
			}
		}
	})

	ractive.on('editName', editName)

	socket.emit('getList', listId, handleErrorOrList)

	if (ractive.get('currentName') === 'Anonymous') {
		var el = ractive.find('.current-name')
		el.focus()
		el.select()
	}
}
