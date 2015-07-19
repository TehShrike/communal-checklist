var Ractive = require('ractive')
var listTemplate = require('fs').readFileSync('client/list.html', { encoding: 'utf8' })
var socket = require('./socket')
var router = require('./router')
var copy = require('shallow-copy')
var state = require('./client-state')
Ractive.decorators.selectOnFocus = require('ractive-select-on-focus')

var db = state.db
var socket = state.socket


function handleList(ractive, list) {

	list.categories.forEach(function(category, index) {
		category.categoryId = category.id

		category.items.forEach(function(item, index) {
			item.itemId = item.id
			item.checkboxes.forEach(function(checkbox) {
				checkbox.checked = !!checkbox.checkedBy
			})
		})
	})

	console.log('setting list to', list)

	ractive.set('list', list)
}

module.exports = function(listId, editKey) {
	function handleErrorOrList(err, list) {
		console.log('got back err/list', err, list)
		if (err && list) {
			ractive.set('warning', err)
		} else if (err) {
			ractive.set('error', err)
		}

		// Concurrency errors send back a correct copy of the list
		if (list) {
			handleList(ractive, list)
		}
	}

	function emitListChange() {
		ractive.set('error', null)
		ractive.set('warning', null)
		var args = Array.prototype.slice.call(arguments)
		args.splice(1, 0, listId, ractive.get('list.version'))
		args.push(handleErrorOrList)
		console.log('emitting', args)
		socket.emit.apply(socket, args)
	}

	var ractive = new Ractive({
		el: 'body',
		template: listTemplate,
		data: {
			canEdit: !!editKey,
			currentName: 'Anonymous',
			newItemName: '',
			shareUrl: window.location.origin + window.location.pathname + '#/list/' + listId,
			emitListChange: emitListChange,
			editKey: editKey
		},
		components: {
			category: require('./category')
		},
		beginEditingName: function() {
			beginEditingName(this)
		},
		changeUserName: function() {
			var ractive = this
			var name = ractive.get('currentName')
			db.put('currentName', name)
			var metadata = ractive.get('list.other')
			metadata.name = name
			emitListChange('overwriteListMetadata', editKey, metadata)
		},
		saveNameChange: function() {
			var ractive = this
			ractive.set('editingName', false)

			emitListChange('overwriteListMetadata', editKey, ractive.get('list.other'))
		}
	})

	db.get('currentName', function(err, currentName) {
		if (!err) {
			ractive.set('currentName', currentName)
		} else if (!err.notFound) {
			throw err
		}
	})

	ractive.on('addNewCategory', function() {

	})

	socket.emit('getList', listId, function(err, list) {
		handleErrorOrList(err, list)
		if (!err) {
			onLoad(ractive)
		}
	})

	socket.on('change', function(list) {
		if (list.id === listId) {
			handleList(ractive, list)
		}
	})
}

function onLoad(ractive) {
	if (!ractive.get('list.other.name')) {
		beginEditingName(ractive)
	} else if (ractive.get('currentName') === 'Anonymous') {
		ractive.find('.current-name').select()
	}
}

function beginEditingName(ractive) {
	if (ractive.get('canEdit')) {
		ractive.set('editingName', true)
		ractive.find('input.listName').select()
	}
}
