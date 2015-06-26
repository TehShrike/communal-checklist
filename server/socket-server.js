require('array.prototype.find')
require('array.prototype.findindex')

var level = require('level-mem')
var db = level('woot', {
	valueEncoding: 'json'
})
var uuid = require('uuid-v4')

function newList() {
	return {
		id: uuid(),
		editKey: uuid(),
		items: [],
		other: {}
	}
}

function newItem() {
	return {
		id: uuid(),
		name: '',
		url: '',
		checkedBy: [],
		checkboxes: 1
	}
}

function noop() {}

function cbFn(cb) {
	return typeof cb === 'function' ? cb : noop
}

function getAndSave(listId, changerFn, cb) {
	cb = cbFn(cb)
	db.get(listId, function(err, value) {
		if (err) {
			cb(err)
		} else {
			var savedValue = changerFn(value)
			db.put(listId, savedValue, function(err) {
				cb(err, savedValue)
			})
		}
	})
}

function addItemAndReturnList(listId, editKey, cb) {
	getAndSave(listId, function(list) {
		if (list.editKey === editKey) {
			list.items.push(newItem())
		}
		return list
	}, cbFn(cb))
}

function editItem(listId, editKey, itemId, item, cb) {
	getAndSave(listId, function(list) {
		if (list.editKey === editKey) {
			var storageItem = list.items.find(function(item) {
				return item.id === itemId
			})

			if (storageItem) {
				storageItem.name = item.name
				storageItem.url = item.url
				storageItem.checkboxes = item.checkboxes
			}
		}

		return list
	}, cbFn(cb))
}

function checkItem(listId, itemId, checkedBy, cb) {
	getAndSave(listId, function(list) {
		var item = items.find(function(item) {
			return item.id === itemId
		})

		if (item.checkedBy.length < item.checkboxes) {
			item.checkedBy.push(checkedBy)
		}

		return items
	}, cbFn(cb))
}

function unheckItem(listId, itemId, checkedBy, cb) {
	getAndSave(listId, function(list) {
		var item = list.items.find(function(item) {
			return item.id === itemId
		})

		if (item) {
			var indexToRemove = item.checkedBy.findIndex(function(name) {
				return name.toLowerCase() === checkedBy.toLowerCase()
			})

			if (indexToRemove >= 0) {
				item.checkedBy.splice(indexToRemove, 1)
			}
		}

		return list
	}, cbFn(cb))
}

function saveNewList(cb) {
	var list = newList()
	db.put(list.id, list, function(err) {
		cbFn(cb)(err, list)
	})
}

function overwriteListMetadata(listId, editKey, other, cb) {
	getAndSave(listId, function(list) {
		console.log('saving', listId)
		if (editKey === list.editKey) {
			console.log('edit key matched!')
			list.other = other
		}
		return list
	}, cbFn(cb))
}

function wrapCallbackWithBroadcast(socket, cb) {
	return function(err, value) {
		if (!err) {
			socket.broadcast.to(listId).emit(message, value)
		}

		if (typeof cb === 'function') {
			cb(err, value)
		}
	}
}

function getList(listId, cb) {
	db.get(listId, function(err, list) {
		if (err) {
			cb(err.message)
		} else {
			delete list.editKey
			cb(null, list)
		}
	})
}

function addAnotherCallback(args, withThisCallback) {
	args = args.slice()
	var originalCallback = args[args.length - 1]

	function callbackToPassIn() {
		console.log('silly callback called with', arguments)
		try {
			withThisCallback.apply(null, arguments)
		} catch (e) {
			console.error(e)
		}
		if (typeof originalCallback === 'function') {
			originalCallback.apply(null, arguments)
		}
	}

	if (typeof originalCallback === 'function') {
		args[args.length - 1] = callbackToPassIn
	} else {
		args.push(callbackToPassIn)
	}

	console.log('new arguments', args)
	return args
}

function returnSocketEventHandler(message, socket, fn) {
	return function socketEventHandler() {
		console.log('received message', message, arguments)
		var args = Array.prototype.slice.call(arguments)
		var listId = args[0]
		console.log('ARG', args)
		if (listId) {
			fn.apply(null, addAnotherCallback(args, function(err, value) {
				console.log('callback came back', value)
				if (!err) {
					socket.broadcast.to(listId).emit(message, value)
				}
			}))
		}
	}
}

function watchAndRebroadcastToList(message, socket, fn) {
	socket.on(message, returnSocketEventHandler(message, socket, fn))
}

module.exports = function handleUserConnection(socket) {
	socket.on('newList', saveNewList)

	socket.on('getList', getList)

	watchAndRebroadcastToList('newItem', socket, addItemAndReturnList)

	watchAndRebroadcastToList('editItem', socket, editItem)

	watchAndRebroadcastToList('checkItem', socket, checkItem)

	watchAndRebroadcastToList('unheckItem', socket, unheckItem)

	watchAndRebroadcastToList('overwriteListMetadata', socket, overwriteListMetadata)
}
