var createMutex = require('read-write-lock')
var KeyMaster = require('key-master')
require('array.prototype.find')
require('array.prototype.findindex')
var levelup = require('levelup')
var uuid = require('random-uuid-v4')
var storage = require('leveldown')
// var storage = require('memdown')

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

function createNewList() {
	return {
		id: uuid(),
		editKey: uuid(),
		categories: [ createNewCategory('Default category') ],
		other: {},
		version: 0
	}
}

function createNewCategory(name) {
	return {
		id: uuid(),
		name: name || '',
		description: '',
		items: []
	}
}

function createNewItem(name) {
	return {
		id: uuid(),
		name: name || '',
		url: '',
		checkboxes: [ createNewCheckbox() ]
	}
}

function createNewCheckbox() {
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

function addCheckbox(checkbox, cb) {
	getAndSave(checkbox.listId, checkbox.version, function(list) {
		var item = getItem(list, checkbox.categoryId, checkbox.itemId)

		if (list.editKey === checkbox.editKey && item) {
			item.checkboxes.push(createNewCheckbox())
		}
		return list
	}, cb)
}

function removeCheckbox(checkbox, cb) {
	getAndSave(checkbox.listId, checkbox.version, function(list) {
		var item = getItem(list, checkbox.categoryId, checkbox.itemId)

		if (item && item.checkboxes.length > 0 && list.editKey === checkbox.editKey) {
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

function check(checkbox, cb) {
	getAndSave(checkbox.listId, checkbox.version, function(list) {
		var existingCheckbox = getCheckboxFromList(list, checkbox.categoryId, checkbox.itemId, checkbox.checkboxId)
		if (!existingCheckbox.checkedBy) {
			existingCheckbox.checkedBy = normalizeUserName(checkbox.name)
		}

		return list
	}, cb)
}

function uncheck(checkbox, cb) {
	getAndSave(checkbox.listId, checkbox.version, function(list) {
		var existingCheckbox = getCheckboxFromList(list, checkbox.categoryId, checkbox.itemId, checkbox.checkboxId)
		if (existingCheckbox.checkedBy === normalizeUserName(checkbox.name)) {
			existingCheckbox.checkedBy = null
		}

		return list
	}, cb)
}

function addCategoryAndReturnList(newCategory, cb) {
	getAndSave(newCategory.listId, newCategory.version, function(list) {
		if (list.editKey === newCategory.editKey) {
			list.categories.push(createNewCategory(newCategory.name))
		}
		return list
	}, cb)
}

function editCategory(category, cb) {
	getAndSave(category.listId, category.version, function(list) {
		if (list.editKey === category.editKey) {

			var existingCategory = getCategory(list, category.categoryId)

			if (existingCategory) {
				existingCategory.name = category.name
				existingCategory.description = category.description
			}
		}
		return list
	}, cb)
}

function addItemAndReturnList(item, cb) {
	getAndSave(item.listId, item.version, function(list) {
		if (list.editKey === item.editKey) {
			var category = getCategory(list, item.categoryId)

			if (category) {
				category.items.push(createNewItem(item.name))
			}
		}

		return list
	}, cb)
}

function removeCategory(category, cb) {
	getAndSave(category.listId, category.version, function(list) {
		if (list.editKey === category.editKey) {
			removeFromArray(list.categories, function(existingCategory) {
				return existingCategory.id === category.categoryId
			})
		}

		return list
	}, cb)
}

function removeItem(item, cb) {
	getAndSave(item.listId, item.version, function(list) {
		if (list.editKey === item.editKey) {
			var category = getCategory(list, item.categoryId)

			if (category) {
				removeFromArray(category.items, function(existingItem) {
					return existingItem.id === item.itemId
				})
			}
		}

		return list
	}, cb)
}

function editItem(itemHolder, cb) {
	getAndSave(itemHolder.listId, itemHolder.version, function(list) {
		if (list.editKey === itemHolder.editKey) {
			var item = itemHolder.item
			var storageItem = getItem(list, itemHolder.categoryId, itemHolder.itemId)

			if (storageItem) {
				storageItem.name = item.name
				storageItem.url = item.url
			}
		}

		return list
	}, cb)
}

function saveNewList(cb) {
	var list = createNewList()
	db.put(list.id, list, function(err) {
		cbFn(cb)(err && err.message, list)
	})
}

function overwriteListMetadata(list, cb) {
	getAndSave(list.listId, list.version, function(existingList) {
		if (list.editKey === existingList.editKey) {
			existingList.other = list.other
		}
		return existingList
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

function returnSocketEventHandler(socket, fn) {
	return function socketEventHandler(object, cb) {
		var newCb = cb
		var listId = object.listId

		if (listId) {
			newCb = function(err, value) {
				if (!err) {
					socket.broadcast.to(listId).emit('change', value)
				}
				cb(err, value)
			}
		}

		fn(object, newCb)
	}
}

module.exports = function handleUserConnection(socket) {
	socket.on('newList', saveNewList)

	socket.on('getList', function(listId, cb) {
		socket.join(listId)
		getList(listId, cb)
	})

	function watchAndRebroadcastToList(message, fn) {
		socket.on(message, returnSocketEventHandler(socket, fn))
	}

	watchAndRebroadcastToList('addCheckbox', addCheckbox)

	watchAndRebroadcastToList('removeCheckbox', removeCheckbox)

	watchAndRebroadcastToList('newCategory', addCategoryAndReturnList)

	watchAndRebroadcastToList('editCategory', editCategory)

	watchAndRebroadcastToList('newItem', addItemAndReturnList)

	watchAndRebroadcastToList('removeCategory', removeCategory)

	watchAndRebroadcastToList('removeItem', removeItem)

	watchAndRebroadcastToList('editItem', editItem)

	watchAndRebroadcastToList('check', check)

	watchAndRebroadcastToList('uncheck', uncheck)

	watchAndRebroadcastToList('overwriteListMetadata', overwriteListMetadata)
}
