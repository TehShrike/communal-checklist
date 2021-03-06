var Ractive = require('ractive')
var copy = require('shallow-copy')
var extend = require('xtend')

var router = require('./router')
var state = require('./client-state')

Ractive.decorators.selectOnFocus = require('ractive-select-on-focus')
var listTemplate = require('fs').readFileSync('client/list.html', { encoding: 'utf8' })

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

	ractive.set('list', list)
}

module.exports = function(listId, editKey) {
	function handleErrorOrList(err, list) {
		if (err && list) {
			ractive.set('warning', err)
		} else if (err) {
			ractive.set('error', err)
		}

		// console.log('got back', list)

		// Concurrency errors send back a correct copy of the list
		if (list) {
			handleList(ractive, list)
		}
	}

	function emitListChange(key, object, cb) {
		ractive.set('error', null)
		ractive.set('warning', null)

		// console.log(key, extend({
		// 	listId: listId,
		// 	editKey: editKey,
		// 	version: ractive.get('list.version')
		// }, object))

		socket.emit(key, extend({
			listId: listId,
			editKey: editKey,
			version: ractive.get('list.version')
		}, object), function(err, list) {
			handleErrorOrList(err, list)
			if (!err && cb) {
				cb(list)
			}
		})
	}

	var ractive = new Ractive({
		el: 'body',
		template: listTemplate,
		data: {
			canEdit: !!editKey,
			currentName: 'Anonymous',
			newItemName: '',
			shareUrl: everythingBeforeTheHash(window.location.href) + '#/list/' + listId,
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
		},
		saveListNameChange: function() {
			var ractive = this
			ractive.set('editingName', false)

			emitListChange('overwriteListMetadata', { other: ractive.get('list.other') })
		},
		saveNewCategory: function(name) {
			var ractive = this
			ractive.set({
				newCategoryName: '',
				addingCategory: false
			})

			if (name) {
				emitListChange('newCategory', { name: name }, function() {
					scrollToLastCategory(ractive)
				})
			}
		}
	})

	db.get('currentName', function(err, currentName) {
		if (!err) {
			ractive.set('currentName', currentName)
		} else if (!err.notFound) {
			throw err
		}
	})

	ractive.on('startAddingCategory', function() {
		ractive.set('addingCategory', true)
		ractive.find('input.newCategoryName').select()
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

function scrollToLastCategory(ractive) {
	var categories = ractive.findAll('.category-row')

	if (categories.length > 0) {
		var category = categories[categories.length - 1]
		category.scrollIntoView()

		var inputs = ractive.findAll('input[type="text"]')
		inputs[inputs.length - 1].focus()
	}
}

function everythingBeforeTheHash(url) {
	var hashIndex = url.indexOf('#')
	return hashIndex === -1 ? url : url.substring(0, hashIndex)
}
