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

	function handleList(list) {

		list.items.forEach(function(item, index) {
			item.itemId = item.id
			item.checkboxes.forEach(function(checkbox) {
				checkbox.checked = !!checkbox.checkedBy
			})
		})

		ractive.set('list', list)
	}

	function handleErrorOrList(err, list) {
		if (err && list) {
			ractive.set('warning', err)
		} else if (err) {
			ractive.set('error', err)
		}

		// Concurrency errors send back a correct copy of the list
		if (list) {
			handleList(list)
		}
	}

	function emitListChange() {
		ractive.set('error', null)
		ractive.set('warning', null)
		var args = Array.prototype.slice.call(arguments)
		args.splice(1, 0, listId, currentVersion())
		ractive.set('list.version', currentVersion() + 1) // It's called "optimistic" concurrency for a reason
		args.push(handleErrorOrList)
		socket.emit.apply(socket, args)
	}

	function currentVersion() {
		return ractive.get('list.version')
	}

	ractive.on('changeUserName', function() {
		db.put('currentName', ractive.get('currentName'))
	})

	ractive.on('checkboxClicked', function(event) {
		var checkbox = event.context
		var checked = event.node.checked
		var itemId = event.node.dataset.itemId
		var name = ractive.get('currentName')

		emitListChange(checked ? 'check' : 'uncheck', itemId, checkbox.id, name)
	})

	ractive.on('nameChange', function() {
		ractive.set('editingName', false)

		emitListChange('overwriteListMetadata', editKey, ractive.get('list.other'))
	})

	ractive.on('nameKillFocus', function() {
		ractive.set('editingName', false)
	})

	ractive.on('newItem', function() {
		var name = ractive.get('newItemName')
		if (name) {
			ractive.set('newItemName', '')
			emitListChange('newItem', editKey, name)
		}
	})

	ractive.on('addCheckbox', function(event) {
		var itemId = event.node.dataset.itemId
		emitListChange('addCheckbox', itemId, editKey)
	})
	ractive.on('removeCheckbox', function(event) {
		var itemId = event.node.dataset.itemId
		emitListChange('removeCheckbox', itemId, editKey)
	})

	ractive.on('editItem', function(event) {
		ractive.set('editingItem', true)
	})

	ractive.on('saveItem', function(event) {
		var item = event.context
		emitListChange('editItem', editKey, item.id, item)
		ractive.set('editingItem', false)
	})

	ractive.on('editName', editName.bind(null, ractive))

	socket.emit('getList', listId, function(err, list) {
		handleErrorOrList(err, list)
		if (!err) {
			onLoad(ractive)
		}
	})
}

function onLoad(ractive) {
	if (ractive.get('currentName') === 'Anonymous') {
		if (list.other.name) {
			var el = ractive.find('.current-name')
			el.focus()
			el.select()
		} else {
			editName(ractive)
		}
	}
}

function editName(ractive) {
	if (ractive.get('canEdit')) {
		ractive.set('editingName', true)
		ractive.find('input.listName').select()
	}
}

