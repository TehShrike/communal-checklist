var Ractive = require('ractive')
var listTemplate = require('fs').readFileSync('client/list.html', { encoding: 'utf8' })
var socket = require('./socket')
var router = require('./router')
var copy = require('shallow-copy')

module.exports = function(listId, editKey) {
	var canEdit = !!editKey
	var ractive = new Ractive({
		el: 'body',
		template: listTemplate,
		data: {
			canEdit: canEdit
		}
	})

	function handleList(list) {
		list.items.forEach(function(item) {
			item.viewCheckbxes = transformListItemIntoCheckboxes(item)
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

	ractive.on('nameChange', function() {
		ractive.set('editingName', false)
		socket.emit('overwriteListMetadata', listId, editKey, ractive.get('list.other'), handleErrorOrList)
	})

	ractive.on('newItem', function() {
		var name = ractive.get('newItemName')
		if (name) {
			ractive.set('newItemName', '')
			socket.emit('newItem', listId, editKey, name, handleErrorOrList)
		}
	})

	function editName() {
		if (canEdit) {
			ractive.set('editingName', true)
			ractive.find('input.listName').select()
		}
	}

	ractive.on('editName', editName)

	socket.emit('getList', listId, handleErrorOrList)
}

function transformListItemIntoCheckboxes(listItem) {
	var checklist = listItem.checkedBy.map(function(checkedByName) {
		return {
			checkedBy: checkedByName
		}
	})

	while (checklist.length < listItem.checkboxes) {
		checklist.push({})
	}

	return checklist
}
