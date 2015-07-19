var Ractive = require('ractive')
var state = require('./client-state')
var template = require('fs').readFileSync('client/item.html', { encoding: 'utf8' })

module.exports = Ractive.extend({
	template: template,
	oninit: function() {
		handleItemComponent(this)
	}
})

function handleItemComponent(component) {
	var emitListChange = component.get('emitListChange')

	component.on('addCheckbox', function(event) {
		var itemId = event.node.dataset.itemId
		emitListChange('addCheckbox', itemId, editKey)
	})
	component.on('removeCheckbox', function(event) {
		var itemId = event.node.dataset.itemId
		emitListChange('removeCheckbox', itemId, editKey)
	})

	component.on('editItem', function(event) {
		component.set(event.keypath + '.editingItem', true)
	})

	component.on('saveItem', function(event) {
		var item = event.context
		emitListChange('editItem', editKey, item.id, item)
		component.set(event.keypath + '.editingItem', false)
	})

	component.on('checkboxClicked', function(event) {
		var checkbox = event.context
		var checked = event.node.checked
		var itemId = event.node.dataset.itemId
		var name = component.get('currentName')

		emitListChange(checked ? 'check' : 'uncheck', itemId, checkbox.id, name)
	})
}
