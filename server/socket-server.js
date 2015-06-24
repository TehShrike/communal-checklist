require('array.prototype.find')
require('array.prototype.findindex')

var level = require('level-mem')
var db = level('woot')
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

function getAndSave(listId, changerFn, cb) {
	db.get(listId, function(err, value) {
		if (err) {
			cb(err)
		} else {
			db.put(listId, changerFn(value), cb)
		}
	})
}

function addItemAndReturnList(listId, editKey, cb) {
	getAndSave(listId, function(list) {
		if (list.editKey === editKey) {
			list.items.push(newItem())
		}
		return list
	}, cb)
}

function editItem(listId, editKey, itemId, item) {
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
	})
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
	}, cb)
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
	}, cb)
}

function saveNewList(cb) {
	var list = newList()
	db.put(list.id, list, function(err) {
		cb(err, list)
	})
}

function overwriteOther(listId, editKey, other, cb) {
	getAndSave(listId, function(list) {
		if (editKey === list.editKey) {
			list.other = other
		}
		return list
	}, cb)
}

module.exports = function(io) {

}
