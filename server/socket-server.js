var createMutex = require('read-write-lock')
var KeyMaster = require('key-master')
require('array.prototype.find')
require('array.prototype.findindex')
var levelup = require('levelup')
var uuid = require('random-uuid-v4')
// var storage = require('leveldown')
var storage = require('memdown')

var listMutexes = KeyMaster(createMutex)

var db = levelup('./leveldb-storage', {
	db: storage,
	valueEncoding: 'json'
})

function removeFromArray(ary, comparator) {
	var indexToRemove = ary.findIndex(comparator)

	if (indexToRemove >= -1) {
		ary.splice(indexToRemove, 1)
	}
}

function newList() {
	return {
		id: uuid(),
		editKey: uuid(),
		categories: [ newCategory('Dummy name') ],
		other: {},
		version: 0
	}
}

function newCategory(name) {
	return {
		id: uuid(),
		name: name || '',
		items: []
	}
}

function newItem(name) {
	return {
		id: uuid(),
		name: name || '',
		url: '',
		checkboxes: []
	}
}

function newCheckbox() {
	return {
		id: uuid(),
		checkedBy: null
	}
}

function getCategory(list, categoryId) {
	return list.categories.find(function(category) {
		return category.id === categoryId
	})
}

function getItem(list, categoryId, itemId) {
	var category = getCategory(list, categoryId)
	if (category) {
		return category.items.find(function(item) {
			return item.id === itemId
		})
	}
}

function getCheckbox(item, checkboxId) {
	return item.checkboxes.find(function(checkbox) {
		return checkbox.id === checkboxId
	})
}

function getCheckboxFromList(list, categoryId, itemId, checkboxId) {
	var item = getItem(list, categoryId, itemId)

	if (item) {
		return getCheckbox(item, checkboxId)
	}
}

function noop() {}

function cbFn(cb) {
	return typeof cb === 'function' ? cb : noop
}

function newError(message, type) {
	var err = new Error(message)
	err[type] = true
	return err
}

function getAndSave(listId, version, changerFn, cb) {
	listMutexes.get(listId).writeLock(function(release) {
		cb = cbFn(cb)
		db.get(listId, function(err, list) {
			if (err) {
				release()
				cb(err.message)
			} else if (typeof list.version === 'number' && list.version !== version) {
				release()
				cb('Someone else beat you to saving the list', list)
			} else {
				var newVersion = (list.version || 0) + 1
				var newListToSave = changerFn(list)
				if (newListToSave) {
					newListToSave.version = newVersion
					db.put(listId, newListToSave, function(err) {
						release()
						cb(err && err.message, newListToSave)
					})
				} else {
					cb(null, list)
				}
			}
		})
	})
}

function addCheckbox(listId, version, categoryId, itemId, editKey, cb) {
	getAndSave(listId, version, function(list) {
		var item = getItem(list, categoryId, itemId)
		if (list.editKey === editKey && item) {
			item.checkboxes.push(newCheckbox())
		}
		return list
	}, cb)
}

function removeCheckbox(listId, version, categoryId, itemId, editKey, cb) {
	getAndSave(listId, version, function(list) {
		var item = getItem(list, categoryId, itemId)

		if (item && item.checkboxes.length > 0 && list.editKey === editKey) {
			var indexToRemove = item.checkboxes.findIndex(function(checkbox) {
				return !checkbox.checkedBy
			})

			if (indexToRemove === -1) {
				indexToRemove = item.checkboxes.length - 1
			}
			item.checkboxes.splice(indexToRemove, 1)
		}

		return list
	}, cb)
}

function normalizeUserName(userName) {
	return userName || 'Anonymous'
}

function check(listId, version, itemId, checkboxId, userName, cb) {
	getAndSave(listId, version, function(list) {
		var checkbox = getCheckboxFromList(list, itemId, checkboxId)
		if (!checkbox.checkedBy) {
			checkbox.checkedBy = normalizeUserName(userName)
		}

		return list
	}, cb)
}

function uncheck(listId, version, itemId, checkboxId, userName, cb) {
	getAndSave(listId, version, function(list) {
		var checkbox = getCheckboxFromList(list, itemId, checkboxId)
		if (checkbox.checkedBy === normalizeUserName(userName)) {
			checkbox.checkedBy = null
		}

		return list
	}, cb)
}

function addCategoryAndReturnList(listId, version, editKey, categoryName, cb) {
	getAndSave(listId, version, function(list) {
		if (list.editKey === editKey) {
			list.categories.push(newCategory(categoryName))
		}
		return list
	}, cb)
}

function editCategory(listId, version, categoryId, editKey, categoryName, cb) {
	getAndSave(listId, version, function(list) {
		if (list.editKey === editKey) {

			var category = getCategory(list, categoryId)

			if (category) {
				category.name = categoryName
			}
		}
		return list
	}, cb)
}

function addItemAndReturnList(listId, version, categoryId, editKey, itemName, cb) {
	getAndSave(listId, version, function(list) {
		if (list.editKey === editKey) {
			var category = getCategory(list, categoryId)

			if (category) {
				category.items.push(newItem(itemName))
			}
		}

		return list
	}, cb)
}

function removeCategory(listId, version, editKey, categoryId, cb) {
	getAndSave(listId, version, function(list) {
		if (list.editKey === editKey) {
			removeFromArray(list.categories, function(category) {
				return category.id === categoryId
			})
		}

		return list
	}, cb)
}

function removeItem(listId, version, editKey, categoryId, itemId, cb) {
	getAndSave(listId, version, function(list) {
		if (list.editKey === editKey) {
			var category = getCategory(list, categoryId)

			if (category) {
				removeFromArray(category.items, function(item) {
					return item.id === itemId
				})
			}
		}

		return list
	}, cb)
}

function editItem(listId, version, editKey, categoryId, itemId, item, cb) {
	getAndSave(listId, version, function(list) {
		if (list.editKey === editKey) {
			var storageItem = getItem(list, categoryId, itemId)

			if (storageItem) {
				storageItem.name = item.name
				storageItem.url = item.url
				storageItem.checkboxes = item.checkboxes
			}
		}

		return list
	}, cb)
}

function saveNewList(cb) {
	var list = newList()
	db.put(list.id, list, function(err) {
		cbFn(cb)(err && err.message, list)
	})
}

function overwriteListMetadata(listId, version, editKey, other, cb) {
	getAndSave(listId, version, function(list) {
		if (editKey === list.editKey) {
			list.other = other
		}
		return list
	}, cb)
}

function getList(listId, cb) {
	listMutexes.get(listId).readLock(function(release) {
		db.get(listId, function(err, list) {
			release()
			if (err) {
				cb(err.message)
			} else {
				delete list.editKey
				cb(null, list)
			}
		})
	})
}

function addAnotherCallback(args, withThisCallback) {
	args = args.slice()
	var originalCallback = args[args.length - 1]

	function callbackToPassIn() {
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

	return args
}

function returnSocketEventHandler(socket, fn) {
	return function socketEventHandler() {
		var args = Array.prototype.slice.call(arguments)
		var listId = args[0]

		if (listId) {
			fn.apply(null, addAnotherCallback(args, function(err, value) {
				if (!err) {
					socket.broadcast.to(listId).emit('change', value)
				}
			}))
		}
	}
}

function watchAndRebroadcastToList(message, socket, fn) {
	socket.on(message, returnSocketEventHandler(socket, fn))
}

module.exports = function handleUserConnection(socket) {
	socket.on('newList', saveNewList)

	socket.on('getList', function(listId, cb) {
		socket.join(listId)
		getList(listId, cb)
	})

	watchAndRebroadcastToList('addCheckbox', socket, addCheckbox)

	watchAndRebroadcastToList('removeCheckbox', socket, removeCheckbox)

	watchAndRebroadcastToList('newCategory', socket, addCategoryAndReturnList)

	watchAndRebroadcastToList('editCategory', socket, editCategory)

	watchAndRebroadcastToList('newItem', socket, addItemAndReturnList)

	watchAndRebroadcastToList('removeCategory', socket, removeCategory)

	watchAndRebroadcastToList('removeItem', socket, removeItem)

	watchAndRebroadcastToList('editItem', socket, editItem)

	watchAndRebroadcastToList('check', socket, check)

	watchAndRebroadcastToList('uncheck', socket, uncheck)

	watchAndRebroadcastToList('overwriteListMetadata', socket, overwriteListMetadata)
}
